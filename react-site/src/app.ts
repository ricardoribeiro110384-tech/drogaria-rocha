// @ts-nocheck
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

"use strict";
const h=React.createElement, WA="5589981166747";
const ADDRESS="Rua Raimundo Silva, 392, Centro, São Raimundo Nonato - PI, 64770-000";
const mapUrl="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(ADDRESS);
const wa=(text)=>"https://wa.me/"+WA+(text?"?text="+encodeURIComponent(text):"");
const catalog=[
["solar","Nivea","Protetor Solar Sun Protect & Hidrata FPS 50","125 ml","Pele","https://www.farmaciareal.com.br/uploads/farmaciareal/produtos_imagens/nive501406.jpg","Proteção solar"],
["huggies","Huggies","Fralda Supreme Care M","80 unidades","Infantil","https://product-data.raiadrogasil.io/images/3447848.webp","Mamãe e bebê"],
["babyshampoo","Johnson's Baby","Shampoo Baby Regular","400 ml","Infantil","https://product-data.raiadrogasil.io/images/9120880.webp","Banho do bebê"],
["niveacreme","Nivea","Creme Hidratante Lata","56 g","Pele","https://product-data.raiadrogasil.io/images/18904514.webp","Hidratação"],
["protex","Protex","Sabonete Líquido Erva Doce","250 ml","Higiene","https://drogariavenancio.vtexassets.com/arquivos/ids/1131611/20587_z.jpg?v=638463596570130000","Higiene"],
["effaclar","La Roche-Posay","Gel de Limpeza Effaclar Alta Tolerância","300 g","Pele","https://www.laroche-posay.com.br/-/media/project/loreal/brand-sites/lrp/america/br/products/effaclar/2023/gel-alta-tolerencia/imagem-effaclar-alta-tolerencia-packshot-2.png","Dermocosméticos"],
["pampers","Pampers","Fralda Confort Sec G","98 unidades","Infantil","https://img.drogasil.com.br/catalog/product/f/r/fraldas-pampers-confort-sec-g-98-unidades-513710-1.jpg?height=450&quality=85&type=resize&width=450","Mamãe e bebê"],
["dove","Dove","Sabonete em Barra Original Cremoso","90 g","Higiene","https://dannycosmeticos.vtexassets.com/arquivos/ids/254207/sabonete-em-barra-dove-original-cremoso-90g-7898422746759-5842.jpg?v=637902993508570000","Banho"],
["bepantol","Bepantol","Baby Creme Preventivo de Assaduras","30 g","Infantil","https://product-data.raiadrogasil.io/images/15585483.webp","Mamãe e bebê"],
["niveadesodorante","Nivea","Desodorante Aerosol Black & White Authentic","150 ml","Higiene","https://product-data.raiadrogasil.io/images/19635681.webp","Higiene pessoal"],
["colgate","Colgate","Creme Dental Total 12 Clean Mint","90 g","Higiene","https://static-webv8.jet.com.br/drogaosuper/produto/multifotos/hd/4016052019152015.jpg","Higiene bucal"]
];
const icons={
plus:"M12 5v14M5 12h14",search:"M21 21l-4.4-4.4M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16",bag:"M6 8h12l1 13H5L6 8ZM9 8V5a3 3 0 0 1 6 0v3",arrow:"M5 12h14m-6-6 6 6-6 6",back:"M19 12H5m6 6-6-6 6-6",message:"M20 11a8 8 0 0 1-8 8 9 9 0 0 1-4-.9L3 20l1.9-5A8 8 0 1 1 20 11Z",map:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 0 1 16 0Zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6",clock:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l4 2",baby:"M12 2a10 10 0 0 0-6 18M12 2a10 10 0 0 1 6 18M8 12h.01M16 12h.01M9 16c2 2 4 2 6 0",heart:"M20 4c-2-2-5-2-8 1-3-3-6-3-8-1s-2 5 0 8l8 8 8-8c2-3 2-6 0-8Z",sun:"M12 2v2M12 20v2M4 12H2m20 0h-2M5 5l2 2m12 12-2-2M19 5l-2 2M5 19l2-2M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10",drop:"M12 22a8 8 0 0 0 8-8c0-4-8-12-8-12S4 10 4 14a8 8 0 0 0 8 8",pill:"M10 3a7 7 0 0 1 10 10l-7 7A7 7 0 0 1 3 10l7-7ZM6 16 16 6",gift:"M20 12v9H4v-9M2 7h20v5H2V7Zm10 0v14M12 7S6 6 6 3s6-2 6 4Zm0 0s6-1 6-4-6-2-6 4Z",phone:"M22 17v3a2 2 0 0 1-2 2C10 21 3 14 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2l.5 2.5L7 9a16 16 0 0 0 8 8l2.5-2.5L20 15a2 2 0 0 1 2 2",shield:"M12 22s9-4 9-10V5l-9-3-9 3v7c0 6 9 10 9 10ZM8 12l3 3 5-6",x:"M18 6 6 18M6 6l12 12",menu:"M3 6h18M3 12h18M3 18h18",store:"M3 10l2-6h14l2 6v2H3v-2Zm2 2v8h14v-8M9 20v-6h6v6"
};
const Icon=({name,size=20})=>h("svg",{className:"icon",width:size,height:size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},h("path",{d:icons[name]||icons.shield}));
function Photo({src,alt}){
 const [failed,setFailed]=React.useState(false);
 return failed?h("div",{className:"image-failed"},h(Icon,{name:"bag",size:25}),h("span",null,alt)):h("img",{src,alt,loading:"lazy",decoding:"async",onError:()=>setFailed(true)});
}
const Logo=()=>h("a",{href:"#inicio",className:"logo","aria-label":"Drogaria Rocha"},h("span",{className:"logo-mark official-logo"},h("img",{src:"./assets/logo-rocha.webp",alt:"Logomarca oficial da Drogaria Rocha"})),h("span",{className:"logo-type"},"DROGARIA",h("b",null,"ROCHA."),h("small",null,"Fortalecendo sua saúde e seu bem estar")));
const groups=[
["Todos","store","Todos"],["Higiene e beleza","drop","Higiene"],["Cuidados com a pele","sun","Pele"],["Mamãe e bebê","baby","Infantil"],["Vitaminas","heart","Vitaminas"],["Medicamentos","pill","Medicamentos"]
];
function Product({p,add}){
 return h("article",{className:"product",key:p[0]},h("div",{className:"product-photo"},h("span",{className:"tag"},p[6]),h(Photo,{src:p[5],alt:"Embalagem de "+p[1]+" "+p[2]})),
 h("div",{className:"product-details"},h("span",{className:"product-brand"},p[1]),h("h3",null,p[2]),h("div",{className:"pack-info"},p[3]),h("div",{className:"status"},h("small",null,"Preço e disponibilidade"),"Sob consulta"),h("button",{className:"add",type:"button",onClick:()=>add(p[0])},h(Icon,{name:"plus",size:15}),"Adicionar à lista")));
}
function App(){
 const [slide,setSlide]=React.useState(0),[cat,setCat]=React.useState("Todos"),[query,setQuery]=React.useState(""),[open,setOpen]=React.useState(false),[toast,setToast]=React.useState("");
 const [cart,setCart]=React.useState(()=>{try{const a=JSON.parse(localStorage.getItem("rocha-nova-cart")||"{}");return a&&typeof a==="object"&&!Array.isArray(a)?a:{}}catch(e){return {}}});
 const total=Object.values(cart).reduce((n,x)=>n+Number(x||0),0);
 React.useEffect(()=>{try{localStorage.setItem("rocha-nova-cart",JSON.stringify(cart))}catch(e){}},[cart]);
 React.useEffect(()=>{const i=setInterval(()=>{if(!document.hidden)setSlide(x=>(x+1)%3)},5000);return()=>clearInterval(i)},[]);
 React.useEffect(()=>{const key=e=>{if(e.key==="Escape")setOpen(false)};document.addEventListener("keydown",key);return()=>document.removeEventListener("keydown",key)},[]);
 React.useEffect(()=>{document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);
 React.useEffect(()=>{if(!toast)return;const t=setTimeout(()=>setToast(""),2300);return()=>clearTimeout(t)},[toast]);
 const norm=x=>x.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
 const shown=catalog.filter(p=>(cat==="Todos"||p[4]===cat)&&(!query||norm(p[1]+" "+p[2]+" "+p[3]).includes(norm(query))));
 const navTo=(c)=>{setCat(c);setQuery("");document.getElementById("produtos")?.scrollIntoView({behavior:"smooth"})};
 const add=(id)=>{setCart(old=>Object.assign({},old,{[id]:Math.min(99,(Number(old[id])||0)+1)}));setToast("Produto adicionado à lista")};
 const change=(id,n)=>setCart(old=>{const a=Object.assign({},old);a[id]=Math.max(0,Math.min(99,(Number(a[id])||0)+n));if(!a[id])delete a[id];return a});
 const send=()=>{const lines=Object.keys(cart).filter(k=>cart[k]>0).map(k=>{const p=catalog.find(x=>x[0]===k);return p?(cart[k]+"x "+p[1]+" "+p[2]+" — "+p[3]):null}).filter(Boolean);if(!lines.length)return;window.open(wa("Olá, Drogaria Rocha! Gostaria de consultar preço e disponibilidade:\n\n• "+lines.join("\n• ")+"\n\nAguardo confirmação, obrigado(a)!"),"_blank","noopener")};
 const form=()=>h("form",{className:"search",role:"search",onSubmit:e=>{e.preventDefault();document.getElementById("produtos")?.scrollIntoView({behavior:"smooth"})}},h("span",{className:"search-icon"},h(Icon,{name:"search"})),h("input",{type:"search","aria-label":"Pesquisar produtos",value:query,placeholder:"O que você procura hoje?",onChange:e=>setQuery(e.target.value)}),h("button",{type:"submit"},"Buscar"));
 const slides=[
 ["DROGARIA ROCHA • SUA SAÚDE EM PRIMEIRO LUGAR","Fortalecendo sua saúde","e seu bem estar.","Uma drogaria perto de você, com cuidado e atenção à sua família.","Ver produtos","Todos","slide-brands",0,"Seleção de produtos da Drogaria Rocha"],
 ["CUIDADOS PESSOAIS","Cuidados para","seu dia a dia.","Conheça nossa vitrine de higiene e cuidados pessoais.","Ver higiene e beleza","Higiene","slide-cream",2,"Gel fixador Bozzano"],
 ["CONSULTE NOSSAS CAMPANHAS","Ofertas e novidades","para você.","Confira com nossa equipe quais promoções estão disponíveis na loja.","Consultar ofertas","Ofertas","slide-orange",1,"Arte de oferta especial"]
 ];
 const campaigns=[
  {name:"Bozzano",type:"Higiene e beleza",desc:"Linha de cuidados masculinos. Consulte apresentações e disponibilidade.",frame:2,message:"Olá! Quero consultar a linha Bozzano."},
  {name:"Flanax XR",type:"Informações sobre medicamentos",desc:"Material publicitário do fabricante. Consulte o farmacêutico.",frame:3,message:"Olá! Gostaria de informações sobre Flanax XR."},
  {name:"Novalgina Flash",type:"Informações sobre medicamentos",desc:"Material do fabricante. Procure orientação profissional para o uso.",frame:5,message:"Olá! Gostaria de informações sobre Novalgina Flash."},
  {name:"Centrum Gender",type:"Material promocional",desc:"O valor que aparece na arte não foi confirmado pela Drogaria Rocha.",frame:4,flag:"Preço não confirmado",message:"Olá! Quais são os preços atuais de Centrum Gender?"},
  {name:"Neo Química — Vale por Dois",type:"Campanha anterior",desc:"O material enviado indica encerramento em 31 de outubro de 2026.",frame:6,flag:"Campanha encerrada",closed:true},
  {name:"Oferta especial",type:"Consulte as condições",desc:"Pergunte à nossa equipe quais ofertas estão disponíveis hoje.",frame:1,message:"Olá! Quais ofertas estão disponíveis na Drogaria Rocha?"}
 ];
 let touchX=0;
 return h(React.Fragment,null,
  h("div",{className:"micro"},h("div",{className:"container"},h("strong",null,"DROGARIA ROCHA • SÃO RAIMUNDO NONATO - PI"),h("span",{className:"micro-right"},"Fortalecendo sua saúde e seu bem estar",h("i",null,"•"),h("a",{href:"tel:+5589981166747"},"(89) 98116-6747")))),
  h("header",{className:"header"},h("div",{className:"container header-main"},h(Logo),form(),h("div",{className:"header-actions"},h("a",{className:"contact",href:wa(),target:"_blank",rel:"noopener noreferrer"},h(Icon,{name:"message"}),h("span",null,"Fale com a equipe",h("small",null,"Atendimento WhatsApp"))),h("button",{className:"cart-trigger",onClick:()=>setOpen(true)},h(Icon,{name:"bag"}),h("span",null,"Minha lista"),h("span",{className:"counter"},total))))),
  h("nav",{className:"nav"},h("div",{className:"container nav-scroll"},h("button",{className:"nav-link featured",onClick:()=>document.getElementById("categorias")?.scrollIntoView({behavior:"smooth"})},h(Icon,{name:"menu",size:16}),"Categorias"),...groups.slice(1).map(g=>h("button",{className:"nav-link",key:g[2],onClick:()=>navTo(g[2])},g[0])),h("a",{href:"#localizacao",className:"nav-end"},"Nossa loja"))),
  h("main",{id:"inicio"},h("div",{className:"container"},h("div",{className:"crumb"},"Início",h("span",null,"/"),h("b",null,"Drogaria Rocha")),
  h("div",{className:"hero",role:"region","aria-roledescription":"carrossel","aria-label":"Campanhas da Drogaria Rocha",onTouchStart:e=>{touchX=e.changedTouches[0].clientX},onTouchEnd:e=>{const dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>55)setSlide(v=>(v+(dx<0?1:2))%3)}},
    h("div",{className:"hero-track"},...slides.map((item,i)=>h("section",{key:i,className:"slide "+item[6]+(slide===i?" active":""),"aria-hidden":slide!==i,inert:slide!==i},
      h("div",{className:"slide-copy"},h("div",{className:"slide-label"},item[0]),h(i===0?"h1":"h2",{className:"slide-title"},item[1],h("strong",null,item[2])),h("p",{className:"slide-desc"},item[3]),h("button",{className:"hero-btn",onClick:()=>item[5]==="Ofertas"?window.open(wa("Olá, gostaria de conhecer as ofertas disponíveis na Drogaria Rocha."),"_blank","noopener"):navTo(item[5])},item[4],h(Icon,{name:"arrow",size:15}))),
      i===0?h("div",{className:"hero-art hero-art-brands"},h("img",{className:"brand-montage",src:"./assets/banner-produtos.webp",alt:item[8]})):
        h("div",{className:"hero-art campaign-visual"},h("div",{className:"campaign-sprite-art",style:{backgroundPosition:"center "+(item[7]*100/6)+"%"},role:"img","aria-label":item[8]}))
    ))),
    h("div",{className:"hero-bottom"},h("div",{className:"hero-dots"},...slides.map((s,i)=>h("button",{key:i,type:"button",className:"dot-btn"+(slide===i?" selected":""),"aria-label":"Ir para o banner "+(i+1),"aria-current":slide===i?"true":undefined,onClick:()=>setSlide(i)},h("span",null)))),h("div",{className:"hero-arrows"},h("button",{onClick:()=>setSlide(x=>(x+2)%3),"aria-label":"Banner anterior"},h(Icon,{name:"back",size:14})),h("small",null,String(slide+1).padStart(2,"0")+" / "+String(slides.length).padStart(2,"0")),h("button",{onClick:()=>setSlide(x=>(x+1)%3),"aria-label":"Próximo banner"},h(Icon,{name:"arrow",size:14}))))),
  h("div",{className:"trust"},...[["store","Nossa loja","No Centro da cidade"],["message","Atendimento","Consulte no WhatsApp"],["bag","Monte sua lista","Vários produtos de uma vez"],["shield","Sem surpresas","Preço sob consulta"]].map(x=>h("div",{className:"trust-item",key:x[1]},h(Icon,{name:x[0],size:24}),h("span",null,h("b",null,x[1]),h("small",null,x[2]))))),
  h("section",{className:"section",id:"categorias"},h("div",{className:"section-header"},h("div",null,h("span",{className:"label"},"COMPRAR POR CATEGORIA"),h("h2",null,"O que você procura hoje?"))),h("div",{className:"categories"},...groups.map(g=>h("button",{className:"category",key:g[2],onClick:()=>navTo(g[2])},h("span",{className:"category-icon"},h(Icon,{name:g[1],size:23})),h("b",null,g[0]))))))),
  h("section",{className:"catalog-area",id:"produtos"},h("div",{className:"container"},h("div",{className:"catalog-head"},h("div",null,h("span",{style:{fontSize:10,color:"#d95908",letterSpacing:2,fontWeight:800}},"VITRINE DA ROCHA"),h("h2",null,"Produtos para a sua rotina"),h("p",null,"Consulte preços e disponibilidade com a equipe da Drogaria Rocha."))),h("div",{className:"catalog-controls"},...groups.map(g=>h("button",{key:g[2],className:cat===g[2]?"active":"",onClick:()=>{setCat(g[2]);setQuery("")}},g[0]))),
  h("div",{className:"product-grid"},shown.length?shown.map(p=>h(Product,{key:p[0],p,add})):h("div",{className:"empty"},h("b",null,query?"Nenhum produto encontrado na vitrine.":"Ainda não cadastramos produtos dessa categoria na vitrine."),h("span",null,"Você pode perguntar diretamente ao nosso atendimento."),h("br"),h("a",{href:wa("Olá! Gostaria de consultar produtos na Drogaria Rocha."),target:"_blank",rel:"noopener noreferrer"},"Consultar no WhatsApp →"))),
  h("p",{className:"note"},"Imagens ilustrativas das embalagens reais. Produtos, preço e estoque sujeitos à confirmação. Esta página não realiza vendas online."),
  h("div",{className:"quote-strip"},h("div",null,h("h3",null,"Encontrou o que procura?"),h("p",null,"Adicione produtos à lista e envie sua consulta em uma só mensagem.")),h("button",{onClick:()=>setOpen(true)},"Ver minha lista (",total,") →")))),
  h("div",{className:"container"},
   h("section",{className:"campaign-section",id:"campanhas"},
    h("div",{className:"section-header"},h("div",null,h("span",{className:"label"},"CAMPANHAS E NOVIDADES"),h("h2",null,"Marcas em destaque"),h("p",null,"Materiais das marcas para você conhecer. Consulte condições, preços e disponibilidade na loja."))),
    h("div",{className:"campaign-grid"},...campaigns.map((c,i)=>h("article",{className:"campaign-card"+(c.closed?" is-closed":""),key:c.name},
      h("div",{className:"campaign-copy"},h("span",{className:"campaign-type"},c.type),h("h3",null,c.name),h("p",null,c.desc),
        c.closed?h("span",{className:"campaign-closed"},"Não é promoção vigente"):
        h("button",{type:"button",onClick:()=>window.open(wa(c.message),"_blank","noopener")},"Consultar na loja ",h(Icon,{name:"arrow",size:14}))),
      h("div",{className:"campaign-sprite-art campaign-card-art",role:"img","aria-label":"Material visual enviado: "+c.name,style:{backgroundPosition:"center "+(c.frame*100/6)+"%"}}),
      c.flag?h("span",{className:"campaign-flag"+(c.closed?" expired":"")},c.flag):null
    ))),
    h("p",{className:"campaign-disclaimer"},"A Drogaria Rocha não confirmou os preços impressos nas artes. A campanha Neo Química Vale por Dois terminou em outubro de 2026 e não está anunciada como vigente. Materiais sobre medicamentos não substituem orientação farmacêutica.")
   ),
   h("section",{className:"about",id:"localizacao"},h("div",{className:"about-panel"},h("div",{className:"label"},"DROGARIA ROCHA • SÃO RAIMUNDO NONATO"),h("h2",null,"A sua drogaria está pertinho."),h("p",null,"Consulte a nossa equipe pelo WhatsApp e encontre a Drogaria Rocha no Centro de São Raimundo Nonato."),h("div",{className:"details"},h("span",null,h(Icon,{name:"map",size:18}),"Rua Raimundo Silva, 392 — Centro"),h("span",null,h(Icon,{name:"phone",size:18}),"(89) 98116-6747"),h("span",null,h(Icon,{name:"clock",size:18}),"Seg. a sex. 7h–21h • Sáb. 7h–18h")),h("div",{className:"buttons"},h("a",{href:mapUrl,target:"_blank",rel:"noopener noreferrer"},"Como chegar"),h("a",{href:wa(),className:"outline",target:"_blank",rel:"noopener noreferrer"},"WhatsApp"))),
  h("div",{className:"about-map"},h("iframe",{title:"Localização Drogaria Rocha",src:"https://www.google.com/maps?q="+encodeURIComponent(ADDRESS)+"&output=embed",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})))),
  h("footer",{className:"footer"},h("div",{className:"container"},h("div",{className:"footer-cols"},h("div",null,h(Logo),h("p",null,"Cuidar faz parte. Sua drogaria em São Raimundo Nonato, agora com uma nova vitrine digital.")),h("div",null,h("h4",null,"Navegação"),h("nav",null,h("a",{href:"#inicio"},"Início"),h("a",{href:"#categorias"},"Categorias"),h("a",{href:"#produtos"},"Produtos"),h("a",{href:"#localizacao"},"Nossa loja"))),h("div",null,h("h4",null,"Atendimento"),h("nav",null,h("a",{href:wa(),target:"_blank",rel:"noopener noreferrer"},"WhatsApp: (89) 98116-6747"),h("a",{href:mapUrl,target:"_blank",rel:"noopener noreferrer"},"Rua Raimundo Silva, 392 — Centro")))),h("div",{className:"footer-legal"},h("span",null,"© "+new Date().getFullYear()+" Drogaria Rocha. Todos os direitos reservados."),h("span",null,"Vitrine informativa. Não realiza compras, pagamentos ou reservas online.")))),
  h("a",{className:"float-chat",href:wa(),target:"_blank",rel:"noopener noreferrer","aria-label":"Falar pelo WhatsApp"},h(Icon,{name:"message",size:26})),
  open?h("div",{className:"overlay",onClick:()=>setOpen(false)},h("aside",{className:"drawer",role:"dialog","aria-modal":"true","aria-label":"Minha lista de consulta",onClick:e=>e.stopPropagation()},h("div",{className:"drawer-top"},h("div",null,h("h2",null,"Minha lista de consulta"),h("small",null,total+" produto(s) • sem compromisso")),h("button",{className:"drawer-close",onClick:()=>setOpen(false),"aria-label":"Fechar lista"},h(Icon,{name:"x",size:17}))),h("div",{className:"drawer-items"},total?Object.keys(cart).filter(id=>cart[id]>0).map(id=>{const p=catalog.find(x=>x[0]===id);return p?h("div",{className:"cart-row",key:id},h(Photo,{src:p[5],alt:p[1]}),h("div",{className:"info"},h("b",null,p[1]+" "+p[2]),h("small",null,p[3])),h("div",{className:"qty"},h("button",{onClick:()=>change(id,-1),"aria-label":"Remover uma unidade"},"−"),h("span",null,cart[id]),h("button",{onClick:()=>change(id,1),"aria-label":"Adicionar uma unidade"},"+"))):null}):h("div",{className:"drawer-empty"},h(Icon,{name:"bag",size:32}),h("b",null,"Sua lista está vazia"),h("p",null,"Adicione produtos para enviar uma consulta."))),h("div",{className:"drawer-footer"},h("p",null,"O WhatsApp será aberto com sua lista. A loja confirmará preço e disponibilidade."),h("button",{disabled:!total,onClick:send},h(Icon,{name:"message",size:18}),"Consultar pelo WhatsApp")))):null,
  toast?h("div",{className:"toast",role:"status"},toast):null
 );
}
createRoot(document.getElementById("root")).render(h(App));
