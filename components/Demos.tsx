"use client";

import { useState, useRef } from "react";
import { DEMO_SITES } from "@/data/demos";
import DemoSiteView from "./DemoSiteView";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Demos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteractive, setIsInteractive] = useState(false);
  const activeDemo = DEMO_SITES[activeIndex];

  const deskScrollRef = useRef<HTMLDivElement>(null);
  const phoneScrollRef = useRef<HTMLDivElement>(null);

  const handleSelectTab = (index: number) => {
    setActiveIndex(index);
    setIsInteractive(false);
    if (deskScrollRef.current) deskScrollRef.current.scrollTop = 0;
    if (phoneScrollRef.current) phoneScrollRef.current.scrollTop = 0;
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      const next = (index + 1) % DEMO_SITES.length;
      handleSelectTab(next);
    } else if (e.key === "ArrowLeft") {
      const prev = (index - 1 + DEMO_SITES.length) % DEMO_SITES.length;
      handleSelectTab(prev);
    }
  };

  const segmentDescriptions = [
    "Clínica Veterinária (Vetora): fotografias reais da estrutura e da equipe, tabela transparente de preços, acolhimento cat-friendly e agendamento direto no WhatsApp.",
    "Clínica Odontológica: avaliações reais, corpo clínico com CRO-SP, tratamentos com preço de partida, fotos de estrutura e botão de WhatsApp sempre à mão.",
    "Advocacia & Consultoria: visual sóbrio e imponente, áreas de atuação claras, fotos executivas da equipe, sem promessas de resultado (ética da OAB) e agendamento de consulta.",
    "Estética Automotiva: tema escuro moderno, slider arrastável de antes e depois (polimento espelhado vs. riscos), vitrificação 9H com garantia e orçamento direto no WhatsApp.",
  ];

  return (
    <section id="exemplos" className="reveal-on-scroll">
      <div className="w">
        <h2>Veja como o seu site pode ficar.</h2>
        <p className="sub">
          Projetos entregues com acabamento de alto padrão. Interaja com a demonstração abaixo ou veja como adaptamos essa estrutura para o seu negócio.
        </p>

        {/* Tab Controls */}
        <div className="dtabs" role="tablist" aria-label="Sites de exemplo de clientes">
          {DEMO_SITES.map((demo, idx) => (
            <button
              key={demo.id}
              role="tab"
              aria-selected={idx === activeIndex}
              aria-controls={`panel-${demo.id}`}
              id={`tab-${demo.id}`}
              className="dt"
              onClick={() => handleSelectTab(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
            >
              {demo.id === "vet" && "Clínica Veterinária"}
              {demo.id === "dent" && "Clínica odontológica"}
              {demo.id === "law" && "Advocacia"}
              {demo.id === "car" && "Estética automotiva"}
            </button>
          ))}
        </div>

        {/* Mockups Stage */}
        <div className="demo-stage-header">
          <span className="demo-live-badge">Site de exemplo · Imagens e dados ilustrativos</span>
          <span className="demo-nav-hint">
            {isInteractive ? "Navegação interna liberada" : "Clique no modelo para interagir e navegar"}
          </span>
        </div>

        <div className="stage-outer-wrap">
          <div
            className={`stage ${!isInteractive ? "is-locked" : "is-active"}`}
            id={`panel-${activeDemo.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeDemo.id}`}
            onClick={() => {
              if (!isInteractive) setIsInteractive(true);
            }}
          >
            {/* Desktop Laptop Mockup */}
            <div className="dxw desk-mockup-wrapper">
              <div className="laptop-wrap">
                <div className="laptop-screen">
                  <div className="laptop-camera" />
                  <div className="bar">
                    <s />
                    <s />
                    <s />
                    <em>https://{activeDemo.url}</em>
                  </div>
                  <div className="dsc" ref={deskScrollRef} tabIndex={0} aria-label={`Navegação computador ${activeDemo.name}`}>
                    <DemoSiteView demo={activeDemo} />
                  </div>
                </div>
                <div className="laptop-base">
                  <div className="laptop-notch-cutout" />
                </div>
              </div>
              <p className="lb">Versão Computador (clique para interagir)</p>
            </div>

            {/* Mobile Phone Mockup */}
            <div className="phone-mockup-wrapper">
              <div className="phone">
                <div className="phone-island">
                  <div className="phone-camera-lens" />
                </div>
                <div className="pscr" ref={phoneScrollRef} tabIndex={0} aria-label={`Navegação celular ${activeDemo.name}`}>
                  <DemoSiteView demo={activeDemo} />
                </div>
              </div>
              <p className="lb" style={{ textAlign: "center" }}>
                Versão Celular (toque para navegar)
              </p>
            </div>
          </div>

          {/* Protective Scroll Guard Overlay for Touch / Mobile Screens */}
          {!isInteractive ? (
            <div className="demo-scroll-guard" onClick={() => setIsInteractive(true)}>
              <div className="demo-guard-content">
                <div className="demo-guard-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  <span className="demo-guard-text-desk">Clique no modelo para interagir e navegar</span>
                  <span className="demo-guard-text-mob">Toque para interagir com o site de exemplo</span>
                </div>
                <span className="demo-guard-sub">Liberar navegação interna do modelo</span>
              </div>
            </div>
          ) : (
            <div className="demo-unlocked-dock">
              <span className="demo-unlocked-status">
                <span className="live-pulse-dot" />
                Interação interna ativa
              </span>
              <button
                type="button"
                className="btn-relock-demo"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsInteractive(false);
                }}
              >
                Travar para rolar a página
              </button>
            </div>
          )}
        </div>

        {/* Barra de Conversão Contextual com WhatsApp Dinâmico */}
        <div className="demo-conversion-bar">
          <div className="demo-conv-content">
            <span className="demo-conv-badge">Pronto em 3 a 7 dias</span>
            <h4>Gostou desse nível de acabamento?</h4>
            <p>
              Adapto essa estrutura com a sua marca, cores e informações em até 5 dias.
            </p>
          </div>
          <div className="demo-conv-actions">
            <a
              href={getWhatsAppUrl(`Oi Lucas! Gostei muito do site de exemplo do seu portfólio e quero saber quanto fica um nesse estilo pro meu negócio.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-conv-cta"
              id={`cta-demo-whatsapp-${activeDemo.id}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.551 4.102 1.517 5.831L0 24l6.335-1.489C8.016 23.473 9.948 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.57-.498-5.056-1.365l-.362-.213-3.76.884.903-3.663-.233-.377C2.57 15.77 2 13.948 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              <span>Quero um site nesse estilo</span>
            </a>
            <a href="#planos" className="btn-conv-plan-link">
              <span>Ver planos e valores ↓</span>
            </a>
          </div>
        </div>

        {/* Caption */}
        <p className="dcap">{segmentDescriptions[activeIndex]}</p>
      </div>
    </section>
  );
}
