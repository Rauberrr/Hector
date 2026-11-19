/* =========================================================
   HUB — mapa mágico interativo + portais
   ========================================================= */

/* Ícones ilustrados de cada lugar (base em 0,0). Sugestão: trocar por
   ilustrações oficiais (SVG/PNG) no mesmo estilo do mapa. */
const LANDMARKS = {
  pizzaria: `
    <rect x="-46" y="-70" width="92" height="70" fill="#8740C0" stroke="#0C1456" stroke-width="3"/>
    <rect x="-60" y="-100" width="28" height="100" fill="#A160D6" stroke="#0C1456" stroke-width="3"/>
    <rect x="32" y="-100" width="28" height="100" fill="#A160D6" stroke="#0C1456" stroke-width="3"/>
    <path d="M-64 -100 L-46 -135 L-28 -100Z M28 -100 L46 -135 L64 -100Z" fill="#1A2891" stroke="#0C1456" stroke-width="3"/>
    <rect x="-14" y="-110" width="28" height="40" fill="#A160D6" stroke="#0C1456" stroke-width="3"/>
    <path d="M-18 -110 L0 -150 L18 -110Z" fill="#D44F8A" stroke="#0C1456" stroke-width="3"/>
    <path d="M-14 0 v-26 a14 14 0 0 1 28 0 v26z" fill="#0C1456"/>
    <rect x="-52" y="-80" width="8" height="12" fill="#FFD36E" class="twinkle"/><rect x="44" y="-80" width="8" height="12" fill="#FFD36E" class="twinkle" style="animation-delay:.7s"/>
    <circle cx="0" cy="-92" r="6" fill="#FFD36E" class="twinkle"/>`,
  ferrovia: `
    <rect x="-55" y="-60" width="110" height="60" fill="#C2410C" stroke="#0C1456" stroke-width="3"/>
    <path d="M-66 -60 L0 -98 L66 -60Z" fill="#7C2D12" stroke="#0C1456" stroke-width="3"/>
    <circle cx="0" cy="-72" r="11" fill="#EFEFEA" stroke="#0C1456" stroke-width="3"/>
    <path d="M0 -72 v-7 M0 -72 h6" stroke="#0C1456" stroke-width="2"/>
    <rect x="-40" y="-44" width="18" height="18" fill="#FFD36E" class="twinkle"/><rect x="22" y="-44" width="18" height="18" fill="#FFD36E" class="twinkle" style="animation-delay:.5s"/>
    <rect x="-10" y="-34" width="20" height="34" fill="#0C1456"/>`,
  'era-do-fogo': `
    <path d="M-80 0 Q-70 -90 0 -110 Q70 -90 80 0Z" fill="#57534E" stroke="#1C1917" stroke-width="3"/>
    <path d="M-30 0 Q-28 -48 0 -52 Q28 -48 30 0Z" fill="#1C1917"/>
    <path d="M-10 -6 Q0 -40 10 -6Z" fill="#FBBF24" class="twinkle"/><path d="M-5 -6 Q0 -26 5 -6Z" fill="#FF861B"/>
    <path d="M40 -60 q8 -20 0 -40 q-8 -20 0 -40" stroke="rgba(255,255,255,.35)" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M-60 -30 l-18 -10 l6 -14 l14 6 l10 -12 l12 4z" fill="#65A30D" stroke="#1C1917" stroke-width="2"/>`,
  'fogo-do-dragao': `
    <path d="M-80 0 V-40 Q-60 -130 -10 -110 Q40 -90 30 -40 Q20 0 60 -30 L80 -60 V0" fill="none" stroke="#E8402F" stroke-width="7"/>
    <circle cx="-5" cy="-70" r="34" fill="none" stroke="#E8402F" stroke-width="7"/>
    <path d="M-70 0 V-60 M-40 0 V-100 M0 0 V-36 M40 0 V-34 M70 0 V-46" stroke="#7a1f1f" stroke-width="3"/>
    <text x="-24" y="-118" font-size="26">🔥</text>`,
  'pedidos-magicos': `
    <rect x="-22" y="-120" width="44" height="120" fill="#D44F8A" stroke="#0C1456" stroke-width="3"/>
    <path d="M-30 -120 L0 -160 L30 -120Z" fill="#1A2891" stroke="#0C1456" stroke-width="3"/>
    <circle cx="0" cy="-90" r="9" fill="#FFD36E" class="twinkle"/>
    <rect x="-8" y="-30" width="16" height="30" fill="#0C1456"/>
    <g><rect x="34" y="-120" width="22" height="16" fill="#F9D9EC" stroke="#0C1456" stroke-width="2"/><path d="M34 -118 q-10 -10 -16 0 M56 -118 q10 -10 16 0" stroke="#fff" stroke-width="3" fill="none"/>
      <animateTransform attributeName="transform" type="translate" values="0 0; 6 -12; 0 0" dur="3s" repeatCount="indefinite"/></g>`,
  'castelo-de-gelo': `
    <path d="M-60 0 V-70 L-45 -100 L-30 -70 V-90 L0 -140 L30 -90 V-70 L45 -100 L60 -70 V0Z" fill="#A5F3FC" fill-opacity=".75" stroke="#E0FBFF" stroke-width="3"/>
    <path d="M-12 0 v-26 a12 12 0 0 1 24 0 v26z" fill="#0E7490"/>
    <text x="-11" y="-60" font-size="22" class="twinkle">❄</text>`
};
const EXTRA_ICONS = {
  iluminare: `<path d="M0 0 L-40 -90 M0 0 L0 -100 M0 0 L40 -90" stroke="#FFD36E" stroke-width="6" stroke-linecap="round" opacity=".7" class="twinkle"/><circle r="12" fill="#FFD36E"/>`,
  clicks: `<rect x="-24" y="-36" width="48" height="34" rx="6" fill="#1A2891" stroke="#fff" stroke-width="3"/><circle cy="-19" r="10" fill="#6AD1E3" stroke="#fff" stroke-width="3"/><rect x="-14" y="-42" width="12" height="6" fill="#fff"/>`
};

