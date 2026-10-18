"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Navegação principal">
      <Link href="#topo" className="mk" aria-label="Lucas Xavier início">
        Lucas Xavier<i>.</i>
      </Link>
      <ul>
        <li>
          <Link href="#servicos">Serviços</Link>
        </li>
        <li>
          <Link href="#exemplos">Exemplos</Link>
        </li>
        <li>
          <Link href="#como-funciona">Como funciona</Link>
        </li>
        <li>
          <Link href="#projetos">Projetos</Link>
        </li>
        <li>
          <Link href="#planos">Planos</Link>
        </li>
        <li>
          <Link href="#duvidas">Dúvidas</Link>
        </li>
        <li>
          <Link className="btn btn-nav-contact" href="#contato" style={{ color: "#FFFFFF" }}>
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}
