export default function Services() {
  return (
    <section id="servicos">
      <div className="w">
        <div className="section-header-tag">O que eu faço</div>
        <h2>Tudo que o seu negócio precisa para ser encontrado.</h2>
        <p className="sub">
          Eu cuido do site do começo ao fim, e você fala direto comigo. Sem intermediários, sem termos difíceis.
        </p>

        <div className="bento">
          {/* Card 1: Landing pages (Dominant Asymmetric Span) */}
          <div className="bc b1">
            <div className="bc-header">
              <span className="bc-badge">Mais pedido</span>
              <h3>Landing page</h3>
              <p>Uma página só, com um único objetivo: fazer o visitante clicar e chamar no seu WhatsApp.</p>
            </div>

            <div className="chat" aria-hidden="true">
              <div className="chat-bubble chat-in">
                <span>Oi! Vi o site de vocês e queria agendar um horário para esta semana.</span>
              </div>
              <div className="chat-bubble chat-out">
                <span>Olá! Perfeito, temos horários na quinta às 14h e na sexta às 10h. Qual prefere?</span>
              </div>
            </div>

            <div className="bc-footer-note">
              <span>Ideal para campanhas no Google e anúncios locais</span>
            </div>
          </div>

          {/* Card 2: Sites institucionais */}
          <div className="bc">
            <div className="bc-header">
              <h3>Site institucional</h3>
              <p>4 a 5 páginas completas para passar confiança e ser achado quando alguém buscar no Google.</p>
            </div>
            <div className="pills">
              <span className="pill">Início</span>
              <span className="pill">Sobre</span>
              <span className="pill">Serviços</span>
              <span className="pill">Equipe</span>
              <span className="pill">Contato</span>
            </div>
            <div className="bc-footer-note">
              <span>Perfeito para clínicas e escritórios</span>
            </div>
          </div>

          {/* Card 3: Manutenção */}
          <div className="bc">
            <div className="bc-header">
              <h3>Manutenção</h3>
              <p>Você manda a mudança por mensagem e eu atualizo para você. Sem dor de cabeça com código.</p>
            </div>
            <div className="live-status-card">
              <span className="st2 on">Site sempre no ar</span>
              <span className="live-status-sub">Vigilância SSL e monitoramento ativo</span>
            </div>
          </div>

          {/* Card 4: Mobile First */}
          <div className="bc b4">
            <span className="big">100%</span>
            <div>
              <h3>Feito para o celular</h3>
              <p>Mais de 80% dos seus clientes virão pelo smartphone. O site abre rápido e sem quebrar em qualquer tela.</p>
            </div>
          </div>

          {/* Card 5: Sem agência */}
          <div className="bc">
            <div className="bc-header">
              <h3>Sem agência no meio</h3>
              <p>Do primeiro papo à publicação, é comigo. Se precisar mudar algo, você me manda uma mensagem e eu resolvo.</p>
            </div>
            <div className="local-badge-wrap">
              <span className="pill">Paulínia, SP</span>
              <span className="pill">Atendimento 1:1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
