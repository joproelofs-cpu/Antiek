/* =========================================================================
   PRODUCTEN  —  dit is het ENIGE bestand dat je hoeft te bewerken
   =========================================================================

   Een product toevoegen?  Kopieer één blok hieronder (van { tot },)
   en vul het in. Een product weghalen? Verwijder het blok.

   Velden:
   - id          : kort, uniek, geen spaties (bv. "dressoir-2")
   - naam        : de titel
   - categorie   : kleine regel boven de titel
   - laag        : "A" (instapper), "B" (midden) of "C" (topstuk)
   - prijs       : tekst, bv. "€3.400" of "vanaf €35"
   - prijsNoot   : klein tekstje achter de prijs (mag leeg "")
   - foto        : bestandsnaam in de map images/, bv. "images/dressoir.jpg"
   - specs       : lijstje [label, waarde] — zoveel je wilt
   - verhaal     : 1–3 zinnen
   - betaallink  : plak hier je Mollie-betaallink ("" = alleen aanvraag-knop)
   - hotspot     : { x, y } in % om het in de kamer te tonen, of null
   ========================================================================= */

const CONTACT = {
  email:    "jouw@email.nl",   // <-- VUL IN: hier komen aanvragen binnen
  whatsapp: "",                // <-- optioneel: bv "31612345678" (zonder +), leeg = uit
  merk:     "[ jouw merk ]"    // <-- VUL IN: je winkelnaam
};

const PRODUCTS = [
  {
    id: "dressoir",
    naam: "Italiaans dressoir in rozenhout",
    categorie: "Opbergen · topstuk",
    laag: "C",
    prijs: "€3.400",
    prijsNoot: "indicatief",
    foto: "images/dressoir.jpg",
    specs: [["Herkomst","Italië"],["Periode","ca. 1960"],["Materiaal","rozenhout · messing"],["Staat","mooie originele staat"]],
    verhaal: "Het pronkstuk: lang en laag, met zwart blad en getorste poten met messing dopjes. Een stuk voor de kenner en de inrichter — verkoopt op herkomst en allure.",
    betaallink: "",
    hotspot: { x: 26.5, y: 57 }
  },
  {
    id: "tafel",
    naam: "Berken salontafel met sculpturale poten",
    categorie: "Tafels · designstuk",
    laag: "C",
    prijs: "€1.900",
    prijsNoot: "indicatief",
    foto: "images/tafel.jpg",
    specs: [["Stijl","Nederlands/Scandinavisch"],["Periode","jaren '50"],["Materiaal","berken/beuken"],["Detail","doorboorde poten"]],
    verhaal: "Een kennersstuk: blank hout, gestileerde doorboorde poten, in de sfeer van Pastoe/Braakman. Verkoopt op het designverhaal en de toeschrijving.",
    betaallink: "",
    hotspot: { x: 49, y: 73 }
  },
  {
    id: "fauteuils",
    naam: "Oranje loungefauteuils (set van 2)",
    categorie: "Zitmeubels · statement",
    laag: "B",
    prijs: "€1.250",
    prijsNoot: "indicatief · per set",
    foto: "images/fauteuils.jpg",
    specs: [["Periode","jaren '70"],["Stijl","space-age · draaibaar"],["Bekleding","oranje velours"],["Aantal","set van 2"]],
    verhaal: "Puur lef en sfeer. Geen naam nodig om te verkopen — dit is het gespreksstuk waar de liefhebber voor valt. Verkoopt op beeld en durf.",
    betaallink: "",
    hotspot: { x: 60.5, y: 52 }
  },
  {
    id: "boby",
    naam: "Boby-trolley — Joe Colombo",
    categorie: "Iconen · designklassieker",
    laag: "C",
    prijs: "€650",
    prijsNoot: "indicatief",
    foto: "images/boby.jpg",
    specs: [["Ontwerper","Joe Colombo"],["Producent","Bieffeplast"],["Type","verrijdbare trolley"],["Herkenning","verkoopt op naam"]],
    verhaal: "Een echt icoon. De kenner zoekt hier letterlijk op naam. Bouw er autoriteitscontent omheen: 'hoe herken je een originele Boby'.",
    betaallink: "",
    hotspot: { x: 76, y: 62 }
  },
  {
    id: "barkast",
    naam: "Barkast in zwart & messing",
    categorie: "Opbergen · glamour",
    laag: "B",
    prijs: "€1.450",
    prijsNoot: "indicatief",
    foto: "images/barkast.jpg",
    specs: [["Periode","jaren '70"],["Stijl","Hollywood regency"],["Materiaal","zwart · chroom · messing"],["Sfeer","avond · glamour"]],
    verhaal: "Glamour op wielen. Een sfeerstuk voor de liefhebber die durft. Verkoopt op uitstraling, niet op specificaties.",
    betaallink: "",
    hotspot: { x: 87.5, y: 58 }
  }
];
