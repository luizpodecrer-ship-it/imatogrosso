(function(){
const PLAY='<span class="play"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z"/></svg>Vídeo</span>';
const SEMFOTO='<span class="ph semfoto" role="img" aria-label="Notícia sem foto"><svg viewBox="0 0 421.09 595.28"><use href="#ic"/></svg></span>';
const ph=(f,eager,v)=>!f?SEMFOTO:`<span class="ph">${v?PLAY:''}<img src="assets/img/fotos/${f}.jpg" alt="" ${eager?'fetchpriority="high"':'loading="lazy"'}></span>`;
const card=(n,dek)=>`<a href="noticia.html">${ph(n[4])}<div class="chap">${n[0]}</div><h3 class="t">${n[1]}</h3>${dek&&n[3]?`<p>${n[3]}</p>`:''}<span class="hora">${n[2]}</span></a>`;
const li=n=>`<li><a href="noticia.html"><span class="hora">${n[2]}</span><h3 class="t">${n[1]}</h3></a></li>`;
const $=id=>document.getElementById(id);
/* ordem fixa dos filtros de cidade em todo o portal */
const ORDEM_CID=['Cuiabá','Várzea Grande','Rondonópolis','Interior','Mato Grosso','Brasil','Mundo'];
const ordemCid=l=>l.sort((a,b)=>{const i=ORDEM_CID.indexOf(a),j=ORDEM_CID.indexOf(b);return (i<0?99:i)-(j<0?99:j)||a.localeCompare(b)});
/* [chapéu, título, hora, resumo, foto, cidade] — no WordPress: categoria, título, data, resumo, imagem destacada */
const lead=['Mato Grosso','Campanha estadual pelo fim da violência contra a mulher mobiliza municípios com ações até 10 de dezembro','há 25 min','Os 21 Dias de Ativismo começaram nesta quinta-feira com rodas de conversa, atendimento jurídico e mutirões em escolas de todo o estado.','campanha'];
const lado=[['Policial','Polícia mira quadrilha especializada em furtar Hilux e SW4','há 1 h','','hilux'],['Cuiabá','Na ausência de Abilio, primeira-dama visita distrito alagado','há 2 h','','abilio'],['Vídeo','Entre destroços e tristeza, moradores mostram destruição após temporal no distrito de Aguaçu','há 3 h','','aguacu']];
const faixa=[['Economia','Mato Grosso tem mais de 2 milhões de pessoas ocupadas e a 3ª menor taxa de desemprego do país','há 2 h'],['Saúde','Hospital Central realiza 3 mil cirurgias em 9 meses','há 3 h'],['Educação','Seduc reforça recomendações para o segundo dia de provas do Enem','há 4 h'],['Segurança','Vigia Mais MT ajuda a recuperar 149 veículos e devolve R$ 7 milhões','há 5 h']];
const pol=[['Policial','MT reduz roubos em 75% entre 2019 e 2026 e registra a menor média mensal da série histórica','há 40 min','Queda vale para roubos a pessoas, comércios e veículos, segundo a Secretaria de Segurança Pública.','roubos'],
 ['Cuiabá','Grupo suspeito de furtar caminhonetes é alvo de operação','há 1 h'],['MT','Jovem é morto a tiros em frente a bar','há 2 h'],['Operação','Ação mira grupo suspeito de comandar o tráfico e cumpre mandados em cinco cidades','há 3 h'],
 ['Justiça','Justiça aceita denúncia contra motorista acusado de matar criança de 4 anos','há 6 h']];
const not=[['Saúde','MT Hemocentro abre neste sábado para incentivar a doação de sangue','há 1 h','','hemocentro'],['Brasil','Anvisa proíbe lotes irregulares de medicamento para esclerose múltipla','há 2 h','','anvisa'],
 ['Detran','Detran-MT orienta sobre golpes com falsas vagas da CNH Social','há 4 h','','cnh'],['Serviços','Veja o que abre e fecha durante o ponto facultativo e o feriado','há 6 h','','paiaguas']];
const cid=[['Cuiabá','Prefeitura muda rotina de agentes de saúde por causa do calor extremo','há 1 h','','calor','Cuiabá'],['Cuiabá','Cuiabá ganha destaque com roteiros turísticos em festival nacional','há 3 h','','turismo','Cuiabá'],
 ['Interior','Cinco escolas estaduais vencem o Programa Guardiões do Pantanal','há 4 h','','guardioes','Interior'],['Cuiabá','Capacitação fortalece o empreendedorismo feminino na capital','há 7 h','','empreende','Cuiabá'],
 ['Cuiabá','Casos de meningite seguem dentro da normalidade e vacinação é reforçada','há 9 h','','meningite','Cuiabá']];
const esp=[['Futebol','Palmeiras x Fortaleza terá trânsito sem interdições na Arena Pantanal','há 1 h','','futebol'],['Vôlei de praia','Carol e Rebecca estão na final do Circuito Mundial','há 3 h','','volei'],
 ['Basquete','Sampaio Basquete é campeão da Liga Nacional Feminina 2026','há 5 h','','basquete']];
const ger=[['Geral','Governo de MT sanciona lei que autoriza empréstimo para ampliar a saúde e construir 60 mil casas populares','há 2 h','Os recursos vão para hospitais regionais e para o programa de moradia popular.','lei'],
 ['Educação','Seciteci inicia cursos profissionalizantes para 116 pessoas privadas de liberdade','há 3 h'],['Educação','Seduc abre período de recursos do processo seletivo das escolas estaduais','há 4 h'],['Serviços','Seis novos serviços digitais para egressos do sistema prisional','há 6 h']];
const lidas=[lado[0],lado[2],esp[0],pol[1],not[0]];

if($('lead')){
$('lead').innerHTML=`${ph(lead[4],1)}<div class="sobre"><div class="chap">${lead[0]}</div><h2 class="t">${lead[1]}</h2><span class="hora">${lead[2]}</span></div>`;
$('lado').innerHTML=lado.map(n=>`<a href="noticia.html">${ph(n[4],0,n[0]==='Vídeo')}<div><div class="chap">${n[0]}</div><h3 class="t">${n[1]}</h3><span class="hora">${n[2]}</span></div></a>`).join('');
$('faixa').innerHTML=faixa.map(n=>`<a href="noticia.html"><div class="chap">${n[0]}</div><h3 class="t">${n[1]}</h3><span class="hora">${n[2]}</span></a>`).join('');
$('polG').innerHTML=card(pol[0],1).replace(/^<a href="noticia.html">|<\/a>$/g,'');$('polL').innerHTML=pol.slice(1).map(li).join('');
$('not').innerHTML=not.map(n=>card(n)).join('');
$('lidas').innerHTML=lidas.map(n=>`<li><a href="noticia.html"><h3 class="t">${n[1]}</h3></a></li>`).join('');
$('esp').innerHTML=esp.map(n=>card(n)).join('');
$('gerG').innerHTML=card(ger[0],1).replace(/^<a href="noticia.html">|<\/a>$/g,'');$('gerL').innerHTML=ger.slice(1).map(li).join('');
}
if($('fita')){const fita=[...pol,...not,...esp].slice(0,8).map(n=>`<a href="noticia.html"><b>${n[2].replace('há ','')}</b>${n[1]}</a>`).join('');$('fita').innerHTML=fita+fita;}

if($('chips')){
const cidades=['Todas',...ordemCid([...new Set(cid.map(c=>c[5]))])];
const pinta=c=>{$('cid').innerHTML=cid.filter(n=>c==='Todas'||n[5]===c).slice(0,4).map(n=>card(n)).join('');
 $('chips').querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.textContent===c))};
$('chips').innerHTML=cidades.map(c=>`<button type="button">${c}</button>`).join('');
$('chips').addEventListener('click',e=>{if(e.target.tagName==='BUTTON')pinta(e.target.textContent)});pinta('Todas');
}

