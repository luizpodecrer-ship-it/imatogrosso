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
- **19/11/2026** — Seletor de tema sistema/claro/escuro na barra do topo, a partir da referência "ThemeSwitcher".

- **19/11/2026** — Página da notícia (`noticia.html`): trilha, chapéu, título, linha fina, autor/fonte, data, tempo de leitura, compartilhar (WhatsApp, Facebook, X, copiar link), foto com crédito, tamanho do texto, intertítulos e citações, assuntos, anterior/próxima, "Leia também", comentários e barra de leitura no topo. Banners 300×250 na lateral e no meio do texto **aprovados em 19/11/2026** (além do 728×90 do topo).
- **19/11/2026** — Manchete da home: foto grande na mesma altura da coluna de 3 destaques; miniaturas dos destaques em 16:9 (horizontal), com selo "Vídeo" quando a notícia é vídeo. Chapéus sem o "i" (Policial, Geral).
- **19/11/2026** — Manchete: **sem linha fina**; título sobre a foto, compacto, só na faixa de baixo (cerca de 1/3 da foto, até 3 linhas). No celular o título fica embaixo da foto.

- **19/11/2026** — Política de Privacidade (`privacidade.html`, LGPD), com índice que acompanha a leitura. Link discreto no rodapé, ao lado da assinatura da AstraVox, **só o ícone**, sem texto (`astravox-icone.svg`, link www.astravox.com.br em nova aba). Aviso com link para a política no formulário de comentários.
- **19/11/2026** — Rodapé: logo 25% menor (180 px) e texto em duas linhas ("…Rondonópolis," / "de Mato Grosso, do Brasil e do mundo.").
- **19/11/2026** — Hover em todos os botões e links clicáveis (ver o fim de `style.css`): botões escurecem e sobem 1 px, ícones ganham fundo redondo, "Ver tudo" com seta que anda, campos de formulário escurecem a borda; toque afunda o botão.
- **19/11/2026** — Página de Contato própria (`contato.html`): formulário com assunto (pauta, anunciar, correção, outro), e-mails de atendimento e redação, endereço com mapa e redes. **Nenhum link aponta mais para o site antigo** (topo, ícone de e-mail, rodapé, política).

## Em aberto

- Dados do controlador na Política de Privacidade (razão social, CNPJ, endereço, encarregado e e-mail), marcados como "a preencher".

- Formato do banner do topo no celular (só encolher o 728×90 ou 320×50/320×100).
- Posição de anúncio com botão "x" que existe no site atual (vazia hoje).
- Próxima tela: página da editoria.

## Publicar

- Netlify: projeto **imatogrosso** (id `e3bf60f8-3272-4c54-adab-4a4d11e203f3`, time "luizpodecrer"), endereço https://imatogrosso.netlify.app — aberto para visitantes (sem login), é o link que vai para o cliente.
- O Netlify **não** está ligado ao GitHub: a cada entrega, enviar ao GitHub e publicar de novo pela ferramenta do Netlify (`deploy-site`, rodando o comando dentro desta pasta). `netlify.toml` publica a raiz sem build e esconde `CLAUDE.md`, `README.md` e `netlify.toml`.
