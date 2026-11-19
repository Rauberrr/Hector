/* =========================================================
   MAGIA COMPARTILHADA: céu, faíscas, easter eggs, objetos 3D
   ========================================================= */

/* ---- Hector (PLACEHOLDER em SVG) ----
   Sugestão: substituir pela ilustração oficial do Hector (PNG/WebP
   com fundo transparente, ou animação Lottie) quando o cliente enviar. */
const HECTOR_SVG = `
<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg" aria-label="Hector, o Mago Dragão">
  <g class="wing"><path d="M95 70 C60 10 20 20 10 40 C35 40 40 55 30 70 C50 62 60 75 55 90 C70 80 85 85 95 95Z" fill="#6AD1E3" stroke="#1A2891" stroke-width="3"/></g>
  <path d="M60 120 C30 130 15 120 8 105 C25 112 40 108 55 100Z" fill="#8740C0" stroke="#1A2891" stroke-width="3"/>
  <ellipse cx="110" cy="105" rx="52" ry="38" fill="#8740C0" stroke="#1A2891" stroke-width="3"/>
  <ellipse cx="118" cy="114" rx="30" ry="22" fill="#F9D9EC"/>
  <circle cx="165" cy="75" r="34" fill="#8740C0" stroke="#1A2891" stroke-width="3"/>
  <ellipse cx="190" cy="85" rx="20" ry="14" fill="#A160D6" stroke="#1A2891" stroke-width="3"/>
  <circle cx="196" cy="82" r="2.5" fill="#1A2891"/><circle cx="188" cy="83" r="2.5" fill="#1A2891"/>
  <circle cx="168" cy="68" r="10" fill="#fff"/><circle cx="171" cy="68" r="5.5" fill="#0C1456"/><circle cx="173" cy="66" r="2" fill="#fff"/>
  <path d="M150 48 L175 2 L190 50Z" fill="#1A2891" stroke="#0C1456" stroke-width="3"/>
  <circle cx="175" cy="4" r="5" fill="#FFD36E"/><path d="M160 30 l4 3 -4 3 -4 -3z M176 24 l3 3 -3 3 -3 -3z" fill="#FFD36E"/>
  <path d="M145 52 Q170 40 196 52" stroke="#0C1456" stroke-width="5" fill="none" stroke-linecap="round"/>
  <g class="wing" style="animation-delay:.15s"><path d="M120 72 C110 20 140 5 160 15 C145 25 150 40 160 48 C140 50 135 62 120 72Z" fill="#9EE6F2" stroke="#1A2891" stroke-width="3"/></g>
  <path d="M85 138 l-6 16 h14z M130 140 l-4 16 h14z" fill="#8740C0" stroke="#1A2891" stroke-width="3"/>
</svg>`;


/* Hector oficial (ilustração do site atual da Hector) */
const HECTOR_IMG = 'https://hectordragao.com.br/wp-content/uploads/2023/12/hector_com_varinha-1024x1001.webp';

/* ---- ícones desenhados (substituem emojis) ---- */
const ICONS = {
  wand: '<path d="M4 20L15 9"/><path d="M15 3v3M19 5l-2 2M21 9h-3M18 12l-1-1"/>',
  train: '<rect x="5" y="3" width="14" height="13" rx="3"/><path d="M5 10h14M8 20l2-4M16 20l-2-4"/><circle cx="9" cy="13" r=".8"/><circle cx="15" cy="13" r=".8"/>',
  flame: '<path d="M12 22c4 0 7-3 7-7 0-4-3-6-4-10-2 2-3 4-3 6-1-1-2-2-2-4-2 2-5 5-5 8 0 4 3 7 7 7z"/>',
  coaster: '<path d="M2 18c3-8 6-12 9-12s4 6 6 6 3-3 5-5"/><path d="M5 20v-5M11 20V7M17 20v-7"/>',
  box: '<path d="M3 8l9-5 9 5v8l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  snow: '<path d="M12 2v20M3.5 7l17 10M20.5 7l-17 10M9 4l3 2 3-2M9 20l3-2 3 2"/>',
  spark: '<path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5z"/>',
  camera: '<path d="M3 8h4l2-3h6l2 3h4v11H3z"/><circle cx="12" cy="13" r="4"/>',
  film: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
  play: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/>',
  bag: '<path d="M5 8h14l-1 13H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  hourglass: '<path d="M6 2h12M6 22h12M7 2c0 5 10 7 10 10s-10 5-10 10M17 2c0 5-10 7-10 10s10 5 10 10"/>',
  pin: '<path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  kid: '<circle cx="12" cy="6" r="3"/><path d="M7 21l1.5-8h7L17 21M8.5 13L5 10.5M15.5 13l3.5-2.5"/>',
  chat: '<path d="M4 4h16v12H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
  map: '<path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/>',
  egg: '<path d="M12 3c4 0 7 7 7 11a7 7 0 0 1-14 0c0-4 3-11 7-11z"/>',
  ticket: '<path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4z"/><path d="M14 7v10" stroke-dasharray="2 2"/>'
};
function icon(name, cls = '') {
  return `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.spark}</svg>`;
}

