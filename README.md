# Universo Hector: protótipo

Protótipo do novo hub da Hector Studios (Gramado). É feito só com HTML, CSS e JavaScript, sem build.

## Como rodar
Abra o `index.html` no navegador ou rode um servidor estático:
```bash
python -m http.server 5510
```

## Estrutura
- `index.html`: hub com o hero, o Hector voando, o **mapa mágico interativo**, os portais das experiências, os prêmios e a seção "Mais magia"
- `experiencia.html?mundo=<id>`: a **jornada em scroll** de cada experiência. Os ids são `pizzaria`, `ferrovia`, `era-do-fogo`, `fogo-do-dragao`, `pedidos-magicos` e `castelo-de-gelo`
- `js/data.js`: **todo o conteúdo** (textos, preços, horários, links). Para editar, é só mexer aqui
- `js/magic.js`: céu estrelado, faíscas, easter eggs e objetos 3D em CSS
- `js/hub.js`: mapa e portais
- `js/journey.js`: capítulos da jornada

## Easter eggs
- Há 5 Ovos de Dragão para achar: 4 escondidos no mapa e mais 1 ao clicar 3 vezes no Hector voando
- Digite `magia` em qualquer página para disparar uma chuva de faíscas
- Os pergaminhos de "Segredos" se abrem com um clique, e as cartas do cardápio viram para traduzir os nomes mágicos

## A confirmar com o cliente
- Horários da Pizzaria (vieram do site atual), da Era do Fogo e do Alpen Park
- Os preços "a partir de" de cada experiência
- O número do WhatsApp (54) 99951-0522, que veio de um post e não foi verificado
- O endereço do Fogo do Dragão/Alpen Park e do Castelo de Gelo
- As regras para crianças em cada experiência
- O horário do Grande Iluminare

## Mídias a substituir (os placeholders estão marcados no site)
- O **Hector oficial** no lugar do SVG provisório (em `js/magic.js`, `HECTOR_SVG`). Pode ser PNG/WebP transparente ou Lottie
- As ilustrações dos lugares do mapa (`LANDMARKS` em `js/hub.js`)
- Fotos e ilustrações dos personagens e dos ambientes de cada experiência
- O vídeo curto do Grande Iluminare
- A fonte de títulos "Panel", usada no site atual: precisa do arquivo da fonte. Por enquanto o protótipo usa Montserrat 900 itálico
- Os logos vêm direto do site atual (hectorstudios.com.br). O ideal é baixá-los para a pasta `img/`
