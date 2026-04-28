module.exports=[4987,(a,b,c)=>{"use strict";function d({widthInt:a,heightInt:b,blurWidth:c,blurHeight:e,blurDataURL:f,objectFit:g}){let h=c?40*c:a,i=e?40*e:b,j=h&&i?`viewBox='0 0 ${h} ${i}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${j}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${j?"none":"contain"===g?"xMidYMid":"cover"===g?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${f}'/%3E%3C/svg%3E`}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImageBlurSvg",{enumerable:!0,get:function(){return d}})},345,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={VALID_LOADERS:function(){return f},imageConfigDefault:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=["default","imgix","cloudinary","akamai","custom"],g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},94915,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImgProps",{enumerable:!0,get:function(){return j}}),a.r(92434);let d=a.r(68063),e=a.r(4987),f=a.r(345),g=["-moz-initial","fill","none","scale-down",void 0];function h(a){return void 0!==a.default}function i(a){return void 0===a?a:"number"==typeof a?Number.isFinite(a)?a:NaN:"string"==typeof a&&/^[0-9]+$/.test(a)?parseInt(a,10):NaN}function j({src:a,sizes:b,unoptimized:c=!1,priority:k=!1,preload:l=!1,loading:m,className:n,quality:o,width:p,height:q,fill:r=!1,style:s,overrideSrc:t,onLoad:u,onLoadingComplete:v,placeholder:w="empty",blurDataURL:x,fetchPriority:y,decoding:z="async",layout:A,objectFit:B,objectPosition:C,lazyBoundary:D,lazyRoot:E,...F},G){var H;let I,J,K,{imgConf:L,showAltText:M,blurComplete:N,defaultLoader:O}=G,P=L||f.imageConfigDefault;if("allSizes"in P)I=P;else{let a=[...P.deviceSizes,...P.imageSizes].sort((a,b)=>a-b),b=P.deviceSizes.sort((a,b)=>a-b),c=P.qualities?.sort((a,b)=>a-b);I={...P,allSizes:a,deviceSizes:b,qualities:c}}if(void 0===O)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let Q=F.loader||O;delete F.loader,delete F.srcSet;let R="__next_img_default"in Q;if(R){if("custom"===I.loader)throw Object.defineProperty(Error(`Image with src "${a}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let a=Q;Q=b=>{let{config:c,...d}=b;return a(d)}}if(A){"fill"===A&&(r=!0);let a={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];a&&(s={...s,...a});let c={responsive:"100vw",fill:"100vw"}[A];c&&!b&&(b=c)}let S="",T=i(p),U=i(q);if((H=a)&&"object"==typeof H&&(h(H)||void 0!==H.src)){let b=h(a)?a.default:a;if(!b.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!b.height||!b.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(J=b.blurWidth,K=b.blurHeight,x=x||b.blurDataURL,S=b.src,!r)if(T||U){if(T&&!U){let a=T/b.width;U=Math.round(b.height*a)}else if(!T&&U){let a=U/b.height;T=Math.round(b.width*a)}}else T=b.width,U=b.height}let V=!k&&!l&&("lazy"===m||void 0===m);(!(a="string"==typeof a?a:S)||a.startsWith("data:")||a.startsWith("blob:"))&&(c=!0,V=!1),I.unoptimized&&(c=!0),R&&!I.dangerouslyAllowSVG&&a.split("?",1)[0].endsWith(".svg")&&(c=!0);let W=i(o),X=Object.assign(r?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:B,objectPosition:C}:{},M?{}:{color:"transparent"},s),Y=N||"empty"===w?null:"blur"===w?`url("data:image/svg+xml;charset=utf-8,${(0,e.getImageBlurSvg)({widthInt:T,heightInt:U,blurWidth:J,blurHeight:K,blurDataURL:x||"",objectFit:X.objectFit})}")`:`url("${w}")`,Z=g.includes(X.objectFit)?"fill"===X.objectFit?"100% 100%":"cover":X.objectFit,$=Y?{backgroundSize:Z,backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},_=function({config:a,src:b,unoptimized:c,width:e,quality:f,sizes:g,loader:h}){if(c){if(b.startsWith("/")&&!b.startsWith("//")){let a=(0,d.getDeploymentId)();if(a){let c=b.indexOf("?");if(-1!==c){let d=new URLSearchParams(b.slice(c+1));d.get("dpl")||(d.append("dpl",a),b=b.slice(0,c)+"?"+d.toString())}else b+=`?dpl=${a}`}}return{src:b,srcSet:void 0,sizes:void 0}}let{widths:i,kind:j}=function({deviceSizes:a,allSizes:b},c,d){if(d){let c=/(^|\s)(1?\d?\d)vw/g,e=[];for(let a;a=c.exec(d);)e.push(parseInt(a[2]));if(e.length){let c=.01*Math.min(...e);return{widths:b.filter(b=>b>=a[0]*c),kind:"w"}}return{widths:b,kind:"w"}}return"number"!=typeof c?{widths:a,kind:"w"}:{widths:[...new Set([c,2*c].map(a=>b.find(b=>b>=a)||b[b.length-1]))],kind:"x"}}(a,e,g),k=i.length-1;return{sizes:g||"w"!==j?g:"100vw",srcSet:i.map((c,d)=>`${h({config:a,src:b,quality:f,width:c})} ${"w"===j?c:d+1}${j}`).join(", "),src:h({config:a,src:b,quality:f,width:i[k]})}}({config:I,src:a,unoptimized:c,width:T,quality:W,sizes:b,loader:Q}),aa=V?"lazy":m;return{props:{...F,loading:aa,fetchPriority:y,width:T,height:U,decoding:z,className:n,style:{...X,...$},sizes:_.sizes,srcSet:_.srcSet,src:t||_.src},meta:{unoptimized:c,preload:l||k,placeholder:w,fill:r}}}},94613,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return f}});let d=a.r(72131),e=()=>{};function f(a){let{headManager:b,reduceComponentsToState:c}=a;function f(){if(b&&b.mountedInstances){let a=d.Children.toArray(Array.from(b.mountedInstances).filter(Boolean));b.updateHead(c(a))}}return b?.mountedInstances?.add(a.children),f(),e(()=>(b?.mountedInstances?.add(a.children),()=>{b?.mountedInstances?.delete(a.children)})),e(()=>(b&&(b._pendingUpdate=f),()=>{b&&(b._pendingUpdate=f)})),null}},92966,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.HeadManagerContext},58018,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return p},defaultHead:function(){return l}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(33354),g=a.r(46058),h=a.r(87924),i=g._(a.r(72131)),j=f._(a.r(94613)),k=a.r(92966);function l(){return[(0,h.jsx)("meta",{charSet:"utf-8"},"charset"),(0,h.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===i.default.Fragment?a.concat(i.default.Children.toArray(b.props.children).reduce((a,b)=>"string"==typeof b||"number"==typeof b?a:a.concat(b),[])):a.concat(b)}a.r(92434);let n=["name","httpEquiv","charSet","itemProp"];function o(a){let b,c,d,e;return a.reduce(m,[]).reverse().concat(l().reverse()).filter((b=new Set,c=new Set,d=new Set,e={},a=>{let f=!0,g=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){g=!0;let c=a.key.slice(a.key.indexOf("$")+1);b.has(c)?f=!1:b.add(c)}switch(a.type){case"title":case"base":c.has(a.type)?f=!1:c.add(a.type);break;case"meta":for(let b=0,c=n.length;b<c;b++){let c=n[b];if(a.props.hasOwnProperty(c))if("charSet"===c)d.has(c)?f=!1:d.add(c);else{let b=a.props[c],d=e[c]||new Set;("name"!==c||!g)&&d.has(b)?f=!1:(d.add(b),e[c]=d)}}}return f})).reverse().map((a,b)=>{let c=a.key||b;return i.default.cloneElement(a,{key:c})})}let p=function({children:a}){let b=(0,i.useContext)(k.HeadManagerContext);return(0,h.jsx)(j.default,{reduceComponentsToState:o,headManager:b,children:a})};("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},4486,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.ImageConfigContext},53773,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.RouterContext},35444,(a,b,c)=>{"use strict";function d(a,b){let c=a||75;return b?.qualities?.length?b.qualities.reduce((a,b)=>Math.abs(b-c)<Math.abs(a-c)?b:a,b.qualities[0]):c}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"findClosestQuality",{enumerable:!0,get:function(){return d}})},2305,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return g}});let d=a.r(35444),e=a.r(68063);function f({config:a,src:b,width:c,quality:g}){let h=(0,e.getDeploymentId)();if(b.startsWith("/")&&!b.startsWith("//")){let a=b.indexOf("?");if(-1!==a){let c=new URLSearchParams(b.slice(a+1)),d=c.get("dpl");if(d){h=d,c.delete("dpl");let e=c.toString();b=b.slice(0,a)+(e?"?"+e:"")}}}if(b.startsWith("/")&&b.includes("?")&&a.localPatterns?.length===1&&"**"===a.localPatterns[0].pathname&&""===a.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${b}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let i=(0,d.findClosestQuality)(g,a);return`${a.path}?url=${encodeURIComponent(b)}&w=${c}&q=${i}${b.startsWith("/")&&h?`&dpl=${h}`:""}`}f.__next_img_default=!0;let g=f},67161,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"Image",{enumerable:!0,get:function(){return u}});let d=a.r(33354),e=a.r(46058),f=a.r(87924),g=e._(a.r(72131)),h=d._(a.r(35112)),i=d._(a.r(58018)),j=a.r(94915),k=a.r(345),l=a.r(4486);a.r(92434);let m=a.r(53773),n=d._(a.r(2305)),o=a.r(8591),p={deviceSizes:[640,828,1080,1280,1920],imageSizes:[16,32,64,128,256],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function q(a,b,c,d,e,f,g){let h=a?.src;a&&a["data-loaded-src"]!==h&&(a["data-loaded-src"]=h,("decode"in a?a.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(a.parentElement&&a.isConnected){if("empty"!==b&&e(!0),c?.current){let b=new Event("load");Object.defineProperty(b,"target",{writable:!1,value:a});let d=!1,e=!1;c.current({...b,nativeEvent:b,currentTarget:a,target:a,isDefaultPrevented:()=>d,isPropagationStopped:()=>e,persist:()=>{},preventDefault:()=>{d=!0,b.preventDefault()},stopPropagation:()=>{e=!0,b.stopPropagation()}})}d?.current&&d.current(a)}}))}function r(a){return g.use?{fetchPriority:a}:{fetchpriority:a}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let s=(0,g.forwardRef)(({src:a,srcSet:b,sizes:c,height:d,width:e,decoding:h,className:i,style:j,fetchPriority:k,placeholder:l,loading:m,unoptimized:n,fill:p,onLoadRef:s,onLoadingCompleteRef:t,setBlurComplete:u,setShowAltText:v,sizesInput:w,onLoad:x,onError:y,...z},A)=>{let B=(0,g.useCallback)(a=>{a&&(y&&(a.src=a.src),a.complete&&q(a,l,s,t,u,n,w))},[a,l,s,t,u,y,n,w]),C=(0,o.useMergedRef)(A,B);return(0,f.jsx)("img",{...z,...r(k),loading:m,width:e,height:d,decoding:h,"data-nimg":p?"fill":"1",className:i,style:j,sizes:c,srcSet:b,src:a,ref:C,onLoad:a=>{q(a.currentTarget,l,s,t,u,n,w)},onError:a=>{v(!0),"empty"!==l&&u(!0),y&&y(a)}})});function t({isAppRouter:a,imgAttributes:b}){let c={as:"image",imageSrcSet:b.srcSet,imageSizes:b.sizes,crossOrigin:b.crossOrigin,referrerPolicy:b.referrerPolicy,...r(b.fetchPriority)};return a&&h.default.preload?(h.default.preload(b.src,c),null):(0,f.jsx)(i.default,{children:(0,f.jsx)("link",{rel:"preload",href:b.srcSet?void 0:b.src,...c},"__nimg-"+b.src+b.srcSet+b.sizes)})}let u=(0,g.forwardRef)((a,b)=>{let c=(0,g.useContext)(m.RouterContext),d=(0,g.useContext)(l.ImageConfigContext),e=(0,g.useMemo)(()=>{let a=p||d||k.imageConfigDefault,b=[...a.deviceSizes,...a.imageSizes].sort((a,b)=>a-b),c=a.deviceSizes.sort((a,b)=>a-b),e=a.qualities?.sort((a,b)=>a-b);return{...a,allSizes:b,deviceSizes:c,qualities:e,localPatterns:d?.localPatterns}},[d]),{onLoad:h,onLoadingComplete:i}=a,o=(0,g.useRef)(h);(0,g.useEffect)(()=>{o.current=h},[h]);let q=(0,g.useRef)(i);(0,g.useEffect)(()=>{q.current=i},[i]);let[r,u]=(0,g.useState)(!1),[v,w]=(0,g.useState)(!1),{props:x,meta:y}=(0,j.getImgProps)(a,{defaultLoader:n.default,imgConf:e,blurComplete:r,showAltText:v});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{...x,unoptimized:y.unoptimized,placeholder:y.placeholder,fill:y.fill,onLoadRef:o,onLoadingCompleteRef:q,setBlurComplete:u,setShowAltText:w,sizesInput:a.sizes,ref:b}),y.preload?(0,f.jsx)(t,{isAppRouter:!c,imgAttributes:x}):null]})});("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},33095,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},getImageProps:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(33354),g=a.r(94915),h=a.r(67161),i=f._(a.r(2305));function j(a){let{props:b}=(0,g.getImgProps)(a,{defaultLoader:i.default,imgConf:{deviceSizes:[640,828,1080,1280,1920],imageSizes:[16,32,64,128,256],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[a,c]of Object.entries(b))void 0===c&&delete b[a];return{props:b}}let k=h.Image},71987,(a,b,c)=>{b.exports=a.r(33095)},16138,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(50944),e=a.i(71987);a.s(["default",0,({project:a,index:f=0,isStatic:g=!1})=>{let[h,i]=(0,c.useState)(!1),[j,k]=(0,c.useState)(0),l=(0,d.useRouter)(),m=(0,c.useRef)(null),n=a.images||[],o=a.images&&a.images.length>0||a.gif_url;return(0,b.jsxs)("article",{ref:m,onClick:()=>{g||l.push(`/projects/${a.id}`)},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),className:"pg-card group",style:{"--card-index":f},children:[(0,b.jsx)("div",{className:"pg-card__image-wrap",children:o?(0,b.jsxs)(b.Fragment,{children:[n.length>0?(0,b.jsxs)("div",{className:"relative w-full h-full",children:[n.map((c,d)=>c.toLowerCase().endsWith(".mov")||c.toLowerCase().endsWith(".mp4")?(0,b.jsx)("video",{src:c,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:`pg-card__img absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${d===j?"opacity-100 z-10":"opacity-0 pointer-events-none -z-10"}`},c):(0,b.jsx)(e.default,{src:c,alt:`${a.title} image ${d+1}`,fill:!0,sizes:"(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw",unoptimized:c.toLowerCase().endsWith(".gif"),className:`pg-card__img transition-opacity duration-500 ${d===j?"opacity-100":"opacity-0 pointer-events-none"}`},c)),g&&n.length>1&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("button",{onClick:a=>{a.stopPropagation(),k(a=>(a-1+n.length)%n.length)},className:"absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-background/60 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background","aria-label":"Previous image",children:(0,b.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("path",{d:"m15 18-6-6 6-6"})})}),(0,b.jsx)("button",{onClick:a=>{a.stopPropagation(),k(a=>(a+1)%n.length)},className:"absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-background/60 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background","aria-label":"Next image",children:(0,b.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("path",{d:"m9 18 6-6-6-6"})})}),(0,b.jsx)("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1",children:n.map((a,c)=>(0,b.jsx)("div",{className:`w-1.5 h-1.5 rounded-full transition-colors ${c===j?"bg-primary":"bg-muted-foreground/30"}`},c))})]})]}):a.gif_url?(0,b.jsx)("img",{src:a.gif_url,alt:a.title,className:`pg-card__img pg-card__img--static ${h&&a.gif_url?"pg-card__img--hidden":""}`}):null,!g&&a.gif_url&&(0,b.jsx)("img",{src:a.gif_url,alt:`${a.title} in action`,className:`pg-card__img pg-card__img--gif ${h?"pg-card__img--visible":""}`})]}):(0,b.jsx)("div",{className:"pg-card__placeholder",children:(0,b.jsx)("span",{children:a.title.charAt(0)})})}),(0,b.jsxs)("div",{className:"pg-card__body",children:[(0,b.jsx)("h3",{className:"pg-card__title",children:a.title}),a.quick_description&&(0,b.jsx)("p",{className:"pg-card__desc",children:a.quick_description}),a.notion_url&&(0,b.jsx)("div",{className:"mt-3 flex",onClick:a=>a.stopPropagation(),children:(0,b.jsxs)("a",{href:a.notion_url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1",children:["Documentation",(0,b.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,b.jsx)("polyline",{points:"15 3 21 3 21 9"}),(0,b.jsx)("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})}),!g&&(0,b.jsx)("div",{className:"pg-card__cta","aria-hidden":"true",children:(0,b.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,b.jsx)("polyline",{points:"12 5 19 12 12 19"})]})})]}),(0,b.jsx)("style",{children:`
        .pg-card {
          position: relative;
          cursor: ${g?"default":"pointer"};
          display: flex;
          flex-direction: column;
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border) / 0.3);
          border-radius: 4px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          animation: pgCardIn 0.5s ease calc(var(--card-index, 0) * 60ms) forwards;
          transition: transform 0.3s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.3s cubic-bezier(0.2, 0, 0, 1);
        }

        @keyframes pgCardIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .pg-card:hover {
          transform: translateY(-2px);
          border-color: hsl(var(--border) / 0.8);
          background: hsl(var(--muted) / 0.05);
        }

        .pg-card__image-wrap {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: hsl(var(--muted) / 0.3);
        }

        .pg-card__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center center;
          padding: 8px;
          transition: transform 0.4s ease, opacity 0.3s ease;
        }

        .pg-card__img--hidden { opacity: 0; }
        .pg-card__img--gif    { opacity: 0; }
        .pg-card__img--flip   { opacity: 0; }
        .pg-card__img--visible { opacity: 1; }

        .pg-card__placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: hsl(var(--muted));
        }
        .pg-card__placeholder span {
          font-size: 3rem;
          font-weight: 700;
          color: hsl(var(--muted-foreground) / 0.25);
          font-family: Georgia, serif;
        }

        .pg-card__body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .pg-card__title {
          font-size: 1.125rem;
          font-weight: 700;
          line-height: 1.2;
          color: hsl(var(--foreground));
          margin: 0;
        }

        .pg-card__desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: hsl(var(--muted-foreground) / 0.8);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .pg-card__cta {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: auto;
          padding-top: 8px;
          color: hsl(var(--foreground) / 0.4);
          transition: transform 0.2s ease, color 0.2s ease;
        }
        
        .pg-card:hover .pg-card__cta {
          transform: translateX(4px);
          color: hsl(var(--primary));
        }

        @media (prefers-reduced-motion: reduce) {
          .pg-card { transition: none; animation: none; opacity: 1; transform: none; }
          .pg-card__img { transition: none; }
          .pg-card__cta { transition: none; }
        }
      `})]})}])}];

//# sourceMappingURL=_0ezy-xl._.js.map