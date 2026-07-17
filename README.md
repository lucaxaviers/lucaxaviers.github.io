# lucaxaviers.github.io

Portfólio pessoal de **Lucas Xavier** — estudante de Engenharia de Software na PUC-Campinas e desenvolvedor Full Stack.

🔗 **Site no ar:** [lucaxaviers.github.io](https://lucaxaviers.github.io/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![No Framework](https://img.shields.io/badge/framework-nenhum-ff5a1f?style=flat-square)
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-222222?style=flat-square&logo=github)

---

## Sobre o projeto

Site de página única (one-page) que reúne formação acadêmica, certificações técnicas, projetos em destaque e contato. Todo o projeto vive em um único arquivo [`index.html`](index.html) — sem build step, sem dependências de pacote, sem framework. HTML, CSS e JavaScript puros.

## Identidade visual

O design segue uma linguagem bold e editorial, inspirada em sites modernos de marca pessoal (tipografia grande, tipo outline, faixas de movimento), adaptada ao contexto de um portfólio técnico:

| Elemento | Escolha |
|---|---|
| Paleta | Preto quase-puro (`#0a0a0b`) + laranja sinal (`#ff5a1f`) como accent, com contraparte clara ("modo dia") |
| Tipografia | **Anton** (display/hero) · **Unbounded** (títulos e UI) · **Manrope** (texto corrido) · **Space Mono** (labels e dados) |
| Assinatura | Texto outline no nome, numerais fantasma atrás dos títulos de seção e badge circular giratório — todos reaproveitando a mesma técnica de contorno (stroke), amarrando os elementos num único sistema visual |

## Funcionalidades

- **Tema claro/escuro** com transição animada em círculo (View Transitions API), persistido em `localStorage`
- **Menu mobile** (hambúrguer animado) — a navegação não desaparece em telas pequenas
- **Scroll reveal** das seções via `IntersectionObserver`
- **Marquee** (faixa em loop infinito) entre o hero e o conteúdo
- **Contadores animados** nas estatísticas do hero, disparados ao entrar na viewport
- **Link ativo na navegação** conforme a seção visível
- **Barra de progresso de leitura** no topo da página
- **Cursor customizado** (ponto + anel) em dispositivos com ponteiro de precisão, com fallback seguro para o cursor nativo
- **Tilt 3D** na foto do hero, seguindo o cursor, com revelação de cor (duotone → colorido) na interação
- **Botões magnéticos** nos CTAs principais
- Tooltip touch-friendly na grade de tecnologias (toque para revelar o nome no mobile)
- Respeita `prefers-reduced-motion` em todas as animações e efeitos de cursor/tilt/contadores

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 (custom properties, Grid, Flexbox, `@supports`, `prefers-reduced-motion`)
- JavaScript vanilla (sem build tools, sem dependências)
- [Google Fonts](https://fonts.google.com/) — Anton, Unbounded, Manrope, Space Mono
- [skillicons.dev](https://skillicons.dev/) — ícones da stack tecnológica

## SEO & Performance

- Meta description, Open Graph e `theme-color`
- `link rel="canonical"` e dados estruturados **JSON-LD** (`schema.org/Person`)
- `width`/`height` explícitos em todas as imagens (evita layout shift)
- `loading="lazy"` nos ícones da stack e `fetchpriority="high"` na foto do hero
- `preconnect` para as origens de fontes e ícones

## Acessibilidade

- Estados de foco visíveis (`:focus-visible`) em links e botões
- `aria-hidden`, `aria-expanded` e `aria-label` nos elementos interativos/decorativos
- Contraste de cores verificado nos dois temas
- Todas as animações, o cursor customizado e o tilt são desativados quando o sistema pede movimento reduzido

## Estrutura do projeto

```
.
├── index.html   # site completo — markup, estilos e scripts
└── README.md
```

## Rodando localmente

Não há build nem dependências — basta servir o arquivo estaticamente:

```bash
# Python
python -m http.server 8000

# ou Node
npx serve .
```

Depois acesse `http://localhost:8000`.

## Conteúdo

- **Formação** — Engenharia de Software (PUC-Campinas, 2025–2028), Técnico em Informática e Técnico em Logística (Colégio Técnico Bento Quirino)
- **Certificações** — Power BI & Análise de Dados, Excel 2021, Redes Sociais/Aplicativos/Produtividade, Montagem e Manutenção de PCs, Marketing Digital I e II (Microlins) e Inglês Básico (CNESIS, em andamento)
- **Projetos** — [Site Imóveis Lucas Xavier](https://imoveislucasxavier.com.br) (plataforma imobiliária em produção) e [MesclaInvest](https://github.com/lucaxaviers/mesclainvest) (app mobile com Flutter + Firebase)

## Contato

- [E-mail](mailto:lucas.xavier.pln@gmail.com)
- [LinkedIn](https://linkedin.com/in/lucas-rodrigues-xavier-ti)
- [GitHub](https://github.com/lucaxaviers)
- [Instagram](https://instagram.com/lucaxaviers)
- [WhatsApp](https://wa.me/5519981400709)

---

© 2026 Lucas Rodrigues Xavier — Campinas / Paulínia, SP
