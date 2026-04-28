(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={formatUrl:function(){return s},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let o=e.r(90809)._(e.r(98183)),n=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:i}=e,r=e.protocol||"",a=e.pathname||"",s=e.hash||"",l=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:i&&(d=t+(~i.indexOf(":")?`[${i}]`:i),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||n.test(r))&&!1!==d?(d="//"+(d||""),a&&"/"!==a[0]&&(a="/"+a)):d||(d=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),a=a.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${r}${d}${a}${c}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return s(e)}},18581,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useMergedRef",{enumerable:!0,get:function(){return a}});let r=e.r(71645);function a(e,t){let i=(0,r.useRef)(null),a=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=i.current;e&&(i.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(i.current=o(e,r)),t&&(a.current=o(t,r))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let i=e(t);return"function"==typeof i?i:()=>e(null)}}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},73668,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"isLocalURL",{enumerable:!0,get:function(){return o}});let r=e.r(18967),a=e.r(52817);function o(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),i=new URL(e,t);return i.origin===t&&(0,a.hasBasePath)(i.pathname)}catch(e){return!1}}},84508,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},22016,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return x},useLinkStatus:function(){return v}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let o=e.r(90809),n=e.r(43476),s=o._(e.r(71645)),l=e.r(95057),d=e.r(8372),c=e.r(18581),p=e.r(18967),u=e.r(5550);e.r(33525);let g=e.r(88540),h=e.r(91949),m=e.r(73668),f=e.r(9396);function x(t){var i,r;let a,o,x,[v,y]=(0,s.useOptimistic)(h.IDLE_LINK_STATUS),w=(0,s.useRef)(null),{href:_,as:j,children:k,prefetch:C=null,passHref:E,replace:P,shallow:N,scroll:S,onClick:O,onMouseEnter:L,onTouchStart:M,legacyBehavior:A=!1,onNavigate:R,transitionTypes:I,ref:D,unstable_dynamicOnHover:T,...z}=t;a=k,A&&("string"==typeof a||"number"==typeof a)&&(a=(0,n.jsx)("a",{children:a}));let B=s.default.useContext(d.AppRouterContext),G=!1!==C,F=!1!==C?null===(r=C)||"auto"===r?f.FetchStrategy.PPR:f.FetchStrategy.Full:f.FetchStrategy.PPR,$="string"==typeof(i=j||_)?i:(0,l.formatUrl)(i);if(A){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=s.default.Children.only(a)}let W=A?o&&"object"==typeof o&&o.ref:D,q=s.default.useCallback(e=>(null!==B&&(w.current=(0,h.mountLinkInstance)(e,$,B,F,G,y)),()=>{w.current&&((0,h.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,h.unmountPrefetchableInstance)(e)}),[G,$,B,F,y]),U={ref:(0,c.useMergedRef)(q,W),onClick(t){A||"function"!=typeof O||O(t),A&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!B||t.defaultPrevented||function(t,i,r,a,o,n,l){if("u">typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(i)){a&&(t.preventDefault(),location.replace(i));return}if(t.preventDefault(),n){let e=!1;if(n({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(99781);s.default.startTransition(()=>{p(i,a?"replace":"push",!1===o?g.ScrollBehavior.NoScroll:g.ScrollBehavior.Default,r.current,l)})}}(t,$,w,P,S,R,I)},onMouseEnter(e){A||"function"!=typeof L||L(e),A&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),B&&G&&(0,h.onNavigationIntent)(e.currentTarget,!0===T)},onTouchStart:function(e){A||"function"!=typeof M||M(e),A&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),B&&G&&(0,h.onNavigationIntent)(e.currentTarget,!0===T)}};return(0,p.isAbsoluteUrl)($)?U.href=$:A&&!E&&("a"!==o.type||"href"in o.props)||(U.href=(0,u.addBasePath)($)),x=A?s.default.cloneElement(o,U):(0,n.jsx)("a",{...z,...U,children:a}),(0,n.jsx)(b.Provider,{value:v,children:x})}e.r(84508);let b=(0,s.createContext)(h.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(b);("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},13642,e=>{"use strict";var t=e.i(43476);e.s(["default",0,()=>(0,t.jsx)("footer",{className:"py-10 border-t border-border",children:(0,t.jsx)("div",{className:"container mx-auto px-6",children:(0,t.jsxs)("div",{className:"flex flex-col items-center gap-4 sm:flex-row sm:justify-between",children:[(0,t.jsxs)("p",{className:"text-muted-foreground text-sm",children:["© ",new Date().getFullYear()," Paul Galvan"]}),(0,t.jsxs)("div",{className:"flex items-center gap-6",children:[(0,t.jsx)("a",{href:"mailto:paul.galvan@tufts.edu",className:"text-sm text-muted-foreground hover:text-foreground transition-colors",children:"paul.galvan@tufts.edu"}),(0,t.jsx)("a",{href:"https://www.linkedin.com/in/paul-galvan/",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-muted-foreground hover:text-foreground transition-colors",children:"LinkedIn"}),(0,t.jsx)("a",{href:"https://github.com/paulgalvan",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-muted-foreground hover:text-foreground transition-colors",children:"GitHub"})]})]})})})])},2488,(e,t,i)=>{t.exports=JSON.parse('[{"id":"Low-Cost-Robotic-Arm","title":"Low-Cost Robotic Arm","quick_description":"Affordable, open-source robotic arm for hands-on learning and experimentation","display_order":1,"is_featured":true,"gif_url":"/LCRA-ezgif.com-optimize.gif","hero_media":"/LCRA-ezgif.com-optimize.gif","images":["/images/lca-pic.png"],"tags":["Robotics","Coding","CAD","Ubuntu","Microcontroller"],"overview":{"title":"Overview","text":"The Low-Cost Robotic Arm was inspired by an earlier LEGO arm I built. In talking with Dr. Briana Bouchard, we reflected on how expensive the LEGO system was and how unintuitive its programming could be. That conversation sparked the idea of creating a more affordable and accessible alternative, and we teamed up to make it feasible. This project was conducted as research through the Louis Stokes Alliances for Minority Participation (LSAMP) program under Dr. Bouchard’s guidance."},"development":{"title":"Development / Process","items":[{"type":"image","value":"/images/desc.png"},{"type":"text","value":"Designing the Gripper was one of the most challenging parts of the project. Because it sits at the very end of the arm, the weight was a critical constraint. A smaller SG90 servo was chosen, which provided enough torque to handle small objects.\\n\\nSeveral concepts were tested before reaching the final version. Each option revealed new trade-offs and informed the next iteration. The process highlighted the constraints shape design choices. Small refinements ultimately made the difference between a fragile prototype and a dependable solution."},{"type":"image","value":"/ikdisp.gif"},{"type":"text","value":"A big part of the project was writing the control code for the arm. I implemented inverse kinematics using trigenometry to simplify IK. This allowed the arm be move to a specific Cartesian position. A simple WASD interface for direct control was also added. This was my first time combining mechanical design with real-time programming, which gave me a deeper understanding of how hardware and software work together."}]},"final_result":{"title":"Final Result","items":[{"type":"image","value":"/ikvid.gif"},{"type":"text","value":"Overall, I was able to:"},{"type":"list","value":["Build a fully functional 4-DOF robotic arm using low-cost, 3D-printed parts and off-the-shelf electronics.","Design a lightweight custom gripper that reliably handles small objects.","Implement key robotics concepts such as kinematics, control systems, and programming for under $30."]}]},"reflection":{"title":"Reflection","text":"This project taught me how constraints like weight, torque, and printability shape design choices. I learned the value of rapid iteration, designing for manufacturability, and staying persistent when early versions failed. It was also my first time leading a design project from concept to reality, learning new skills on the fly and turning an idea into a working system. Most importantly, it showed me how affordable tools can make robotics education more accessible and inspiring."},"content":[],"layout":{"desktop":[{"i":"hero_media","x":0,"y":0,"w":12,"h":8},{"i":"overview","x":0,"y":8,"w":12,"h":4},{"i":"development","x":0,"y":12,"w":12,"h":8},{"i":"final_result","x":0,"y":20,"w":12,"h":8},{"i":"reflection","x":0,"y":28,"w":12,"h":4}],"mobile":[{"i":"hero_media","x":0,"y":0,"w":4,"h":3},{"i":"overview","x":0,"y":3,"w":4,"h":2},{"i":"development","x":0,"y":5,"w":4,"h":3},{"i":"final_result","x":0,"y":8,"w":4,"h":3},{"i":"reflection","x":0,"y":11,"w":4,"h":2}],"lg":[{"w":10,"h":5,"x":1,"y":0,"i":"hero_media","moved":false,"static":false},{"w":12,"h":2,"x":0,"y":5,"i":"overview","moved":false,"static":false},{"w":12,"h":9,"x":0,"y":7,"i":"development","moved":false,"static":false},{"w":12,"h":8,"x":0,"y":16,"i":"final_result","moved":false,"static":false},{"w":12,"h":2,"x":0,"y":24,"i":"reflection","moved":false,"static":false}]}},{"id":"Lego-Simple-Robotics","title":"LEGO Simple Robotics","quick_description":"Introduction to robotics through LEGO - exploring gears, sensors, and creative mechanisms.","display_order":99,"is_featured":false,"gif_url":"/spirolego.gif","hero_media":"/images/walle.jpg","images":["/images/walle.jpg"],"tags":["Robotics","LEGO","Coding"],"content":[{"id":"lego-overview","type":"overview","title":"Overview","text":"This collection showcases a series of projects built with the LEGO Spike Prime Sets, exploring mechanical design, programming, and robotics. These projects were part of an introductory robotics(EN1:Simple Robotics) course and demonstrate the creative possibilities of the LEGO platform."},{"id":"lego-walker","type":"project_item","title":"LEGO Walker","description":"We demonstrated the possibilites that could be achieved with LEGO by experimenting with motion. A simple forward-falling mechanism mimiced a walking pattern.","image":"/images/legowalker.jpeg","gif":"/walklego.gif"},{"id":"lego-bird","type":"project_item","title":"LEGO Bird","description":"I applied biomimicry principles to design a bird with flapping wings. This project showed me how nature can inspire mechanical motion in LEGO builds.","image":"/images/legobird.jpeg","gif":"/birdlego.gif"},{"id":"lego-top","type":"project_item","title":"LEGO Spinning Top","description":"Building a spinning top taught me how to use gears effectively to transfer and store energy. I learned how gear ratios can amplify speed in simple mechanisms.","image":"/images/legotop.jpg","gif":"/toplego.gif"},{"id":"lego-spirograph","type":"project_item","title":"LEGO Spirograph","description":"This project used geometry and circular motion to create intricate designs with a tablet. I was the only one in the class to integrate a tablet into the mechanism, expanding the creative output.","image":"/images/spirography.jpeg","gif":"/spirolego.gif"},{"id":"lego-2d-printer","type":"project_item","title":"LEGO 2D Printer","description":"For the square-drawing challenge, I developed an XY-axis LEGO printer. I was the only one to turn the task into a functional 2D drawing machine, deepening my understanding of coordinate motion.","image":"/images/2dprinter.jpeg","gif":"/squarelego.gif"},{"id":"lego-drill","type":"project_item","title":"LEGO Drill","description":"I designed this handheld drill around the constraint of mimicking how astronauts might change a nut in space. It gave me insight into problem-solving under extreme conditions where ergonomics and efficiency are critical.","image":"/images/legodrill.jpg","gif":"/drillLego.gif"},{"id":"lego-ps4-car","type":"project_item","title":"PS4-Controlled LEGO Car","description":"By integrating a PS4 controller, I learned the intricacies of building a responsive LEGO driving system. This project showed me how LEGO could be extended into interactive, remote-controlled systems.","image":"/carlego.gif","gif":"/carlego.gif"},{"id":"lego-snake","type":"project_item","title":"LEGO Snake","description":"I adapted the PS4 control system to create a slithering LEGO snake. This project was themed for a Halloween house, showing how robotics could merge with creative storytelling.","image":"/images/legosnake.jpg","gif":"/snakelego.gif"},{"id":"lego-walle","type":"project_item","title":"Repurposed WALL-E Set","description":"For the final project, I added motors and PS4 controller support to a LEGO WALL-E and designed a maze it could navigate. Although the elementary school demo was cancelled, the project taught me how to combine robotics with user interaction in playful, educational ways.","image":"/images/walle.jpg","gif":"/walle.gif"}],"layout":{"lg":[{"w":12,"h":2,"x":0,"y":0,"i":"lego-overview","moved":false,"static":false},{"w":6,"h":6,"x":0,"y":2,"i":"lego-walker","moved":false,"static":false},{"w":6,"h":6,"x":6,"y":2,"i":"lego-bird","moved":false,"static":false},{"w":6,"h":6,"x":0,"y":8,"i":"lego-top","moved":false,"static":false},{"w":6,"h":6,"x":6,"y":8,"i":"lego-spirograph","moved":false,"static":false},{"w":6,"h":6,"x":0,"y":14,"i":"lego-2d-printer","moved":false,"static":false},{"w":6,"h":6,"x":6,"y":14,"i":"lego-drill","moved":false,"static":false},{"w":6,"h":5,"x":6,"y":20,"i":"lego-ps4-car","moved":false,"static":false},{"w":6,"h":5,"x":0,"y":20,"i":"lego-snake","moved":false,"static":false},{"w":9,"h":10,"x":1,"y":25,"i":"lego-walle","moved":false,"static":false}]}},{"id":"project-elles","title":"Project Elles","quick_description":"A LEGO Humanoid Robot controlled through a custom LEGO controller. This link takes you to a Notion page documenting the project.","display_order":1,"is_featured":false,"hero_media":"/images/elles.jpg","images":["/images/elles.jpg"],"gif_url":"/elles.gif","notion_url":"https://flax-haze-954.notion.site/Project-Elles-acebc264597c43f59996034591a59f33?pvs=74","tags":["LEGO","Robotics","Coding"]},{"id":"CAD-Portfolio","title":"CAD Portfolio","quick_description":"A collection of projects showcasing Computer-Aided Design skills and techniques.","display_order":99,"is_featured":false,"gif_url":"/cadslide.gif","hero_media":"/cadslide.gif","images":["/images/me10cad/model.png"],"tags":["CAD","Design"],"content":[{"id":"overview","type":"overview","title":"Overview","text":"This portfolio collection highlights my introduction to Computer-Aided Design (CAD) through projects completed in ME 10: Materials and Manufacturing. It demonstrates my ability to translate conceptual ideas into detailed 3D models, perform complex assemblies, and use of technical drawings. The projects reflect my learning and application of industry-standard CAD software and design principles. Some projects were developed by following instructional videos to practice foundational skills such as mates and extrusions, while others were created by interpreting and modeling directly from provided drawings."},{"id":"cad-lego-brick","type":"project_item","title":"LEGO Brick","description":"Replicated an existing part with accurate proportions to strengthen parametric modeling skills.","image":"/images/me10cad/legobrick.png"},{"id":"cad-mounting-bracket","type":"project_item","title":"Mounting Bracket","description":"Learned precision dimensioning and constraints for mechanical parts.","image":"/images/me10cad/model.png"},{"id":"cad-citrus-press","type":"project_item","title":"Citrus Press Assembly","description":"Practiced combining multiple parts into a functional assembly with moving components.","image":"/images/me10cad/citrus.png"},{"id":"cad-coffee-mug","type":"project_item","title":"Coffee Mug","description":"Practiced surface modeling, lofts, and fillets to recreate a common object.","image":"/images/me10cad/mug.png"},{"id":"cad-pumpkin","type":"project_item","title":"Pumpkin","description":"Used advanced features such as revolves and patterns to create a complex organic shape.","image":"/images/me10cad/pumpkin.png"},{"id":"cad-vase","type":"project_item","title":"Vase","description":"A vase I designed and printed for personal use, showcasing creativity and practical application of CAD skills.","image":"/images/me10cad/vase.png"}],"layout":{"lg":[{"w":12,"h":2,"x":0,"y":0,"i":"overview","moved":false,"static":false},{"w":6,"h":4,"x":0,"y":2,"i":"cad-lego-brick","moved":false,"static":false},{"w":6,"h":4,"x":6,"y":9,"i":"cad-mounting-bracket","moved":false,"static":false},{"w":6,"h":7,"x":6,"y":2,"i":"cad-citrus-press","moved":false,"static":false},{"w":6,"h":6,"x":0,"y":6,"i":"cad-coffee-mug","moved":false,"static":false},{"w":6,"h":6,"x":0,"y":12,"i":"cad-pumpkin","moved":false,"static":false},{"w":6,"h":6,"x":6,"y":13,"i":"cad-vase","moved":false,"static":false}],"md":[{"i":"hero_media","x":0,"y":0,"w":10,"h":5},{"i":"overview","x":0,"y":5,"w":10,"h":2},{"i":"cad-intro-text","x":0,"y":7,"w":10,"h":2},{"i":"cad-lego-brick","x":0,"y":9,"w":5,"h":4},{"i":"cad-mounting-bracket","x":5,"y":9,"w":5,"h":4},{"i":"cad-citrus-press","x":0,"y":13,"w":5,"h":4},{"i":"cad-coffee-mug","x":5,"y":13,"w":5,"h":4},{"i":"cad-pumpkin","x":0,"y":17,"w":5,"h":4},{"i":"cad-vase","x":5,"y":17,"w":5,"h":4}],"sm":[{"i":"hero_media","x":0,"y":0,"w":6,"h":4},{"i":"overview","x":0,"y":4,"w":6,"h":2},{"i":"cad-intro-text","x":0,"y":6,"w":6,"h":2},{"i":"cad-lego-brick","x":0,"y":8,"w":6,"h":4},{"i":"cad-mounting-bracket","x":0,"y":12,"w":6,"h":4},{"i":"cad-citrus-press","x":0,"y":16,"w":6,"h":4},{"i":"cad-coffee-mug","x":0,"y":20,"w":6,"h":4},{"i":"cad-pumpkin","x":0,"y":24,"w":6,"h":4},{"i":"cad-vase","x":0,"y":28,"w":6,"h":4}]}},{"id":"Actuaid","title":"Actuaid","quick_description":"Assistive device for rehabilitation ","display_order":1,"is_featured":true,"gif_url":"/actuaid.gif","hero_media":"/prbhero.png","images":["/images/actuaid.png"],"tags":["Robotics","Coding","Microcontroller","CAD"],"overview":{"title":"Overview","text":"ActuAid was designed to address sports-related injuries that affect the hand. ActuAid used 3D-printed fluidic actuators integrated into a wearable glove to support mobility and dexterity recovery. By combining soft robotics with simple electronic control, the project demonstrates how accessible, customizable devices can make rehabilitation more effective and affordable. It developed as the final project for ME193: Printable Robotics."},"development":{"title":"Development / Process","items":[{"type":"image","value":"/images/prbw1.jpg"},{"type":"text","value":"We began by researching wearable soft robotics and prototyping a bending actuator. Academic papers and prior work in soft robotic exoskeletons helped shape our design direction, confirming feasibility and showing how fluidic actuators could be adapted for hand rehabilitation in athletes."},{"type":"image","value":"/prbw3.gif"},{"type":"text","value":"Many print iterations were completed to refine the actuator’s design, focusing on airtightness, chamber spacing, and deflection. These iterations ensured the actuator could reliably inflate and produce consistent motion."},{"type":"image","value":"/images/prbw2.gif"},{"type":"text","value":"With a functional actuator established, we integrated the electronic components -pumps, valves, and an LCD interface- to control air pressure and responsiveness. The actuator was then combined with a glove prototype, and both the printed design and electronics were refined to ensure reliable motion for rehabilitation use."}]},"final_result":{"title":"Final Result","items":[{"type":"image","value":"/actuaid.gif"},{"type":"text","value":"Overall, I was able to:"},{"type":"list","value":["Design and fabricate a 3D-printed fluidic actuator through multiple iterations, achieving an airtight system capable of reliable inflation and deflection.","Integrate the actuator into a wearable glove to enable controlled finger movement.","Develop and test an electronic control system with pumps, valves, and an LCD interface."]}]},"reflection":{"title":"Reflection","text":"This project highlighted the versatility of 3D printing and the potential of soft robotics in rehabilitation. We learned the importance of patience and iteration, as multiple design cycles were required to achieve an airtight, functional actuator. These iterations showed how fluidic actuators can be refined to produce meaningful movement, and how combining hardware and software expands the possibilities for assistive technologies. Ultimately, ActuAid demonstrates that innovative, accessible solutions can be created to support medical rehabilitation."},"content":[],"layout":{"desktop":[{"i":"hero_media","x":0,"y":0,"w":12,"h":8},{"i":"overview","x":0,"y":8,"w":12,"h":4},{"i":"development","x":0,"y":12,"w":12,"h":8},{"i":"final_result","x":0,"y":20,"w":12,"h":8},{"i":"reflection","x":0,"y":28,"w":12,"h":4}],"mobile":[{"i":"hero_media","x":0,"y":0,"w":4,"h":3},{"i":"overview","x":0,"y":3,"w":4,"h":2},{"i":"development","x":0,"y":5,"w":4,"h":3},{"i":"final_result","x":0,"y":8,"w":4,"h":3},{"i":"reflection","x":0,"y":11,"w":4,"h":2}],"lg":[{"w":10,"h":5,"x":1,"y":0,"i":"hero_media","moved":false,"static":false},{"w":12,"h":2,"x":0,"y":5,"i":"overview","moved":false,"static":false},{"w":12,"h":11,"x":0,"y":7,"i":"development","moved":false,"static":false},{"w":12,"h":9,"x":0,"y":18,"i":"final_result","moved":false,"static":false},{"w":12,"h":2,"x":0,"y":27,"i":"reflection","moved":false,"static":false}]}},{"id":"Controlled_Car","title":"PID Controlled Car","quick_description":"PID-controlled car with web interface and multi-car network communication.","display_order":2,"is_featured":true,"gif_url":"/mamalona.gif","hero_media":"/mamalona.gif","images":["/images/mamalona.png"],"tags":["CAD","Coding","Microcontroller","Robotics","PCB Design"],"overview":{"title":"Overview","text":"The Low-Cost Robotic Arm was inspired by an earlier LEGO arm I built. In talking with Dr. Briana Bouchard, we reflected on how expensive the LEGO system was and how unintuitive its programming could be. That conversation sparked the idea of creating a more affordable and accessible alternative, and we teamed up to make it feasible. This project was conducted as research through the Louis Stokes Alliances for Minority Participation (LSAMP) program under Dr. Bouchard’s guidance. CLICK HERE to be redirected to the documentation I created to summarize the project."},"development":{"title":"Development / Process","items":[{"type":"image","value":"/images/desc.png"},{"type":"text","value":"Designing the Gripper was one of the most challenging parts of the project. Because it sits at the very end of the arm, the weight was a critical constraint. A smaller SG90 servo was chosen, which provided enough torque to handle small objects.\\n\\nSeveral concepts were tested before reaching the final version. Each option revealed new trade-offs and informed the next iteration. The process highlighted the constraints shape design choices. Small refinements ultimately made the difference between a fragile prototype and a dependable solution."},{"type":"image","value":"/ikdisp.gif"},{"type":"text","value":"A big part of the project was writing the control code for the arm. I implemented inverse kinematics using trigenometry to simplify IK. This allowed the arm be move to a specific Cartesian position. A simple WASD interface for direct control was also added. This was my first time combining mechanical design with real-time programming, which gave me a deeper understanding of how hardware and software work together."}]},"final_result":{"title":"Final Result","items":[{"type":"image","value":"/ikvid.gif"},{"type":"text","value":"Overall, I was able to:"},{"type":"list","value":["Build a fully functional 4-DOF robotic arm using low-cost, 3D-printed parts and off-the-shelf electronics.","Design a lightweight custom gripper that reliably handles small objects.","Implement key robotics concepts such as kinematics, control systems, and programming for under $30."]}]},"reflection":{"title":"Reflection","text":"This project taught me how constraints like weight, torque, and printability shape design choices. I learned the value of rapid iteration, designing for manufacturability, and staying persistent when early versions failed. It was also my first time leading a design project from concept to reality, learning new skills on the fly and turning an idea into a working system. Most importantly, it showed me how affordable tools can make robotics education more accessible and inspiring."},"content":[],"layout":{"desktop":[{"i":"hero_media","x":0,"y":0,"w":12,"h":8},{"i":"overview","x":0,"y":8,"w":12,"h":4},{"i":"development","x":0,"y":12,"w":12,"h":8},{"i":"final_result","x":0,"y":20,"w":12,"h":8},{"i":"reflection","x":0,"y":28,"w":12,"h":4}],"mobile":[{"i":"hero_media","x":0,"y":0,"w":4,"h":3},{"i":"overview","x":0,"y":3,"w":4,"h":2},{"i":"development","x":0,"y":5,"w":4,"h":3},{"i":"final_result","x":0,"y":8,"w":4,"h":3},{"i":"reflection","x":0,"y":11,"w":4,"h":2}],"lg":[{"w":10,"h":5,"x":1,"y":0,"i":"hero_media","moved":false,"static":false},{"w":12,"h":2,"x":0,"y":5,"i":"overview","moved":false,"static":false},{"w":12,"h":9,"x":0,"y":7,"i":"development","moved":false,"static":false},{"w":12,"h":8,"x":0,"y":16,"i":"final_result","moved":false,"static":false},{"w":12,"h":2,"x":0,"y":24,"i":"reflection","moved":false,"static":false}]}},{"id":"me10-soccerball","title":"Metal Casting Project: Pewter Soccer Ball","quick_description":"Designed and cast a pewter soccer ball trophy through multiple mold-making iterations.","display_order":14,"is_featured":false,"gif_url":"/casting.gif","hero_media":"/casting.gif","images":["/images/me10man/pewter.jpg"],"tags":["Manufacturing"],"overview":{"title":"Overview","text":"For our ME10 final project, my team and I set out to recreate the Ballon d’Or trophy as a pewter soccer ball. The project became an exploration of casting methods, iteration, and creative problem solving."},"development":{"title":"Development / Process","items":[{"type":"text","value":"We began by attempting to cast a half-sphere of the ball directly, but quickly learned that the plastic mold would melt under molten pewter. To overcome this, I suggested vacuum forming the ball to create a wax replica, which could then be packed in sand and replaced with metal during the pour."},{"type":"image","value":"/images/me10man/wax.jpeg","caption":"Wax mold experiment before transitioning to silicone"},{"type":"text","value":"The wax casting approach worked in theory but presented new issues with removing the wax cleanly and creating a hollow interior. After several rounds of testing, we switched to making a hard silicone base mold. This allowed us to pour pewter safely and achieve a consistent final shape."},{"type":"image","value":"/images/me10man/silicone.jpeg","caption":"Silicone mold for the final pewter casting"}]},"final_result":{"title":"Final Result","items":[{"type":"text","value":"The final product combined creativity with practical problem solving. This project taught me not only the technical aspects of casting, but also how to pivot and refine designs through hands-on experimentation."},{"type":"image","value":"/images/me10man/pewter.jpg","caption":"Final pewter casting mounted on CNC-routed wooden base"}]},"reflection":{"title":"Reflection","text":"This project taught me how unpredictable and iterative the casting process can be. Each failed attempt, from a melted mold to a collapsed wax form, pushed our team to rethink our approach and better understand how different materials behave. I learned how to adapt quickly when faced with real manufacturing constraints and to explore new fabrication methods like vacuum forming, lost wax casting, and plaster molding. Working through each challenge reinforced the importance of flexibility, teamwork, and creative problem solving in engineering. By the end, what began as a simple idea to replicate a trophy became a lesson in resilience, collaboration, and the craft of turning a concept into a tangible, polished piece."},"content":[],"layout":{"lg":[{"w":10,"h":5,"x":1,"y":2,"i":"hero_media","moved":false,"static":false},{"w":12,"h":2,"x":0,"y":0,"i":"overview","moved":false,"static":false},{"w":12,"h":14,"x":0,"y":7,"i":"development","moved":false,"static":false},{"w":7,"h":10,"x":0,"y":21,"i":"final_result","moved":false,"static":false},{"w":5,"h":5,"x":7,"y":21,"i":"reflection","moved":false,"static":false}],"md":[{"w":10,"h":5,"x":0,"y":0,"i":"hero_media"},{"w":10,"h":2,"x":0,"y":5,"i":"overview"},{"w":10,"h":9,"x":0,"y":7,"i":"development"},{"w":6,"h":8,"x":0,"y":16,"i":"final_result"},{"w":10,"h":2,"x":0,"y":24,"i":"reflection"}],"sm":[{"w":6,"h":4,"x":0,"y":0,"i":"hero_media"},{"w":6,"h":2,"x":0,"y":4,"i":"overview"},{"w":6,"h":9,"x":0,"y":6,"i":"development"},{"w":4,"h":8,"x":0,"y":15,"i":"final_result"},{"w":6,"h":2,"x":0,"y":23,"i":"reflection"}]}},{"id":"the-hand","title":"The Hand","quick_description":"A LEGO Hand that mirrors yours!. This link takes you to a Notion page documenting the project.","display_order":101,"is_featured":false,"hero_media":"/images/handlego.png","images":["/images/handlego.png"],"gif_url":"/handlego.gif","notion_url":"https://flax-haze-954.notion.site/The-Hand-4bc8bda364364681be665b87bdda50e6?source=copy_link","tags":["LEGO","Robotics","Coding"]},{"id":"me-35","title":"Robotics Portfolio (ME35)","quick_description":"A collection of my robotics projects from my ME35 class.","display_order":102,"is_featured":false,"hero_media":"/images/ME35.png","images":["/images/ME35.png"],"gif_url":"/me35.gif","notion_url":"https://flax-haze-954.notion.site/ME35-Portfolio-f40b04e4f3944280beca02ca9bbc8079?source=copy_link","tags":["Robotics","Coding","Microcontroller"]}]')},86535,31278,e=>{"use strict";var t=e.i(71645),i=e.i(8406),r=e.i(2488);e.s(["useProjects",0,()=>{let[e,a]=(0,t.useState)([]),[o,n]=(0,t.useState)(!0),[s,l]=(0,t.useState)(null),{toast:d}=(0,i.useToast)(),c=async()=>{try{n(!0),l(null);let e=r.default.map(e=>{let t=e.images&&e.images.length>0?e.images:[],i=0===t.length?e.content?.find(e=>"image"===e.type):void 0;return{...e,images:t.length>0?t:i?[i.value]:[]}});a(e||[])}catch(t){let e=t instanceof Error?t.message:"Failed to fetch projects";l(e),d({title:"Error",description:e,variant:"destructive"})}finally{n(!1)}};return(0,t.useEffect)(()=>{c()},[]),{projects:e,loading:o,error:s,refetch:c,getAllTags:()=>{let t=new Set;return e.forEach(e=>{e.tags&&e.tags.forEach(e=>t.add(e))}),Array.from(t).sort()},getFilteredProjects:t=>{let i=e;return t.length>0&&(i=e.filter(e=>t.every(t=>e.tags.includes(t)))),i.sort((e,t)=>e.is_featured&&!t.is_featured?-1:!e.is_featured&&t.is_featured?1:e.display_order-t.display_order)},getFeaturedProjects:()=>e.filter(e=>e.is_featured)}}],86535);let a=(0,e.i(75254).default)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);e.s(["Loader2",0,a],31278)},88143,(e,t,i)=>{"use strict";function r({widthInt:e,heightInt:t,blurWidth:i,blurHeight:a,blurDataURL:o,objectFit:n}){let s=i?40*i:e,l=a?40*a:t,d=s&&l?`viewBox='0 0 ${s} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},87690,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={VALID_LOADERS:function(){return o},imageConfigDefault:function(){return n}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let o=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},8927,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(33525);let r=e.r(43369),a=e.r(88143),o=e.r(87690),n=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:i=!1,priority:c=!1,preload:p=!1,loading:u,className:g,quality:h,width:m,height:f,fill:x=!1,style:b,overrideSrc:v,onLoad:y,onLoadingComplete:w,placeholder:_="empty",blurDataURL:j,fetchPriority:k,decoding:C="async",layout:E,objectFit:P,objectPosition:N,lazyBoundary:S,lazyRoot:O,...L},M){var A;let R,I,D,{imgConf:T,showAltText:z,blurComplete:B,defaultLoader:G}=M,F=T||o.imageConfigDefault;if("allSizes"in F)R=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t),i=F.qualities?.sort((e,t)=>e-t);R={...F,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===G)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let $=L.loader||G;delete L.loader,delete L.srcSet;let W="__next_img_default"in $;if(W){if("custom"===R.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=$;$=t=>{let{config:i,...r}=t;return e(r)}}if(E){"fill"===E&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(b={...b,...e});let i={responsive:"100vw",fill:"100vw"}[E];i&&!t&&(t=i)}let q="",U=l(m),H=l(f);if((A=e)&&"object"==typeof A&&(s(A)||void 0!==A.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(I=t.blurWidth,D=t.blurHeight,j=j||t.blurDataURL,q=t.src,!x)if(U||H){if(U&&!H){let e=U/t.width;H=Math.round(t.height*e)}else if(!U&&H){let e=H/t.height;U=Math.round(t.width*e)}}else U=t.width,H=t.height}let K=!c&&!p&&("lazy"===u||void 0===u);(!(e="string"==typeof e?e:q)||e.startsWith("data:")||e.startsWith("blob:"))&&(i=!0,K=!1),R.unoptimized&&(i=!0),W&&!R.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(i=!0);let X=l(h),V=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:N}:{},z?{}:{color:"transparent"},b),J=B||"empty"===_?null:"blur"===_?`url("data:image/svg+xml;charset=utf-8,${(0,a.getImageBlurSvg)({widthInt:U,heightInt:H,blurWidth:I,blurHeight:D,blurDataURL:j||"",objectFit:V.objectFit})}")`:`url("${_}")`,Y=n.includes(V.objectFit)?"fill"===V.objectFit?"100% 100%":"cover":V.objectFit,Q=J?{backgroundSize:Y,backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},Z=function({config:e,src:t,unoptimized:i,width:a,quality:o,sizes:n,loader:s}){if(i){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,r.getDeploymentId)();if(e){let i=t.indexOf("?");if(-1!==i){let r=new URLSearchParams(t.slice(i+1));r.get("dpl")||(r.append("dpl",e),t=t.slice(0,i)+"?"+r.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:d}=function({deviceSizes:e,allSizes:t},i,r){if(r){let i=/(^|\s)(1?\d?\d)vw/g,a=[];for(let e;e=i.exec(r);)a.push(parseInt(e[2]));if(a.length){let i=.01*Math.min(...a);return{widths:t.filter(t=>t>=e[0]*i),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof i?{widths:e,kind:"w"}:{widths:[...new Set([i,2*i].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,a,n),c=l.length-1;return{sizes:n||"w"!==d?n:"100vw",srcSet:l.map((i,r)=>`${s({config:e,src:t,quality:o,width:i})} ${"w"===d?i:r+1}${d}`).join(", "),src:s({config:e,src:t,quality:o,width:l[c]})}}({config:R,src:e,unoptimized:i,width:U,quality:X,sizes:t,loader:$}),ee=K?"lazy":u;return{props:{...L,loading:ee,fetchPriority:k,width:U,height:H,decoding:C,className:g,style:{...V,...Q},sizes:Z.sizes,srcSet:Z.srcSet,src:v||Z.src},meta:{unoptimized:i,preload:p||c,placeholder:_,fill:x}}}},98879,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return s}});let r=e.r(71645),a="u"<typeof window,o=a?()=>{}:r.useLayoutEffect,n=a?()=>{}:r.useEffect;function s(e){let{headManager:t,reduceComponentsToState:i}=e;function s(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(i(e))}}return a&&(t?.mountedInstances?.add(e.children),s()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),n(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return m},defaultHead:function(){return p}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let o=e.r(55682),n=e.r(90809),s=e.r(43476),l=n._(e.r(71645)),d=o._(e.r(98879)),c=e.r(42732);function p(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let g=["name","httpEquiv","charSet","itemProp"];function h(e){let t,i,r,a;return e.reduce(u,[]).reverse().concat(p().reverse()).filter((t=new Set,i=new Set,r=new Set,a={},e=>{let o=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;let i=e.key.slice(e.key.indexOf("$")+1);t.has(i)?o=!1:t.add(i)}switch(e.type){case"title":case"base":i.has(e.type)?o=!1:i.add(e.type);break;case"meta":for(let t=0,i=g.length;t<i;t++){let i=g[t];if(e.props.hasOwnProperty(i))if("charSet"===i)r.has(i)?o=!1:r.add(i);else{let t=e.props[i],r=a[i]||new Set;("name"!==i||!n)&&r.has(t)?o=!1:(r.add(t),a[i]=r)}}}return o})).reverse().map((e,t)=>{let i=e.key||t;return l.default.cloneElement(e,{key:i})})}let m=function({children:e}){let t=(0,l.useContext)(c.HeadManagerContext);return(0,s.jsx)(d.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},18556,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=e.r(55682)._(e.r(71645)),a=e.r(87690),o=r.default.createContext(a.imageConfigDefault)},65856,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"RouterContext",{enumerable:!0,get:function(){return r}});let r=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,i)=>{"use strict";function r(e,t){let i=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,t.qualities[0]):i}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"findClosestQuality",{enumerable:!0,get:function(){return r}})},1948,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return n}});let r=e.r(70965),a=e.r(43369);function o({config:e,src:t,width:i,quality:n}){let s=(0,a.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let i=new URLSearchParams(t.slice(e+1)),r=i.get("dpl");if(r){s=r,i.delete("dpl");let a=i.toString();t=t.slice(0,e)+(a?"?"+a:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let l=(0,r.findClosestQuality)(n,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${l}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}o.__next_img_default=!0;let n=o},5500,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"Image",{enumerable:!0,get:function(){return y}});let r=e.r(55682),a=e.r(90809),o=e.r(43476),n=a._(e.r(71645)),s=r._(e.r(74080)),l=r._(e.r(25633)),d=e.r(8927),c=e.r(87690),p=e.r(18556);e.r(33525);let u=e.r(65856),g=r._(e.r(1948)),h=e.r(18581),m={deviceSizes:[640,828,1080,1280,1920],imageSizes:[16,32,64,128,256],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e,t,i,r,a,o,n){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),i?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,a=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}r?.current&&r.current(e)}}))}function x(e){return n.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,n.forwardRef)(({src:e,srcSet:t,sizes:i,height:r,width:a,decoding:s,className:l,style:d,fetchPriority:c,placeholder:p,loading:u,unoptimized:g,fill:m,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:y,setShowAltText:w,sizesInput:_,onLoad:j,onError:k,...C},E)=>{let P=(0,n.useCallback)(e=>{e&&(k&&(e.src=e.src),e.complete&&f(e,p,b,v,y,g,_))},[e,p,b,v,y,k,g,_]),N=(0,h.useMergedRef)(E,P);return(0,o.jsx)("img",{...C,...x(c),loading:u,width:a,height:r,decoding:s,"data-nimg":m?"fill":"1",className:l,style:d,sizes:i,srcSet:t,src:e,ref:N,onLoad:e=>{f(e.currentTarget,p,b,v,y,g,_)},onError:e=>{w(!0),"empty"!==p&&y(!0),k&&k(e)}})});function v({isAppRouter:e,imgAttributes:t}){let i={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...x(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,i),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...i},"__nimg-"+t.src+t.srcSet+t.sizes)})}let y=(0,n.forwardRef)((e,t)=>{let i=(0,n.useContext)(u.RouterContext),r=(0,n.useContext)(p.ImageConfigContext),a=(0,n.useMemo)(()=>{let e=m||r||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t),a=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i,qualities:a,localPatterns:"u"<typeof window?r?.localPatterns:e.localPatterns}},[r]),{onLoad:s,onLoadingComplete:l}=e,h=(0,n.useRef)(s);(0,n.useEffect)(()=>{h.current=s},[s]);let f=(0,n.useRef)(l);(0,n.useEffect)(()=>{f.current=l},[l]);let[x,y]=(0,n.useState)(!1),[w,_]=(0,n.useState)(!1),{props:j,meta:k}=(0,d.getImgProps)(e,{defaultLoader:g.default,imgConf:a,blurComplete:x,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...j,unoptimized:k.unoptimized,placeholder:k.placeholder,fill:k.fill,onLoadRef:h,onLoadingCompleteRef:f,setBlurComplete:y,setShowAltText:_,sizesInput:e.sizes,ref:t}),k.preload?(0,o.jsx)(v,{isAppRouter:!i,imgAttributes:j}):null]})});("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},94909,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return c},getImageProps:function(){return d}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let o=e.r(55682),n=e.r(8927),s=e.r(5500),l=o._(e.r(1948));function d(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,828,1080,1280,1920],imageSizes:[16,32,64,128,256],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let c=s.Image},57688,(e,t,i)=>{t.exports=e.r(94909)},74855,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(18566),a=e.i(57688);e.s(["default",0,({project:e,index:o=0,isStatic:n=!1})=>{let[s,l]=(0,i.useState)(!1),[d,c]=(0,i.useState)(0),p=(0,r.useRouter)(),u=(0,i.useRef)(null),g=e.images||[],h=e.images&&e.images.length>0||e.gif_url;return(0,t.jsxs)("article",{ref:u,onClick:()=>{n||p.push(`/projects/${e.id}`)},onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),className:"pg-card group",style:{"--card-index":o},children:[(0,t.jsx)("div",{className:"pg-card__image-wrap",children:h?(0,t.jsxs)(t.Fragment,{children:[g.length>0?(0,t.jsxs)("div",{className:"relative w-full h-full",children:[g.map((i,r)=>i.toLowerCase().endsWith(".mov")||i.toLowerCase().endsWith(".mp4")?(0,t.jsx)("video",{src:i,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:`pg-card__img absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${r===d?"opacity-100 z-10":"opacity-0 pointer-events-none -z-10"}`},i):(0,t.jsx)(a.default,{src:i,alt:`${e.title} image ${r+1}`,fill:!0,sizes:"(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw",unoptimized:i.toLowerCase().endsWith(".gif"),className:`pg-card__img transition-opacity duration-500 ${r===d?"opacity-100":"opacity-0 pointer-events-none"}`},i)),n&&g.length>1&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{onClick:e=>{e.stopPropagation(),c(e=>(e-1+g.length)%g.length)},className:"absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-background/60 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background","aria-label":"Previous image",children:(0,t.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"m15 18-6-6 6-6"})})}),(0,t.jsx)("button",{onClick:e=>{e.stopPropagation(),c(e=>(e+1)%g.length)},className:"absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-background/60 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background","aria-label":"Next image",children:(0,t.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"m9 18 6-6-6-6"})})}),(0,t.jsx)("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1",children:g.map((e,i)=>(0,t.jsx)("div",{className:`w-1.5 h-1.5 rounded-full transition-colors ${i===d?"bg-primary":"bg-muted-foreground/30"}`},i))})]})]}):e.gif_url?(0,t.jsx)("img",{src:e.gif_url,alt:e.title,className:`pg-card__img pg-card__img--static ${s&&e.gif_url?"pg-card__img--hidden":""}`}):null,!n&&e.gif_url&&(0,t.jsx)("img",{src:e.gif_url,alt:`${e.title} in action`,className:`pg-card__img pg-card__img--gif ${s?"pg-card__img--visible":""}`})]}):(0,t.jsx)("div",{className:"pg-card__placeholder",children:(0,t.jsx)("span",{children:e.title.charAt(0)})})}),(0,t.jsxs)("div",{className:"pg-card__body",children:[(0,t.jsx)("h3",{className:"pg-card__title",children:e.title}),e.quick_description&&(0,t.jsx)("p",{className:"pg-card__desc",children:e.quick_description}),e.notion_url&&(0,t.jsx)("div",{className:"mt-3 flex",onClick:e=>e.stopPropagation(),children:(0,t.jsxs)("a",{href:e.notion_url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1",children:["Documentation",(0,t.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,t.jsx)("polyline",{points:"15 3 21 3 21 9"}),(0,t.jsx)("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})}),!n&&(0,t.jsx)("div",{className:"pg-card__cta","aria-hidden":"true",children:(0,t.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,t.jsx)("polyline",{points:"12 5 19 12 12 19"})]})})]}),(0,t.jsx)("style",{children:`
        .pg-card {
          position: relative;
          cursor: ${n?"default":"pointer"};
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
      `})]})}])},52683,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(22016),a=e.i(18566),o=e.i(88589),n=e.i(13642),s=e.i(74855),l=e.i(86535),d=e.i(31278),c=e.i(63059);let p=[{id:"tufts-ms",org:"Tufts University",role:"M.S. in Mechanical Engineering",dates:"Committed for Fall 2026",location:"Medford, MA",logo:"/logos/tufts.png",type:"education",accentColor:"#3182CE",bullets:["Committed to pursue a Master's degree, focusing on advanced coursework in robotics, manufacturing, and hardware-software integration."]},{id:"tufts-bs",org:"Tufts University",role:"B.S. in Mechanical Engineering",dates:"Sep 2022 – May 2026",location:"Medford, MA",logo:"/logos/tufts.png",type:"education",accentColor:"#41B6E6",bullets:["Minor in Human Factors Engineering.","Actively involved in the NOLOP Makerspace and CEEO while building foundational engineering skills."]},{id:"hku",org:"University of Hong Kong (HKU)",role:"Study Abroad",dates:"Spring 2025",location:"Hong Kong",logo:"/logos/hku.png",type:"education",accentColor:"#00A3A1",bullets:["Studied Systems and Controls through an international lens, adapting to new academic frameworks and collaborating with a diverse, global cohort.","Expanded multicultural engineering perspectives during an intensive semester abroad."]},{id:"pavia",org:"University of Pavia",role:"Study Abroad",dates:"Summer 2024",location:"Pavia, Italy",logo:"/logos/pavia.svg",type:"education",accentColor:"#800000",bullets:["Completed accelerated coursework in Data Structures and Introductory Italian.","Managed remote curriculum development for BxCoding simultaneously while adapting to a new cultural and academic environment."]},{id:"gillette",org:"Gillette (Procter & Gamble)",role:"Process Engineering Intern",dates:"May 2025 – Aug 2025",location:"Andover, MA",logo:"/logos/gillette-logo.png",type:"internship",accentColor:"#0066CC",bullets:["Optimized operations with automation and standardization, lowering scrap/error rates, saving ~$700K annually.","Elevated department output by 33% through performance optimization and data-driven machine recalibration.","Implemented preventative failure solutions while ensuring comprehensive documentation for smooth project transition."]},{id:"bxcoding",org:"BxCoding",role:"Curriculum Developer & Instructor",dates:"Mar 2024 – Sep 2024",location:"Remote",logo:"/logos/bxcoding.png",type:"internship",accentColor:"#2563EB",bullets:[(0,t.jsxs)(t.Fragment,{children:["Developed comprehensive STEM curriculum for a summer camp at "," ",(0,t.jsx)("a",{href:"https://bxcoding.org/",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"#2563EB",fontWeight:500},children:"BxCoding"}),", teaching Arduino, C++, and sensor integration to ~50 students."]}),"Managed remote program execution while studying abroad in Italy, ensuring high-quality technical education and student engagement."]},{id:"ceeo",org:"Center for Engineering Education & Outreach, Tufts",role:"LEGO Education Product Testing Intern",dates:"Jun 2023 – Aug 2023",location:"Medford, MA",logo:"/logos/ceeologo.png",type:"internship",accentColor:"#E3000B",bullets:["Built a humanoid robot with integrated Bluetooth (BLE) code, enabling communication across 7 micro-controllers.","Integrated AI/ML perception (MediaPipe) with robotic control for multi-motor system calibration.","Constructed a 6-DOF robot arm with 12 motors and 2 hubs, controlled with BLE and LEGO software."]},{id:"idea-lab",org:"IDEA Lab, Tufts University",role:"R&D Intern",dates:"Oct 2024 – Present",location:"Medford, MA",logo:"/logos/idealab.jpeg",type:"research",accentColor:"#4F46E5",bullets:["Designed a biocompatible wrap with ultrasonic sensors, converting music into physical touch for rehabilitation.","Applied signal processing for hardware-software integration, enabling real-time feedback in prototype systems.","Collaborated in daily 2-hour research meetings with a team of 7, driving product development and timely execution."]},{id:"bouchard",org:"Bouchard Research Lab, Tufts University",role:"R&D Intern → R&D Researcher",dates:"Sep 2023 – Aug 2024",location:"Medford, MA",type:"research",accentColor:"#7C3AED",bullets:["Published open-source documentation to GitHub including bill of materials, design process, and assembly instructions.","Developed simple-to-understand robotic control algorithms with system-level integration of inverse kinematics in Python.","Presented research at 3 conferences to 120 attendees, securing interest from 2 schools and engaging 60+ K-12 students.","Designed a low-cost robotic arm for under $60 to make engineering education accessible to low-income students.","Decreased manufacturing time by 58% by consolidating fabrication into a single component."]},{id:"nolop",org:"NOLOP Makerspace, Tufts University",role:"Assistant Fabrication Engineer",dates:"Jan 2024 – Present",location:"Medford, MA",logo:"/logos/noloplogo.png",type:"campus",accentColor:"#059669",bullets:["Mentored 15 students per week by leading 20+ engineering workshops, equipping 300+ students with manufacturing and design skills.","Diagnosed and resolved fabrication equipment, optimizing machine shop practices to prevent malfunctions and ensure safety."]},{id:"ceeo-olf",org:"Center for Engineering Education & Outreach (CEEO)",role:"Online Learning Fellow & Educator",dates:"Sep 2023 – Dec 2024",location:"Somerville, MA & Remote",logo:"/logos/ceeologo.png",type:"campus",accentColor:"#E3000B",bullets:[(0,t.jsxs)(t.Fragment,{children:["Taught foundational robotics and engineering concepts to Navajo Nation students remotely using LEGO SPIKE Prime hardware as an "," ",(0,t.jsx)("a",{href:"https://sites.tufts.edu/ceeoolf/",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"#E3000B",fontWeight:500},children:"Online Learning Fellow"}),"."]}),(0,t.jsxs)(t.Fragment,{children:["Developed weekly lesson plans and led in-person STEM activities for PK-8 students at the "," ",(0,t.jsx)("a",{href:"https://somerville.k12.ma.us/schools/winter-hill-community-innovation-school-pk-8",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"#E3000B",fontWeight:500},children:"Winter Hill Community Innovation School"}),"."]})]},{id:"white-house",org:"White House Easter Egg Hunt, Biden Administration",role:"Project Lead",dates:"Mar 2023 – Apr 2023",location:"Washington, DC",logo:"/logos/whitehouse.png",type:"leadership",accentColor:"#B45309",bullets:[(0,t.jsxs)(t.Fragment,{children:["Selected from 1,700 students to represent LEGO Education at the "," ",(0,t.jsx)("a",{href:"https://sites.tufts.edu/ceeoblog/2023/06/27/joyful-learning-at-the-white-house-easter-egg-roll/",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"#B45309",fontWeight:500},children:"White House Easter Egg Hunt"}),", designing and showcasing custom LEGO robots for hands-on activities with over 35,000 attendees."]}),"Engineered 20 custom LEGO robots equipped with sensors to activate a motor system, educating over 20,000 students.",(0,t.jsxs)(t.Fragment,{children:["Published open-source "," ",(0,t.jsx)("a",{href:"https://www.ceeoinnovations.org/?project=eggdecorator",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"#B45309",fontWeight:500},children:"building instructions"})," "," for the custom egg-decorating robots."]})]},{id:"mexican-culture-club",org:"Mexican Culture Club",role:"Founder & President",dates:"Jan 2023 – Present",location:"Medford, MA",logo:"/logos/mcc.jpg",type:"leadership",accentColor:"#DC2626",bullets:["Established a club to educate 140+ students in the Greater Boston area about Mexican traditions and culture.","Initiated outreach with the Mexican consulate to foster communication across 13+ New England schools."]}],u={education:{label:"Education",description:"Degrees and coursework."},internship:{label:"Internships",description:"Industry roles."},research:{label:"Research",description:"Lab and independent projects."},campus:{label:"Campus Roles",description:"Teaching, making, and community at Tufts."},leadership:{label:"Leadership",description:"Organizations I started or led."}},g=["education","internship","research","campus","leadership"];function h({entry:e}){let[r,a]=(0,i.useState)(!1);return(0,t.jsxs)("div",{className:"tl-entry",children:[(0,t.jsx)("div",{className:"tl-dot",style:{background:e.accentColor}}),(0,t.jsxs)("div",{className:"tl-card",children:[(0,t.jsxs)("button",{className:"tl-card__header",onClick:()=>a(e=>!e),"aria-expanded":r,children:[(0,t.jsxs)("div",{className:"tl-card__left",children:[(0,t.jsx)("div",{className:"tl-card__monogram",style:{background:e.accentColor+"18",color:e.accentColor,borderColor:e.accentColor+"30"},children:e.logo?(0,t.jsx)("img",{src:e.logo,alt:e.org,className:"tl-card__logo-img"}):(0,t.jsx)("span",{children:e.org.charAt(0)})}),(0,t.jsxs)("div",{className:"tl-card__meta",children:[(0,t.jsx)("p",{className:"tl-card__org",children:e.org}),(0,t.jsx)("p",{className:"tl-card__role",children:e.role}),(0,t.jsxs)("p",{className:"tl-card__dates",children:[e.dates," · ",e.location]})]})]}),(0,t.jsx)("svg",{className:"tl-card__chevron",style:{transform:r?"rotate(180deg)":"rotate(0deg)"},width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:(0,t.jsx)("path",{d:"M4.5 6.75L9 11.25L13.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,t.jsx)("div",{className:"tl-card__body",style:{maxHeight:r?"600px":"0",opacity:+!!r,overflow:"hidden",transition:"max-height 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease"},children:(0,t.jsxs)("div",{className:"tl-card__body-inner",children:[(0,t.jsx)("ul",{className:"tl-card__bullets",children:e.bullets.map((i,r)=>(0,t.jsxs)("li",{className:"tl-card__bullet",children:[(0,t.jsx)("span",{className:"tl-card__bullet-dot",style:{background:e.accentColor}}),(0,t.jsx)("span",{children:i})]},r))}),e.images&&e.images.length>0&&(0,t.jsx)("div",{className:"tl-card__images",children:e.images.map((e,i)=>(0,t.jsx)("img",{src:e,alt:"",className:"tl-card__image"},i))})]})})]})]})}function m(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"exp-page",children:[(0,t.jsx)("header",{className:"exp-header",children:(0,t.jsxs)("div",{className:"exp-header__inner",children:[(0,t.jsx)("p",{className:"exp-header__eyebrow",children:"Background"}),(0,t.jsx)("h2",{className:"exp-header__title",children:"Experience"}),(0,t.jsx)("p",{className:"exp-header__sub",children:"Internships, research, and roles that shaped how I build - across robotics, manufacturing, and education."})]})}),(0,t.jsx)("main",{className:"exp-main",children:(0,t.jsx)("div",{className:"exp-main__inner",children:g.map(e=>{let i=p.filter(t=>t.type===e),r=u[e];return(0,t.jsxs)("section",{className:"exp-section",children:[(0,t.jsxs)("div",{className:"exp-section__label",children:[(0,t.jsx)("h2",{className:"exp-section__heading",children:r.label}),(0,t.jsx)("p",{className:"exp-section__desc",children:r.description})]}),(0,t.jsxs)("div",{className:"exp-timeline",children:[(0,t.jsx)("div",{className:"exp-timeline__line"}),i.map((e,i)=>(0,t.jsx)(h,{entry:e},e.id))]})]},e)})})})]})})}var f=e.i(57688);let x=(0,e.i(75254).default)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);function b(){let{projects:e,loading:r}=(0,l.useProjects)(),[a,o]=(0,i.useState)(0),[n,s]=(0,i.useState)(!1),[d,p]=(0,i.useState)(null),u=e.filter(e=>e.is_featured).sort((e,t)=>e.display_order-t.display_order),g=(0,i.useCallback)(()=>{o(e=>e===u.length-1?0:e+1)},[u.length]),h=(0,i.useCallback)(()=>{o(e=>0===e?u.length-1:e-1)},[u.length]);return r?(0,t.jsx)("div",{className:"w-full flex-1 min-h-[350px] rounded-xl border border-border bg-card animate-pulse flex items-center justify-center",children:(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:"Loading highlights..."})}):0===u.length?null:(0,t.jsxs)("div",{className:"group relative w-full flex-1 min-h-[350px] rounded-xl overflow-hidden border border-border",style:{background:"hsl(var(--card))"},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onTouchStart:e=>{p(e.targetTouches[0].clientX)},onTouchEnd:e=>{if(null===d)return;let t=d-e.changedTouches[0].clientX;t>50&&g(),t<-50&&h(),p(null)},children:[u.map((e,i)=>(0,t.jsxs)("div",{className:`absolute inset-0 transition-opacity duration-500 ${i===a?"opacity-100 z-10":"opacity-0 z-0 pointer-events-none"}`,children:[e.gif_url?(0,t.jsx)("img",{src:e.gif_url,alt:e.title,className:"w-full h-full object-contain",loading:i===a?"eager":"lazy"}):(0,t.jsx)(f.default,{src:e.images?.[0]||"/placeholder.png",alt:e.title,fill:!0,sizes:"(max-width: 768px) 100vw, 50vw",className:"object-contain",priority:i===a}),(0,t.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 p-6 pointer-events-none",style:{background:"linear-gradient(to top, hsl(var(--card)) 0%, transparent 100%)"},children:[(0,t.jsx)("p",{className:"text-[0.65rem] uppercase tracking-widest font-bold mb-1 opacity-70",children:e.tags[0]||"Featured"}),(0,t.jsx)("p",{className:"text-base font-bold",children:e.title})]})]},e.id)),(0,t.jsx)("button",{onClick:h,className:"absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-background/40 hover:bg-background/80 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center","aria-label":"Previous highlight",children:(0,t.jsx)(x,{className:"w-5 h-5"})}),(0,t.jsx)("button",{onClick:g,className:"absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-background/40 hover:bg-background/80 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center","aria-label":"Next highlight",children:(0,t.jsx)(c.ChevronRight,{className:"w-5 h-5"})}),(0,t.jsx)("div",{className:"absolute bottom-6 right-6 z-30 flex gap-1.5",children:u.map((e,i)=>(0,t.jsx)("button",{onClick:()=>o(i),className:`h-1.5 rounded-full transition-all duration-200 ${i===a?"w-6 bg-foreground":"w-1.5 bg-foreground/20"}`,"aria-label":`Go to slide ${i+1}`},i))})]})}function v(){let{projects:e,loading:p,error:u}=(0,l.useProjects)(),g=(0,a.useSearchParams)(),h=(0,i.useRef)(null);(0,i.useEffect)(()=>{"projects"===g.get("scrollTo")&&h.current&&h.current.scrollIntoView({behavior:"smooth"})},[g]);let f=e.filter(e=>e.is_featured).sort((e,t)=>e.display_order-t.display_order);return p?(0,t.jsx)("div",{className:"min-h-screen flex items-center justify-center",children:(0,t.jsx)(d.Loader2,{className:"w-5 h-5 animate-spin text-muted-foreground"})}):u?(0,t.jsx)("div",{className:"min-h-screen flex items-center justify-center px-6",children:(0,t.jsxs)("p",{className:"text-sm text-muted-foreground",children:["Could not load projects - ",u]})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"pg-home",children:[(0,t.jsx)(o.default,{}),(0,t.jsx)("section",{className:"pg-hero",children:(0,t.jsxs)("div",{className:"pg-hero__inner",children:[(0,t.jsxs)("div",{className:"pg-hero__left",children:[(0,t.jsx)(r.default,{href:"/personal-about",className:"pg-hero__photo-link","aria-label":"About Paul Galvan",children:(0,t.jsx)("div",{className:"pg-hero__photo-wrap",children:(0,t.jsx)("img",{src:"/Headshot_Paul_Galvan.jpeg",alt:"Paul Galvan",className:"pg-hero__photo"})})}),(0,t.jsxs)("div",{className:"pg-hero__text",children:[(0,t.jsx)("p",{className:"pg-hero__eyebrow",children:"Mechanical Engineering · Robotics & Hardware · Tufts '26"}),(0,t.jsxs)("h1",{className:"pg-hero__name",children:["Paul",(0,t.jsx)("br",{}),"Galvan"]}),(0,t.jsx)("p",{className:"pg-hero__bio",children:"ME senior at Tufts building at the intersection of robotics, manufacturing, and human-centered design. Previously at P&G Gillette (saved ~$700K/yr), published robotics research, and learned engineering internationally. Seeking full-time hardware & robotics roles starting Summer 2026."}),(0,t.jsxs)("div",{className:"pg-hero__availability",children:[(0,t.jsx)("span",{className:"pg-hero__avail-dot","aria-hidden":"true"}),"Available · Full-time from Summer 2026"]}),(0,t.jsxs)("div",{className:"pg-hero__actions",children:[(0,t.jsx)("button",{id:"hero-cta-see-work",className:"pg-hero__btn pg-hero__btn--primary",onClick:()=>h.current?.scrollIntoView({behavior:"smooth"}),children:"See my work ↓"}),(0,t.jsx)(r.default,{href:"/personal-about",className:"pg-hero__btn pg-hero__btn--outline",children:"About me"})]})]})]}),(0,t.jsx)("div",{className:"pg-hero__right",children:(0,t.jsx)(b,{})})]})}),(0,t.jsx)("section",{ref:h,id:"projects",className:"pg-projects pt-12",children:(0,t.jsxs)("div",{className:"pg-projects__inner",children:[(0,t.jsxs)("div",{className:"pg-projects__header",children:[(0,t.jsx)("h2",{className:"pg-projects__heading",children:"Featured Work"}),(0,t.jsxs)(r.default,{href:"/projects",className:"text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-1.5",children:["Full Archive",(0,t.jsx)(c.ChevronRight,{className:"w-3 h-3 group-hover:translate-x-0.5 transition-transform"})]})]}),0===f.length?(0,t.jsx)("div",{className:"pg-projects__empty",children:(0,t.jsx)("p",{children:"No featured projects found."})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"pg-grid",children:f.map((e,i)=>(0,t.jsx)(s.default,{project:e,index:i},e.id))}),(0,t.jsx)("div",{className:"mt-20 text-center",children:(0,t.jsxs)(r.default,{href:"/projects",className:"inline-flex items-center gap-2 px-8 py-4 rounded-md bg-muted/50 hover:bg-muted transition-colors text-sm font-semibold",children:["View All Projects",(0,t.jsx)(c.ChevronRight,{className:"w-4 h-4"})]})})]})]})}),(0,t.jsx)(m,{}),(0,t.jsx)("section",{className:"pg-contact",children:(0,t.jsxs)("div",{className:"pg-contact__inner",children:[(0,t.jsx)("p",{className:"pg-contact__label",children:"Contact"}),(0,t.jsx)("h2",{className:"pg-contact__heading",children:"Looking for hardware & robotics roles starting Summer 2026"}),(0,t.jsxs)("div",{className:"pg-contact__actions",children:[(0,t.jsx)("a",{id:"contact-email-cta",href:"mailto:paul.galvan@tufts.edu",className:"pg-hero__btn pg-hero__btn--primary",children:"Email me"}),(0,t.jsx)("a",{href:"https://www.linkedin.com/in/paul-galvan/",target:"_blank",rel:"noopener noreferrer",className:"pg-hero__btn pg-hero__btn--outline",children:"LinkedIn"})]})]})}),(0,t.jsx)(n.default,{})]}),(0,t.jsx)("style",{children:`
        /* ── Page shell ── */
        .exp-page {
          min-height: 100vh;
          background: hsl(var(--background));
        }
        /* ── Header ── */
        .exp-header {
          padding: 120px 24px 64px;
          border-bottom: 1px solid hsl(var(--border));
        }
        .exp-header__inner {
          max-width: 760px;
          margin: 0 auto;
        }
        .exp-header__eyebrow {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin: 0 0 16px;
        }
        .exp-header__title {
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1;
          color: hsl(var(--foreground));
          margin: 0 0 20px;
        }
        .exp-header__sub {
          font-size: 1.05rem;
          line-height: 1.7;
          color: hsl(var(--muted-foreground));
          max-width: 540px;
          margin: 0;
        }
        /* ── Main ── */
        .exp-main {
          padding: 80px 24px 120px;
        }
        .exp-main__inner {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 64px;
        }
        /* ── Section ── */
        .exp-section__label {
          margin-bottom: 24px;
        }
        .exp-section__heading {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin: 0 0 6px;
        }
        .exp-section__desc {
          font-size: 0.875rem;
          color: hsl(var(--muted-foreground) / 0.7);
          margin: 0;
          font-style: italic;
        }
        /* ── Timeline track ── */
        .exp-timeline {
          position: relative;
          padding-left: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .exp-timeline__line {
          position: absolute;
          left: 7px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: hsl(var(--border));
          border-radius: 2px;
        }
        /* ── Timeline entry ── */
        .tl-entry {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 0;
        }
        /* Dot */
        .tl-dot {
          position: absolute;
          left: -28px;
          top: 20px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2.5px solid hsl(var(--background));
          box-shadow: 0 0 0 2px hsl(var(--border));
          flex-shrink: 0;
          z-index: 1;
        }
        .tl-card {
          width: 100%;
          border: 1px solid hsl(var(--border) / 0.3);
          border-radius: 4px;
          background: hsl(var(--card));
          overflow: hidden;
          transition: border-color 0.2s ease, background-color 0.2s ease;
        }
        .tl-card:hover {
          border-color: hsl(var(--border) / 0.8);
          background: hsl(var(--muted) / 0.05);
        }
        .tl-card__header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 22px;
          gap: 16px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .tl-card__left {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 0;
        }
        .tl-card__monogram {
          width: 40px;
          height: 40px;
          border-radius: 4px;
          border: 1px solid hsl(var(--border) / 0.5);
          background: hsl(var(--muted) / 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
        }
        .tl-card__logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: grayscale(1);
          opacity: 0.8;
          padding: 4px;
          transition: filter 0.2s, opacity 0.2s;
        }
        .tl-card:hover .tl-card__logo-img {
          filter: grayscale(0);
          opacity: 1;
        }
        .tl-card__meta {
          min-width: 0;
        }
        .tl-card__org {
          font-size: 0.95rem;
          font-weight: 600;
          color: hsl(var(--foreground));
          margin: 0 0 2px;
          line-height: 1.3;
        }
        .tl-card__role {
          font-size: 0.85rem;
          color: hsl(var(--muted-foreground));
          margin: 0 0 3px;
        }
        .tl-card__dates {
          font-size: 0.75rem;
          color: hsl(var(--muted-foreground) / 0.7);
          margin: 0;
          letter-spacing: 0.01em;
        }
        /* Chevron */
        .tl-card__chevron {
          color: hsl(var(--muted-foreground));
          flex-shrink: 0;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), color 0.2s ease;
        }
        .tl-card__header:hover .tl-card__chevron {
          color: hsl(var(--foreground));
        }
        /* Accordion body */
        .tl-card__body-inner {
          padding: 0 22px 22px;
          border-top: 1px solid hsl(var(--border));
          padding-top: 18px;
        }
        /* Bullets */
        .tl-card__bullets {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .tl-card__bullet {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.875rem;
          line-height: 1.65;
          color: hsl(var(--muted-foreground));
        }
        .tl-card__bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 7px;
        }
        /* Images */
        .tl-card__images {
          display: flex;
          gap: 10px;
          margin-top: 18px;
          flex-wrap: wrap;
        }
        .tl-card__image {
          width: calc(50% - 5px);
          border-radius: 8px;
          object-fit: cover;
          aspect-ratio: 16/10;
          border: 1px solid hsl(var(--border));
        }
        /* ── Responsive ── */
        @media (max-width: 600px) {
          .exp-header { padding: 96px 20px 48px; }
          .exp-main { padding: 60px 20px 96px; }
          .tl-card__header { padding: 16px 16px; }
          .tl-card__body-inner { padding: 0 16px 16px; padding-top: 14px; }
          .tl-card__image { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tl-entry, .tl-card, .tl-card__chevron {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
        /* ── Layout shell ── */
        .pg-home {
          min-height: 100vh;
          background: hsl(var(--background));
        }
        
        .pg-hero {
          padding: 120px 24px 60px;
          display: flex;
          align-items: center;
        }
        .pg-hero__inner {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          gap: 60px;
        }
        .pg-hero__left {
          width: 45%;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        .pg-hero__right {
          width: 55%;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        
        .pg-hero__photo-link {
          display: inline-block;
          margin-bottom: 12px;
        }
        .pg-hero__photo-wrap {
          width: 200px;
          height: 240px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid hsl(var(--border));
          transition: opacity 0.2s ease;
        }
        .pg-hero__photo-link:hover .pg-hero__photo-wrap {
          opacity: 0.9;
        }
        .pg-hero__photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 20%;
          display: block;
        }
        .pg-hero__text { min-width: 0; }
        .pg-hero__eyebrow {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin: 0 0 18px;
        }
        .pg-hero__name {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.04em;
          color: hsl(var(--foreground));
          margin: 0 0 20px;
        }
        .pg-hero__bio {
          font-size: 1.05rem;
          line-height: 1.7;
          color: hsl(var(--muted-foreground));
          max-width: 480px;
          margin: 0 0 20px;
        }
        /* Availability badge */
        .pg-hero__availability {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 500;
          color: hsl(142 60% 38%);
          background: hsl(142 60% 38% / 0.1);
          border: 1px solid hsl(142 60% 38% / 0.25);
          border-radius: 100px;
          padding: 5px 14px 5px 10px;
          margin-bottom: 28px;
          letter-spacing: 0.01em;
        }
        .pg-hero__avail-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: hsl(142 60% 38%);
          flex-shrink: 0;
        }
        .pg-hero__actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }
        .pg-hero__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 24px;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          border: none;
          background: none;
        }
        .pg-hero__btn--primary {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        }
        .pg-hero__btn--primary:hover {
          background: hsl(var(--primary) / 0.88);
        }
        .pg-hero__btn--outline {
          border: 1.5px solid hsl(var(--border));
          color: hsl(var(--foreground));
          background: transparent;
        }
        .pg-hero__btn--outline:hover {
          border-color: hsl(var(--primary));
          color: hsl(var(--primary));
          background: hsl(var(--primary) / 0.05);
        }
        .pg-hero__btn--ghost {
          color: hsl(var(--muted-foreground));
          padding-left: 0;
          padding-right: 0;
        }
        .pg-hero__btn--ghost:hover {
          color: hsl(var(--foreground));
        }
        /* ── Contact Strip ── */
        .pg-contact {
          padding: 80px 24px 80px;
          border-top: 1px solid hsl(var(--border));
          text-align: center;
        }
        .pg-contact__inner {
          max-width: 640px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .pg-contact__label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin: 0;
        }
        .pg-contact__heading {
          font-size: clamp(1.5rem, 3.5vw, 2.4rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.2;
          color: hsl(var(--foreground));
          margin: 0;
        }
        .pg-projects {
          padding: 0 24px 96px;
        }
        .pg-projects__inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .pg-projects__header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 32px;
          padding-bottom: 20px;
          border-bottom: 1px solid hsl(var(--border));
        }
        .pg-projects__heading {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin: 0;
        }
        .pg-projects__clear {
          font-size: 0.8rem;
          color: hsl(var(--muted-foreground));
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s;
        }
        .pg-projects__clear:hover {
          color: hsl(var(--foreground));
        }
        /* ── Tag pills ── */
        .pg-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 48px;
        }
        .tag-pill {
          font-size: 0.78rem;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 4px;
          border: 1px solid hsl(var(--border));
          background: transparent;
          color: hsl(var(--muted-foreground));
          cursor: pointer;
          transition: color 0.15s, border-color 0.15s;
        }
        .tag-pill:hover {
          border-color: hsl(var(--foreground) / 0.4);
          color: hsl(var(--foreground));
        }
        .tag-pill--active {
          border-color: hsl(var(--primary));
          background: hsl(var(--primary) / 0.06);
          color: hsl(var(--primary));
        }
        /* ── Grid ── */
        .pg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
        }
        /* Empty state */
        .pg-projects__empty {
          padding: 80px 0;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          color: hsl(var(--muted-foreground));
          font-size: 0.95rem;
        }
        
        /* ── Responsive Hero & Grid ── */
        @media (max-width: 1024px) {
          .pg-hero {
            padding: 100px 24px 60px;
            min-height: auto;
          }
          .pg-hero__inner {
            flex-direction: column;
            gap: 48px;
          }
          .pg-hero__left {
            width: 100%;
            align-items: center;
            text-align: center;
          }
          .pg-hero__right {
            width: 100%;
          }
          .pg-hero__bio {
            margin: 0 auto 32px;
          }
          .pg-hero__actions {
            justify-content: center;
          }
          .pg-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        @media (max-width: 600px) {
          .pg-hero {
            padding: 96px 20px 48px;
          }
          .pg-grid {
            grid-template-columns: 1fr;
          }
          .pg-grid > :first-child {
            grid-column: span 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .pg-hero__btn,
          .pg-hero__photo-wrap,
          .tag-pill {
            transition: none;
          }
        }
      `})]})}e.s(["default",0,function(){return(0,t.jsx)(i.Suspense,{fallback:(0,t.jsx)("div",{className:"min-h-screen flex items-center justify-center",children:(0,t.jsx)(d.Loader2,{className:"w-5 h-5 animate-spin text-muted-foreground"})}),children:(0,t.jsx)(v,{})})}],52683)}]);