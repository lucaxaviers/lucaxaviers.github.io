export default function Faq() {
  const faqs = [
    {
      q: "Não tenho fotos profissionais nem textos prontos. E agora?",
      a: "Não se preocupe. Eu mesmo ajudo a estruturar todos os textos persuasivos focados em vendas para o seu negócio. Caso você ainda não tenha fotos profissionais do espaço ou da equipe, seleciono imagens profissionais de alta qualidade do seu segmento ou aproveito os melhores materiais que você já tiver no seu Instagram.",
    },
    {
      q: "Tem mesmo zero mensalidade? Não pago nada depois?",
      a: "Transparência total: o meu trabalho é de pagamento único, sem mensalidade nem pegadinhas de aluguel. A única despesa que qualquer site na internet possui é a anuidade do domínio próprio (cerca de R$ 40 por ano pagos diretamente ao Registro.br em seu próprio nome/CNPJ). A hospedagem de alta performance eu configuro em plano gratuito vitalício para o volume de acessos da sua empresa.",
    },
    {
      q: "E se eu precisar mudar um telefone, preço ou foto no futuro?",
      a: "Mudanças pontuais simples você resolve rapidinho me chamando direto no WhatsApp, sem abrir chamados, sem robôs e sem burocracia. O site é desenvolvido com arquitetura limpa e moderna, permitindo alterações ágeis sempre que seu negócio precisar.",
    },
    {
      q: "Quanto tempo leva para o site ficar pronto?",
      a: "Uma landing page focada em conversão fica pronta de 3 a 5 dias úteis. Você recebe um link provisório navegável no celular e no computador para testar tudo antes de publicarmos no seu domínio oficial.",
    },
    {
      q: "Como funciona a forma de pagamento?",
      a: "Trabalhamos no modelo de Risco Zero com 50% / 50%: você dá 50% de entrada para darmos início à criação e só paga os outros 50% quando o site estiver totalmente pronto no link de teste e você aprovar. Aceito Pix e cartão.",
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
