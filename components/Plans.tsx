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

        <p style={{ marginTop: "24px", textAlign: "center", color: "var(--mu)", fontSize: "0.88rem" }}>
          {PRICING_CONFIG.paymentTerms}
        </p>
      </div>
    </section>
  );
}
