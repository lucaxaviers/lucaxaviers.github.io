export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      badge: "Início",
      title: "Alinhamento rápido no WhatsApp",
      desc: "Você me conta em 5 minutos o que faz, quais serviços quer destacar e me manda o que já tiver (logo, fotos ou Instagram).",
      deliverable: "Alinhamento de objetivo e briefing sem complicação",
    },
    {
      num: "02",
      badge: "Criação",
      title: "Criação completa + Textos persuasivos",
      desc: "Eu monto toda a estrutura, escrevo os textos focados em vendas e crio o visual. Você acompanha tudo por um link de teste exclusivo.",
      deliverable: "Link navegável no celular e no computador antes de publicar",
    },
    {
      num: "03",
      badge: "No Ar",
      title: "Aprovação e Publicação",
      desc: "Ajustamos os detalhes que você pedir, colocamos no ar no seu domínio (.com.br) e você só paga a segunda metade após aprovar.",
      deliverable: "Site publicado, seguro, veloz e sob seu controle",
    },
  ];

  return (
    <section id="como-funciona" className="how-section reveal-on-scroll">
      <div className="w">
        <div className="section-header-tag">Processo Transparente</div>
        <h2>Como funciona do primeiro papo ao site no ar.</h2>
        <p className="sub">
          Três passos simples e diretos. Sem termos técnicos difíceis, sem intermediários e sem surpresas no caminho.
        </p>

        <div className="process-rail">
          {steps.map((step, idx) => (
            <div key={step.num} className="process-card">
              <div className="process-top">
                <span className="process-number">{step.num}</span>
                <span className="process-badge">{step.badge}</span>
              </div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
              <div className="process-deliverable">
                <span className="deliverable-label">Entregável:</span>
                <span className="deliverable-text">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
