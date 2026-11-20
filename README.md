# iMatoGrosso — front-end do portal

Front-end do novo portal **imatogrosso.com.br**, em HTML, CSS e JavaScript puros (sem framework e sem etapa de build), pronto para virar tema WordPress.

Abra `index.html` no navegador para ver a home. As manchetes e fotos são de exemplo (tiradas do site atual); no WordPress vêm dos posts.

## Estrutura

```
index.html                 home
noticia.html               página da notícia (single.php)
privacidade.html           Política de Privacidade (página do WordPress)
editoria.html              página da editoria (category.php), ?e=policial|noticias|cidades|geral|esportes
contato.html               Contato (página + Contact Form 7 para atendimento@imatogrosso.com.br)
assets/css/style.css       todo o visual (variáveis no topo)
assets/js/main.js          dados de exemplo + menu, faixa "Últimas", busca, filtro de cidades, seletor de tema
assets/img/logo/           logo e ícone oficiais (preto e branco), em SVG
assets/img/fotos/          fotos de exemplo
```

## Identidade

| Item | Valor |
|---|---|
| Paleta (só estas) | `#000000` `#232323` `#737373` `#F5F5F3` `#FFFFFF` — sem vermelho |
| Títulos | Poppins 400/700 (`--heading-font`) |
| Textos | Libre Franklin 400/700 (`--body-font`) |
| Ícone das seções | `imt-icone-preto.svg` (no fundo escuro, `imt-icone-branco.svg`) |
| Favicon | `imt-icone-preto.svg` — gerar também PNG 32, 180 (apple-touch-icon) e 512 px |

## Página da notícia → WordPress

| Parte | Origem |
|---|---|
| Trilha, chapéu | categoria principal do post (e cidade) |
| Título, linha fina | título e resumo (excerpt) |
| Autor · fonte, data, atualizado | autor, `get_the_date()`, `get_the_modified_date()`; tempo de leitura = palavras ÷ 200 |
| Foto e crédito | imagem destacada + legenda/crédito da mídia |
| Corpo | `the_content()`: parágrafos, `h2` (intertítulos), `blockquote` com `cite` |
| Assuntos | tags do post |
| Anterior / Próxima | `previous_post_link()` / `next_post_link()` |
| Leia também | 4 posts da mesma categoria |
| Comentários | `comments_template()` (moderação ligada) |

## Página da editoria → WordPress

| Parte | Origem |
|---|---|
| Nome, descrição | nome e descrição da categoria |
| Filtro de cidades | tag ou campo "cidade" dos posts da categoria (some quando há só uma cidade) |
| Destaque (foto + 3) | 4 posts mais recentes da categoria |
| "Mais de …" | os demais posts; "Carregar mais notícias" (AJAX) ou `paginate_links()` |
| Lateral | posição `banner-editoria-lateral-300x250` + Mais lidas da categoria |
| Notícia sem imagem destacada | mostrar o bloco `.ph.semfoto` (ícone do "i" sobre cinza) |

## Publicidade (mesmos formatos do site atual)

| Posição no WP Bannerize | Tamanho | Onde fica |
|---|---|---|
| `banner-top-728x90` | 728 × 90 | cabeçalho, ao lado do logo |
| `banner-esquerdo-inferior-300x250` | 300 × 250 | linha "Mais lidas", à esquerda |
| `banner-direito-inferior-300x250` | 300 × 250 | linha "Mais lidas", à direita |

Na página da notícia, além do 728 × 90 do topo, há duas posições novas no mesmo formato 300 × 250 (aprovadas):

| Posição (criar no WP Bannerize) | Tamanho | Onde fica |
|---|---|---|
| `banner-noticia-lateral-300x250` | 300 × 250 | lateral da notícia, acima de "Mais lidas" |
| `banner-noticia-meio-300x250` | 300 × 250 | no meio do texto da notícia |

Os espaços estão marcados no HTML com o comentário `<!-- WP: ... -->`. No celular o 728 × 90 só encolhe proporcionalmente (decisão aprovada: sem formato próprio para celular).

## Do protótipo para o WordPress

| Bloco da home | Origem no WordPress |
|---|---|
| Menu (Home, Policial, Notícias, Cidades, Geral, Esportes) | `wp_nav_menu()`; manter `<ul class="menu" id="menu">` com os dois `li` `.hov` e `.ind` no começo (o JS desliza o realce e o traço) e `aria-current="page"` no item atual |
| Faixa "Últimas" | últimos 8 posts, título + hora |
| Manchete + 3 destaques | posts fixos / tag "destaque" |
| Faixa de 4 abaixo da manchete | 4 posts seguintes, só texto |
| Policial, Notícias, Cidades, Esportes, Geral | categorias `ipolicial`, `inoticias`, `cidades`, `esportes`, `geral` |
| Filtro de cidades | tag ou campo "cidade" do post |
| Mais lidas | plugin de contagem de visitas (5 mais lidas) |
| Hoje (tempo em Cuiabá) | widget de previsão do tempo |

Cada item de notícia nos dados de `main.js` segue `[chapéu, título, hora, resumo, foto, cidade]` = categoria, título, data relativa, resumo, imagem destacada, cidade.

## Comportamentos

- **Menu em abas:** realce cinza que segue o mouse e traço que desliza até o item ativo (também pelo teclado).
- **Menu fixo:** ao descer a página o menu fica preso no topo e mostra o logo pequeno.
- **Seletor de tema** (barra do topo): sistema · claro · escuro. "Sistema" segue o aparelho; a escolha fica em `localStorage` (`imt-tema`) e vira `data-theme` no `<html>`.
- **Responsivo:** 375 px (celular) a 1920 px. Respeita "reduzir movimento" do sistema.
- **Acessibilidade:** um `<h1>` por página, foco visível, alvos de toque de 44 px, botões com `aria-label`.

## Créditos das fotos de exemplo

Notícias: imatogrosso.com.br. Esportes, via Wikimedia Commons: futebol — Daniblue21 (CC BY-SA); vôlei — CBV (CC0); basquete — Agência Brasil (CC BY).
