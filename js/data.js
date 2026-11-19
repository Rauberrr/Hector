/* =========================================================
   UNIVERSO HECTOR: conteúdo de todas as experiências
   Tudo marcado com "confirmar: true" precisa ser validado
   com o cliente antes de ir ao ar.
   ========================================================= */
const LOGOS = 'https://hectorstudios.com.br/wp-content/uploads/';

const MUNDOS = [
  {
    id: 'pizzaria',
    foto: 'https://hectordragao.com.br/wp-content/uploads/2023/03/site-pizzaria-tematica.jpg',
    icone: 'wand',
    nome: 'Hector Pizzaria',
    reino: 'Escola de Magia Ônyra',
    logo: LOGOS + '2026/06/logo-white-1.webp',
    cores: ['#8740C0', '#1A2891'],
    acento: '#F743FD',
    obj3d: 'pizza',
    emoji: '🍕',
    tagline: 'Matricule-se na escola de magia mais saborosa de Gramado.',
    resumo: 'Rodízio de "discos de sabor" dentro do castelo de Ônyra, com espetáculos, música e criaturas mágicas.',
    tipo: 'Pizzaria temática · Rodízio + espetáculo',
    publico: ['Famílias', 'Crianças', 'Grupos'],
    historia: [
      'No coração do Reino de Gramado ergue-se o castelo de Ônyra, a escola onde o Mago Dragão Hector ensina seus aprendizes.',
      'Lá, poções borbulham, livros de feitiços ganham vida e a aula mais disputada é a de culinária encantada: a arte de preparar os famosos discos de sabor.',
      'Quem atravessa os portões não é cliente, é aprendiz. E todo aprendiz tem um lugar reservado na mesa do castelo.'
    ],
    passos: [
      ['Portões abertos', 'Os aprendizes chegam ao castelo e recebem as boas-vindas da trupe de Ônyra.'],
      ['Aula de magia', 'Começa o espetáculo: música, criaturas poderosas e muita interação com as crianças.'],
      ['Rodízio encantado', 'Os discos de sabor salgados e doces desfilam pelo salão, sem parar.'],
      ['Grand finale', 'O próprio Hector pode aparecer para encerrar a noite. Prepare a câmera!']
    ],
    cardapio: [
      ['Discos de sabor', 'Pizzas salgadas e doces em rodízio'],
      ['Disco azul de aniversário', 'Massa azul com ganache, sorvete e confeitos (edição especial)'],
      ['Poções da casa', 'Bebidas temáticas para aprendizes de todas as idades']
    ],
    personagens: ['Hector, o Mago Dragão', 'Professora Dora, a arquimaga', 'Asdrúbal, o duende', 'Trupe de Ônyra'],
    curiosidades: [
      'Aqui pizza não se chama pizza: é "disco de sabor".',
      'À noite, a fachada do castelo vira palco do Grande Iluminare, um show de luzes gratuito para quem passa na rua.',
      'Na loja do Hector dá para levar para casa a Varinha Chave de Ônyra.',
      'Eleita Travellers\' Choice 2026 pelo Tripadvisor: entre as 10% melhores atrações do mundo.'
    ],
    info: {
      horarios: ['Dom a qui: 18h e 21h', 'Sex e sáb: 17h05, 19h45 e 22h25', 'Portões abrem 18h (dom a qui) e 17h (sex e sáb)'],
      preco: 'a partir de R$ 249,90',
      duracao: 'Cerca de 2h (confirmar)',
      endereco: 'Av. Borges de Medeiros, 1791, Centro, Gramado',
      criancas: '0 a 4 anos não pagam, mas precisam estar na reserva (confirmar)'
    },
    cta: { label: 'Reservar meu lugar no castelo', url: 'https://hectordragao.com.br/pizzaria/' },
    mapa: { x: 340, y: 330 }
  },
  {
    id: 'ferrovia',
    foto: 'https://hectordragao.com.br/wp-content/uploads/2025/03/cover-produto-ferrovia.webp',
    icone: 'train',
    nome: 'Ferrovia Secreta',
    reino: 'A hamburgueria sobre trilhos do Hector',
    logo: LOGOS + '2026/06/logo-ferrovia-white.webp',
    cores: ['#C2410C', '#0C1456'],
    acento: '#FF861B',
    obj3d: 'burger',
    emoji: '🍔',
    tagline: 'Todos a bordo! O trem do Hector parte para os reinos mais saborosos.',
    resumo: 'Hamburgueria temática que simula uma viagem de trem pelos reinos do Hector, com serviço de bordo e sequência de pratos.',
    tipo: 'Hamburgueria temática · Viagem de trem',
    publico: ['Famílias', 'Casais', 'Grupos'],
    historia: [
      'Hector deixou a Ilha de Trélion em busca de novas aventuras e construiu uma ferrovia que só os aprendizes conhecem.',
      'Cada vagão atravessa um reino diferente, e em cada parada há um sabor novo esperando na mesa.',
      'Os aprendizes de bordo recepcionam os passageiros e contam tudo o que acontece pela janela. Ninguém viaja igual duas vezes.'
    ],
    passos: [
      ['Embarque', 'Chegue 15 minutos antes, pegue seu bilhete e encontre seu vagão.'],
      ['Serviço de bordo', 'Os aprendizes de bordo servem a sequência de pratos no estilo norte-americano.'],
      ['Pelos reinos', 'A viagem passa por reinos encantados enquanto os personagens interagem com a mesa.'],
      ['Estação final', 'A sobremesa chega: o lendário Ovo do Dragão.']
    ],
    cardapio: [
      ['Globos de sabor', 'Hambúrgueres no pão brioche'],
      ['Bastonetes da Crocância Eterna', 'Batatas fritas'],
      ['Cubinhos Incandescentes', 'Dadinhos de tapioca com coalho e geleia de pimenta'],
      ['Elixir das Ordens Pétreas', 'Drinks sem álcool: Topázio, Rubi e Esmeralda'],
      ['Chopp dos Anões da Montanha', 'Pilsen ou APA'],
      ['Ovo do Dragão', 'A sobremesa com folhas de ouro e brownie']
    ],
    personagens: ['Lady Lince, a garçonete felina', 'Aprendiz de bordo Carina', 'Professor Stan, o alquimista', 'Kóry, a monitora'],
    curiosidades: [
      'Os hambúrgueres têm nomes como "Ogro quer bacon", "Herbivoglobo" e "Globozola de Fogo".',
      'Dizem que a Lady Lince faz fogo sair dos livros… fique de olho!',
      'Na festa de 7 anos da Hector, a Ferrovia serviu uma torre de donuts.',
      'Também é Travellers\' Choice 2026 pelo Tripadvisor.'
    ],
    info: {
      horarios: ['Diariamente: 17h45, 19h45 e 21h45', 'Sex e sáb também às 15h45'],
      preco: 'a partir de R$ 199,90',
      duracao: 'Cerca de 2h',
      endereco: 'Av. Borges de Medeiros, 2875, Centro, Gramado',
      criancas: '0 a 4 anos não pagam, mas precisam estar na reserva (confirmar)'
    },
    cta: { label: 'Comprar meu bilhete de trem', url: 'https://hectordragao.com.br/ferrovia/' },
    mapa: { x: 600, y: 470 }
  },
  {
    id: 'era-do-fogo',
    foto: 'https://hectordragao.com.br/wp-content/uploads/2025/02/fondue-tematicov2.webp',
    icone: 'flame',
    nome: 'Era do Fogo',
    reino: 'O fondue mais cavernoso de Gramado',
    logo: LOGOS + '2026/06/Era-do-fogo-Branco-Crop.webp',
    cores: ['#7C2D12', '#1C1917'],
    acento: '#FBBF24',
    obj3d: 'fondue',
    emoji: '🔥',
    tagline: 'Ungá, modernoso! A tribo Grinstone acaba de descobrir o fogo.',
    resumo: 'Fondue reinventado numa caverna pré-histórica de 700 m², com espetáculo interativo e até um ataque de T-Rex.',
    tipo: 'Fondue temático · Espetáculo interativo',
    publico: ['Famílias', 'Grupos', 'Casais'],
    historia: [
      'Uma fenda se abriu na Serra Gaúcha e revelou um reino escondido da era das cavernas, onde humanos convivem com dinossauros.',
      'Ali vive a tribo Grinstone, liderada por Gruga Grinstone, que acaba de descobrir o maior tesouro de todos: o fogo.',
      'Os visitantes, chamados de "modernosos", são convidados para o Ritual de Comilança. Só não contem para o T-Rex…'
    ],
    passos: [
      ['Entrada na caverna', 'A tribo recebe os modernosos falando Unguês, a língua dos Grinstone.'],
      ['Caça fria', 'O ritual começa com entradas cruas e técnicas de cozimento a frio.'],
      ['Caça sapecada', 'Carnes nobres grelhadas na pedra quente, na mesa.'],
      ['Ataque do T-Rex!', 'O dinossauro aparece e só o fogo da tribo protege a caverna.'],
      ['Poço quente doce', 'O fondue de chocolate encerra a comilança.']
    ],
    cardapio: [
      ['Caça fria', 'Entradas: tartar e preparos a frio'],
      ['Caça sapecada', 'Carnes nobres na pedra quente'],
      ['Poço quente salgado', 'Fondue de queijo'],
      ['Poço quente doce', 'Fondue de chocolate com Nutella (premium)']
    ],
    personagens: ['Gruga Grinstone, o anfitrião', 'A tribo Grinstone', 'O T-Rex (cuidado!)'],
    curiosidades: [
      'A equipe fala Unguês, um idioma inventado só para a caverna.',
      'Criança na caverna é chamada de "cria de modernoso", e tem a Caverna Kids só para elas.',
      'Mais de 43 mil modernosos passaram pela caverna no primeiro ano.',
      'Prata no TOP de Marketing ADVB/RS 2026.'
    ],
    info: {
      horarios: ['Sessões às 18h e 21h', 'Fechado às terças'],
      preco: 'a partir de R$ 299,90',
      duracao: 'Cerca de 2h20',
      endereco: 'Av. das Hortênsias, 4901, Carniel, Gramado',
      criancas: '0 a 4 anos grátis (na reserva) · aniversariante com 4 pagantes tem 50% off'
    },
    cta: { label: 'Garantir meu lugar na caverna', url: 'https://www.eradofogo.com.br/' },
    mapa: { x: 830, y: 270 }
  },
  {
    id: 'fogo-do-dragao',
    icone: 'coaster',
    nome: 'Fogo do Dragão',
    reino: 'A montanha-russa do Hector no Alpen Park',
    logo: LOGOS + '2026/06/Ativo-2fogo-do-dragao-300x269-1.webp',
    cores: ['#B91C1C', '#3B0764'],
    acento: '#FB923C',
    obj3d: 'coaster',
    emoji: '🎢',
    tagline: 'Segure firme: você vai voar nas asas do dragão.',
    resumo: 'A maior montanha-russa fixa de aço do RS, tematizada com o universo do Hector, no Alpen Park.',
    tipo: 'Atração radical · Montanha-russa',
    publico: ['Jovens', 'Famílias', 'Grupos'],
    historia: [
      'Hector sempre disse que voar é a melhor magia que existe. Um dia, decidiu emprestar suas asas aos aprendizes.',
      'Assim nasceu o Fogo do Dragão: trilhos de aço que sobem até as nuvens e despencam como um dragão em mergulho.',
      'Na fila, os personagens da trupe aparecem para fotos e pocket shows. Lá em cima, só você e o vento.'
    ],
    passos: [
      ['Passaporte', 'Compre o passaporte do Alpen Park com antecedência.'],
      ['Fila encantada', 'Cenografia do universo Hector e encontros com personagens.'],
      ['Decolagem', 'O carrinho sobe… sobe… e o dragão mergulha!'],
      ['Foto da coragem', 'Pegue sua foto no desembarque e mostre que sobreviveu ao fogo.']
    ],
    cardapio: [],
    personagens: ['Hector, o Mago Dragão', 'Trupe de Ônyra (pocket shows)'],
    curiosidades: [
      'Inaugurada em 12 de abril de 2025.',
      'É a maior montanha-russa fixa de aço do Rio Grande do Sul.',
      'A Hector Studios cuida da narrativa e da cenografia da atração.'
    ],
    info: {
      horarios: ['Conforme funcionamento do Alpen Park (confirmar)'],
      preco: 'Passaporte a partir de R$ 138,90',
      duracao: 'Livre (dentro do parque)',
      endereco: 'Alpen Park, Canela/Gramado (confirmar)',
      criancas: 'Altura mínima de 1,30 m para o passaporte (confirmar)'
    },
    cta: { label: 'Comprar passaporte', url: 'https://ingressos.hectordragao.com.br/passaporte-alpen-park-pessoas-acima-de-13m-com-antecedencia' },
    mapa: { x: 875, y: 600 }
  },
  {
    id: 'pedidos-magicos',
    icone: 'box',
    nome: 'Pedidos Mágicos',
    reino: 'A magia do Hector entregue na sua porta',
    logo: '',
    cores: ['#D44F8A', '#1A2891'],
    acento: '#6AD1E3',
    obj3d: 'box',
    emoji: '📦',
    tagline: 'Diga "Magia" três vezes… e o lacre se abre.',
    resumo: 'Delivery temático em Gramado e Canela, inclusive no quarto do hotel, com caixas interativas e cartas colecionáveis.',
    tipo: 'Delivery temático · Gramado e Canela',
    publico: ['Hotéis', 'Famílias', 'Quem ficou com preguiça 😄'],
    historia: [
      'Nem todo aprendiz consegue ir até o castelo de Ônyra. Por isso o Hector criou um feitiço de entrega.',
      'Os discos de sabor viajam em caixas encantadas que só abrem com a palavra mágica.',
      'Dentro, além da comida, vêm cartas colecionáveis, desenhos para colorir e varinhas para recortar.'
    ],
    passos: [
      ['Faça o pedido', 'Pelo site Pedidos Mágicos ou pelo iFood.'],
      ['O feitiço viaja', 'Entrega em Gramado e Canela, até no quarto do hotel.'],
      ['Diga "Magia" 3x', 'O lacre da caixa só se rompe com a palavra mágica.'],
      ['Colecione', 'A cada 12 discos, um disco de sabor de presente.']
    ],
    cardapio: [
      ['46 discos de sabor', '27 salgados e 19 doces'],
      ['8 bordas mágicas', 'Para turbinar qualquer disco'],
      ['Massa de 48h', 'Fermentação longa para massa leve']
    ],
    personagens: ['Hector, o Mago Dragão', 'Trupe de Ônyra (nas cartas colecionáveis)'],
    curiosidades: [
      'Inaugurado em 10 de novembro de 2026, depois de dois anos de desenvolvimento.',
      'Existe um sabor secreto para quem estava na lista de abertura.',
      'Tente agora: digite a palavra magia no teclado deste site.'
    ],
    info: {
      horarios: ['Terça a domingo: 18h30 às 0h30'],
      preco: 'Consulte o cardápio',
      duracao: 'Não se aplica',
      endereco: 'Retirada: R. Prefeito Nelson Dinnebier, 763, Loja 01, Piratini, Gramado',
      criancas: 'Caixas com canetinhas e desenhos para as crianças'
    },
    cta: { label: 'Fazer meu pedido mágico', url: 'https://www.pedidosmagicos.com.br/' },
    mapa: { x: 590, y: 235 }
  },
  {
    id: 'castelo-de-gelo',
    icone: 'snow',
    nome: 'Castelo de Gelo',
    reino: 'Em breve no Reino de Gramado',
    logo: LOGOS + '2026/06/250530_ass_alt_neve-1024x535-1.webp',
    cores: ['#0E7490', '#0C1456'],
    acento: '#A5F3FC',
    obj3d: 'crystal',
    emoji: '❄️',
    tagline: 'Um rei, uma maldição e um castelo inteiro congelado.',
    resumo: 'Bar de gelo temático anunciado como o maior do mundo, com narrativa própria, trilha original e cenários interativos.',
    tipo: 'Ice bar temático · Em breve',
    publico: ['Adultos', 'Famílias', 'Grupos'],
    historia: [
      'Conta a lenda que um rei orgulhoso foi transformado em fera e, com ele, todo o seu castelo congelou.',
      'Desde então, salões de gelo guardam segredos, músicas e histórias esperando para serem descobertas.',
      'A Hector Studios está preparando as portas desse castelo. Falta pouco.'
    ],
    passos: [
      ['Aguarde', 'O castelo ainda está sendo construído.'],
      ['Fique de olho', 'Siga @hectorstudiosbr para saber a data de abertura.']
    ],
    cardapio: [],
    personagens: ['O Rei Congelado (sugestão de personagem)'],
    curiosidades: [
      'Investimento de mais de R$ 1,5 milhão.',
      'Trilha sonora original e cenografias interativas.',
      'Fica na Av. das Hortênsias, em Gramado.'
    ],
    info: {
      horarios: ['Em breve'],
      preco: 'Em breve',
      duracao: 'Não se aplica',
      endereco: 'Av. das Hortênsias, Gramado (confirmar)',
      criancas: 'Em breve'
    },
    cta: { label: 'Quero ser avisado', url: 'https://www.instagram.com/hectorstudiosbr' },
    emBreve: true,
    mapa: { x: 135, y: 248 }
  }
];

