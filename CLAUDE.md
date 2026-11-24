# iMatoGrosso

Front-end do portal de notícias imatogrosso.com.br (cliente do Luiz). Entregue ao desenvolvedor que monta o backend em WordPress. Detalhes técnicos e mapa para o WordPress: `README.md`.

## Como trabalhar

- Luiz não é desenvolvedor: passo a passo clicável, sem jargão. Proposta ou protótipo antes de implementar; confirmação curta depois de cada entrega.
- Não mandar arquivos para ele: tudo vai para este repositório; para revisar, página publicada (link).
- HTML, CSS e JavaScript puros, sem framework e sem build. Referências em React/Tailwind/shadcn são refeitas em JS puro.
- Referências de outros sites inspiram, não se copiam.

## Decisões aprovadas

- **19/11/2026** — Home: mesmo menu do site atual (Home, Policial, Notícias, Cidades, Geral, Esportes) e mesmos formatos de banner (728×90 no cabeçalho, 2× 300×250 com "Mais lidas" no meio).
- **19/11/2026** — Paleta oficial só `#000000 #232323 #737373 #F5F5F3 #FFFFFF`; nada de vermelho. Fios finos = `#737373` com transparência.
- **19/11/2026** — Ícone oficial do "i" nos títulos das seções e como favicon. **Sem o "i" no menu.**
- **19/11/2026** — Fontes: Poppins (títulos) e Libre Franklin (textos), em teste. O código enviado pelo Luiz dizia "libre"; usada a Libre Franklin.
- **19/11/2026** — Menu branco em abas (realce que segue o mouse, traço que desliza até o ativo), a partir da referência "vercel-tabs".
- **19/11/2026** — Seletor de tema sistema/claro/escuro na barra do topo, a partir da referência "ThemeSwitcher". **Substituído em 21/11/2026** pelo botão claro/escuro animado (abaixo).

- **19/11/2026** — Página da notícia (`noticia.html`): trilha, chapéu, título, linha fina, autor/fonte, data, tempo de leitura, compartilhar (WhatsApp, Facebook, X, copiar link), foto com crédito, tamanho do texto, intertítulos e citações, assuntos, anterior/próxima, "Leia também", comentários e barra de leitura no topo. Banners 300×250 na lateral e no meio do texto **aprovados em 19/11/2026** (além do 728×90 do topo).
- **19/11/2026** — Manchete da home: foto grande na mesma altura da coluna de 3 destaques; miniaturas dos destaques em 16:9 (horizontal), com selo "Vídeo" quando a notícia é vídeo. Chapéus sem o "i" (Policial, Geral).
- **19/11/2026** — Manchete: **sem linha fina**; título sobre a foto, compacto, só na faixa de baixo (cerca de 1/3 da foto, até 3 linhas). No celular o título fica embaixo da foto.

