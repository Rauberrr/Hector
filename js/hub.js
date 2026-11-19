/* =========================================================
   HUB: mapa mágico interativo + portais
   ========================================================= */

const LOGO_ON = id => (MUNDOS.find(m => m.id === id) || {}).logo || '';

/* ameias de castelo: n dentes sobre uma parede */
function crenels(x, y, w, n, fill, stroke = '#2a2550') {
  const tw = w / (n * 2 - 1);
  let d = '';
  for (let i = 0; i < n; i++) d += `<rect x="${x + i * tw * 2}" y="${y - 9}" width="${tw}" height="10" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
  return d;
}
const win = (x, y, w = 12, h = 18, delay = 0) =>
  `<path d="M${x} ${y} v-${h - w / 2} a${w / 2} ${w / 2} 0 0 1 ${w} 0 v${h - w / 2}z" fill="#FFD36E" filter="url(#glow)" class="twinkle" style="animation-delay:${delay}s;animation-duration:4s"/>`;

/* ---------- fachadas em estilo cartoon (base em 0,0) ----------
   Sugestão: quando houver ilustrador, trocar por artes oficiais
   de cada fachada mantendo as mesmas posições. */
const LANDMARKS = {
  /* Castelo de Ônyra: torres de pedra, telhados azuis, letreiro com o logo */
  pizzaria: () => `
    <g filter="url(#shadow)">
      <rect x="-112" y="-150" width="46" height="150" fill="url(#stone)" stroke="#2a2550" stroke-width="2.5"/>
      <rect x="66" y="-150" width="46" height="150" fill="url(#stone)" stroke="#2a2550" stroke-width="2.5"/>
      <path d="M-120 -150 L-89 -212 L-58 -150Z" fill="url(#roofBlue)" stroke="#0C1456" stroke-width="2.5"/>
      <path d="M58 -150 L89 -212 L120 -150Z" fill="url(#roofBlue)" stroke="#0C1456" stroke-width="2.5"/>
      <path d="M-89 -212 v-22 l20 7 -20 7" fill="#D44F8A" stroke="#0C1456" stroke-width="1.5"><animate attributeName="d" values="M-89 -212 v-22 l20 7 -20 7;M-89 -212 v-22 l18 4 -18 10;M-89 -212 v-22 l20 7 -20 7" dur="2s" repeatCount="indefinite"/></path>
      <path d="M89 -212 v-22 l20 7 -20 7" fill="#F743FD" stroke="#0C1456" stroke-width="1.5"><animate attributeName="d" values="M89 -212 v-22 l20 7 -20 7;M89 -212 v-22 l18 10 -18 4;M89 -212 v-22 l20 7 -20 7" dur="2.3s" repeatCount="indefinite"/></path>
      <rect x="-66" y="-118" width="132" height="118" fill="url(#stone)" stroke="#2a2550" stroke-width="2.5"/>
      ${crenels(-66, -118, 132, 7, '#8b86b0')}
      <rect x="-32" y="-176" width="64" height="62" fill="url(#stone)" stroke="#2a2550" stroke-width="2.5"/>
      <path d="M-42 -176 L0 -240 L42 -176Z" fill="url(#roofPurple)" stroke="#0C1456" stroke-width="2.5"/>
      <circle cx="0" cy="-150" r="13" fill="#FFD36E" filter="url(#glow)" stroke="#7a5a1a" stroke-width="2"/>
      <path d="M0 -163 v26 M-13 -150 h26" stroke="#7a5a1a" stroke-width="2"/>
      ${win(-100, -96)}${win(-82, -96, 12, 18, 1)}${win(78, -96, 12, 18, .5)}${win(96, -96, 12, 18, 1.5)}
      ${win(-96, -40, 14, 22, .8)}${win(84, -40, 14, 22, .3)}
      <rect x="-60" y="-106" width="120" height="40" rx="8" fill="#2d1660" stroke="#FFD36E" stroke-width="2.5"/>
      <image href="${LOGO_ON('pizzaria')}" x="-52" y="-103" width="104" height="34" preserveAspectRatio="xMidYMid meet"/>
      <path d="M-24 0 v-34 a24 24 0 0 1 48 0 v34z" fill="#3b2412" stroke="#FFD36E" stroke-width="2.5"/>
      <path d="M0 -58 v58 M-24 -20 h48" stroke="#5a3a1c" stroke-width="2"/>
      <circle cx="-38" cy="-40" r="5" fill="#FFD36E" filter="url(#glow)"/><circle cx="38" cy="-40" r="5" fill="#FFD36E" filter="url(#glow)"/>
    </g>
    <g style="mix-blend-mode:screen" opacity=".55">
      <path d="M-150 30 L-60 -110 L-20 -100Z" fill="#F743FD"><animate attributeName="opacity" values="0;.8;0" dur="4s" repeatCount="indefinite"/></path>
      <path d="M150 30 L60 -110 L20 -100Z" fill="#6AD1E3"><animate attributeName="opacity" values="0;.8;0" dur="4s" begin="2s" repeatCount="indefinite"/></path>
    </g>`,

  /* Ferrovia Secreta: estação vitoriana de tijolos, relógio, toldo de ferro */
  ferrovia: () => `
    <g filter="url(#shadow)">
      <rect x="-120" y="-96" width="240" height="96" fill="url(#brick)" stroke="#3b1408" stroke-width="2.5"/>
      <path d="M-46 -96 L0 -168 L46 -96Z" fill="url(#brick)" stroke="#3b1408" stroke-width="2.5"/>
      <path d="M-56 -96 L0 -176 L56 -96" fill="none" stroke="#EFEFEA" stroke-width="5"/>
      <rect x="-130" y="-104" width="260" height="10" fill="#EFEFEA" stroke="#3b1408" stroke-width="2"/>
      <circle cx="0" cy="-126" r="20" fill="#EFEFEA" stroke="#2b2b2b" stroke-width="4"/>
      <g stroke="#0C1456" stroke-width="2.5" stroke-linecap="round"><path d="M0 -126 v-12"><animateTransform attributeName="transform" type="rotate" from="0 0 -126" to="360 0 -126" dur="60s" repeatCount="indefinite"/></path><path d="M0 -126 h9"><animateTransform attributeName="transform" type="rotate" from="0 0 -126" to="360 0 -126" dur="720s" repeatCount="indefinite"/></path></g>
      ${[-100, -70, 46, 76].map((x, i) => `<path d="M${x} -40 v-26 a12 12 0 0 1 24 0 v26z" fill="#FFD36E" filter="url(#glow)" stroke="#EFEFEA" stroke-width="2.5" class="twinkle" style="animation-duration:5s;animation-delay:${i * .6}s"/>`).join('')}
      <rect x="-62" y="-90" width="124" height="36" rx="4" fill="#111" stroke="#c9a24a" stroke-width="2.5"/>
      <image href="${LOGO_ON('ferrovia')}" x="-56" y="-88" width="112" height="32" preserveAspectRatio="xMidYMid meet"/>
      <path d="M-22 0 v-30 a22 22 0 0 1 44 0 v30z" fill="#1d2b1d" stroke="#c9a24a" stroke-width="2.5"/>
      <path d="M-140 -40 L140 -40 L128 -52 L-128 -52Z" fill="#1f3d2b" stroke="#0f2418" stroke-width="2"/>
      ${[-120, -60, 60, 120].map(x => `<path d="M${x} -40 v40" stroke="#0f2418" stroke-width="4"/>`).join('')}
      <g transform="translate(-150 0)"><path d="M0 0 v-46" stroke="#111" stroke-width="3"/><circle cy="-50" r="6" fill="#FFD36E" filter="url(#glow)"/></g>
      <g transform="translate(150 0)"><path d="M0 0 v-46" stroke="#111" stroke-width="3"/><circle cy="-50" r="6" fill="#FFD36E" filter="url(#glow)"/></g>
      <g transform="translate(96 0)"><rect x="-14" y="-18" width="28" height="18" rx="3" fill="#7C2D12" stroke="#c9a24a" stroke-width="2"/><rect x="-10" y="-30" width="20" height="12" rx="2" fill="#5b3a1c" stroke="#c9a24a" stroke-width="2"/></g>
      <rect x="-140" y="0" width="280" height="8" fill="#5b5b6b"/>
    </g>`,

  /* Era do Fogo: paredão de rocha, boca da caverna, tochas e um T-Rex espiando */
  'era-do-fogo': () => `
    <g filter="url(#shadow)">
      <path d="M-130 0 C-140 -60 -110 -120 -60 -140 C-20 -170 40 -165 80 -130 C120 -100 135 -50 130 0Z" fill="url(#rock)" stroke="#1C1917" stroke-width="3"/>
      <path d="M-100 -60 q20 -10 30 5 M60 -110 q20 0 25 20 M-40 -130 q15 -8 30 0 M90 -40 q10 -15 25 -5" stroke="#3a3330" stroke-width="3" fill="none"/>
      <path d="M-40 0 C-42 -50 -20 -70 0 -72 C20 -70 42 -50 40 0Z" fill="#120d0b"/>
      <path d="M-40 0 C-42 -50 -20 -70 0 -72 C20 -70 42 -50 40 0" fill="none" stroke="#FF861B" stroke-width="3" opacity=".6"><animate attributeName="opacity" values=".3;.8;.3" dur="1.5s" repeatCount="indefinite"/></path>
      <ellipse cx="0" cy="-8" rx="26" ry="8" fill="#FF861B" opacity=".5" filter="url(#glow)"/>
      <rect x="-70" y="-128" width="140" height="48" rx="12" fill="rgba(28,25,23,.55)"/>
      <image href="${LOGO_ON('era-do-fogo')}" x="-62" y="-126" width="124" height="44" preserveAspectRatio="xMidYMid meet"/>
      ${[-62, 62].map((x, i) => `<g transform="translate(${x} 0)"><rect x="-3" y="-44" width="6" height="44" fill="#5b3a1c"/><path d="M0 -44 q-10 -10 0 -26 q10 16 0 26z" fill="#FF861B" filter="url(#glow)"><animateTransform attributeName="transform" type="scale" values="1 1;1.1 1.25;1 1" dur="${.4 + i * .1}s" repeatCount="indefinite" additive="sum"/></path></g>`).join('')}
      <g transform="translate(-10 -150)">
        <path d="M0 0 q30 -26 62 -10 q10 6 4 16 l-20 2 l6 8 l-26 2 q-20 4 -26 -18z" fill="#4d7c0f" stroke="#1C1917" stroke-width="2.5"/>
        <circle cx="38" cy="-10" r="3.5" fill="#fff"/><circle cx="39" cy="-10" r="1.8" fill="#000"/>
        <path d="M46 8 l3 5 l3 -5 l3 5 l3 -5" stroke="#fff" stroke-width="2" fill="none"/>
        <animateTransform attributeName="transform" type="translate" values="-10 -150;-14 -158;-10 -150" dur="3s" repeatCount="indefinite"/>
      </g>
      <path d="M-120 -8 l14 -4 l2 6 l-14 4z M-100 -14 h18" stroke="#EFEFEA" stroke-width="4" stroke-linecap="round"/>
    </g>
    <path d="M70 -150 q-10 -20 0 -40 q10 -20 0 -40" stroke="rgba(255,255,255,.3)" stroke-width="8" fill="none" stroke-linecap="round"><animate attributeName="opacity" values=".2;.6;.2" dur="3s" repeatCount="indefinite"/></path>`,

  /* Fogo do Dragão: montanha-russa com estrutura treliçada e carrinho-dragão */
  'fogo-do-dragao': () => `
    <path id="coasterPath" d="M-110 -20 C-100 -120 -60 -150 -30 -150 C10 -150 20 -60 40 -40 C70 -10 60 -110 20 -100 C-10 -90 40 -10 80 -30 C110 -50 115 -20 120 -20" fill="none"/>
    ${[-100, -70, -40, -10, 20, 50, 80, 110].map(x => `<path d="M${x} 0 L${x} -${x < -20 ? 140 : 70}" stroke="#7a1f1f" stroke-width="2.5"/>`).join('')}
    <path d="M-100 -40 L-70 -100 M-70 -40 L-40 -130 M-40 -40 L-10 -110 M20 -40 L50 -70 M50 -40 L80 -60" stroke="#7a1f1f" stroke-width="1.5" opacity=".7"/>
    <use href="#coasterPath" stroke="#E8402F" stroke-width="7" filter="url(#shadow)"/>
    <use href="#coasterPath" stroke="#FFD36E" stroke-width="1.5" stroke-dasharray="3 6"/>
    <g><path d="M-14 -8 h22 l8 -6 l6 2 l-4 6 l4 4 h-8 v4 h-28z" fill="#B91C1C" stroke="#3B0764" stroke-width="2"/><circle cx="12" cy="-8" r="1.5" fill="#FFD36E"/>
      <animateMotion dur="5s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines=".5 0 .5 1"><mpath href="#coasterPath"/></animateMotion></g>
    <rect x="-60" y="-34" width="120" height="34" rx="6" fill="#3B0764" stroke="#FB923C" stroke-width="2.5" filter="url(#shadow)"/>
    <image href="${LOGO_ON('fogo-do-dragao')}" x="-56" y="-60" width="40" height="40" preserveAspectRatio="xMidYMid meet"/>
    <text x="14" y="-19" text-anchor="middle" font-family="Montserrat" font-weight="900" font-style="italic" font-size="12" fill="#FB923C">FOGO DO</text>
    <text x="14" y="-6" text-anchor="middle" font-family="Montserrat" font-weight="900" font-style="italic" font-size="12" fill="#FB923C">DRAGÃO</text>`,

  /* Pedidos Mágicos: lojinha com toldo listrado e caixa alada voando */
  'pedidos-magicos': () => `
    <g filter="url(#shadow)">
      <rect x="-70" y="-100" width="140" height="100" fill="#F9D9EC" stroke="#0C1456" stroke-width="2.5"/>
      <path d="M-78 -100 L0 -150 L78 -100Z" fill="#D44F8A" stroke="#0C1456" stroke-width="2.5"/>
      <rect x="-60" y="-138" width="120" height="26" rx="6" fill="#1A2891" stroke="#FFD36E" stroke-width="2"/>
      <text x="0" y="-120" text-anchor="middle" font-family="Montserrat" font-weight="900" font-style="italic" font-size="13" fill="#fff" letter-spacing=".5">PEDIDOS MÁGICOS</text>
      <path d="M-76 -94 h152 l-8 22 h-136z" fill="#fff" stroke="#0C1456" stroke-width="2"/>
      ${[0, 1, 2, 3, 4, 5, 6].map(i => `<path d="M${-72 + i * 21.7} -94 h11 l-2 22 h-11z" fill="#D44F8A"/>`).join('')}
      <path d="M-68 -72 ${[0, 1, 2, 3, 4, 5, 6].map(i => `q5.4 8 10.85 0 q5.4 8 10.85 0`).join(' ')}" fill="#fff" stroke="#0C1456" stroke-width="1.5"/>
      <rect x="-58" y="-56" width="56" height="40" rx="4" fill="#FFD36E" filter="url(#glow)" opacity=".9"/>
      <rect x="-50" y="-34" width="38" height="12" fill="#D44F8A" stroke="#0C1456" stroke-width="1.5"/>
      <rect x="14" y="-54" width="40" height="54" rx="3" fill="#1A2891" stroke="#0C1456" stroke-width="2"/><circle cx="46" cy="-26" r="2.5" fill="#FFD36E"/>
    </g>
    <g><rect x="74" y="-150" width="30" height="22" rx="3" fill="#D44F8A" stroke="#0C1456" stroke-width="2"/><path d="M80 -139 h18" stroke="#FFD36E" stroke-width="2"/>
      <path d="M74 -146 q-16 -18 -26 -2 q10 0 26 6z M104 -146 q16 -18 26 -2 q-10 0 -26 6z" fill="#fff" stroke="#0C1456" stroke-width="1.5"><animateTransform attributeName="transform" type="scale" values="1 1;1 .6;1 1" dur=".4s" repeatCount="indefinite" additive="sum"/></path>
      <animateTransform attributeName="transform" type="translate" values="0 0;10 -14;0 0" dur="3s" repeatCount="indefinite"/></g>`,

  /* Castelo de Gelo: torres translúcidas, pingentes e o nome na fachada */
  'castelo-de-gelo': () => `
    <g filter="url(#shadow)">
      <path d="M-100 0 V-90 L-84 -150 L-68 -90 V-110 L-40 -180 L-12 -110 V-120 L0 -200 L12 -120 V-110 L40 -180 L68 -110 V-90 L84 -150 L100 -90 V0Z" fill="url(#ice)" stroke="#E0FBFF" stroke-width="3"/>
      <path d="M-84 -150 L-84 -20 M0 -200 V-40 M84 -150 V-20 M-40 -180 V-60 M40 -180 V-60" stroke="#fff" stroke-width="1.5" opacity=".5"/>
      <path d="M-100 -90 ${Array.from({ length: 20 }, (_, i) => `l5 ${i % 2 ? -12 : 12}`).join(' ')}" stroke="#E0FBFF" stroke-width="2" fill="none" opacity=".8"/>
      <rect x="-82" y="-84" width="164" height="52" rx="10" fill="rgba(12,20,86,.6)" stroke="#E0FBFF" stroke-width="2"/>
      <image href="${LOGO_ON('castelo-de-gelo')}" x="-76" y="-82" width="152" height="48" preserveAspectRatio="xMidYMid meet"/>
      <path d="M-20 0 v-14 a20 20 0 0 1 40 0 v14z" fill="#0E7490" stroke="#E0FBFF" stroke-width="2"/>
    </g>
    ${Array.from({ length: 10 }, (_, i) => `<circle cx="${-100 + i * 22}" r="${1.5 + i % 3}" fill="#fff"><animate attributeName="cy" values="-210;10" dur="${3 + i % 4}s" begin="${i * .4}s" repeatCount="indefinite"/></circle>`).join('')}
    <g transform="translate(0 -8)"><rect x="-38" y="-10" width="76" height="20" rx="10" fill="#6AD1E3" stroke="#0C1456" stroke-width="2"/><text y="5" text-anchor="middle" font-family="Montserrat" font-weight="900" font-size="11" fill="#0C1456">EM BREVE</text></g>`
};

const EXTRA_ART = {
  /* projetor de luz do Grande Iluminare */
  iluminare: () => `
    <path d="M0 -20 L-70 -140 L-30 -150Z" fill="#F743FD" opacity=".35"><animate attributeName="opacity" values=".1;.5;.1" dur="3s" repeatCount="indefinite"/></path>
    <path d="M0 -20 L30 -150 L70 -140Z" fill="#6AD1E3" opacity=".35"><animate attributeName="opacity" values=".5;.1;.5" dur="3s" repeatCount="indefinite"/></path>
    <rect x="-16" y="-26" width="32" height="20" rx="4" fill="#1A2891" stroke="#FFD36E" stroke-width="2"/><circle cy="-16" r="6" fill="#FFD36E" filter="url(#glow)"/>
    <path d="M-10 -6 l-6 6 M10 -6 l6 6" stroke="#FFD36E" stroke-width="2.5"/>`,
  /* cabine de fotos Clicks Mágicos */
  clicks: () => `
    <g filter="url(#shadow)"><rect x="-26" y="-70" width="52" height="70" rx="6" fill="#8740C0" stroke="#0C1456" stroke-width="2.5"/>
    <rect x="-20" y="-62" width="40" height="30" rx="4" fill="#0C1456"/><circle cy="-47" r="9" fill="#6AD1E3" stroke="#fff" stroke-width="2"/>
    <rect x="-18" y="-24" width="36" height="8" rx="2" fill="#FFD36E"/>
    <circle cy="-47" r="22" fill="#fff" opacity="0"><animate attributeName="opacity" values="0;0;.9;0" keyTimes="0;.85;.9;1" dur="4s" repeatCount="indefinite"/></circle></g>`
};

/* trem a vapor que cruza o mapa */
const TRAIN = `
  <g>
    <g transform="translate(-60 0)">
      ${[0, 1].map(i => `<g transform="translate(${-62 * i - 62} 0)"><rect x="0" y="-26" width="56" height="22" rx="3" fill="${i ? '#1A2891' : '#8740C0'}" stroke="#0C1456" stroke-width="2"/>${[8, 22, 36].map(x => `<rect x="${x}" y="-21" width="10" height="9" rx="2" fill="#FFD36E"/>`).join('')}<circle cx="12" cy="-3" r="5" fill="#222"/><circle cx="44" cy="-3" r="5" fill="#222"/></g>`).join('')}
      <rect x="0" y="-36" width="22" height="32" rx="2" fill="#7C2D12" stroke="#0C1456" stroke-width="2"/>
      <rect x="4" y="-31" width="12" height="9" fill="#FFD36E"/>
      <rect x="20" y="-24" width="40" height="20" rx="8" fill="#B91C1C" stroke="#0C1456" stroke-width="2"/>
      <rect x="44" y="-38" width="8" height="15" fill="#222"/><path d="M60 -6 l8 6 h-12z" fill="#555"/>
      <circle cx="56" cy="-16" r="3" fill="#FFD36E" filter="url(#glow)"/>
      <circle cx="12" cy="-3" r="6" fill="#222"/><circle cx="34" cy="-3" r="6" fill="#222"/><circle cx="52" cy="-3" r="5" fill="#222"/>
      ${[0, 1, 2].map(i => `<circle cx="48" cy="-44" r="6" fill="#fff" opacity=".7"><animate attributeName="cy" values="-44;-80" dur="1.5s" begin="${i * .5}s" repeatCount="indefinite"/><animate attributeName="r" values="5;14" dur="1.5s" begin="${i * .5}s" repeatCount="indefinite"/><animate attributeName="opacity" values=".8;0" dur="1.5s" begin="${i * .5}s" repeatCount="indefinite"/></circle>`).join('')}
    </g>
    <animateMotion dur="16s" repeatCount="indefinite" rotate="auto"><mpath href="#trainPath"/></animateMotion>
  </g>`;

const TREES = [[30, 330], [70, 370], [25, 420], [80, 460], [480, 390], [515, 420], [470, 440], [960, 380], [985, 430], [940, 450],
  [330, 560], [360, 640], [380, 600], [700, 590], [740, 625], [690, 640], [500, 290], [520, 330], [700, 290], [740, 320], [980, 300], [30, 650], [560, 640], [240, 300], [60, 520], [990, 560]];
const tree = ([x, y], i) => `<g transform="translate(${x} ${y}) scale(${.9 + (i % 3) * .15})"><rect x="-2" y="-6" width="4" height="8" fill="#5b3a1c"/><path d="M0 -6 L-14 -6 L0 -40 L14 -6Z" fill="#14532D"/><path d="M0 -20 L-10 -20 L0 -50 L10 -20Z" fill="#166534"/><path d="M0 -50 L-3 -42 L3 -42Z" fill="#fff" opacity=".7"/></g>`;

/* ---------- monta o SVG do mapa ---------- */
function buildMap() {
  const pins = MUNDOS.map(m => `
    <g class="pin${m.emBreve ? ' soon' : ''}" data-id="${m.id}" transform="translate(${m.mapa.x} ${m.mapa.y})" tabindex="0" role="button" aria-label="${m.nome}">
      <ellipse class="halo" cx="0" cy="0" rx="90" ry="18" fill="${m.acento}" opacity=".45"/>
      <ellipse cx="0" cy="2" rx="${m.id === 'ferrovia' ? 150 : 110}" ry="16" fill="rgba(0,0,0,.28)"/>
      <g class="pin-bg">${LANDMARKS[m.id]()}</g>
      <g class="pin-tag"><rect x="-80" y="14" width="160" height="26" rx="13" fill="rgba(12,20,86,.85)" stroke="${m.acento}" stroke-width="2"/>
      <text class="pin-label" y="32" text-anchor="middle">${m.nome}</text></g>
    </g>`).join('');

  const extras = EXTRAS.filter(e => e.mapa).map(e => `
    <g class="pin" data-extra="${e.id}" transform="translate(${e.mapa.x} ${e.mapa.y})" tabindex="0" role="button" aria-label="${e.nome}">
      <g class="pin-bg">${EXTRA_ART[e.id]()}</g>
      <text class="pin-label small" y="20" text-anchor="middle">${e.nome}</text>
    </g>`).join('');

  // 4 ovos escondidos no mapa (o 5º é clicar 3x no Hector voando)
  const eggs = [[40, 560], [700, 150], [975, 395], [478, 345]].map(([x, y], i) => `
    <g class="map-egg" data-egg="mapa-${i}" transform="translate(${x} ${y})">
      <ellipse rx="9" ry="12" fill="#6AD1E3" stroke="#0C1456" stroke-width="2"/>
      <path d="M-6 -2 l4 3 l4 -4 l4 3" stroke="#F743FD" stroke-width="2" fill="none"/>
    </g>`).join('');

  return `
  <svg viewBox="0 0 1000 660" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa mágico do Universo Hector">
    <defs>
      <linearGradient id="g-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0C1456"/><stop offset=".45" stop-color="#3a2a85"/><stop offset="1" stop-color="#8740C0"/></linearGradient>
      <linearGradient id="g-land" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f6b46"/><stop offset="1" stop-color="#173c2a"/></linearGradient>
      <linearGradient id="g-hill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a3a8a"/><stop offset="1" stop-color="#2a2060"/></linearGradient>
      <radialGradient id="g-lake"><stop offset="0" stop-color="#9EE6F2"/><stop offset="1" stop-color="#2A8BB0"/></radialGradient>
      <linearGradient id="roofBlue" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2a3bb8"/><stop offset=".5" stop-color="#1A2891"/><stop offset="1" stop-color="#0C1456"/></linearGradient>
      <linearGradient id="roofPurple" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#a160d6"/><stop offset="1" stop-color="#5b2a8a"/></linearGradient>
      <linearGradient id="ice" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E0FBFF" stop-opacity=".95"/><stop offset=".5" stop-color="#A5F3FC" stop-opacity=".8"/><stop offset="1" stop-color="#0E7490" stop-opacity=".7"/></linearGradient>
      <radialGradient id="rock" cx=".4" cy=".3"><stop offset="0" stop-color="#8a7f78"/><stop offset="1" stop-color="#4a423e"/></radialGradient>
      <pattern id="stone" width="24" height="14" patternUnits="userSpaceOnUse"><rect width="24" height="14" fill="#a7a3c4"/><path d="M0 0 h24 M0 7 h24 M12 0 v7 M0 7 v7 M24 7 v7" stroke="#7d78a3" stroke-width="1.2"/></pattern>
      <pattern id="brick" width="16" height="8" patternUnits="userSpaceOnUse"><rect width="16" height="8" fill="#a8432a"/><path d="M0 0 h16 M0 4 h16 M8 0 v4 M0 4 v4 M16 4 v4" stroke="#6e2513" stroke-width="1"/></pattern>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#000" flood-opacity=".35"/></filter>
      <path id="flyPath" d="M-100 140 C200 40 380 200 520 100 S820 50 1100 150"/>
      <path id="trainPath" d="M-160 520 C150 525 400 492 600 490 S900 478 1160 470"/>
    </defs>
    <rect width="1000" height="660" fill="url(#g-sky)"/>
    ${Array.from({ length: 50 }, (_, i) => `<circle cx="${(i * 97) % 1000}" cy="${(i * 53) % 180}" r="${i % 3 ? 1.2 : 2}" fill="#fff" class="twinkle" style="animation-delay:${(i % 7) * .3}s"/>`).join('')}
    <circle cx="890" cy="70" r="36" fill="#FFF4CC" filter="url(#glow)"/><circle cx="907" cy="61" r="32" fill="#1d1f6e"/>
    <path d="M0 250 L110 130 L210 230 L320 120 L450 240 L560 140 L690 250 L820 150 L1000 260 V660 H0Z" fill="url(#g-hill)"/>
    <path d="M320 120 L292 152 L312 146 L325 156 L345 144Z M820 150 L792 180 L812 175 L826 184 L846 172Z M110 130 L86 158 L104 152 L116 160 L134 150Z M560 140 L536 166 L566 160 L582 166Z" fill="#fff" opacity=".9"/>
    <path d="M0 240 Q250 195 500 225 T1000 220 V660 H0Z" fill="url(#g-land)"/>
    <path d="M0 330 Q300 300 520 340 T1000 330 V660 H0Z" fill="#245a3a" opacity=".55"/>
    <ellipse cx="185" cy="612" rx="120" ry="36" fill="url(#g-lake)" stroke="#9EE6F2" stroke-width="3"/>
    <path d="M120 605 q10 -4 20 0 M200 625 q10 -4 20 0 M230 598 q10 -4 20 0" stroke="#fff" stroke-width="2" opacity=".7" fill="none"/>
    <text x="185" y="617" text-anchor="middle" font-size="12" font-weight="800" fill="#0C1456" font-family="Montserrat">Lago Encantado</text>
    <path d="M140 225 Q240 290 340 335 T590 240 Q690 300 600 470 Q720 380 830 275 Q900 420 875 600 M340 335 Q280 380 205 430 M600 470 Q520 540 430 590" stroke="#e8c675" stroke-width="12" fill="none" stroke-linecap="round" opacity=".45"/>
    <path d="M140 225 Q240 290 340 335 T590 240 Q690 300 600 470 Q720 380 830 275 Q900 420 875 600 M340 335 Q280 380 205 430 M600 470 Q520 540 430 590" stroke="#FFD36E" stroke-width="3" fill="none" stroke-dasharray="2 12" stroke-linecap="round"/>
    ${TREES.map(tree).join('')}
    <use href="#trainPath" stroke="#4a2c14" stroke-width="12" fill="none" stroke-dasharray="3 7"/>
    <use href="#trainPath" stroke="#9aa0b5" stroke-width="3" fill="none" transform="translate(0 -4)"/>
    <use href="#trainPath" stroke="#9aa0b5" stroke-width="3" fill="none" transform="translate(0 4)"/>
    ${pins}
    ${TRAIN}
    ${extras}
    ${eggs}
    <g><image href="${HECTOR_IMG}" x="-45" y="-45" width="90" height="88"/>
      <animateMotion dur="16s" repeatCount="indefinite"><mpath href="#flyPath"/></animateMotion></g>
    <text x="22" y="648" font-size="12" fill="#fff" opacity=".6" font-family="Montserrat" font-weight="700">✦ Reino de Gramado</text>
  </svg>`;
}

/* ---------- card do mapa ---------- */
function openMapCard(id, isExtra) {
  const card = $('#mapCard');
  $$('.pin').forEach(p => p.classList.toggle('active', p.dataset.id === id || p.dataset.extra === id));
  if (isExtra) {
    const e = EXTRAS.find(x => x.id === id);
    card.innerHTML = `<button class="close" aria-label="Fechar">×</button>
      <div class="mc-icon">${icon(e.icone)}</div><h3 class="display">${e.nome}</h3><p>${e.texto}</p>
      ${e.id === 'iluminare' ? '<a class="btn" href="experiencia.html?mundo=pizzaria">Fica no castelo de Ônyra →</a>' : '<a class="btn" href="#portais">Ver as experiências →</a>'}`;
  } else {
    const m = MUNDOS.find(x => x.id === id);
    card.innerHTML = `<button class="close" aria-label="Fechar">×</button>
      ${m.logo ? `<img class="mc-logo" src="${m.logo}" alt="${m.nome}">` : `<div class="mc-icon">${icon(m.icone)}</div>`}
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
      ${m.logo ? `<img class="p-logo" src="${m.logo}" alt="${m.nome}" loading="lazy">` : `<div class="p-logo-text">${icon(m.icone)}<span>PEDIDOS<br>MÁGICOS</span></div>`}
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
      <span class="e-icon" style="animation-delay:${i * .3}s">${icon(e.icone)}</span><h4>${e.nome}</h4><p>${e.texto}</p></a>`).join('');
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
  const bm = $('#btnMapa'); if (bm) bm.insertAdjacentHTML('afterbegin', icon('map'));
  initReveal();
});
