/* Renders a single product from the central catalog, with a shipping
   calculator and a secure Mollie "Buy now" (item + shipping). */
(function(){
  const TIER = { A:"Entry piece", B:"Mid-range", C:"Signature piece" };
  const id = new URLSearchParams(location.search).get('id');
  const p = (typeof CATALOG !== 'undefined') ? CATALOG.find(x => x.id === id) : null;
  const pdp = document.getElementById('pdp');

  if (!p){
    pdp.innerHTML = '<p class="sub" style="margin:40px 0">Sorry, this piece could not be found. <a class="link-btn" href="index.html">Back to the showroom &rarr;</a></p>';
    return;
  }

  // theme + navigation depend on the collection
  const mc = (p.collection === 'midcentury');
  const showroom = mc ? 'index.html' : 'antique.html';
  document.getElementById('back-link').href = showroom;
  document.getElementById('all-link').href = mc ? 'index.html?view=producten' : 'antique.html?view=producten';
  document.title = "Collector's Room · " + p.naam;

  const price = parseFloat(String(p.prijs).replace(/[^0-9.]/g,'').replace(/\.(?=\d{3})/g,''));
  const zoneOpts = SHIP_ZONES.map(z => `<option value="${z.id}">${z.label}</option>`).join('');
  const askBody = `Hi, I'm interested in: ${p.naam} (${p.prijs}). Is it still available?`;
  const askHref = 'mailto:' + CONTACT.email + '?subject=' + encodeURIComponent('Enquiry: ' + p.naam) +
                  '&body=' + encodeURIComponent(askBody);

  const gallery = (p.fotos && p.fotos.length) ? p.fotos : [p.foto];
  const makerSpec = p.specs.find(([k]) => /designer|maker/i.test(k));
  const periodSpec = p.specs.find(([k]) => /period/i.test(k));
  const tagline = makerSpec ? makerSpec[1] : p.categorie;

  pdp.innerHTML = `
    <div class="pdp-titlebar">
      <span class="badge ${p.laag}">${TIER[p.laag]}</span>${p.sold ? ' <span class="badge sold">Sold</span>' : ''}
      <div class="pdp-titlerow">
        <h1 class="pname">${p.naam}</h1>
        <span class="pdp-titlediv">|</span>
        <div class="pdp-price-top">${p.prijs}</div>
      </div>
      <p class="pdp-subtitle">${p.categorie}${periodSpec ? ' &middot; ' + periodSpec[1] : ''}</p>
    </div>

    <div class="pdp-hero">
      <img id="pdp-main-img" src="${gallery[0]}" alt="${p.naam}">
      ${gallery.length > 1 ? `
      <button type="button" class="pdp-arrow prev" aria-label="Previous photo">&#8249;</button>
      <button type="button" class="pdp-arrow next" aria-label="Next photo">&#8250;</button>
      <div class="pdp-dots">
        ${gallery.map((_, i) => `<button type="button" class="pdp-dot${i === 0 ? ' active' : ''}" data-i="${i}" aria-label="Photo ${i + 1}"></button>`).join('')}
      </div>` : ''}
    </div>

    <div class="pdp-feature">
      <h2 class="pdp-tagline">${tagline}</h2>
      <div class="pdp-feature-right">
        <p class="story">${p.verhaal}</p>
        <dl class="pdp-specsheet">${p.specs.filter(spec => spec !== makerSpec && spec !== periodSpec).map(([k,v]) => `<div class="spec"><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
      </div>
    </div>

    ${gallery.length > 1 ? `
    <div class="pdp-thumbs">
      ${gallery.map((src, i) => `<button type="button" class="pdp-thumb${i === 0 ? ' active' : ''}" data-i="${i}" aria-label="Photo ${i + 1}"><img src="${src}" alt=""></button>`).join('')}
    </div>` : ''}

    ${!p.sold && !p.whoppah ? `
    <div class="ship-calc">
      <label class="ship-label" for="zone">Estimate shipping: where to?</label>
      <select id="zone" class="ship-select">${zoneOpts}</select>
      <div class="ship-lines">
        <div><span>Item</span><span id="s-item"></span></div>
        <div><span>Shipping</span><span id="s-ship"></span></div>
        <div class="ship-total"><span>Total</span><span id="s-total"></span></div>
      </div>
    </div>` : ''}

    <div class="pdp-bottombar">
      <div class="pdp-price-bottom">${p.prijs}<small>${p.prijsNoot || ''}</small></div>
      ${p.sold ? `
      <a class="pdp-buy ghost-wide" href="${askHref}">Ask about similar pieces</a>` : p.whoppah ? `
      <a class="pdp-buy" href="${p.whoppah}" target="_blank" rel="noopener">Buy on Whoppah &rarr;</a>
      <a class="pdp-ask" href="${askHref}" aria-label="Ask a question" title="Ask a question">?</a>` : `
      <a class="pdp-buy" id="buy" href="#">Buy now</a>
      <a class="pdp-ask" href="${askHref}" aria-label="Ask a question" title="Ask a question">?</a>`}
    </div>
    <p class="note pdp-note">${p.sold ? 'This piece has sold. Interested in something similar? Get in touch.'
      : p.whoppah ? 'Listed and sold via Whoppah, not through our own checkout. &ldquo;Buy on Whoppah&rdquo; takes you to the listing to purchase and arrange delivery there.'
      : 'Shipping shown is an estimate. For large pieces we can also arrange a tailored quote or local pickup in Koningsbosch. Prices are indicative.'}</p>`;

  if (gallery.length > 1){
    const mainImg = document.getElementById('pdp-main-img');
    let current = 0;
    function show(i){
      current = (i + gallery.length) % gallery.length;
      mainImg.src = gallery[current];
      pdp.querySelectorAll('.pdp-dot').forEach(d => d.classList.toggle('active', +d.dataset.i === current));
      pdp.querySelectorAll('.pdp-thumb').forEach(t => t.classList.toggle('active', +t.dataset.i === current));
    }
    pdp.querySelector('.pdp-arrow.prev')?.addEventListener('click', () => show(current - 1));
    pdp.querySelector('.pdp-arrow.next')?.addEventListener('click', () => show(current + 1));
    pdp.querySelectorAll('.pdp-dot').forEach(d => d.addEventListener('click', () => show(+d.dataset.i)));
    pdp.querySelectorAll('.pdp-thumb').forEach(t => t.addEventListener('click', () => show(+t.dataset.i)));
  }

  if (!p.sold && !p.whoppah){
    const fmt = n => '€' + Number(n).toLocaleString('nl-NL');
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
  }
})();
