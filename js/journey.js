/* =========================================================
   JORNADA EM SCROLL: uma página por experiência
   experiencia.html?mundo=pizzaria | ferrovia | era-do-fogo ...
   ========================================================= */

const TRAVELER = { pizzaria: '🪄', ferrovia: '🚂', 'era-do-fogo': '🦖', 'fogo-do-dragao': '🐉', 'pedidos-magicos': '📦', 'castelo-de-gelo': '❄️' };
const CAP = { // títulos dos capítulos no "sotaque" de cada mundo
  pizzaria: ['A lenda de Ônyra', 'Sua aula de magia', 'O grimório de sabores', 'Seus professores', 'Segredos do castelo'],
  ferrovia: ['O mapa da ferrovia', 'Roteiro da viagem', 'Serviço de bordo', 'A tripulação', 'Segredos dos trilhos'],
  'era-do-fogo': ['A fenda na serra', 'O Ritual de Comilança', 'Comilança cavernosa', 'A tribo Grinstone', 'Segredos da caverna'],
  'fogo-do-dragao': ['As asas do Hector', 'Prepare-se para voar', '', 'Quem está no parque', 'Segredos da montanha'],
  'pedidos-magicos': ['O feitiço de entrega', 'Como o feitiço funciona', 'O cardápio mágico', 'Quem está nas cartas', 'Segredos da caixa'],
  'castelo-de-gelo': ['A lenda do castelo', 'O que vem por aí', '', 'Quem vive no gelo', 'Segredos congelados']
};

