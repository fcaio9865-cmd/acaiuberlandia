/**
 * Dados de demonstração da Sorveteria Artesanal.
 * Simulamos uma API local (delay + possibilidade de erro) para exercitar
 * os estados de carregamento, vazio e erro em todas as telas.
 */

export type Prioridade = "alta" | "media" | "baixa";

export type Produto = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  precoPromocional?: number;
  categoria: "sabores" | "casquinhas" | "combos" | "sazonal";
  tag: string;
  prioridade: Prioridade;
  emoji: string;
};

export type Promocao = {
  id: string;
  titulo: string;
  descricao: string;
  desconto: number; // percentual
  validade: string; // ISO
  cupom: string;
};

export type Loja = {
  id: string;
  nome: string;
  endereco: string;
  bairro: string;
  cidade: string;
  horario: string;
  telefone: string;
  mapa: string;
};

export type Depoimento = {
  id: string;
  nome: string;
  bairro: string;
  nota: number;
  texto: string;
  data: string;
};

export const WHATSAPP_NUMERO = "5511987654321";

/** Monta o link do WhatsApp com mensagem pré-preenchida. */
export const whatsappLink = (mensagem: string) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;

export const PRODUTOS: Produto[] = [
  {
    id: "sab-1",
    nome: "Pistache Siciliano",
    descricao: "Pasta pura de pistache torrado, leite fresco e um toque de flor de sal.",
    preco: 18.9,
    categoria: "sabores",
    tag: "Clássico",
    prioridade: "alta",
    emoji: "🥧",
  },
  {
    id: "sab-2",
    nome: "Morango Orgânico",
    descricao: "Morangos da serra colhidos na semana, batidos com iogurte artesanal.",
    preco: 16.5,
    precoPromocional: 13.9,
    categoria: "sabores",
    tag: "Mais pedido",
    prioridade: "alta",
    emoji: "🍓",
  },
  {
    id: "sab-3",
    nome: "Chocolate 70% Belga",
    descricao: "Cacau intenso, textura aveludada e zero gordura hidrogenada.",
    preco: 17.9,
    categoria: "sabores",
    tag: "Intenso",
    prioridade: "media",
    emoji: "🍫",
  },
  {
    id: "sab-4",
    nome: "Limão Siciliano com Manjericão",
    descricao: "Sorbet refrescante, sem lactose, feito com fruta fresca.",
    preco: 15.9,
    categoria: "sabores",
    tag: "Sem lactose",
    prioridade: "media",
    emoji: "🍋",
  },
  {
    id: "sab-5",
    nome: "Doce de Leite Argentino",
    descricao: "Doce de leite cozido lentamente por 6 horas com raspas de caramelo.",
    preco: 17.5,
    categoria: "sabores",
    tag: "Cremoso",
    prioridade: "baixa",
    emoji: "🍯",
  },
  {
    id: "cas-1",
    nome: "Casquinha Waffle Tradicional",
    descricao: "Waffle assado na hora com 1 bola de gelato à sua escolha.",
    preco: 12.0,
    categoria: "casquinhas",
    tag: "Feita na hora",
    prioridade: "alta",
    emoji: "🍦",
  },
  {
    id: "cas-2",
    nome: "Casquinha Waffle Duo",
    descricao: "Duas bolas, cobertura de chocolate belga e granulado artesanal.",
    preco: 18.0,
    precoPromocional: 15.9,
    categoria: "casquinhas",
    tag: "Promo",
    prioridade: "alta",
    emoji: "🍨",
  },
  {
    id: "cas-3",
    nome: "Casquinha Integral Vegana",
    descricao: "Massa integral sem ovos com gelato de coco queimado.",
    preco: 14.5,
    categoria: "casquinhas",
    tag: "Vegana",
    prioridade: "media",
    emoji: "🌱",
  },
  {
    id: "cas-4",
    nome: "Mini Casquinha Kids",
    descricao: "Porção menor, ideal para as crianças, com confete colorido.",
    preco: 8.9,
    categoria: "casquinhas",
    tag: "Kids",
    prioridade: "baixa",
    emoji: "🧒",
  },
  {
    id: "com-1",
    nome: "Combo Família 1,5L",
    descricao: "3 sabores à escolha + 4 casquinhas + calda quente de chocolate.",
    preco: 89.9,
    precoPromocional: 74.9,
    categoria: "combos",
    tag: "Serve 4 pessoas",
    prioridade: "alta",
    emoji: "👨‍👩‍👧‍👦",
  },
  {
    id: "com-2",
    nome: "Combo Domingo Feliz 2L",
    descricao: "4 sabores + 2 caldas + granulados + colheres decoradas.",
    preco: 119.9,
    precoPromocional: 99.9,
    categoria: "combos",
    tag: "Serve 6 pessoas",
    prioridade: "alta",
    emoji: "🎉",
  },
  {
    id: "com-3",
    nome: "Combo Casal 700ml",
    descricao: "2 sabores + 2 casquinhas + cobertura de frutas vermelhas.",
    preco: 54.9,
    categoria: "combos",
    tag: "Serve 2 pessoas",
    prioridade: "media",
    emoji: "💞",
  },
  {
    id: "saz-1",
    nome: "Gelato de Pêssego da Estação",
    descricao: "Pêssegos maduros de Paranapanema — disponível de setembro a dezembro.",
    preco: 19.9,
    categoria: "sazonal",
    tag: "Primavera",
    prioridade: "alta",
    emoji: "🍑",
  },
  {
    id: "saz-2",
    nome: "Sorbet de Jabuticaba",
    descricao: "Colheita curta de outubro. Produção limitada a 40 potes por semana.",
    preco: 21.9,
    categoria: "sazonal",
    tag: "Edição limitada",
    prioridade: "alta",
    emoji: "🫐",
  },
  {
    id: "saz-3",
    nome: "Gelato de Milho Verde",
    descricao: "Nossa homenagem às festas juninas — volta em junho de 2027.",
    preco: 16.9,
    categoria: "sazonal",
    tag: "Inverno",
    prioridade: "baixa",
    emoji: "🌽",
  },
];

