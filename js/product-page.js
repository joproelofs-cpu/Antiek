/* Renders a single product from the central catalog, with a shipping
   calculator and a secure Mollie "Buy now" (item + shipping). */
(function(){
  const TIER = { A:"Entry piece", B:"Mid-range", C:"Signature piece" };
  const id = new URLSearchParams(location.search).get('id');
  const p = (typeof CATALOG !== 'undefined') ? CATALOG.find(x => x.id === id) : null;
  const pdp = document.getElementById('pdp');

  if (!p){
    pdp.innerHTML = '<p class="sub" style="margin:40px 0">Sorry, this piece could not be found. <a class="link-btn" href="index.html?enter=1">Back to the showroom &rarr;</a></p>';
    return;
  }

  // theme + navigation depend on the collection
  const mc = (p.collection === 'midcentury');
  const showroom = mc ? 'midcentury.html' : 'index.html?enter=1';
  document.getElementById('back-link').href = showroom;
  document.getElementById('all-link').href = mc ? 'midcentury.html?view=producten' : 'index.html?view=producten';
  if (mc){
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = 'css/mc.css';
    document.head.appendChild(l);
  }
  document.title = "Collector's Room — " + p.naam;

  const price = parseFloat(String(p.prijs).replace(/[^0-9.]/g,'').replace(/\.(?=\d{3})/g,''));
  const zoneOpts = SHIP_ZONES.map(z => `<option value="${z.id}">${z.label}</option>`).join('');
  const askBody = `Hi, I'm interested in: ${p.naam} (${p.prijs}). Is it still available?`;
  const askHref = 'mailto:' + CONTACT.email + '?subject=' + encodeURIComponent('Enquiry: ' + p.naam) +
                  '&body=' + encodeURIComponent(askBody);

  pdp.innerHTML = `
    <div class="pdp-media"><img src="${p.foto}" alt="${p.naam}"></div>
    <div class="pdp-info">
      <span class="badge ${p.laag}">${TIER[p.laag]}</span>
      <p class="eyebrow">${p.categorie}</p>
      <h1 class="pname">${p.naam}</h1>
      <dl>${p.specs.map(([k,v]) => `<div class="spec"><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
      <p class="story">${p.verhaal}</p>
      <div class="price">${p.prijs} <small>${p.prijsNoot || ''}</small></div>

      <div class="ship-calc">
        <label class="ship-label" for="zone">Estimate shipping — where to?</label>
        <select id="zone" class="ship-select">${zoneOpts}</select>
        <div class="ship-lines">
          <div><span>Item</span><span id="s-item"></span></div>
          <div><span>Shipping</span><span id="s-ship"></span></div>
          <div class="ship-total"><span>Total</span><span id="s-total"></span></div>
        </div>
      </div>

      <div class="cta">
        <a class="primary" id="buy" href="#">Buy now</a>
        <a class="ghost" href="${askHref}">Ask a question</a>
      </div>
      <p class="note">Shipping shown is an estimate. For large pieces we can also arrange a tailored quote or local pickup in Koningsbosch. Prices are indicative.</p>
    </div>`;

  const fmt = n => '\u20ac' + Number(n).toLocaleString('nl-NL');
  const zoneSel = document.getElementById('zone');
  function update(){
    const zone = zoneSel.value;
    const ship = shipCost(p.id, zone);
    document.getElementById('s-item').textContent  = fmt(price);
    document.getElementById('s-ship').textContent  = fmt(ship);
    document.getElementById('s-total').textContent = fmt(price + ship);
    document.getElementById('buy').href = '/api/pay?id=' + encodeURIComponent(p.id) + '&zone=' + zone;
  }
  zoneSel.addEventListener('change', update);
  update();
})();
