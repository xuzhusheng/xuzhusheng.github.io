import{r as o,u as l,j as s}from"./index-BPWnRy_c.js";import{c as d,l as p,a as f,b as u,d as m}from"./index-BKul1m0l.js";d.autoReplaceSvg="nest";p.add(f,u);m.watch();const j=a=>window.open(a,"_blank","noopener,noreferrer");function h(){const a=o.useRef(null),r=l(a,{rootMargin:"50%"}),[t,c]=o.useState([]);o.useEffect(()=>{r&&(async()=>{const e=await(await fetch("/profile.json")).json();c(e.data.user.pinnedItems.edges)})()},[r]);const i=t.map(n=>{const e=n.node;return s.jsxs("div",{className:"project-card",onClick:()=>j(e.url),children:[s.jsx("h3",{children:e.name}),s.jsx("p",{children:e.description}),s.jsxs("div",{className:"statistics",children:[s.jsxs("span",{className:"fork",children:[s.jsx("i",{className:"fa-solid fa-code-fork"}),e.forkCount]}),s.jsxs("span",{className:"star",children:[s.jsx("i",{className:"fa-solid fa-star"}),e.stargazers.totalCount]}),s.jsxs("span",{className:"language",children:[s.jsx("span",{className:"language-color",style:{backgroundColor:e.primaryLanguage.color}}),e.primaryLanguage.name]})]})]},e.id)});return s.jsxs("div",{className:"section container",ref:a,children:[s.jsx("h2",{children:"Featured Projects"}),r&&s.jsx("div",{className:"section projects-container",children:i})]})}export{h as default};