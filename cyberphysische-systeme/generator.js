/* Dynamische Aufgaben: Jeder Eintrag erzeugt bei JEDEM Aufruf eine neue Variante (andere Fragen, Distraktoren, Reihenfolge, Aufgabentyp).
   Fortschritt wird pro Eintrag gezählt (Fakt / Tabelle / Generator). Wird nach fragen1/2.js geladen. */
(function(){
const sh=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const rn=n=>Math.floor(Math.random()*n);
const pk=a=>a[rn(a.length)];
const base=(e,o)=>Object.assign({id:e.id,k:e.k,l:e.l,gen:true},o);

/* ================= 1) BEGRIFFE (Definitionen) ================= */
const DEFS=[];
function D(k,g,rows){rows.forEach(r=>{const e={t:'gen',gen:'def',id:'d:'+r[0],k:r[3]||k,l:'W',g,term:r[0],full:r[1],def:r[2],need:2};DEFS.push(e);Q.push(e)})}

D(2,'ebene',[
['ERP','Enterprise Resource Planning','Planung des ganzen Unternehmens – Aufträge, Einkauf, Lager, Personal, Geld (Unternehmensleitebene)'],
['MES','Manufacturing Execution System','setzt Aufträge aus dem ERP in der Fertigung um und sammelt die Rückmeldungen der Maschinen (Betriebsleitebene)'],
['SCADA','Supervisory Control and Data Acquisition','Leitsystem – überwacht und bedient die Anlage am Bildschirm und sammelt Daten mehrerer Steuerungen (Prozessleitebene)'],
['SPS','Speicherprogrammierbare Steuerung','speicherprogrammierbarer Steuerungscomputer – arbeitet sein gespeichertes Programm zyklisch ab, liest dabei Sensoren ein und schaltet Aktoren'],
['CNC','Computerized Numerical Control','Steuerung speziell für Werkzeugmaschinen wie Fräse oder Drehbank, die Positionen und Bewegungen aus einem Programm präzise abfährt'],
['IPC','Industrie-PC','normaler PC in robuster Bauform für den Dauerbetrieb in der Fabrik – kein Spezialgerät wie die SPS'],
['HMI','Human Machine Interface','Bedienoberfläche (z. B. Touchpanel), über die der Mensch Maschinenwerte sieht und Befehle gibt'],
['CRM','Customer Relationship Management','Kundenverwaltung im Büro (Kontakte, Anfragen, Angebote) – eine Business-Anwendung']]);
D(1,'basis',[
['IoT','Internet of Things','weltweite Vernetzung eindeutig adressierbarer Objekte, die über einheitliche Standardprotokolle kommunizieren',1],
['IIoT','Industrial Internet of Things','IoT im industriellen Umfeld – Maschinen und Anlagen werden mit intelligenter Sensorik vernetzt',2],
['M2M','Machine-to-Machine','automatisierter Informationsaustausch zwischen Maschinen, Anlagen und Fahrzeugen ohne Mensch dazwischen',2],
['KPI','Key Performance Indicator','Kennzahl, mit der Zustand, Leistung oder Erfolg eines Prozesses gemessen wird, z. B. Maschinenverfügbarkeit oder Ausschussquote',2],
['CPS','Cyber-physisches System','Verbund aus Informatik, Mechanik und Elektrik, der vernetzt mit IT-Systemen kommuniziert',5],
['CPPC','Cyber-physische Produktionssysteme','CPS im industriellen Umfeld, also in Produktionsmaschinen und -anlagen',5],
['Smart Factory','','sich selbst organisierende und optimierende Produktionsumgebung mit vernetzten Maschinen',5],
['Smart Home','','CPS in Wohn- und Bürogebäuden für Komfort, Sicherheit und Energiesparen',5],
['Retrofitting','','Nach- und Umrüsten bestehender Maschinen mit Sensorik/CPS, damit sie vernetzt werden können',4],
['Predictive Maintenance','','vorausschauende Instandhaltung – Störungen werden aus Sensordaten vorausberechnet',4],
['Dashboard','','Visualisierung von Produktions- und Prozessdaten, Messwerten und Kennzahlen in einer übersichtlichen Ansicht',6],
['API','Application Programming Interface','offene Programmierschnittstelle, die Entwicklern den universellen Zugriff auf einen Dienst erlaubt',6],
['Produkt-Service-System','','Produkt und Dienstleistung werden als Komplettpaket verkauft, z. B. gesteuerte Fenster plus gesundes Raumklima durch intelligente Belüftung',4],
['Rebound-Effekt','','Einsparung pro Gerät wird durch die stark steigende Gerätezahl teilweise oder ganz wieder aufgehoben',6],
['Edge','','Datenverarbeitung in Echtzeit nahe an den Maschinen im Firmennetz (z. B. im IoT-Gateway)',13],
['Cloud','','Big-Data-Analytics, Business Intelligence und Data Warehousing außerhalb des eigenen Rechenzentrums',13]]);
D(7,'cpsfn',[
['Integration','','vereint physische und virtuelle Welt in einem Objekt, eindeutig im Netzwerk identifizierbar'],
['Sensorik','','erfasst Werte aus der Umwelt, z. B. Temperatur und Luftfeuchtigkeit'],
['Verarbeitung','','Mikrocontroller bereiten die erfassten Informationen und Daten auf und werten sie aus'],
['Aktorik','','Motoren, Ventile und Zylinder wirken direkt auf die Umwelt ein'],
['Steuerung und Regelung','','dezentrale Entscheidungen beeinflussen physische Prozesse (z. B. Heizen oder Kühlen)'],
['Vernetzung','','Kommunikation mit anderen Systemen, dem Unternehmen, der Wertschöpfungskette und Menschen'],
['Adaption','','passt die eigene Funktion an und lernt aus Daten (Machine Learning)']]);
D(7,'sens',[
['Ultraschallsensor','','misst Füllstand und Entfernung, unabhängig von Material und Farbe des Objekts'],
['Infrarot-Thermosensor','','erfasst Oberflächentemperaturen und Präsenz über Wärmestrahlung'],
['Lichtsensor','','misst Beleuchtungsstärke, z. B. um Jalousien und Licht zu steuern'],
['CO₂-Sensor','','überwacht die Raumluftqualität über die Kohlendioxid-Konzentration'],
['Vibrationssensor','','überwacht die Laufruhe von Maschinen und Anlagen'],
['Kraftsensor','','misst Zug- und Druckkräfte durch elastische Verformung'],
['Luftdrucksensor','','erfasst Druckschwankungen, z. B. in Reinräumen und Krankenhäusern'],
['Feuchtigkeitssensor','','hilft Schimmel zu vermeiden und steuert Heizung, Lüftung und Klima']]);
D(7,'sensm',[
['HC-SR04','','Ultraschallsensor zur Entfernungsmessung'],
['HC-SR501','','Bewegungsmelder (Infrarot)'],
['MQ-2','','Sensor für Gase'],
['DHT22','','Sensor für Temperatur und Luftfeuchtigkeit'],
['MH-Z19B','','CO₂-Sensor nach dem NDIR-Prinzip']]);
D(7,'hw',[
['Raspberry Pi','','Einplatinencomputer – vollwertiger Computer mit Betriebssystem auf einer Platine'],
['Arduino','','Mikrocontrollerboard – Open-Source-Entwicklungsumgebung, Programm läuft zyklisch in einer Schleife'],
['SBC','Single-Board-Computer','ein vollständiger Computer (Prozessor, RAM, Schnittstellen) auf einer einzigen Platine'],
['MCU','Microcontroller Unit','Chip mit Prozessor und oft Speicher, der ein Programm zyklisch für eine spezifische Aufgabe ausführt'],
['ESP32','','WLAN-Mikrocontroller mit zusätzlich Bluetooth, mehr SRAM und mehr I/O'],
['ESP8266','','günstiger Low-Power-Mikrocontroller mit integriertem WLAN'],
['Mikroprozessor','','führt Anweisungen und Berechnungen aus, ist schneller als ein Mikrocontroller, braucht aber externe Ressourcen wie RAM und Ein-/Ausgabeports']]);
D(8,'osi',[
['Anwendungsschicht','','Schnittstelle zwischen Benutzer und IoT-Device (z. B. MQTT)'],
['Transportschicht','','schützt und unterstützt die Datenkommunikation (TCP, UDP)'],
['Vermittlungsschicht','','Kommunikation der IoT-Devices mit dem Router (IPv4, IPv6, 6LoWPAN)'],
['Sicherungsschicht','','erkennt und korrigiert Fehler der physischen Schicht (LPWAN)'],
['Bitübertragungsschicht','','der eigentliche Kommunikationskanal (Wi-Fi, Bluetooth, NFC …)']]);
D(9,'funk',[
['Bluetooth','','Funk mit 50–150 m Reichweite und etwa 1 Mbit/s, z. B. für Telefone und Tablets'],
['BLE','Bluetooth Low Energy','Bluetooth-Variante mit deutlich geringerem Stromverbrauch für günstige IoT-Geräte'],
['ZigBee','','IEEE 802.15.4, 10–100 m, ca. 250 kbit/s, AES-128-Verschlüsselung, Hausautomation'],
['Z-Wave','','Funk für Hausautomation bei 900 MHz, max. 30 m, bis zu 232 Geräte'],
['RFID','Radio Frequency Identification','identifiziert Tags per elektromagnetischem Feld, Reichweite ca. 10 cm bis 200 m'],
['NFC','Near Field Communication','Nahfeldfunk bei 13,56 MHz mit ca. 10 cm Reichweite, z. B. kontaktloses Bezahlen'],
['Wi-Fi','','IEEE 802.11 – günstige Infrastruktur, aber hoher Stromverbrauch; bis ca. 100 m und 600 Mbit/s'],
['LoRaWAN','Long Range Wide Area Network','LPWAN mit 0,3–50 kbit/s und 2–15 km Reichweite, sehr sparsam, Millionen Geräte'],
['NB-IoT','Narrowband Internet of Things','LPWAN bis ca. 10 km, Signal dringt durch Wände und in den Untergrund'],
['Sigfox','','LPWAN für Device-to-Cloud – Geräte funken nur bei Bedarf'],
['LTE-M','','bindet IoT-Geräte direkt ans 4G-Netz an (ohne Gateway), ca. 100 kbit/s, lange Akkulaufzeit'],
['5G','','fünfte Mobilfunkgeneration (2019) – ca. 1 Gbit/s, sehr viele Geräte, geringe Latenz'],
['6LoWPAN','IPv6 over Low power Wireless Personal Area Network','IPv6 über stromsparende Funknetze – Protokoll der Vermittlungsschicht',8]]);
D(10,'mqtt',[
['MQTT','Message Queue Telemetry Transport','schlankes Publish/Subscribe-Protokoll der Anwendungsschicht für das IoT'],
['OPC UA','Open Platform Communications Unified Architecture','offener Industriestandard (IEC 62541) für M2M, Client-Server, TCP-Port 4840, mit eingebauter Sicherheit'],
['Broker','','nimmt Nachrichten der Publisher entgegen und verteilt sie an die Subscriber – entkoppelt Sender und Empfänger'],
['Publisher','','Client, der Nachrichten zu einem Topic sendet'],
['Subscriber','','Client, der Topics abonniert und deren Nachrichten empfängt'],
['Topic','','Thema einer Nachricht, aus Ebenen aufgebaut, die durch / getrennt sind'],
['Wildcard +','','einstufiger Platzhalter – ersetzt eine Topic-Ebene (nur beim Abonnieren)'],
['Wildcard #','','mehrstufiger Platzhalter – ersetzt alle folgenden Ebenen und steht am Ende'],
['QoS 0','','höchstens einmal – „Fire and Forget“, schnell und ressourcenschonend'],
['QoS 1','','mindestens einmal – mit PUBACK, Duplikate sind möglich'],
['QoS 2','','genau einmal – weder Verlust noch Duplikate; dafür zweistufige Bestätigung (PUBREC, PUBREL, PUBCOMP) und damit langsamer'],
['PUBACK','','Quittung des Empfängers bei QoS 1 (PUBLISH-Paket quittiert)'],
['PUBREC','','QoS 2, zweiter Schritt – Empfänger bestätigt den Erhalt (received)'],
['PUBREL','','QoS 2, dritter Schritt – Sender gibt frei (released)'],
['PUBCOMP','','QoS 2, letzter Schritt – Empfänger bestätigt, dass alles komplett ist (complete)'],
['LWT','Last Will Testament','Broker sendet bei unerwartetem Verbindungsabbruch den hinterlegten „letzten Willen“ an die Subscriber'],
['Retained Message','','neuer Subscriber erhält sofort den zuletzt gesendeten Wert des Topics'],
['Persistent Session','','Sitzung überlebt die Verbindung, über die Client-ID erkannt; verpasste Nachrichten werden nachgeliefert'],
['Keep Alive','','Zeitvorgabe für inaktive Verbindungen; Lebenszeichen per PINGREQ/PINGRESP'],
['Mosquitto','','kleiner nativer MQTT-Broker, geeignet für den Raspberry Pi'],
['Packet Identifier','','Kennung im PUBLISH-Paket bei QoS 1 – Der Empfänger quittiert mit PUBACK und derselben Kennung']]);
D(11,'gefa',[
['USV','unterbrechungsfreie Stromversorgung','überbrückt Netzausfälle, damit die Server weiterlaufen'],
['Disaster-Recovery-Plan','','Plan zur Wiederherstellung von Daten und Betrieb nach einem Schaden, z. B. einem Brand'],
['Zutrittskontrolle','','überwacht und protokolliert, wer den Serverraum betritt'],
['Doppelboden','','Hohlraum unter dem Raumboden – dort melden Wasser-Bereichssensoren Lecks'],
['Rauchmelder','','erkennt Schmorbrände und Feuer und alarmiert IT-Mitarbeiter und Feuerwehr'],
['Elektrostatische Entladung','','plötzlicher Spannungsausgleich durch statische Aufladung, der Elektronikbauteile beschädigen kann; die Gefahr steigt bei zu trockener Luft']]);
D(13,'schn',[
['GPIO','General Purpose Input/Output','frei programmierbare Ein- und Ausgänge, jeder Pin einzeln als Eingang oder Ausgang nutzbar'],
['UART','Universal Asynchronous Receiver and Transmitter','zwei Datenleitungen TX/RX, asynchron ohne Takt, mit Start- und Stopp-Bits und Baudrate'],
['I²C','Inter-Integrated Circuit','zwei Leitungen SDA und SCL, synchron, mehrere Master/Slaves, 7-Bit-Adressen'],
['SPI','Serial Peripheral Interface','vier Leitungen (Takt, MOSI, MISO, CS), voll duplex, ein Master'],
['Master/Slave','','Der Master steuert die Kommunikation (z. B. Takt, Auswahl des Teilnehmers), die Slaves antworten'],
['Voll duplex','','Daten werden gleichzeitig in beide Richtungen übertragen (bei SPI über MOSI und MISO)'],
['Baud','','Einheit der seriellen Übertragungsgeschwindigkeit; entspricht einem Bit pro Sekunde'],
['EVA','Eingabe, Verarbeitung, Ausgabe','Grundprinzip, nach dem Ein- und Ausgänge eines Systems betrachtet werden'],
['NDIR','nicht dispersiver Infrarotsensor','misst CO₂ über die Absorption einer bestimmten Infrarot-Wellenlänge'],
['IDA','In-Door Air','Klassifizierung der Raumluftqualität in vier Kategorien nach CO₂-Konzentration']]);

function cand(e,n){
  let c=DEFS.filter(d=>d!==e&&d.g===e.g);
  if(c.length<n)c=c.concat(DEFS.filter(d=>d!==e&&d.g!==e.g&&d.k===e.k));
  if(c.length<n)c=c.concat(DEFS.filter(d=>d!==e&&!c.includes(d)));
  return sh(c);
}
function makeDef(e){
  const T=['m1','m2','tf','fc','ft','mt'];
  if(e.full)T.push('ab','ab','abx');
  const NOTX=['Sensor','Aktor','Sensorik','Aktorik','Raspberry Pi','Arduino','SBC','MCU','Bluetooth','BLE','LPWAN','Ultraschallsensor'];
  const tx=/^[\p{L}\d\s\-²₂]+$/u.test(e.term)&&e.term.length<=24&&!NOTX.includes(e.term);
  if(tx)T.push('tx','tx');
  const ty=pk(T),c=cand(e,4),show=e.term+(e.full?' ('+e.full+')':'');
  if(ty==='m1')return base(e,{t:'mc',q:`Was ist bzw. bedeutet „${e.term}“?`,o:[e.def,...c.slice(0,3).map(d=>d.def)]});
  if(ty==='m2')return base(e,{t:'mc',q:`Welcher Begriff ist hier gemeint: „${e.def}“?`,o:[e.term,...c.slice(0,3).map(d=>d.term)]});
  if(ty==='tf'){const ok=rn(2)===0;return base(e,{t:'tf',q:`Richtig oder falsch: „${e.term}“ bedeutet – ${ok?e.def:c[0].def}.`,a:ok,e:`Richtig ist: „${e.term}“ bedeutet – ${e.def}.`})}
  if(ty==='fc')return base(e,{t:'fr',q:`Erkläre in einem Satz (ohne nachzuschauen): ${show}`,m:e.def,pts:[e.def]});
  if(ty==='ft'){const [o0,o1,o2,o3]=c;return base(e,{t:'mc',q:'Welche dieser Aussagen ist FALSCH?',o:[`${o0.term}: ${o3.def}`,`${e.term}: ${e.def}`,`${o1.term}: ${o1.def}`,`${o2.term}: ${o2.def}`],e:`Die falsche Zuordnung: „${o0.term}“ bedeutet eigentlich: ${o0.def}`})}
  if(ty==='mt'){const n=Math.min(5,c.length>=4?5:4);const grp=[e,...c.slice(0,n-1)];return base(e,{t:'mt',q:'Ordne jeder Beschreibung den passenden Begriff zu.',p:grp.map(d=>[d.def,d.term])})}
  if(ty==='ab')return base(e,{t:'mc',q:`Wofür steht „${e.term}“?`,o:[e.full,...sh(DEFS.filter(d=>d!==e&&d.full)).slice(0,3).map(d=>d.full)]});
  if(ty==='abx')return base(e,{t:'tx',q:`Wie lautet die Abkürzung bzw. der Kurzname für „${e.full}“?`,a:[e.term,e.term.replace(/[²₂]/g,'2')]});
  return base(e,{t:'tx',q:`Tippe den gesuchten Begriff ein: „${e.def}“`,a:[e.term,e.term.replace(/[²₂]/g,'2'),...(e.full?[e.full]:[])]});
}

/* ================= 2) ZUORDNUNGS-TABELLEN (Kategorien) ================= */
function C(k,name,topic,cats,items){Q.push({t:'gen',gen:'cat',id:'c:'+name,k,l:'V',name,topic,cats,items,need:3})}
C(1,'bizfert','Business-Anwendung oder Fertigungsdaten',['Business-Anwendung','Daten aus der Fertigung'],[['CRM','Business-Anwendung'],['ERP','Business-Anwendung'],['Mobile App für Kunden','Business-Anwendung'],['MES','Daten aus der Fertigung'],['SCADA','Daten aus der Fertigung'],['HMI','Daten aus der Fertigung'],['SPS','Daten aus der Fertigung']]);
C(2,'pyr','Ebene der Automatisierungspyramide',['Unternehmensleitebene','Betriebsleitebene','Prozessleitebene','Steuerungsebene','Feldebene'],[['ERP','Unternehmensleitebene'],['MES','Betriebsleitebene'],['SCADA','Prozessleitebene'],['SPS','Steuerungsebene'],['CNC-Steuerung','Steuerungsebene'],['Antriebe','Steuerungsebene'],['Temperatursensor','Feldebene'],['Ventil (Aktor)','Feldebene']]);
C(3,'iotiiot','IoT oder IIoT',['IoT','IIoT'],[['Fitnessarmband','IoT'],['Smart-TV mit Sprachsteuerung','IoT'],['Sprachassistent im Wohnzimmer','IoT'],['Kühlschrank mit Kamera','IoT'],['Predictive Maintenance einer Fräsmaschine','IIoT'],['MES erhält Rückmeldungen der Maschinen','IIoT'],['Vision-Control-Qualitätskontrolle in der Linie','IIoT'],['Werkzeug löst selbst eine Ersatzbestellung aus','IIoT'],['Maschinen glätten gemeinsam Lastspitzen','IIoT']]);
C(4,'felder','Anwendungsfeld',['Smart Home','Smart Factory','Automotive','Smart Health','Smart City','Consumer'],[['Heizung schaltet bei offenem Fenster ab','Smart Home'],['Anwesenheitssimulation im Urlaub','Smart Home'],['Papierlose Montageanweisungen','Smart Factory'],['Vorausschauende Instandhaltung von Werkzeugen in der Fertigung','Smart Factory'],['Fahrzeuge tauschen Position aus','Automotive'],['Flottenmanagement einer Spedition','Automotive'],['Autonomes Taxi','Automotive'],['Automatische Verabreichung eines Medikaments','Smart Health'],['Medikamenten-Erinnerung per App','Smart Health'],['Intelligente Straßenbeleuchtung','Smart City'],['Smart Parking und Müllmanagement','Smart City'],['VR-Brille für die Raumplanung','Consumer'],['Spielekonsole mit Multimedia','Consumer']]);
C(4,'v2x','V2V, V2I, V2P oder V2N',['V2V','V2I','V2P','V2N'],[['Auto warnt das Auto dahinter vor Vollbremsung','V2V'],['Fahrzeug erhält Daten von der Ampel','V2I'],['Maut-Station erkennt das Fahrzeug','V2I'],['Smartphone eines Fußgängers verbindet sich mit dem Auto','V2P'],['Taxi per App in der Nähe finden','V2P'],['Navi erhält Wetter- und Unfallwarnung','V2N'],['Fahrer wird über einen Unfall auf der geplanten Route informiert','V2N']]);
C(4,'vrar','VR, AR oder Sprachsteuerung',['VR','AR','Sprachsteuerung'],[['Brille schirmt die Realität komplett ab','VR'],['Messwerte werden neben dem realen Sensor eingeblendet','AR'],['Licht und Heizung per Zuruf bedienen','Sprachsteuerung'],['Möbel in einem virtuellen Raum platzieren','VR'],['Servicetechniker hat beide Hände frei und startet einen Antrieb','Sprachsteuerung'],['Ventile werden virtuell beschriftet und eingefärbt','AR']]);
C(7,'sensakt','Sensor oder Aktor',['Sensor','Aktor'],[['Temperaturfühler','Sensor'],['Rauchmelder','Sensor'],['Bewegungsmelder','Sensor'],['Lichtsensor','Sensor'],['Kraftsensor','Sensor'],['Motor','Aktor'],['Ventil','Aktor'],['Zylinder','Aktor'],['Heiz-/Kühlventil','Aktor']]);
C(7,'sbcmcu','Einplatinencomputer oder Mikrocontroller',['SBC','MCU'],[['Raspberry Pi','SBC'],['Arduino','MCU'],['Läuft mit Betriebssystem','SBC'],['Ein Programm läuft zyklisch in einer Schleife','MCU'],['Mehrere Aufgaben gleichzeitig','SBC'],['Einzelner Chip für eine spezifische Aufgabe','MCU'],['Anschluss von Monitor, Tastatur und Maus','SBC']]);
C(8,'layer','Schicht des Protokolls',['Anwendungsschicht','Transportschicht','Vermittlungsschicht','Sicherungsschicht','Bitübertragungsschicht'],[['MQTT','Anwendungsschicht'],['TCP','Transportschicht'],['UDP','Transportschicht'],['IPv4','Vermittlungsschicht'],['IPv6','Vermittlungsschicht'],['6LoWPAN','Vermittlungsschicht'],['LPWAN / LoRaWAN','Sicherungsschicht'],['Wi-Fi','Bitübertragungsschicht'],['Bluetooth','Bitübertragungsschicht'],['ZigBee','Bitübertragungsschicht'],['Z-Wave','Bitübertragungsschicht'],['NFC','Bitübertragungsschicht'],['RFID','Bitübertragungsschicht']]);
C(10,'rolle','Rolle bei MQTT',['Publisher','Subscriber','Broker'],[['Temperatursensor sendet seinen Wert','Publisher'],['Dashboard zeigt den Wert an','Subscriber'],['Mosquitto auf dem Raspberry Pi','Broker'],['Alarm-App der IT abonniert Rauchmelder-Topics','Subscriber'],['Rauchmelder sendet die Meldung „Rauch erkannt“ an ein Topic','Publisher'],['Verteilt Nachrichten an alle Abonnenten eines Topics','Broker']]);
C(10,'mqttopc','MQTT oder OPC UA',['MQTT','OPC UA'],[['Publish/Subscribe über einen Broker','MQTT'],['Client-Server mit bidirektionaler Kommunikation inkl. Steuerbefehlen','OPC UA'],['TCP-Port 4840 und IEC 62541','OPC UA'],['Sicherheit nur über Benutzername/Passwort und TLS','MQTT'],['In modernen SPS als Server integriert','OPC UA'],['Ideal für kleine Geräte mit knapper Bandbreite','MQTT'],['Authentifizierung, Signierung und Verschlüsselung eingebaut','OPC UA']]);
C(13,'flows','Fluss beim CO₂-Messsystem',['Information','Materie (Stoff)','Energie'],[['Arduino-Programm wird per USB geladen','Information'],['Messwerte gehen per WLAN/Bluetooth raus','Information'],['Umgebungsluft strömt am Sensor vorbei','Materie (Stoff)'],['Versorgung aus Akku oder Batterie','Energie'],['Abwärme des Systems','Energie']]);
C(13,'schnitt','Schnittstelle',['GPIO','UART','I²C','SPI'],[['Mehrere Master sind möglich','I²C'],['Voll duplex mit vier Leitungen','SPI'],['Jeder Pin frei als Ein-/Ausgang programmierbar','GPIO'],['Für jeden Slave eine eigene CS-Leitung','SPI'],['TX und RX, kein Takt, Start- und Stopp-Bits','UART'],['SDA und SCL, bis zu 128 Adressen','I²C'],['Baudrate legt die Geschwindigkeit fest','UART']]);
function makeCat(e){
  const r=rn(4),tp=e.topic;
  if(r===0&&e.items.length>=4){let s,g=0;do{s=sh(e.items).slice(0,Math.min(5,e.items.length));g++}while(new Set(s.map(x=>x[1])).size<2&&g<30);return base(e,{t:'mt',q:`Zuordnung (${tp}): Ordne jedem Eintrag das Passende zu.`,p:s})}
  if(r===3&&e.cats.length>=2){const cat=pk(e.cats),yes=e.items.filter(x=>x[1]===cat),no=e.items.filter(x=>x[1]!==cat);if(yes.length>=2&&no.length>=2)return base(e,{t:'ms',q:`Zuordnung (${tp}): Welche Einträge gehören zu „${cat}“?`,c:sh(yes).slice(0,3).map(x=>x[0]),w:sh(no).slice(0,3).map(x=>x[0])})}
  const it=pk(e.items);
  if(r===2){const ok=rn(2)===0;const other=pk(e.cats.filter(c=>c!==it[1]));return base(e,{t:'tf',q:`Richtig oder falsch (${tp}): „${it[0]}“ gehört zu „${ok?it[1]:other}“.`,a:ok,e:`Richtig ist: „${it[0]}“ gehört zu „${it[1]}“.`})}
  return base(e,{t:'mc',q:`Zuordnung (${tp}): Wozu gehört „${it[0]}“?`,o:[it[1],...sh(e.cats.filter(c=>c!==it[1])).slice(0,3)]});
}

/* ================= 3) SZENARIEN (Anwenden) ================= */
function S(k,name,prompt,items){Q.push({t:'gen',gen:'scen',id:'s:'+name,k,l:'A',name,prompt,items,need:3})}
S(7,'sensorwahl','Welcher Sensor passt?',[['Füllstand in einem geschlossenen Behälter messen','Ultraschallsensor'],['Schimmelgefahr in Räumen früh erkennen','Feuchtigkeitssensor'],['Laufruhe einer Maschine überwachen','Vibrationssensor'],['Luftqualität im Büro überwachen','CO₂-Sensor'],['Jalousien je nach Sonneneinstrahlung fahren','Lichtsensor'],['Druck in einem Reinraum überwachen','Luftdrucksensor'],['Zugkräfte an einer Komponente messen','Kraftsensor'],['Oberflächentemperatur berührungslos messen','Infrarot-Thermosensor']]);
S(7,'cpsfunk','Welche CPS-Funktion ist das?',[['Ein Temperaturfühler misst die Raumtemperatur','Sensorik'],['Ein Mikrocontroller wertet Messwerte aus','Verarbeitung'],['Ein Ventil wird geöffnet','Aktorik'],['Der Raum wird automatisch geheizt oder gekühlt','Steuerung und Regelung'],['Ein Werkzeug löst beim Lieferanten eine Bestellung aus','Vernetzung'],['Das Messintervall ändert sich beim neuen Produkt','Adaption'],['Das Objekt ist im Netzwerk eindeutig identifizierbar','Integration']]);
S(8,'protoszen','Welches Protokoll bzw. welche Technologie passt?',[['Messwert per Publish/Subscribe an eine App senden','MQTT'],['IPv6 über ein stromsparendes Funknetz','6LoWPAN'],['Zuverlässige verbindungsorientierte Datenübertragung','TCP'],['Funk über viele Kilometer bei geringem Energieverbrauch','LPWAN'],['Pakete an die Zieladresse im Netz weiterleiten','IP']]);
S(9,'funkszen','Welche Funktechnologie passt am besten?',[['Kontaktlos mit dem Smartphone bezahlen','NFC'],['Fitnessband koppelt sich stromsparend mit dem Smartphone','BLE'],['Waren im Lager per Tag identifizieren','RFID'],['Fernanwendung mit Millionen Geräten bei nur 0,3–50 kbit/s','LoRaWAN'],['Heimnetz mit hoher Datenrate, Strom ist egal','Wi-Fi'],['Hausautomation-Schalter bis 30 m, speziell dafür entwickelt','Z-Wave'],['Sensor im Keller/Untergrund, Mobilfunk kommt kaum durch','NB-IoT'],['IoT-Gerät direkt ins 4G-Netz ohne Gateway','LTE-M'],['Gerät funkt nur bei Bedarf Daten an die Cloud','Sigfox'],['Hausautomation mit AES-128-Verschlüsselung','ZigBee'],['Sehr viele Geräte mit etwa 1 Gbit/s','5G']]);
S(10,'qosszen','Welche QoS-Stufe passt?',[['Raumtemperatur wird jede Sekunde gesendet, ein verlorener Wert ist egal','QoS 0'],['Automatische Bestellung – Duplikate wären fatal','QoS 2'],['Alarm muss ankommen, ein Duplikat ist unkritisch','QoS 1'],['Statusanzeige, die 10-mal pro Sekunde aktualisiert wird','QoS 0'],['Steuerbefehl „Ventil öffnen“ darf nicht doppelt ausgeführt werden','QoS 2'],['Zählerstand soll mindestens einmal ankommen','QoS 1']]);
S(11,'gefolge','Was ist die typische Folge?',[['Zu hohe Temperatur im Serverraum','Leistungsminderung der Server durch Überhitzung'],['Zu hohe Luftfeuchtigkeit','Beschädigung von Datenträgern durch Feuchtigkeit'],['Zu geringe Luftfeuchtigkeit','Elektrostatische Entladungen beschädigen Elektronikbauteile'],['Wasser im Doppelboden','Schäden an kritischer IT durch eindringende Flüssigkeit'],['Netzausfall','Server und Netzwerk fallen aus, wenn keine USV einspringt'],['Schmorbrand','Brandschaden mit Ausfallzeiten und möglichem Datenverlust']]);
S(12,'gefmass','Welche Gegenmaßnahme passt?',[['Zu hohe Temperatur','Dauerüberwachung von Raum und Racks, automatisches Absenken der Temperatur'],['Einbruch und Diebstahl','Protokollierte Zutrittskontrolle und Videoüberwachung'],['Schmorbrand','Rauchmelder, Alarm an Feuerwehr und IT, Disaster-Recovery-Plan'],['Netzausfall','Netzspannung überwachen und USV nutzen bzw. defekte USV sofort tauschen'],['Wasserleckage im Doppelboden','Wasser-Bereichssensor und sofortige Meldung an IT und Gebäudeverwaltung']]);
S(12,'gefsensor','Welcher Sensor bzw. welche Überwachung meldet das?',[['Brand','Rauchmelder'],['Wasser im Doppelboden','Wasser-Bereichssensor'],['Unbefugter Zutritt','Zutrittskontrolle mit Türsensor und Videoüberwachung'],['Stromausfall','Power-Monitoring (Netzspannung überwachen)'],['Raumluft ist zu feucht oder zu trocken','Sensor für Temperatur und Luftfeuchtigkeit']]);
S(13,'schnszen','Welche Schnittstelle nimmst du?',[['Mehrere Sensoren sollen mit nur zwei Leitungen und Adressen an einen Bus','I²C'],['Ein CO₂-Sensor ist über TX und RX angeschlossen','UART'],['Ein Baustein soll voll duplex und besonders schnell angebunden werden','SPI'],['Eine LED soll an einem freien Pin ein- und ausgeschaltet werden','GPIO']]);
S(4,'ziele','Mit welchem Ansatz erreicht man das Ziel mit CPS?',[['Maschinenverfügbarkeit erhöhen','Predictive Maintenance'],['Produktionsprozess maschinenübergreifend koordinieren','Plattform wie MES sammelt Rückmeldungen und sendet Planänderungen zurück'],['Energieverbrauch von Maschinen reduzieren','Maschinen koordinieren ihren Verbrauch und glätten Lastspitzen'],['Durchgängige Qualitätskontrolle','Inline-Überwachung mit Kameras (Vision Control)'],['Informationsaustausch Maschine ↔ Mensch vereinfachen','Echtzeitinfos und papierlose Anweisungen'],['Werkzeugmanagement optimieren','CPS erfassen Betriebsdaten der Werkzeuge und überwachen deren Lebenszyklus'],['Flexibilität und Effizienz der Montage erhöhen','Bauteile werden ergonomisch am Arbeitsplatz platziert und der Einbau wird automatisch überwacht'],['Feinplanung an Fertigungslinien optimieren','Schichtführer simulieren und ändern die Planung über Dashboards auf mobilen Endgeräten'],['Produktionsaufträge im ganzen Fertigungsprozess identifizieren','Bauteile werden automatisch erkannt, Aufträgen zugeordnet und mit MES/ERP abgeglichen'],['Wertschöpfende Zusatzleistungen für Kunden schaffen','Nutzungs- und Umgebungsdaten beim Kunden erfassen für Produktverbesserungen und neue Dienstleistungen']]);
C(2,'handlung','Handlungsfeld der Smart Factory',['Produktionsplanung','Produktionssteuerung','Vorhersage','Analyse'],[['Echtzeitmeldung der Ressourcenbelegung und des Personaleinsatzes','Produktionsplanung'],['Reihenfolge von Kundenaufträgen und Arbeitsgängen planen','Produktionsplanung'],['Alle Prozesse online überwachen und Abweichungen früh erkennen','Produktionssteuerung'],['Materialreichweite und Liefertermine berechnen','Vorhersage'],['Bevorstehende Instandhaltung und zu erwartende Qualität vorhersagen','Vorhersage'],['Kennzahlen und KPI online bereitstellen','Analyse'],['Langzeitanalysen mit maschinellem Lernen aus sehr großen Datenmengen','Analyse']]);
C(4,'smarthome','Einsatzgebiet im Smart Home',['Haushaltsgeräte und Komfort','Energieversorgung','Sicherheit'],[['Kühlschrank mit Kamera zeigt beim Einkauf, was noch da ist','Haushaltsgeräte und Komfort'],['Licht dimmt sich beim Einschalten der Multimedia-Anlage','Haushaltsgeräte und Komfort'],['Jalousien fahren bei Sonneneinstrahlung automatisch herunter','Haushaltsgeräte und Komfort'],['Heizung schaltet ab, wenn Fenster oder Türen offen sind','Energieversorgung'],['Licht geht aus, sobald niemand mehr im Raum ist','Energieversorgung'],['Bestehende Gebäude werden nachgerüstet, um Heizenergie zu sparen','Energieversorgung'],['Anwesenheit der Bewohner wird durch Licht und Rollläden simuliert','Sicherheit'],['Sensoren erkennen ein gekipptes Fenster und lassen es aus der Ferne schließen','Sicherheit'],['App benachrichtigt bei Einbruchsversuch Bewohner oder Sicherheitsdienst','Sicherheit']]);
C(4,'autofeld','Einsatzgebiet im Automotive-Bereich',['Flottenmanagement','Autonomes Fahren','Automotive Maintenance System','Infotainment und Telematik'],[['Echtzeit-Standortüberwachung einer Lkw-Flotte','Flottenmanagement'],['Überwachung von Volumen und Gewicht der Ladung in der Cloud','Flottenmanagement'],['Autonom fahrende Taxis mit Fußgängererkennung','Autonomes Fahren'],['Automatisierter ÖPNV erschließt den ländlichen Raum','Autonomes Fahren'],['Eingebettete Sensoren melden Verschleiß, KI wertet aus, Teile werden vorbeugend getauscht','Automotive Maintenance System'],['Bei einem Unfall wird automatisch der Notruf gewählt und die Position übermittelt','Infotainment und Telematik'],['Lieblingsmusik läuft vom Haus bis ins Auto ohne Unterbrechung','Infotainment und Telematik']]);
C(7,'vernetzung','Richtung der Vernetzung',['untereinander','innerhalb des Unternehmens','entlang der Wertschöpfungskette','mit dem Menschen'],[['Werkzeugmaschine und eingesetztes Werkzeug','untereinander'],['Werkzeug und SCADA-System','innerhalb des Unternehmens'],['Werkzeug überwacht seinen Verschleiß und löst beim Lieferanten eine Bestellung aus','entlang der Wertschöpfungskette'],['Maschinenführerin bereitet den Werkzeugwechsel vor','mit dem Menschen']]);
C(9,'mobilfunk','Mobilfunkgeneration',['2G','3G','4G'],[['GSM / GPRS / EDGE','2G'],['UMTS / HSPA','3G'],['LTE','4G']]);
S(4,'arbeit','Welche Technik passt zum Einsatzgebiet?',[['Restfeuchtigkeit in einer Wand nach einem Wasserschaden melden','Feuchtigkeitssensor in der Wand'],['Verstopfte Regenrinne erkennen, weil sich der Wasserstand nicht ändert','Gewichtssensor (definiertes Gewicht entspricht dem Wasserstand)'],['Fenster automatisch öffnen, wenn es innen feuchter ist als außen','Kombisensor innen und außen mit Wenn-Dann-Regel'],['Wasserqualität eines Badesees aus der Ferne überwachen','Fernüberwachung mit Wasserqualitäts-Sensoren'],['Temperatur eines Lebensmittels entlang der ganzen Kühlkette dokumentieren','Kleinstsensor an der Verpackung, Daten per Nahfeldkommunikation an IoT-Gateways'],['Zustand eines Denkmals aus der Ferne kontrollieren','Nachträglich am Bauwerk angebrachte Sensoren, deren Daten drahtlos an die Firma gehen']]);
function makeScen(e){
  const answers=[...new Set(e.items.map(x=>x[1]))];
  if(rn(3)===0&&answers.length>=4){const pool=sh(e.items),used=new Set(),sel=[];for(const x of pool){if(!used.has(x[1])){used.add(x[1]);sel.push(x)}if(sel.length===5)break}return base(e,{t:'mt',q:`Szenarien zuordnen – ${e.prompt}`,p:sel})}
  const it=pk(e.items);
  return base(e,{t:'mc',q:`Szenario: ${it[0]}. ${e.prompt}`,o:[it[1],...sh(answers.filter(a=>a!==it[1])).slice(0,3)]});
}

/* ================= 4) RECHEN-/PROZESS-GENERATOREN ================= */
function G(k,name,l){Q.push({t:'gen',gen:name,id:'p:'+name,k,l:l||'A',need:3})}
G(10,'wild');G(13,'ida');G(13,'ampel');G(10,'topicbad');G(2,'pyrnb','V');G(9,'sortrange');G(9,'sortrate');
function match(f,t){const a=f.split('/'),b=t.split('/');for(let i=0;i<a.length;i++){if(a[i]==='#')return true;if(i>=b.length)return false;if(a[i]!=='+'&&a[i]!==b[i])return false}return a.length===b.length}
function makeWild(e){
  const B=pk(['Buerogebaeude','Werkhalle','Lagerhaus']),F=['Erdgeschoss','Obergeschoss'],R=sh(['Serverraum','Besprechung','Labor','Pausenraum','Empfang']).slice(0,3),M=sh(['Temperatur','Luftfeuchtigkeit','CO2']).slice(0,2);
  let all=[];F.forEach(f=>R.forEach(r=>M.forEach(m=>all.push(`${B}/${f}/${r}/${m}`))));
  all.push(`Rechenzentrum/Erdgeschoss/${R[0]}/${M[0]}`);
  const f=pk(F),r=pk(R),m=pk(M);
  const filters=[`${B}/${f}/+/${m}`,`${B}/${f}/#`,`${B}/+/${r}/${m}`,`${B}/#`,`${B}/${f}/${r}/#`];
  const filt=pk(filters);const yes=all.filter(t=>match(filt,t)),no=all.filter(t=>!match(filt,t));
  if(!yes.length||!no.length)return makeWild(e);
  return base(e,{t:'ms',q:`Ein Client abonniert „${filt}“. Welche dieser Topics erhält er?`,c:sh(yes).slice(0,3),w:sh(no).slice(0,3),e:'„+“ ersetzt genau eine Ebene, „#“ ersetzt alle folgenden Ebenen (steht nur am Ende).'});
}
function idaOf(p){return p<800?0:p<=1000?1:p<=1400?2:3}
const IDAN=['IDA 1 (hohe Qualität)','IDA 2 (mittlere Qualität)','IDA 3 (mäßige Qualität)','IDA 4 (niedrige Qualität)'];
function makeIda(e){
  if(rn(3)===0){const d=pk([150,250,350,450,550,650,750,850,1100,1300]);const c=d<400?0:d<=600?1:d<=1000?2:3;
    return base(e,{t:'mc',q:`Die CO₂-Konzentration liegt ${d} ppm ÜBER der Außenluft. Welche Kategorie (DIN EN 13779)?`,o:[IDAN[c],...IDAN.filter((_,i)=>i!==c)],e:'Erhöhung ggü. Außenluft: IDA 1 < 400 · IDA 2 400–600 · IDA 3 600–1000 · IDA 4 > 1000 ppm.'})}
  let p;do{p=450+10*rn(150)}while([800,1000,1400].includes(p));const c=idaOf(p);
  return base(e,{t:'mc',q:`Die absolute CO₂-Konzentration im Raum beträgt ${p} ppm. Welche Raumluftkategorie (DIN EN 13779) ist das?`,o:[IDAN[c],...IDAN.filter((_,i)=>i!==c)],e:'Absolut: IDA 1 < 800 · IDA 2 800–1000 · IDA 3 1000–1400 · IDA 4 > 1400 ppm.'});
}
function makeAmpel(e){
  const [a,b]=pk([[800,1400],[1000,1500],[700,1200],[600,1000]]);let p;do{p=300+10*rn(180)}while(p===a||p===b);
  const c=p<a?'Grün':p<b?'Gelb':'Rot';
  return base(e,{t:'mc',q:`Ampel-Logik für drei LEDs: Grün unter ${a} ppm CO₂, Gelb von ${a} bis ${b} ppm, Rot über ${b} ppm. Welche LED leuchtet bei ${p} ppm?`,o:[c,...['Grün','Gelb','Rot'].filter(x=>x!==c)]});
}
function makeTopicBad(e){
  const W1=['buero','werk','lager','haus'],W2=['og','eg','halle1','keller'],W3=['serverraum','ofen','labor','flur'],W4=['temperatur','druck','feuchte','co2'];
  const g=()=>`${pk(W1)}/${pk(W2)}/${pk(W3)}/${pk(W4)}`;
  const bads=[[()=>'/'+g(),'Ein Schrägstrich am Anfang erzeugt eine unnötige leere Topic-Ebene.'],[()=>g().replace(/\/(\w+)$/,'/$1 wert'),'Leerzeichen in Topics sind schwer lesbar und fehleranfällig.'],[()=>g().replace(/^[^/]+/,pk(['büro','wärme','lüftung'])),'Umlaute/Sonderzeichen sind nicht ASCII-konform und werden oft falsch dargestellt.'],[()=>'$'+g(),'Das Dollarzeichen am Anfang ist für interne Statistiken des Brokers reserviert.']];
  const b=pk(bads);const bad=b[0]();const good=new Set();while(good.size<3){const t=g();if(t!==bad)good.add(t)}
  return base(e,{t:'mc',q:'Welches dieser Topics verstößt gegen die Regeln für gute Topic-Strukturen?',o:[bad,...good],e:b[1]});
}
const LEV=[['Unternehmensleitebene (ERP)'],['Betriebsleitebene (MES)'],['Prozessleitebene (SCADA)'],['Steuerungsebene (SPS, CNC)'],['Feldebene (Sensoren, Aktoren)']].map(x=>x[0]);
function makePyrNb(e){
  const up=rn(2)===0,i=up?1+rn(4):rn(4),t=up?i-1:i+1;
  return base(e,{t:'mc',q:`Welche Ebene der Automatisierungspyramide liegt direkt ${up?'ÜBER':'UNTER'} der ${LEV[i]}?`,o:[LEV[t],...sh(LEV.filter((_,j)=>j!==t&&j!==i)).slice(0,3)]});
}
const RANGE=[['NFC (ca. 10 cm)',0.1],['Z-Wave (max. 30 m)',30],['Wi-Fi (bis ca. 100 m)',100],['NB-IoT (bis ca. 10 km)',10000]];
function makeSortRange(e){const n=3+rn(2),s=sh(RANGE).slice(0,n),d=rn(2)===0;s.sort((a,b)=>d?a[1]-b[1]:b[1]-a[1]);
  return base(e,{t:'od',q:`Sortiere nach Reichweite – ${d?'von KLEIN nach GROSS':'von GROSS nach KLEIN'}.`,items:s.map(x=>x[0])})}
const RATE=[['LoRaWAN (max. 50 kbit/s)',50],['Z-Wave (100 kbit/s)',100],['ZigBee (250 kbit/s)',250],['Bluetooth (1 Mbit/s)',1000],['Wi-Fi (bis 600 Mbit/s)',600000],['5G (ca. 1 Gbit/s)',1000000]];
function makeSortRate(e){const s=sh(RATE).slice(0,4),d=rn(2)===0;s.sort((a,b)=>d?a[1]-b[1]:b[1]-a[1]);
  return base(e,{t:'od',q:`Sortiere nach Datenrate – ${d?'von NIEDRIG nach HOCH':'von HOCH nach NIEDRIG'}.`,items:s.map(x=>x[0])})}

/* ================= 5) LÜCKENTEXTE (statisch, Wortbank) ================= */
function Z(k,text,extra,ordered){Q.push({k,l:'V',t:'cz',q:'Lückentext',text,extra:extra||[],ordered:!!ordered})}
Z(10,'MQTT arbeitet nach dem {Publish/Subscribe}-Prinzip. Ein {Broker} nimmt Nachrichten entgegen und verteilt sie an alle {Subscriber} des passenden {Topics}.',['Request/Response','Router']);
Z(13,'Bei I²C braucht man die Leitungen {SDA} (Daten) und {SCL} (Takt). SPI nutzt zusätzlich die Leitung {CS}, mit der der Master den {Slave} auswählt.',['TX','RX']);
Z(5,'Die Entwicklungsstufen der Industrie: {Mechanisierung} (1.0), {Massenproduktion} (2.0), {Automatisierung} (3.0) und {cyber-physische Systeme} (4.0).',['Digitalisierung']);
Z(2,'Die Automatisierungspyramide von oben nach unten: {ERP}, {MES}, {SCADA}, {SPS} und die Feldebene mit Sensoren und {Aktoren}.',['CRM','HMI'],true);
Z(2,'Das {ERP} plant das Unternehmen, das {MES} setzt die Aufträge in der Fertigung um, {SCADA} überwacht die Anlage am Bildschirm und die {SPS} steuert die einzelne Maschine.',['CRM','HMI']);
Z(7,'Der {Sensor} misst den Istwert, der {Komparator} vergleicht ihn mit dem {Sollwert}, der {Aktor} heizt oder kühlt. Die Rückführung des Istwerts heißt {Rückkopplung}.',['Broker','Steuerung']);
Z(8,'MQTT liegt in der {Anwendungsschicht}, TCP in der {Transportschicht}, IP in der {Vermittlungsschicht}, LPWAN in der {Sicherungsschicht} und Bluetooth in der {Bitübertragungsschicht}.',[]);
Z(10,'QoS {0} bedeutet höchstens einmal, QoS {1} mindestens einmal, QoS {2} genau einmal. Bei QoS 2 folgt auf PUBLISH zuerst PUBREC, dann {PUBREL} und zuletzt {PUBCOMP}.',['PUBACK','3']);
Z(6,'Die sechs Anforderungen an eine IoT-Plattform: {Konnektivität#a}, offene {Schnittstellen}, {Management#a}, {Datenanalyse#a}, {Reporting#a} und {Sicherheit#a}.',['Verpackung']);
Z(12,'Bei Rauch alarmiert der {Rauchmelder} Feuerwehr und IT, danach startet der {Disaster-Recovery-Plan}. Bei Netzausfall überbrückt die {USV}.',['Doppelboden']);
Z(13,'Das {EVA}-Prinzip steht für Eingabe, Verarbeitung, Ausgabe. Betrachtet werden die Flüsse {Information#a}, {Materie#a} und {Energie#a}.',['Geld']);
Z(9,'RFID identifiziert Tags per {elektromagnetischem Feld}, NFC reicht nur etwa {10 cm} weit und LoRaWAN ist ein {LPWAN} mit mehreren Kilometern Reichweite.',['Lichtwellenleiter','100 m']);
Z(7,'Ein {Mikrocontroller} führt ein Programm zyklisch aus. Ein {Einplatinencomputer} wie der Raspberry Pi hat ein Betriebssystem. Der {ESP32} besitzt WLAN und zusätzlich {Bluetooth}.',['Router']);
Z(1,'Zu den {Business-Anwendungen} zählen CRM und ERP. Daten aus der {Fertigung} liefern MES, SCADA, HMI und SPS.',['Cloud']);
Z(12,'MQTT wird über {Benutzername} und Passwort, über {TLS#a} und über {Zertifikate#a} abgesichert.',['Klartext']);
Z(3,'Das {IoT} ist der Oberbegriff für vernetzte Objekte. Das {IIoT} beschränkt sich auf den industriellen Einsatz mit Maschinen und {Anlagen}.',['Consumer']);

/* ================= Dispatcher ================= */
const MAKERS={def:makeDef,cat:makeCat,scen:makeScen,wild:makeWild,ida:makeIda,ampel:makeAmpel,topicbad:makeTopicBad,pyrnb:makePyrNb,sortrange:makeSortRange,sortrate:makeSortRate};
Q.forEach(e=>{if(e.t==='gen')e.make=()=>MAKERS[e.gen](e)});
})();
