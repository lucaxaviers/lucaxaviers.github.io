# DESIGN.md — Portfólio & Estúdio Lucas Xavier

> **Manifesto Visual: Anti-AI Slop & Engenharia Tátil**  
> Este documento define a direção de design, tokens de engenharia e especificações de interface para o portfólio de Lucas Xavier (Paulínia, SP). O objetivo central é eliminar qualquer vestígio de estética genérica de IA ("AI slop") e entregar uma experiência com autoridade humana, ritmo assimétrico, texturas físicas sutis e foco em conversão local.

---

## 1. Auditoria Crítica: Padrões de "AI Slop" Detectados no Código Anterior

A auditoria no `site.html` e nos estilos preliminares identificou os seguintes vícios típicos de templates sintéticos:

| Elemento / Padrão | Sintoma no Código Anterior | Diagnóstico de "AI Slop" | Correção Anti-Slop (Adotada) |
|---|---|---|---|
| **Layout do Hero** | `text-align: center;` com avatar centralizado em 30px e botões centralizados. | A fórmula mais desgastada da web: "Hero centralizado + 2 CTAs empilhados". Parece gerado por prompt padrão de 2023. | **Hero Split-Screen Assimétrico**: Tipografia monumental à esquerda quebrando a linha de base, ancoragem de perfil e disponibilidade real à direita com micro-dados contextuais. |
| **Tipografia** | `-apple-system, BlinkMacSystemFont, Helvetica, Arial` sem personalidade. | Tipografia genérica de sistema sem intenção editorial. Passa a impressão de site inacabado ou boilerplate. | **Plus Jakarta Sans / Syne**: Títulos com traço display moderno, tracking apertado (-0.05em), contraste de peso intencional (900/800 nos títulos, 400/500 no corpo). |
| **Sombras e Halos** | `--glow: rgba(37, 99, 235, 0.22);` com `radial-gradient` gigante e difuso no topo. | Iluminação de "neon roxo/azul" falsa, comum em landing pages falsas de SaaS. Cria borrões visuais sem função. | **Eliminação de halos difusos**: Uso de divisórias hairline de 1px com precisão cirúrgica, grids técnicos milimétricos e superfícies táteis elevadas por contraste tonal. |
| **Escala de Raios** | Pílulas (`999px`) em botões, tags, nav e cards com `26px–30px`. | "Bubbly UI" de IA, onde tudo tem cantos ultra-arredondados parecendo plástico ou brinquedo. | **Escala de Raios Intencional**: `4px` para tags e micro-elementos; `8px` para botões (toque tátil de hardware); `14px` para cards estruturais. Pílulas restritas apenas a badges de status. |
| **Cards de Serviços & Processo** | Grid de 3 blocos simétricos em "Como Funciona" e caixas idênticas. | Repetição padronizada que cansa a leitura e não hierarquiza o que é mais importante para o cliente. | **Assimetria Funcional**: Bloco principal de Landing Pages com largura dominante (60%), integração de chat real e processo com linha cronológica física e entregáveis tangíveis. |
| **Superfícies** | Fundo 100% liso e artificial, sem grão ou fricção. | Aparência de tela estéril gerada por computador. | **Textura de Film Grain Tátil**: Camada imperceptível de granulação física (SVG noise a 2.5% de opacidade) e divisórias com traço milimétrico de 1px. |
| **Copywriting** | Frases vagas de introdução e botões genéricos. | Promessas vazias como "soluções completas" ou "alta performance". | **Tom Concreto e Humano**: Vocabulário direto de negócio local em Paulínia, prazos reais, sem clichês de IA. |

---

## 2. Decisão Arquitetural: HTML Estático vs. Next.js + TypeScript

> **Decisão:** **Migrar e consolidar em Next.js 15 + TypeScript (Vercel).**  
> **Justificativa em duas linhas:**  
> A infraestrutura em Next.js com `next/image` garante imagens WebP/AVIF com zero Layout Shift (CLS < 0.05) e Lighthouse > 95 no mobile, enquanto a modularização em TypeScript isola os dados reais dos 3 clientes fictícios em esquemas tipados e auditáveis.

---

## 3. Paleta de Cores e Tokens Semânticos

A paleta respeita a identidade de Lucas Xavier, eliminando gradientes roxos e adotando uma relação cromática sólida e inspirada em instrumentos industriais (Linear / Geist / Braun).

### Tokens Globais (CSS Custom Properties)

