"use client";

import { getWhatsAppUrl, CONTACT_EMAIL } from "@/lib/whatsapp";

export default function Contact() {
  const whatsappUrl = getWhatsAppUrl(
    "Oi Lucas! Vi seu portfólio e gostaria de uma proposta de site para o meu negócio."
  );

  return (
    <section className="ct" id="contato">
      <div className="w">
        <div className="contact-box">
          <div className="section-header-tag text-white-alpha">Contato Direto</div>
          <h2>Me conta sobre o seu negócio. Eu respondo com uma proposta.</h2>
          <p className="contact-lead">
            Sem formulários longos e sem enrolação. Me mande uma mensagem pelo WhatsApp ou escreva um e-mail com as informações básicas da sua empresa.
          </p>

          <div className="contact-actions">
            {whatsappUrl && (
              <a
                className="btn btn-wa-contrast"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-contact-whatsapp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.301-.15-1.78-.877-2.056-.977-.275-.1-.476-.15-.677.15-.2.3-.778.977-.954 1.178-.176.2-.351.226-.652.075s-1.272-.469-2.423-1.496c-.896-.8-1.5-1.789-1.676-2.09-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.677-1.632-.928-2.235-.245-.588-.494-.508-.677-.517-.175-.009-.376-.009-.577-.009-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.513 1.079 2.915 1.23 3.116c.15.2 2.124 3.243 5.145 4.548.718.311 1.279.497 1.716.636.723.23 1.381.197 1.902.12.58-.087 1.78-.728 2.03-1.431.25-.703.25-1.306.175-1.431-.075-.125-.276-.2-.577-.35z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.551 4.102 1.517 5.831L0 24l6.335-1.489C8.016 23.473 9.948 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.57-.498-5.056-1.365l-.362-.213-3.76.884.903-3.663-.233-.377C2.57 15.77 2 13.948 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                Conversar no WhatsApp
              </a>
            )}

            <a
              className="btn btn-mail-contrast"
              href={`mailto:${CONTACT_EMAIL}`}
              id="cta-contact-email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="contact-links">
            <a
              href="https://github.com/lucaxaviers"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de Lucas Xavier no GitHub"
              className="contact-sublink"
            >
              github.com/lucaxaviers
            </a>
            <span className="contact-dot-sep">·</span>
            <a
              href="https://linkedin.com/in/lucaxaviers"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de Lucas Xavier no LinkedIn"
              className="contact-sublink"
            >
              linkedin.com/in/lucaxaviers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
