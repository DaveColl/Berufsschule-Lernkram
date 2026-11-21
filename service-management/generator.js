/* Service Management – dynamische Aufgaben. Jeder Eintrag erzeugt bei jedem Aufruf eine neue Variante.
   Engine wie im LF7-Lernspiel; Daten aus Skript Modul 01 (+ Westermann LF 6 S. 10-33). */
(function(){
const sh=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const rn=n=>Math.floor(Math.random()*n);
const pk=a=>a[rn(a.length)];
const base=(e,o)=>Object.assign({id:e.id,k:e.k,l:e.l,gen:true},o);

/* ================= 1) BEGRIFFE ================= */
const DEFS=[];
function D(k,g,rows){rows.forEach(r=>{const e={t:'gen',gen:'def',id:'d:'+r[0],k:r[3]||k,l:'W',g,term:r[0],full:r[1],def:r[2],need:2};DEFS.push(e);Q.push(e)})}

D(1,'grund',[
['Dienstleistung','','Tätigkeit, die ein Unternehmen gegen Entgelt für andere ausübt'],
['Uno-actu-Prinzip','','Produktion und Konsum einer Dienstleistung finden gleichzeitig statt'],
['Integration des Kunden','','ohne Mitwirkung des Kunden (Input, Anfrage, Informationen) kann die Dienstleistung nicht erbracht werden'],
['Immaterialität','','kein physisches Produkt, sondern ein Nutzenversprechen'],
['Value-Co-Creation','','gemeinsame Wertschöpfung von Anbieter und Kunde (ITIL 4)',2],
['ITSM','IT-Service-Management','Gesamtheit der Aktivitäten eines IT-Service-Providers, um IT-Services zu planen, bereitzustellen, zu betreiben und zu steuern',3]]);
D(4,'imac',[
['Install','','Bereitstellung von Hard- und Software sowie Zubehör und Services (Aufbau, Installation)'],
['Move','','Verpackung, Transport und Installation der Geräte am neuen Verwendungsort, Konfiguration und Rechte aktualisieren'],
['Add','','Hinzufügen und Konfigurieren zusätzlicher Hard- und Softwarekomponenten sowie Benutzerberechtigungen'],
['Change','','Aktualisierung (Update, Upgrade, Neuinstallation) bestehender Hard- und Softwarekonfigurationen'],
['Remove','','zu deinstallierende Hard- und Software sichern, Programme und Daten löschen, Hardware abbauen'],
['Dispose','','Entsorgen, Abtransport, Refurbishing oder umweltgerechtes Recycling']]);
D(5,'sart',[
['IT Sourcing','','Beschaffung von IT-Gütern oder Dienstleistungen'],
['Helpdesk Service','','Services, die über einen Helpdesk telefonisch oder online erfolgen'],
['Break/Fix Service','','IT-Dienstleistung nach Bedarf und Anforderung des Auftraggebers durch Techniker vor Ort'],
['Swap Service','','ein identisch aufgesetztes Gerät wird dem Mitarbeitenden als Ersatz zur Verfügung gestellt'],
['Managed Services','','dauerhafte, wiederkehrende IT-Leistungen, deren Art, Umfang und Qualität vorab in einem SLA festgelegt sind'],
['Kulanz','','freiwilliger unentgeltlicher Service des Auftragnehmers'],
['Garantieservice','','unentgeltlicher Service aufgrund von Gewährleistungs- oder Garantieansprüchen']]);
D(6,'std',[
['ISO 9000','','Normenreihe für Qualitätsmanagement'],
['ISO/IEC 27000','','Normenreihe für Informationssicherheitsmanagement'],
['ISO/IEC 20000','','internationale Norm für IT-Service-Management mit zertifizierbaren Anforderungen'],
['ITIL','IT Infrastructure Library','weltweit wichtiges Best-Practice-Rahmenwerk für Service-Management, im Skript in Version 4 mit 34 Practices'],
['COBIT','Control Objectives for Information and related Technology','Rahmenwerk mit Fokus auf IT-Governance und IT-Unternehmensmanagement'],
['FitSM','','größtenteils freies, leichtgewichtiges ITSM-Rahmenwerk nach dem Motto „Keep it simple“'],
['ISO 15504','','Norm zur Prozessbewertung (SPICE), Nachfolger ISO 330xx'],
['CMMI','Capability Maturity Model Integration','Modell, das Prozesse nach Reife- und Fähigkeitsgraden bewertet',7],
['SIAM','Service Integration and Management','Managementmethode auf ITIL-Basis, wenn Services von mehreren Providern bezogen werden',11]]);
D(7,'cmmi',[
['Initial','','CMMI-Reifegrad, in dem Prozesse ad hoc, chaotisch und unvorhersehbar sind'],
['Managed','','CMMI-Reifegrad, in dem Prozesse auf Projektebene geplant, gemessen und kontrolliert werden'],
['Defined','','CMMI-Reifegrad, in dem Prozesse unternehmensweit standardisiert, dokumentiert und verstanden sind'],
['Quantitatively Managed','','CMMI-Reifegrad, in dem Prozesse durch statistische Methoden gesteuert werden'],
['Optimizing','','CMMI-Reifegrad mit Fokus auf kontinuierliche Prozessverbesserung und Innovation']]);
D(8,'itil',[
['SVS','Service Value System','System aus Leitprinzipien, Governance, Wertschöpfungskette, kontinuierlicher Verbesserung und Practices'],
['Governance','','Regeln und Richtlinien, mit denen die Organisation gelenkt und überwacht wird'],
['Leitprinzipien','','Grundsätze wie Wertorientierung oder „Start where you are“, die Entscheidungen in jeder Situation leiten'],
['Service Value Chain','','Kette aus sechs Aktivitäten von Plan bis Deliver & Support im Kern des Service-Wert-Systems',9],
['Vier-Dimensionen-Modell','','ITIL-4-Modell aus Organisation & Personen, Informationen & Technologien, Partner & Lieferanten sowie Wertströmen & Prozessen',11]]);
D(9,'vc',[
['Plan','','sicherstellen, dass Vision, aktuelle Lage und Verbesserungsziele für alle Services klar sind'],
['Improve','','kontinuierliche Verbesserung aller Value-Chain-Aktivitäten'],
['Engage','','Verständnis für Stakeholder-Bedürfnisse, Beziehungen und Kommunikation aufbauen'],
['Design & Transition','','neue oder geänderte Services entwerfen und betriebsbereit machen'],
['Obtain/Build','','Komponenten wie Software, Hardware und Wissen beschaffen oder entwickeln'],
['Deliver & Support','','Services im Betrieb bereitstellen und unterstützen']]);
D(10,'prac',[
['Service Level Management','','sichert die vereinbarte Servicequalität, indem Anforderungen ermittelt, SLAs vereinbart, überwacht und berichtet werden'],
['Service Desk','','zentrale Anlaufstelle für Anwender, die Anfragen und Störungen annimmt, erfasst, klassifiziert und weiterleitet'],
['Service Request Management','','erfüllt standardisierte Benutzeranfragen wie einen Passwort-Reset effizient'],
['Incident Management','','minimiert die Auswirkungen von Störungen möglichst schnell und stellt den Service wieder her'],
['Problem Management','','ermittelt die Ursachen wiederkehrender Störungen und verhindert künftige Incidents'],
['Change Management','','bewertet und genehmigt Änderungen und führt sie mit möglichst geringem Risiko durch'],
['Continual Improvement','','verbessert Services und Arbeitsweisen kontinuierlich und misst die Wirkung'],
['Known Error','','Problem, dessen Ursache analysiert und dokumentiert ist, das aber noch nicht dauerhaft behoben wurde (Definition ergänzt)']]);
D(11,'dim',[
['Organisation & Personen','','Dimension mit Strukturen, Kultur, Rollen, Verantwortlichkeiten und Kompetenzen'],
['Informationen & Technologien','','Dimension mit benötigtem Wissen sowie Anwendungen, Datenbanken, Kommunikations- und Workflow-Systemen'],
['Partner & Lieferanten','','Dimension mit Beziehungen, Verträgen und Abhängigkeiten von externen Organisationen'],
['Wertströme & Prozesse','','Dimension mit den Schritten und Aktivitäten, um Produkte und Services für Kunden bereitzustellen'],
['PESTLE','Political, Economical, Social, Technological, Legal, Environmental','externe Faktoren, die alle vier Dimensionen beeinflussen']]);
D(12,'law',[
['BGB','Bürgerliches Gesetzbuch','Gesetz für Geschäfte unter Bürgern sowie von Unternehmen mit Verbrauchern'],
['HGB','Handelsgesetzbuch','Gesetz für Geschäfte zwischen Kaufleuten bzw. Unternehmen'],
['UWG','Gesetz gegen den unlauteren Wettbewerb','Gesetz, das irreführende Werbung und unfaire Geschäftspraktiken verbietet'],
['DSGVO','Datenschutz-Grundverordnung','EU-Verordnung zum Schutz personenbezogener Daten'],
['BDSG','Bundesdatenschutzgesetz','deutsches Datenschutzgesetz, das die DSGVO national ergänzt'],
['StGB','Strafgesetzbuch','Gesetz, das u. a. Ausspähen von Daten, Computerbetrug und Computersabotage unter Strafe stellt'],
['Compliance','','regeltreues Verhalten – Einhalten von Gesetzen, Regeln und Richtlinien']]);
D(13,'vtyp',[
['Dienstvertrag','','Vertrag, bei dem die Tätigkeit selbst geschuldet wird, nicht ein bestimmter Erfolg (§§ 611 ff. BGB)'],
['Werkvertrag','','Vertrag, bei dem ein konkreter Erfolg bzw. ein fertiges Werk geschuldet wird (§§ 631 ff. BGB)'],
['Mietvertrag','','Vertrag über die Nutzungsüberlassung einer Sache auf Zeit gegen Entgelt, ohne Finanzierungs- oder Kaufoption'],
['SaaS','Software as a Service','Software wird auf Abruf genutzt, statt dauerhaft eine Lizenz zu erwerben'],
['IaaS','Infrastructure as a Service','grundlegende IT-Ressourcen wie Rechenleistung, Speicher und Netz werden bereitgestellt'],
['EULA','End User License Agreement','Endbenutzer-Lizenzvertrag, der die Benutzung einer Software regelt'],
['Named User License','','Lizenz für einen benannten Benutzer, der die Software ausschließlich nutzen darf'],
['Floating License','','Netzwerklizenz für eine maximale Anzahl gleichzeitiger Zugriffe auf beliebig vielen Rechnern'],
['Copyleft','','Bedingung der GNU GPL – Wer veränderte Software weitergibt, muss dieselben Rechte gewähren']]);
D(14,'vbau',[
['SLA','Service Level Agreement','Vereinbarung zwischen Anbieter und Kunde über Art und Güte des Service'],
['OLA','Operational Level Agreement','interne Vereinbarung zwischen der IT und einem anderen Bereich der Organisation'],
['UC','Underpinning Contract','Vertrag mit einem externen Dienstleister, um einen Service für den Kunden zu gewährleisten'],
['AVV','Auftragsverarbeitungsvertrag','Vertrag über die Verarbeitung personenbezogener Daten durch einen Dienstleister'],
['NDA','Non Disclosure Agreement','Geheimhaltungsvereinbarung zum Schutz sensibler Informationen'],
['MSA','Master Service Agreement','langfristiger Rahmenvertrag mit allgemeinen Rechtstexten, Rahmenbedingungen und Haftung'],
['SOW','Statement of Work','kurzfristige Leistungsbeschreibung mit konkreten Aufgaben, Fristen, Meilensteinen und Preisen'],
['Leistungsbeschreibung','','Baustein, der die Soll-Beschaffenheit der Leistung festlegt („was“ und „wie“)']]);
D(15,'ds',[
['Personenbezogene Daten','','Daten, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen'],
['Pseudonymisierte Daten','','Daten, die nicht direkt, aber über eine Transferleistung (Zusatzinformation) einer Person zugeordnet werden können'],
['Anonyme Daten','','Informationen, die keiner Person zugeordnet werden können und daher nicht unter die DSGVO fallen'],
['Auftragsverarbeiter','','Dritter, der personenbezogene Daten im Auftrag und nach Weisung des Kunden verarbeitet'],
['TOM','Technische und organisatorische Maßnahmen','Schutzmaßnahmen zur Datensicherheit nach Art. 32 DSGVO, oft Anhang des AV-Vertrags']]);

/* Alternative richtige Antworten für Tippaufgaben */
const ALIAS={'Governance':['Steuerung'],'Service Value Chain':['Service-Wertschöpfungskette','Wertschöpfungskette'],'SVS':['Service-Wert-System'],'Change Management':['Change Enablement'],'Service Request Management':['Request Management','Request Fulfillment'],'Managed':['Gemanagt'],'Defined':['Definiert'],'Quantitatively Managed':['Quantitativ gemanagt'],'Optimizing':['Optimierend'],'Plan':['Planen'],'Improve':['Verbessern'],'Engage':['Beteiligen'],'Floating License':['Concurrent Use License','Concurrent License','Netzwerklizenz'],'AVV':['AV-Vertrag','Auftragsverarbeitungsvertrag'],'ISO 15504':['SPICE'],'Uno-actu-Prinzip':['Uno actu','Uno-actu'],'Pseudonymisierte Daten':['Pseudonymisierung'],'Initial':['Initial']};
DEFS.forEach(d=>d.alias=ALIAS[d.term]||[]);
/* Paare, die sich inhaltlich überschneiden – nie gegeneinander als Distraktor */
const EXCL=[['Personenbezogene Daten','Pseudonymisierte Daten'],['SOW','Leistungsbeschreibung'],['CMMI','ISO 15504'],['Service Desk','Incident Management']];
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
  const NOTX=['Immaterialität','Integration des Kunden','Leitprinzipien','Personenbezogene Daten','Anonyme Daten','Vier-Dimensionen-Modell'];
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
C(1,'merkmale','Merkmal einer Dienstleistung',['immateriell','Uno-actu-Prinzip','Integration des Kunden','nicht lagerfähig','individuell anpassbar'],[['Man kauft keine Mailbox, sondern die Möglichkeit, zuverlässig zu mailen','immateriell'],['Ein Cloud-Speicher ist ein Nutzenversprechen, kein Gegenstand','immateriell'],['Das Supportgespräch wird im selben Moment erbracht und genutzt','Uno-actu-Prinzip'],['Ohne Fehlerbeschreibung des Anwenders kann der Service Desk nicht helfen','Integration des Kunden'],['Der Kunde muss für die Einrichtung seine Zugangsdaten liefern','Integration des Kunden'],['Supportstunden lassen sich nicht auf Vorrat produzieren','nicht lagerfähig'],['Ungenutzte Hotline-Zeit von gestern kann man heute nicht mehr verkaufen','nicht lagerfähig'],['Reaktionszeit und Verfügbarkeit im SLA werden je Kunde festgelegt','individuell anpassbar']]);
C(4,'lebenszyklus','Bereich des IT-Service-Lebenszyklus',['Beratung','Beschaffung','Bereitstellung','Einweisung/Schulung','Helpdesk/Servicedesk','Kontrolle/Anpassung/Ersatz'],[['Istanalyse und Strategie','Beratung'],['Green-IT, Wirtschaftlichkeit und Risiken','Beratung'],['Ausschreibung und Angebotsauswahl','Beschaffung'],['Bestellung und E-Procurement','Beschaffung'],['Anlieferung, Roll-on und Konfiguration','Bereitstellung'],['Hosting, Cloud-Services und Lizenzverwaltung','Bereitstellung'],['Vor-Ort-Einweisung und Website-FAQ','Einweisung/Schulung'],['Training und Zertifizierung','Einweisung/Schulung'],['SLA-Bearbeitung und (Fern-)Wartung','Helpdesk/Servicedesk'],['Monitoring und Multichannel-Kommunikation','Helpdesk/Servicedesk'],['ROI, Berichte, Gewährleistung und Garantie','Kontrolle/Anpassung/Ersatz'],['Roll-out, Migration, Refurbishing und Recycling','Kontrolle/Anpassung/Ersatz']]);
C(6,'stdkat','Kategorie im Schaubild der Standards',['Qualitätsmanagementstandard','Informationssicherheitsstandard','IT-Service-Management-Standard/Rahmenwerk','Reifegradmodell aus dem Software Engineering'],[['ISO 9000','Qualitätsmanagementstandard'],['ISO/IEC 27000','Informationssicherheitsstandard'],['ISO/IEC 20000','IT-Service-Management-Standard/Rahmenwerk'],['ITIL','IT-Service-Management-Standard/Rahmenwerk'],['FitSM','IT-Service-Management-Standard/Rahmenwerk'],['COBIT','IT-Service-Management-Standard/Rahmenwerk'],['CMMI','Reifegradmodell aus dem Software Engineering'],['ISO 15504','Reifegradmodell aus dem Software Engineering']]);
C(7,'cmmigrad','Reifegrad oder Fähigkeitsgrad im CMMI-Modell',['Reifegrad','Fähigkeitsgrad'],[['bewertet die gesamte Organisation','Reifegrad'],['bewertet einzelne Prozessgebiete','Fähigkeitsgrad'],['Level 1 Initial','Reifegrad'],['Level 0 Incomplete','Fähigkeitsgrad'],['Level 1 Performed','Fähigkeitsgrad'],['Level 4 Quantitatively Managed','Reifegrad'],['Level 5 Optimizing','Reifegrad'],['Maturity Levels','Reifegrad'],['Capability Levels','Fähigkeitsgrad']]);
C(9,'vcprac','Value-Chain-Aktivität der Practice laut Skript',['Plan','Improve','Engage','Design & Transition','Obtain/Build','Deliver & Support'],[['Strategy Management','Plan'],['Portfolio Management','Plan'],['Architecture Management','Plan'],['Continual Improvement','Improve'],['Measurement & Reporting','Improve'],['Relationship Management','Engage'],['Service Level Management','Engage'],['Service Desk','Engage'],['Service Design','Design & Transition'],['Change Enablement','Design & Transition'],['Release Management','Design & Transition'],['Supplier Management','Obtain/Build'],['Development','Obtain/Build'],['Asset Management','Obtain/Build'],['Request Management','Deliver & Support'],['Incident Management','Deliver & Support'],['Problem Management','Deliver & Support']]);
C(10,'kategorie','Kategorie der ITIL-4-Practice',['General Management','Service Management','Technical Management'],[['Architecture Mgmt','General Management'],['Continual Improvement','General Management'],['Information Security Mgmt','General Management'],['Knowledge Mgmt','General Management'],['Measurement & Reporting','General Management'],['Organizational Change Mgmt','General Management'],['Portfolio Mgmt','General Management'],['Project Mgmt','General Management'],['Relationship Mgmt','General Management'],['Risk Mgmt','General Management'],['Service Financial Mgmt','General Management'],['Strategy Mgmt','General Management'],['Supplier Mgmt','General Management'],['Workforce & Talent Mgmt','General Management'],['Availability Mgmt','Service Management'],['Business Analysis','Service Management'],['Capacity & Performance Mgmt','Service Management'],['Change Mgmt','Service Management'],['Incident Mgmt','Service Management'],['IT Asset Mgmt','Service Management'],['Monitoring & Event Mgmt','Service Management'],['Problem Mgmt','Service Management'],['Release Mgmt','Service Management'],['Service Catalogue Mgmt','Service Management'],['Service Configuration Mgmt','Service Management'],['Service Continuity Mgmt','Service Management'],['Service Design','Service Management'],['Service Desk','Service Management'],['Service Level Mgmt','Service Management'],['Service Request Mgmt','Service Management'],['Service Validation & Testing','Service Management'],['Deployment Mgmt','Technical Management'],['Infrastructure & Platform Mgmt','Technical Management'],['Software Development Mgmt','Technical Management']]);
C(11,'dimension','Dimension des Service-Managements',['Organisation & Personen','Informationen & Technologien','Partner & Lieferanten','Wertströme & Prozesse'],[['Strukturen, Kultur, Rollen und Verantwortlichkeiten','Organisation & Personen'],['Skills, Kompetenzen und Kommunikation','Organisation & Personen'],['Mitarbeiter verstehen ihren Beitrag zur Wertschöpfung','Organisation & Personen'],['Anwendungen, Datenbanken und Workflow-Systeme','Informationen & Technologien'],['Trends wie KI, Cloud, Mobile und Automatisierung','Informationen & Technologien'],['Benötigtes Wissen für die Service-Bereitstellung','Informationen & Technologien'],['Verträge und Abhängigkeiten von externen Organisationen','Partner & Lieferanten'],['Auswahl nach Kosten, Kultur, Know-how und strategischem Fokus','Partner & Lieferanten'],['Modell Service Integration and Management (SIAM)','Partner & Lieferanten'],['Abfolge von Aktivitäten mit klaren Inputs und Outputs','Wertströme & Prozesse'],['Abläufe standardisieren und Produktivität verbessern','Wertströme & Prozesse']]);
C(11,'pestle','PESTLE-Faktor',['Political','Economical','Social','Technological','Legal','Environmental'],[['Die Regierung setzt die Digitalisierung der Schulen politisch auf die Agenda','Political'],['Handelskonflikte zwischen Staaten führen zu Exportbeschränkungen für Hardware','Political'],['Die Strompreise steigen stark','Economical'],['Eine Rezession lässt Kunden ihre IT-Budgets kürzen','Economical'],['Mitarbeitende erwarten Homeoffice und mobiles Arbeiten','Social'],['Kunden erwarten Support per Chat statt per Telefon','Social'],['Künstliche Intelligenz klassifiziert Tickets automatisch','Technological'],['Cloud-Plattformen ersetzen eigene Server im Keller','Technological'],['Ein neues Gesetz verschärft die Meldepflicht bei Datenpannen','Legal'],['Die DSGVO verlangt einen AV-Vertrag mit dem Dienstleister','Legal'],['Rechenzentren sollen weniger Energie verbrauchen und CO₂ sparen','Environmental'],['Altgeräte müssen umweltgerecht recycelt werden','Environmental']]);
C(14,'msasow','MSA oder SOW',['MSA','SOW'],[['langfristig angelegt','MSA'],['allgemeine Rechtstexte und Rahmenbedingungen','MSA'],['regelt die Haftung','MSA'],['meist sehr ausführlich und juristisch komplex','MSA'],['kurzfristig angelegt','SOW'],['konkrete Aufgaben, Fristen und Meilensteine','SOW'],['Preise für den einzelnen Auftrag','SOW'],['eher operativ, technisch und ergebnisorientiert','SOW']]);
C(15,'personenbezug','Personenbezug nach DSGVO',['personenbezogen (DSGVO gilt)','anonym (DSGVO gilt nicht)'],[['Name und E-Mail-Adresse eines Kunden','personenbezogen (DSGVO gilt)'],['Kundennummer, die über eine Tabelle einer Person zugeordnet werden kann','personenbezogen (DSGVO gilt)'],['IP-Adresse im Ticketsystem, die einem Anwender zugeordnet ist','personenbezogen (DSGVO gilt)'],['Pseudonymisierte Ticketdaten mit Zuordnungsschlüssel beim Anbieter','personenbezogen (DSGVO gilt)'],['Gesamtzahl der Tickets pro Monat ohne jeden Personenbezug','anonym (DSGVO gilt nicht)'],['Durchschnittliche Bearbeitungszeit aller Tickets','anonym (DSGVO gilt nicht)']]);
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
S(4,'imac','Welche Phase im IMAC/R/D-Zyklus ist das?',[['Ein neues Notebook wird für eine neue Mitarbeiterin aufgesetzt und übergeben','Install'],['Neue IT-Systeme werden erstmals aufgesetzt und in Betrieb genommen','Install'],['Ein Arbeitsplatz zieht in ein anderes Gebäude um und wird dort neu angeschlossen','Move'],['Ein vorhandenes Gerät bekommt mehr Arbeitsspeicher','Add'],['Für ein bestehendes Konto werden zusätzliche Software und Berechtigungen eingerichtet','Add'],['Auf allen Arbeitsplatzsystemen wird ein Betriebssystem-Update eingespielt','Change'],['Software wird per Upgrade auf eine neue Hauptversion gebracht','Change'],['Daten werden vor dem Abbau gesichert und Programme deinstalliert','Remove'],['Daten werden gemäß DSGVO und BSI gelöscht','Remove'],['Nicht mehr benötigte IT wird vermarktet (Remarketing)','Dispose'],['Altgeräte werden abtransportiert und umweltgerecht recycelt','Dispose']]);
S(5,'sart','Welche Serviceart ist das?',[['Ein defektes Notebook wird sofort gegen ein identisch eingerichtetes Gerät getauscht','Swap Service'],['Ein Techniker repariert den Drucker vor Ort und rechnet Zeit, Anfahrt und Teile ab','Break/Fix Service'],['Eine Anwenderin ruft die Hotline an und bekommt telefonisch Hilfe','Helpdesk Service'],['Ein Dienstleister beschafft 50 Monitore für den Kunden','IT Sourcing'],['Ein Dienstleister überwacht die Server dauerhaft per Fernzugriff laut SLA','Managed Services'],['Der Händler repariert ein Gerät nach Ablauf der Garantie freiwillig kostenlos','Kulanz'],['Ein Gerät wird innerhalb der Garantiezeit kostenlos repariert','Garantieservice']]);
S(6,'std','Welcher Standard bzw. welches Rahmenwerk passt?',[['Ein Dienstleister will sich nach einer internationalen ITSM-Norm zertifizieren lassen','ISO/IEC 20000'],['Ein Informationssicherheits-Managementsystem soll aufgebaut werden','ISO/IEC 27000'],['Das Qualitätsmanagement des ganzen Unternehmens soll genormt werden','ISO 9000'],['Die Geschäftsführung will die IT-Governance steuern','COBIT'],['Ein kleines Team sucht ein freies, leichtgewichtiges ITSM-Rahmenwerk','FitSM'],['Man sucht weltweit anerkannte Best Practices mit 34 Practices','ITIL'],['Der Reifegrad der gesamten Organisation soll bewertet werden','CMMI'],['Services mehrerer Provider sollen gemeinsam gesteuert werden','SIAM']]);
S(7,'cmmi','Welcher CMMI-Reifegrad ist das?',[['Jedes Projekt läuft anders, nichts ist dokumentiert, Erfolg hängt von Einzelnen ab','Initial'],['Projekte werden geplant, gemessen und kontrolliert – aber noch nicht unternehmensweit einheitlich','Managed'],['Alle Abteilungen arbeiten nach denselben dokumentierten Standardprozessen','Defined'],['Prozesse werden mit Kennzahlen und statistischen Methoden gesteuert','Quantitatively Managed'],['Die Organisation verbessert ihre Prozesse ständig und fördert Innovation','Optimizing']]);
S(9,'vc','Welche Aktivität der Service Value Chain ist das (Fall: Arbeitsplatzrechner für einen neuen Mitarbeiter)?',[['Die IT legt fest, welche Ausstattung künftig Standard für alle Arbeitsplätze ist','Plan'],['Nach drei Monaten wird ausgewertet, wie lange die Einrichtung dauerte','Improve'],['Die IT klärt mit der Fachabteilung, welche Software und Rechte gebraucht werden','Engage'],['Ein Standard-Image wird entworfen und die Änderung freigegeben','Design & Transition'],['Das Notebook und die Lizenzen werden beim Lieferanten bestellt','Obtain/Build'],['Das Gerät wird übergeben; ein späteres Anmeldeproblem wird als Incident gelöst','Deliver & Support']]);
S(10,'prac','Welche ITIL-Practice ist zuständig?',[['Ein Anwender möchte sein Passwort zurückgesetzt haben','Service Request Management'],['Eine Standardsoftware soll auf einem Arbeitsplatz installiert werden','Service Request Management'],['Das E-Mail-System ist ausgefallen; der Dienst muss schnell wieder laufen','Incident Management'],['Derselbe Server stürzt jede Woche ab; die Ursache soll dauerhaft beseitigt werden','Problem Management'],['Ein Betriebssystem-Update soll kontrolliert auf allen Servern eingespielt werden','Change Management'],['Mit dem Kunden wird festgelegt, dass 95 % der Tickets in 4 Stunden bearbeitet werden','Service Level Management'],['Alle Anrufe und Meldungen der Anwender laufen über eine zentrale Anlaufstelle','Service Desk'],['Die Ticketbearbeitung dauert zu lange; der Ablauf wird analysiert und optimiert','Continual Improvement']],['Service Desk']);
S(12,'gesetz','Welches Gesetz ist betroffen?',[['Ein IT-Händler verkauft einem Privatkunden ein Notebook','BGB'],['Für einen Wartungsvertrag zwischen zwei GmbHs gelten zusätzlich zum BGB besondere Regeln für Kaufleute','HGB'],['Ein Konkurrent wirbt mit irreführenden Aussagen','UWG'],['Kundendaten werden ohne Rechtsgrundlage verarbeitet','DSGVO'],['Auf der Webseite fehlt das Impressum (laut Skript)','TMG','Seit Mai 2024 steht die Impressumspflicht im Digitale-Dienste-Gesetz (DDG), das das TMG ersetzt hat.'],['Jemand manipuliert absichtlich fremde Daten','StGB']]);
S(13,'vertrag','Welcher Vertragstyp passt?',[['IT-Beratung zur Cloud-Strategie, abgerechnet nach Stunden','Dienstvertrag'],['Eine fertige, funktionierende Website wird erstellt','Werkvertrag'],['Ein betriebsbereiter Serverpark wird aufgebaut','Werkvertrag'],['20 Notebooks werden gekauft und gehen ins Eigentum über','Kaufvertrag'],['Ein Notebook wird für eine Messewoche überlassen','Mietvertrag'],['Server werden über eine Finanzierungsgesellschaft langfristig überlassen, mit Option auf Übernahme','Leasingvertrag']]);
S(13,'lizenz','Welches Lizenzmodell passt?',[['50 Mitarbeitende nutzen die Software, aber nie mehr als 10 gleichzeitig','Floating/Concurrent License'],['Die Software darf nur eine bestimmte Person nutzen','Named User License'],['Die Software ist fest an einen bestimmten Rechner gebunden','Nodelocked License'],['Veränderte Software darf nur unter denselben freien Rechten weitergegeben werden','GNU GPL']]);
S(14,'baustein','Welcher Vertrag bzw. welcher Regelungsbaustein ist gemeint?',[['Provider und Kunde vereinbaren Reaktionszeiten und Verfügbarkeit','SLA'],['Die IT-Abteilung vereinbart intern mit der Personalabteilung Bearbeitungszeiten','OLA'],['Ein Systemhaus beauftragt einen Subdienstleister, um den Kundenservice zu gewährleisten','UC'],['Ein Dienstleister verarbeitet personenbezogene Kundendaten im Auftrag','AVV'],['Ein externer Entwickler soll vertrauliche Pläne einsehen','NDA'],['Langfristiger Rahmenvertrag mit Haftung und allgemeinen Rechtstexten','MSA'],['Konkreter Arbeitsauftrag mit Meilensteinen und Preisen','SOW'],['Es wird geregelt, wer den entwickelten Quellcode später nutzen darf','IP (Nutzungsrechte)']]);
function makeScen(e){
  const answers=[...new Set(e.items.map(x=>x[1]))];
  if(rn(3)===0&&answers.length>=4){const pool=sh(e.items),used=new Set(),sel=[];for(const x of pool){if(!used.has(x[1])){used.add(x[1]);sel.push(x)}if(sel.length===5)break}return base(e,{t:'mt',q:`Szenarien zuordnen – ${e.prompt}`,p:sel})}
  const it=pk(e.items);
  return base(e,{t:'mc',q:`Szenario: ${it[0]}. ${e.prompt}`,o:[it[1],...sh(answers.filter(a=>a!==it[1]&&!e.nox.includes(a))).slice(0,3)],e:it[2]||''});
}

/* ================= 4) REIHENFOLGE-GENERATOREN ================= */
function G(k,name,l){Q.push({t:'gen',gen:name,id:'p:'+name,k,l:l||'W',need:3})}
G(7,'cmmiord');G(7,'faehigord');G(4,'imacnext','V');G(8,'itilv3ord');
const REIFE=['Initial','Managed','Defined','Quantitatively Managed','Optimizing'];
const FAEHIG=['Incomplete','Performed','Managed','Defined'];
const IMAC=['Install','Move','Add','Change','Remove','Dispose'];
const V3=['Service Strategy','Service Design','Service Transition','Service Operation','Continual Service Improvement'];
function subsetOrder(list,n){const idx=sh(list.map((_,i)=>i)).slice(0,n).sort((a,b)=>a-b);return idx.map(i=>list[i])}
function makeCmmiOrd(e){const n=3+rn(3),up=rn(2)===0;let s=subsetOrder(REIFE,n);if(!up)s=s.reverse();return base(e,{t:'od',q:`Sortiere die CMMI-Reifegrade ${up?'aufsteigend (niedrigster zuerst)':'absteigend (höchster zuerst)'}.`,items:s})}
function makeFaehigOrd(e){const up=rn(2)===0;let s=subsetOrder(FAEHIG,3+rn(2));if(!up)s=s.reverse();return base(e,{t:'od',q:`Sortiere die CMMI-Fähigkeitsgrade ${up?'aufsteigend (Level 0 zuerst)':'absteigend (höchster zuerst)'}.`,items:s})}
function makeImacNext(e){const i=rn(6),before=rn(2)===0,t=before?(i+5)%6:(i+1)%6;return base(e,{t:'mc',q:`Welche Phase kommt im IMAC/R/D-Zyklus direkt ${before?'VOR':'NACH'} „${IMAC[i]}“?`,o:[IMAC[t],...sh(IMAC.filter((_,j)=>j!==t&&j!==i)).slice(0,3)],e:'Reihenfolge: Install → Move → Add → Change → Remove → Dispose → (wieder) Install.'})}
function makeV3Ord(e){return base(e,{t:'od',q:'Bringe die Phasen des Service-Lebenszyklus aus ITIL V3 in die richtige Reihenfolge.',items:subsetOrder(V3,3+rn(3))})}

/* ================= 5) LÜCKENTEXTE ================= */
function Z(k,text,extra){Q.push({k,l:'V',t:'cz',q:'Lückentext',text,extra:extra||[]})}
Z(3,'IT-Service-Management beinhaltet {Organisation}, {Prozesse} und {Werkzeuge}.',['Werbung','Zufall']);
Z(4,'Der IMAC/R/D-Zyklus: {Install}, {Move}, {Add}, {Change}, {Remove} und {Dispose}.',['Monitor','Deploy']);
Z(13,'Beim {Dienstvertrag} wird die Tätigkeit geschuldet, beim {Werkvertrag} ein konkreter Erfolg.',['Kaufvertrag','Mietvertrag']);
Z(14,'Ein {SLA} wird mit dem Kunden vereinbart, ein {OLA} intern zwischen Abteilungen und ein {UC} mit externen Dienstleistern.',['NDA','AVV']);
Z(14,'Das {MSA} ist ein langfristiger Rahmenvertrag, das {SOW} beschreibt konkrete Aufgaben, Fristen und Preise.',['SLA','NDA']);
Z(8,'Das ITIL Service-Wert-System besteht aus {Leitprinzipien}, {Governance}, der {Service Value Chain}, kontinuierlicher Verbesserung und {Practices}.',['PESTLE','IMAC/R/D']);
Z(8,'ITIL 4 kennt {34} Practices: {14} allgemeine, {17} Service- und {3} technische Management-Practices.',['5','7']);
Z(11,'Die vier Dimensionen sind {Organisation & Personen}, {Informationen & Technologien}, {Partner & Lieferanten} und {Wertströme & Prozesse}.',['Kunden & Preise']);
Z(7,'Die CMMI-Reifegrade: {Initial}, {Managed}, {Defined}, {Quantitatively Managed} und {Optimizing}.',['Incomplete','Performed']);
Z(10,'{Incident Management} stellt den Service schnell wieder her, {Problem Management} beseitigt die Ursache wiederkehrender Störungen.',['Change Management','Service Desk']);
Z(15,'Wird die Verarbeitung personenbezogener Daten an Dritte ausgelagert, braucht man einen {AV-Vertrag} nach Art. {28} DSGVO; im Anhang stehen die {TOM}.',['NDA','32']);
Z(8,'Das Service-Wert-System beginnt mit der {Nachfrage} und erzeugt {Wertschöpfung} für den Kunden.',['Rechnung','Entsorgung']);

/* ================= Dispatcher ================= */
const MAKERS={def:makeDef,cat:makeCat,scen:makeScen,cmmiord:makeCmmiOrd,faehigord:makeFaehigOrd,imacnext:makeImacNext,itilv3ord:makeV3Ord};
Q.forEach(e=>{if(e.t==='gen')e.make=()=>MAKERS[e.gen](e)});
})();