function render(m) {
  const cap = CAP[m.id];
  document.title = `${m.nome} · Universo Hector`;
  document.body.style.setProperty('--c1', m.cores[0]);
  document.body.style.setProperty('--c2', m.cores[1]);
  document.body.style.setProperty('--acc', m.acento);
  $('.traveler').innerHTML = `<img src="${HECTOR_IMG}" alt="">`;

  const idx = MUNDOS.indexOf(m);
  const next = MUNDOS[(idx + 1) % MUNDOS.length], prev = MUNDOS[(idx - 1 + MUNDOS.length) % MUNDOS.length];
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(m.info.endereco.replace(/\(confirmar\)/, '') + ' ' + m.nome);

  $('#journey').innerHTML = `
  <!-- HERO -->
  <section class="j-hero">
    <div class="wrap j-hero-grid">
      <div>
        <span class="eyebrow reveal">${m.reino}</span>
        ${m.logo ? `<img class="j-logo reveal d1" src="${m.logo}" alt="${m.nome}" onerror="this.remove()">` : ''}
        <h1 class="display reveal d1">${m.nome}</h1>
        <p class="j-tagline reveal d2">${m.tagline}</p>
        <div class="j-chips reveal d2">${m.publico.map(p => `<span class="chip">${p}</span>`).join('')}</div>
        <div class="actions reveal d3">
          <a class="btn" href="${m.cta.url}" target="_blank" rel="noopener">${m.cta.label}</a>
          <a class="btn ghost" href="#info">Horários e preços</a>
        </div>
      </div>
      <div class="j-obj reveal d2"></div>
    </div>
    <span class="scroll-hint">a jornada começa aqui ↓</span>
  </section>

  <!-- 1. HISTÓRIA -->
  <section class="chapter">
    <div class="wrap two-col">
      <div>
        <span class="ch-num">Capítulo 1</span>
        <h2 class="display section-title reveal">${cap[0]}</h2>
        ${m.historia.map((p, i) => `<p class="story reveal d${i}">${p}</p>`).join('')}
      </div>
      ${m.foto ? `<figure class="j-photo reveal d2"><img src="${m.foto}" alt="${m.nome}" loading="lazy"><figcaption>Foto: Hector Studios</figcaption></figure>`
        : `<div class="placeholder reveal d2 tall"><div><b>Sugestão de imagem</b>Ilustração ou foto ampla de ${m.nome}<br>(fachada ou ambiente com luz noturna).<br>Ideal: WebP 1600px, com leve efeito parallax.</div></div>`}
    </div>
  </section>

  <!-- 2. PASSOS -->
  <section class="chapter">
    <div class="wrap">
      <span class="ch-num">Capítulo 2</span>
      <h2 class="display section-title reveal">${cap[1]}</h2>
      <ol class="timeline">
        <div class="tl-line"><div class="tl-fill"></div></div>
        ${m.passos.map(([t, d], i) => `<li class="reveal"><span class="tl-dot">${i + 1}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}
      </ol>
    </div>
  </section>

  ${m.cardapio.length ? `
  <!-- 3. CARDÁPIO -->
  <section class="chapter">
    <div class="wrap">
      <span class="ch-num">Capítulo 3</span>
      <h2 class="display section-title reveal">${cap[2]}</h2>
      <p class="section-sub reveal">Passe o mouse (ou toque) para traduzir do idioma mágico para o nosso.</p>
      <div class="menu-grid">
        ${m.cardapio.map(([n, d], i) => `
          <button class="flip reveal d${i % 3}"><span class="flip-in">
            <span class="front"><span class="f-emoji">${icon(m.icone)}</span><b>${n}</b><small>toque para traduzir ✦</small></span>
            <span class="back"><b>${n}</b><span>${d}</span></span>
          </span></button>`).join('')}
      </div>
    </div>
  </section>` : ''}

  <!-- 4. PERSONAGENS -->
  <section class="chapter">
    <div class="wrap">
      <span class="ch-num">Capítulo ${m.cardapio.length ? 4 : 3}</span>
      <h2 class="display section-title reveal">${cap[3]}</h2>
      <div class="char-grid">
        ${m.personagens.map((p, i) => `
          <div class="char reveal d${i % 3}">
            <div class="char-pic"><span>?</span></div>
            <h3>${p}</h3>
            <small>Sugestão: foto ou ilustração do personagem com fundo transparente</small>
          </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- 5. SEGREDOS / EASTER EGGS -->
  <section class="chapter">
    <div class="wrap">
      <span class="ch-num">Capítulo ${m.cardapio.length ? 5 : 4}</span>
      <h2 class="display section-title reveal">${cap[4]}</h2>
      <p class="section-sub reveal">Cada pergaminho guarda um segredo. Clique para abrir.</p>
      <div class="scroll-grid">
        ${m.curiosidades.map((c, i) => `<button class="secret reveal d${i % 3}"><span class="seal">🔒</span><span class="s-text">${c}</span></button>`).join('')}
      </div>
    </div>
  </section>

  <!-- 6. INFORMAÇÕES -->
  <section class="chapter" id="info">
    <div class="wrap">
      <div class="info-card reveal">
        <div class="info-head">
          <div>
            <span class="eyebrow">Antes de embarcar</span>
            <h2 class="display section-title">${m.emBreve ? 'Em breve!' : 'Tudo pronto?'}</h2>
          </div>
          <div class="price"><small>${m.emBreve ? '' : 'ingresso'}</small>${m.info.preco}</div>
        </div>
        <div class="info-grid">
          <div><h4>${icon('clock')} Horários</h4>${m.info.horarios.map(h => `<p>${h}</p>`).join('')}</div>
          <div><h4>${icon('hourglass')} Duração</h4><p>${m.info.duracao}</p></div>
          <div><h4>${icon('pin')} Onde fica</h4><p>${m.info.endereco}</p><a href="${mapsUrl}" target="_blank" rel="noopener">Abrir no mapa →</a></div>
          <div><h4>${icon('kid')} Crianças</h4><p>${m.info.criancas}</p></div>
        </div>
        <div class="info-cta">
          <a class="btn big" href="${m.cta.url}" target="_blank" rel="noopener">${icon('ticket')} ${m.cta.label}</a>
          <a class="btn ghost" href="https://wa.me/5554999510522" target="_blank" rel="noopener">${icon('chat')} Dúvidas no WhatsApp</a>
        </div>
      </div>
    </div>
  </section>

  <!-- PRÓXIMOS MUNDOS -->
  <section class="chapter next-worlds">
    <div class="wrap">
      <h2 class="display section-title reveal" style="text-align:center">Continue explorando o <em>Universo Hector</em></h2>
      <div class="nw-grid">
        ${[prev, next].map(w => `
          <a class="nw reveal" href="experiencia.html?mundo=${w.id}" style="--c1:${w.cores[0]};--c2:${w.cores[1]}">
            <span class="nw-emoji">${w.logo ? `<img src="${w.logo}" alt="">` : icon(w.icone)}</span><div><small>${w === prev ? '← mundo anterior' : 'próximo mundo →'}</small><h3 class="display">${w.nome}</h3></div></a>`).join('')}
      </div>
      <p style="text-align:center;margin-top:24px"><a class="btn ghost" href="index.html#mapa">${icon('map')} Voltar ao mapa mágico</a></p>
    </div>
  </section>`;

  $('.j-obj').appendChild(buildObj(m.obj3d));

  // cartas que viram
  $$('.flip').forEach(f => f.addEventListener('click', () => f.classList.toggle('on')));
  // pergaminhos secretos
  $$('.secret').forEach(s => s.addEventListener('click', e => {
    if (s.classList.contains('open')) return;
    s.classList.add('open'); $('.seal', s).textContent = '📜';
    sparkle(e.clientX, e.clientY, 14, [m.acento, '#FFD36E', '#fff']);
  }));
}

/* barra de progresso + linha do tempo preenchendo no scroll */
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const p = max > 0 ? scrollY / max : 0;
  $('.progress-fill').style.width = p * 100 + '%';
  $('.traveler').style.left = `calc(${p * 100}% - 14px)`;
  const tl = $('.timeline');
  if (tl) {
    const r = tl.getBoundingClientRect();
    const t = Math.min(1, Math.max(0, (innerHeight * .6 - r.top) / r.height));
    $('.tl-fill').style.height = t * 100 + '%';
  }
  const obj = $('.j-obj');
  if (obj) obj.style.transform = `translateY(${scrollY * .25}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
  const id = new URLSearchParams(location.search).get('mundo') || 'pizzaria';
  const m = MUNDOS.find(x => x.id === id) || MUNDOS[0];
  render(m);
  initReveal();
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
});
