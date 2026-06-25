/* Rendert de kamer-hotspots, de catalogus en het productpaneel.
   Je hoeft dit bestand niet te bewerken — alle inhoud staat in products.js */

const TIER_LABEL = { A:"Laag A · instapper", B:"Laag B · middensegment", C:"Laag C · topstuk" };
const byId = id => PRODUCTS.find(p => p.id === id);

/* ---- aanvraag-/koop-knoppen bouwen ---- */
function inquiryHref(p){
  const tekst = `Hallo, ik heb interesse in: ${p.naam} (${p.prijs}). Is dit nog beschikbaar?`;
  if (CONTACT.whatsapp)
    return "https://wa.me/" + CONTACT.whatsapp + "?text=" + encodeURIComponent(tekst);
  return "mailto:" + CONTACT.email +
         "?subject=" + encodeURIComponent("Interesse: " + p.naam) +
         "&body=" + encodeURIComponent(tekst);
}

/* ---- hotspots in de kamer ---- */
function renderHotspots(){
  const stage = document.getElementById('stage');
  PRODUCTS.filter(p => p.hotspot).forEach(p => {
    const b = document.createElement('button');
    b.className = 'hs';
    b.dataset.tier = p.laag;
    b.style.left = p.hotspot.x + '%';
    b.style.top  = p.hotspot.y + '%';
    b.innerHTML = `<span class="pin"></span><span class="tip">${p.naam}</span>`;
    b.setAttribute('aria-label', p.naam);
    b.addEventListener('click', () => openPanel(p.id));
    stage.appendChild(b);
  });
}

/* ---- catalogusraster ---- */
function renderGrid(){
  const grid = document.getElementById('grid');
  grid.innerHTML = PRODUCTS.map(p => `
    <article class="card" tabindex="0" role="button" aria-label="${p.naam}" data-id="${p.id}">
      <div class="card-img"><img src="${p.foto}" alt="${p.naam}" loading="lazy"></div>
      <div class="card-b">
        <span class="card-cat">${p.categorie}</span>
        <span class="card-name">${p.naam}</span>
        <div class="card-foot">
          <span class="card-price">${p.prijs}</span>
          <span class="tag ${p.laag}">${p.laag}</span>
        </div>
      </div>
    </article>`).join('');
  grid.querySelectorAll('.card').forEach(c => {
    const open = () => openPanel(c.dataset.id);
    c.addEventListener('click', open);
    c.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }});
  });
}

/* ---- paneel ---- */
const panel = document.getElementById('panel');
const scrim = document.getElementById('scrim');

function openPanel(id){
  const p = byId(id); if(!p) return;
  document.getElementById('pimg').src = p.foto;
  document.getElementById('pimg').alt = p.naam;
  const badge = document.getElementById('badge');
  badge.className = 'badge ' + p.laag;
  badge.textContent = TIER_LABEL[p.laag];
  document.getElementById('eyebrow').textContent = p.categorie;
  document.getElementById('pname').textContent = p.naam;
  document.getElementById('specs').innerHTML =
    p.specs.map(([k,v]) => `<div class="spec"><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  document.getElementById('story').textContent = p.verhaal;
  document.getElementById('price').innerHTML =
    p.prijs + (p.prijsNoot ? ` <small>${p.prijsNoot}</small>` : '');

  const cta = document.getElementById('cta');
  let html = `<a class="primary" href="${inquiryHref(p)}">Reserveer / vraag aan</a>`;
  if (p.betaallink) html = `<a class="primary" href="${p.betaallink}">Direct afrekenen</a>` +
                           `<a class="ghost" href="${inquiryHref(p)}">Vraag info</a>`;
  cta.innerHTML = html;

  panel.classList.add('open'); scrim.classList.add('open');
}
function closePanel(){ panel.classList.remove('open'); scrim.classList.remove('open'); }

document.getElementById('close').addEventListener('click', closePanel);
scrim.addEventListener('click', closePanel);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });

/* ---- merknaam invullen ---- */
document.querySelectorAll('[data-merk]').forEach(el => el.textContent = CONTACT.merk);

renderHotspots();
renderGrid();
