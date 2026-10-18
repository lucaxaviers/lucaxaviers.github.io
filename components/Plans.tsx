"use client";

import Link from "next/link";
import { PRICING_PLANS, PRICING_CONFIG } from "@/data/plans";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Plans() {
  const getPlanLink = (planName: string) => {
    const waUrl = getWhatsAppUrl(`Oi Lucas! Gostaria de conversar sobre o plano: ${planName}`);
    if (waUrl) return waUrl;
    return "#contato";
  };

  return (
    <section id="planos">
      <div className="w">
        <h2>Planos feitos para o seu momento.</h2>
        <p className="sub">
          Sem custos ocultos ou surpresas. Você investe uma vez no seu site e tem um canal ativo para receber contatos todos os dias.
        </p>

        <div className="pl-grid">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.highlight;
            const linkHref = getPlanLink(plan.name);

            return (
              <div key={plan.id} className={`pl-card ${isFeatured ? "featured" : ""}`}>
                <div>
                  {isFeatured && <span className="pl-badge">Mais Escolhido</span>}
                  <h3>{plan.name}</h3>
                  <p className="pl-tagline">{plan.tagline}</p>

                  <div className="pl-price-box">
                    <span className="pl-price">{plan.priceNote}</span>
                    {plan.pricePeriod && <span className="pl-period">/ {plan.pricePeriod}</span>}
                  </div>

                  <ul className="pl-features">
                    {plan.features.map((feat, idx) => (
                      <li key={idx}>
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {linkHref.startsWith("http") ? (
                    <a
                      href={linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn ${isFeatured ? "" : "o"}`}
                      style={{ width: "100%" }}
                    >
                      {plan.ctaText}
                    </a>
                  ) : (
                    <Link href="#contato" className={`btn ${isFeatured ? "" : "o"}`} style={{ width: "100%" }}>
                      {plan.ctaText}
                    </Link>
                  )}
                  <p className="pl-target">{plan.targetAudience}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloco de Risco Zero / Garantia 50/50 */}
        <div className="pl-guarantee-box">
          <div className="pl-guarantee-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <div className="pl-guarantee-text">
            <strong>Garantia de Satisfação e Risco Zero</strong>
            <p>
              Pagamento seguro 50% / 50%: Você dá 50% para iniciarmos e só paga os outros 50% quando ver o site pronto no link de teste e aprovar.
            </p>
          </div>
        </div>

        <p style={{ marginTop: "20px", textAlign: "center", color: "var(--mu)", fontSize: "0.88rem" }}>
          {PRICING_CONFIG.paymentTerms}
        </p>
      </div>
    </section>
  );
}
