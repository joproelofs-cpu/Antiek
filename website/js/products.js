/* =========================================================================
   PRODUCTEN & KAMERS  —  dit bestand bewerk je (samen met Claude)
   =========================================================================
   PRODUCTS = je stukken.   ROOMS = de foto's waar je doorheen klikt.
   Een klikpunt in een kamer is OF een product OF een doorgang naar een
   andere kamer. x/y zijn percentages (vanaf links / vanaf boven).
   ========================================================================= */

const CONTACT = {
  email:    "jouw@email.nl",          // <-- VUL IN: hier komen aanvragen binnen
  whatsapp: "",                       // <-- optioneel: bv "31612345678"
  merk:     "Collector's Room"
};

const PRODUCTS = [
  {
    id: "kapstok",
    naam: "Space-age kapstok in cr\u00e8me",
    categorie: "Garderobe \u00b7 sculpturaal",
    laag: "B",
    prijs: "\u20ac480",
    prijsNoot: "indicatief",
    foto: "images/kapstok.jpg",
    specs: [["Periode","jaren '70"],["Stijl","Italiaans space-age"],["Materiaal","cr\u00e8me kunststof"],["Staat","mooie vintage staat"]],
    verhaal: "Een kapstok die de hal kaapt. Geen ondergeschikt meubel maar een sculptuur op een voet \u2014 ronde haken, melkwitte kunststof, pure jaren '70-bravoure. \u00c9\u00e9n van \u00e9\u00e9n.",
    betaallink: ""
  },
  {
    id: "buste",
    naam: "Bronzen buste van David",
    categorie: "Sculptuur \u00b7 object",
    laag: "C",
    prijs: "\u20ac1.250",
    prijsNoot: "indicatief",
    foto: "images/buste.jpg",
    specs: [["Onderwerp","David, naar Michelangelo"],["Materiaal","brons/koper"],["Voet","verguld"],["Staat","warme, geleefde patina"]],
    verhaal: "Geen gips, geen kopie van de kopie. Massief brons met een patina die jaren kostte, op een verguld voetstuk. Zet hem op een sokkel en de kamer buigt naar hem toe.",
    betaallink: ""
  },
  {
    id: "trolley",
    naam: "Boby-trolley \u2014 Joe Colombo",
    categorie: "Iconen \u00b7 designklassieker",
    laag: "C",
    prijs: "\u20ac650",
    prijsNoot: "indicatief",
    foto: "images/trolley.jpg",
    specs: [["Ontwerper","Joe Colombo"],["Producent","Bieffeplast"],["Type","verrijdbare trolley"],["Kleur","zwart"]],
    verhaal: "Het icoon waar verzamelaars op naam naar zoeken. Joe Colombo's Boby \u2014 draaiende laden, rolt waar je wilt, ontworpen toen de toekomst nog van plastic was. Designgeschiedenis op wieltjes.",
    betaallink: ""
  },
  {
    id: "spiegel",
    naam: "Vergulde staande spiegel, ovaal",
    categorie: "Spiegels \u00b7 statement",
    laag: "C",
    prijs: "\u20ac2.200",
    prijsNoot: "indicatief",
    foto: "images/spiegel.jpg",
    specs: [["Vorm","ovaal, kantelbaar"],["Lijst","verguld bloemenreli\u00ebf"],["Detail","gedrapeerde swag"],["Type","cheval / passpiegel"]],
    verhaal: "Onbeschaamd weelderig. Een kantelbare passpiegel in een verguld bloemenreli\u00ebf met gedrapeerde swag \u2014 pure barokke overdaad, precies waar minimalisme ophoudt. \u00c9\u00e9n van \u00e9\u00e9n.",
    betaallink: ""
  },
  {
    id: "fauteuil",
    naam: "Zwart-wit draaifauteuil, grafisch",
    categorie: "Zitmeubels \u00b7 statement",
    laag: "C",
    prijs: "\u20ac1.650",
    prijsNoot: "indicatief",
    foto: "images/fauteuil.jpg",
    specs: [["Vorm","ronde tub, draaibaar"],["Stof","grafisch zwart-wit"],["Voet","messing"],["Sfeer","modern \u00b7 brutaal"]],
    verhaal: "Een fauteuil als kunstwerk. Ronde kuip, draaibaar op een messing voet, bekleed in een grafisch zwart-wit dessin dat de hele kamer overneemt. Ga zitten en je zit middenin het statement.",
    betaallink: ""
  },
  {
    id: "tafel",
    naam: "Houten salontafel met sculpturale poten",
    categorie: "Tafels \u00b7 designstuk",
    laag: "C",
    prijs: "\u20ac1.900",
    prijsNoot: "indicatief",
    foto: "images/tafel.jpg",
    specs: [["Stijl","Nederlands/Scandinavisch"],["Periode","jaren '50"],["Materiaal","berken/beuken"],["Detail","doorboorde poten"]],
    verhaal: "Een kennersstuk: blank hout, gestileerde doorboorde poten, een ondertablet voor je mooiste boeken. Stil vakmanschap dat zich pas verraadt als je goed kijkt.",
    betaallink: ""
  },
  {
    id: "rolkast",
    naam: "Op-art rolkast met cirkelmotief",
    categorie: "Opbergen \u00b7 space-age",
    laag: "B",
    prijs: "\u20ac1.450",
    prijsNoot: "indicatief",
    foto: "images/rolkast.jpg",
    specs: [["Periode","jaren '70"],["Stijl","pop / op-art"],["Motief","cirkel in oranje & roze"],["Onderstel","op wieltjes"]],
    verhaal: "Een kast die schreeuwt. Cr\u00e8me met een knaloranje cirkel in een roze ring, op wieltjes \u2014 pop-art die je nergens kunt verstoppen. Voor wie klaar is met saaie kasten.",
    betaallink: ""
  }
];

/* ===== KAMERS =====
   Elke kamer is \u00e9\u00e9n foto. 'hotspots' zijn de klikpunten erop:
   - { type:"product", id:"<product-id>", x, y }  -> opent dat product
   - { type:"room", to:"<kamer-id>", label:"...", x, y } -> volgende kamer
   De volgende kamer (Woonkamer) voeg je hier later toe als nieuw blok. */

const ROOMS = [
  {
    id: "hal",
    naam: "De hal",
    foto: "images/hal.jpg",
    hotspots: [
      { type:"product", id:"kapstok", x:11, y:42 },
      { type:"product", id:"trolley", x:27, y:64 },
      { type:"product", id:"buste",   x:80, y:33 },
      { type:"room",    to:"woonkamer", label:"Ga naar de woonkamer", x:82, y:91 }
    ]
  },
  {
    id: "woonkamer",
    naam: "De woonkamer",
    foto: "images/woonkamer.jpg",
    hotspots: [
      { type:"product", id:"spiegel",  x:32, y:44 },
      { type:"product", id:"fauteuil", x:54, y:54 },
      { type:"product", id:"tafel",    x:57, y:80 },
      { type:"product", id:"rolkast",  x:83, y:58 },
      { type:"room", to:"hal", label:"Hal", dir:"back", x:7, y:18 }
    ]
  }
];