```css
:root {
  /* Superfícies & Base */
  --surface-ground: #F4F5F7;        /* Papel industrial levemente aquecido */
  --surface-card: #FFFFFF;          /* Cartão fosco */
  --surface-card-subtle: #F8F9FA;   /* Cartão secundário */
  --surface-raised: #FFFFFF;
  
  /* Divisórias & Linhas Hairline (1px) */
  --line-hairline: rgba(0, 0, 0, 0.08);
  --line-strong: rgba(0, 0, 0, 0.16);
  --line-contrast: #1A1A1A;

  /* Tipografia & Tinta */
  --ink-primary: #121316;          /* Preto quase absoluto, alta legibilidade */
  --ink-secondary: #525866;        /* Cinza neutro escuro (contraste 7:1) */
  --ink-tertiary: #868C98;         /* Cinza de apoio (contraste 4.6:1) */
  --ink-inverse: #FFFFFF;

  /* Cor Dominante & Acentos */
  --accent-primary: #2563EB;       /* Azul elétrico de conversão e foco */
  --accent-hover: #1D4ED8;         /* Estado ativo */
  --accent-subtle: #EFF6FF;        /* Fundo de destaque suave */
  --accent-live: #16A34A;          /* Verde de status "No ar / Aceitando projetos" */
  --accent-whatsapp: #25D366;      /* Verde WhatsApp oficial */
  
  /* Escala de Raios Intencionais (Adeus bolhas genéricas) */
  --radius-xs: 3px;                /* Código, badges mínimos */
  --radius-sm: 6px;                /* Micro-tags, inputs */
  --radius-md: 8px;                /* Botões (táteis, estilo tecla) */
  --radius-lg: 14px;               /* Cards estruturais, mockups */
  --radius-pill: 999px;            /* Exclusivo para status 'live' */

  /* Sombras Físicas Direcionais (Sem blur difuso de IA) */
  --shadow-key: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-elevation: 0 4px 12px -2px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04);
  --shadow-mockup: 0 24px 48px -12px rgba(18, 19, 22, 0.18), 0 1px 2px rgba(0, 0, 0, 0.08);
}

@media (prefers-color-scheme: dark) {
  :root {
    --surface-ground: #0D0E11;
    --surface-card: #15171C;
    --surface-card-subtle: #1B1E24;
    --surface-raised: #20232B;
    
    --line-hairline: rgba(255, 255, 255, 0.08);
    --line-strong: rgba(255, 255, 255, 0.15);
    --line-contrast: #F5F6F8;

    --ink-primary: #F5F6F8;
    --ink-secondary: #9DA4B2;
    --ink-tertiary: #68707D;
    --ink-inverse: #0D0E11;

    --accent-primary: #3B82F6;
    --accent-hover: #60A5FA;
    --accent-subtle: #182544;
    --accent-live: #22C55E;
    
    --shadow-mockup: 0 24px 48px -12px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(255, 255, 255, 0.05);
  }
}
```

---

## 4. Tipografia & Hierarquia Editorial

- **Família Display (Títulos & Destaques):** `Plus Jakarta Sans`, com fallback para `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`. Pesos: **ExtraBold (800)** e **Bold (700)**, tracking `-0.05em`.
- **Família Monospaçada (Código & Fichas Técnicas):** `JetBrains Mono`, `ui-monospace`, `Menlo`, `Consolas`.
- **Família de Leitura (Corpo & Descrições):** Sans geométrica humanizada, altura de linha `1.6`, kerning aperfeiçoado.

### Escala Modular:
- **Display 1 (Hero Title):** `clamp(3.2rem, 8.5vw, 6.5rem)` — Impacto escultural sem estourar mobile.
- **H2 (Seções):** `clamp(2rem, 4.5vw, 3.2rem)` — Ritmo firme e claro.
- **H3 (Cards & Serviços):** `1.35rem` — Negrito e direto.
- **Corpo Lead:** `1.2rem` — Frases curtas e humanas.
- **Micro-copy:** `0.85rem` — Detalhes técnicos, CRO, OAB, localidade.

---

## 5. Especificações de Seção & Arquitetura Visual

### Seção 1: Hero Assimétrico (Split Studio)
- **Lado Esquerdo (62%):**
  - Badge de status tátil: ponto pulsante verde + *"Aceitando 2 novos projetos em Paulínia e região"*.
  - Headline afiada: **"Seu negócio no Google, e o cliente no seu WhatsApp."**
  - Sub-headline humanizada: *"Faço sites e landing pages rápidos para quem presta serviço. Do primeiro papo à publicação, é comigo."*
  - Grupo de CTAs tangíveis com peso: Botão de ação direta WhatsApp + Botão secundário vazado com micro-borda de 1px.
- **Lado Direito (38%):**
  - Card de estúdio com foto de Lucas Xavier (enquadramento editorial, luz natural, sem filtro plastificado de IA).
  - Micro-tabela técnica:
    - *Origem:* Paulínia, SP
    - *Especialidade:* Landing Pages de Conversão
    - *Contato:* `lucas.xavier.pln@gmail.com`
    - *Garantia:* Sem mensalidade oculta / Código próprio.

