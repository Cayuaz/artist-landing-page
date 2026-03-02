# Murinani - Official Artist Landing Page

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

> **Murinani** é uma Landing Page imersiva e responsiva construída para apresentar a identidade visual, lançamentos e filosofia do artista musical cuiabano Murinani. O projeto foca em alta performance, SEO otimizado e uma UI/UX com estética autêntica.

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Design & Identidade Visual](#design--identidade-visual)
- [Preview](#preview)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Decisões Técnicas](#decisões-técnicas-e-aprendizados)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Link do Projeto](#link-do-projeto)
- [Como Executar](#como-executar)
- [Licença](#licença)

---

## Sobre o Projeto

O desenvolvimento desta Landing Page teve como objetivo principal centralizar a presença digital do artista **Murinani** (Murilo Ernani). O site atua como um portfólio musical, integrando links diretos para plataformas de streaming (SoundCloud, YouTube) e redes sociais, além de apresentar a biografia e os últimos lançamentos como o álbum _"Siamês"_.

Mais do que uma página estática, o projeto busca transmitir a "vibe" do artista através de uma paleta de cores crua, tipografia estilizada e animações fluidas, criando uma experiência visceral e honesta.

---

## Design & Identidade Visual

Toda a interface foi desenhada do zero para atuar como uma tradução visual da filosofia do Murinani: _"Feridas se curam, cicatrizes não"_. O design sintetiza quem é o artista através de decisões estéticas intencionais:

- **Paleta de Cores Visceral:** A predominância do fundo escuro (`#1a1b1e`) cria uma atmosfera densa, intimista e noturna. O contraste fica por conta do tom terroso/avermelhado (`#B35A44`), que atua como um elemento de destaque, representando a crueza e a paixão das composições.
- **Tipografia com Atitude:** A escolha da fonte _Titillium Web_, frequentemente aplicada em itálico, caixa alta e com espaçamento largo entre as letras (`tracking-wider`), transmite um senso de urgência e movimento. Ela reflete a atitude descrita na biografia de "quebrar o retrovisor para enfrentar o que vem pela frente".
- **Referências e Subcultura:** Elementos visuais como o _sprite_ do personagem Knuckles com o balão de fala ("Esse ano é tudo nosso") trazem fortes referências da cultura da internet e dos anos 2000, ancorando a estética do artista de forma nostálgica e autêntica.
- **Minimalismo Direto ao Ponto:** Sem distrações visuais desnecessárias, a UI direciona a atenção do visitante para o que importa: a mensagem ("Paz entre nós, guerra entre os senhores") e a música. As animações feitas com Framer Motion complementam a experiência sem torná-la pesada, oferecendo interatividade enquanto mantém o tom poético.

---

## Preview

Você pode conferir o projeto em produção acessando: **[murinani.vercel.app](https://murinani.vercel.app/)**

> O design foi cuidadosamente elaborado para funcionar perfeitamente em dispositivos móveis, tablets e desktops.

---

## Tecnologias Utilizadas

### Frontend & Core

- **Framework:** Next.js (App Router)
- **Biblioteca UI:** React
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React

### Infraestrutura & Ferramentas

- **Fontes:** `next/font/local` (Fonte personalizada: Titillium Web)
- **Hospedagem / Deploy:** Vercel

---

## Funcionalidades

- **Apresentação de Lançamentos:** Destaque para novos álbuns e singles com links diretos para audição.
- **Integração de Mídia:** Cards dedicados para as músicas de destaque ("Primeira vista", "Weboceano", "Fica mais um pouco") com direcionamento para o SoundCloud.
- **Animações Interativas:** Efeitos de _hover_ em 3D e transições de entrada suaves em imagens e textos utilizando Framer Motion.
- **SEO & Metadados Avançados:** Configuração completa de OpenGraph e metadados no Next.js para garantir um compartilhamento perfeito nas redes sociais.
- **Navegação Âncora Suave:** Menu de navegação que rola suavemente para as sessões da página (Sobre, Músicas, Contato).

---

## Decisões Técnicas e Aprendizados

- **Next.js e SSR/SEO:** A escolha do Next.js se deu pela facilidade na manipulação de Metadados e otimização de imagens (`next/image`). Tratando-se de um artista independente, a indexação no Google (SEO) é crucial, e o Next.js lida com isso de forma nativa e eficiente.
- **Tailwind CSS para Estilização Ágil:** O uso do Tailwind permitiu a criação de um design system rápido e consistente diretamente nas classes. O projeto faz uso intenso de valores hexadecimais arbitrários (como `bg-[#1a1b1e]` e `text-[#B35A44]`) para respeitar fielmente a identidade visual proposta.
- **Framer Motion para "Dar Vida" à Página:** O uso de `motion.div` foi essencial para que o site não parecesse estático. Implementei efeitos de entrada por scroll e propriedades de perspectiva 3D (`rotateX`, `rotateY`) no componente do "Knuckles" e nas fotos do artista, o que aumenta drasticamente o engajamento visual sem comprometer a performance.
- **Componentização Semântica:** O código foi estruturado de forma modular (Hero, About, Musics, Releases, Social), garantindo que cada arquivo da pasta `components/home` tivesse uma responsabilidade única, facilitando muito a manutenção futura.

---

## Arquitetura do Projeto

```bash
artist-landing-page/
├── src/
│   ├── app/                # App Router do Next.js
│   │   ├── fonts/          # Fontes locais (TitilliumWeb)
│   │   ├── globals.css     # Estilos globais e Tailwind Directives
│   │   ├── layout.tsx      # Root Layout e configurações de SEO/OpenGraph
│   │   └── page.tsx        # Página inicial (Home) montando os componentes
│   │
│   └── components/         # Componentes isolados de UI
│       ├── header/
│       │   └── Header.tsx  # Navbar responsiva
│       └── home/
│           ├── About.tsx       # Sessão "Sobre o Artista"
│           ├── HeroSection.tsx # Sessão Inicial
│           ├── Knuckles.tsx    # Sessão de respiro visual com animação Framer
│           ├── Music.tsx       # Card de Música (Componente reaproveitável)
│           ├── Musics.tsx      # Container da lista de músicas
│           ├── Releases.tsx    # Destaque de lançamento (Siamês)
│           └── Social.tsx      # Links de contato e Redes Sociais
│
├── public/                 # Assets (Imagens, SVGs do Knuckles, Ícones das Redes)
├── tailwind.config.ts      # Configurações do Tailwind
└── next.config.ts          # Configurações do Next
```

---

## Como Executar

### Pré-requisitos

- Node.js (v18 ou superior)
- Gerenciador de pacotes (npm, yarn, pnpm ou bun)

### Passo a Passo

1. Clone este repositório:

   ```bash
   git clone [https://github.com/seu-usuario/artist-landing-page.git](https://github.com/seu-usuario/artist-landing-page.git)
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd artist-landing-page
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra o navegador e acesse **http://localhost:3000**

---

## Link do Projeto

- **Aplicação (Vercel):** [https://murinani.vercel.app/](https://murinani.vercel.app/)

---

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
