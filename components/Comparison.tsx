export default function Comparison() {
  const marketCons = [
    {
      title: "Mensalidade de R$ 100 a R$ 300 para sempre",
      desc: "Você paga todo mês como um aluguel infinito. Se parar de pagar, seu site sai do ar imediatamente.",
    },
    {
      title: "Demora de 30 a 60 dias para entregar",
      desc: "Processos burocráticos com reuniões demoradas e filas de espera intermináveis em agências.",
    },
    {
      title: "Suporte por robô ou abertura de chamado",
      desc: "Para trocar um telefone ou endereço simples, você precisa abrir ticket e esperar dias por resposta.",
    },
    {
      title: "Sites lentos que não aparecem no Google",
      desc: "Construtores genéricos cheios de código pesado que demoram para abrir no 4G e perdem clientes.",
    },
  ];

  const myPros = [
    {
      title: "R$ 0 de mensalidade",
      highlight: "o site é 100% seu",
      desc: "Você investe uma única vez no projeto e a página é sua de forma definitiva, sem pegadinhas nem aluguel.",
    },
    {
      title: "Pronto de 3 a 7 dias",
      highlight: "com link de teste",
      desc: "Desenvolvimento ágil com link navegável no seu celular antes de publicar para aprovação sem surpresa.",
    },
    {
      title: "Meu WhatsApp pessoal",
      highlight: "direto com quem faz",
      desc: "Fale direto comigo a qualquer momento. Precisou mudar uma foto ou texto? É só mandar uma mensagem.",
    },
    {
      title: "Ultra-rápido",
      highlight: "preparado para o Google local",
      desc: "Código de alta performance em Next.js que carrega em 1 segundo e tem nota máxima de SEO no celular.",
    },
  ];

  return (
    <section id="comparativo" className="reveal-on-scroll">
      <div className="w">
        <div className="section-header-tag">Comparativo Direto</div>
        <h2>Por que fazer seu site diretamente comigo?</h2>
        <p className="sub">
          Entenda a diferença real entre contratar uma agência tradicional ou plataforma de aluguel e ter um desenvolvedor dedicado ao seu negócio.
        </p>

        <div className="comp-grid">
          {/* Card Mercado / Agências */}
          <div className="comp-card comp-card-market">
            <div className="comp-card-header">
              <span className="comp-badge comp-badge-market">Modelo tradicional</span>
              <h3>Como o mercado faz</h3>
              <p className="comp-card-sub">Agências grandes ou plataformas de aluguel (Wix / WordPress)</p>
            </div>

            <ul className="comp-list">
              {marketCons.map((item, idx) => (
                <li key={idx} className="comp-item comp-item-market">
                  <div className="comp-icon-box comp-icon-x" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <div className="comp-item-text">
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Card Comigo / Lucas Xavier */}
          <div className="comp-card comp-card-lucas">
            <div className="comp-card-header">
              <div className="comp-badge-group">
                <span className="comp-badge comp-badge-lucas">Atendimento 1:1</span>
                <span className="comp-badge comp-badge-popular">Melhor Custo-Benefício</span>
              </div>
              <h3>Como funciona comigo</h3>
              <p className="comp-card-sub">Desenvolvimento sob medida, rápido e sem intermediários</p>
            </div>

            <ul className="comp-list">
              {myPros.map((item, idx) => (
                <li key={idx} className="comp-item comp-item-lucas">
                  <div className="comp-icon-box comp-icon-check" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="comp-item-text">
                    <strong>
                      {item.title} <span className="comp-tag-highlight">({item.highlight})</span>
                    </strong>
                    <span>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