/* ---------- monta o SVG do mapa ---------- */
function buildMap() {
  const trees = Array.from({ length: 34 }, (_, i) => {
    const x = (i * 137) % 980 + 10, y = 380 + ((i * 89) % 220);
    if ((x > 380 && x < 680 && y < 470) || ((x - 230) ** 2 / 150 ** 2 + (y - 470) ** 2 / 75 ** 2 < 1) || (x > 740 && y < 520)) return '';
    return `<g transform="translate(${x} ${y})"><path d="M0 0 L-12 0 L0 -34 L12 0Z" fill="#14532D"/><path d="M0 -14 L-9 -14 L0 -42 L9 -14Z" fill="#166534"/></g>`;
  }).join('');

  const pins = MUNDOS.map(m => `
    <g class="pin${m.emBreve ? ' soon' : ''}" data-id="${m.id}" transform="translate(${m.mapa.x} ${m.mapa.y})" tabindex="0" role="button" aria-label="${m.nome}">
      <ellipse class="halo" cx="0" cy="0" rx="60" ry="16" fill="${m.acento}" opacity=".5"/>
      <ellipse cx="0" cy="0" rx="70" ry="16" fill="rgba(0,0,0,.25)"/>
      <g class="pin-bg">${LANDMARKS[m.id]}</g>
      <text class="pin-label" y="34" text-anchor="middle">${m.emBreve ? '❄ ' : ''}${m.nome}${m.emBreve ? ' · em breve' : ''}</text>
    </g>`).join('');

  const extras = EXTRAS.filter(e => e.mapa).map(e => `
    <g class="pin" data-extra="${e.id}" transform="translate(${e.mapa.x} ${e.mapa.y})" tabindex="0" role="button" aria-label="${e.nome}">
      <g class="pin-bg">${EXTRA_ICONS[e.id]}</g>
      <text class="pin-label" y="26" text-anchor="middle" style="font-size:13px">${e.nome}</text>
    </g>`).join('');

  // 4 ovos escondidos no mapa (o 5º é clicar 3x no Hector voando)
  const eggs = [[70, 560], [690, 120], [960, 330], [470, 300]].map(([x, y], i) => `
    <g class="map-egg" data-egg="mapa-${i}" transform="translate(${x} ${y})">
      <ellipse rx="9" ry="12" fill="#6AD1E3" stroke="#0C1456" stroke-width="2"/>
      <path d="M-6 -2 l4 3 l4 -4 l4 3" stroke="#F743FD" stroke-width="2" fill="none"/>
    </g>`).join('');

  return `
  <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa mágico do Universo Hector">
    <defs>
      <linearGradient id="g-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1A2891"/><stop offset=".55" stop-color="#4C2A85"/><stop offset="1" stop-color="#8740C0"/></linearGradient>
      <linearGradient id="g-land" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2F7D4A"/><stop offset="1" stop-color="#1B4D33"/></linearGradient>
      <radialGradient id="g-lake"><stop offset="0" stop-color="#9EE6F2"/><stop offset="1" stop-color="#2A8BB0"/></radialGradient>
      <path id="flyPath" d="M-80 120 C200 20 380 200 520 90 S820 40 1080 140"/>
      <path id="trainPath" d="M470 380 C470 330 650 330 650 380 C650 430 470 430 470 380Z"/>
    </defs>
    <rect width="1000" height="620" fill="url(#g-sky)"/>
    ${Array.from({ length: 40 }, (_, i) => `<circle cx="${(i * 97) % 1000}" cy="${(i * 53) % 160}" r="${i % 3 ? 1.2 : 2}" fill="#fff" class="twinkle" style="animation-delay:${(i % 7) * .3}s"/>`).join('')}
    <circle cx="880" cy="70" r="34" fill="#FFF4CC"/><circle cx="896" cy="62" r="30" fill="#2B2F94"/>
    <!-- montanhas -->
    <path d="M0 230 L120 120 L220 210 L330 110 L460 220 L560 130 L700 230 L820 140 L1000 240 V620 H0Z" fill="#3B2A7A"/>
    <path d="M330 110 L300 140 L345 135Z M820 140 L790 168 L840 162Z M120 120 L95 145 L135 140Z" fill="#fff" opacity=".85"/>
    <!-- terra -->
    <path d="M0 210 Q250 170 500 200 T1000 200 V620 H0Z" fill="url(#g-land)"/>
    <!-- lago -->
    <ellipse cx="230" cy="470" rx="120" ry="48" fill="url(#g-lake)" stroke="#9EE6F2" stroke-width="3"/>
    <text x="230" y="476" text-anchor="middle" font-size="12" font-weight="700" fill="#0C1456" font-family="Montserrat">Lago Encantado</text>
    <!-- estrada dourada -->
    <path d="M150 140 Q240 200 330 250 T520 150 Q640 210 560 360 Q700 300 790 230 Q860 330 830 450 M330 250 Q290 300 250 330 M560 360 Q500 400 430 420" stroke="#FFD36E" stroke-width="9" fill="none" stroke-dasharray="2 16" stroke-linecap="round" opacity=".9"/>
    ${trees}
    <!-- trilho e trem animado -->
    <use href="#trainPath" stroke="#7C2D12" stroke-width="10" fill="none"/>
    <use href="#trainPath" stroke="#FFD36E" stroke-width="2" fill="none" stroke-dasharray="4 8"/>
    <g><text font-size="26" y="8" x="-14">🚂</text><animateMotion dur="9s" repeatCount="indefinite" rotate="auto"><mpath href="#trainPath"/></animateMotion></g>
    ${pins}
    ${extras}
    ${eggs}
    <!-- Hector sobrevoando o mapa -->
    <g opacity=".95"><g transform="scale(.32) translate(-110 -85)">${HECTOR_SVG.replace(/<\/?svg[^>]*>/g, '')}</g>
      <animateMotion dur="14s" repeatCount="indefinite"><mpath href="#flyPath"/></animateMotion></g>
    <text x="22" y="604" font-size="12" fill="#fff" opacity=".6" font-family="Montserrat" font-weight="700">✦ Reino de Gramado</text>
  </svg>`;
}

