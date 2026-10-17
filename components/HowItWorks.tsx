export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      badge: "Início",
      title: "A gente conversa e você me manda logo e fotos.",
      desc: "Falamos pelo WhatsApp para entender o que seu negócio precisa. Você me manda seu logotipo, fotos do seu espaço ou serviço e os dados de contato. Se não tiver fotos profissionais ou textos prontos, eu te ajudo.",
      deliverable: "Alinhamento de objetivo e briefing sem complicação",
    },
    {
      num: "02",
      badge: "Criação",
      title: "Eu mostro o site num link provisório e você pede ajustes.",
      desc: "Desenvolvo a página completa, rápida e com versão para celular. Você recebe um link de teste funcional no seu navegador para navegar, testar os botões e pedir as alterações que desejar.",
      deliverable: "Link navegável no celular e no computador antes de publicar",
    },
    {
      num: "03",
      badge: "No Ar",
      title: "Você aprova, eu publico no seu domínio.",
      desc: "Com tudo revisado e aprovado, configuro o domínio oficial (.com.br), ativo o certificado de segurança SSL e deixo seu botão de WhatsApp pronto para receber clientes todos os dias.",
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
