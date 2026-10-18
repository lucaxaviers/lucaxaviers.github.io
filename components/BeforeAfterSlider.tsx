"use client";

import { useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="ba-slider-container" aria-label="Comparativo antes e depois do polimento e vitrificação">
      {/* Before Image (underneath) */}
      <Image
        src={beforeSrc}
        alt={beforeAlt}
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="ba-before-img"
        priority={false}
        loading="lazy"
      />
      <span className="ba-tag before">Antes: Opaco & Riscos</span>

      {/* After Image (clipped on top) */}
      <div
        className="ba-after-layer"
        style={{
          clipPath: `inset(0 0 0 ${sliderPos}%)`,
        }}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="ba-after-img"
          priority={false}
          loading="lazy"
        />
        <span className="ba-tag after">Depois: Vitrificado 9H</span>
      </div>

      {/* Divider line & handle */}
      <div className="ba-divider" style={{ left: `${sliderPos}%` }}>
        <div className="ba-handle" title="Arraste para comparar">
          ‹ ›
        </div>
      </div>

      {/* Range input for smooth drag on touch or mouse */}
      <input
        type="range"
        min={0}
        max={100}
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="ba-range-input"
        aria-label="Controle deslizante de antes e depois"
      />
    </div>
  );
}
