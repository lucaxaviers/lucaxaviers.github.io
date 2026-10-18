export interface RealProject {
  id: string;
  title: string;
  badge: string;
  isLive?: boolean;
  desc: string;
  technologies: string[];
  link?: string;
  linkText?: string;
  image?: string;
}

export const REAL_PROJECTS: RealProject[] = [
  {
    id: "imoveis-lucas-xavier",
    title: "Imóveis Lucas Xavier",
    badge: "Em produção",
    isLive: true,
    desc: "Plataforma imobiliária completa com catálogo de imóveis, busca com filtros por região e tipologia, sistema de favoritos e contato direto integrado ao WhatsApp.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Vercel"],
    link: "https://imoveislucasxavier.com.br",
    linkText: "Abrir o site no ar",
    image: "/img/imoveis_lucasxavier.webp",
  },
  {
    id: "mesclainvest",
    title: "MesclaInvest",
    badge: "Projeto acadêmico",
    isLive: false,
    desc: "Aplicativo mobile para simulação de investimentos em startups e análise de rodadas de captação, com interface fluida e sincronização em tempo real.",
    technologies: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: "notadez",
    title: "NotaDez",
    badge: "Projeto acadêmico",
    isLive: false,
    desc: "Sistema web de gestão acadêmica com controle de turmas, lançamento de notas, relatórios de frequência e integração com banco de dados relacional.",
    technologies: ["Node.js", "TypeScript", "MySQL", "Express"],
  },
];