try{$('hoje').textContent=new Date().toLocaleDateString('pt-BR',{day:'numeric',month:'long',year:'numeric',timeZone:'America/Cuiaba'})}catch(e){}
const nav=$('nav'),io=new IntersectionObserver(([e])=>nav.classList.toggle('solto',!e.isIntersecting));io.observe(document.querySelector('.head'));
/* busca que se expande: lupa vira campo; X ou Esc fecham e limpam */
const dock=$('dock'),dform=$('fb-form');let dockT;
const abreBusca=()=>{clearTimeout(dockT);dform.hidden=false;requestAnimationFrame(()=>{dock.classList.add('aberto');$('bt').setAttribute('aria-expanded','true');setTimeout(()=>$('q').focus(),60)})};
const fechaBusca=(foco)=>{dock.classList.remove('aberto');$('bt').setAttribute('aria-expanded','false');$('q').value='';dockT=setTimeout(()=>{dform.hidden=true},450);if(foco)$('bt').focus()};
$('bt').addEventListener('click',abreBusca);
$('dock-x').addEventListener('click',()=>fechaBusca(true));
dform.addEventListener('keydown',e=>{if(e.key==='Escape')fechaBusca(true)});
document.addEventListener('click',e=>{if(dock.classList.contains('aberto')&&!dock.contains(e.target)&&!$('q').value)fechaBusca(false)});
$('fb-form').addEventListener('submit',e=>{if(!$('q').value.trim()){e.preventDefault();$('q').focus()}});
/* tema: botão claro/escuro animado. Sem escolha salva, segue o aparelho; a escolha fica guardada neste navegador */
const raiz=document.documentElement,tg=$('tema-tg'),mq=matchMedia('(prefers-color-scheme: dark)');
const escuroAgora=()=>raiz.dataset.theme?raiz.dataset.theme==='dark':mq.matches;
const mostra=()=>{const d=escuroAgora();tg.setAttribute('aria-pressed',d);tg.setAttribute('aria-label',d?'Modo claro':'Modo escuro');tg.title=d?'Mudar para o modo claro':'Mudar para o modo escuro'};
let salvo=null;try{salvo=localStorage.getItem('imt-tema')}catch(e){}
if(salvo==='light'||salvo==='dark')raiz.dataset.theme=salvo;
tg.classList.add('sem-anim');mostra();requestAnimationFrame(()=>requestAnimationFrame(()=>tg.classList.remove('sem-anim')));
tg.addEventListener('click',()=>{const t=escuroAgora()?'light':'dark';raiz.dataset.theme=t;try{localStorage.setItem('imt-tema',t)}catch(e){}mostra()});
mq.addEventListener?.('change',()=>{if(!raiz.dataset.theme)mostra()});

