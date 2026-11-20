(function(){
const PLAY='<span class="play"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z"/></svg>Vídeo</span>';
const ph=(f,eager,v)=>`<span class="ph">${v?PLAY:''}<img src="assets/img/fotos/${f}.jpg" alt="" ${eager?'fetchpriority="high"':'loading="lazy"'}></span>`;
const card=(n,dek)=>`<a href="noticia.html">${ph(n[4])}<div class="chap">${n[0]}</div><h3 class="t">${n[1]}</h3>${dek&&n[3]?`<p>${n[3]}</p>`:''}<span class="hora">${n[2]}</span></a>`;
const li=n=>`<li><a href="noticia.html"><span class="hora">${n[2]}</span><h3 class="t">${n[1]}</h3></a></li>`;
const $=id=>document.getElementById(id);
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
$('lead').innerHTML=`${ph(lead[4],1)}<div class="sobre"><div class="chap">${lead[0]}</div><h2 class="t">${lead[1]}</h2><p>${lead[3]}</p><span class="hora">${lead[2]}</span></div>`;
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
const cidades=['Todas',...new Set(cid.map(c=>c[5]))];
const pinta=c=>{$('cid').innerHTML=cid.filter(n=>c==='Todas'||n[5]===c).slice(0,4).map(n=>card(n)).join('');
 $('chips').querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.textContent===c))};
$('chips').innerHTML=cidades.map(c=>`<button type="button">${c}</button>`).join('');
$('chips').addEventListener('click',e=>{if(e.target.tagName==='BUTTON')pinta(e.target.textContent)});pinta('Todas');
}

try{$('hoje').textContent=new Date().toLocaleDateString('pt-BR',{day:'numeric',month:'long',year:'numeric',timeZone:'America/Cuiaba'})}catch(e){}
const nav=$('nav'),io=new IntersectionObserver(([e])=>nav.classList.toggle('solto',!e.isIntersecting));io.observe(document.querySelector('.head'));
$('bt').addEventListener('click',()=>{const on=$('bx').classList.toggle('on');$('bt').setAttribute('aria-expanded',on);if(on)$('q').focus()});
$('fb-form').addEventListener('submit',e=>e.preventDefault());
/* tema do site: system segue o aparelho; light/dark fixam; a escolha fica guardada neste navegador */
const raiz=document.documentElement,tema=$('tema'),bola=tema.querySelector('.tema-bola'),tbs=[...tema.querySelectorAll('button')];
const aplica=t=>{if(t==='system')raiz.removeAttribute('data-theme');else raiz.dataset.theme=t;
 tbs.forEach((b,i)=>{const on=b.dataset.t===t;b.setAttribute('aria-checked',on);b.tabIndex=on?0:-1;if(on)bola.style.transform=`translateX(${i*24}px)`});
 try{localStorage.setItem('imt-tema',t)}catch(e){}};
tema.addEventListener('click',e=>{const b=e.target.closest('button');if(b)aplica(b.dataset.t)});
tema.addEventListener('keydown',e=>{const i=tbs.indexOf(document.activeElement);if(i<0)return;const d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(!d)return;e.preventDefault();const b=tbs[(i+d+3)%3];aplica(b.dataset.t);b.focus()});
let salvo='system';try{salvo=localStorage.getItem('imt-tema')||'system'}catch(e){}
bola.style.transition='none';aplica(salvo);bola.offsetWidth;bola.style.transition='';

/* menu em abas */
const menu=$('menu'),hov=menu.querySelector('.hov'),ind=menu.querySelector('.ind'),abas=[...menu.querySelectorAll('a')];
const poe=(m,a)=>{m.style.left=a.parentElement.offsetLeft+'px';m.style.width=a.offsetWidth+'px'};
const ativa=a=>{abas.forEach(x=>x.removeAttribute('aria-current'));a.setAttribute('aria-current','page');poe(ind,a)};
abas.forEach(a=>{const v=()=>{poe(hov,a);hov.style.opacity=1};a.addEventListener('mouseenter',v);a.addEventListener('focus',v);a.addEventListener('click',()=>ativa(a))});
menu.addEventListener('mouseleave',()=>hov.style.opacity=0);menu.addEventListener('focusout',()=>hov.style.opacity=0);
const inicio=()=>{ind.style.transition='none';poe(ind,menu.querySelector('[aria-current]')||abas[0]);ind.offsetWidth;ind.style.transition=''};
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
})();