- **19/11/2026** — Política de Privacidade (`privacidade.html`, LGPD), com índice que acompanha a leitura. Link discreto no rodapé, ao lado da assinatura da AstraVox, **só o ícone**, sem texto (`astravox-icone.svg`, link www.astravox.com.br em nova aba). Aviso com link para a política no formulário de comentários.
- **19/11/2026** — Rodapé: logo 25% menor (180 px) e texto em duas linhas ("…Rondonópolis," / "de Mato Grosso, do Brasil e do mundo.").
- **19/11/2026** — Hover em todos os botões e links clicáveis (ver o fim de `style.css`): botões escurecem e sobem 1 px, ícones ganham fundo redondo, "Ver tudo" com seta que anda, campos de formulário escurecem a borda; toque afunda o botão.
- **19/11/2026** — Página de Contato própria (`contato.html`): formulário com assunto (pauta, anunciar, correção, outro), e-mails de atendimento e redação, endereço com mapa e redes. **Nenhum link aponta mais para o site antigo** (topo, ícone de e-mail, rodapé, política).
- **19/11/2026** — Banner do topo no celular: o 728×90 **só encolhe** (sem formato próprio para celular).
- **19/11/2026** — Política de Privacidade com **dados fictícios** por enquanto (iMatoGrosso Comunicação Ltda., CNPJ 00.000.000/0001-00, encarregado "Fulano de Tal", privacidade@imatogrosso.com.br). Trocar pelos reais antes de publicar.
- **19/11/2026** — Página da editoria (`editoria.html?e=policial|noticias|cidades|geral|esportes`, uma página para todas): título grande com o ícone, descrição, filtro por cidade, destaque igual ao da home (foto + 3), lista "Mais de …" com "Carregar mais notícias", lateral com 300×250 e Mais lidas. Notícia sem foto (comum em Policial e Esportes no site atual) mostra o ícone do "i" sobre cinza. Menu, "Ver tudo" e rodapé apontam para ela.
- **20/11/2026** — Busca do menu refeita a partir da referência "expanding search dock" (em JS puro): lupa redonda que se abre num campo de 320 px com lupa, texto e X; X ou Esc fecham e limpam; no celular o campo ocupa a largura toda. **Cantos retos** (o estilo do site não é arredondado).
- **20/11/2026** — Linhas de divisão das seções finas (1 px preto, antes 3 px): títulos das seções, faixa abaixo da manchete, destaque da editoria e canais do contato.
- **20/11/2026** — **Nada arredondado no portal**: todos os botões, filtros, assuntos, campos, seletor de tema e selos com cantos retos. Botões de compartilhar e redes sociais em quadrados com a mesma linha fina da busca (1 px cinza claro; escurece no mouse).
- **21/11/2026** — Redes sociais do iMatoGrosso (links do site atual: Facebook profile.php?id=61579282092124 e Instagram @imatogrossomt): ícones no topo, botões com ícone no rodapé ("Siga-nos"), bloco "Siga o iMatoGrosso" na lateral da notícia e da editoria, e botões na página de Contato. **No menu, quadrados de Facebook e Instagram ao lado da lupa** (some abaixo de 820 px; no celular ficam no topo). Todos abrem em nova aba.
- **21/11/2026** — **Botão claro/escuro animado é o padrão de tema do portal** (referência "AnimatedThemeToggle/SolarSwitch", refeita em JS/CSS puros): quadrado de 48 px com linha fina no menu, entre as redes sociais e a lupa (no celular fica ao lado da lupa); o sol se desfaz e a lua se desenha. Sem escolha salva, segue o aparelho; a escolha fica no navegador (`imt-tema`). O seletor de 3 opções da barra do topo saiu.
- **21/11/2026** — **Todos os ícones de botão se desenham** (mesma técnica do botão claro/escuro): ícones de traço (Facebook, Instagram, e-mail, lupa, WhatsApp, X, link, fechar) com `pathLength=1`; ao passar o mouse, focar pelo teclado ou tocar, o traço se redesenha (keyframe `desenha` no fim do `style.css`). O X e a lupa da busca se desenham ao abrir o campo.
- **21/11/2026** — Celular (até 480 px): cartões de notícia com foto à esquerda e chapéu, título e hora juntos à direita, com linha fina entre eles; menu fixo sem o logo pequeno (até 600 px); títulos de seção, destaques, Mais lidas e título da notícia um pouco menores.
- **21/11/2026** — Filtros de cidade sempre na **mesma ordem** em todas as páginas: Todas, Cuiabá, Várzea Grande, Rondonópolis, Interior, Mato Grosso, Brasil, Mundo (`ORDEM_CID` no `main.js`). Cidades do interior (Sinop, Barra do Garças…) entram no filtro "Interior"; o chapéu continua com o nome da cidade.
- **24/11/2026** — **Página de busca** (`busca.html?s=termo`): campo grande, "N notícias encontradas para …", filtro por editoria com contagem (na ordem do menu), resultados com a palavra destacada (acha com ou sem acento), "Carregar mais resultados", ajuda quando não acha nada (dicas + editorias), lateral 300×250 e Mais lidas. A lupa do menu leva para ela.
- **24/11/2026** — **Página 404** (`404.html`, o Netlify mostra sozinho em qualquer endereço que não existe): "4 [ícone i] 4", "Página não encontrada", campo de busca, "Voltar para a Home", atalhos das editorias e "Últimas notícias".
- **24/11/2026** — Revisão completa no celular (320, 375 e 414 px, claro e escuro, 9 telas): alvos de toque com no mínimo 40–44 px (ícones do topo, A−/A+, e-mails do contato, Mais lidas, rodapé), contraste AA no menu e no rodapé, ponta do menu esmaecida para indicar que arrasta, Mais lidas e "Siga" na largura toda, índice da política em duas colunas e tabela em 15 px.
- **24/11/2026** — Front-end entregue ao desenvolvedor do WordPress: convite de acesso ao repositório enviado pelo Luiz; ponto de partida dele é a seção "Comece aqui" do `README.md`. Daqui para frente, mudanças visuais combinadas com ele (avisar o que mudou).

