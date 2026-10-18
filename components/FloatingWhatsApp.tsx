"use client";

import { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappUrl = getWhatsAppUrl("Oi Lucas! Gostaria de um orçamento rápido para o meu negócio.");

  useEffect(() => {
    const handleScroll = () => {
      // Aparece discretamente após rolar além da Hero (350px)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!whatsappUrl || !isVisible) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="float-whatsapp"
      aria-label="Pedir orçamento rápido no WhatsApp de Lucas Xavier"
      id="btn-floating-whatsapp"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.551 4.102 1.517 5.831L0 24l6.335-1.489C8.016 23.473 9.948 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.57-.498-5.056-1.365l-.362-.213-3.76.884.903-3.663-.233-.377C2.57 15.77 2 13.948 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
      </svg>
      <span>Orçamento rápido</span>
    </a>
  );
}
