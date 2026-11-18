## Documentação técnica do Portfólio (React + Vite):

Portfólio em formato de carrossel de João Vitor de Oliveira Brito. Este documento explica como o código está organizado e o que cada arquivo faz.

## Como executar

1. Instale o Node.js (versão LTS).
2. Extraia o projeto e abra a pasta no VS Code.
3. No terminal, execute:

npm install
npm run dev

## Explicação geral do projeto:

1. Visão geral
O site é uma página única (SPA) com quatro slides navegáveis na horizontal: Início, Habilidades, Sobre mim e Experiências. Não há rotas, backend nem bibliotecas além do React.
Princípios adotados no projeto:
• Conteúdo separado da interface: todos os textos ficam em um único arquivo de dados.
• Componentes pequenos e reutilizáveis: um componente genérico de carrossel e um de abas atendem várias telas.
• Estado local simples: apenas useState, sem Context, Redux ou outras bibliotecas.
• CSS puro: um único arquivo, com variáveis CSS para cores e fontes.

2. Tecnologias
• React 19: biblioteca de interface.
• Vite 6: servidor de desenvolvimento e build.
• @vitejs/plugin-react: suporte a JSX e Fast Refresh.
• CSS puro: estilização.
• Google Fonts: Bricolage Grotesque (títulos) e Figtree (texto), carregadas no index.html.

3. Como rodar
É necessário ter o Node.js 18 ou superior.
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # gera a pasta dist para produção
npm run preview  # serve o build localmente

4. Estrutura de pastas
portfolio-joao/
├── index.html                 # HTML base, fontes e meta tags
├── package.json               # dependências e scripts
├── vite.config.js             # configuração do Vite
└── src/
    ├── main.jsx               # ponto de entrada da aplicação
    ├── App.jsx                # monta a lista de slides
    ├── data/
    │   └── portfolio.js       # todo o conteúdo do site
    ├── assets/
    │   └── profile.jpg        # foto de perfil
    ├── styles/
    │   └── index.css          # identidade visual e layout
    └── components/
        ├── Carousel.jsx       # carrossel (estado, teclado, toque)
        ├── Slide.jsx          # moldura de cada slide
        ├── Tabs.jsx           # abas reutilizáveis
        ├── IntroSlide.jsx     # slide Início
        ├── SkillsSlide.jsx    # slide Habilidades
        ├── SkillCard.jsx      # cartão de uma habilidade
        ├── AboutSlide.jsx     # slide Sobre mim
        ├── ExperienceSlide.jsx# slide Experiências
        └── ExperienceCard.jsx # cartão expansível de experiência

5. Arquitetura e fluxo de dados
Os dados descem sempre de cima para baixo, por props:
portfolio.js  →  App.jsx  →  Carousel  →  Slide  →  <XSlide>  →  Tabs / Cards
(dados)          (monta      (estado do    (moldura)   (conteúdo)   (peças
                  a lista)    slide atual)                         reutilizáveis)
-  portfolio.js exporta os dados (profile, skillGroups, aboutTabs, experiences).
-  App.jsx importa os dados e monta o array slides. Cada item diz qual componente renderizar e quais props ele recebe.
-  Carousel recebe slides, guarda qual está ativo e renderiza cada um dentro de um Slide.
-  Cada componente de slide usa componentes menores (Tabs, SkillCard, ExperienceCard).
O carrossel não conhece o conteúdo dos slides. Ele só recebe Component e props, por isso é possível adicionar ou remover slides sem alterá-lo.

6. Documentação arquivo por arquivo
6.1 index.html
Define lang="pt-BR", a meta description, o título da aba e o carregamento das fontes do Google Fonts. Contém a div#root onde o React monta a aplicação e carrega src/main.jsx como módulo.

6.2 src/main.jsx
Ponto de entrada. Importa o CSS global e renderiza <App /> dentro de <StrictMode> na div#root. O StrictMode ajuda a detectar problemas durante o desenvolvimento e não afeta o build de produção.