## Em aberto

- Dados reais do controlador na Política de Privacidade (hoje fictícios).

- Posição de anúncio com botão "x" que existe no site atual (vazia hoje).

## Publicar

- Netlify: projeto **imatogrosso** (id `e3bf60f8-3272-4c54-adab-4a4d11e203f3`, time "luizpodecrer"), endereço https://imatogrosso.netlify.app — aberto para visitantes (sem login), é o link que vai para o cliente.
- Prévia para o Luiz antes do cliente (quando ele pedir "me mostre antes"): artifact privado https://claude.ai/artifact/4FKEqtoYX9EuaQ4THZpwA6 (slug `1a4b1199-0367-49b7-836b-6e80ae991bff`), publicado com os arquivos do repositório; o Netlify só depois da aprovação.
- O Netlify **não** está ligado ao GitHub: a cada entrega, enviar ao GitHub e publicar de novo pela ferramenta do Netlify (`deploy-site`, rodando o comando dentro desta pasta). `netlify.toml` publica a raiz sem build e esconde `CLAUDE.md`, `README.md` e `netlify.toml`.

## Acabamento das telas (guia "Sites com cara de R$ 10 mil", 24/11/2026)

Pedido do Luiz: toda tela, página ou protótipo novo deste projeto segue estes quatro passos. Eles **somam** às regras deste arquivo; quando houver conflito, valem a identidade visual e as decisões já aprovadas do projeto.

1. **Referências visuais.** Quando o Luiz mandar imagens (Pinterest, prints de sites) ou links, usar como **direção**: espaçamento generoso, títulos grandes, paleta contida. Nunca copiar logos, fotos ou textos de outros sites.
2. **Regras de design** (espaçamento, tipografia, hierarquia, movimento, interação): usar as skills **Design Skill (Emil Kowalski)** (`emil-design-eng` em `.claude/skills/`) e **Impeccable (Paul Bakaus)** (plugin ligado em `.claude/settings.json`, carrega ao abrir a sessão). No fim de cada entrega visual, rodar a revisão (`/critique` ou `/audit`) e o acabamento (`/polish`) do Impeccable.
3. **Figma.** O conector do Figma está ligado na conta do Luiz (plano gratuito, leituras limitadas por mês): pedir o link do quadro (frame) específico, ler o desenho e usar as cores e fontes dele, adaptando ao que o projeto já usa.
4. **Teste no navegador em loop até não sobrar problema.** Abrir a tela no navegador de teste (Playwright), tirar prints em **375 px, 1366 px e 1920 px** (e nos temas claro e escuro, se houver); testar cliques, menus, botões, formulários e teclado; corrigir o que quebrou e **repetir até uma rodada sair sem erro**. Só então mostrar ao Luiz.
