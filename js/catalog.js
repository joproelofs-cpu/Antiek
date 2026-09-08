/* =========================================================================
   CENTRAL CATALOG — single source of truth for every product & room.
   Used by index.html (antique), midcentury.html (mid century) and
   product.html (single product page). Edit prices/products HERE.
   NOTE: for security the prices are ALSO in functions/api/pay.js (server
   side). If you change a price or shipping rate, update it there too.
   ========================================================================= */

const CONTACT = {
  email:  "zakelijk.roelofs@gmail.com",
  whatsapp: "",
  merk:   "Collector's Room",
  kvk:    "84405252",
  tiktok: "https://www.tiktok.com/@collectors.room"
};
const CHECKOUT = { mollie: true };

/* Shipping: destinations + prices per size class (EUR). Edit to your real
   courier quotes. class "M" = smaller/parcel, "L" = large furniture. */
const SHIP_ZONES = [
  { id:"nl",    label:"Netherlands" },
  { id:"eu1",   label:"Belgium, Germany, Luxembourg" },
  { id:"eu",    label:"Rest of the EU" },
  { id:"uk",    label:"United Kingdom" },
  { id:"world", label:"Rest of the world" }
];
const SHIP_RATES = {
  M: { nl:15, eu1:35, eu:55, uk:75, world:140 },
  L: { nl:60, eu1:120, eu:210, uk:290, world:580 }
};

const CATALOG = [
  { id:"kapstok", collection:"antique", ship:"L",
    naam:"Space-age coat stand in cream", categorie:"Coat stand \u00b7 sculptural", laag:"B",
    prijs:"\u20ac480", prijsNoot:"indicative", foto:"images/kapstok.jpg",
    specs:[["Period","1970s"],["Style","Italian space-age"],["Material","cream plastic"],["Condition","good vintage condition"]],
    verhaal:"A coat stand that hijacks the hallway. Not a background piece but a sculpture on a stem \u2014 round hooks, milky-white plastic, pure 1970s bravado. One of one." },
  { id:"buste", collection:"antique", ship:"M",
    naam:"Bronze bust of David", categorie:"Sculpture \u00b7 object", laag:"C",
    prijs:"\u20ac1.250", prijsNoot:"indicative", foto:"images/buste.jpg",
    specs:[["Subject","David, after Michelangelo"],["Material","bronze & copper"],["Base","gilded"],["Condition","warm, lived-in patina"]],
    verhaal:"No plaster, no copy of a copy. Solid bronze with a patina that took years, on a gilded base. Put it on a plinth and the room bends toward it." },
  { id:"trolley", collection:"antique", ship:"L",
    naam:"Boby trolley \u2014 Joe Colombo", categorie:"Icons \u00b7 design classic", laag:"C",
    prijs:"\u20ac650", prijsNoot:"indicative", foto:"images/trolley.jpg",
    specs:[["Designer","Joe Colombo"],["Maker","Bieffeplast"],["Type","mobile trolley"],["Colour","black"]],
    verhaal:"The icon collectors search for by name. Joe Colombo's Boby \u2014 swivelling drawers, rolls wherever you want, designed when the future was still made of plastic. Design history on wheels." },
  { id:"spiegel", collection:"antique", ship:"L",
    naam:"Gilded floor mirror, oval", categorie:"Mirrors \u00b7 statement", laag:"C",
    prijs:"\u20ac2.200", prijsNoot:"indicative", foto:"images/spiegel.jpg",
    specs:[["Shape","oval, tilting"],["Frame","gilded floral relief"],["Detail","draped swag"],["Type","cheval / full-length"]],
    verhaal:"Unapologetically lavish. A tilting full-length mirror in a gilded floral relief with a draped swag \u2014 pure baroque excess, exactly where minimalism ends. One of one." },
  { id:"fauteuil", collection:"antique", ship:"L",
    naam:"Black & white swivel chair, graphic", categorie:"Seating \u00b7 statement", laag:"C",
    prijs:"\u20ac1.650", prijsNoot:"indicative", foto:"images/fauteuil.jpg",
    specs:[["Shape","round tub, swivel"],["Fabric","graphic black & white"],["Base","brass"],["Mood","bold, modern"]],
    verhaal:"A chair as artwork. A round tub, swivelling on a brass base, upholstered in a graphic black-and-white print that takes over the whole room. Sit down and you're in the middle of the statement." },
  { id:"tafel", collection:"antique", ship:"L",
    naam:"Wooden coffee table with sculptural legs", categorie:"Tables \u00b7 design piece", laag:"C",
    prijs:"\u20ac1.900", prijsNoot:"indicative", foto:"images/tafel.jpg",
    specs:[["Style","Dutch / Scandinavian"],["Period","1950s"],["Material","birch / beech"],["Detail","pierced legs"]],
    verhaal:"A connoisseur's piece: pale wood, sculpted pierced legs, a lower shelf for your finest books. Quiet craftsmanship that only reveals itself when you look closely." },
  { id:"rolkast", collection:"antique", ship:"L",
    naam:"Op-art rolling cabinet with circle motif", categorie:"Storage \u00b7 space-age", laag:"B",
    prijs:"\u20ac1.450", prijsNoot:"indicative", foto:"images/rolkast.jpg",
    specs:[["Period","1970s"],["Style","pop / op-art"],["Motif","circle in orange & pink"],["Base","on castors"]],
    verhaal:"A cabinet that shouts. Cream with a bright orange circle in a pink ring, on castors \u2014 pop-art you can't hide anywhere. For anyone done with boring storage." },

  { id:"mc_lounge", collection:"midcentury", ship:"L",
    naam:"Orange & yellow swivel lounge chair", categorie:"Seating \u00b7 space-age", laag:"C",
    prijs:"\u20ac1.250", prijsNoot:"indicative", foto:"images/mc-oranje.jpg",
    specs:[["Period","1970s"],["Shell","yellow moulded"],["Upholstery","orange velvet"],["Base","swivel"]],
    verhaal:"Pure 1970s optimism. A moulded yellow shell wrapped in warm orange velvet, spinning on a swivel base. The kind of chair a room is built around." },
  { id:"mc_bar", collection:"midcentury", ship:"L",
    naam:"Chrome & smoked-glass bar cart", categorie:"Bar \u00b7 illuminated", laag:"C",
    prijs:"\u20ac1.450", prijsNoot:"indicative", foto:"images/mc-barkast.jpg",
    specs:[["Period","1970s"],["Material","chrome & smoked glass"],["Feature","interior light"],["Base","on castors"]],
    verhaal:"Cocktail hour on wheels. Smoked glass, ribbed chrome and a warm interior light that makes the glassware glow. Roll it out and the evening starts itself." },
  { id:"mc_green", collection:"midcentury", ship:"M",
    naam:"Green leather office chair", categorie:"Seating \u00b7 studio", laag:"B",
    prijs:"\u20ac680", prijsNoot:"indicative", foto:"images/mc-groen.jpg",
    specs:[["Period","1970s"],["Leather","dark green"],["Piping","cream"],["Base","swivel, on castors"]],
    verhaal:"A statement desk chair with real presence. Deep green leather, crisp cream piping, and a swivel base on castors. Work has never looked this good." }
];

