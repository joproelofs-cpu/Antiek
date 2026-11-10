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

  pdp.innerHTML = `
    <div class="pdp-gallery">
      <div class="pdp-media"><img id="pdp-main-img" src="${gallery[0]}" alt="${p.naam}"></div>
      <p class="pdp-fig">Fig. 1 &mdash; ${p.categorie}</p>
      ${gallery.length > 1 ? `
      <div class="pdp-thumbs">
        ${gallery.map((src, i) => `<button type="button" class="pdp-thumb${i === 0 ? ' active' : ''}" data-src="${src}" aria-label="Photo ${i + 1}"><img src="${src}" alt=""></button>`).join('')}
      </div>` : ''}
    </div>
    <div class="pdp-info">
      <div class="pdp-codebar">
        <span class="pdp-code">${p.id.replace(/^mc_/, '').toUpperCase()}</span>
        ${makerSpec ? `<span class="pdp-byline">${makerSpec[1]}</span>` : ''}
      </div>
      <span class="badge ${p.laag}">${TIER[p.laag]}</span>${p.sold ? ' <span class="badge sold">Sold</span>' : ''}
      <p class="eyebrow">${p.categorie}</p>
      <h1 class="pname">${p.naam}</h1>
      <dl class="pdp-specsheet">${p.specs.filter(spec => spec !== makerSpec).map(([k,v]) => `<div class="spec"><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
      <p class="story">${p.verhaal}</p>
      <div class="price">${p.prijs} <small>${p.prijsNoot || ''}</small></div>

      ${p.sold ? `
      <p class="note" style="margin-top:0">This piece has sold. Interested in something similar? Get in touch.</p>
      <div class="cta">
        <a class="ghost" href="${askHref}">Ask about similar pieces</a>
      </div>` : p.whoppah ? `
      <p class="note" style="margin-top:0">This piece is listed and sold via Whoppah, not through our own checkout. "Buy on Whoppah" takes you to the listing to purchase and arrange delivery there.</p>
      <div class="cta">
        <a class="primary" href="${p.whoppah}" target="_blank" rel="noopener">Buy on Whoppah &rarr;</a>
        <a class="ghost" href="${askHref}">Ask a question</a>
      </div>` : `
      <div class="ship-calc">
        <label class="ship-label" for="zone">Estimate shipping: where to?</label>
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
      <p class="note">Shipping shown is an estimate. For large pieces we can also arrange a tailored quote or local pickup in Koningsbosch. Prices are indicative.</p>`}
    </div>`;

  if (gallery.length > 1){
    const mainImg = document.getElementById('pdp-main-img');
    pdp.querySelectorAll('.pdp-thumb').forEach(btn => {
      btn.addEventListener('click', () => {
        mainImg.src = btn.dataset.src;
        pdp.querySelectorAll('.pdp-thumb').forEach(b => b.classList.toggle('active', b === btn));
      });
    });
  }

  if (!p.sold && !p.whoppah){
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
  }
})();