/* ---------- card do mapa ---------- */
function openMapCard(id, isExtra) {
  const card = $('#mapCard');
  $$('.pin').forEach(p => p.classList.toggle('active', p.dataset.id === id || p.dataset.extra === id));
  if (isExtra) {
    const e = EXTRAS.find(x => x.id === id);
    card.innerHTML = `<button class="close" aria-label="Fechar">×</button>
      <div class="mc-emoji">${e.emoji}</div><h3 class="display">${e.nome}</h3><p>${e.texto}</p>
      ${e.id === 'iluminare' ? '<a class="btn" href="experiencia.html?mundo=pizzaria">Fica no castelo de Ônyra →</a>' : '<a class="btn" href="#portais">Ver as experiências →</a>'}`;
  } else {
    const m = MUNDOS.find(x => x.id === id);
    card.innerHTML = `<button class="close" aria-label="Fechar">×</button>
      <div class="mc-emoji">${m.emoji}</div>
      <span class="mc-tipo">${m.tipo}</span>
      <h3 class="display">${m.nome}</h3>
      <p>${m.resumo}</p>
      <p style="margin-top:-6px"><b>${m.info.preco}</b></p>
      <a class="btn" href="experiencia.html?mundo=${m.id}">${m.emBreve ? 'Espiar o castelo' : 'Começar a jornada'} →</a>`;
  }
  card.classList.add('open');
  $('.close', card).onclick = e => { e.stopPropagation(); card.classList.remove('open'); $$('.pin').forEach(p => p.classList.remove('active')); };
}

