/* Mid Century collection — products & room for midcentury.html */

const CONTACT = {
  email:    "zakelijk.roelofs@gmail.com",
  whatsapp: "",
  merk:     "Collector's Room",
  kvk:      "84405252",
  tiktok:   "https://www.tiktok.com/@collectors.room"
};
const CHECKOUT = { mollie: true };

const PRODUCTS = [
  {
    id: "mc_lounge",
    naam: "Orange & yellow swivel lounge chair",
    categorie: "Seating \u00b7 space-age",
    laag: "C",
    prijs: "\u20ac1.250",
    prijsNoot: "indicative",
    foto: "images/mc-oranje.jpg",
    specs: [["Period","1970s"],["Shell","yellow moulded"],["Upholstery","orange velvet"],["Base","swivel"]],
    verhaal: "Pure 1970s optimism. A moulded yellow shell wrapped in warm orange velvet, spinning on a swivel base. The kind of chair a room is built around.",
    betaallink: ""
  },
  {
    id: "mc_bar",
    naam: "Chrome & smoked-glass bar cart",
    categorie: "Bar \u00b7 illuminated",
    laag: "C",
    prijs: "\u20ac1.450",
    prijsNoot: "indicative",
    foto: "images/mc-barkast.jpg",
    specs: [["Period","1970s"],["Material","chrome & smoked glass"],["Feature","interior light"],["Base","on castors"]],
    verhaal: "Cocktail hour on wheels. Smoked glass, ribbed chrome and a warm interior light that makes the glassware glow. Roll it out and the evening starts itself.",
    betaallink: ""
  },
  {
    id: "mc_green",
    naam: "Green leather office chair",
    categorie: "Seating \u00b7 studio",
    laag: "B",
    prijs: "\u20ac680",
    prijsNoot: "indicative",
    foto: "images/mc-groen.jpg",
    specs: [["Period","1970s"],["Leather","dark green"],["Piping","cream"],["Base","swivel, on castors"]],
    verhaal: "A statement desk chair with real presence. Deep green leather, crisp cream piping, and a swivel base on castors. Work has never looked this good.",
    betaallink: ""
  }
];

const ROOMS = [
  {
    id: "mc-room",
    naam: "The mid-century room",
    foto: "images/mc-room.jpg",
    hotspots: [
      { type:"product", id:"mc_lounge", x:22, y:58 },
      { type:"product", id:"mc_bar",    x:48, y:70 },
      { type:"product", id:"mc_green",  x:66, y:72 }
    ]
  }
];