/* menu em abas */
const menu=$('menu'),hov=menu.querySelector('.hov'),ind=menu.querySelector('.ind'),abas=[...menu.querySelectorAll('a')];
const poe=(m,a)=>{if(!a){m.style.width='0px';return}m.style.left=a.parentElement.offsetLeft+'px';m.style.width=a.offsetWidth+'px'};
const ativa=a=>{abas.forEach(x=>x.removeAttribute('aria-current'));a.setAttribute('aria-current','page');poe(ind,a)};
abas.forEach(a=>{const v=()=>{poe(hov,a);hov.style.opacity=1};a.addEventListener('mouseenter',v);a.addEventListener('focus',v);a.addEventListener('click',()=>ativa(a))});
menu.addEventListener('mouseleave',()=>hov.style.opacity=0);menu.addEventListener('focusout',()=>hov.style.opacity=0);
const inicio=()=>{ind.style.transition='none';poe(ind,menu.querySelector('[aria-current]'));ind.offsetWidth;ind.style.transition=''};
document.fonts?document.fonts.ready.then(inicio):inicio();inicio();
new ResizeObserver(()=>poe(ind,menu.querySelector('[aria-current]'))).observe(menu);
/* página da notícia */
if($('artigo')){
 $('lidas').innerHTML=lidas.map(n=>`<li><a href="noticia.html"><h3 class="t">${n[1]}</h3></a></li>`).join('');
 $('leia').innerHTML=[not[0],cid[0],pol[0],ger[0]].map(n=>card(n)).join('');
 const barra=$('progresso').firstElementChild,corpo=$('corpo');
 const lendo=()=>{const r=corpo.getBoundingClientRect(),t=r.height-innerHeight*.6;barra.style.transform=`scaleX(${Math.min(1,Math.max(0,-r.top/(t>0?t:1)))})`};
 addEventListener('scroll',lendo,{passive:true});lendo();
 const url=location.href.startsWith('http')?location.href:'https://imatogrosso.netlify.app/noticia.html',titulo=document.querySelector('.tt').textContent;
 document.querySelectorAll('.pt[data-rede]').forEach(a=>{const r=a.dataset.rede;a.target='_blank';a.rel='noopener';
  a.href=r==='zap'?'https://wa.me/?text='+encodeURIComponent(titulo+' '+url):r==='fb'?'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url):'https://x.com/intent/post?text='+encodeURIComponent(titulo)+'&url='+encodeURIComponent(url)});
 document.querySelectorAll('.copia').forEach(b=>b.addEventListener('click',async()=>{const s=b.querySelector('span'),o=s.textContent;
  try{await navigator.clipboard.writeText(url);s.textContent='Link copiado'}catch(e){s.textContent='Não deu para copiar'}
  b.classList.add('ok');setTimeout(()=>{s.textContent=o;b.classList.remove('ok')},2200)}));
 let tam=19;try{tam=+localStorage.getItem('imt-tam')||19}catch(e){}
 const poeTam=v=>{tam=Math.min(24,Math.max(16,v));corpo.style.setProperty('--tam',tam+'px');try{localStorage.setItem('imt-tam',tam)}catch(e){}};
 if(tam!==19)poeTam(tam);
 document.querySelectorAll('[data-tam]').forEach(b=>b.addEventListener('click',()=>poeTam(tam+ +b.dataset.tam)));
 $('form-com').addEventListener('submit',e=>{e.preventDefault();const f=e.target,ok=f.checkValidity();
  $('c-aviso').textContent=ok?'Obrigado! Seu comentário vai aparecer depois de aprovado.':'Preencha comentário, nome e um e-mail válido.';if(ok)f.reset()});
}
/* política de privacidade: índice acompanha a leitura */
if($('legal')){
 const links=[...document.querySelectorAll('.indice a')],mapa=new Map(links.map(a=>[a.getAttribute('href').slice(1),a]));
 const ioL=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.remove('ativo'));mapa.get(e.target.id)?.classList.add('ativo')}}),{rootMargin:'-20% 0px -70% 0px'});
 document.querySelectorAll('.texto section').forEach(s=>ioL.observe(s));
}
/* contato */
if($('pg-contato')){
 $('form-ctt').addEventListener('submit',e=>{e.preventDefault();const f=e.target,ok=f.checkValidity();
  $('ct-aviso').textContent=ok?'Mensagem enviada! A equipe do iMatoGrosso responde pelo e-mail informado.':'Preencha nome, um e-mail válido e a mensagem.';if(ok)f.reset()});
}
/* página da editoria: editoria.html?e=policial|noticias|cidades|geral|esportes
   [chapéu, título, quando, resumo, foto ('' = sem foto), cidade]  — no WordPress: posts da categoria */