6.3 src/App.jsx
Monta o array slides e entrega ao Carousel. Cada slide tem este formato:
{
  id: 'habilidades',          // identificador único (usado em ids HTML e abas)
  label: 'Habilidades',       // texto exibido na aba do topo
  Component: SkillsSlide,     // componente que desenha o conteúdo
  props: { groups: skillGroups } // props específicas do slide
}

6.4 src/data/portfolio.js
Única fonte de conteúdo. Exporta quatro estruturas:
• profile: name, shortName, role, intro, email, linkedin. Usado no slide Início.
• skillGroups: lista de grupos { id, label, description, skills }. Cada habilidade é { name, level? }; o level é opcional (os comportamentais não têm nível).
• aboutTabs: lista de abas { id, label, title, text } do slide Sobre mim.
• experiences: lista de { id, title, org, period, summary, details[] }. Os details aparecem quando o cartão é expandido.
Importante: o campo id deve ser único dentro de cada lista, pois é usado como key do React e para montar ids HTML.

6.5 src/components/Carousel.jsx
Componente central. Props:
• slides (array): lista de { id, label, Component, props }.
O que ele faz:
• Estado: current (useState) guarda o índice do slide visível.
• goTo(index): muda o slide e limita o valor entre 0 e o último índice (useCallback).
• Teclado: um useEffect registra keydown na janela. As setas esquerda e direita mudam o slide e o listener é removido na limpeza do efeito.
• Toque: onTouchStart guarda a posição X inicial e onTouchEnd calcula a distância. Um arrasto de 50 px ou mais (SWIPE_DISTANCE) troca de slide.
• Animação: a div.carousel__track recebe transform: translateX(-current * 100%). A transição é feita pelo CSS.
• Layout: barra superior com marca e abas, área central (viewport) e rodapé com botões anterior/próximo e contador.
Cada slide recebe suas props específicas e também a função goTo, para poder navegar (por exemplo, o botão "Ver habilidades" do slide Início).

6.6 src/components/Slide.jsx
Moldura de cada slide. Props: id, active e children.
Slides que não estão visíveis recebem aria-hidden e o atributo inert. Isso impede que o foco do teclado entre em botões fora da tela e que leitores de tela leiam conteúdo escondido. O conteúdo fica dentro de .slide__inner, que centraliza e permite rolagem vertical em telas baixas.

6.7 src/components/Tabs.jsx
Abas genéricas e controladas. Props:
• tabs: lista de { id, label }.
• activeId: id da aba ativa.
• onChange(id): chamada ao clicar em uma aba.
• label: texto de aria-label do grupo de abas.
O componente não guarda estado: quem o usa decide qual aba está ativa. É usado em três lugares: na barra do topo (navegação do carrossel), em Habilidades e em Sobre mim. Usa os papéis ARIA tablist e tab, com aria-selected.

6.8 src/components/IntroSlide.jsx
Slide de apresentação. Props: profile e goTo. Mostra nome, cargo, texto de apresentação e três ações: ir para Habilidades (goTo(1)), enviar e-mail (mailto:) e abrir o LinkedIn em nova aba. A foto vem de src/assets/profile.jpg, importada pelo Vite, que cuida do caminho final no build.

6.9 src/components/SkillsSlide.jsx e SkillCard.jsx
SkillsSlide recebe groups. Seu estado activeId guarda o grupo selecionado (começa no primeiro). O grupo ativo é encontrado com find e suas habilidades são listadas com SkillCard.
SkillCard recebe name e level. A etiqueta de nível só é renderizada se level existir.
6.10 src/components/AboutSlide.jsx
Recebe tabs. O estado activeId controla qual aba é exibida (Interesses, Objetivos ou Formação), mostrando título e texto no bloco escuro.

