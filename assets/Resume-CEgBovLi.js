const __vite__fileDeps=["assets/PdfViewer-tlLhq_y6.js","assets/index-CY67wNHZ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{j as e,B as o,r as t,_ as r}from"./index-CY67wNHZ.js";const s="/assets/xu-zhusheng-DQwzmt3c.pdf",d=t.lazy(()=>r(()=>import("./PdfViewer-tlLhq_y6.js"),__vite__mapDeps([0,1])));function n(){return e.jsxs("div",{id:"resume",children:[e.jsx(o,{text:"Download Resume",href:s,download:"Resume-xuzhusheng.pdf"}),e.jsx(t.Suspense,{fallback:e.jsx("p",{children:"Loading Resume..."}),children:e.jsx(d,{loadWorker:r(()=>import("./pdf.worker.min-_pPhUsyg.js"),[]),pdf:s})}),e.jsx(o,{text:"Download Resume",href:s,download:"Resume-xuzhusheng.pdf"}),e.jsx("p",{})]})}export{n as default};