/* ---- utilitários ---- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};

/* ---- céu estrelado em canvas (leve) ---- */
function initSky() {
  const c = document.getElementById('sky'); if (!c) return;
  const ctx = c.getContext('2d');
  let stars = [], w, h;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function resize() {
    w = c.width = innerWidth; h = c.height = innerHeight;
    stars = Array.from({ length: Math.min(160, w / 8) }, () => ({
      x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.6 + .3,
      s: Math.random() * .02 + .005, p: Math.random() * Math.PI * 2
    }));
  }
  let shooting = null;
  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      const a = .4 + Math.sin(t * s.s * .1 + s.p) * .4;
      ctx.fillStyle = `rgba(255,255,240,${a})`;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 7); ctx.fill();
    }
    if (!shooting && Math.random() < .004) shooting = { x: Math.random() * w * .7, y: Math.random() * h * .3, l: 0 };
    if (shooting) {
      shooting.l += 14;
      const g = ctx.createLinearGradient(shooting.x + shooting.l, shooting.y + shooting.l * .4, shooting.x + shooting.l - 120, shooting.y + shooting.l * .4 - 48);
      g.addColorStop(0, 'rgba(255,255,255,.9)'); g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.strokeStyle = g; ctx.lineWidth = 2; ctx.beginPath();
      ctx.moveTo(shooting.x + shooting.l, shooting.y + shooting.l * .4);
      ctx.lineTo(shooting.x + shooting.l - 120, shooting.y + shooting.l * .4 - 48); ctx.stroke();
      if (shooting.l > 500) shooting = null;
    }
    if (!reduce) requestAnimationFrame(draw);
  }
  resize(); addEventListener('resize', resize); requestAnimationFrame(draw);
}

/* ---- faíscas ---- */
const SPARKS = ['✦', '✧', '★', '·', '✨'];
function sparkle(x, y, n = 12, colors = ['#FFD36E', '#F743FD', '#6AD1E3', '#fff']) {
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span');
    s.className = 'spark';
    s.textContent = SPARKS[i % SPARKS.length];
    const ang = Math.random() * Math.PI * 2, dist = 40 + Math.random() * 80;
    s.style.cssText = `left:${x}px;top:${y}px;color:${colors[i % colors.length]};--dx:${Math.cos(ang) * dist}px;--dy:${Math.sin(ang) * dist}px;font-size:${10 + Math.random() * 14}px`;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1000);
  }
}

/* ---- toast ---- */
function toast(msg) {
  let t = $('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 3200);
}

/* ---- easter egg: digitar "magia" ---- */
function initMagicWord() {
  let buf = '';
  addEventListener('keydown', e => {
    buf = (buf + e.key.toLowerCase()).slice(-5);
    if (buf === 'magia') {
      for (let i = 0; i < 8; i++) setTimeout(() => sparkle(Math.random() * innerWidth, Math.random() * innerHeight, 16), i * 120);
      toast('Magia! Você descobriu a palavra secreta do Hector.');
    }
  });
}

/* ---- ovos de dragão (caça ao tesouro) ---- */
const TOTAL_EGGS = 5;
function eggsFound() { return store.get('hectorEggs', []); }
function updateEggCounter() {
  const el = $('#eggCount'); if (el) el.innerHTML = `${icon('egg')} ${eggsFound().length}/${TOTAL_EGGS}`;
}
function findEgg(id, x, y) {
  const list = eggsFound();
  if (!list.includes(id)) { list.push(id); store.set('hectorEggs', list); }
  sparkle(x, y, 20);
  updateEggCounter();
  toast(list.length >= TOTAL_EGGS
    ? 'Você achou todos os Ovos de Dragão! Agora é Aprendiz Honorário do Hector.'
    : `Ovo de Dragão encontrado! (${list.length}/${TOTAL_EGGS})`);
}

/* ---- revelação no scroll ---- */
function initReveal() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
  $$('.reveal').forEach(el => io.observe(el));
}

function initTopbar() {
  const bar = $('.topbar'); if (!bar) return;
  const f = () => bar.classList.toggle('scrolled', scrollY > 40);
  addEventListener('scroll', f, { passive: true }); f();
}

