/* Rendert de kamers (foto + klikpunten), de doorgangen tussen kamers,
   het productpaneel en het overzicht 'Alle producten'.
   Inhoud staat in products.js — dit bestand hoef je niet te bewerken. */

const TIER_LABEL = { A:"Laag A \u00b7 instapper", B:"Laag B \u00b7 middensegment", C:"Laag C \u00b7 topstuk" };
const byId   = id => PRODUCTS.find(p => p.id === id);
const roomById = id => ROOMS.find(r => r.id === id);
let currentRoom = ROOMS[0].id;

/* ---- aanvraag-/koop-knop ---- */
function inquiryHref(p){
  const t = `Hallo, ik heb interesse in: ${p.naam} (${p.prijs}). Is dit nog beschikbaar?`;
  if (CONTACT.whatsapp) return "https://wa.me/" + CONTACT.whatsapp + "?text=" + encodeURIComponent(t);
  return "mailto:" + CONTACT.email + "?subject=" + encodeURIComponent("Interesse: " + p.naam) +
         "&body=" + encodeURIComponent(t);
}

/* ---- kamer tonen ---- */
function renderRoom(){
  const room = roomById(currentRoom);
  document.getElementById('stage-bg').src = room.foto;
  document.getElementById('stage-bg').alt = room.naam;
  const stage = document.getElementById('stage');
  stage.querySelectorAll('.hs,.hs-room').forEach(el => el.remove());

  room.hotspots.forEach(h => {
    if (h.type === 'product'){
      const p = byId(h.id); if(!p) return;
      const b = document.createElement('button');
      b.className = 'hs'; b.dataset.tier = p.laag;
      b.style.left = h.x + '%'; b.style.top = h.y + '%';
      b.innerHTML = `<span class="pin"></span><span class="tip">${p.naam}</span>`;
      b.setAttribute('aria-label', p.naam);
      b.addEventListener('click', () => openPanel(p.id));
      stage.appendChild(b);
    } else if (h.type === 'room'){
      const exists = !!roomById(h.to);
      const b = document.createElement('button');
      b.className = 'hs-room' + (exists ? '' : ' soon');
      b.style.left = h.x + '%'; b.style.top = h.y + '%';
      const arrow = exists ? (h.dir === 'back' ? '' : ' \u2192') : ' \u00b7 binnenkort';
      const lead  = (exists && h.dir === 'back') ? '\u2190 ' : '';
      b.innerHTML = `<span class="door">${lead}${h.label}${arrow}</span>`;
      b.setAttribute('aria-label', 'Ga naar ' + h.label);
      b.addEventListener('click', () => { if (exists){ currentRoom = h.to; renderRoom(); window.scrollTo({top:0,behavior:'smooth'}); }});
      stage.appendChild(b);
    }
  });
}

/* ---- overzicht: alle producten ---- */
function renderGrid(){
  const grid = document.getElementById('grid');
  grid.innerHTML = PRODUCTS.map(p => `
    <article class="card" tabindex="0" role="button" aria-label="${p.naam}" data-id="${p.id}">
      <div class="card-img"><img src="${p.foto}" alt="${p.naam}" loading="lazy"></div>
      <div class="card-b">
        <span class="card-cat">${p.categorie}</span>
        <span class="card-name">${p.naam}</span>
        <div class="card-foot"><span class="card-price">${p.prijs}</span><span class="tag ${p.laag}">${p.laag}</span></div>
      </div>
    </article>`).join('');
  grid.querySelectorAll('.card').forEach(c => {
    const open = () => openPanel(c.dataset.id);
    c.addEventListener('click', open);
    c.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){ e.preventDefault(); open(); }});
  });
}

/* ---- productpaneel ---- */
const panel = document.getElementById('panel'), scrim = document.getElementById('scrim');
function openPanel(id){
  const p = byId(id); if(!p) return;
  document.getElementById('pimg').src = p.foto;
  document.getElementById('pimg').alt = p.naam;
  const badge = document.getElementById('badge');
  badge.className = 'badge ' + p.laag; badge.textContent = TIER_LABEL[p.laag];
  document.getElementById('eyebrow').textContent = p.categorie;
  document.getElementById('pname').textContent = p.naam;
  document.getElementById('specs').innerHTML =
    p.specs.map(([k,v]) => `<div class="spec"><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  document.getElementById('story').textContent = p.verhaal;
  document.getElementById('price').innerHTML = p.prijs + (p.prijsNoot ? ` <small>${p.prijsNoot}</small>` : '');
  const cta = document.getElementById('cta');
  cta.innerHTML = p.betaallink
    ? `<a class="primary" href="${p.betaallink}">Direct afrekenen</a><a class="ghost" href="${inquiryHref(p)}">Vraag info</a>`
    : `<a class="primary" href="${inquiryHref(p)}">Reserveer / vraag aan</a>`;
  panel.classList.add('open'); scrim.classList.add('open');
}
function closePanel(){ panel.classList.remove('open'); scrim.classList.remove('open'); }
document.getElementById('close').addEventListener('click', closePanel);
scrim.addEventListener('click', closePanel);
document.addEventListener('keydown', e => { if(e.key==='Escape') closePanel(); });

/* ---- tabs: Showroom / Alle producten ---- */
function showView(view){
  document.getElementById('view-showroom').hidden = (view !== 'showroom');
  document.getElementById('view-producten').hidden = (view !== 'producten');
  document.querySelectorAll('[data-view]').forEach(t =>
    t.classList && t.classList.contains('tab') && t.classList.toggle('active', t.dataset.view === view));
  window.scrollTo({ top:0, behavior:'smooth' });
}
document.querySelectorAll('[data-view]').forEach(el =>
  el.addEventListener('click', () => showView(el.dataset.view)));

/* ---- merknaam invullen ---- */
document.querySelectorAll('[data-merk]').forEach(el => el.textContent = CONTACT.merk);

renderRoom();
renderGrid();
