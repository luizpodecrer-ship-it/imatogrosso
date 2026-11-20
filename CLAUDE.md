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

## Em aberto

- Formato do banner do topo no celular (só encolher o 728×90 ou 320×50/320×100).
- Posição de anúncio com botão "x" que existe no site atual (vazia hoje).
- Próximas telas: página da notícia e página da editoria.

## Publicar

- Netlify: projeto **imatogrosso** (id `e3bf60f8-3272-4c54-adab-4a4d11e203f3`, time "luizpodecrer"), endereço https://imatogrosso.netlify.app — aberto para visitantes (sem login), é o link que vai para o cliente.
- O Netlify **não** está ligado ao GitHub: a cada entrega, enviar ao GitHub e publicar de novo pela ferramenta do Netlify (`deploy-site`, rodando o comando dentro desta pasta). `netlify.toml` publica a raiz sem build e esconde `CLAUDE.md`, `README.md` e `netlify.toml`.
