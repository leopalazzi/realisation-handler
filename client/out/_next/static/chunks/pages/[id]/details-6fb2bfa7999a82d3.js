(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[891],{5960:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]/details",function(){return l(3464)}])},5649:function(e,t,l){"use strict";var r=l(5893);let n=e=>{let t;let{label:l,ariaLabel:n,onClick:a,textColor:i,disabled:s,isSelected:o,code:c}=e;switch(c){case"image":t=(0,r.jsx)("div",{className:"rounded-[40px] bg-[#40BCF4] w-[16px] h-[16px]"});break;case"etalonnage":t=(0,r.jsx)("div",{className:"rounded-[40px] bg-[#00E054] w-[16px] h-[16px]"});break;case"realisation":t=(0,r.jsx)("div",{className:"rounded-[40px] bg-[#FF8000] w-[16px] h-[16px]"})}return(0,r.jsxs)("button",{className:"".concat(s?"filterButtonDisable":""," ").concat(o?"filterSelected":""," rounded-[40px] border border-[#DADCE0] py-[8px] px-[16px] flex items-center gap-[10px] hover:bg-[#EDEDED] bg-white "),"aria-label":n,type:"button",onClick:()=>{a()},disabled:s,children:[t,(0,r.jsx)("span",{className:"lg:text-[16px] text-[12px] font-normal",children:l})]})};t.Z=n},3299:function(e,t,l){"use strict";var r=l(5893),n=l(7294),a=l(5675),i=l.n(a);let s=e=>{let{src:t,alt:l,height:a,onClick:s,className:o,width:c,loading:d,priority:x}=e,[u,m]=(0,n.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[!u&&(0,r.jsx)("div",{className:"containerImg",style:{width:"".concat(c,"px"),height:"".concat(a,"px")}}),(0,r.jsx)("div",{className:"image-container",children:(0,r.jsx)(i(),{src:t,onLoad:()=>m(!0),onError:()=>m(!1),alt:l,className:"image ".concat(o||""),onClick:s,loading:d,fill:!0,sizes:"(max-width: 768px)",priority:x,unoptimized:!0})})]})};t.Z=s},7977:function(e,t,l){"use strict";t.Z=[{code:"image",label:"Image",ariaLabel:"Filtre Image",backgroundColor:"#EBF2FF",hasIcon:!0},{code:"etalonnage",label:"Etalonnage",ariaLabel:"Filtre Etalonnage",backgroundColor:"#D6EFDD",textColor:"#3C862B",hasIcon:!0},{code:"realisation",label:"R\xe9alisation",ariaLabel:"Filtre realisation",backgroundColor:"#FCE9E9",textColor:"#D95040",hasIcon:!0},{code:"photographie",label:"Photographie",ariaLabel:"Filtre Photographie",backgroundColor:"#E0D9EE",textColor:"#411AAE",hasIcon:!0},{code:"numerique",label:"Num\xe9rique",ariaLabel:"Filtre Num\xe9rique",backgroundColor:"#FFFEDD",textColor:"#C28C3F"},{code:"pellicule",label:"Pellicule",ariaLabel:"Filtre Pellicule",backgroundColor:"#D7EEF5",textColor:"#384A51"},{code:"fiction",label:"Fiction",ariaLabel:"Filtre Fiction",backgroundColor:"#FFECCF",textColor:"#AA6E14"},{code:"documentaire",label:"Documentaire",ariaLabel:"Filtre Documentaire",backgroundColor:"#E0FFF6",textColor:"#1E926F"},{code:"clip",label:"Clip",ariaLabel:"Filtre Clip",backgroundColor:"#FFE3F4",textColor:"#B60F73"}]},3930:function(e,t,l){"use strict";l.d(t,{Bq:function(){return u}});var r=l(7294);let n={max:600},a={min:601,max:960},i={min:1040},s={min:1400},o=()=>!0,c=()=>{if(!o())return 0;let e=document.documentElement,t=document.getElementsByTagName("body")[0];return e.clientWidth||window.innerWidth||t.clientWidth},d=()=>({width:c()}),x=()=>{let[e,t]=(0,r.useState)(d());return(0,r.useEffect)(()=>{let e=()=>{t(d())};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e},u=()=>{let{width:e}=x(),[t,l]=(0,r.useState)(!1),[o,c]=(0,r.useState)(!1),[d,u]=(0,r.useState)(!1),[m,p]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{l(e<=n.max),c(e>=a.min&&e<=a.max),u(e>=i.min),p(e>=s.min)},[e]),{width:e,isMobile:t,isTablet:o,isDesktop:d,isBigScreen:m}}},3464:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return N}});var r=l(5893),n=l(7294),a=l(1163),i=l(5649),s=l(7977),o=l(3968);let c=e=>{let{title:t,director:l,filters:n,year:a,duration:i,producer:s,camera:o,photographerName:c,nomination:d,videoLink:x}=e;return(0,r.jsxs)("div",{className:"flex gap-2 shrink-0 flex-col pr-[90px] text-[18px] mb-[50px] lg:mb-[60px]",children:[(0,r.jsxs)("span",{children:["Date de sortie : ",(0,r.jsx)("span",{className:"font-medium",children:a})]}),i&&(0,r.jsxs)("span",{children:["Dur\xe9e : ",(0,r.jsx)("span",{className:"font-medium",children:i})]}),(0,r.jsxs)("span",{children:["R\xe9alisation : ",(0,r.jsx)("span",{className:"font-medium",children:l})]}),s&&(0,r.jsxs)("span",{children:["Producteur : ",(0,r.jsx)("span",{className:"font-medium",children:s})]}),o&&(0,r.jsxs)("span",{children:["Cam\xe9ra : ",(0,r.jsx)("span",{className:"font-medium",children:o})]}),c&&(0,r.jsxs)("span",{children:["Image : ",(0,r.jsx)("span",{className:"font-medium",children:c})]}),d&&(0,r.jsxs)("span",{children:["Selection : ",(0,r.jsx)("span",{className:"font-medium",children:d})]}),x&&(0,r.jsxs)("span",{children:["Lien :"," ",(0,r.jsx)("a",{href:x,target:"_blank",className:"underline font-medium text-[#64A2FF] break-normal",children:x})]})]})},d=()=>(0,r.jsx)("svg",{width:"13",height:"23",viewBox:"0 0 13 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M11.8161 1.46509L1.81592 11.4649L11.8161 21.4651",stroke:"#3C3C3C",strokeWidth:"1.3",strokeLinecap:"round"})});var x=l(6066);let u=e=>{let{onClick:t,arrowClassName:l}=e;return(0,r.jsx)("div",{tabIndex:0,onClick:t,className:l,children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"33",height:"33",viewBox:"0 0 33 33",fill:"none",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32.0639 32.1303C31.73 32.7827 30.9303 33.0409 30.2778 32.707L1.62011 18.0392C0.653302 17.5443 0.652567 16.1621 1.62011 15.6669L30.2778 0.999061C30.9303 0.665105 31.73 0.923319 32.0639 1.5758C32.3979 2.22828 32.1397 3.02794 31.4872 3.3619L5.99808 16.4079C5.63516 16.5937 5.63516 17.1124 5.99808 17.2981L31.4872 30.3442C32.1397 30.6781 32.3979 31.4778 32.0639 32.1303Z",fill:"white"})})})},m=e=>{let{onClick:t,arrowClassName:l}=e;return(0,r.jsx)("div",{tabIndex:0,onClick:t,className:l,children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"33",height:"33",viewBox:"0 0 33 33",fill:"none",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.04057 32.2675C1.37452 32.9199 2.17419 33.1782 2.82667 32.8442L31.4844 18.1764C32.4512 17.6815 32.4519 16.2993 31.4844 15.8041L2.82667 1.13627C2.17419 0.802312 1.37452 1.06053 1.04056 1.713C0.706608 2.36548 0.964821 3.16515 1.6173 3.49911L27.1064 16.5451C27.4693 16.7309 27.4693 17.2496 27.1064 17.4353L1.6173 30.4814C0.964824 30.8153 0.70661 31.615 1.04057 32.2675Z",fill:"white"})})})},p=e=>{let{children:t,className:l,setIndexImage:a}=e,i=(0,n.useRef)(null),s={dots:!1,arrows:!0,ref:i,prevArrow:(0,r.jsx)(u,{arrowClassName:"cursor-pointer"}),nextArrow:(0,r.jsx)(m,{arrowClassName:"cursor-pointer"}),speed:500,slidesToShow:1,slidesToScroll:1,beforeChange:(e,t)=>{a(t+1)}};return(0,r.jsx)(x.Z,{...s,className:l,children:t})},h=()=>(0,r.jsx)("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M28.8955 1.27769L1.40723 28.7656M28.8955 28.7653L1.40723 1.27734",stroke:"white",strokeWidth:"2.5"})}),j=e=>{let{images:t,projectDirectory:l,projectTitle:a,setImageClickedIndex:i,onImageClick:s,mousePos:o}=e,[c,d]=(0,n.useState)(1);return(0,r.jsx)("div",{className:"h-[100%] w-[100%] bg-[#00000033] fixed left-0 top-0 z-10 max-sm:pt-[200px] backdrop-blur-lg scaleForward",style:{transformOrigin:"".concat(o.x,"px ").concat(o.y,"px")},tabIndex:0,children:(0,r.jsxs)("div",{className:"flex flex-col h-[100%] gap-[32px]",children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("div",{className:"ml-[40px] mt-[40px]",children:(0,r.jsxs)("span",{className:"text-white text-[18px]",children:[c,"/",null==t?void 0:t.length]})}),(0,r.jsx)("div",{tabIndex:0,className:"p-[24px] cursor-pointer mt-[16px] mr-[16px]",onClick:()=>i(null),children:(0,r.jsx)(h,{})})]}),(0,r.jsx)("div",{className:"w-[100%] mx-[auto] px-[40px]",children:(0,r.jsx)(p,{setIndexImage:d,children:null==t?void 0:t.map((e,t)=>(0,r.jsx)("img",{src:"/projects/".concat(l,"/").concat(e),alt:"Image ".concat(a," - ").concat(t),onClick:()=>s(t),className:"lg:max-h-[740px] max-h-[640px] w-[auto]",style:{width:"auto"}},"".concat(e,"-").concat(t)))})})]})})};var g=l(9008),f=l.n(g),v=l(3930);let b=e=>{let{containerRef:t,projectsList:l}=e,{isDesktop:n}=(0,v.Bq)(),i=(0,a.useRouter)(),s=(e,t)=>{e.preventDefault(),i.push("/".concat(t,"/details"))};return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"border mb-6"}),(0,r.jsx)("h2",{className:"font-normal text-[20px] mb-[24px]",children:"D\xe9couvrez mes autres projets"}),(0,r.jsx)("div",{className:"grid grid-flow-col overflow-x-auto white-space-no-wrap scrollbar-hidden gap-2",id:"listProjects",ref:t,children:l.map((e,t)=>{var l;let a=n?"325px":"175px";return(null===(l=e.images)||void 0===l?void 0:l[0])&&(0,r.jsxs)("a",{className:"imgContainer group",style:{width:a},onClick:t=>{s(t,e.id)},href:"".concat("https://realisation-handler.onrender.com","/").concat(e.id,"/details"),title:"Lien vers ".concat(e.projectTitle," de ").concat(e.projectDirector),children:[(0,r.jsx)("img",{src:"/projects/".concat(e.projectDirectory,"/").concat(e.images[0]),style:{width:a,height:"200px"},alt:"Image du projet ".concat(e.projectTitle),loading:t<=6?"eager":"lazy"}),(0,r.jsx)("div",{className:"smooth-opacity block lg:hidden cursor-pointer absolute bottom-0 px-[12px] py-[16px] group-hover:block",children:(0,r.jsxs)("div",{className:"w-[100%] text-[14px] lg:hidden group-hover:block",children:[(0,r.jsx)("div",{className:"text-white font-medium mb-1 leading-[14px]",children:e.projectTitle}),(0,r.jsxs)("div",{className:"text-white leading-[14px]",children:["de ",e.projectDirector]})]})})]},"".concat(e.projectTitle," - Details"))})})]})};var w=l(3299);let C=e=>{var t;let{isDesktop:l}=(0,v.Bq)(),[x,u]=(0,n.useState)(null),{projectsList:m}=(0,n.useContext)(o.g),p=(0,a.useRouter)(),h=p.query.id,g=m.find(e=>{var t;return(null===(t=e.id)||void 0===t?void 0:t.toString())===h}),C=(0,n.useRef)(null),[N,k]=(0,n.useState)([]),E=(0,n.useRef)({}),F=(0,n.useRef)(null);(0,n.useEffect)(()=>(F.current&&F.current.addEventListener("wheel",y),()=>{var e;null==F||null===(e=F.current)||void 0===e||e.removeEventListener("wheel",y)}),[F.current]),(0,n.useEffect)(()=>(null!==x?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[x]);let L=e=>{let t={x:e.clientX,y:e.clientY};E.current=t},y=e=>{e.preventDefault();let{wheelDelta:t}=e;t>0?F.current.scrollLeft+=75:F.current.scrollLeft-=75},D=e=>{let t=Array.from(g.images),l=t.splice(e,1)[0];t.unshift(l),k(t),u(e)},I=e=>{27==e.keyCode&&u(null)};if(!g)return(0,r.jsx)("div",{className:"flex self-center text-[20px]",children:"Erreur de num\xe9ro de projet"});let{projectTitle:A,projectDirector:R,filters:S,projectYear:B,projectDuration:T,projectProducer:_,camera:P,photographerName:z,nomination:Z,videoLink:M}=g;return(0,r.jsxs)("div",{tabIndex:0,onKeyDown:I,ref:C,onMouseMove:L,children:[(0,r.jsxs)(f(),{children:[(0,r.jsxs)("title",{children:["Projet - ",g.projectTitle]}),(0,r.jsx)("meta",{name:"description",content:"Vous trouverez les details pour le projet ".concat(g.projectTitle)}),(0,r.jsx)("link",{rel:"canonical",href:"".concat("https://realisation-handler.onrender.com","/").concat(g.id,"/details")}),(0,r.jsx)("script",{type:"application/ld+json"})]}),null!==x&&(0,r.jsx)(j,{images:N,projectDirectory:g.projectDirectory,projectTitle:A,setImageClickedIndex:u,onImageClick:D,mousePos:E.current}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("button",{className:"mb-[48px]",onClick:()=>p.push("/"),children:(0,r.jsxs)("span",{className:"flex text-[20px] font-bold items-center gap-2",children:[(0,r.jsx)(d,{})," Retour"]})}),(0,r.jsx)("div",{className:"flex items-center mb-[32px]",children:(0,r.jsxs)("h1",{className:"text-[29px] font-medium text-[#3A3A3A]",children:[A,(0,r.jsxs)("span",{className:"italic text-[#3A3A3A] font-light",children:[" ","de ",R]})]})}),(0,r.jsx)("div",{className:"flex gap-[8px] flex-wrap mb-[40px]",children:null==S?void 0:S.map(e=>{let t=s.Z.find(t=>t.code===e);return t&&(0,r.jsx)(i.Z,{label:null==t?void 0:t.label,ariaLabel:null==t?void 0:t.ariaLabel,disabled:!0,code:null==t?void 0:t.code},null==t?void 0:t.code)})}),(0,r.jsx)("div",{className:"grid-cols-2 grid gap-2 items-center mb-[40px]",children:null===(t=g.images)||void 0===t?void 0:t.map((e,t)=>{let n=(document.documentElement.clientWidth-(l?128:32))/2-8,a=parseInt(g.imageWidth,10)/n,i=Math.round(parseInt(g.imageHeight,10)/a);return(0,r.jsx)(w.Z,{src:"/projects/".concat(g.projectDirectory,"/").concat(e),alt:"Image du projet ".concat(g.projectTitle," - ").concat(t),onClick:()=>D(t),width:n,height:i,className:"cursor-zoom-in image",priority:t<=3},"".concat(e,"-").concat(t))})}),(0,r.jsx)(c,{title:A,director:R,filters:S,year:B,duration:T,producer:_,camera:P,photographerName:z,nomination:Z,videoLink:M}),(0,r.jsx)(b,{projectsList:m,containerRef:F})]})]})};var N=C}},function(e){e.O(0,[959,66,774,888,179],function(){return e(e.s=5960)}),_N_E=e.O()}]);