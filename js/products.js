/* PRODUCTEN & KAMERS */

const CONTACT = {
  email:    "jouw@email.nl",
  whatsapp: "",
  merk:     "Collector's Room"
};

const PRODUCTS = [
  { id:"kapstok", naam:"Space-age kapstok in crème", categorie:"Garderobe · sculpturaal", laag:"B", prijs:"€480", prijsNoot:"indicatief", foto:"images/kapstok.jpg", specs:[["Periode","jaren '70"],["Stijl","Italiaans space-age"],["Materiaal","crème kunststof"],["Staat","mooie vintage staat"]], verhaal:"Een kapstok die de hal kaapt. Geen ondergeschikt meubel maar een sculptuur op een voet — ronde haken, melkwitte kunststof, pure jaren '70-bravoure. Één van één.", betaallink:"" },
  { id:"buste", naam:"Bronzen buste van David", categorie:"Sculptuur · object", laag:"C", prijs:"€1.250", prijsNoot:"indicatief", foto:"images/buste.jpg", specs:[["Onderwerp","David, naar Michelangelo"],["Materiaal","brons/koper"],["Voet","verguld"],["Staat","warme, geleefde patina"]], verhaal:"Geen gips, geen kopie van de kopie. Massief brons met een patina die jaren kostte, op een verguld voetstuk. Zet hem op een sokkel en de kamer buigt naar hem toe.", betaallink:"" },
  { id:"trolley", naam:"Boby-trolley — Joe Colombo", categorie:"Iconen · designklassieker", laag:"C", prijs:"€650", prijsNoot:"indicatief", foto:"images/trolley.jpg", specs:[["Ontwerper","Joe Colombo"],["Producent","Bieffeplast"],["Type","verrijdbare trolley"],["Kleur","zwart"]], verhaal:"Het icoon waar verzamelaars op naam naar zoeken. Joe Colombo's Boby — draaiende laden, rolt waar je wilt, ontworpen toen de toekomst nog van plastic was. Designgeschiedenis op wieltjes.", betaallink:"" },
  { id:"spiegel", naam:"Vergulde staande spiegel, ovaal", categorie:"Spiegels · statement", laag:"C", prijs:"€2.200", prijsNoot:"indicatief", foto:"images/spiegel.jpg", specs:[["Vorm","ovaal, kantelbaar"],["Lijst","verguld bloemenreliëf"],["Detail","gedrapeerde swag"],["Type","cheval / passpiegel"]], verhaal:"Onbeschaamd weelderig. Een kantelbare passpiegel in een verguld bloemenreliëf met gedrapeerde swag — pure barokke overdaad, precies waar minimalisme ophoudt. Één van één.", betaallink:"" },
  { id:"fauteuil", naam:"Zwart-wit draaifauteuil, grafisch", categorie:"Zitmeubels · statement", laag:"C", prijs:"€1.650", prijsNoot:"indicatief", foto:"images/fauteuil.jpg", specs:[["Vorm","ronde tub, draaibaar"],["Stof","grafisch zwart-wit"],["Voet","messing"],["Sfeer","modern · brutaal"]], verhaal:"Een fauteuil als kunstwerk. Ronde kuip, draaibaar op een messing voet, bekleed in een grafisch zwart-wit dessin dat de hele kamer overneemt.", betaallink:"" },
  { id:"tafel", naam:"Houten salontafel met sculpturale poten", categorie:"Tafels · designstuk", laag:"C", prijs:"€1.900", prijsNoot:"indicatief", foto:"images/tafel.jpg", specs:[["Stijl","Nederlands/Scandinavisch"],["Periode","jaren '50"],["Materiaal","berken/beuken"],["Detail","doorboorde poten"]], verhaal:"Een kennersstuk: blank hout, gestileerde doorboorde poten. Stil vakmanschap dat zich pas verraadt als je goed kijkt.", betaallink:"" },
  { id:"rolkast", naam:"Op-art rolkast met cirkelmotief", categorie:"Opbergen · space-age", laag:"B", prijs:"€1.450", prijsNoot:"indicatief", foto:"images/rolkast.jpg", specs:[["Periode","jaren '70"],["Stijl","pop / op-art"],["Motief","cirkel in oranje & roze"],["Onderstel","op wieltjes"]], verhaal:"Een kast die schreeuwt. Crème met een knaloranje cirkel in een roze ring, op wieltjes — pop-art die je nergens kunt verstoppen.", betaallink:"" }
];

const ROOMS = [
  { id:"hal", naam:"De hal", foto:"images/hal.jpg", hotspots:[
    { type:"product", id:"kapstok", x:11, y:42 },
    { type:"product", id:"trolley", x:27, y:64 },
    { type:"product", id:"buste",   x:80, y:33 },
    { type:"room", to:"woonkamer", label:"Ga naar de woonkamer", x:82, y:91 }
  ]},
  { id:"woonkamer", naam:"De woonkamer", foto:"images/woonkamer.jpg", hotspots:[
    { type:"product", id:"spiegel",  x:32, y:44 },
    { type:"product", id:"fauteuil", x:54, y:54 },
    { type:"product", id:"tafel",    x:57, y:80 },
    { type:"product", id:"rolkast",  x:83, y:58 },
    { type:"room", to:"hal", label:"Hal", dir:"back", x:7, y:18 }
  ]}
];
