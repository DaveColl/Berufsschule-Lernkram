/* Qualitätsprüfung für die Lernspiele.
   Aufruf:  node tools/check.js [fach-ordner] [--dump]
   Beispiel: node tools/check.js cyberphysische-systeme
   - erzeugt jede dynamische Aufgabe 60x und jede statische 1x
   - meldet Formulierungs- und Logikfehler (Exit-Code 1 bei Fehlern)
   - --dump gibt je Aufgabe ein Beispiel lesbar aus (für die manuelle/Agenten-Prüfung) */
const fs=require('fs'),vm=require('vm'),path=require('path');
const dir=path.resolve(process.argv.find((a,i)=>i>1&&!a.startsWith('--'))||'cyberphysische-systeme');
const dump=process.argv.includes('--dump');
const ctx=vm.createContext({console,Math,Set,Array,Object,JSON,String,RegExp});
for(const f of ['fragen1.js','fragen2.js','fragen3.js','generator.js']){
  const p=path.join(dir,f);if(!fs.existsSync(p))continue;
  vm.runInContext(fs.readFileSync(p,'utf8'),ctx,{filename:f});
}
const Q=vm.runInContext('Q',ctx);
const raw=s=>String(s).trim().toLowerCase().replace(/\s+/g,' ');
const norm=s=>String(s).toLowerCase().replace(/[^a-z0-9äöüß]/g,'');
const stripQuotes=s=>s.replace(/„[^“]*“/g,'„“').replace(/\([^)]*\)/g,'()');
const QW=/^(welche[rsmn]?|was|wie|wer|wo|wofür|warum|wann|wozu|wodurch|womit|woran|wieso|stimmt|ist|sind|kann|können)(?![\p{L}])/iu;
const errs=[],warns=[];let n=0;
const reEsc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
/* Steht die Antwort als eigenes Wort in der Frage? (Klammer-Themen und Zitate des Themas zählen nicht) */
function leaks(ans,qt){
  const t=qt.replace(/\([^)]*\)/g,' ');const a=String(ans).trim();
  if(norm(a).length<4)return false;
  return new RegExp('(^|[^\\p{L}\\d])'+reEsc(a)+'($|[^\\p{L}\\d])','iu').test(t);
}
const E=(e,q,m)=>errs.push(`[${e.id||e.k}] ${m}\n     → ${String(q.q).slice(0,150)}`);
const W=(e,q,m)=>warns.push(`[${e.id||e.k}] ${m}\n     → ${String(q.q).slice(0,150)}`);
function lint(e,q){
  n++;
  const txt=[q.q,q.text,...(q.o||[]),...(q.c||[]),...(q.w||[]),...(q.items||[]),...((q.p||[]).flat()),...(q.a&&Array.isArray(q.a)?q.a:[])].filter(x=>typeof x==='string');
  if(txt.some(x=>/undefined|NaN|\[object|null/.test(x)))E(e,q,'enthält undefined/NaN/null');
  if(!q.q||String(q.q).trim().length<6)E(e,q,'Fragetext fehlt');
  if(String(q.q).length>320)W(e,q,'Fragetext sehr lang');
  /* Vorlagen-Fehler: verschachtelte Klammern, doppelte Signalwörter, Frage im Zuordnungs-Thema */
  if(/\([^)]*\(/.test(String(q.q)))E(e,q,'verschachtelte Klammern');
  if((String(q.q).match(/Szenario/g)||[]).length>1)E(e,q,'„Szenario“ steht doppelt im Fragetext');
  if(/Zuordnung \([^)]*\?\)/.test(String(q.q)))E(e,q,'Zuordnungs-Thema ist als Frage formuliert');
  if(/\?[.:,;]/.test(String(q.q)))E(e,q,'„?“ direkt gefolgt von Satzzeichen (Frage in Vorlage eingesetzt)');
  /* doppelter Doppelpunkt nach dem Einsetzen: „Begriff: Präfix: …“ */
  const dc=x=>/^[^:]{1,45}: [^:]{1,45}: /.test(String(x));
  if([q.q,...(q.o||[]),...((q.p||[]).flat())].some(dc))E(e,q,'doppelter Doppelpunkt („Begriff: Präfix: …“)');
  const sq=stripQuotes(String(q.q));
  if(/\?\s+(?!Wähle|Nenne|Ordne|Gib|Beschreibe|Erkläre)[A-ZÄÖÜ„]/.test(sq))E(e,q,'mehrere Fragesätze hintereinander (…? Satz)');
  if(q.t==='tf'){
    if(QW.test(String(q.q).trim())||/\?\s*$/.test(String(q.q)))E(e,q,'Wahr/Falsch-Aufgabe ist als Frage formuliert statt als Aussage');
    if(typeof q.a!=='boolean')E(e,q,'tf ohne boolean');
  }
  if(q.t==='mc'){
    if(!q.o||q.o.length<2)E(e,q,'mc mit <2 Optionen');
    else{
      const nn=q.o.map(raw);if(new Set(nn).size!==nn.length)E(e,q,'doppelte Antwortoptionen: '+q.o.join(' | '));
      if(q.o.some(x=>!String(x).trim()))E(e,q,'leere Option');
      if(q.o.some(x=>String(x).length>260))W(e,q,'sehr lange Option');
      if(!/Ampel/.test(q.q)&&q.o[0]&&q.o[0].length<30&&leaks(q.o[0],q.q))W(e,q,'richtige Antwort steht schon in der Frage (verrät sich?)');
    }
  }
  if(q.t==='ms'){
    if(!q.c||!q.c.length||!q.w||!q.w.length)E(e,q,'ms ohne richtige/falsche Optionen');
    else{const all=[...q.c,...q.w].map(raw);if(new Set(all).size!==all.length)E(e,q,'ms: doppelte/überlappende Optionen');}
  }
  if(q.t==='mt'){
    const L=q.p.map(p=>raw(p[0])),R=[...new Set(q.p.map(p=>p[1]))];
    if(new Set(L).size!==L.length)E(e,q,'mt: doppelte linke Einträge');
    if(R.length<2)E(e,q,'mt: nur eine mögliche Zielkategorie');
    if(q.p.length<3)W(e,q,'mt mit <3 Paaren');
  }
  if(q.t==='od'){
    if(q.items.length<3)W(e,q,'od mit <3 Schritten');
    if(new Set(q.items.map(raw)).size!==q.items.length)E(e,q,'od: doppelte Einträge');
  }
  if(q.t==='tx'){
    if(!q.a||!q.a.length||q.a.some(a=>!norm(a)))E(e,q,'tx ohne gültige Antwort');
    else if(q.gen&&leaks(q.a[0],q.q))W(e,q,'Tippaufgabe verrät die Antwort in der Frage');
  }
  /* „Tippe den Begriff“: Abkürzung UND Langform müssen als richtig gelten (z. B. LWT / Last Will Testament) */
  if(q.t==='tx'&&q.gen&&/^Tippe/.test(String(q.q))&&e.full&&!q.a.includes(e.full))E(e,q,'tx akzeptiert die Langform nicht: '+e.full);
  if(q.t==='fr'&&(!q.m||!q.pts||!q.pts.length))E(e,q,'fr ohne Musterlösung/Kernpunkte');
  if(q.t==='cz'){
    const ans=[...q.text.matchAll(/\{([^}]+)\}/g)].map(m=>m[1]);
    if(!ans.length)E(e,q,'Lückentext ohne Lücken');
  }
}
const ids=new Map(),samples=[];
for(const e of Q){
  const reps=e.t==='gen'?60:1;
  if(e.t!=='gen'){const id=e.t+'|'+e.q+'|'+(e.text||'');if(ids.has(id))errs.push('doppelte Aufgabe: '+String(e.q).slice(0,80));ids.set(id,1)}
  for(let i=0;i<reps;i++){
    let q;try{q=e.t==='gen'?e.make():e}catch(x){errs.push(`[${e.id}] Generator wirft Fehler: ${x.message}`);break}
    lint(e,q);
    if(i===0)samples.push([e,q]);
  }
}
if(dump){
  for(const [e,q] of samples){ if(process.argv.includes('--gen')&&!q.gen)continue;
    let b='';
    if(q.t==='mc')b=q.o.map((o,i)=>(i?'   ✗ ':'   ✓ ')+o).join('\n');
    else if(q.t==='ms')b=q.c.map(o=>'   ✓ '+o).concat(q.w.map(o=>'   ✗ '+o)).join('\n');
    else if(q.t==='tf')b='   → '+(q.a?'WAHR':'FALSCH');
    else if(q.t==='mt')b=q.p.map(p=>`   ${p[0]}  →  ${p[1]}`).join('\n');
    else if(q.t==='od')b=q.items.map((o,i)=>`   ${i+1}. ${o}`).join('\n');
    else if(q.t==='tx')b='   → '+q.a[0];
    else if(q.t==='fr')b='   Muster: '+q.m;
    else if(q.t==='cz')b='   '+q.text;
    console.log(`#${e.k} [${q.t}] ${q.q}\n${b}`);
  }
}
const byType={};samples.forEach(([,q])=>byType[q.t]=(byType[q.t]||0)+1);
console.log(`\nGeprüft: ${n} erzeugte Aufgaben aus ${Q.length} Pool-Einträgen · Typen (1 Beispiel/Eintrag): ${JSON.stringify(byType)}`);
const uniq=a=>[...new Set(a)];
if(warns.length){console.log(`\n${uniq(warns).length} Hinweise:`);uniq(warns).slice(0,40).forEach(w=>console.log(' ⚠ '+w))}
if(errs.length){console.log(`\n${uniq(errs).length} FEHLER:`);uniq(errs).slice(0,60).forEach(w=>console.log(' ✘ '+w));process.exit(1)}
console.log('\n✔ Keine Fehler gefunden.');
