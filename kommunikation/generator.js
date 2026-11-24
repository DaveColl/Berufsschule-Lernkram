/* Deutsch/Kommunikation – dynamische Aufgaben (Engine wie in den anderen Fächern). */
(function(){
const sh=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const rn=n=>Math.floor(Math.random()*n);
const pk=a=>a[rn(a.length)];
const base=(e,o)=>Object.assign({id:e.id,k:e.k,l:e.l,gen:true},o);


/* ================= 1) BEGRIFFE ================= */
const DEFS=[];
function D(k,g,rows){rows.forEach(r=>{const e={t:'gen',gen:'def',id:'d:'+r[0],k:r[3]||k,l:'W',g,term:r[0],full:r[1],def:r[2],need:2};DEFS.push(e);Q.push(e)})}

D(1,'komp',[
['Kompetenz','','Können – also nicht nur Wissen, sondern die Fähigkeit, etwas tatsächlich zu tun'],
['Wissen','','Kompetenzstufe, bei der man Fakten und Regeln kennt, sie aber noch nicht angewendet hat'],
['Übung','','Kompetenzstufe, bei der man etwas wiederholt anwendet und trainiert'],
['Erfahrung','','Kompetenzstufe, bei der man über längere Zeit in echten Situationen gelernt hat, worauf es ankommt'],
['Intuition','','unbewusste Erfahrung – man hat etwas „im Gefühl“, ohne lange nachzudenken']]);
D(2,'bereich',[
['Fachkompetenz','','Können im eigenen beruflichen Spezialgebiet (WAS kann ich?)'],
['Methodenkompetenz','','Fähigkeit, die eigene Arbeit mit passenden Arbeitstechniken zu organisieren (WIE organisiere ich meine Arbeit?)'],
['Sozialkompetenz','','Fähigkeit, gut mit anderen Menschen umzugehen, z. B. mit Vorgesetzten, Kunden und im Team'],
['Personelle Kompetenz','','Umgang mit sich selbst und Förderung der eigenen Persönlichkeitsentwicklung, z. B. das eigene Lernen organisieren'],
['Ökologische Kompetenz','','Bewusstsein dafür, wie die eigene Arbeit die Umwelt beeinflusst, und Schonung von Ressourcen'],
['Kompetenzraster','','Tabelle, in der man für jeden Kompetenzbereich die Stufen Wissen, Übung, Erfahrung und Intuition einschätzt']]);
D(3,'sem',[
['Sender','','Person, die eine Nachricht codiert und übermittelt'],
['Empfänger','','Person, die eine Nachricht aufnimmt und decodiert'],
['Codieren','','Gedanken in Zeichen wie Worte, Gestik oder Mimik übersetzen'],
['Decodieren','','empfangene Zeichen deuten und in eine Bedeutung übersetzen'],
['Feedback','','Rückmeldung des Empfängers an den Sender'],
['Nonverbal','','ohne Worte, z. B. durch Mimik, Gestik oder Körperhaltung'],
['Störung','','alles, was die Übertragung oder das Verstehen einer Nachricht beeinträchtigt']]);
D(4,'vier',[
['Sachinhalt','','Seite einer Nachricht, über die informiert wird (Sachinformation)'],
['Selbstoffenbarung','','Seite einer Nachricht, auf der der Sender etwas von sich selbst kundgibt'],
['Beziehung','','Seite einer Nachricht, die zeigt, was der Sender vom Empfänger hält und wie sie zueinander stehen'],
['Appell','','Seite einer Nachricht, mit der der Sender den Empfänger zu etwas veranlassen will'],
['Selbstdarstellung','','gewollter, bewusster Teil der Selbstoffenbarung'],
['Selbstenthüllung','','unfreiwilliger, unbewusster Teil der Selbstoffenbarung'],
['Manipulation','','versteckter Versuch, über den Appell Einfluss auf den Empfänger zu nehmen'],
['Funktionalisierung','','die anderen drei Seiten werden nur noch auf die Appellwirkung ausgerichtet und spiegeln nicht wider, was ist'],
['Vier-Ohren-Modell','','Sicht des Empfängers, der mit Sach-, Selbstkundgabe-, Beziehungs- und Appell-Ohr hören kann']]);
D(5,'eis',[
['Eisbergmodell','','Modell, nach dem nur etwa 20 % der Kommunikation sichtbar sind und etwa 80 % verborgen liegen'],
['Sachebene','','sichtbarer, sachlicher Teil der Kommunikation mit Themen, Forderungen und Vereinbarungen'],
['Beziehungsebene','','verborgener Teil der Kommunikation mit Gefühlen, Ängsten, Werten, Erfahrungen und Einstellungen'],
['Aktives Zuhören','','sich in das Gegenüber einfühlen und mit eigenen Worten wiedergeben, was man sachlich und gefühlsmäßig verstanden hat']]);
D(6,'watz',[
['Axiom','','Grundregel, die ohne Beweis als gültig angenommen wird'],
['Inhaltsaspekt','','was mitgeteilt wird – die Information zur Sache'],
['Beziehungsaspekt','','wie etwas gemeint ist und wie die Personen zueinander stehen'],
['Interpunktion','','wie die Beteiligten den Kommunikationsablauf gliedern, also was sie als Ursache und was als Wirkung ansehen'],
['Digitale Kommunikation','','Kommunikation über Sprache bzw. Worte, Text, Buchstaben und Zahlen'],
['Analoge Kommunikation','','Kommunikation über Körpersprache, Gestik, Mimik, Körperhaltung und Sprechweise'],
['Symmetrische Kommunikation','','Kommunikation unter Gleichwertigen, die auf einer Stufe stehen'],
['Komplementäre Kommunikation','','Kommunikation bei unterschiedlichen, sich ergänzenden Rollen, z. B. mit Hierarchie']]);

/* Alternative richtige Antworten für Tippaufgaben */
const ALIAS={'Personelle Kompetenz':['Selbstkompetenz','Personale Kompetenz'],'Ökologische Kompetenz':['Umweltkompetenz'],'Selbstoffenbarung':['Selbstkundgabe'],'Sachinhalt':['Sachebene','Sachaspekt','Sache'],'Beziehungsebene':['Gefühlsebene','Beziehungs-Ebene'],'Codieren':['Kodieren','Verschlüsseln'],'Decodieren':['Dekodieren','Entschlüsseln'],'Feedback':['Rückmeldung'],'Digitale Kommunikation':['digital'],'Analoge Kommunikation':['analog'],'Symmetrische Kommunikation':['symmetrisch'],'Komplementäre Kommunikation':['komplementär']};
DEFS.forEach(d=>d.alias=ALIAS[d.term]||[]);
/* Paare, die sich inhaltlich überschneiden – nie gegeneinander als Distraktor */
const EXCL=[['Selbstoffenbarung','Selbstdarstellung'],['Selbstoffenbarung','Selbstenthüllung'],['Appell','Manipulation'],['Manipulation','Funktionalisierung'],['Sachinhalt','Sachebene'],['Sachinhalt','Inhaltsaspekt'],['Sachebene','Inhaltsaspekt'],['Beziehung','Beziehungsebene'],['Beziehung','Beziehungsaspekt'],['Beziehungsebene','Beziehungsaspekt'],['Erfahrung','Intuition'],['Kompetenz','Fachkompetenz']];
const ex=(a,b)=>EXCL.some(p=>(p[0]===a&&p[1]===b)||(p[1]===a&&p[0]===b));
function cand(e,n){
  let c=DEFS.filter(d=>d!==e&&d.g===e.g&&!ex(e.term,d.term));
  if(c.length<n)c=c.concat(DEFS.filter(d=>d!==e&&d.g!==e.g&&d.k===e.k&&!ex(e.term,d.term)));
  if(c.length<n)c=c.concat(DEFS.filter(d=>d!==e&&!c.includes(d)&&!ex(e.term,d.term)));
  return sh(c);
}
function makeDef(e){
  const T=['m1','m2','tf','fc','ft','mt'];
  if(e.full)T.push('ab','ab','abx');
  const NOTX=['Vier-Ohren-Modell','Eisbergmodell','Kompetenzraster'];
  const tx=/^[\p{L}\d\s\-]+$/u.test(e.term)&&e.term.length<=26&&!NOTX.includes(e.term);
  if(tx)T.push('tx','tx');
  const ty=pk(T),c=cand(e,4),show=e.term+(e.full?' ('+e.full+')':'');
  if(ty==='m1')return base(e,{t:'mc',q:`Was bedeutet der Begriff „${e.term}“?`,o:[e.def,...c.slice(0,3).map(d=>d.def)]});
  if(ty==='m2')return base(e,{t:'mc',q:`Welcher Begriff ist hier gemeint: „${e.def}“?`,o:[e.term,...c.slice(0,3).map(d=>d.term)]});
  if(ty==='tf'){const ok=rn(2)===0;return base(e,{t:'tf',q:`Richtig oder falsch: „${e.term}“ bedeutet – ${ok?e.def:c[0].def}.`,a:ok,e:`Richtig ist: „${e.term}“ bedeutet – ${e.def}.`})}
  if(ty==='fc')return base(e,{t:'fr',q:`Erkläre in einem Satz (ohne nachzuschauen): ${show}`,m:e.def,pts:[e.def]});
  if(ty==='ft'){let [o0,o1,o2,o3]=c;if(ex(o0.term,o3.term)){[o0,o1]=[o1,o0]}if(ex(o0.term,o3.term)){[o0,o2]=[o2,o0]}return base(e,{t:'mc',q:'Welche dieser Aussagen ist FALSCH?',o:[`${o0.term}: ${o3.def}`,`${e.term}: ${e.def}`,`${o1.term}: ${o1.def}`,`${o2.term}: ${o2.def}`],e:`Die falsche Zuordnung: „${o0.term}“ bedeutet eigentlich: ${o0.def}`})}
  if(ty==='mt'){const n=c.length>=4?5:4;const grp=[e,...c.slice(0,n-1)];return base(e,{t:'mt',q:'Ordne jeder Beschreibung den passenden Begriff zu.',p:grp.map(d=>[d.def,d.term])})}
  if(ty==='ab')return base(e,{t:'mc',q:`Wofür steht „${e.term}“?`,o:[e.full,...[...new Set([...cand(e,8).filter(d=>d.full),...sh(DEFS.filter(d=>d!==e&&d.full))].map(d=>d.full))].filter(f=>f!==e.full).slice(0,3)]});
  if(ty==='abx')return base(e,{t:'tx',q:`Wie lautet die Abkürzung bzw. der Kurzname für „${e.full}“?`,a:[e.term]});
  return base(e,{t:'tx',q:`Tippe den gesuchten Begriff ein: „${e.def}“`,a:[e.term,...(e.full?[e.full]:[]),...e.alias]});
}


/* ================= 2) ZUORDNUNGS-TABELLEN ================= */
function C(k,name,topic,cats,items){Q.push({t:'gen',gen:'cat',id:'c:'+name,k,l:'V',name,topic,cats,items,need:3})}
C(3,'verbal','verbal oder nonverbal',['verbal','nonverbal'],[['gesprochene Worte','verbal'],['eine geschriebene Nachricht','verbal'],['eine Erklärung am Telefon','verbal'],['Lächeln','nonverbal'],['Kopfnicken','nonverbal'],['verschränkte Arme','nonverbal'],['Blickkontakt','nonverbal']]);
C(4,'botschaft','Art der Botschaft nach Schulz von Thun',['Ich-Botschaft (Selbstoffenbarung)','Du-Botschaft (Beziehung)','Wir-Botschaft (Beziehung)'],[['Ich habe es eilig.','Ich-Botschaft (Selbstoffenbarung)'],['Ich bin gerade ziemlich verärgert.','Ich-Botschaft (Selbstoffenbarung)'],['Du schaffst das allein nicht.','Du-Botschaft (Beziehung)'],['Du bist unzuverlässig.','Du-Botschaft (Beziehung)'],['Wir sind ein gutes Team.','Wir-Botschaft (Beziehung)'],['Wir verstehen uns ohne viele Worte.','Wir-Botschaft (Beziehung)']]);
C(5,'ebene','Ebene im Eisbergmodell',['Sachebene','Gefühls- oder Beziehungsebene'],[['Themen werden besprochen','Sachebene'],['Forderungen werden gestellt','Sachebene'],['Vereinbarungen werden getroffen','Sachebene'],['Beobachtungen werden dargelegt','Sachebene'],['Ängste','Gefühls- oder Beziehungsebene'],['Werte und Einstellungen','Gefühls- oder Beziehungsebene'],['Vertrauen und Misstrauen','Gefühls- oder Beziehungsebene'],['verdrängte Konflikte','Gefühls- oder Beziehungsebene'],['positive und negative Erfahrungen','Gefühls- oder Beziehungsebene']]);
C(6,'digana','digital oder analog nach Watzlawick',['digital','analog'],[['gesprochene Sprache','digital'],['Text in einer E-Mail','digital'],['Buchstaben und Zahlen','digital'],['Mimik','analog'],['Gestik','analog'],['Körperhaltung','analog'],['Sprechweise','analog']]);
C(6,'symkom','symmetrisch oder komplementär',['symmetrisch','komplementär'],[['zwei beste Freunde unterhalten sich','symmetrisch'],['zwei Azubis tauschen sich über die Berufsschule aus','symmetrisch'],['Lehrerin und Schüler treffen sich im Sportverein als Mitspieler','symmetrisch'],['die Lehrerin ermahnt einen Schüler wegen einer Störung','komplementär'],['die Ausbilderin erteilt dem Azubi einen Arbeitsauftrag','komplementär'],['die Chefin führt ein Kritikgespräch mit einem Mitarbeiter','komplementär']]);
function makeCat(e){
  const r=rn(4),tp=e.topic;
  if(r===0&&e.items.length>=4){let s,g=0;do{s=sh(e.items).slice(0,Math.min(5,e.items.length));g++}while(new Set(s.map(x=>x[1])).size<2&&g<30);return base(e,{t:'mt',q:`Zuordnung (${tp}): Ordne jedem Eintrag das Passende zu.`,p:s})}
  if(r===3&&e.cats.length>=2){const cat=pk(e.cats),yes=e.items.filter(x=>x[1]===cat),no=e.items.filter(x=>x[1]!==cat);if(yes.length>=2&&no.length>=2)return base(e,{t:'ms',q:`Zuordnung (${tp}): Welche Einträge gehören zu „${cat}“?`,c:sh(yes).slice(0,3).map(x=>x[0]),w:sh(no).slice(0,3).map(x=>x[0])})}
  const it=pk(e.items);
  if(r===2){const ok=rn(2)===0;const other=pk(e.cats.filter(c=>c!==it[1]));return base(e,{t:'tf',q:`Richtig oder falsch (${tp}): „${it[0]}“ gehört zu „${ok?it[1]:other}“.`,a:ok,e:`Richtig ist: „${it[0]}“ gehört zu „${it[1]}“.`})}
  return base(e,{t:'mc',q:`Zuordnung (${tp}): Wozu gehört „${it[0]}“?`,o:[it[1],...sh(e.cats.filter(c=>c!==it[1])).slice(0,3)]});
}


/* ================= 3) SZENARIEN (Anwenden) ================= */
function S(k,name,prompt,items,nox){Q.push({t:'gen',gen:'scen',id:'s:'+name,k,l:'A',name,prompt,items,nox:nox||[],need:3})}
S(1,'stufe','Welche Kompetenzstufe ist das?',[['Ein Azubi kennt die Befehle zur Netzwerkdiagnose aus dem Unterricht, hat sie aber noch nie benutzt','Wissen'],['Ein Azubi hat das Crimpen von Netzwerkkabeln im Labor viele Male trainiert','Übung'],['Nach Jahren im Support weiß eine Technikerin, welche Ursachen hinter typischen Störungen stecken','Erfahrung'],['Ein erfahrener Admin ahnt schon beim ersten Satz des Kunden, wo das Problem liegt','Intuition'],['Jemand hat eine Anleitung zum Aufsetzen eines Servers gelesen','Wissen'],['Jemand setzt zum zehnten Mal einen Testserver nach Anleitung auf','Übung']]);
S(2,'bereich','Welcher Kompetenzbereich ist gefragt?',[['Ein Netzwerk nach Plan konfigurieren','Fachkompetenz'],['Eine Programmiersprache sicher beherrschen','Fachkompetenz'],['Aufgaben mit einer To-do-Liste und Prioritäten planen','Methodenkompetenz'],['Informationen gezielt recherchieren und präsentieren','Methodenkompetenz'],['Einen verärgerten Kunden am Telefon beruhigen','Sozialkompetenz'],['Einen Konflikt im Team fair lösen','Sozialkompetenz'],['Sich selbstständig in ein neues Thema einarbeiten und das eigene Lernen organisieren','Personelle Kompetenz'],['Mit Kritik und Stress angemessen umgehen','Personelle Kompetenz'],['Altgeräte fachgerecht recyceln lassen','Ökologische Kompetenz'],['Drucker standardmäßig auf doppelseitigen Druck stellen, um Papier zu sparen','Ökologische Kompetenz']]);
S(3,'stoerung','Welche Störung aus dem Sender-Empfänger-Modell liegt vor?',[['Ein Kunde spricht kaum Deutsch','unterschiedliche Sprachen, Kulturen und Bräuche'],['Eine Geste bedeutet im Heimatland des Kunden etwas anderes','unterschiedliche Sprachen, Kulturen und Bräuche'],['Eine ironische Bemerkung wird ernst genommen','unterschiedliches Verständnis'],['Der Kunde hat ein ganz anderes Vorwissen über IT','unterschiedliches Verständnis'],['Die Telefonverbindung bricht ständig ab','technische Probleme'],['Im Großraumbüro ist es so laut, dass man sich kaum versteht','Umgebungsgeräusche und Akustik'],['Der Gesprächspartner ist schwerhörig','körperliche oder psychische Einschränkungen'],['Die Kollegin ist nach einem Trauerfall sehr belastet','körperliche oder psychische Einschränkungen'],['Jemand sagt „Alles super“ und verdreht dabei die Augen','Unstimmigkeit zwischen verbalen und nonverbalen Signalen']]);
S(6,'axiom','Welches Axiom von Watzlawick zeigt sich?',[['Ein Azubi schweigt in der Besprechung und schaut auf den Boden – die anderen deuten das als Desinteresse','1. Man kann nicht nicht kommunizieren'],['Ein Kunde antwortet tagelang nicht auf E-Mails – der Dienstleister deutet das als Unzufriedenheit','1. Man kann nicht nicht kommunizieren'],['Die Frage „Hast du das wirklich allein geschrieben?“ kann als Lob oder als Zweifel verstanden werden','2. Inhalts- und Beziehungsaspekt'],['Die Bitte „Mach das Fenster zu.“ kann freundlich oder genervt klingen','2. Inhalts- und Beziehungsaspekt'],['Jeder sagt, der andere habe mit dem Streit angefangen','3. Interpunktion (Ursache und Wirkung)'],['Ein Vorwurf führt zu Schweigen, das Schweigen zu einem stärkeren Vorwurf','3. Interpunktion (Ursache und Wirkung)'],['Jemand sagt „Mir geht es gut“, wirkt aber traurig und leise','4. digital und analog'],['Im Ausland mit Zeigen und Gesten eine Mahlzeit bestellen','4. digital und analog'],['Zwei Freunde tauschen gleichberechtigt Meinungen aus','5. symmetrisch oder komplementär'],['Die Ausbilderin erteilt dem Azubi Arbeitsaufträge','5. symmetrisch oder komplementär']]);
function makeScen(e){
  const answers=[...new Set(e.items.map(x=>x[1]))];
  if(rn(3)===0&&answers.length>=4){const pool=sh(e.items),used=new Set(),sel=[];for(const x of pool){if(!used.has(x[1])){used.add(x[1]);sel.push(x)}if(sel.length===5)break}return base(e,{t:'mt',q:`Szenarien zuordnen – ${e.prompt}`,p:sel})}
  const it=pk(e.items);
  return base(e,{t:'mc',q:`Szenario: ${it[0]}. ${e.prompt}`,o:[it[1],...sh(answers.filter(a=>a!==it[1]&&!e.nox.includes(a))).slice(0,3)],e:it[2]||''});
}


/* ================= 4) EIGENE GENERATOREN ================= */
function G(k,name,l){Q.push({t:'gen',gen:name,id:'p:'+name,k,l:l||'W',need:3})}
function subsetOrder(list,n){const idx=sh(list.map((_,i)=>i)).slice(0,n).sort((a,b)=>a-b);return idx.map(i=>list[i])}
G(1,'stufenord');G(4,'vierseiten','A');G(4,'vierohren','A');
const STUFEN=['Wissen','Übung','Erfahrung','Intuition'];
function makeStufenOrd(e){return base(e,{t:'od',q:'Bringe die Kompetenzstufen in die Reihenfolge, in der sie aufeinander aufbauen.',items:subsetOrder(STUFEN,3+rn(2))})}
/* Alltagssätze mit den vier Botschaften (Schulz von Thun) */
const SEITEN=['Sachinhalt','Selbstoffenbarung','Beziehung','Appell'];
const OHREN=['Sach-Ohr','Selbstkundgabe-Ohr','Beziehungs-Ohr','Appell-Ohr'];
const SAETZE=[
 {s:'„Du, da vorne ist grün!“',w:'der Beifahrer zur Fahrerin',b:['Die Ampel steht auf Grün.','Ich habe es eilig.','Du brauchst beim Fahren meine Hilfe.','Gib Gas!']},
 {s:'„Du kommst ständig zu spät!“',w:'die Ausbildungsleiterin zum Azubi',b:['Du bist mehrfach nach Arbeitsbeginn gekommen.','Ich ärgere mich darüber.','Ich halte dich für unzuverlässig.','Sei ab sofort pünktlich!']},
 {s:'„Mir wurde schon zum zweiten Mal das falsche Produkt verkauft.“',w:'eine Kundin im Geschäft',b:['Sie hat zweimal das falsche Produkt bekommen.','Ich bin verärgert.','Ich traue Ihnen zu, mich jetzt richtig zu beraten.','Geben Sie mir das richtige Produkt!']},
 {s:'„Der Drucker ist schon wieder kaputt.“',w:'eine Kollegin zum IT-Azubi',b:['Der Drucker funktioniert nicht.','Ich bin genervt.','Du bist hier für die Technik zuständig.','Repariere bitte den Drucker!']},
 {s:'„Hast du die Präsentation schon fertig?“',w:'der Teamleiter zur Kollegin',b:['Die Präsentation steht noch aus.','Ich mache mir Sorgen um den Termin.','Ich bin nicht sicher, ob du rechtzeitig fertig wirst.','Mach die Präsentation fertig!']},
 {s:'„Das Ticket ist seit drei Tagen offen.“',w:'ein Kunde am Telefon zum Service Desk',b:['Das Ticket wurde seit drei Tagen nicht geschlossen.','Ich werde langsam ungeduldig.','Ihr nehmt mich als Kunden nicht ernst.','Kümmert euch endlich darum!']}
];
function makeVierSeiten(e){
  const x=pk(SAETZE),i=rn(4),r=rn(3),head=`Aussage: ${x.s} (${x.w}).`;
  if(r===0)return base(e,{t:'mc',q:`${head} Zu welcher Seite der Nachricht gehört die Botschaft „${x.b[i]}“?`,o:[SEITEN[i],...SEITEN.filter((_,j)=>j!==i)]});
  if(r===1)return base(e,{t:'mc',q:`${head} Welche Botschaft steckt auf der Seite „${SEITEN[i]}“?`,o:[x.b[i],...x.b.filter((_,j)=>j!==i)]});
  return base(e,{t:'mt',q:`${head} Ordne jeder Botschaft die Seite der Nachricht zu.`,p:x.b.map((b,j)=>[b,SEITEN[j]])});
}
function makeVierOhren(e){
  const x=pk(SAETZE),i=rn(4);
  if(rn(2)===0)return base(e,{t:'mc',q:`Aussage: ${x.s} (${x.w}). Der Empfänger hört mit dem ${OHREN[i]}. Was versteht er?`,o:[x.b[i],...x.b.filter((_,j)=>j!==i)]});
  return base(e,{t:'mc',q:`Aussage: ${x.s} (${x.w}). Der Empfänger versteht: „${x.b[i]}“ Mit welchem Ohr hört er?`,o:[OHREN[i],...OHREN.filter((_,j)=>j!==i)]});
}

/* ================= 5) LÜCKENTEXTE ================= */
function Z(k,text,extra,ordered){Q.push({k,l:'V',t:'cz',q:'Lückentext',text,extra:extra||[],ordered:!!ordered})}
Z(1,'Zu fast allen Kompetenzen gehören {Wissen}, {Übung}, {Erfahrung} und {Intuition}.',['Talent','Zufall'],true);
Z(2,'Die Kompetenzbereiche sind {Fachkompetenz#a}, {Methodenkompetenz#a}, {Sozialkompetenz#a}, {personelle Kompetenz#a} und {ökologische Kompetenz#a}.',['Glückskompetenz']);
Z(3,'Der Sender {codiert} die Nachricht, der Empfänger {decodiert} sie und gibt ein {Feedback}.',['ignoriert','Störung']);
Z(4,'Eine Nachricht hat vier Seiten: {Sachinhalt#a}, {Selbstoffenbarung#a}, {Beziehung#a} und {Appell#a}.',['Rechtfertigung']);
Z(4,'Die Selbstoffenbarung umfasst die gewollte {Selbstdarstellung} und die unfreiwillige {Selbstenthüllung}.',['Manipulation','Beziehung']);
Z(4,'Ist der Appell versteckt, spricht man von {Manipulation}; die anderen Seiten werden dann {funktionalisiert}.',['Feedback','symmetrisch']);
Z(5,'Beim Eisbergmodell sind etwa {20} % sichtbar, die {Sachebene}, und etwa {80} % verborgen, die {Beziehungsebene}.',['50','Appell']);
Z(6,'Jede Kommunikation hat einen {Inhaltsaspekt#a} und einen {Beziehungsaspekt#a}. Der Beziehungsaspekt {dominiert} den Inhaltsaspekt.',['ersetzt','Sachinhalt']);
Z(6,'Watzlawick nennt die Sprache {digital} und die Körpersprache {analog}.',['symmetrisch','komplementär']);
Z(6,'Unter Gleichberechtigten ist Kommunikation {symmetrisch}, bei unterschiedlichen Rollen ist sie {komplementär}.',['digital','analog']);

/* ================= Dispatcher ================= */
const MAKERS={def:makeDef,cat:makeCat,scen:makeScen,stufenord:makeStufenOrd,vierseiten:makeVierSeiten,vierohren:makeVierOhren};
Q.forEach(e=>{if(e.t==='gen')e.make=()=>MAKERS[e.gen](e)});
})();
