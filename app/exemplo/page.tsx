import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fraunces, Inter } from "next/font/google";
import "./vetora.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clínica Veterinária em Paulínia | Vetora - Consultas, Exames e Cirurgias",
  description:
    "Clínica veterinária em Paulínia com consulta de 40 minutos, exames no mesmo dia e orçamento fechado antes do tratamento. Agende pelo WhatsApp.",
  keywords: [
    "veterinário em Paulínia",
    "clínica veterinária Paulínia",
    "castração de cão Paulínia",
    "ultrassom veterinário Paulínia",
  ],
  openGraph: {
    title: "Vetora | Clínica Veterinária em Paulínia",
    description: "Cuidar de quem te espera em casa. Consulta sem pressa, exames no local e orçamento fechado.",
    images: ["/img/vetora/vet_hero.jpg"],
  },
};

const WA_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Vetora e gostaria de agendar uma consulta para o meu pet."
);
const WA_LINK = `https://wa.me/5519900000000?text=${WA_MESSAGE}`;

export default function VetoraPage() {
  const services = [
    { name: "Consulta clínica geral (40 minutos)", price: "R$ 120" },
    { name: "Consulta especializada (dermatologia, ortopedia ou cardiologia)", price: "R$ 180" },
    { name: "Vacina V8, V10, antirrábica ou felina", price: "R$ 90" },
    { name: "Hemograma completo com resultado no mesmo dia", price: "R$ 70" },
    { name: "Ultrassom abdominal laudado no local", price: "R$ 220" },
    { name: "Raio-X digital laudado", price: "R$ 180" },
    { name: "Castração de fêmea em porte médio", price: "A partir de R$ 450" },
    { name: "Limpeza de tártaro com ultrassom odontológico", price: "R$ 390" },
    { name: "Retorno presencial pós-consulta em até 15 dias", price: "Incluso", isFree: true },
  ];

  const team = [
    {
      name: "Dra. Marina Andrade",
      role: "Clínica Médica de Cães e Gatos | Sócia-fundadora",
      reg: "CRMV-SP 00000",
      bio: "13 anos de prática clínica, com foco em medicina preventiva e acompanhamento de doenças crônicas de animais idosos.",
      image: "/img/vetora/vet_team1.jpg",
    },
    {
      name: "Dr. Rafael Nogueira",
      role: "Cirurgia Geral e Ortopedia",
      reg: "CRMV-SP 00001",
      bio: "Especialista em castração minimamente invasiva, tecidos moles e correção de fraturas ortopédicas.",
      image: "/img/vetora/vet_team2.jpg",
    },
    {
      name: "Dra. Camila Prado",
      role: "Dermatologia e Alergias Veterinárias",
      reg: "CRMV-SP 00002",
      bio: "6 anos tratando dermatopatias e alergias em cães atópicos. Explica cada etapa do tratamento ao tutor com clareza.",
      image: "/img/vetora/vet_team3.jpg",
    },
    {
      name: "Dra. Beatriz Lemos",
      role: "Diagnóstico por Imagem e Cardiologia",
      reg: "CRMV-SP 00003",
      bio: "Responsável pelo ultrassom e ecocardiograma da clínica. Exame realizado com paciência e laudo emitido na visita.",
      image: "/img/vetora/vet_team4.jpg",
    },
    {
      name: "Aline Souza",
      role: "Coordenadora de Atendimento",
      reg: "Equipe de Apoio",
      bio: "Responsável pela recepção, agendamento pontual no WhatsApp e lembretes preventivos de vacinação do seu pet.",
      image: "/img/vetora/vet_team5.jpg",
    },
  ];

  const structure = [
    {
      title: "Recepção e Lounge Acolhedor",
      sub: "Ambiente calmo com áreas separadas para cães e gatos",
      image: "/img/vetora/vet_reception.jpg",
    },
    {
      title: "Centro Cirúrgico Completo",
      sub: "Anestesia inalatória e monitor multiparamétrico contínuo",
      image: "/img/vetora/vet_surgery.jpg",
    },
    {
      title: "Manejo Amigável para Felinos",
      sub: "Consultório exclusivo e toalhas térmicas com feromônio",
      image: "/img/vetora/vet_cat.jpg",
    },
    {
      title: "Sala de Vacinas e Imunização",
      sub: "Biológicos com controle rigoroso de temperatura",
      image: "/img/vetora/vet_vaccine.jpg",
    },
  ];

  const faqs = [
    {
      q: "Precisa agendar horário ou posso chegar sem avisar?",
      a: "Atendemos com hora marcada para garantir que cada pet receba os 40 minutos de consulta com calma. Sem agendamento, atendemos apenas se houver vaga livre no momento, por isso recomendamos sempre enviar uma mensagem antes.",
    },
    {
      q: "Quanto custa a consulta?",
      a: "R$ 120 para a clínica geral e R$ 180 para especialidades (dermatologia, ortopedia, cardiologia). O retorno presencial para reavaliação em até 15 dias já está incluso no valor.",
    },
    {
      q: "Vocês atendem emergências?",
      a: "Atendemos casos urgentes durante o nosso horário de funcionamento (Segunda a Sexta, das 08h às 19h; Sábado, das 08h às 13h). Fora desse período, direcionamos o tutor para o hospital 24 horas parceiro de referência.",
    },
    {
      q: "Quanto custa uma castração?",
      a: "A partir de R$ 450 para cão fêmea de porte médio. O valor final depende do peso, idade e exames pré-operatórios de segurança, sempre apresentado por escrito e aprovado por você antes da cirurgia.",
    },
    {
      q: "Atendem animais silvestres ou exóticos?",
      a: "Não. Focamos exclusivamente em cães e gatos para manter nossa equipe altamente especializada e com protocolos específicos para pequenos animais.",
    },
    {
      q: "Quais são as formas de pagamento?",
      a: "Aceitamos Pix, dinheiro, cartão de débito e cartão de crédito em até 3x sem juros (ou em até 6x para procedimentos cirúrgicos).",
    },
    {
      q: "A clínica possui estacionamento próprio?",
      a: "Sim. Temos 2 vagas na frente da clínica e 1 vaga lateral reservada para tutores desembarcarem com o pet no colo com segurança.",
    },
  ];

  return (
    <div className={`vetora-page ${fraunces.variable} ${inter.variable}`}>
      {/* Top Banner de Contexto de Demonstração */}
      <div className="vet-top-notice">
        <span>Site demonstrativo criado por Lucas Xavier para clínicas veterinárias e pet shops em Paulínia e região.</span>
        <Link href="/#exemplos">
          <span>Voltar ao portfólio</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </Link>
      </div>

      {/* Header Fixo Desktop / Tablet */}
      <header className="vet-header">
        <div className="vet-wrap">
          <div className="vet-navbar">
            <Link href="#topo" className="vet-brand">
              <Image
                src="/img/vetora/vet_logo.jpg"
                alt="Logo Vetora Clínica Veterinária"
                width={44}
                height={44}
                className="vet-brand-symbol"
              />
              <div className="vet-brand-text">
                <span className="vet-brand-name vet-serif">Vetora</span>
                <span className="vet-brand-category">Clínica Veterinária</span>
              </div>
            </Link>

            <ul className="vet-menu">
              <li><Link href="#diferenciais">Diferenciais</Link></li>
              <li><Link href="#servicos">Serviços e Preços</Link></li>
              <li><Link href="#estrutura">Estrutura</Link></li>
              <li><Link href="#equipe">Equipe</Link></li>
              <li><Link href="#depoimentos">Depoimentos</Link></li>
              <li><Link href="#faq">Dúvidas</Link></li>
            </ul>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="vet-btn vet-btn-primary"
            >
              <span>Agendar no WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main id="topo">
        <section className="vet-hero">
          <div className="vet-wrap">
            <div className="vet-hero-grid">
              <div>
                <div className="vet-kpi-badge">
                  <span className="vet-dot-indicator" aria-hidden="true" />
                  <span>4.9 no Google (480 avaliações) | 9 anos em Paulínia</span>
                </div>

                <h1 className="vet-hero-h1 vet-serif">
                  Cuidar de quem te espera em casa.
                </h1>

                <p className="vet-hero-sub">
                  Clínica veterinária em Paulínia com consulta de 40 minutos sem pressa, exames no mesmo dia e um plano de tratamento com orçamento fechado que você entende de verdade.
                </p>

                <div className="vet-hero-actions">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vet-btn vet-btn-primary"
                  >
                    <span>Agendar pelo WhatsApp</span>
                  </a>
                  <a href="#servicos" className="vet-btn vet-btn-secondary">
                    <span>Ver serviços e valores</span>
                  </a>
                </div>

                <div className="vet-sla-note">
                  <span className="vet-dot-indicator" aria-hidden="true" />
                  <span>Resposta rápida em até 10 minutos | Segunda a Sexta, das 08h às 19h</span>
                </div>
              </div>

              <div className="vet-hero-media">
                <div className="vet-hero-img-wrap">
                  <Image
                    src="/img/vetora/vet_hero.jpg"
                    alt="Veterinária da Vetora examinando um Golden Retriever com calma"
                    width={800}
                    height={500}
                    priority
                    className="vet-hero-img"
                  />
                </div>

                <div className="vet-card-callout">
                  <div className="vet-callout-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div className="vet-callout-text">
                    <b>Orçamento fechado antes</b>
                    <span>Sem custos adicionais ao final da consulta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Métricas Simétricas (2x2 no mobile, 4 colunas desktop) */}
        <section className="vet-metrics-section" aria-label="Indicadores da clínica">
          <div className="vet-wrap">
            <div className="vet-metrics-grid">
              <div className="vet-kpi-item">
                <span className="vet-kpi-label">Tempo dedicado</span>
                <b className="vet-kpi-number vet-serif">40 min</b>
                <span className="vet-kpi-desc">Consulta sem pressa</span>
              </div>
              <div className="vet-kpi-item">
                <span className="vet-kpi-label">Histórico</span>
                <b className="vet-kpi-number vet-serif">6.200+</b>
                <span className="vet-kpi-desc">Cães e gatos atendidos</span>
              </div>
              <div className="vet-kpi-item">
                <span className="vet-kpi-label">Diagnóstico</span>
                <b className="vet-kpi-number vet-serif">No local</b>
                <span className="vet-kpi-desc">Exames de imagem e sangue</span>
              </div>
              <div className="vet-kpi-item">
                <span className="vet-kpi-label">Acompanhamento</span>
                <b className="vet-kpi-number vet-serif">15 dias</b>
                <span className="vet-kpi-desc">Retorno presencial incluso</span>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="vet-section">
          <div className="vet-wrap">
            <div className="vet-section-header">
              <span className="vet-section-tag">Por que a Vetora</span>
              <h2 className="vet-section-h2 vet-serif">
                Clínica de bairro com padrão de hospital.
              </h2>
              <p className="vet-section-sub">
                Tratamos o animal com o carinho que ele merece, e você com a transparência de quem explica cada conduta antes de realizar qualquer procedimento.
              </p>
            </div>

            <div className="vet-diff-grid">
              <div className="vet-diff-card">
                <div>
                  <span className="vet-diff-order">01. TEMPO</span>
                  <h3 className="vet-serif">Consulta de 40 minutos</h3>
                  <p>Tempo adequado para examinar da cabeça à cauda, ouvir a rotina do animal e tirar todas as suas dúvidas com tranquilidade.</p>
                </div>
              </div>

              <div className="vet-diff-card">
                <div>
                  <span className="vet-diff-order">02. AGILIDADE</span>
                  <h3 className="vet-serif">Exames no mesmo dia</h3>
                  <p>Ultrassom abdominal e raio-X digital laudados na própria clínica. Você não precisa agendar em outro laboratório nem retornar em outra data.</p>
                </div>
              </div>

              <div className="vet-diff-card">
                <div>
                  <span className="vet-diff-order">03. ÉTICA</span>
                  <h3 className="vet-serif">Orçamento fechado antes</h3>
                  <p>Você aprova por escrito o valor de qualquer medicação, exame ou cirurgia antes do procedimento ser feito. Sem surpresas no caixa.</p>
                </div>
              </div>

              <div className="vet-diff-card">
                <div>
                  <span className="vet-diff-order">04. ORGANIZAÇÃO</span>
                  <h3 className="vet-serif">Prontuário digital do pet</h3>
                  <p>Histórico completo de vacinas, receitas e exames sempre organizados e enviados diretamente no seu WhatsApp para consulta quando desejar.</p>
                </div>
              </div>

              <div className="vet-diff-card">
                <div>
                  <span className="vet-diff-order">05. FLEXIBILIDADE</span>
                  <h3 className="vet-serif">Sem convênio obrigatório</h3>
                  <p>Atendimento particular humanizado com valores transparentes, aceitando Pix, cartão de débito e crédito parcelado em até 3x.</p>
                </div>
              </div>

              <div className="vet-diff-card" style={{ background: "var(--vet-olive-subtle)" }}>
                <div>
                  <span className="vet-diff-order">06. CONFORTO</span>
                  <h3 className="vet-serif">Manejo amigável para gatos</h3>
                  <p>Consultório exclusivo com feromônios sintéticos e toalhas aquecidas para que seu felino realize a consulta sem estresse.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços e Valores */}
        <section id="servicos" className="vet-section vet-section-alt">
          <div className="vet-wrap">
            <div className="vet-section-header">
              <span className="vet-section-tag">Tabela transparente</span>
              <h2 className="vet-section-h2 vet-serif">
                Serviços e preços de partida claros.
              </h2>
              <p className="vet-section-sub">
                Você sabe exatamente quanto vai investir antes de sair de casa. Se houver necessidade de exames complementares, o orçamento é aprovado antes.
              </p>
            </div>

            <div className="vet-services-layout">
              <div className="vet-pricing-table">
                {services.map((item, idx) => (
                  <div key={idx} className="vet-pricing-row">
                    <span className="vet-pricing-title">{item.name}</span>
                    {item.isFree ? (
                      <span className="vet-badge-included">Incluso</span>
                    ) : (
                      <span className="vet-pricing-value">{item.price}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="vet-services-sidebar">
                <div className="vet-priority-box">
                  <h4 className="vet-serif">Precisa de atendimento no dia?</h4>
                  <p>
                    Se o seu animalzinho apresentar febre, tosse contínua, vômito ou machucados, entre em contato no WhatsApp para encontrarmos o horário mais próximo.
                  </p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vet-btn vet-btn-primary"
                    style={{ width: "100%" }}
                  >
                    <span>Falar no WhatsApp agora</span>
                  </a>
                </div>

                <div className="vet-sidebar-photo">
                  <Image
                    src="/img/vetora/vet_vaccine.jpg"
                    alt="Aplicação de vacina no filhote na Vetora"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Estrutura */}
        <section id="estrutura" className="vet-section">
          <div className="vet-wrap">
            <div className="vet-section-header">
              <span className="vet-section-tag">Ambiente e estrutura</span>
              <h2 className="vet-section-h2 vet-serif">
                Projetado para diminuir o medo do seu pet.
              </h2>
              <p className="vet-section-sub">
                Salas higienizadas, iluminação suave, isolamento acústico e equipamentos próprios para você resolver tudo em um só lugar.
              </p>
            </div>

            <div className="vet-structure-grid">
              {structure.map((item, idx) => (
                <div key={idx} className="vet-structure-card">
                  <div className="vet-structure-photo">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="vet-structure-meta">
                    <b className="vet-serif">{item.title}</b>
                    <span>{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipe Médica */}
        <section id="equipe" className="vet-section vet-section-alt">
          <div className="vet-wrap">
            <div className="vet-section-header">
              <span className="vet-section-tag">Corpo Clínico</span>
              <h2 className="vet-section-h2 vet-serif">
                Quem cuida do seu companheiro.
              </h2>
              <p className="vet-section-sub">
                Veterinários dedicados, com especialização e registro ativo no CRMV-SP. Atendimento humano onde você conversa de igual para igual.
              </p>
            </div>

            <div className="vet-team-grid">
              {team.map((vet, idx) => (
                <div key={idx} className="vet-member-card">
                  <div className="vet-member-photo">
                    <Image
                      src={vet.image}
                      alt={`Foto de ${vet.name}`}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="vet-member-content">
                    <span className="vet-member-reg">{vet.reg}</span>
                    <h3 className="vet-member-name vet-serif">{vet.name}</h3>
                    <span className="vet-member-specialty">{vet.role}</span>
                    <p className="vet-member-bio">{vet.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="vet-section">
          <div className="vet-wrap">
            <div className="vet-section-header">
              <span className="vet-section-tag">Passo a passo simples</span>
              <h2 className="vet-section-h2 vet-serif">
                Do primeiro contato ao pet recuperado.
              </h2>
              <p className="vet-section-sub">
                Sem burocracia na recepção. Você agenda pelo WhatsApp e é atendido no horário marcado.
              </p>
            </div>

            <div className="vet-workflow-grid">
              <div className="vet-workflow-step">
                <span className="vet-step-tag">Passo 01</span>
                <h3 className="vet-serif">Agendamento rápido</h3>
                <p>Você envia uma mensagem contando o que está acontecendo com o seu animal. A Aline confirma o horário ideal com você em poucos minutos.</p>
              </div>

              <div className="vet-workflow-step">
                <span className="vet-step-tag">Passo 02</span>
                <h3 className="vet-serif">Consulta de 40 minutos e exames</h3>
                <p>A médica veterinária examina o pet com calma. Se houver indicação de ultrassom ou raio-X, realizamos no mesmo consultório.</p>
              </div>

              <div className="vet-workflow-step">
                <span className="vet-step-tag">Passo 03</span>
                <h3 className="vet-serif">Plano por escrito e retorno</h3>
                <p>Você sai com diagnóstico claro, receita organizada e valor fechado. O retorno presencial para reavaliação em 15 dias já está incluso.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="vet-section vet-section-alt">
          <div className="vet-wrap">
            <div className="vet-section-header">
              <span className="vet-section-tag">Avaliações reais</span>
              <h2 className="vet-section-h2 vet-serif">
                O que dizem os tutores em Paulínia.
              </h2>
              <p className="vet-section-sub">
                Opiniões de tutores que confiaram seus animais aos nossos cuidados e aprovaram a transparência do atendimento.
              </p>
            </div>

            <div className="vet-testimonials-grid">
              <div className="vet-feedback-card">
                <div>
                  <div className="vet-rating-stars" aria-label="5 de 5 estrelas">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="vet-feedback-text">
                    &ldquo;Levei a Nina achando que era só uma alergia simples. Fizeram o exame na hora, diagnosticaram uma infecção de pele e já iniciei o tratamento no mesmo dia. Voltei dez dias depois no retorno e ela já estava ótima e ativa.&rdquo;
                  </p>
                </div>
                <div className="vet-tutor-profile">
                  <Image
                    src="/img/vetora/vet_testimonial.jpg"
                    alt="Patrícia Menezes e Nina"
                    width={44}
                    height={44}
                    className="vet-tutor-avatar"
                  />
                  <div className="vet-tutor-details">
                    <b>Patrícia Menezes</b>
                    <span>Tutora da Nina | Paulínia, SP</span>
                  </div>
                </div>
              </div>

              <div className="vet-feedback-card">
                <div>
                  <div className="vet-rating-stars" aria-label="5 de 5 estrelas">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="vet-feedback-text">
                    &ldquo;O ponto mais forte foi o orçamento fechado antes. O Dr. Rafael explicou a cirurgia inteira de castração, passou o valor por escrito e não houve nenhum centavo adicional no final. Recuperação rápida e segura.&rdquo;
                  </p>
                </div>
                <div className="vet-tutor-profile">
                  <div className="vet-tutor-details">
                    <b>Eduardo Tanaka</b>
                    <span>Tutor do Thor | Cosmópolis, SP</span>
                  </div>
                </div>
              </div>

              <div className="vet-feedback-card">
                <div>
                  <div className="vet-rating-stars" aria-label="5 de 5 estrelas">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="vet-feedback-text">
                    &ldquo;Meu gato tem 11 anos e costuma se estressar bastante em clínicas. Na Vetora conseguiram examinar com calma, enrolado na toalha com feromônio. Saí de lá com as receitas salvas no meu WhatsApp.&rdquo;
                  </p>
                </div>
                <div className="vet-tutor-profile">
                  <div className="vet-tutor-details">
                    <b>Renata Villas</b>
                    <span>Tutora do Cebolinha | Paulínia, SP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section id="faq" className="vet-section">
          <div className="vet-wrap">
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span className="vet-section-tag">Perguntas Frequentes</span>
              <h2 className="vet-section-h2 vet-serif">Tire suas dúvidas antes da consulta</h2>
              <p className="vet-section-sub" style={{ margin: "0 auto" }}>
                Informações claras sobre o atendimento, valores, horários e formas de pagamento.
              </p>
            </div>

            <div className="vet-faq-wrapper">
              {faqs.map((faq, idx) => (
                <details key={idx} className="vet-faq-row">
                  <summary className="vet-faq-q">
                    <span>{faq.q}</span>
                    <span className="vet-faq-toggle" aria-hidden="true">+</span>
                  </summary>
                  <div className="vet-faq-a">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final Box */}
        <section className="vet-wrap">
          <div className="vet-action-box">
            <h2 className="vet-serif">Conte o que está acontecendo com o seu pet.</h2>
            <p>
              Sem formulários longos ou filas na recepção. Envie uma mensagem no WhatsApp para agendarmos o melhor horário hoje mesmo.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="vet-btn vet-btn-primary"
              style={{ fontSize: "1.05rem", minHeight: "52px", padding: "0 32px" }}
            >
              <span>Chamar no WhatsApp (19) 90000-0000</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer Institucional */}
      <footer className="vet-footer">
        <div className="vet-wrap">
          <div className="vet-footer-columns">
            <div>
              <h5 className="vet-serif" style={{ fontSize: "1.25rem" }}>Vetora | Clínica Veterinária</h5>
              <p>Cuidar de quem te espera em casa com medicina preventiva, exames de diagnóstico ágil e atenção profissional.</p>
              <p style={{ marginTop: "14px", color: "#F1F5F9" }}>
                <strong>Responsável técnica:</strong> Dra. Marina Andrade | CRMV-SP 00000
              </p>
            </div>

            <div>
              <h5>Atendimento e Localização</h5>
              <p>Rua das Acácias, 842, Sala 1</p>
              <p>Jardim Vista Alegre, Paulínia, SP</p>
              <p>CEP 13140-000</p>
              <p style={{ marginTop: "10px" }}>WhatsApp: (19) 90000-0000</p>
            </div>

            <div>
              <h5>Horário de Funcionamento</h5>
              <p><strong>Segunda a Sexta:</strong> 08h às 19h</p>
              <p><strong>Sábados:</strong> 08h às 13h</p>
              <p>Plantão de urgência com agendamento prévio</p>
              <p style={{ marginTop: "10px" }}>Instagram: @vetora.vet</p>
            </div>
          </div>

          <div className="vet-legal-line">
            <span>
              © {new Date().getFullYear()} Vetora Clínica Veterinária Ltda. Todos os direitos reservados.
            </span>
            <span>
              Site demonstrativo fictício criado para fins de portfólio profissional por{" "}
              <Link href="/">Lucas Xavier</Link>.
            </span>
          </div>
        </div>
      </footer>

      {/* Floating Pill Dock para Mobile (Acessibilidade e Alcance do Polegar) */}
      <nav className="vet-mobile-dock" aria-label="Navegação móvel rápida">
        <Link href="#topo" className="vet-dock-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Início</span>
        </Link>
        <Link href="#servicos" className="vet-dock-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <span>Preços</span>
        </Link>
        <Link href="#equipe" className="vet-dock-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span>Equipe</span>
        </Link>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="vet-dock-cta"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span>WhatsApp</span>
        </a>
      </nav>
    </div>
  );
}