/* ---------- portais ---------- */
function buildPortals() {
  const grid = $('#portalGrid');
  MUNDOS.forEach((m, i) => {
    const el = document.createElement('article');
    el.className = `portal reveal d${i % 3}`;
    el.style.cssText = `--c1:${m.cores[0]};--c2:${m.cores[1]};--acc:${m.acento}`;
    el.innerHTML = `
      ${m.emBreve ? '<span class="soon-badge">EM BREVE</span>' : ''}
      ${m.logo ? `<img class="p-logo" src="${m.logo}" alt="${m.nome}" loading="lazy" onerror="this.outerHTML='<div class=\\'p-logo-text\\'>${m.emoji}</div>'">` : `<div class="p-logo-text">${m.emoji}</div>`}
      <div class="p-obj"></div>
      <h3 class="display">${m.nome}</h3>
      <p class="p-tag">${m.tagline}</p>
      <div class="p-meta"><span class="chip">${m.tipo.split('·')[0]}</span><span class="chip">${m.info.preco}</span></div>
      <div class="p-more">
        <p style="margin-bottom:12px">${m.resumo}</p>
        <ul>${m.curiosidades.slice(0, 3).map(c => `<li>${c}</li>`).join('')}</ul>
        <a class="btn" href="experiencia.html?mundo=${m.id}">Entrar em ${m.nome} →</a>
      </div>`;
    $('.p-obj', el).appendChild(buildObj(m.obj3d));
    el.addEventListener('click', e => {
      if (e.target.closest('a')) return;
      const was = el.classList.contains('expanded');
      $$('.portal.expanded').forEach(p => p.classList.remove('expanded'));
      if (!was) { el.classList.add('expanded'); setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 250); }
    });
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px'); el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
    grid.appendChild(el);
  });
}

function buildExtras() {
  $('#extraGrid').innerHTML = EXTRAS.map((e, i) => `
    <a class="extra reveal d${i % 3}" href="${e.url || '#mapa'}" ${e.url ? 'target="_blank" rel="noopener"' : ''}>
      <span class="e-emoji" style="animation-delay:${i * .3}s">${e.emoji}</span><h4>${e.nome}</h4><p>${e.texto}</p></a>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  $('#map').innerHTML = buildMap();
  $$('#map .pin').forEach(p => {
    const go = () => openMapCard(p.dataset.id || p.dataset.extra, !!p.dataset.extra);
    p.addEventListener('click', e => { e.stopPropagation(); go(); sparkle(e.clientX, e.clientY, 10); });
    p.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  });
  const found = eggsFound();
  $$('#map .map-egg').forEach(g => {
    if (found.includes(g.dataset.egg)) g.classList.add('found');
    g.addEventListener('click', e => { e.stopPropagation(); g.classList.add('found'); findEgg(g.dataset.egg, e.clientX, e.clientY); });
  });
  buildPortals(); buildExtras();
  initReveal(); // observa os elementos criados dinamicamente
});