/* Atrações menores que aparecem no mapa e na seção "Mais magia" */
const EXTRAS = [
  { id: 'iluminare', icone: 'spark', nome: 'O Grande Iluminare', emoji: '✨', texto: 'Show gratuito de luzes na fachada do castelo de Ônyra, inspirado nos grandes parques. Toda noite (horário a confirmar).', mapa: { x: 205, y: 430 } },
  { id: 'clicks', icone: 'camera', nome: 'Clicks Mágicos', emoji: '📸', texto: 'Fotos encantadas para levar a lembrança da viagem para casa.', mapa: { x: 430, y: 590 } },
  { id: 'filme', icone: 'film', nome: 'Filme Mileninha', emoji: '🎬', texto: '"Hector e Mileninha em: O Amuleto da Amizade": o filme do universo Hector.', url: 'https://www.youtube.com/@Hector-Omagodragao' },
  { id: 'play', icone: 'play', nome: 'Hector Play', emoji: '📺', texto: 'O canal infantil do Hector no YouTube, com aventuras da trupe de Ônyra.', url: 'https://www.youtube.com/@Hector-Omagodragao' },
  { id: 'loja', icone: 'bag', nome: 'Loja do Hector', emoji: '🪄', texto: 'Varinhas, fascículos e relíquias para continuar a magia em casa.', url: 'https://loja.hectordragao.com.br' }
];
