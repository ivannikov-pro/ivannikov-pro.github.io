"use strict";(self.webpackChunkivannikov_pro_website=self.webpackChunkivannikov_pro_website||[]).push([[279],{7286:function(e,t,a){a.r(t),a.d(t,{default:function(){return D}});var l=a(6540),c=a(8865),i=a(2389),n=a(6056),m=a(6348),M=a(6711);function s(e){let{children:t,to:a,text:c}=e;return l.createElement(M.N,{to:a,className:"inner__link"},c)}a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p;const o=[],r=[{id:"all",name:"All"},{id:"trending",name:"Trending"},{id:"blockchain",name:"Blockchain"},{id:"nft",name:"NFT"},{id:"defi",name:"DeFi"},{id:"gamefi",name:"GameFi"},{id:"bitcoin",name:"Bitcoin"},{id:"ethereum",name:"Ethereum"},{id:"altcoins",name:"Altcoins"}];function z(e){const{i18n:t,t:a}=(0,i.Bd)("portfolio"),{0:c,1:n}=(0,l.useState)({id:"all",name:"All"}),{0:z,1:N}=(0,l.useState)(o);return(0,l.useEffect)((()=>{const e=o.filter((e=>e.tags.includes(c.id)));N(e)}),[c]),l.createElement("section",{id:"portfolio",className:"section-portfolio"},l.createElement("br",null),l.createElement("div",{className:"round-portfolio round-portfolio-1"}),l.createElement("div",{className:"round-portfolio round-portfolio-2"}),l.createElement("div",{className:"container"},l.createElement("h2",{className:"title"},a("Portfolio")),l.createElement("p",{className:"desc"},a("portfolioDescription")),l.createElement("div",{className:"portfolio__tabs"},r.map((e=>l.createElement(m.A,{key:e.id,className:"portfolio__tab",size:"small",variant:c.id===e.id?"gradient":"base",active:c.id===e.id,onClick:()=>n(e)},a(e.name))))),l.createElement("div",{className:"row portfolio"},z.slice(0,1).map(((e,c)=>l.createElement("div",{key:c,className:"col-12 col-lg-8"},l.createElement("div",{className:"portfolio"},l.createElement("div",{className:"portfolio-item portfolio-item__big"},e.img&&l.createElement("span",{className:"portfolio-item__img"},l.createElement("img",{src:e.img,srcSet:e.img2x,alt:"",title:""})),l.createElement("div",{className:"portfolio-content"},l.createElement("div",{className:"portfolio-item__date"},l.createElement("span",null,new Date(e.date).toLocaleDateString(t.language))),e.icon&&l.createElement("span",{className:"portfolio-item__icon"},l.createElement("img",{src:e.icon,alt:"",title:""})),l.createElement("div",{className:"portfolio-item__title"},e.title),l.createElement("div",{className:"portfolio-item__desc"},e.desc),l.createElement("div",{className:"portfolio-item__link"},l.createElement(s,{to:e.link,text:a("Read more")})))))))),z.slice(1).map(((e,t)=>l.createElement("div",{key:t,className:"col-12 col-lg-4"},l.createElement("div",{className:"portfolio"},l.createElement("div",{className:"portfolio-item"},e.img&&l.createElement("span",{className:"portfolio-item__img"},l.createElement("img",{src:e.img,srcSet:e.img2x,alt:"",title:""})),l.createElement("div",{className:"portfolio-item__date"},l.createElement("span",null,e.date)),l.createElement("div",{className:"portfolio-item__title"},e.title),l.createElement("div",{className:"portfolio-item__desc"},e.desc),l.createElement("div",{className:"portfolio-item__link"},l.createElement(s,{to:e.link,text:a("Read more")})))))))),l.createElement("div",{className:"portfolio__more"},l.createElement(M.N,{to:"/portfolio"},l.createElement(m.A,{className:"",size:"full",variant:"gradient"},a("More"))))))}var N=a(7643);const d=[{title:{en:"My Blog",ru:"Мой блог"},desc:{en:"In my blog, I talk about blockchain, cryptocurrencies, programming and my life.",ru:"В блоге я рассказываю о блокчейне, криптовалютах, программировании и своей жизни."},icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikljb24vT3V0bGluZS9tb25pdG9yIj4KPHBhdGggaWQ9Ik1hc2siIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzMuMzMzMyAyMy4zMzMzQzMzLjMzMzMgMjQuMjUxNyAzMi41ODY3IDI1IDMxLjY2NjcgMjVIMjAuMTQ1SDE5Ljg1NUg4LjMzMzM0QzcuNDEzMzQgMjUgNi42NjY2OCAyNC4yNTE3IDYuNjY2NjggMjMuMzMzM1YxMEM2LjY2NjY4IDkuMDgxNjcgNy40MTMzNCA4LjMzMzMzIDguMzMzMzQgOC4zMzMzM0gzMS42NjY3QzMyLjU4NjcgOC4zMzMzMyAzMy4zMzMzIDkuMDgxNjcgMzMuMzMzMyAxMFYyMy4zMzMzWk0zMS42NjY3IDVIOC4zMzMzNEM1LjU3NjY4IDUgMy4zMzMzNCA3LjI0MzMzIDMuMzMzMzQgMTBWMjMuMzMzM0MzLjMzMzM0IDI2LjA5IDUuNTc2NjggMjguMzMzMyA4LjMzMzM0IDI4LjMzMzNIMTguMzMzM1YzMS42NjY3SDExLjY2NjdDMTAuNzUgMzEuNjY2NyAxMCAzMi40MTY3IDEwIDMzLjMzMzNDMTAgMzQuMjUgMTAuNzUgMzUgMTEuNjY2NyAzNUgyOC4zMzMzQzI5LjI1IDM1IDMwIDM0LjI1IDMwIDMzLjMzMzNDMzAgMzIuNDE2NyAyOS4yNSAzMS42NjY3IDI4LjMzMzMgMzEuNjY2N0gyMS42NjY3VjI4LjMzMzNIMzEuNjY2N0MzNC40MjMzIDI4LjMzMzMgMzYuNjY2NyAyNi4wOSAzNi42NjY3IDIzLjMzMzNWMTBDMzYuNjY2NyA3LjI0MzMzIDM0LjQyMzMgNSAzMS42NjY3IDVaIiBmaWxsPSJ3aGl0ZSIvPgo8bWFzayBpZD0ibWFzazBfMjAxXzExMzMiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjMiIHk9IjUiIHdpZHRoPSIzNCIgaGVpZ2h0PSIzMCI+CjxwYXRoIGlkPSJNYXNrXzIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzMuMzMzMyAyMy4zMzMzQzMzLjMzMzMgMjQuMjUxNyAzMi41ODY3IDI1IDMxLjY2NjcgMjVIMjAuMTQ1SDE5Ljg1NUg4LjMzMzM0QzcuNDEzMzQgMjUgNi42NjY2OCAyNC4yNTE3IDYuNjY2NjggMjMuMzMzM1YxMEM2LjY2NjY4IDkuMDgxNjcgNy40MTMzNCA4LjMzMzMzIDguMzMzMzQgOC4zMzMzM0gzMS42NjY3QzMyLjU4NjcgOC4zMzMzMyAzMy4zMzMzIDkuMDgxNjcgMzMuMzMzMyAxMFYyMy4zMzMzWk0zMS42NjY3IDVIOC4zMzMzNEM1LjU3NjY4IDUgMy4zMzMzNCA3LjI0MzMzIDMuMzMzMzQgMTBWMjMuMzMzM0MzLjMzMzM0IDI2LjA5IDUuNTc2NjggMjguMzMzMyA4LjMzMzM0IDI4LjMzMzNIMTguMzMzM1YzMS42NjY3SDExLjY2NjdDMTAuNzUgMzEuNjY2NyAxMCAzMi40MTY3IDEwIDMzLjMzMzNDMTAgMzQuMjUgMTAuNzUgMzUgMTEuNjY2NyAzNUgyOC4zMzMzQzI5LjI1IDM1IDMwIDM0LjI1IDMwIDMzLjMzMzNDMzAgMzIuNDE2NyAyOS4yNSAzMS42NjY3IDI4LjMzMzMgMzEuNjY2N0gyMS42NjY3VjI4LjMzMzNIMzEuNjY2N0MzNC40MjMzIDI4LjMzMzMgMzYuNjY2NyAyNi4wOSAzNi42NjY3IDIzLjMzMzNWMTBDMzYuNjY2NyA3LjI0MzMzIDM0LjQyMzMgNSAzMS42NjY3IDVaIiBmaWxsPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfMjAxXzExMzMpIj4KPGcgaWQ9IiYjMjQwOyYjMTU5OyYjMTQyOyYjMTY4OyBDb2xvciI+CjxyZWN0IGlkPSJCYXNlIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9nPgo8L2c+Cjwvc3ZnPgo="}];function g(e){const{i18n:t,t:a}=(0,i.Bd)("projects");return l.createElement("section",{id:"projects",className:"section-projects"},l.createElement("br",null),l.createElement("div",{className:"projects-round projects-round-1"}),l.createElement("div",{className:"container"},l.createElement("h2",{className:"title"},a("Projects")),l.createElement("p",{className:"desc"},a("projectsDescription")),l.createElement("div",{className:"row projects"},d.map(((e,a)=>l.createElement("div",{key:a,className:"col-12 col-lg-4"},l.createElement("div",{className:"project"},l.createElement("div",{className:"project-item"},e.icon&&l.createElement("span",{className:"project-item__icon"},l.createElement("img",{src:e.icon,alt:"",title:""})),l.createElement("div",{className:"project-item__title"},e.title[t.language]),l.createElement("div",{className:"project-item__desc"},e.desc[t.language]),l.createElement("div",{className:"project-item__soc"},l.createElement(N.A,{links:e.links}))))))))))}const j=[],E=[{id:"all",name:"All"},{id:"trending",name:"Trending"},{id:"blockchain",name:"Blockchain"},{id:"nft",name:"NFT"},{id:"defi",name:"DeFi"},{id:"gamefi",name:"GameFi"},{id:"bitcoin",name:"Bitcoin"},{id:"ethereum",name:"Ethereum"},{id:"altcoins",name:"Altcoins"}];function I(e){const{t:t}=(0,i.Bd)("blog"),{0:a,1:c}=(0,l.useState)({id:"all",name:"All"}),{0:n,1:o}=(0,l.useState)(j);return(0,l.useEffect)((()=>{const e=j.filter((e=>e.tags.includes(a.id)));o(e)}),[a]),l.createElement("section",{id:"blog",className:"section-blog"},l.createElement("br",null),l.createElement("div",{className:"round-blog round-blog-1"}),l.createElement("div",{className:"round-blog round-blog-2"}),l.createElement("div",{className:"container"},l.createElement("h2",{className:"title"},t("Blog")),l.createElement("p",{className:"desc"},t("blogDescription")),l.createElement("div",{className:"blog__tabs"},E.map(((e,i)=>l.createElement(m.A,{key:e.id,size:"small",className:"blog__tab",variant:a.id===e.id?"gradient":"base",active:a.id===e.id,onClick:()=>c(e)},t(e.name))))),l.createElement("div",{className:"row blog"},n.slice(0,1).map(((e,a)=>l.createElement("div",{key:a,className:"col-12 col-lg-8"},l.createElement("div",{className:"blog"},l.createElement("div",{className:"blog-item blog-item__big"},e.img&&l.createElement("span",{className:"blog-item__img"},l.createElement("img",{src:e.img,srcSet:e.img2x,alt:"",title:""})),l.createElement("div",{className:"blog-content"},l.createElement("div",{className:"blog-item__date"},l.createElement("span",null,e.date)),e.icon&&l.createElement("span",{className:"blog-item__icon"},l.createElement("img",{src:e.icon,alt:"",title:""})),l.createElement("div",{className:"blog-item__title"},e.title),l.createElement("div",{className:"blog-item__desc"},e.desc),l.createElement("div",{className:"blog-item__link"},l.createElement(s,{to:e.link,text:t("Read more")})))))))),n.slice(1).map(((e,a)=>l.createElement("div",{key:a,className:"col-12 col-lg-4"},l.createElement("div",{className:"blog"},l.createElement("div",{className:"blog-item"},e.img&&l.createElement("span",{className:"blog-item__img"},l.createElement("img",{src:e.img,srcSet:e.img2x,alt:"",title:""})),l.createElement("div",{className:"blog-item__date"},l.createElement("span",null,e.date)),l.createElement("div",{className:"blog-item__title"},e.title),l.createElement("div",{className:"blog-item__desc"},e.desc),l.createElement("div",{className:"blog-item__link"},l.createElement(s,{to:e.link,text:t("Read more")})))))))),l.createElement("div",{className:"portfolio__more"},l.createElement(M.N,{to:"/blog"},l.createElement(m.A,{className:"",size:"full",variant:"gradient"},t("More"))))))}var u=a(6004),p=a(7134);var D=()=>{const{theme:e}=(0,l.useContext)(c.Dx),{t:t}=(0,i.Bd)("translation"),{open:a}=(0,p.hS)("GetInTouchModal");return l.createElement(n.A,{keywords:["developer","development","blockchain","crypto","ethereum","web3","nft","smart contract","token"]},l.createElement("div",{id:"front "+e,style:{minHeight:"95vh"}},l.createElement("main",{className:"main"},l.createElement("section",{id:"home",className:"section section-start"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-12 col-md-7 col-lg-6 col-xl-6 relative"},l.createElement("div",{className:"pre-title"},l.createElement("span",null,t("Aleksandr Ivannikov"))),l.createElement("h1",{className:""},t("ProjectSlogan")),l.createElement("p",{className:"desc"},t("Introduction")),l.createElement(m.A,{variant:"gradient",size:"static",className:"",onClick:a},t("Get in Touch"))),l.createElement("div",{className:"col-12 col-md-5 col-lg-6 col-xl-6"},l.createElement("div",{className:"start__image"},l.createElement("img",{alt:t("IVANNIKOV.PRO"),title:t("IVANNIKOV.PRO"),src:u.A}))))),l.createElement("br",null)),l.createElement(g,null),l.createElement(I,null),l.createElement(z,null))))}},6004:function(e,t,a){t.A=a.p+"static/main-ea93608a8a6b40bc2e18348041b646cc.webp"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-20d44cf0e6a062ad6ed0.js.map