import{r as t,u,j as s}from"./index-YU-KFwY4.js";import{c as f,l as m,a as j,b as x,d as g}from"./index-BKul1m0l.js";f.autoReplaceSvg="nest";m.add(j,x);g.watch();const h=r=>window.open(r,"_blank","noopener,noreferrer");function v(){const r=t.useRef(null),n=u(r,{rootMargin:"50%"}),[c,i]=t.useState([]);t.useEffect(()=>{n&&(async()=>{const e=await(await fetch("/profile.json")).json();i(e.data.user.pinnedItems.edges)})()},[n]);const l=o=>o.sort((a,p)=>a.size-p.size).slice(-3).map(a=>a.node).map(a=>s.jsxs("span",{className:"language",children:[s.jsx("span",{className:"language-color",style:{backgroundColor:a.color}}),a.name]},a.name)),d=c.map(o=>{const e=o.node;return s.jsxs("div",{className:"project-card",onClick:()=>h(e.url),children:[s.jsx("h3",{children:e.name}),s.jsx("p",{children:e.description}),s.jsxs("div",{className:"statistics",children:[s.jsxs("span",{className:"fork",children:[s.jsx("i",{className:"fa-solid fa-code-fork"}),e.forkCount]}),s.jsxs("span",{className:"star",children:[s.jsx("i",{className:"fa-solid fa-star"}),e.stargazers.totalCount]}),l(e.languages.edges)]})]},e.id)});return s.jsxs("div",{className:"section container",ref:r,children:[s.jsx("h2",{children:"Featured Projects"}),n&&s.jsx("div",{className:"section projects-container",children:d})]})}export{v as default};
