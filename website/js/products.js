/* =========================================================================
   PRODUCTS & ROOMS  —  this is the file you edit (together with Claude)
   -------------------------------------------------------------------------
   PRODUCTS = your pieces.   ROOMS = the photos you click through.
   A hotspot in a room is EITHER a product OR a doorway to another room.
   x/y are percentages (from the left / from the top).
   To take a payment: create a Mollie payment link and paste it into the
   "betaallink" field of a product — a "Buy now" button appears automatically.
   ========================================================================= */

const CONTACT = {
  email:    "zakelijk.roelofs@gmail.com",
  whatsapp: "",                       // optional, e.g. "31612345678"
  merk:     "Collector's Room",
  kvk:      "84405252",
  tiktok:   "https://www.tiktok.com/@collectors.room"
};

const PRODUCTS = [
  {
    id: "kapstok",
    naam: "Space-age coat stand in cream",
    categorie: "Coat stand \u00b7 sculptural",
    laag: "B",
    prijs: "\u20ac480",
    prijsNoot: "indicative",
    foto: "images/kapstok.jpg",
    specs: [["Period","1970s"],["Style","Italian space-age"],["Material","cream plastic"],["Condition","good vintage condition"]],
    verhaal: "A coat stand that hijacks the hallway. Not a background piece but a sculpture on a stem \u2014 round hooks, milky-white plastic, pure 1970s bravado. One of one.",
    betaallink: ""
  },
  {
    id: "buste",
    naam: "Bronze bust of David",
    categorie: "Sculpture \u00b7 object",
    laag: "C",
    prijs: "\u20ac1.250",
    prijsNoot: "indicative",
    foto: "images/buste.jpg",
    specs: [["Subject","David, after Michelangelo"],["Material","bronze & copper"],["Base","gilded"],["Condition","warm, lived-in patina"]],
    verhaal: "No plaster, no copy of a copy. Solid bronze with a patina that took years, on a gilded base. Put it on a plinth and the room bends toward it.",
    betaallink: ""
  },
  {
    id: "trolley",
    naam: "Boby trolley \u2014 Joe Colombo",
    categorie: "Icons \u00b7 design classic",
    laag: "C",
    prijs: "\u20ac650",
    prijsNoot: "indicative",
    foto: "images/trolley.jpg",
    specs: [["Designer","Joe Colombo"],["Maker","Bieffeplast"],["Type","mobile trolley"],["Colour","black"]],
    verhaal: "The icon collectors search for by name. Joe Colombo's Boby \u2014 swivelling drawers, rolls wherever you want, designed when the future was still made of plastic. Design history on wheels.",
    betaallink: ""
  },
  {
    id: "spiegel",
    naam: "Gilded floor mirror, oval",
    categorie: "Mirrors \u00b7 statement",
    laag: "C",
    prijs: "\u20ac2.200",
    prijsNoot: "indicative",
    foto: "images/spiegel.jpg",
    specs: [["Shape","oval, tilting"],["Frame","gilded floral relief"],["Detail","draped swag"],["Type","cheval / full-length"]],
    verhaal: "Unapologetically lavish. A tilting full-length mirror in a gilded floral relief with a draped swag \u2014 pure baroque excess, exactly where minimalism ends. One of one.",
    betaallink: ""
  },
  {
    id: "fauteuil",
    naam: "Black & white swivel chair, graphic",
    categorie: "Seating \u00b7 statement",
    laag: "C",
    prijs: "\u20ac1.650",
    prijsNoot: "indicative",
    foto: "images/fauteuil.jpg",
    specs: [["Shape","round tub, swivel"],["Fabric","graphic black & white"],["Base","brass"],["Mood","bold, modern"]],
    verhaal: "A chair as artwork. A round tub, swivelling on a brass base, upholstered in a graphic black-and-white print that takes over the whole room. Sit down and you're in the middle of the statement.",
    betaallink: ""
  },
  {
    id: "tafel",
    naam: "Wooden coffee table with sculptural legs",
    categorie: "Tables \u00b7 design piece",
    laag: "C",
    prijs: "\u20ac1.900",
    prijsNoot: "indicative",
    foto: "images/tafel.jpg",
    specs: [["Style","Dutch / Scandinavian"],["Period","1950s"],["Material","birch / beech"],["Detail","pierced legs"]],
    verhaal: "A connoisseur's piece: pale wood, sculpted pierced legs, a lower shelf for your finest books. Quiet craftsmanship that only reveals itself when you look closely.",
    betaallink: ""
  },
  {
    id: "rolkast",
    naam: "Op-art rolling cabinet with circle motif",
    categorie: "Storage \u00b7 space-age",
    laag: "B",
    prijs: "\u20ac1.450",
    prijsNoot: "indicative",
    foto: "images/rolkast.jpg",
    specs: [["Period","1970s"],["Style","pop / op-art"],["Motif","circle in orange & pink"],["Base","on castors"]],
    verhaal: "A cabinet that shouts. Cream with a bright orange circle in a pink ring, on castors \u2014 pop-art you can't hide anywhere. For anyone done with boring storage.",
    betaallink: ""
  }
];

/* ===== ROOMS ===== */
const ROOMS = [
  {
    id: "hal",
    naam: "The hallway",
    foto: "images/hal.jpg",
    hotspots: [
      { type:"product", id:"kapstok", x:11, y:42 },
      { type:"product", id:"trolley", x:27, y:64 },
      { type:"product", id:"buste",   x:80, y:33 },
      { type:"room", to:"woonkamer", label:"Enter the living room", x:82, y:91 }
    ]
  },
  {
    id: "woonkamer",
    naam: "The living room",
    foto: "images/woonkamer.jpg",
    hotspots: [
      { type:"product", id:"spiegel",  x:32, y:44 },
      { type:"product", id:"fauteuil", x:54, y:54 },
      { type:"product", id:"tafel",    x:57, y:80 },
      { type:"product", id:"rolkast",  x:83, y:58 },
      { type:"room", to:"hal", label:"Hallway", dir:"back", x:7, y:18 }
    ]
  }
];