/* dados de exemplo das editorias (usados pela editoria e pela busca) */
 const MT='Mato Grosso',CB='Cuiabá',VG='Várzea Grande',IN='Interior';
 const EDS={
  policial:{nome:'Policial',desc:'Ocorrências, operações e segurança pública em Cuiabá, Várzea Grande e todo o Mato Grosso.',itens:[
   ['Segurança','MT reduz roubos em 75% entre 2019 e 2026 e registra a menor média mensal da série histórica','há 40 min','','roubos',MT],
   ['Cuiabá','Polícia mira quadrilha especializada em furtar Hilux e SW4','há 1 h','','hilux',CB],
   ['Segurança','Vigia Mais MT auxilia na recuperação de 149 veículos e devolve cerca de R$ 7 milhões em patrimônio','há 2 h','','vigia',MT],
   ['Segurança','Governo de MT vai construir 22 unidades integradas da PM e Corpo de Bombeiros','há 3 h','','unidades',MT],
   ['Várzea Grande','Governo de MT instala plantão 24 horas na Delegacia da Mulher e Vulneráveis em Várzea Grande','há 4 h','','',VG],
   ['Várzea Grande','Polícia Civil prende homem que matou a esposa e ocultou corpo em córrego em Várzea Grande','há 5 h','','',VG],
   ['Trânsito','Operação Lei Seca intensifica fiscalização e encaminha oito pessoas à delegacia','há 6 h','','',MT],
   ['Cuiabá','Polícia Civil deflagra operação e desmantela grupo criminoso ligado a facção em Cuiabá','há 8 h','','',CB],
   ['Interior','Polícia Civil cumpre mandados contra lideranças de facção criminosa na região norte de MT','ontem','','',IN],
   ['Trânsito','Fiscalização rigorosa da Lei Seca Motos resulta em autuações e apreensão de veículos','ontem','','',MT],
   ['Interior','Rotam prende dois homens e apreende fuzil e espingardas em Nova Lacerda','ontem','','',IN],
   ['Polícia Civil','Polícia Civil prende suspeito que invadiu casa e furtou eletrônicos, carro e cachorro','17/11/2026','','',MT],
   ['Cuiabá','Foragido da Justiça por homicídio no Maranhão é preso pela Cavalaria da PM em Cuiabá','17/11/2026','','',CB],
   ['Cuiabá','Grupo suspeito de furtar caminhonetes é alvo de operação em Cuiabá','16/11/2026','','',CB],
   ['MT','Jovem é morto a tiros em frente a bar em MT','16/11/2026','','',MT],
   ['Interior','Operação mira grupo suspeito de comandar tráfico de drogas e cumpre mandados em cinco cidades de MT','15/11/2026','','',IN],
   ['Justiça','Justiça aceita denúncia contra motorista acusado de matar criança de 4 anos em acidente em MT','15/11/2026','','',MT]]},
  noticias:{nome:'Notícias',desc:'Governo, saúde, educação e serviços públicos de Mato Grosso.',itens:[
   ['Mato Grosso','Campanha estadual pelo fim da violência contra a mulher mobiliza municípios com ações até 10 de dezembro','há 25 min','','campanha',MT],
   ['Educação','Seduc reforça recomendações para o segundo dia de provas do Enem 2026','há 2 h','','enem',MT],
   ['Educação','Cinco escolas da Rede Estadual de MT são vencedoras do Programa Guardiões do Pantanal','há 3 h','','guardioes',IN],
   ['Saúde','Em mais de 100 dias internado, paciente reaprende a falar e andar com apoio multidisciplinar no Hospital Central','há 4 h','','paciente',CB],
   ['Educação','Seduc abre período de recursos contra resultado de processo seletivo das Escolas Estaduais Militares','há 5 h','','seduc',MT],
   ['Educação','Seduc e Ministério Público discutem acompanhamento dos planos de educação do Estado e dos municípios','há 6 h','','seducmp',MT],
   ['Detran','Detran-MT orienta sobre golpes com falsas vagas da CNH Social','ontem','','cnh',MT],
   ['Serviços','Veja o que abre e fecha durante ponto facultativo e feriado em MT','ontem','','paiaguas',MT],
   ['Saúde','MT Hemocentro abre neste sábado para incentivar a doação de sangue','17/11/2026','','hemocentro',CB],
   ['Brasil','Anvisa proíbe lotes irregulares de medicamento para esclerose múltipla','16/11/2026','','anvisa','Brasil'],
   ['Serviços','Governo de MT disponibiliza seis novos serviços digitais para egressos do sistema prisional','15/11/2026','','',MT]]},
  cidades:{nome:'Cidades',desc:'Cuiabá, Várzea Grande, Rondonópolis, Sinop e as cidades do interior.',itens:[
   ['Cuiabá','Prefeitura de Cuiabá muda rotina de agentes de saúde devido ao calor extremo','há 1 h','','calor',CB],
   ['Cuiabá','Prefeitura de Cuiabá fortalece empreendedorismo feminino com capacitação e geração de renda','há 3 h','','empreende',CB],
   ['Cuiabá','Cuiabá mantém casos de meningite dentro da normalidade e reforça vacinação no Dia D','há 4 h','','meningite',CB],
   ['Cuiabá','Cuiabá ganha destaque com opções de roteiros turísticos apresentados em festival nacional','há 5 h','','turismo',CB],
   ['Sinop','Hospital Regional de Sinop recebe reconhecimento nacional em prática de segurança do paciente','há 7 h','','',IN],
   ['Cuiabá','Nelsinho Piquet vence em Cuiabá única prova noturna do circuito brasileiro de Stock Car','ontem','','',CB],
   ['Barra do Garças','Polícia Civil identifica suspeito de furto e recupera materiais subtraídos em obra em Barra do Garças','ontem','','',IN],
   ['Economia','Mato Grosso gera mais de 22 mil empregos formais no primeiro trimestre de 2026','17/11/2026','','',MT],
   ['Saúde','Saúde ultrapassa 3,6 milhões de atendimentos com novas unidades, equipamentos e redução das filas','16/11/2026','','',MT],
   ['Economia','Mercado mantém estáveis projeções para inflação, juros, PIB e dólar','15/11/2026','','mercado','Brasil']]},
  geral:{nome:'Geral',desc:'Economia, política, emprego e os assuntos que mexem com o dia a dia de Mato Grosso.',itens:[
   ['Governo','Governo de MT sanciona lei que autoriza empréstimo para ampliar a saúde e construir 60 mil casas populares','há 2 h','','lei',MT],
   ['Educação','Seciteci inicia cursos profissionalizantes para 116 pessoas privadas de liberdade em Cuiabá','há 3 h','','seciteci',CB],
   ['Educação','Seduc abre período de recursos contra resultado de processo seletivo das Escolas Estaduais Militares','há 4 h','','seduc',MT],
   ['Segurança','Governo de MT vai construir 22 unidades integradas da PM e Corpo de Bombeiros','há 5 h','','unidades',MT],
   ['Educação','Seduc e Ministério Público discutem acompanhamento dos planos de educação do Estado e dos municípios','há 6 h','','seducmp',MT],
   ['Segurança','Vigia Mais MT auxilia na recuperação de 149 veículos e devolve cerca de R$ 7 milhões em patrimônio','ontem','','vigia',MT],
   ['Saúde','Em mais de 100 dias internado, paciente reaprende a falar e andar com apoio multidisciplinar no Hospital Central','ontem','','paciente',CB],
   ['Detran','Detran-MT orienta sobre golpes com falsas vagas da CNH Social','17/11/2026','','cnh',MT],
   ['Segurança','MT reduz roubos em 75% entre 2019 e 2026 e registra a menor média mensal da série histórica','16/11/2026','','roubos',MT]]},
  esportes:{nome:'Esportes',desc:'Futebol, vôlei, basquete e tudo o que movimenta o esporte em Mato Grosso, no Brasil e no mundo.',itens:[
   ['Futebol','Palmeiras x Fortaleza terá trânsito sem interdições na Arena Pantanal','há 1 h','','futebol',CB],
   ['Vôlei de praia','Carol e Rebecca estão na final do Circuito Mundial','há 3 h','','volei','Brasil'],
   ['Basquete','Brasil vence Chile na estreia do Sul-Americano de basquete feminino','há 4 h','','basquete','Brasil'],
   ['Futebol','Santos faz 2 a 0 no Fluminense fora de casa pelo Brasileiro Feminino','há 5 h','','','Brasil'],
   ['Futebol','Fluminense arranca empate na Argentina e continua vivo na Libertadores','há 6 h','','','Brasil'],
   ['Futebol','Palmeiras derrota Bragantino para manter liderança no Brasileiro','ontem','','','Brasil'],
   ['Futebol','Convocação final para a Copa terá Museu do Amanhã como palco','ontem','','','Brasil'],
   ['Copa do Brasil','Palmeiras bate Jacuipense e encaminha classificação na Copa do Brasil','17/11/2026','','','Brasil'],
   ['Copa do Brasil','Flamengo estreia na Copa do Brasil com triunfo de 2 a 1 sobre o Vitória','17/11/2026','','','Brasil'],
   ['Copa do Brasil','Botafogo bate Chape em jogo de abertura da 5ª fase da Copa do Brasil','16/11/2026','','','Brasil'],
   ['Tênis de mesa','São José dos Campos sediará WTT Star Contender em julho','16/11/2026','','','Brasil'],
   ['Tênis','João Fonseca encara ex-top 3 Cilic na estreia do Masters 1000 de Madri','15/11/2026','','','Mundo']]}
 };
