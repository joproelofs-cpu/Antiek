// Cloudflare PAGES Function: secure Mollie checkout (item + shipping).
// Works only on a Cloudflare *Pages* deployment (…pages.dev), not on a plain
// Worker. Set MOLLIE_API_KEY in: Pages project → Settings → Environment
// variables, then REDEPLOY. Prices/shipping are server-side (anti-tamper).

const PRODUCTS = {
  kapstok:  { value: 480,  ship: "L", name: "Space age coat stand in cream" },
  buste:    { value: 95,   ship: "M", name: "Bronze bust of David" },
  trolley:  { value: 248,  ship: "L", name: "Boby trolley · Joe Colombo" },
  spiegel:  { value: 2200, ship: "L", name: "Gilded floor mirror, oval" },
  fauteuil: { value: 1650, ship: "L", name: "Black & white swivel chair" },
  tafel:    { value: 1900, ship: "L", name: "Wooden coffee table" },
  rolkast:  { value: 1450, ship: "L", name: "Op art rolling cabinet" },
  mc_lounge:{ value: 1250, ship: "L", name: "Orange & yellow swivel lounge chair" },
  mc_bar:   { value: 1450, ship: "L", name: "Chrome & smoked glass bar cart" },
  mc_green: { value: 680,  ship: "M", name: "Green leather office chair" }
};
const SHIP = {
  M: { nl: 15, eu1: 35, eu: 55, uk: 75, world: 140 },
  L: { nl: 60, eu1: 120, eu: 210, uk: 290, world: 580 }
};

function page(title, msg, status) {
  const html = '<!doctype html><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:12vh auto;padding:0 24px;color:#2C2419">' +
    '<h1 style="font-size:20px;margin:0 0 10px">' + title + '</h1>' +
    '<p style="line-height:1.6;color:#6b5f4f;margin:0 0 18px">' + msg + '</p>' +
    '<p><a href="/" style="color:#9E7B36;text-decoration:none">&larr; Back to the shop</a></p></div>';
  return new Response(html, { status: status || 200, headers: { "content-type": "text/html; charset=utf-8" } });
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const zone = url.searchParams.get("zone") || "nl";
  const product = PRODUCTS[id];

  if (!product) return page("Unknown product", "This product could not be found. Please go back and try again.");

  const key = (env.MOLLIE_API_KEY || "").trim();
  if (!key) {
    return page("Payment isn’t set up yet",
      "The Mollie key (MOLLIE_API_KEY) isn’t set in Cloudflare, or the site wasn’t redeployed after adding it. " +
      "Go to your Pages project → Settings → Environment variables, add it, then redeploy.");
  }

  const rates = SHIP[product.ship] || SHIP.L;
  const shipping = (zone in rates) ? rates[zone] : rates.nl;
  const total = (product.value + shipping).toFixed(2);

  let data;
  try {
    const res = await fetch("https://api.mollie.com/v2/payments", {
      method: "POST",
      headers: { "Authorization": "Bearer " + key, "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: { currency: "EUR", value: total },
        description: "Collector's Room · " + product.name + " (incl. shipping " + zone + ")",
        redirectUrl: url.origin + "/?paid=" + encodeURIComponent(id),
        metadata: { productId: id, zone: zone, shipping: shipping }
      })
    });
    data = await res.json();
  } catch (e) {
    return page("Could not reach Mollie", "Network error: " + (e && e.message ? e.message : e));
  }

  const checkout = data && data._links && data._links.checkout && data._links.checkout.href;
  if (checkout) return Response.redirect(checkout, 302);

  const detail = (data && (data.detail || data.title))
    ? ((data.title ? data.title + ": " : "") + (data.detail || ""))
    : JSON.stringify(data);
  return page("Mollie couldn’t start the payment",
    "Mollie said: <b>" + detail + "</b><br><br>This usually means the API key is wrong or has an extra space, " +
    "or the payment methods aren’t activated yet in your Mollie dashboard.");
}