6.11 src/components/ExperienceSlide.jsx e ExperienceCard.jsx
ExperienceSlide recebe items e renderiza um ExperienceCard para cada um, repassando todas as propriedades com {...item}.
ExperienceCard recebe title, org, period, summary e details. O estado open (useState) alterna a exibição da lista de detalhes. O cabeçalho é um <button> com aria-expanded, então funciona com teclado e leitor de tela. O ícone muda entre + e −.

7. Resumo do estado (useState)
• Carousel: current, índice do slide visível.
• SkillsSlide: activeId, categoria de habilidades selecionada.
• AboutSlide: activeId, aba de Sobre mim selecionada.
• ExperienceCard: open, se o cartão está expandido (um estado por cartão).
Como todos os slides ficam montados ao mesmo tempo (apenas deslocados na horizontal), o estado deles é preservado ao navegar. Por exemplo, se o usuário escolher a aba "Suporte técnico", sair e voltar, a aba continua selecionada.

8. Resumo das props
• Carousel: recebe slides.
• Slide: recebe id, active, children.
• Tabs: recebe tabs, activeId, onChange, label.
• IntroSlide: recebe profile, goTo.
• SkillsSlide: recebe groups (e goTo, não utilizada).
• AboutSlide: recebe tabs (e goTo, não utilizada).
• ExperienceSlide: recebe items (e goTo, não utilizada).
• SkillCard: recebe name, level.
• ExperienceCard: recebe title, org, period, summary, details.
O Carousel passa goTo a todos os slides por padronização. Só o IntroSlide o utiliza.

9. Estilos (src/styles/index.css)
9.1 Variáveis (identidade visual)
Definidas em :root. Para mudar o visual do site inteiro, altere estes valores:
• --ink (#101b33): azul-marinho, usado em texto, bordas e blocos escuros.
• --muted (#46536f): texto secundário.
• --paper (#e8edf4): fundo da página.
• --card (#ffffff): fundo dos cartões.
• --line (#c6d1e2): divisórias.
• --cobalt e --cobalt-dark: azul de destaque (botão principal, períodos).
• --marigold (#ffc83d): amarelo de destaque (etiquetas, bloco atrás da foto, ícone dos cartões).
• --font-display e --font-body: fontes de títulos e de texto, com alternativas do sistema.
• --radius: raio de borda dos cartões.

9.2 Organização do arquivo
O CSS segue a ordem da interface, com comentários separando cada bloco: base e reset, carrossel, abas, slide de apresentação, painéis (habilidades, sobre, experiências), responsivo e movimento reduzido. As classes seguem o padrão BEM simplificado (bloco__elemento e bloco--modificador), por exemplo xp-card__title e xp-card--open.

9.3 Pontos de atenção do layout
• Altura da tela: .carousel usa height: 100dvh com grade de três linhas (barra, conteúdo e controles).
• Animação do carrossel: .carousel__track usa display: flex e cada .slide ocupa flex: 0 0 100%; o deslocamento vem do transform aplicado pelo React.
• Rolagem: a rolagem vertical fica dentro de .slide__inner, e não na página, para telas baixas ou celulares na horizontal.
• Foto em arco: .intro__photo usa border-radius: 999px 999px 24px 24px e um pseudo-elemento ::before amarelo deslocado atrás.
• Celular: abaixo de 760 px o slide inicial vira uma coluna e a foto passa para cima.
• Movimento reduzido: com prefers-reduced-motion: reduce, as animações são desligadas.

10. Acessibilidade
• Todos os botões são elementos nativos (button e a), acessíveis por teclado.
• Foco visível via :focus-visible.
• Slides fora de vista usam inert e aria-hidden.
• O viewport usa aria-live="polite" para anunciar a troca de slide.
• Abas usam role="tablist", role="tab" e aria-selected; cartões usam aria-expanded.
• A foto tem texto alternativo.
• Animações respeitam a preferência de movimento reduzido.