if($('editoria')){
 let chave='policial';try{chave=new URLSearchParams(location.search).get('e')||'policial'}catch(e){}
 if(!EDS[chave])chave='policial';
 const ed=EDS[chave],POR=6;
 document.title=ed.nome+' · iMatoGrosso';
 $('ed-nome').textContent=ed.nome;$('ed-trilha').textContent=ed.nome;$('ed-desc').textContent=ed.desc;$('ed-mais-tit').textContent='Mais de '+ed.nome;
 document.querySelectorAll('#menu a').forEach(a=>{if(a.getAttribute('href')==='editoria.html?e='+chave)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
 const item=n=>`<li><a href="noticia.html">${ph(n[4])}<div><div class="chap">${n[0]}</div><h3 class="t">${n[1]}</h3><span class="hora">${n[2]}</span></div></a></li>`;
 let lista=ed.itens,mostra=POR;
 const pinta=()=>{
  const l=lista,cheio=l.length>=4,top=cheio?l.slice(0,4):[],resto=cheio?l.slice(4):l;
  $('ed-topo').hidden=!cheio;
  if(cheio){const n=top[0];$('ed-lead').innerHTML=`${ph(n[4],1)}<div class="sobre"><div class="chap">${n[0]}</div><h2 class="t">${n[1]}</h2><span class="hora">${n[2]}</span></div>`;
   $('ed-lead').classList.toggle('sem',!n[4]);
   $('ed-lado').innerHTML=top.slice(1).map(n=>`<a href="noticia.html">${ph(n[4],0,n[0]==='Vídeo')}<div><div class="chap">${n[0]}</div><h3 class="t">${n[1]}</h3><span class="hora">${n[2]}</span></div></a>`).join('');}
  $('ed-lista').innerHTML=resto.slice(0,mostra).map(item).join('');
  $('ed-mais').hidden=resto.length<=mostra;
  const v=$('ed-vazio');v.hidden=!!resto.length&&l.length>0;v.textContent=l.length?'Por enquanto são só estas notícias.':'Ainda não há notícias desta cidade em '+ed.nome+'.';
 };
 const cids=ordemCid([...new Set(ed.itens.map(n=>n[5]))]);
 if(cids.length>1){$('ed-chips').innerHTML=['Todas',...cids].map((c,i)=>`<button type="button" aria-pressed="${!i}">${c}</button>`).join('');
  $('ed-chips').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
   $('ed-chips').querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));
   lista=b.textContent==='Todas'?ed.itens:ed.itens.filter(n=>n[5]===b.textContent);mostra=POR;pinta()})}
 else $('ed-chips').remove();
 $('ed-mais').addEventListener('click',()=>{const antes=mostra;mostra+=POR;pinta();$('ed-lista').children[antes]?.querySelector('a')?.focus()});
 pinta();
 $('lidas').innerHTML=ed.itens.slice(1,6).map(n=>`<li><a href="noticia.html"><h3 class="t">${n[1]}</h3></a></li>`).join('');
}
/* ===== Busca: busca.html?s=termo (no WordPress: search.php com ?s=) ===== */
const semAcento=t=>t.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const esc=t=>t.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
if($('busca')){
 const ORDEM_ED=['policial','noticias','cidades','geral','esportes'];
 const todas=[],vistos=new Set();
 ORDEM_ED.forEach(k=>EDS[k].itens.forEach(n=>{if(!vistos.has(n[1])){vistos.add(n[1]);todas.push({n,ed:k,nome:EDS[k].nome})}}));
 let termo='';try{termo=(new URLSearchParams(location.search).get('s')||'').trim()}catch(e){}
 $('bq').value=termo;
 const marca=(t,ps)=>{let h=esc(t);ps.forEach(p=>{const re=new RegExp('('+p.split('').map(c=>{const b=semAcento(c);return 'aeiouc'.includes(b)?'['+({a:'aáàâã',e:'eéê',i:'ií',o:'oóôõ',u:'uúü',c:'cç'}[b])+']':c.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}).join('')+')','gi');h=h.replace(re,'<mark>$1</mark>')});return h};
 const ps=semAcento(termo).split(/\s+/).filter(p=>p.length>1);
 const achou=ps.length?todas.filter(o=>{const t=semAcento(o.n[1]+' '+o.n[0]+' '+o.n[5]+' '+o.nome);return ps.every(p=>t.includes(p))}):[];
 document.title=(termo?'Busca: '+termo:'Busca')+' · iMatoGrosso';
 const POR=8;let filtro='todas',mostra=POR;
 const item=o=>`<li><a href="noticia.html">${ph(o.n[4])}<div><div class="chap">${o.nome} · ${esc(o.n[0])}</div><h3 class="t">${marca(o.n[1],ps)}</h3><span class="hora">${o.n[2]}</span></div></a></li>`;
 const pinta=()=>{
  const l=filtro==='todas'?achou:achou.filter(o=>o.ed===filtro);
  $('b-lista').innerHTML=l.slice(0,mostra).map(item).join('');
  $('b-mais').hidden=l.length<=mostra;
  $('b-qtd').innerHTML=!termo?'Digite o que você procura no campo acima.':achou.length?`<b>${achou.length}</b> ${achou.length===1?'notícia encontrada':'notícias encontradas'} para <b>“${esc(termo)}”</b>`:`Nenhuma notícia encontrada para <b>“${esc(termo)}”</b>.`;
  $('b-vazio').hidden=!!achou.length;
 };
 const eds=ORDEM_ED.filter(k=>achou.some(o=>o.ed===k));
 if(eds.length>1){$('b-chips').innerHTML=[['todas','Todas'],...eds.map(k=>[k,EDS[k].nome])].map(([k,t],i)=>`<button type="button" data-ed="${k}" aria-pressed="${!i}">${t} <span class="n">${k==='todas'?achou.length:achou.filter(o=>o.ed===k).length}</span></button>`).join('');
  $('b-chips').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$('b-chips').querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));filtro=b.dataset.ed;mostra=POR;pinta()})}
 else $('b-chips').remove();
 $('b-mais').addEventListener('click',()=>{const antes=mostra;mostra+=POR;pinta();$('b-lista').children[antes]?.querySelector('a')?.focus()});
 pinta();
 $('lidas').innerHTML=todas.slice(0,5).map(o=>`<li><a href="noticia.html"><h3 class="t">${o.n[1]}</h3></a></li>`).join('');
 if(!termo)$('bq').focus();
}
/* ===== Página 404 ===== */
if($('p404')){
 $('p404-ult').innerHTML=[...EDS.noticias.itens.slice(0,2),EDS.policial.itens[0],EDS.esportes.itens[0]].map(n=>card(n)).join('');
}
})();
