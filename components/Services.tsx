"use client";

import Image from "next/image";

export default function Services() {
  return (
    <section id="servicos" className="reveal-on-scroll">
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
              <p>Uma página só, com um único objetivo: fazer o visitante clicar e chamar no seu WhatsApp (igual a essa que você está vendo).</p>
            </div>

            {/* Chat Thread with Avatars (Cliente vs Você) */}
            <div className="chat-thread" aria-label="Simulação de conversa no WhatsApp">
              {/* Message from Customer */}
              <div className="chat-msg chat-msg-client">
                <div className="chat-avatar-wrap">
                  <Image
                    src="/img/dent_team3.webp"
                    alt="Foto do cliente"
                    width={38}
                    height={38}
                    className="chat-avatar-img"
                  />
                </div>
                <div className="chat-content">
                  <span className="chat-author">Cliente:</span>
                  <div className="chat-bubble chat-bubble-client">
                    <span>Oi! Vi o site de vocês e queria agendar um horário para esta semana.</span>
                    <span className="chat-time">10:42</span>
                  </div>
                </div>
              </div>

              {/* Message from You (Lucas / Empresa) */}
              <div className="chat-msg chat-msg-you">
                <div className="chat-content">
                  <span className="chat-author chat-author-you">Você:</span>
                  <div className="chat-bubble chat-bubble-you">
                    <span>Olá! Perfeito, temos horários na quinta às 14h e na sexta às 10h. Qual prefere?</span>
                    <span className="chat-time chat-time-you">
                      10:43
                      <svg width="14" height="14" viewBox="0 0 16 15" fill="none" aria-hidden="true">
                        <path d="M15 4L6.5 12.5L2 8" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11 4L5 10" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="chat-avatar-wrap">
                  <Image
                    src="/img/lucas_profile.webp"
                    alt="Sua foto (empresa)"
                    width={38}
                    height={38}
                    className="chat-avatar-img"
                  />
                </div>
              </div>
            </div>

            <div className="bc-footer-note">
              <span>Ideal para campanhas no Google e anúncios locais em Paulínia</span>
            </div>
          </div>

          {/* Card 2: Sites institucionais */}
          <div className="bc b-inst">
            <div className="bc-header">
              <h3>Site institucional</h3>
              <p>4 a 5 páginas completas para passar confiança e ser achado quando alguém buscar no Google.</p>
            </div>
            <div className="pills">
              <span className="pill">Início</span>
              <span className="pill">Sobre a empresa</span>
              <span className="pill">Serviços</span>
              <span className="pill">Equipe</span>
              <span className="pill">Contato</span>
            </div>
            <div className="bc-footer-note">
              <span>Perfeito para clínicas, escritórios e comércios consolidados</span>
            </div>
          </div>

          {/* Card 3: Manutenção */}
          <div className="bc b-manu">
            <div className="bc-header">
              <h3>Manutenção sem taxa obrigatória</h3>
              <p>Você manda a mudança por mensagem e eu atualizo para você. Sem dor de cabeça com código.</p>
            </div>
            <div className="live-status-card">
              <span className="st2 on">Site sempre no ar</span>
              <span className="live-status-sub">Vigilância SSL, monitoramento ativo e backups preventivos</span>
            </div>
          </div>

          {/* Card 4: Sem agência */}
          <div className="bc b5">
            <div className="bc-header">
              <h3>Sem agência no meio</h3>
              <p>Do primeiro papo à publicação, é comigo. Se precisar mudar algo, você me manda uma mensagem e eu resolvo direto, sem chamados ou intermediários.</p>
            </div>
            <div className="local-badge-wrap">
              <span className="pill">Paulínia, SP</span>
              <span className="pill">Atendimento 1:1</span>
              <span className="pill">Suporte ágil</span>
            </div>
          </div>

          {/* Card 5: Mobile First (Fita horizontal de destaque) */}
          <div className="bc b4">
            <div className="b4-inner">
              <span className="big">100%</span>
              <div className="b4-content">
                <h3>Feito para o celular</h3>
                <p>Mais de 80% dos seus clientes virão pelo smartphone. O site abre rápido, ajustado ao polegar e sem quebrar em nenhuma tela.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
