module.exports=[10703,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(50944),e=a.i(38246),f=a.i(58212),g=a.i(56283),h=a.i(21920),i=a.i(50104),j=a.i(37738),k=a.i(70121),l=a.i(7554),m=a.i(25152),n=a.i(30553),o=a.i(72752),p=a.i(77192),q=a.i(92843),r="Collapsible",[s,t]=(0,i.createContextScope)(r),[u,v]=s(r),w=c.forwardRef((a,d)=>{let{__scopeCollapsible:e,open:f,defaultOpen:g,disabled:h,onOpenChange:i,...j}=a,[k,l]=(0,m.useControllableState)({prop:f,defaultProp:g??!1,onChange:i,caller:r});return(0,b.jsx)(u,{scope:e,disabled:h,contentId:(0,q.useId)(),open:k,onOpenToggle:c.useCallback(()=>l(a=>!a),[l]),children:(0,b.jsx)(n.Primitive.div,{"data-state":C(k),"data-disabled":h?"":void 0,...j,ref:d})})});w.displayName=r;var x="CollapsibleTrigger",y=c.forwardRef((a,c)=>{let{__scopeCollapsible:d,...e}=a,f=v(x,d);return(0,b.jsx)(n.Primitive.button,{type:"button","aria-controls":f.contentId,"aria-expanded":f.open||!1,"data-state":C(f.open),"data-disabled":f.disabled?"":void 0,disabled:f.disabled,...e,ref:c,onClick:(0,l.composeEventHandlers)(a.onClick,f.onOpenToggle)})});y.displayName=x;var z="CollapsibleContent",A=c.forwardRef((a,c)=>{let{forceMount:d,...e}=a,f=v(z,a.__scopeCollapsible);return(0,b.jsx)(p.Presence,{present:d||f.open,children:({present:a})=>(0,b.jsx)(B,{...e,ref:c,present:a})})});A.displayName=z;var B=c.forwardRef((a,d)=>{let{__scopeCollapsible:e,present:f,children:g,...h}=a,i=v(z,e),[j,l]=c.useState(f),m=c.useRef(null),p=(0,k.useComposedRefs)(d,m),q=c.useRef(0),r=q.current,s=c.useRef(0),t=s.current,u=i.open||j,w=c.useRef(u),x=c.useRef(void 0);return c.useEffect(()=>{let a=requestAnimationFrame(()=>w.current=!1);return()=>cancelAnimationFrame(a)},[]),(0,o.useLayoutEffect)(()=>{let a=m.current;if(a){x.current=x.current||{transitionDuration:a.style.transitionDuration,animationName:a.style.animationName},a.style.transitionDuration="0s",a.style.animationName="none";let b=a.getBoundingClientRect();q.current=b.height,s.current=b.width,w.current||(a.style.transitionDuration=x.current.transitionDuration,a.style.animationName=x.current.animationName),l(f)}},[i.open,f]),(0,b.jsx)(n.Primitive.div,{"data-state":C(i.open),"data-disabled":i.disabled?"":void 0,id:i.contentId,hidden:!u,...h,ref:p,style:{"--radix-collapsible-content-height":r?`${r}px`:void 0,"--radix-collapsible-content-width":t?`${t}px`:void 0,...a.style},children:u&&g})});function C(a){return a?"open":"closed"}var D=a.i(7827),E="Accordion",F=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[G,H,I]=(0,j.createCollection)(E),[J,K]=(0,i.createContextScope)(E,[I,t]),L=t(),M=c.default.forwardRef((a,c)=>{let{type:d,...e}=a;return(0,b.jsx)(G.Provider,{scope:a.__scopeAccordion,children:"multiple"===d?(0,b.jsx)(S,{...e,ref:c}):(0,b.jsx)(R,{...e,ref:c})})});M.displayName=E;var[N,O]=J(E),[P,Q]=J(E,{collapsible:!1}),R=c.default.forwardRef((a,d)=>{let{value:e,defaultValue:f,onValueChange:g=()=>{},collapsible:h=!1,...i}=a,[j,k]=(0,m.useControllableState)({prop:e,defaultProp:f??"",onChange:g,caller:E});return(0,b.jsx)(N,{scope:a.__scopeAccordion,value:c.default.useMemo(()=>j?[j]:[],[j]),onItemOpen:k,onItemClose:c.default.useCallback(()=>h&&k(""),[h,k]),children:(0,b.jsx)(P,{scope:a.__scopeAccordion,collapsible:h,children:(0,b.jsx)(V,{...i,ref:d})})})}),S=c.default.forwardRef((a,d)=>{let{value:e,defaultValue:f,onValueChange:g=()=>{},...h}=a,[i,j]=(0,m.useControllableState)({prop:e,defaultProp:f??[],onChange:g,caller:E}),k=c.default.useCallback(a=>j((b=[])=>[...b,a]),[j]),l=c.default.useCallback(a=>j((b=[])=>b.filter(b=>b!==a)),[j]);return(0,b.jsx)(N,{scope:a.__scopeAccordion,value:i,onItemOpen:k,onItemClose:l,children:(0,b.jsx)(P,{scope:a.__scopeAccordion,collapsible:!0,children:(0,b.jsx)(V,{...h,ref:d})})})}),[T,U]=J(E),V=c.default.forwardRef((a,d)=>{let{__scopeAccordion:e,disabled:f,dir:g,orientation:h="vertical",...i}=a,j=c.default.useRef(null),m=(0,k.useComposedRefs)(j,d),o=H(e),p="ltr"===(0,D.useDirection)(g),q=(0,l.composeEventHandlers)(a.onKeyDown,a=>{if(!F.includes(a.key))return;let b=a.target,c=o().filter(a=>!a.ref.current?.disabled),d=c.findIndex(a=>a.ref.current===b),e=c.length;if(-1===d)return;a.preventDefault();let f=d,g=e-1,i=()=>{(f=d+1)>g&&(f=0)},j=()=>{(f=d-1)<0&&(f=g)};switch(a.key){case"Home":f=0;break;case"End":f=g;break;case"ArrowRight":"horizontal"===h&&(p?i():j());break;case"ArrowDown":"vertical"===h&&i();break;case"ArrowLeft":"horizontal"===h&&(p?j():i());break;case"ArrowUp":"vertical"===h&&j()}let k=f%e;c[k].ref.current?.focus()});return(0,b.jsx)(T,{scope:e,disabled:f,direction:g,orientation:h,children:(0,b.jsx)(G.Slot,{scope:e,children:(0,b.jsx)(n.Primitive.div,{...i,"data-orientation":h,ref:m,onKeyDown:f?void 0:q})})})}),W="AccordionItem",[X,Y]=J(W),Z=c.default.forwardRef((a,c)=>{let{__scopeAccordion:d,value:e,...f}=a,g=U(W,d),h=O(W,d),i=L(d),j=(0,q.useId)(),k=e&&h.value.includes(e)||!1,l=g.disabled||a.disabled;return(0,b.jsx)(X,{scope:d,open:k,disabled:l,triggerId:j,children:(0,b.jsx)(w,{"data-orientation":g.orientation,"data-state":ae(k),...i,...f,ref:c,disabled:l,open:k,onOpenChange:a=>{a?h.onItemOpen(e):h.onItemClose(e)}})})});Z.displayName=W;var $="AccordionHeader",_=c.default.forwardRef((a,c)=>{let{__scopeAccordion:d,...e}=a,f=U(E,d),g=Y($,d);return(0,b.jsx)(n.Primitive.h3,{"data-orientation":f.orientation,"data-state":ae(g.open),"data-disabled":g.disabled?"":void 0,...e,ref:c})});_.displayName=$;var aa="AccordionTrigger",ab=c.default.forwardRef((a,c)=>{let{__scopeAccordion:d,...e}=a,f=U(E,d),g=Y(aa,d),h=Q(aa,d),i=L(d);return(0,b.jsx)(G.ItemSlot,{scope:d,children:(0,b.jsx)(y,{"aria-disabled":g.open&&!h.collapsible||void 0,"data-orientation":f.orientation,id:g.triggerId,...i,...e,ref:c})})});ab.displayName=aa;var ac="AccordionContent",ad=c.default.forwardRef((a,c)=>{let{__scopeAccordion:d,...e}=a,f=U(E,d),g=Y(ac,d),h=L(d);return(0,b.jsx)(A,{role:"region","aria-labelledby":g.triggerId,"data-orientation":f.orientation,...h,...e,ref:c,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...a.style}})});function ae(a){return a?"open":"closed"}ad.displayName=ac;var af=a.i(5784),ag=a.i(68114);let ah=c.forwardRef(({className:a,...c},d)=>(0,b.jsx)(Z,{ref:d,className:(0,ag.cn)("border-b",a),...c}));ah.displayName="AccordionItem";let ai=c.forwardRef(({className:a,children:c,...d},e)=>(0,b.jsx)(_,{className:"flex",children:(0,b.jsxs)(ab,{ref:e,className:(0,ag.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",a),...d,children:[c,(0,b.jsx)(af.ChevronDown,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));ai.displayName=ab.displayName;let aj=c.forwardRef(({className:a,children:c,...d},e)=>(0,b.jsx)(ad,{ref:e,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...d,children:(0,b.jsx)("div",{className:(0,ag.cn)("pb-4 pt-0",a),children:c})}));aj.displayName=ad.displayName;let ak=({htmlContent:a})=>{let d=(0,c.useRef)(null),[e,f]=(0,c.useState)(null);return(0,c.useEffect)(()=>{if(!d.current)return;let c=document.createElement("div");c.innerHTML=a;let e=[],g="";Array.from(c.childNodes).forEach((a,c)=>{if(a.nodeType===Node.ELEMENT_NODE&&"true"===a.dataset.accordionCodeBlock){g.trim().length>0&&(e.push((0,b.jsx)("div",{dangerouslySetInnerHTML:{__html:g}},`text-${c}-before`)),g="");let d=a.dataset.codeLang||"text",f=a.dataset.codeTitle||`Code (${d})`,h=a.querySelector("pre code")?.textContent||"";e.push((0,b.jsx)(M,{type:"single",collapsible:!0,className:"w-full my-4",children:(0,b.jsxs)(ah,{value:`item-${c}`,children:[(0,b.jsx)(ai,{className:"font-bold",children:f}),(0,b.jsx)(aj,{children:(0,b.jsx)("pre",{className:"overflow-x-auto p-4 rounded-md bg-gray-800 text-white",children:(0,b.jsx)("code",{className:`language-${d}`,children:h})})})]})},`accordion-${c}`))}else g+=a.outerHTML||a.textContent||""}),g.trim().length>0&&e.push((0,b.jsx)("div",{dangerouslySetInnerHTML:{__html:g}},"text-final")),f(e)},[a]),(0,b.jsx)("div",{ref:d,children:e})};var al=a.i(96221),am=a.i(210),an=a.i(70106);let ao=(0,an.default)("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),ap=(0,an.default)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);function aq({src:a,alt:c}){return a?a.includes("drive.google.com")?(0,b.jsx)("div",{className:"cs-media-iframe-wrapper",children:(0,b.jsx)("iframe",{src:a,className:"cs-media-iframe",allow:"autoplay",allowFullScreen:!0})}):/\.(mp4|webm|ogg|mov)$/i.test(a)?(0,b.jsx)("video",{src:a,controls:!0,playsInline:!0,className:"cs-media"}):(0,b.jsx)("img",{src:a,alt:c,className:"cs-media",loading:"eager"}):null}function ar({children:a,className:d=""}){let e=(0,c.useRef)(null),[f,g]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let a=e.current;if(!a)return;let b=new IntersectionObserver(([a])=>{a.isIntersecting&&(g(!0),b.disconnect())},{threshold:.08});return b.observe(a),()=>b.disconnect()},[]),(0,b.jsx)("div",{ref:e,className:`cs-reveal ${f?"cs-reveal--visible":""} ${d}`,children:a})}let as=a=>a?a.replace(/<a[^>]*href="(https:\/\/app\.speckle\.systems[^"]+)"[^>]*>.*?<\/a>/gi,'<div class="cs-iframe-wrapper"><iframe src="$1" allow="fullscreen" frameborder="0"></iframe></div>'):"";function at({tabs:a,summary:d,notionUrl:e,notionIframeUrl:f}){let[g,h]=(0,c.useState)(!1),[i,j]=(0,c.useState)(null);if((0,c.useEffect)(()=>{g||j(null)},[g]),(!a||0===a.length)&&!f&&!e)return null;let k=a[0]?.html||"",l=k=(k=(k=k.replace(/<p>\s*<a[^>]*>My Building Process<\/a>\s*<\/p>/gi,"")).replace(/<a[^>]*>My Building Process<\/a>/gi,"")).replace(/<p>My Building Process<\/p>/gi,""),m="",n=!1,o=k.match(/(<h[1-6][^>]*>(Risks|My Progress)<\/h[1-6]>)/i);return o&&void 0!==o.index&&(l=k.substring(0,o.index),m=k.substring(o.index),n=!0),(0,b.jsxs)("div",{className:"cs-accordion",children:[(0,b.jsxs)("button",{className:`cs-accordion__trigger ${g?"cs-accordion__trigger--open":""}`,onClick:()=>h(!g),"aria-expanded":g,children:[(0,b.jsx)("span",{className:"cs-accordion__label",children:"Full documentation"}),(0,b.jsxs)("span",{className:"cs-accordion__meta",children:[e&&(0,b.jsxs)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"cs-accordion__notion-link",onClick:a=>a.stopPropagation(),children:[e.includes("github.com")?"View on GitHub":e.includes("google.com/presentation")?"View Slides":e.includes("ceeoinnovations.org")||e.includes("tufts.edu")?"Full Blog Post":"Full Documentation"," ",(0,b.jsx)(ao,{size:12})]}),(0,b.jsx)(af.ChevronDown,{size:18,className:`cs-accordion__chevron ${g?"cs-accordion__chevron--open":""}`})]})]}),g&&(0,b.jsxs)("div",{className:"cs-accordion__body",children:[null===i&&(0,b.jsxs)("div",{className:"cs-docs-menu",children:[a.length>0&&(0,b.jsx)("div",{className:"cs-prose prose dark:prose-invert",children:(0,b.jsx)(ak,{htmlContent:as(l)})}),a.length>1&&(0,b.jsxs)("div",{className:`cs-docs-grid-container ${n?"cs-docs-grid-container--inline":""}`,children:[!n&&(0,b.jsx)("h3",{className:"cs-docs-grid-title",children:"Sub-pages"}),(0,b.jsx)("div",{className:"cs-docs-grid",children:a.slice(1).map((a,c)=>(0,b.jsxs)("button",{className:"cs-docs-card",onClick:()=>j(c+1),children:[a.thumbnail&&(0,b.jsx)("div",{className:"cs-docs-card__media",children:(0,b.jsx)("img",{src:a.thumbnail,alt:a.label,loading:"lazy"})}),(0,b.jsxs)("div",{className:"cs-docs-card__body",children:[(0,b.jsx)("span",{className:"cs-docs-card__title",children:a.label}),(0,b.jsx)(ap,{size:16,className:"cs-docs-card__icon"})]})]},c))})]}),n&&(0,b.jsx)("div",{className:"cs-prose prose dark:prose-invert",children:(0,b.jsx)(ak,{htmlContent:as(m)})})]}),null!==i&&i>0&&(0,b.jsxs)("div",{className:"cs-docs-detail",children:[(0,b.jsxs)("div",{className:"cs-docs-detail__header",children:[(0,b.jsxs)("button",{className:"cs-docs-back-btn",onClick:()=>j(null),children:[(0,b.jsx)(am.ArrowLeft,{size:14})," Back to Overview"]}),(0,b.jsx)("span",{className:"cs-docs-detail__title",children:a[i].label})]}),(0,b.jsx)("div",{className:"cs-prose prose dark:prose-invert",children:(0,b.jsx)(ak,{htmlContent:as(a[i].html||"")})})]}),f&&null===i&&(0,b.jsx)("iframe",{src:f,width:"100%",height:"680",frameBorder:"0",allowFullScreen:!0,loading:"lazy",className:"cs-notion-embed__frame",title:"Notion documentation"})]})]})}a.s(["default",0,function(){let a=(0,d.useParams)().projectId,{projects:i,loading:j,error:k}=(0,h.useProjects)(),[l,m]=(0,c.useState)(null),[n,o]=(0,c.useState)([]),[p,q]=(0,c.useState)(!1);if((0,c.useEffect)(()=>{if(j||!i.length)return;let b=i.find(b=>b.id===a);m(b||null),b?.processedContent&&b.processedContent.length>0?(q(!0),Promise.all(b.processedContent.map(async a=>{try{let b=await fetch(`/${a.path}`);if(!b.ok)throw Error();let c=await b.text();return{label:a.label,html:c,thumbnail:a.thumbnail||null}}catch{return{label:a.label,html:"<p>Content currently unavailable.</p>",thumbnail:a.thumbnail||null}}})).then(o).finally(()=>q(!1))):b?.processedContentPath&&(q(!0),fetch(`/${b.processedContentPath}`).then(a=>a.text()).then(a=>o([{label:"Documentation",html:a,thumbnail:null}])).finally(()=>q(!1)))},[i,j,a]),j)return(0,b.jsx)("div",{className:"min-h-screen flex items-center justify-center",children:(0,b.jsx)(al.Loader2,{className:"w-5 h-5 animate-spin text-muted-foreground"})});if(k)return(0,b.jsx)("div",{className:"min-h-screen flex items-center justify-center px-6",children:(0,b.jsxs)("p",{className:"text-sm text-muted-foreground",children:["Could not load project - ",k]})});if(!l)return(0,b.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,b.jsx)(f.default,{}),(0,b.jsxs)("div",{className:"cs-not-found",children:[(0,b.jsx)("h1",{children:"Project not found"}),(0,b.jsxs)(e.default,{href:"/",className:"cs-back",children:[(0,b.jsx)(am.ArrowLeft,{size:16})," Back to work"]})]}),(0,b.jsx)(g.default,{})]});let r=l.overview||l.development||l.final_result||l.reflection,s=l.content?.some(a=>"project_item"===a.type);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:"cs-page",children:[(0,b.jsx)(f.default,{}),(0,b.jsxs)("header",{className:"cs-hero",children:[(0,b.jsxs)("div",{className:"cs-hero__inner",children:[(0,b.jsxs)(e.default,{href:"/",className:"cs-back",children:[(0,b.jsx)(am.ArrowLeft,{size:15})," All work"]}),(0,b.jsx)("div",{className:"cs-hero__meta",children:l.tags?.map(a=>(0,b.jsx)("span",{className:"cs-tag",children:a},a))}),(0,b.jsx)("h1",{className:"cs-hero__title",children:l.title}),(0,b.jsx)("p",{className:"cs-hero__desc",children:l.quick_description}),(0,b.jsxs)("div",{className:"cs-hero__links",children:[l.project_url&&(0,b.jsxs)("a",{href:l.project_url,target:"_blank",rel:"noopener noreferrer",className:"cs-link",children:[l.project_url.endsWith(".pdf")||l.project_url.includes("project=eggdecorator")?"View Instructions":"Live project"," ",(0,b.jsx)(ao,{size:14})]}),l.github_url&&(0,b.jsxs)("a",{href:l.github_url,target:"_blank",rel:"noopener noreferrer",className:"cs-link",children:["GitHub ",(0,b.jsx)(ao,{size:14})]}),l.notion_url&&(0,b.jsxs)("a",{href:l.notion_url,target:"_blank",rel:"noopener noreferrer",className:"cs-link",children:[l.notion_url.includes("github.com")?"GitHub":l.notion_url.includes("google.com/presentation")?"Slides":l.notion_url.includes("ceeoinnovations.org")||l.notion_url.includes("tufts.edu")?"Full Blog Post":"Documentation"," ",(0,b.jsx)(ao,{size:14})]})]})]}),(l.hero_media||l.gif_url||l.images?.[0])&&(0,b.jsx)("div",{className:"cs-hero__media",children:(0,b.jsx)("div",{className:"cs-hero__media-inner",children:(0,b.jsx)(aq,{src:l.hero_media||l.gif_url||l.images?.[0],alt:l.title})})})]}),(0,b.jsxs)("main",{className:"cs-body",children:[l.overview&&(0,b.jsx)(ar,{children:(0,b.jsxs)("section",{className:"cs-section",children:[(0,b.jsx)("span",{className:"cs-section__label",children:"Overview"}),(0,b.jsx)("p",{className:"cs-section__text",children:l.overview.text})]})}),l.development&&(0,b.jsx)(ar,{children:(0,b.jsxs)("section",{className:"cs-section",children:[(0,b.jsx)("span",{className:"cs-section__label",children:"Process"}),(0,b.jsx)("div",{className:"cs-dev-grid",children:l.development.items?.map((a,c)=>"image"===a.type||"gif"===a.type?(0,b.jsx)("div",{className:"cs-dev-grid__media",children:(0,b.jsx)(aq,{src:a.value,alt:`Process ${c+1}`})},c):"text"===a.type?(0,b.jsx)("div",{className:"cs-dev-grid__text",children:(0,b.jsx)("p",{children:a.value})},c):null)})]})}),s&&(0,b.jsx)(ar,{children:(0,b.jsxs)("section",{className:"cs-section",children:[(0,b.jsx)("span",{className:"cs-section__label",children:l.content.find(a=>"overview"===a.type)?.title||"Projects"}),(0,b.jsx)("div",{className:"cs-items-grid",children:l.content.filter(a=>"project_item"===a.type).map((a,c)=>(0,b.jsx)(ar,{children:(0,b.jsxs)("div",{className:"cs-item-card",children:[(0,b.jsxs)("div",{className:"cs-item-card__media",children:[(0,b.jsx)("img",{src:a.image,alt:a.title,className:"cs-item-card__img cs-item-card__img--static"}),a.gif&&(0,b.jsx)("img",{src:a.gif,alt:a.title,className:"cs-item-card__img cs-item-card__img--hover"})]}),(0,b.jsxs)("div",{className:"cs-item-card__body",children:[(0,b.jsx)("h3",{children:a.title}),(0,b.jsx)("p",{children:a.description})]})]})},a.id||c))})]})}),l.final_result&&(0,b.jsx)(ar,{children:(0,b.jsxs)("section",{className:"cs-section",children:[(0,b.jsx)("span",{className:"cs-section__label",children:"Result"}),(0,b.jsx)("div",{className:"cs-result",children:l.final_result.items?.map((a,c)=>"image"===a.type||"gif"===a.type?(0,b.jsx)("div",{className:"cs-result__media",children:(0,b.jsx)(aq,{src:a.value,alt:`Result ${c+1}`})},c):"image_grid"===a.type?(0,b.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginTop:"24px"},children:a.value.map((a,c)=>(0,b.jsx)("div",{className:"cs-result__media",style:{margin:0},children:(0,b.jsx)(aq,{src:a,alt:`Result Grid ${c+1}`})},c))},c):"text"===a.type?(0,b.jsx)("p",{className:"cs-result__text",children:a.value},c):"list"===a.type?(0,b.jsx)("ul",{className:"cs-result__list",children:a.value.map((a,c)=>(0,b.jsx)("li",{children:a},c))},c):null)})]})}),l.reflection&&(0,b.jsx)(ar,{children:(0,b.jsxs)("section",{className:"cs-section",children:[(0,b.jsx)("span",{className:"cs-section__label",children:"Reflection"}),(0,b.jsxs)("div",{className:"cs-result w-full",children:[(0,b.jsx)("blockquote",{className:"cs-blockquote",children:l.reflection.text}),l.reflection.items&&l.reflection.items.map((a,c)=>"image"===a.type||"gif"===a.type?(0,b.jsx)("div",{className:"cs-result__media mt-6",children:(0,b.jsx)(aq,{src:a.value,alt:`Reflection Media ${c+1}`})},c):null)]})]})}),l.notion_iframe_url||n&&n.length>0||p?(0,b.jsx)(ar,{children:(0,b.jsx)("section",{className:"cs-section cs-section--full",children:p?(0,b.jsx)("div",{className:"cs-prose-loading",children:(0,b.jsx)(al.Loader2,{className:"w-4 h-4 animate-spin text-muted-foreground"})}):(0,b.jsx)(at,{tabs:n,summary:l.overview?.text,notionUrl:l.notion_url,notionIframeUrl:l.notion_iframe_url})})}):l.notion_url?(0,b.jsx)(ar,{children:(0,b.jsxs)("section",{className:"cs-section",children:[(0,b.jsx)("span",{className:"cs-section__label",children:"Documentation"}),(0,b.jsx)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:(0,b.jsxs)("a",{href:l.notion_url,target:"_blank",rel:"noopener noreferrer",className:"cs-link cs-link--large",children:[l.notion_url.includes("github.com")?"View Repository on GitHub":"Read Blog",(0,b.jsx)(ao,{size:18,className:"ml-1"})]})})]})}):null,!r&&!s&&!l.notion_iframe_url&&0===n.length&&!p&&(0,b.jsx)(ar,{children:(0,b.jsx)("section",{className:"cs-section cs-section--fallback",children:l.notion_url?(0,b.jsxs)("a",{href:l.notion_url,target:"_blank",rel:"noopener noreferrer",className:"cs-link cs-link--large",children:["Read full case study ",(0,b.jsx)(ao,{size:16})]}):(0,b.jsx)("p",{className:"cs-section__text",style:{color:"hsl(var(--muted-foreground))"},children:"No additional content available."})})})]}),(0,b.jsx)("div",{className:"cs-footer-nav",children:(0,b.jsxs)(e.default,{href:"/",className:"cs-back cs-back--footer",children:[(0,b.jsx)(am.ArrowLeft,{size:15})," Back to all work"]})}),(0,b.jsx)(g.default,{})]}),(0,b.jsx)("style",{children:`
        .cs-page{min-height:100vh;background:hsl(var(--background))}
        .cs-reveal{opacity:0;transform:translateY(28px);transition:opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.16,1,.3,1)}
        .cs-reveal--visible{opacity:1;transform:translateY(0)}
        @media(prefers-reduced-motion:reduce){.cs-reveal{transition:none;opacity:1;transform:none}}
        .cs-back{display:inline-flex;align-items:center;gap:6px;font-size:.8rem;font-weight:500;color:hsl(var(--muted-foreground));text-decoration:none;letter-spacing:.02em;transition:color .2s;margin-bottom:32px}
        .cs-back:hover{color:hsl(var(--foreground))}
        .cs-back--footer{margin-bottom:0}
        .cs-hero{padding:100px 24px 0;max-width:1100px;margin:0 auto}
        .cs-hero__inner{max-width:800px}
        .cs-hero__meta{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px}
        .cs-tag{font-size:.72rem;font-weight:500;letter-spacing:.06em;text-transform:uppercase;padding:4px 10px;border-radius:100px;border:1px solid hsl(var(--border));color:hsl(var(--muted-foreground))}
        .cs-hero__title{font-size:clamp(2rem,6vw,3.5rem);font-weight:700;line-height:1.15;letter-spacing:-.02em;color:hsl(var(--foreground));margin:0 0 16px}
        .cs-hero__desc{font-size:1.1rem;line-height:1.65;color:hsl(var(--muted-foreground));margin:0 0 28px;max-width:560px}
        .cs-hero__links{display:flex;gap:20px;flex-wrap:wrap}
        .cs-link{display:inline-flex;align-items:center;gap:4px;font-size:.85rem;font-weight:500;color:hsl(var(--primary));text-decoration:none;border-bottom:1px solid hsl(var(--primary)/.3);padding-bottom:1px;transition:border-color .2s}
        .cs-link:hover{border-color:hsl(var(--primary))}
        .cs-link--large{font-size:1rem}
        .cs-hero__media{margin:48px 0 0;overflow:hidden;border-radius:12px;max-height:520px;background:hsl(var(--muted)/.3);border:1px solid hsl(var(--border))}
        .cs-hero__media-inner{width:100%;height:100%;aspect-ratio:16/9;overflow:hidden}
        .cs-media{width:100%;height:100%;object-fit:contain;display:block;transition:transform .5s ease}
        .cs-media-iframe-wrapper{position:relative;width:100%;aspect-ratio:16/9;border-radius:10px;overflow:hidden;background:hsl(var(--muted)/.3);border:1px solid hsl(var(--border))}
        .cs-media-iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0}
        .cs-body{max-width:1100px;margin:0 auto;padding:80px 24px 48px;display:flex;flex-direction:column;gap:80px}
        .cs-section{display:grid;grid-template-columns:160px 1fr;gap:0 48px;align-items:start}
        .cs-section--full{display:block}
        .cs-section--fallback{display:flex;justify-content:center;padding:48px 0}
        .cs-section__label{font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:hsl(var(--muted-foreground));padding-top:4px;position:sticky;top:80px}
        .cs-section__text{font-size:1.05rem;line-height:1.75;color:hsl(var(--foreground));margin:0}
        .cs-dev-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start}
        .cs-dev-grid__media img,.cs-dev-grid__media video{width:100%;border-radius:10px;object-fit:contain}
        .cs-dev-grid__text p{font-size:.95rem;line-height:1.75;color:hsl(var(--foreground));margin:0}
        .cs-result{display:flex;flex-direction:column;gap:20px}
        .cs-result__media img,.cs-result__media video{width:100%;border-radius:10px;max-height:400px;object-fit:contain}
        .cs-result__text{font-size:1rem;line-height:1.75;color:hsl(var(--foreground));margin:0}
        .cs-result__list{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:12px}
        .cs-result__list li{font-size:.95rem;line-height:1.6;color:hsl(var(--foreground));padding-left:20px;position:relative}
        .cs-result__list li::before{content:'-';position:absolute;left:0;color:hsl(var(--primary));font-weight:600}
        .cs-blockquote{font-size:1.1rem;line-height:1.75;color:hsl(var(--foreground));border-left:3px solid hsl(var(--primary));padding-left:24px;margin:0;font-style:italic}
        .cs-items-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-top:32px}
        .cs-item-card{border:1px solid hsl(var(--border));border-radius:12px;overflow:hidden;background:hsl(var(--card));transition:box-shadow .3s ease,transform .3s ease}
        .cs-item-card:hover{box-shadow:0 12px 32px -8px hsl(var(--foreground)/.1);transform:translateY(-3px)}
        .cs-item-card__media{position:relative;aspect-ratio:4/3;overflow:hidden;background:hsl(var(--muted))}
        .cs-item-card__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .3s ease}
        .cs-item-card__img--hover{opacity:0}
        .cs-item-card:hover .cs-item-card__img--static{opacity:0}
        .cs-item-card:hover .cs-item-card__img--hover{opacity:1}
        .cs-item-card__body{padding:16px 18px 18px}
        .cs-item-card__body h3{font-size:.95rem;font-weight:600;color:hsl(var(--foreground));margin:0 0 6px}
        .cs-item-card__body p{font-size:.82rem;line-height:1.6;color:hsl(var(--muted-foreground));margin:0}

        /* ── Accordion ── */
        .cs-accordion{border:1px solid hsl(var(--border));border-radius:12px;overflow:hidden;background:hsl(var(--card))}
        .cs-accordion__trigger{width:100%;display:flex;align-items:center;justify-content:space-between;padding:20px 24px;background:hsl(var(--card));border:none;cursor:pointer;transition:background .2s;text-align:left}
        .cs-accordion__trigger:hover{background:hsl(var(--muted)/.5)}
        .cs-accordion__trigger--open{border-bottom:1px solid hsl(var(--border))}
        .cs-accordion__label{font-size:.85rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:hsl(var(--foreground))}
        .cs-accordion__meta{display:flex;align-items:center;gap:16px}
        .cs-accordion__notion-link{display:inline-flex;align-items:center;gap:4px;font-size:.78rem;font-weight:500;color:hsl(var(--primary));text-decoration:none;border-bottom:1px solid hsl(var(--primary)/.3);padding-bottom:1px;transition:border-color .2s}
        .cs-accordion__notion-link:hover{border-color:hsl(var(--primary))}
        .cs-accordion__chevron{color:hsl(var(--muted-foreground));transition:transform .3s ease;flex-shrink:0}
        .cs-accordion__chevron--open{transform:rotate(180deg)}
        .cs-accordion__body{overflow:hidden}
        
        /* ── NEW Cards Grid UI (Image + Text) ── */
        .cs-docs-menu{padding:0 0 32px}
        
        .cs-docs-grid-container{
          max-width:800px;
          margin:48px auto 0;
          padding:32px 24px 0;
          border-top:1px solid hsl(var(--border))
        }
        
        .cs-docs-grid-container--inline{
          margin:16px auto;
          border-top:none;
          padding:0 24px;
        }

        .cs-docs-grid-title{font-size:.85rem;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:hsl(var(--muted-foreground));margin:0 0 20px}
        
        /* The CSS Grid */
        .cs-docs-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(220px, 1fr));gap:24px}
        
        /* The Card */
        .cs-docs-card{display:flex;flex-direction:column;padding:0;background:hsl(var(--card));border:1px solid hsl(var(--border));border-radius:12px;cursor:pointer;transition:all .2s ease;text-align:left;overflow:hidden;}
        .cs-docs-card:hover{border-color:hsl(var(--foreground)/.4);transform:translateY(-3px);box-shadow:0 8px 24px -8px rgba(0,0,0,0.08)}
        
        /* Card Thumbnail Area */
        .cs-docs-card__media{width:100%;aspect-ratio:16/9;background:hsl(var(--muted));overflow:hidden;border-bottom:1px solid hsl(var(--border))}
        .cs-docs-card__media img{width:100%;height:100%;object-fit:cover;transition:transform .4s ease}
        .cs-docs-card:hover .cs-docs-card__media img{transform:scale(1.05)}
        
        /* Card Text Area */
        .cs-docs-card__body{display:flex;align-items:center;justify-content:space-between;width:100%;padding:16px 20px;}
        .cs-docs-card__title{font-size:.95rem;font-weight:600;color:hsl(var(--foreground))}
        .cs-docs-card__icon{color:hsl(var(--muted-foreground));transition:transform .2s ease}
        .cs-docs-card:hover .cs-docs-card__icon{color:hsl(var(--foreground));transform:translateX(4px)}

        /* ── Detail View UI (Centered) ── */
        .cs-docs-detail{padding:24px}
        .cs-docs-detail__header{
          display:flex;
          align-items:center;
          gap:16px;
          margin:0 auto 16px auto;
          padding-bottom:16px;
          border-bottom:1px solid hsl(var(--border)/.5);
          max-width:800px;
        }
        .cs-docs-back-btn{display:inline-flex;align-items:center;gap:6px;font-size:.85rem;font-weight:500;color:hsl(var(--muted-foreground));background:hsl(var(--muted)/.3);border:1px solid transparent;padding:6px 12px;border-radius:6px;cursor:pointer;transition:all .2s}
        .cs-docs-back-btn:hover{color:hsl(var(--foreground));background:hsl(var(--muted)/.6);border-color:hsl(var(--border))}
        .cs-docs-detail__title{font-size:.95rem;font-weight:600;color:hsl(var(--foreground))}

        /* ── Prose Styles & Iframes ── */
        .cs-prose-loading{padding:40px 0;display:flex;justify-content:center}
        
        .cs-prose{
          font-size:.95rem;
          line-height:1.8;
          padding:32px 24px 8px;
          max-width:800px;
          margin:0 auto;
        }
        
        .cs-iframe-wrapper {
          width: 100%;
          aspect-ratio: 16 / 9;
          margin: 32px 0;
          border-radius: 12px;
          overflow: hidden;
          background: hsl(var(--muted) / 0.5);
          border: 1px solid hsl(var(--border));
        }
        .cs-iframe-wrapper iframe {
          width: 100%;
          height: 100%;
        }

        .cs-prose img{width:100%;border-radius:8px;margin:24px 0}
        .cs-prose h1,.cs-prose h2{font-weight:600;letter-spacing:-.02em;margin-top:48px;margin-bottom:16px}
        .cs-prose h2{font-size:1.3rem}
        .cs-prose h3{font-size:1.1rem;margin-top:32px}
        .cs-prose pre{border-radius:8px;font-size:.82rem}
        .cs-prose details{margin:16px 0}
        .cs-prose summary{cursor:pointer;font-weight:500;padding:8px 0}
        .cs-footer-nav{max-width:1100px;margin:0 auto;padding:0 24px 64px}
        .cs-not-found{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding-top:80px}
        .cs-not-found h1{font-size:1.5rem;font-weight:600}
        
        @media(max-width:768px){
          .cs-hero{padding-top:88px}
          .cs-section{grid-template-columns:1fr;gap:12px}
          .cs-section__label{position:static}
          .cs-dev-grid{grid-template-columns:1fr}
          .cs-items-grid{grid-template-columns:1fr}
          .cs-hero__media{margin:32px 0 0}
          .cs-hero__media-inner{aspect-ratio:4/3}
          .cs-body{padding:48px 20px 32px;gap:56px}
          .cs-docs-grid{grid-template-columns:1fr}
          .cs-docs-detail{padding:20px}
          .cs-notion-embed__frame{height:480px}
        }
        /* ── Notion embed ── */
        .cs-notion-embed{
          margin:32px 0 0;
          border-top:1px solid hsl(var(--border));
          padding-top:24px;
        }
        .cs-notion-embed__header{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 24px 16px;
          max-width:800px;
          margin:0 auto;
        }
        .cs-notion-embed__label{
          font-size:.78rem;
          font-weight:600;
          letter-spacing:.08em;
          text-transform:uppercase;
          color:hsl(var(--muted-foreground));
        }
        .cs-notion-embed__frame{
          display:block;
          width:100%;
          height:680px;
          border:none;
          border-radius:0 0 12px 12px;
        }
      `})]})}],10703)}];

//# sourceMappingURL=src_app_projects_%5BprojectId%5D_page_tsx_0mja~a2._.js.map