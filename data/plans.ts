export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceNote: string;
  pricePeriod?: string;
  highlight?: boolean;
  features: string[];
  ctaText: string;
  targetAudience: string;
}

/**
 * Configure os valores dos planos facilmente aqui.
 * Altere as strings abaixo conforme seus valores comerciais atuais.
 */
export const PRICING_CONFIG = {
  landingPageStartingPrice: "A combinar", // Ex: "A partir de R$ 900" ou "Sob consulta"
  institutionalStartingPrice: "A combinar", // Ex: "A partir de R$ 1.800" ou "Sob consulta"
  maintenanceMonthlyPrice: "A combinar", // Ex: "A partir de R$ 150/mês" ou "Sob consulta"
  paymentTerms: "Condições flexíveis: 50% de entrada e 50% na publicação, ou parcelado.",
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    tagline: "Uma página objetiva, feita para o visitante clicar e chamar no seu WhatsApp.",
    priceNote: PRICING_CONFIG.landingPageStartingPrice,
    highlight: true,
    features: [
      "Página única ultra-rápida e focada em conversão",
      "Botão de WhatsApp com mensagem personalizada",
      "Design 100% otimizado para celular e tela cheia",
      "Configuração de domínio próprio e hospedagem na Vercel",
      "Carregamento instantâneo e pontuação alta no Google",
      "Sem taxa de manutenção obrigatória",
    ],
    ctaText: "Pedir proposta de Landing Page",
    targetAudience: "Ideal para dentistas, médicos, advogados e prestadores que querem agendamentos imediatos.",
  },
  {
    id: "site-institucional",
    name: "Site Institucional",
    tagline: "4 a 5 páginas para apresentar sua estrutura, equipe e ganhar autoridade nas buscas.",
    priceNote: PRICING_CONFIG.institutionalStartingPrice,
    features: [
      "Estrutura completa: Início, Sobre, Serviços, Galeria e Contato",
      "Otimização de SEO local para ser encontrado no Google em Paulínia e região",
      "Design sob medida alinhado à sua identidade visual",
      "Integração com mapas, formulários de e-mail e WhatsApp",
      "Código limpo em Next.js com carregamento em milissegundos",
      "Painel ou documentação simples para consultas",
    ],
    ctaText: "Pedir proposta de Site Completo",
    targetAudience: "Perfeito para escritórios, clínicas maiores e empresas locais consolidadas.",
  },
  {
    id: "manutencao",
    name: "Cuidado Contínuo",
    tagline: "Trocou de telefone, endereço ou equipe? Eu cuido de tudo para você não se preocupar.",
    priceNote: PRICING_CONFIG.maintenanceMonthlyPrice,
    pricePeriod: "mensal ou por demanda",
    features: [
      "Atualização rápida de textos, fotos, preços e contatos",
      "Monitoramento de disponibilidade do site 24/7",
      "Renovação e vigilância de certificados de segurança SSL",
      "Suporte direto comigo pelo WhatsApp, sem robôs",
      "Backups preventivos das versões do site",
      "Pague por mês ou apenas quando precisar de alterações",
    ],
    ctaText: "Conversar sobre manutenção",
    targetAudience: "Para quem não quer perder tempo com código ou painéis complicados.",
  },
];
