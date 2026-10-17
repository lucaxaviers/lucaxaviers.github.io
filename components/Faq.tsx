export default function Faq() {
  const faqs = [
    {
      q: "Quanto tempo leva para o site ficar pronto?",
      a: "Uma landing page direta costuma ficar pronta entre 3 a 5 dias úteis. Sites institucionais completos (com 4 a 5 páginas) levam de 7 a 12 dias úteis, dependendo do envio de fotos e textos.",
    },
    {
      q: "O que eu preciso mandar para começar?",
      a: "Apenas o básico: o logotipo da sua empresa (se tiver), fotos do seu espaço/trabalho e uma lista simples dos seus serviços com telefone de contato. Se não tiver fotos profissionais ou textos prontos, eu te ajudo a estruturar tudo.",
    },
    {
      q: "O domínio e o site ficam no meu nome?",
      a: "Sim, 100%. O domínio (ex: suarempresa.com.br) é registrado em seu nome ou CPF/CNPJ. Você é o dono oficial do seu endereço na internet e do código do site, sem amarras.",
    },
    {
      q: "Como funciona a manutenção? Tem taxa mensal obrigatória?",
      a: "Não cobro nenhuma taxa mensal obrigatória. O site publicado é seu. Se daqui a 6 meses você quiser trocar uma foto, número ou preço, pode me chamar e combinamos a atualização avulsa, ou optar pelo acompanhamento mensal se preferir suporte contínuo.",
    },
    {
      q: "Quais são as formas de pagamento? Aceita Pix?",
      a: "Aceito Pix e transferência bancária, com condição padrão de 50% de entrada no início do projeto e os 50% restantes apenas quando você aprovar o site no ar. Também é possível parcelar no cartão.",
    },
  ];

  return (
    <section id="duvidas" className="faq-section reveal-on-scroll">
      <div className="w faq-w-centered">
        <div className="faq-header-centered">
          <div className="section-header-tag">Dúvidas Frequentes</div>
          <h2>Tudo explicado, sem letras miúdas.</h2>
          <p className="sub">
            Respostas diretas para as dúvidas mais comuns de donos de negócios antes de começarmos o projeto.
          </p>
        </div>

        <div className="faq-grid faq-grid-differentiated">
          {faqs.map((item, idx) => (
            <details key={idx} className="faq-item faq-item-differentiated">
              <summary className="faq-question">
                <div className="faq-question-main">
                  <span className="faq-num">0{idx + 1}</span>
                  <span className="faq-title">{item.q}</span>
                </div>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