export const PROMOCOES: Promocao[] = [
  {
    id: "promo-1",
    titulo: "Terça em Dobro",
    descricao: "Compre 1 casquinha waffle e leve a segunda por conta da casa.",
    desconto: 50,
    validade: "2026-12-31",
    cupom: "TERCADOBRO",
  },
  {
    id: "promo-2",
    titulo: "Combo Família com 17% OFF",
    descricao: "Peça o pote de 1,5L pelo WhatsApp e economize na hora.",
    desconto: 17,
    validade: "2026-10-31",
    cupom: "FAMILIA17",
  },
  {
    id: "promo-3",
    titulo: "Happy Gelato 15h–17h",
    descricao: "Todo dia útil, 20% OFF em qualquer bola de gelato artesanal.",
    desconto: 20,
    validade: "2026-11-30",
    cupom: "HAPPY20",
  },
];

export const LOJAS: Loja[] = [
  {
    id: "loja-1",
    nome: "Unidade Vila Madalena",
    endereco: "Rua Harmonia, 482",
    bairro: "Vila Madalena",
    cidade: "São Paulo — SP",
    horario: "Seg a Dom, 12h às 22h",
    telefone: "(11) 98765-4321",
    mapa: "https://www.google.com/maps/search/?api=1&query=Rua+Harmonia+482+Vila+Madalena+Sao+Paulo",
  },
  {
    id: "loja-2",
    nome: "Unidade Pinheiros",
    endereco: "Av. Pedroso de Morais, 1.230",
    bairro: "Pinheiros",
    cidade: "São Paulo — SP",
    horario: "Ter a Dom, 13h às 23h",
    telefone: "(11) 98765-4322",
    mapa: "https://www.google.com/maps/search/?api=1&query=Av+Pedroso+de+Morais+1230+Pinheiros+Sao+Paulo",
  },
  {
    id: "loja-3",
    nome: "Quiosque Parque Ibirapuera",
    endereco: "Portão 7 — Av. Pedro Álvares Cabral, s/n",
    bairro: "Moema",
    cidade: "São Paulo — SP",
    horario: "Sáb e Dom, 9h às 19h",
    telefone: "(11) 98765-4323",
    mapa: "https://www.google.com/maps/search/?api=1&query=Parque+Ibirapuera+Portao+7+Sao+Paulo",
  },
];

export const DEPOIMENTOS: Depoimento[] = [
  {
    id: "dep-1",
    nome: "Mariana Alcântara",
    bairro: "Vila Madalena",
    nota: 5,
    texto:
      "O pistache é o melhor de São Paulo, sem exagero. Pedi o combo família pelo WhatsApp e chegou em 25 minutos.",
    data: "2026-08-14",
  },
  {
    id: "dep-2",
    nome: "Rafael Nunes",
    bairro: "Pinheiros",
    nota: 5,
    texto:
      "Sorbet de limão com manjericão salvou meu domingo. Atendimento super rápido e embalagem impecável.",
    data: "2026-07-29",
  },
  {
    id: "dep-3",
    nome: "Juliana Prado",
    bairro: "Moema",
    nota: 4,
    texto:
      "Levei as crianças no quiosque do Ibirapuera. A mini casquinha kids foi sucesso absoluto.",
    data: "2026-09-02",
  },
];

export const ESTATISTICAS = [
  { label: "Sabores artesanais no ano", valor: 48, sufixo: "" },
  { label: "Clientes atendidos por mês", valor: 3200, sufixo: "+" },
  { label: "Anos de produção própria", valor: 12, sufixo: "" },
  { label: "Nota média dos clientes", valor: 49, sufixo: "/50" },
];

/** Simula uma requisição assíncrona (para loading/erro reais na interface). */
export function fetchMock<T>(dados: T, { falhar = false, delay = 700 } = {}): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (falhar) reject(new Error("Não foi possível carregar os dados agora."));
      else resolve(dados);
    }, delay);
  });
}
