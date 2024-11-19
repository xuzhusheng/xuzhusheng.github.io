import{R as S,j as I,P as Me,L as Oe}from"./index-D8PIuLZt.js";const P=/^[a-z0-9]+(-[a-z0-9]+)*$/,D=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:r,prefix:l,name:c};return t&&!F(a)?null:a}const i=o[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!F(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:i};return t&&!F(c,n)?null:c}return null},F=(e,t)=>e?!!((e.provider===""||e.provider.match(P))&&(t&&e.prefix===""||e.prefix.match(P))&&e.name.match(P)):!1,pe=Object.freeze({left:0,top:0,width:16,height:16}),A=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),G=Object.freeze({...pe,...A}),B=Object.freeze({...G,body:"",hidden:!1});function Fe(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function ne(e,t){const n=Fe(e,t);for(const r in B)r in A?r in e&&!(r in n)&&(n[r]=A[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function Ne(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(o[s]=[c].concat(l))}return o[s]}return Object.keys(n).concat(Object.keys(r)).forEach(i),o}function Ae(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let i={};function s(c){i=ne(r[c]||o[c],i)}return s(t),n.forEach(s),ne(e,i)}function ge(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=Ne(e);for(const o in r){const i=r[o];i&&(t(o,Ae(e,o,i)),n.push(o))}return n}const De={provider:"",aliases:{},not_found:{},...pe};function H(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function me(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!H(e,De))return null;const n=t.icons;for(const o in n){const i=n[o];if(!o.match(P)||typeof i.body!="string"||!H(i,B))return null}const r=t.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(P)||typeof s!="string"||!n[s]&&!r[s]||!H(i,B))return null}return t}const oe=Object.create(null);function Re(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function k(e,t){const n=oe[e]||(oe[e]=Object.create(null));return n[t]||(n[t]=Re(e,t))}function J(e,t){return me(t)?ge(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function Ue(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let L=!1;function ye(e){return typeof e=="boolean"&&(L=e),L}function He(e){const t=typeof e=="string"?D(e,!0,L):e;if(t){const n=k(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function ze(e,t){const n=D(e,!0,L);if(!n)return!1;const r=k(n.provider,n.prefix);return Ue(r,n.name,t)}function Be(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),L&&!t&&!e.prefix){let o=!1;return me(e)&&(e.prefix="",ge(e,(i,s)=>{s&&ze(i,s)&&(o=!0)})),o}const n=e.prefix;if(!F({provider:t,prefix:n,name:"a"}))return!1;const r=k(t,n);return!!J(r,e)}const xe=Object.freeze({width:null,height:null}),be=Object.freeze({...xe,...A}),Qe=/(-?[0-9.]*[0-9]+[0-9.]*)/g,qe=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function re(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(Qe);if(r===null||!r.length)return e;const o=[];let i=r.shift(),s=qe.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?o.push(i):o.push(Math.ceil(c*t*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}const $e=e=>e==="unset"||e==="undefined"||e==="none";function Ve(e,t){const n={...G,...e},r={...be,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(b=>{const g=[],j=b.hFlip,m=b.vFlip;let u=b.rotate;j?m?u+=2:(g.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),g.push("scale(-1 1)"),o.top=o.left=0):m&&(g.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),g.push("scale(1 -1)"),o.top=o.left=0);let x;switch(u<0&&(u-=Math.floor(u/4)*4),u=u%4,u){case 1:x=o.height/2+o.top,g.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:g.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:x=o.width/2+o.left,g.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}u%2===1&&(o.left!==o.top&&(x=o.left,o.left=o.top,o.top=x),o.width!==o.height&&(x=o.width,o.width=o.height,o.height=x)),g.length&&(i='<g transform="'+g.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=o.width,a=o.height;let f,d;s===null?(d=c===null?"1em":c==="auto"?a:c,f=re(d,l/a)):(f=s==="auto"?l:s,d=c===null?re(f,a/l):c==="auto"?a:c);const p={},y=(b,g)=>{$e(g)||(p[b]=g.toString())};return y("width",f),y("height",d),p.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+a.toString(),{attributes:p,body:i}}const Ke=/\sid="(\S+)"/g,We="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Ge=0;function Je(e,t=We){const n=[];let r;for(;r=Ke.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof t=="function"?t(i):t+(Ge++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const Q=Object.create(null);function Xe(e,t){Q[e]=t}function q(e){return Q[e]||Q[""]}function X(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Y=Object.create(null),T=["https://api.simplesvg.com","https://api.unisvg.com"],N=[];for(;T.length>0;)T.length===1||Math.random()>.5?N.push(T.shift()):N.push(T.pop());Y[""]=X({resources:["https://api.iconify.design"].concat(N)});function Ye(e,t){const n=X(t);return n===null?!1:(Y[e]=n,!0)}function Z(e){return Y[e]}const Ze=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ie=Ze();function et(e,t){const n=Z(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=t+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}function tt(e){return e===404}const nt=(e,t,n)=>{const r=[],o=et(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function ot(e){if(typeof e=="string"){const t=Z(e);if(t)return t.path}return"/"}const rt=(e,t,n)=>{if(!ie){n("abort",424);return}let r=ot(t.provider);switch(t.type){case"icons":{const i=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=t.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;ie(e+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(tt(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},it={prepare:nt,send:rt};function st(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,c=o.name,l=n[i]||(n[i]=Object.create(null)),a=l[s]||(l[s]=k(i,s));let f;c in a.icons?f=t.loaded:s===""||a.missing.has(c)?f=t.missing:f=t.pending;const d={provider:i,prefix:s,name:c};f.push(d)}),t}function we(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function ct(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==o)return!0;const a=l.name;if(e.icons[a])s.loaded.push({provider:r,prefix:o,name:a});else if(e.missing.has(a))s.missing.push({provider:r,prefix:o,name:a});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||we([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let lt=0;function at(e,t,n){const r=lt++,o=we.bind(null,n,r);if(!t.pending.length)return o;const i={id:r,icons:t,callback:e,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function ft(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const i=typeof o=="string"?D(o,t,n):o;i&&r.push(i)}),r}var ut={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function dt(e,t,n,r){const o=e.resources.length,i=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let h=e.resources.slice(0);for(s=[];h.length>1;){const w=Math.floor(Math.random()*h.length);s.push(h[w]),h=h.slice(0,w).concat(h.slice(w+1))}s=s.concat(h)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const c=Date.now();let l="pending",a=0,f,d=null,p=[],y=[];typeof r=="function"&&y.push(r);function b(){d&&(clearTimeout(d),d=null)}function g(){l==="pending"&&(l="aborted"),b(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function j(h,w){w&&(y=[]),typeof h=="function"&&y.push(h)}function m(){return{startTime:c,payload:t,status:l,queriesSent:a,queriesPending:p.length,subscribe:j,abort:g}}function u(){l="failed",y.forEach(h=>{h(void 0,f)})}function x(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function Ee(h,w,C){const M=w!=="success";switch(p=p.filter(v=>v!==h),l){case"pending":break;case"failed":if(M||!e.dataAfterTimeout)return;break;default:return}if(w==="abort"){f=C,u();return}if(M){f=C,p.length||(s.length?U():u());return}if(b(),x(),!e.random){const v=e.resources.indexOf(h.resource);v!==-1&&v!==e.index&&(e.index=v)}l="completed",y.forEach(v=>{v(C)})}function U(){if(l!=="pending")return;b();const h=s.shift();if(h===void 0){if(p.length){d=setTimeout(()=>{b(),l==="pending"&&(x(),u())},e.timeout);return}u();return}const w={status:"pending",resource:h,callback:(C,M)=>{Ee(w,C,M)}};p.push(w),a++,d=setTimeout(U,e.rotate),n(h,t,w.callback)}return setTimeout(U),m}function Ie(e){const t={...ut,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,a){const f=dt(t,c,l,(d,p)=>{r(),a&&a(d,p)});return n.push(f),f}function i(c){return n.find(l=>c(l))||null}return{query:o,find:i,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function se(){}const z=Object.create(null);function ht(e){if(!z[e]){const t=Z(e);if(!t)return;const n=Ie(t),r={config:t,redundancy:n};z[e]=r}return z[e]}function pt(e,t,n){let r,o;if(typeof e=="string"){const i=q(e);if(!i)return n(void 0,424),se;o=i.send;const s=ht(e);s&&(r=s.redundancy)}else{const i=X(e);if(i){r=Ie(i);const s=e.resources?e.resources[0]:"",c=q(s);c&&(o=c.send)}}return!r||!o?(n(void 0,424),se):r.query(t,o,n)().abort}const ce="iconify2",E="iconify",Se=E+"-count",le=E+"-version",ve=36e5,gt=168;function $(e,t){try{return e.getItem(t)}catch{}}function ee(e,t,n){try{return e.setItem(t,n),!0}catch{}}function ae(e,t){try{e.removeItem(t)}catch{}}function V(e,t){return ee(e,Se,t.toString())}function K(e){return parseInt($(e,Se))||0}const R={local:!0,session:!0},ke={local:new Set,session:new Set};let te=!1;function mt(e){te=e}let O=typeof window>"u"?{}:window;function je(e){const t=e+"Storage";try{if(O&&O[t]&&typeof O[t].length=="number")return O[t]}catch{}R[e]=!1}function Ce(e,t){const n=je(e);if(!n)return;const r=$(n,le);if(r!==ce){if(r){const c=K(n);for(let l=0;l<c;l++)ae(n,E+l.toString())}ee(n,le,ce),V(n,0);return}const o=Math.floor(Date.now()/ve)-gt,i=c=>{const l=E+c.toString(),a=$(n,l);if(typeof a=="string"){try{const f=JSON.parse(a);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,c))return!0}catch{}ae(n,l)}};let s=K(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,V(n,s)):ke[e].add(c))}function Te(){if(!te){mt(!0);for(const e in R)Ce(e,t=>{const n=t.data,r=t.provider,o=n.prefix,i=k(r,o);if(!J(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function yt(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in R)Ce(r,o=>{const i=o.data;return o.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function xt(e,t){te||Te();function n(r){let o;if(!R[r]||!(o=je(r)))return;const i=ke[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=K(o),!V(o,s+1))return;const c={cached:Math.floor(Date.now()/ve),provider:e.provider,data:t};return ee(o,E+s.toString(),JSON.stringify(c))}t.lastModified&&!yt(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function fe(){}function bt(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,ct(e)}))}function wt(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let i;if(!o||!(i=q(n)))return;i.prepare(n,r,o).forEach(c=>{pt(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{e.missing.add(a)});else try{const a=J(e,l);if(!a.length)return;const f=e.pendingIcons;f&&a.forEach(d=>{f.delete(d)}),xt(e,l)}catch(a){console.error(a)}bt(e)})})}))}const It=(e,t)=>{const n=ft(e,!0,ye()),r=st(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,fe)}),()=>{l=!1}}const o=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:a,prefix:f}=l;if(f===c&&a===s)return;s=a,c=f,i.push(k(a,f));const d=o[a]||(o[a]=Object.create(null));d[f]||(d[f]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:f,name:d}=l,p=k(a,f),y=p.pendingIcons||(p.pendingIcons=new Set);y.has(d)||(y.add(d),o[a][f].push(d))}),i.forEach(l=>{const{provider:a,prefix:f}=l;o[a][f].length&&wt(l,o[a][f])}),t?at(t,r,i):fe};function St(e,t){const n={...e};for(const r in t){const o=t[r],i=typeof o;r in xe?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const vt=/[\s,]+/;function kt(e,t){t.split(vt).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function jt(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(e.slice(0,e.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return t}function Ct(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Tt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Pt(e){return"data:image/svg+xml,"+Tt(e)}function _t(e){return'url("'+Pt(e)+'")'}let _;function Lt(){try{_=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{_=null}}function Et(e){return _===void 0&&Lt(),_?_.createHTML(e):e}const Pe={...be,inline:!1},Mt={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Ot={display:"inline-block"},W={backgroundColor:"currentColor"},_e={backgroundColor:"transparent"},ue={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},de={WebkitMask:W,mask:W,background:_e};for(const e in de){const t=de[e];for(const n in ue)t[e+n]=ue[n]}const Ft={...Pe,inline:!0};function he(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const Nt=(e,t,n,r)=>{const o=n?Ft:Pe,i=St(o,t),s=t.mode||"svg",c={},l=t.style||{},a={...s==="svg"?Mt:{},ref:r};for(let m in t){const u=t[m];if(u!==void 0)switch(m){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":i[m]=u===!0||u==="true"||u===1;break;case"flip":typeof u=="string"&&kt(i,u);break;case"color":c.color=u;break;case"rotate":typeof u=="string"?i[m]=jt(u):typeof u=="number"&&(i[m]=u);break;case"ariaHidden":case"aria-hidden":u!==!0&&u!=="true"&&delete a["aria-hidden"];break;default:o[m]===void 0&&(a[m]=u)}}const f=Ve(e,i),d=f.attributes;if(i.inline&&(c.verticalAlign="-0.125em"),s==="svg"){a.style={...c,...l},Object.assign(a,d);let m=0,u=t.id;return typeof u=="string"&&(u=u.replace(/-/g,"_")),a.dangerouslySetInnerHTML={__html:Et(Je(f.body,u?()=>u+"ID"+m++:"iconifyReact"))},S.createElement("svg",a)}const{body:p,width:y,height:b}=e,g=s==="mask"||(s==="bg"?!1:p.indexOf("currentColor")!==-1),j=Ct(p,{...d,width:y+"",height:b+""});return a.style={...c,"--svg":_t(j),width:he(d.width),height:he(d.height),...Ot,...g?W:_e,...l},S.createElement("span",a)};ye(!0);Xe("",it);if(typeof document<"u"&&typeof window<"u"){Te();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Be(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Ye(n,o)||console.error(r)}catch{console.error(r)}}}}class Le extends S.Component{constructor(t){super(t),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(t){this.state.icon!==t&&this.setState({icon:t})}_checkIcon(t){const n=this.state,r=this.props.icon;if(typeof r=="object"&&r!==null&&typeof r.body=="string"){this._icon="",this._abortLoading(),(t||n.icon===null)&&this._setData({data:r});return}let o;if(typeof r!="string"||(o=D(r,!1,!0))===null){this._abortLoading(),this._setData(null);return}const i=He(o);if(!i){(!this._loading||this._loading.name!==r)&&(this._abortLoading(),this._icon="",this._setData(null),i!==null&&(this._loading={name:r,abort:It([o],this._checkIcon.bind(this,!1))}));return}if(this._icon!==r||n.icon===null){this._abortLoading(),this._icon=r;const s=["iconify"];o.prefix!==""&&s.push("iconify--"+o.prefix),o.provider!==""&&s.push("iconify--"+o.provider),this._setData({data:i,classes:s}),this.props.onLoad&&this.props.onLoad(r)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(t){t.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const t=this.props,n=this.state.icon;if(n===null)return t.children?t.children:S.createElement("span",{});let r=t;return n.classes&&(r={...t,className:(typeof t.className=="string"?t.className+" ":"")+n.classes.join(" ")}),Nt({...G,...n.data},r,t._inline,t._ref)}}const At=S.forwardRef(function(t,n){const r={...t,_ref:n,_inline:!1};return S.createElement(Le,r)});S.forwardRef(function(t,n){const r={...t,_ref:n,_inline:!0};return S.createElement(Le,r)});const Dt=e=>e.map((t,n)=>I.jsxs("li",{className:"skill",children:[I.jsx(At,{icon:t.icon,color:t.color}),I.jsx("p",{className:"skill-name",children:t.name})]},n)),Rt=e=>e.map((t,n)=>I.jsx("li",{children:t},n)),Ut=Me.map((e,t)=>I.jsxs("div",{className:"section content skill-section-container",children:[I.jsxs("div",{className:"skill-section",children:[I.jsx("h3",{children:e.title}),I.jsx("ul",{className:"skills-list",children:Dt(e.skills)}),I.jsx("ul",{className:"skill-desc",children:Rt(e.desc)})]}),I.jsx(Oe,{animationUrl:e.lottie})]},t));function zt(){return I.jsxs("div",{id:"skills",className:"section container",children:[I.jsx("h2",{children:"What I do?"}),Ut]})}export{zt as default};