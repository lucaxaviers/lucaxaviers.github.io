"use client";

import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl(
    "Oi Lucas! Vi seu portfólio e queria um orçamento de site para o meu negócio."
  );

  return (
    <header className="hero" id="topo">
      <div className="w">
        <div className="hero-split">
          {/* Left Column: Monumental Value Proposition */}
          <div className="hero-left">
            <div className="hero-status-pill">
              <span className="live-pulse-dot" />
              <span>Aceitando novos projetos em Paulínia e região</span>
            </div>

            <h1 className="hero-title">
              Seu negócio no Google, e o cliente no seu WhatsApp<i>.</i>
            </h1>

            <p className="hero-lead">
              Faço sites e landing pages rápidos para quem presta serviço. Do primeiro papo à publicação, é direto comigo.
            </p>

            <div className="hero-ctas">
              {whatsappUrl ? (
                <a
                  className="btn btn-primary"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-hero-whatsapp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.301-.15-1.78-.877-2.056-.977-.275-.1-.476-.15-.677.15-.2.3-.778.977-.954 1.178-.176.2-.351.226-.652.075s-1.272-.469-2.423-1.496c-.896-.8-1.5-1.789-1.676-2.09-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.677-1.632-.928-2.235-.245-.588-.494-.508-.677-.517-.175-.009-.376-.009-.577-.009-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.513 1.079 2.915 1.23 3.116c.15.2 2.124 3.243 5.145 4.548.718.311 1.279.497 1.716.636.723.23 1.381.197 1.902.12.58-.087 1.78-.728 2.03-1.431.25-.703.25-1.306.175-1.431-.075-.125-.276-.2-.577-.35z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.551 4.102 1.517 5.831L0 24l6.335-1.489C8.016 23.473 9.948 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.57-.498-5.056-1.365l-.362-.213-3.76.884.903-3.663-.233-.377C2.57 15.77 2 13.948 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                  </svg>
                  Quero um site
                </a>
              ) : (
                <Link className="btn btn-primary" href="#contato" id="cta-hero-contact">
                  Quero um site
                </Link>
              )}
              <Link className="btn btn-secondary" href="#exemplos" id="cta-hero-examples">
                Ver como fica
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
            </div>

            <div className="hero-trust-grid">
              <div className="trust-card">
                <span className="trust-title">Sem mensalidade</span>
                <span className="trust-desc">Site publicado é seu, sem aluguel mensal</span>
              </div>
              <div className="trust-card">
                <span className="trust-title">50% / 50%</span>
                <span className="trust-desc">Metade na entrada, metade na publicação</span>
              </div>
              <div className="trust-card">
                <span className="trust-title">Atendimento 1:1</span>
                <span className="trust-desc">Você fala direto com quem programa</span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Card & Physical Spec Sheet */}
          <div className="hero-right">
            <div className="studio-card">
              <div className="studio-card-top">
                <div className="studio-tag">Estúdio Web Independente</div>
                <div className="studio-coords">Paulínia, SP</div>
              </div>

              <div className="studio-bio">
                <div className="studio-photo-wrap">
                  <Image
                    src="/img/lucas_profile.webp"
                    alt="Foto de Lucas Xavier, estudante de engenharia de software e desenvolvedor de sites"
                    width={112}
                    height={112}
                    priority
                    className="studio-photo"
                  />
                  <span className="studio-photo-status" title="Ativo" />
                </div>
                <div className="studio-bio-text">
                  <div className="studio-name">Lucas Xavier<i>.</i></div>
                  <div className="studio-title">Desenvolvedor & Engenharia de Software</div>
                  <div className="studio-loc">Paulínia, SP · Atendendo toda a região</div>
                </div>
              </div>

              <div className="studio-specs">
                <div className="spec-item">
                  <span className="spec-label">Especialidade</span>
                  <span className="spec-value">Sites para dentistas, advogados e comércios locais</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Stack de Produção</span>
                  <span className="spec-value">Next.js · TypeScript · Vercel</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Contato Direto</span>
                  <span className="spec-value font-mono">lucas.xavier.pln@gmail.com</span>
                </div>
                <div className="spec-item spec-highlight">
                  <span className="spec-label">Prazo de Entrega</span>
                  <span className="spec-value">De 3 a 7 dias úteis com link de teste</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