const ROOMS_ANTIQUE = [
  { id:"hal", naam:"The hallway", foto:"images/hal.jpg", hotspots:[
    { type:"product", id:"kapstok", x:11, y:42 },
    { type:"product", id:"trolley", x:27, y:64 },
    { type:"product", id:"buste",   x:80, y:33 },
    { type:"room", to:"woonkamer", label:"Enter the living room", x:82, y:91 }
  ]},
  { id:"woonkamer", naam:"The living room", foto:"images/woonkamer.jpg", hotspots:[
    { type:"product", id:"spiegel",  x:32, y:44 },
    { type:"product", id:"fauteuil", x:54, y:54 },
    { type:"product", id:"tafel",    x:57, y:80 },
    { type:"product", id:"rolkast",  x:83, y:58 },
    { type:"room", to:"hal", label:"Hallway", dir:"back", x:7, y:18 }
  ]}
];
const ROOMS_MC = [
  { id:"mc-room", naam:"The mid-century room", foto:"images/mc-room.jpg", hotspots:[
    { type:"product", id:"mc_lounge", x:22, y:58 },
    { type:"product", id:"mc_bar",    x:48, y:70 },
    { type:"product", id:"mc_green",  x:66, y:72 }
  ]}
];

/* helpers */
function shipCost(id, zone){
  const p = CATALOG.find(x => x.id === id);
  if (!p) return null;
  const table = SHIP_RATES[p.ship] || SHIP_RATES.L;
  return (zone in table) ? table[zone] : table.nl;
}
function priceNumber(p){ return parseFloat(String(p.prijs).replace(/[^0-9.]/g,'').replace(/\.(?=\d{3})/g,'')); }
