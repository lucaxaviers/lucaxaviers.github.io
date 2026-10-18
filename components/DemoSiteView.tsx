"use client";

import Image from "next/image";
import { DemoSite } from "@/data/demos";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface DemoSiteViewProps {
  demo: DemoSite;
}

export default function DemoSiteView({ demo }: DemoSiteViewProps) {
  return (
    <div
      className="ms"
      style={
        {
          "--ac": demo.accentColor,
          "--bg": demo.bgColor,
          "--tx": demo.textColor,
          "--cd": demo.cardColor,
        } as React.CSSProperties
      }
    >
      {/* Header */}
      <div className="mh">
        <b className="lg">{demo.name}</b>
        <span className="nv">
          <span>Início</span>
          <span>{demo.servicesTitle.split(" ")[0]}</span>
          <span>Equipe</span>
          <span>Contato</span>
        </span>
        <span className="mb">{demo.ctaText.split(" ")[0]}</span>
      </div>

      {/* Hero */}
      <div className="mhero">
        <div>
          <span className="chip">{demo.tagline}</span>
          <h4>{demo.headline}</h4>
          <p>{demo.description}</p>
          <span className="mb big">{demo.ctaText}</span>
          <div className="rt">{demo.responseTime}</div>
        </div>
        <div className="vis">
          <Image
            src={demo.heroImage.src}
            alt={demo.heroImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
          <div className="fl">
            <b>{demo.badgeScore[0]}</b>
            <span>{demo.badgeScore[1]}</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="st">
        {demo.stats.map(([val, label], idx) => (
          <div key={idx}>
            <b>{val}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Services / Treatments */}
      <h5>{demo.servicesTitle}</h5>
      <div className="sv">
        {demo.services.map((s, idx) => (
          <div key={idx}>
            <b>{s.title}</b>
            <span>{s.desc}</span>
            <em>{s.priceNote}</em>
          </div>
        ))}
      </div>

      {/* Gallery or Before & After */}
      <h5>{demo.id === "car" ? "Antes & Depois do Polimento" : "Estrutura & Resultados"}</h5>
      {demo.id === "car" && demo.beforeAfter ? (
        <BeforeAfterSlider
          beforeSrc={demo.beforeAfter.beforeSrc}
          beforeAlt={demo.beforeAfter.beforeAlt}
          afterSrc={demo.beforeAfter.afterSrc}
          afterAlt={demo.beforeAfter.afterAlt}
        />
      ) : (
        <div className="gl">
          {demo.gallery.map((g, idx) => (
            <div key={idx}>
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 768px) 33vw, 200px"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
              <span>{g.title}</span>
            </div>
          ))}
        </div>
      )}

      {/* Steps */}
      <h5>{demo.stepsTitle}</h5>
      <div className="sp">
        {demo.steps.map(([stTitle, stDesc], idx) => (
          <div key={idx}>
            <i>{idx + 1}</i>
            <p>
              <b>{stTitle}</b>
              <span>{stDesc}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Team */}
      <h5>{demo.teamTitle}</h5>
      <div className="tm">
        {demo.team.map((m, idx) => (
          <div key={idx}>
            <div className="tm-img-wrap">
              <Image
                src={m.image}
                alt={m.alt}
                fill
                sizes="64px"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
            </div>
            <b>{m.name}</b>
            <span>{m.role}</span>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="qt">
        <div className="stars">{"★".repeat(demo.testimonial.rating)}</div>
        <p>“{demo.testimonial.quote}”</p>
        <b>
          {demo.testimonial.author} · {demo.testimonial.role}
        </b>
      </div>

      {/* FAQ */}
      <h5>Perguntas Frequentes</h5>
      <div className="fq">
        {demo.faq.map((item, idx) => (
          <details key={idx}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>

      {/* Location / Map */}
      <div className="lc">
        <div className="lc-map" aria-hidden="true">
          <svg viewBox="0 0 400 130" preserveAspectRatio="xMidYMid slice">
            <rect width="400" height="130" fill="#E8ECEF" />
            <rect x="30" y="20" width="100" height="40" rx="6" fill="#D5DDD2" opacity="0.8" />
            <rect x="230" y="65" width="120" height="45" rx="6" fill="#DCE3EA" opacity="0.8" />
            <path d="M-10 15L410 15" stroke="#FFFFFF" strokeWidth="8" />
            <path d="M-10 70L410 70" stroke="#FFFFFF" strokeWidth="10" />
            <path d="M-10 115L410 115" stroke="#FFFFFF" strokeWidth="6" />
            <path d="M60 0L60 130" stroke="#FFFFFF" strokeWidth="8" />
            <path d="M190 0L190 130" stroke="#FFFFFF" strokeWidth="12" />
            <path d="M310 0L310 130" stroke="#FFFFFF" strokeWidth="8" />
            {/* Map Pin */}
            <g transform="translate(190 62)">
              <circle cx="0" cy="0" r="14" fill={demo.accentColor} opacity="0.3" />
              <path
                d="M0 0C-8 -10 -7 -20 0 -20S8 -10 0 0z"
                fill={demo.accentColor}
              />
              <circle cx="0" cy="-14" r="3.5" fill="#FFFFFF" />
            </g>
          </svg>
        </div>
        <div className="lc-content">
          <b>Localização & Atendimento</b>
          <span>{demo.location.address}</span>
          <span>{demo.location.hoursWeekday}</span>
          <span>{demo.location.hoursWeekend}</span>
          <span className="mb big" style={{ marginTop: "12px", display: "inline-block" }}>
            {demo.ctaText}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="mf">
        <b className="lg" style={{ fontSize: "14px", display: "block", marginBottom: "4px" }}>
          {demo.name}
        </b>
        {demo.footerNotice}
        <br />
        <span style={{ opacity: 0.85, fontStyle: "italic", marginTop: "4px", display: "block" }}>
          {demo.disclaimer}
        </span>
      </div>

      {/* Sticky Floating WhatsApp */}
      <div className="fw" title="Demonstração do botão que faz o telefone tocar">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.301-.15-1.78-.877-2.056-.977-.275-.1-.476-.15-.677.15-.2.3-.778.977-.954 1.178-.176.2-.351.226-.652.075s-1.272-.469-2.423-1.496c-.896-.8-1.5-1.789-1.676-2.09-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.677-1.632-.928-2.235-.245-.588-.494-.508-.677-.517-.175-.009-.376-.009-.577-.009-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.513 1.079 2.915 1.23 3.116c.15.2 2.124 3.243 5.145 4.548.718.311 1.279.497 1.716.636.723.23 1.381.197 1.902.12.58-.087 1.78-.728 2.03-1.431.25-.703.25-1.306.175-1.431-.075-.125-.276-.2-.577-.35z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.551 4.102 1.517 5.831L0 24l6.335-1.489C8.016 23.473 9.948 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.57-.498-5.056-1.365l-.362-.213-3.76.884.903-3.663-.233-.377C2.57 15.77 2 13.948 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
        </svg>
        <span>{demo.whatsappCta}</span>
      </div>
    </div>
  );
}