/* ---- objetos 3D em CSS ---- */
function buildObj(type) {
  const o = document.createElement('div');
  o.className = `obj ${type}`;
  const st = document.createElement('div'); st.className = 'stage'; o.appendChild(st);
  if (type === 'burger') {
    // camadas com espessura: vários discos finos empilhados (de baixo para cima)
    st.style.animationName = 'spinBurger';
    const layers = [['bun-bot', 12, 0], ['patty', 14, 0], ['cheese', 3, 0], ['tomato', 4, 0], ['lettuce', 4, 0], ['bun-top', 34, 1]];
    let y = 0;
    layers.forEach(([cls, h, dome]) => {
      for (let k = 0; k <= h; k += 1) {
        const d = document.createElement('div');
        d.className = 'l ' + cls;
        const sc = dome ? Math.sqrt(Math.max(.05, 1 - (k / (h + 4)) ** 2)) : 1;
        d.style.transform = `translateY(${40 - y - k}px) rotateX(90deg) scale(${sc})${cls === 'cheese' ? ' rotateZ(45deg)' : ''}`;
        if (k + 1 <= h) d.style.boxShadow = 'none';
        if (cls === 'bun-top' && k > h - 12 && k % 4 === 0) for (let i = 0; i < 3; i++) {
          const s = document.createElement('i'); s.className = 'seed';
          s.style.left = 20 + Math.random() * 90 + 'px'; s.style.top = 20 + Math.random() * 90 + 'px'; d.appendChild(s);
        }
        st.appendChild(d);
      }
      y += h + 2;
    });
  } else if (type === 'pizza') {
    const d = document.createElement('div'); d.className = 'disc';
    [[30, 30], [80, 25], [55, 60], [25, 85], [90, 80], [60, 100]].forEach(([x, y]) => {
      const p = document.createElement('i'); p.className = 'pep'; p.style.left = x + 'px'; p.style.top = y + 'px'; d.appendChild(p);
    });
    st.appendChild(d);
    const w = document.createElement('div'); w.className = 'wand'; o.appendChild(w);
  } else if (type === 'fondue') {
    st.style.animation = 'none';
    st.innerHTML = '<div class="cheese-top"></div><div class="pot"></div>';
    for (let i = 0; i < 3; i++) {
      const f = document.createElement('div'); f.className = 'flame';
      f.style.left = 52 + i * 20 + 'px'; f.style.animationDelay = i * .08 + 's'; st.appendChild(f);
    }
    for (let i = 0; i < 4; i++) {
      const b = document.createElement('i'); b.className = 'bubble';
      b.style.left = 55 + i * 15 + 'px'; b.style.bottom = '92px'; b.style.animationDelay = i * .4 + 's'; st.appendChild(b);
    }
    const ring = document.createElement('div'); ring.className = 'ring';
    for (let i = 0; i < 6; i++) {
      const c = document.createElement('i'); c.className = 'cube';
      c.style.transform = `rotateY(${i * 60}deg) translateZ(70px)`; ring.appendChild(c);
    }
    o.appendChild(ring);
  } else if (type === 'coaster') {
    st.style.animation = 'none';
    st.innerHTML = '<div class="track"></div><div class="flames">🔥</div><div class="cart"><span>🐉</span></div>';
  } else if (type === 'box') {
    st.innerHTML = '<div class="face" style="transform:translateZ(50px)">✨</div><div class="face" style="transform:rotateY(90deg) translateZ(50px)">🪄</div><div class="face" style="transform:rotateY(180deg) translateZ(50px)">🍕</div><div class="face" style="transform:rotateY(-90deg) translateZ(50px)">⭐</div><div class="face" style="transform:rotateX(90deg) translateZ(50px)"></div>';
  } else if (type === 'crystal') {
    for (let i = 0; i < 4; i++) {
      const p = document.createElement('div'); p.className = 'plane';
      p.style.transform = `rotateY(${i * 45}deg)`; st.appendChild(p);
    }
  }
  return o;
}

/* ---- inicialização comum ---- */
document.addEventListener('DOMContentLoaded', () => {
  initSky(); initMagicWord(); initReveal(); initTopbar(); updateEggCounter();
  // faísca em todo clique
  addEventListener('click', e => sparkle(e.clientX, e.clientY, 6));
  // Hector voando: 3 cliques = surpresa
  $$('.hector-fly').forEach(h => {
    h.innerHTML = `<img src="${HECTOR_IMG}" alt="Hector, o Mago Dragão" draggable="false">`; h.querySelector('img').onerror = () => { h.innerHTML = HECTOR_SVG; }; let n = 0;
    h.addEventListener('click', e => {
      e.stopPropagation(); n++;
      sparkle(e.clientX, e.clientY, 14);
      if (n === 3) { findEgg('hector-voando', e.clientX, e.clientY); n = 0; }
      else toast(n === 1 ? 'Hector: "Ei! Cuidado com o chapéu!"' : 'Hector: "Mais uma vez e eu te conto um segredo..."');
    });
  });
});
