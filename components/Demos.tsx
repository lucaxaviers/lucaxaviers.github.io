"use client";

import { useState, useRef } from "react";
import { DEMO_SITES } from "@/data/demos";
import DemoSiteView from "./DemoSiteView";

export default function Demos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDemo = DEMO_SITES[activeIndex];

  const deskScrollRef = useRef<HTMLDivElement>(null);
  const phoneScrollRef = useRef<HTMLDivElement>(null);

  const handleSelectTab = (index: number) => {
    setActiveIndex(index);
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
          Sites de exemplo entregues com acabamento de alto padrão. Role dentro das telas do computador e do celular para navegar ou veja o site completo da Vetora abaixo.
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
          <span className="demo-nav-hint">Role dentro das telas para navegar</span>
        </div>
        <div className="stage" id={`panel-${activeDemo.id}`} role="tabpanel" aria-labelledby={`tab-${activeDemo.id}`}>
          {/* Desktop Laptop Mockup */}
          <div className="dxw">
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
            <p className="lb">No computador (role dentro da tela)</p>
          </div>

          {/* Mobile Phone Mockup */}
          <div>
            <div className="phone">
              <div className="phone-island">
                <div className="phone-camera-lens" />
              </div>
              <div className="pscr" ref={phoneScrollRef} tabIndex={0} aria-label={`Navegação celular ${activeDemo.name}`}>
                <DemoSiteView demo={activeDemo} />
              </div>
            </div>
            <p className="lb" style={{ textAlign: "center" }}>
              No celular (role dentro do aparelho)
            </p>
          </div>
        </div>

        {/* Banner de Ação - Ver Site Completo da Vetora */}
        <div className="demo-actions-wrap">
          <div className="demo-actions-info">
            <h4>Quer navegar na Vetora em tela cheia?</h4>
            <p>
              Acesse a landing page completa com todas as fotos reais da clínica, tabela de valores, corpo clínico e botão de WhatsApp ativo.
            </p>
          </div>
          <a
            href="/exemplo/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-demo-view-full"
          >
            <span>Ver site completo da Vetora →</span>
          </a>
        </div>

        {/* Caption */}
        <p className="dcap">{segmentDescriptions[activeIndex]}</p>
      </div>
    </section>
  );
}
