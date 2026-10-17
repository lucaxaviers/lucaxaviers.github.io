export interface DemoSiteTeamMember {
  name: string;
  role: string;
  image: string;
  alt: string;
}

export interface DemoSiteService {
  title: string;
  desc: string;
  priceNote: string;
}

export interface DemoSiteFaq {
  q: string;
  a: string;
}

export interface DemoSite {
  id: 'dent' | 'law' | 'car';
  name: string;
  url: string;
  accentColor: string;
  bgColor: string;
  cardColor: string;
  textColor: string;
  tagline: string;
  headline: string;
  description: string;
  ctaText: string;
  responseTime: string;
  badgeScore: [string, string];
  stats: [string, string][];
  servicesTitle: string;
  services: DemoSiteService[];
  heroImage: {
    src: string;
    alt: string;
  };
  gallery: {
    title: string;
    src: string;
    alt: string;
  }[];
  beforeAfter?: {
    beforeSrc: string;
    beforeAlt: string;
    afterSrc: string;
    afterAlt: string;
  };
  stepsTitle: string;
  steps: [string, string][];
  teamTitle: string;
  team: DemoSiteTeamMember[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    rating: number;
    avatar: string;
  };
  faq: DemoSiteFaq[];
  location: {
    address: string;
    hoursWeekday: string;
    hoursWeekend: string;
  };
  footerNotice: string;
  whatsappCta: string;
  disclaimer: string;
}

