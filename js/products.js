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
  merk:     "Antiek in het Antiek"
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
      { type:"room",    to:"woonkamer", label:"Woonkamer", x:57, y:40 }
    ]
  }
  /* ,
  {
    id: "woonkamer",
    naam: "De woonkamer",
    foto: "images/woonkamer.jpg",
    hotspots: [ ... ]
  }
  */
];
