# 🚀 Portfólio — Lucas Xavier

<p align="center">
  <img src="https://img.shields.io/badge/status-disponível-16a34a?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/mobile--first-✓-0a0a0a?style=for-the-badge" alt="Mobile-first" />
  <img src="https://img.shields.io/badge/design%20system-mesclado-2563eb?style=for-the-badge" alt="Design System" />
</p>

<p align="center">
  <a href="https://lucaxaviers.github.io/" target="_blank">
    <img src="https://img.shields.io/badge/🌐%20Acessar%20Site-lucaxaviers.github.io-0a0a0a?style=for-the-badge&logo=vercel&logoColor=white" alt="Acessar site" />
  </a>
</p>

---

## 📖 Sobre o Projeto

Este é o meu **site de portfólio pessoal**, desenvolvido para apresentar minha trajetória como estudante de Engenharia de Software, minhas habilidades técnicas, certificações e projetos em destaque.

O design foi construído a partir de uma **mescla de referências visuais** de grandes marcas e sistemas de design:

- **xAI** – paleta quente (creme, sand, ink) e tipografia editorial com tracking negativo.
- **Dub** / **shadcn/ui** – cards com bordas hairline, sem sombras pesadas, grid clean.
- **Augen Pro** – navegação em pill flutuante e elementos arredondados.
- **Apple** – accent blue usado com parcimônia, tipografia como principal voz visual.

O resultado é uma interface **clean, moderna e mobile-first**, com foco em legibilidade, microinterações suaves e consistência visual.

---

## 🎨 Design System Resumido

| Elemento | Decisão |
| :--- | :--- |
| **Fundo** | `#fbfaf8` (creme quente) com grid de pontos e orbe azul suave. |
| **Tipografia** | Inter (display e corpo) + JetBrains Mono (mono). |
| **Cor primária** | `#2563eb` (accent blue) – usada apenas em links, datas e detalhes. |
| **Cor de ação** | `#0a0a0a` (ink) – botões primários pretos pill. |
| **Cards** | Borda `1px #e3ded3`, sem sombras, com hover suave. |
| **Nav** | Pill flutuante com blur, scroll horizontal no mobile, scrollspy ativo. |
| **Animações** | `reveal` com stagger, hover com `translateY` e `scale`, pulse dot de disponibilidade. |

---

## 🛠 Tecnologias Utilizadas

- **HTML5** – estrutura semântica.
- **CSS3** – variáveis CSS, grid, flexbox, backdrop-filter, keyframes, media queries mobile-first.
- **JavaScript** – IntersectionObserver (reveal + scrollspy), tema escuro com `localStorage`, stagger dinâmico.
- **Fonts** – Google Fonts (Inter + JetBrains Mono).
- **Ícones** – SVGs inline (Lucide-style), sem dependências externas.
- **Imagens** – GitHub avatar e skillicons.dev para ícones de tecnologia.

---

## 📂 Estrutura do Site

- **Hero** – foto, título, descrição, CTA, stats (projetos, certificados, tecnologias).
- **Stack** – organizada por categorias (Linguagens, Frameworks, Backend, Ferramentas).
- **Formação** – cards com cursos e instituições.
- **Certificações** – grid com status (concluído / em andamento).
- **Projetos** – cards com tags, descrição e link externo.
- **Contato** – links para e-mail, LinkedIn, GitHub, Instagram, WhatsApp.

---

## 📱 Mobile-first

O site foi construído com uma abordagem **mobile-first**:

- CSS base otimizado para telas pequenas (375px).
- `min-width` para tablet (640px) e desktop (960px).
- Navegação com scroll horizontal na pill (sem hambúrguer).
- Tap targets de `44px` em todos os elementos interativos.
- Sem overflow horizontal em nenhum viewport.

---

## ⚡ Animações e Interações

- **Reveal on scroll** – elementos aparecem com fade e translateY, com stagger delay.
- **Hover/active** – `translateY`, `scale`, mudança de cor e borda.
- **Pulse dot** – indicação de "disponível para estágio" com animação de anel.
- **Orbe de fundo** – gradiente azul com drift lento.
- **Tema escuro** – suporte nativo com `prefers-color-scheme` e toggle manual (armazenado no `localStorage`).
- **Acessibilidade** – `focus-visible`, `prefers-reduced-motion`, `aria-label` em elementos interativos.

---

## 🔧 Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/lucaxaviers/lucaxaviers.github.io.git