export const DEMO_SITES: DemoSite[] = [
  {
    id: 'dent',
    name: 'Sorriso Prime',
    url: 'sorrisoprime.com.br',
    accentColor: '#0E9F8E',
    bgColor: '#F2FAF9',
    cardColor: '#FFFFFF',
    textColor: '#0B3B36',
    tagline: 'Odontologia Moderna · Paulínia, SP',
    headline: 'Seu sorriso em boas mãos, com atendimento humano e sem pressa.',
    description: 'Implantes, clareamento dental a laser e ortodontia digital. Avaliação completa com planejamento transparente por escrito.',
    ctaText: 'Agendar avaliação',
    responseTime: 'Resposta em até 10 minutos · Segunda a sexta, 8h às 18h',
    badgeScore: ['4,9 ★', '312 avaliações no Google'],
    stats: [
      ['12 anos', 'de tradição em Paulínia'],
      ['8.400+', 'pacientes atendidos'],
      ['4,9 ★', 'nota média no Google']
    ],
    servicesTitle: 'Tratamentos em Destaque',
    services: [
      {
        title: 'Implantes Dentários',
        desc: 'Recuperação estética e funcional com planejamento digital 3D e cirurgia guiada.',
        priceNote: 'A partir de R$ 2.900'
      },
      {
        title: 'Clareamento a Laser',
        desc: 'Tecnologia que reduz sensibilidade e devolve o tom natural em sessão de 1h.',
        priceNote: 'A partir de R$ 690'
      },
      {
        title: 'Alinhadores Invisíveis',
        desc: 'Ortodontia discreta e confortável, sem bráquetes metálicos e com prévia 3D.',
        priceNote: 'Planos a partir de R$ 189/mês'
      }
    ],
    heroImage: {
      src: '/img/dent_reception.webp',
      alt: 'Recepção clara e acolhedora da clínica odontológica Sorriso Prime'
    },
    gallery: [
      {
        title: 'Recepção Acolhedora',
        src: '/img/dent_reception.webp',
        alt: 'Recepção com acabamento em madeira e luz natural'
      },
      {
        title: 'Consultório Tecnológico',
        src: '/img/dent_operatory.webp',
        alt: 'Consultório moderno com equipamentos odontológicos de ponta'
      },
      {
        title: 'Resultados Naturais',
        src: '/img/dent_smile.webp',
        alt: 'Sorriso natural e saudável de paciente'
      }
    ],
    stepsTitle: 'Como funciona sua primeira consulta',
    steps: [
      ['Avaliação inicial', 'Exame clínico detalhado, fotos intraorais e conversa sobre suas expectativas.'],
      ['Planejamento por escrito', 'Você recebe o diagnóstico claro, opções de tratamento, prazos e custos fechados.'],
      ['Tratamento com conforto', 'Sessões pontuais, ambiente climatizado e suporte pós-procedimento no WhatsApp.']
    ],
    teamTitle: 'Corpo Clínico Especializado',
    team: [
      {
        name: 'Dra. Helena Duarte',
        role: 'Implantes & Prótese · CRO-SP 000000',
        image: '/img/dent_team1.webp',
        alt: 'Retrato profissional fictício da Dra. Helena Duarte'
      },
      {
        name: 'Dr. Caio Ferraz',
        role: 'Ortodontia Digital · CRO-SP 000001',
        image: '/img/dent_team2.webp',
        alt: 'Retrato profissional fictício do Dr. Caio Ferraz'
      },
      {
        name: 'Dra. Bianca Lopes',
        role: 'Clínica Geral & Estética · CRO-SP 000002',
        image: '/img/dent_team3.webp',
        alt: 'Retrato profissional fictício da Dra. Bianca Lopes'
      },
      {
        name: 'Dr. Murilo Sato',
        role: 'Endodontia Microscópica · CRO-SP 000003',
        image: '/img/dent_team4.webp',
        alt: 'Retrato profissional fictício do Dr. Murilo Sato'
      }
    ],
    testimonial: {
      quote: 'Fiz meu clareamento e restauração com a equipe. Desde a recepção até o procedimento foi tudo muito transparente, sem custos surpresa.',
      author: 'Marina Silveira',
      role: 'Paciente há 3 anos · Paulínia, SP',
      rating: 5,
      avatar: '/img/dent_team3.webp'
    },
    faq: [
      {
        q: 'A primeira consulta de avaliação tem custo?',
        a: 'A avaliação inicial de diagnóstico é realizada sem custo para novos pacientes, com planejamento completo por escrito.'
      },
      {
        q: 'Vocês atendem convênios odontológicos?',
        a: 'Trabalhamos no sistema de reembolso assistido com os principais convênios e oferecemos condições de parcelamento no cartão e boleto.'
      },
      {
        q: 'Quanto tempo dura o clareamento em consultório?',
        a: 'A sessão dura cerca de 60 minutos e os resultados são visíveis imediatamente, com orientações para manutenção em casa.'
      }
    ],
    location: {
      address: 'Av. José Paulino, 1420 - Centro, Paulínia - SP',
      hoursWeekday: 'Segunda a sexta: 08h às 18h30',
      hoursWeekend: 'Sábados: 08h às 12h (com horário agendado)'
    },
    footerNotice: 'Responsável técnica: Dra. Helena Duarte · CRO-SP 000000 · Clínica Sorriso Prime Ltda.',
    whatsappCta: 'Agendar consulta no WhatsApp',
    disclaimer: 'Site demonstrativo fictício. Dados, marcas e registros criados para fins de portfólio.'
  },
  {
    id: 'law',
    name: 'Almeida & Costa Advogados',
    url: 'almeidacosta.adv.br',
    accentColor: '#1E2A44',
    bgColor: '#F6F4EF',
    cardColor: '#FFFFFF',
    textColor: '#1B1B1F',
    tagline: 'Sociedade de Advogados · OAB/SP 00.000',
    headline: 'Orientação jurídica sólida, ética e com atendimento direto.',
    description: 'Atuação consultiva e contenciosa em Direito Civil, Trabalhista e de Família. Comunicação transparente em cada fase do seu processo.',
    ctaText: 'Falar com um advogado',
    responseTime: 'Primeira conversa orientativa com agendamento prévio · Presencial ou Online',
    badgeScore: ['Desde 2011', 'Atuação em Paulínia e Região Metropolitana de Campinas'],
    stats: [
      ['14 anos', 'de prática jurídica'],
      ['3', 'núcleos especializados'],
      ['1:1', 'atendimento direto com os sócios']
    ],
    servicesTitle: 'Áreas de Prática Jurídica',
    services: [
      {
        title: 'Direito de Família & Sucessões',
        desc: 'Inventários, divórcios consensuais e litigiosos, guarda, partilha de bens e planejamento sucessório.',
        priceNote: 'Consulta orientativa'
      },
      {
        title: 'Direito do Trabalho Empresarial',
        desc: 'Defesa em reclamatórias trabalhistas, análise preventiva de passivos e compliance de contratos.',
        priceNote: 'Atuação consultiva e contenciosa'
      },
      {
        title: 'Direito Civil & Contratual',
        desc: 'Elaboração e revisão minuciosa de contratos, cobranças judiciais e indenizações civis.',
        priceNote: 'Análise documental'
      }
    ],
    heroImage: {
      src: '/img/law_hall.webp',
      alt: 'Recepção e hall de entrada corporativo do escritório Almeida & Costa Advogados'
    },
    gallery: [
      {
        title: 'Hall Corporativo',
        src: '/img/law_hall.webp',
        alt: 'Hall sóbrio com acabamento em madeira e luz natural'
      },
      {
        title: 'Sala de Reuniões',
        src: '/img/law_meeting.webp',
        alt: 'Sala de reuniões executiva com mesa de madeira nobre'
      },
      {
        title: 'Biblioteca Jurídica',
        src: '/img/law_library.webp',
        alt: 'Acervo e biblioteca jurídica para pesquisa jurisprudencial'
      }
    ],
    stepsTitle: 'Metodologia de Atendimento',
    steps: [
      ['Entrevista preliminar', 'Reunião com hora marcada para exposição dos fatos e análise inicial da documentação.'],
      ['Estudo de viabilidade', 'Elaboração de parecer técnico com os cenários possíveis e riscos envolvidos.'],
      ['Acompanhamento contínuo', 'Relatórios mensais de andamento processual e contato direto com o advogado do caso.']
    ],
    teamTitle: 'Advogados Integrantes',
    team: [
      {
        name: 'Dr. Rafael Almeida',
        role: 'Sócio Fundador · OAB/SP 000.000',
        image: '/img/law_team1.webp',
        alt: 'Retrato profissional fictício do Dr. Rafael Almeida'
      },
      {
        name: 'Dra. Letícia Costa',
        role: 'Sócia Fundadora · OAB/SP 000.001',
        image: '/img/law_team2.webp',
        alt: 'Retrato profissional fictício da Dra. Letícia Costa'
      },
      {
        name: 'Dr. André Nunes',
        role: 'Advogado Associado · OAB/SP 000.002',
        image: '/img/law_team3.webp',
        alt: 'Retrato profissional fictício do Dr. André Nunes'
      },
      {
        name: 'Paula Ramos',
        role: 'Gestão Jurídica & Atendimento',
        image: '/img/law_team4.webp',
        alt: 'Retrato profissional fictício de Paula Ramos'
      }
    ],
    testimonial: {
      quote: 'Conduziram o inventário da minha família com respeito e velocidade. Sempre nos mantiveram a par de cada despacho.',
      author: 'Carlos E. Mendes',
      role: 'Cliente do escritório · Campinas/Paulínia',
      rating: 5,
      avatar: '/img/law_team1.webp'
    },
    faq: [
      {
        q: 'Como é agendada a primeira consulta?',
        a: 'O agendamento pode ser feito diretamente pelo WhatsApp ou telefone, com opções presenciais ou por videoconferência segura.'
      },
      {
        q: 'O escritório atua em outras comarcas?',
        a: 'Sim, atendemos demandas em todo o estado de São Paulo e tribunais superiores por meio do processo eletrônico.'
      },
      {
        q: 'Como são estabelecidos os honorários advocatícios?',
        a: 'Os honorários são pactuados em contrato escrito, em conformidade com a tabela recomendada pela OAB/SP.'
      }
    ],
    location: {
      address: 'Rua Santa Cruz, 450 - Sala 82 - Nova Paulínia, Paulínia - SP',
      hoursWeekday: 'Segunda a sexta: 09h às 18h (com hora marcada)',
      hoursWeekend: 'Plantão jurídico para urgências mediante contato prévio'
    },
    footerNotice: 'Conteúdo de caráter estritamente informativo, em consonância com o Provimento nº 205/2021 e o Código de Ética e Disciplina da OAB. Não realizamos promessa de resultado. Almeida & Costa Sociedade de Advogados.',
    whatsappCta: 'Agendar conversa no WhatsApp',
    disclaimer: 'Site demonstrativo fictício. Dados, marcas e registros criados para fins de portfólio.'
  },
  {
    id: 'car',
    name: 'Auto Brilho Studio',
    url: 'autobrilhostudio.com.br',
    accentColor: '#F97316',
    bgColor: '#0B0C0E',
    cardColor: '#14161B',
    textColor: '#F5F5F5',
    tagline: 'Estética Automotiva de Alta Precisão · Paulínia',
    headline: 'Seu carro com acabamento impecável e brilho profundo de zero km.',
    description: 'Polimento técnico espelhado, vitrificação cerâmica 9H com garantia e higienização interna detalhada a vapor.',
    ctaText: 'Solicitar orçamento rápido',
    responseTime: 'Orçamento com foto em até 15 min · Segunda a sábado',
    badgeScore: ['+2.300', 'veículos detalhados com perfeição'],
    stats: [
      ['4,9 ★', 'no Google Avaliações'],
      ['Até 3 anos', 'de garantia na vitrificação'],
      ['24h', 'tempo médio de entrega']
    ],
    servicesTitle: 'Serviços & Pacotes de Estética',
    services: [
      {
        title: 'Polimento Técnico Multi-Etapas',
        desc: 'Remoção de até 90% dos micro-riscos (swirls), marcas de lavagem e restauração da cor original.',
        priceNote: 'A partir de R$ 450'
      },
      {
        title: 'Vitrificação Cerâmica 9H',
        desc: 'Nanotecnologia que cria escudo hidrofóbico contra seiva, fezes de aves e raios UV por até 3 anos.',
        priceNote: 'A partir de R$ 980'
      },
      {
        title: 'Higienização Interna & Ozônio',
        desc: 'Lavagem técnica dos bancos, carpetes, hidratação de couro e oxi-sanitização contra ácaros e odores.',
        priceNote: 'A partir de R$ 290'
      }
    ],
    heroImage: {
      src: '/img/car_workshop.webp',
      alt: 'Estúdio de estética automotiva limpo com piso epóxi e teto em iluminação LED hexagonal'
    },
    gallery: [
      {
        title: 'Estúdio Climatizado',
        src: '/img/car_workshop.webp',
        alt: 'Oficina de estética com iluminação técnica de inspeção'
      },
      {
        title: 'Polimento de Precisão',
        src: '/img/car_polishing.webp',
        alt: 'Politriz profissional corrigindo verniz automotivo'
      },
      {
        title: 'Acabamento Espelhado',
        src: '/img/car_after.webp',
        alt: 'Reflexo profundo de pintura vitrificada'
      }
    ],
    beforeAfter: {
      beforeSrc: '/img/car_before.webp',
      beforeAlt: 'Pintura antes do polimento com acabamento fosco e micro-riscos de lavagem',
      afterSrc: '/img/car_after.webp',
      afterAlt: 'Mesmo carro após polimento técnico e vitrificação cerâmica com brilho espelhado'
    },
    stepsTitle: 'Como funciona o processo',
    steps: [
      ['Avaliação & Orçamento', 'Envie fotos do carro pelo WhatsApp ou venha até o estúdio para inspeção de pintura.'],
      ['Execução no Box Técnico', 'Lavagem detalhada com snow foam, descontaminação ferrosa, polimento e proteção.'],
      ['Entrega & Certificado', 'Inspeção final sob luzes de conferência e entrega do certificado de vitrificação.']
    ],
    teamTitle: 'Especialistas Certificados',
    team: [
      {
        name: 'Thiago Martins',
        role: 'Master Detailer · Polimento Técnico',
        image: '/img/car_team1.webp',
        alt: 'Retrato profissional fictício de Thiago Martins'
      },
      {
        name: 'Diego Silveira',
        role: 'Técnico em Vitrificação & PPF',
        image: '/img/car_team2.webp',
        alt: 'Retrato profissional fictício de Diego Silveira'
      },
      {
        name: 'Rafael Lima',
        role: 'Especialista em Detalhamento Interno',
        image: '/img/car_team3.webp',
        alt: 'Retrato profissional fictício de Rafael Lima'
      },
      {
        name: 'Bruna Castilho',
        role: 'Atendimento & Cronograma de Entregas',
        image: '/img/car_team4.webp',
        alt: 'Retrato profissional fictício de Bruna Castilho'
      }
    ],
    testimonial: {
      quote: 'Meu carro é preto e estava cheio de teias de aranha de lavagens antigas. O polimento e a vitrificação deixaram a pintura como um espelho.',
      author: 'Eduardo M. Siqueira',
      role: 'Proprietário de BMW Série 3 · Paulínia',
      rating: 5,
      avatar: '/img/car_team2.webp'
    },
    faq: [
      {
        q: 'Quanto tempo o carro precisa ficar no estúdio?',
        a: 'Para polimento técnico ou higienização, a entrega ocorre no mesmo dia. A vitrificação cerâmica requer 18h a 24h para tempo de cura adequado.'
      },
      {
        q: 'A vitrificação substitui o polimento?',
        a: 'Não. A vitrificação é a camada de proteção final. Antes de aplicá-la, a pintura passa por descontaminação e polimento técnico para correção do verniz.'
      },
      {
        q: 'Quais formas de pagamento são aceitas?',
        a: 'Aceitamos Pix (com condição especial), cartão de crédito em até 10x e cartão de débito.'
      }
    ],
    location: {
      address: 'Rua dos Imigrantes, 880 - Morumbi, Paulínia - SP',
      hoursWeekday: 'Segunda a sexta: 08h às 18h',
      hoursWeekend: 'Sábados: 08h às 14h'
    },
    footerNotice: 'Auto Brilho Studio Automotivo Ltda. · Paulínia, SP.',
    whatsappCta: 'Pedir orçamento no WhatsApp',
    disclaimer: 'Site demonstrativo fictício. Dados, marcas e registros criados para fins de portfólio.'
  }
];