### Seção 2: Bento Grid de Serviços Assimétrico
- **Landing Page (Card Âncora - 60% largura):**
  - Visual de conversa real com cliente no WhatsApp (balão de pergunta + balão de confirmação de agendamento em horário real).
  - Foco: "Uma página só, feita para o visitante virar mensagem no seu WhatsApp."
- **Site Institucional (Card Elevado - 40% largura):**
  - Prévia de arquitetura de 5 páginas essenciais (Início, Sobre, Serviços, Equipe, Contato).
- **Manutenção & Cuidado Contínuo (Card Dividido):**
  - Status em tempo real "Site sempre no ar e monitorado".
- **Sem Agência no Meio (Card Local):**
  - Selo de atendimento direto 1:1 pelo desenvolvedor em Paulínia.

### Seção 3: Showcase dos 3 Sites de Exemplo (Mockup Engenheirado)
Apresentação com tablist acessível via teclado (`ArrowLeft` / `ArrowRight`):
1. **Sorriso Prime (Odontologia):**
   - Estética Airbnb: paleta verde-água (`#0E9F8E`), fotos de consultório acolhedor, equipe fictícia com CRO-SP 000000, lista de tratamentos e depoimentos.
   - Rigor CFO: sem fotos de "antes e depois" de pacientes e sem promessas sensacionalistas.
2. **Almeida & Costa (Advocacia):**
   - Estética Apple/Sóbria: azul-marinho profundo (`#1E2A44`) com acento dourado discreto.
   - Rigor OAB: caráter informativo, áreas de atuação (Família, Trabalhista, Cível), equipe com OAB/SP 000.000.
3. **Auto Brilho (Estética Automotiva):**
   - Estética Red Bull/iFood: dark mode potente com laranja vibrante (`#F97316`).
   - **Slider Interativo Arrastável de Antes & Depois**: O mesmo carro com pintura opaca/riscada transformando-se em espelhamento vitrificado 9H.

### Seção 4: Como Funciona (Linha de Produção Tangível)
Três etapas com prazos concretos e sem jargões:
- **Passo 01 — Diagnóstico & Conteúdo:** *"A gente conversa pelo WhatsApp e você me manda seu logo e fotos."*
- **Passo 02 — Layout & Link de Teste:** *"Eu mostro o site num link provisório navegável para você aprovar ou pedir ajustes."*
- **Passo 03 — Domínio & Publicação:** *"Você aprova, eu coloco no ar com HTTPS no seu domínio próprio."*

### Seção 5: Trabalho Real no Ar
- **Imóveis Lucas Xavier (`imoveislucasxavier.com.br`):**
  - Badge *"Em Produção"*, stack em Next.js + TypeScript + Firebase.
- **Projetos Acadêmicos:**
  - *MesclaInvest* (Flutter, Dart, Firebase) e *NotaDez* (Node.js, TypeScript, MySQL).

### Seção 6: Bancada de Código & Stack Restrita
Uso estrito e exclusivo das tecnologias permitidas:
`TypeScript`, `JavaScript`, `Python`, `C`, `Dart`, `HTML`, `CSS`, `Next.js`, `Node.js`, `Express`, `Flutter`, `Supabase`, `Firebase`, `MySQL`, `Git`, `Vercel`, `Power BI`, `Excel`.
- Janela de código real mostrando o componente de WhatsApp limpo e acessível.

### Seção 7: Planos Transparentes (Variáveis Editáveis)
- Valores desacoplados no arquivo `data/plans.ts` para fácil alteração a qualquer momento.
- Destaque sutil no plano *"Landing Page"* (Mais Escolhido por autônomos locais).
- Regra de pagamento destacada: *"50% na contratação e 50% após aprovação final no ar"*.

### Seção 8: Contato Direto & Respeito à LGPD
- Zero formulários intrusivos de captura de dados.
- Link direto para WhatsApp (`NEXT_PUBLIC_WHATSAPP`) com mensagem de abertura amigável.
- Endereço de e-mail verificado: `lucas.xavier.pln@gmail.com` (com **pln**).

---

## 6. Acessibilidade (WCAG 2.2 Nível AA) & Performance (Core Web Vitals)

1. **Contraste de Cor:** Toda combinação texto/fundo auditada para taxa superior a `4.5:1` (texto normal) e `7:1` (títulos).
2. **Navegação por Teclado:** Foco visível com offset de 3px (`outline: 2px solid var(--accent-primary)`). Abas de demonstração com papéis ARIA completos (`role="tablist"`, `aria-selected`, `aria-controls`).
3. **Imagens Otimizadas:** Todas as fotografias em WebP nativo geradas em versões responsivas (800w e 1600w), com atributos `alt` descritivos e sem carregamento de scripts externos.
4. **Respeito ao Usuário:** `@media (prefers-reduced-motion: reduce)` desativa transições e animações de scroll.
