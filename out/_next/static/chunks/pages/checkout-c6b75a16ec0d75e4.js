(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{4945:function(e,n,r){"use strict";r.d(n,{s:function(){return o}});var t=r(1096),i=r(2770),o=(0,t.ZP)(i.Z).withConfig({displayName:"Card1",componentId:"sc-15j9hv6-0"})(["position:relative;padding:1.5rem 1.75rem;@media only screen and (max-width:678px){padding:1rem;}"])},8277:function(e,n,r){"use strict";var t=r(9499),i=r(4730),o=r(7947),l=r(7294),a=r(1096),s=r(6678),c=r(5893),d=["id","label","labelPlacement","labelColor"];function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function m(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var p=a.ZP.input.withConfig({displayName:"CheckBox__SyledCheckBox",componentId:"sc-728eka-0"})((function(e){var n=e.color,r=e.size;return(0,o.ZP)({"-webkit-appearance":"none","-moz-appearance":"none","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",appearance:"none",outline:"none",cursor:"pointer",margin:0,width:r,height:r,border:"2px solid",borderColor:"text.hint",borderRadius:2,position:"relative","&:checked":{borderColor:"".concat(n,".main")},"&:after":{width:"calc(100% - 5px)",height:"calc(100% - 5px)",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)",position:"absolute",bg:"transparent",content:'" "',visibility:"visible",borderRadius:1,transition:"all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},"&:checked:after":{bg:"".concat(n,".main")},"&:disabled":{borderColor:"text.disabled"},"&:checked:disabled:after":{bg:"text.disabled"}})}),(0,s.qC)(s.$_)),h=a.ZP.div.withConfig({displayName:"CheckBox__Wrapper",componentId:"sc-728eka-1"})(["display:flex;align-items:center;flex-direction:",";input{",";}label{cursor:pointer;}input[disabled] + label{color:text.disabled;cursor:unset;}"," ",""],(function(e){return"end"!==e.labelPlacement?"row":"row-reverse"}),(function(e){return"end"!==e.labelPlacement?"margin-right: 0.5rem":"margin-left: 0.5rem"}),s.$_,s.Dh),x=function(e){var n=e.id,r=e.label,t=e.labelPlacement,o=e.labelColor,a=(0,i.Z)(e,d),s=(0,l.useState)(n),u=s[0],x=s[1],f={};for(var b in a)(b.startsWith("m")||b.startsWith("p"))&&(f[b]=a[b]);return(0,l.useEffect)((function(){x(Math.random())}),[]),(0,c.jsxs)(h,m(m({labelPlacement:t,color:"".concat(o,".main")},f),{},{children:[(0,c.jsx)(p,m({id:u,type:"checkbox"},a)),(0,c.jsx)("label",{htmlFor:u,children:r})]}))};x.defaultProps={color:"secondary",size:18},n.Z=x},5737:function(e,n,r){"use strict";var t=r(9499),i=r(4730),o=(r(7294),r(3076)),l=r(7308),a=r(6883),s=r(2278),c=r(5893),d=["options","id","label","errorText"];function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function m(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var p={input:function(e){return m(m({},e),{},{height:30})},option:function(e,n){return m(m({},e),{},{color:"inherit",backgroundColor:n.isFocused?"rgba(0,0,0, 0.015)":"inherit",cursor:"pointer"})}};n.Z=function(e){var n=e.options,r=(e.id,e.label),t=e.errorText,u=(0,i.Z)(e,d),h={};for(var x in u)(x.startsWith("m")||x.startsWith("p"))&&(h[x]=u[x]);return(0,c.jsxs)(a.Z,m(m({},h),{},{children:[r&&(0,c.jsx)(s.ZP,{fontSize:"0.875rem",mb:"6px",children:r}),(0,c.jsx)(o.ZP,m({options:n,styles:p,theme:function(e){return m(m({},e),{},{colors:m(m({},e.colors),{},{primary50:l.O.gray[100],primary:l.O.primary.main,neutral20:l.O.text.disabled})})}},u)),t&&(0,c.jsx)(s.ZP,{color:"error.main",ml:"0.25rem",mt:"0.25rem",as:"small",children:t})]}))}},1451:function(e,n,r){"use strict";r.d(n,{Z:function(){return f}});var t=r(1163),i=r(7294),o=r(6883),l=r(3158),a=r(7407),s=r(8916),c=r(1396),d=r(2938),u=r(5893),m=function(e){var n=e.selectedStep,r=e.stepperList,t=e.onChange,l=(0,i.useState)(n-1),a=l[0],s=l[1],m=function(e,n){return function(){e.disabled||(s(n),t&&t(e,n))}};return(0,i.useEffect)((function(){s(n-1)}),[n]),(0,u.jsx)(d.Z,{alignItems:"center",flexWrap:"wrap",justifyContent:"center",my:"-4px",children:r.map((function(e,n){return(0,u.jsxs)(i.Fragment,{children:[(0,u.jsxs)(c.A,{bg:n<=a?"primary.main":"primary.light",color:n<=a?"white":"primary.main",p:"0.5rem 1.5rem",fontSize:"14px",fontWeight:"600",my:"4px",cursor:e.disabled?"not-allowed":"pointer",onClick:m(e,n),children:[n+1,". ",e.title]}),n<r.length-1&&(0,u.jsx)(o.Z,{width:"50px",height:"4px",bg:n<a?"primary.main":"primary.light"})]},e.title)}))})};m.defaultProps={selectedStep:1};var p=m,h=r(2685),x=[{title:"Cart",disabled:!1},{title:"Details",disabled:!1},{title:"Payment",disabled:!1},{title:"Review",disabled:!0}],f=function(e){var n=e.children,r=(0,i.useState)(0),c=r[0],d=r[1],m=(0,t.useRouter)(),f=m.pathname;return(0,i.useEffect)((function(){switch(f){case"/cart":d(1);break;case"/checkout":d(2);break;case"/payment":d(3)}}),[f]),(0,u.jsx)(h.Z,{navbar:(0,u.jsx)(s.Z,{}),children:(0,u.jsxs)(l.Z,{my:"2rem",children:[(0,u.jsx)(o.Z,{mb:"14px",children:(0,u.jsx)(a.Z,{container:!0,spacing:6,children:(0,u.jsx)(a.Z,{item:!0,lg:8,md:8,xs:12,children:(0,u.jsx)(p,{stepperList:x,selectedStep:c,onChange:function(e,n){var r=[function(){return m.push("/cart")},function(){return m.push("/checkout")},function(){return m.push("/payment")},function(){return m.push("/orders")}][n];null===r||void 0===r||r()}})})})}),n]})})}},8916:function(e,n,r){"use strict";r.d(n,{Z:function(){return v}});var t=r(6835),i=r(6883),o=r(1381),l=(r(4407),r(7294)),a=r(5617),s=(r(6261),r(6678),r(2218)),c=(r(8027),r(7803),r(3158)),d=r(2938),u=r(7868),m=r(3886),p=r(2278),h=r(1096),x=r(8967),f=h.ZP.div.withConfig({displayName:"NavbarStyle__StyledNavbar",componentId:"sc-fqywfe-0"})(["position:relative;height:60px;background:",";box-shadow:",";.nav-link{font-size:14px;margin-right:32px;cursor:pointer;:hover{color:",";}}.nav-link:last-child{margin-right:0px;}.root-child{display:none;position:absolute;left:0;top:100%;z-index:5;}.root:hover{.root-child{display:block;}}.child{display:none;position:absolute;top:0;left:100%;z-index:5;}.parent:hover > .child{display:block;}.dropdown-icon{color:",";}@media only screen and (max-width:900px){display:none;}"],(0,x.gh)("colors.body.paper"),(0,x.gh)("shadows.regular"),(0,x.gh)("colors.primary.main"),(0,x.gh)("colors.text.muted")),b=r(7407),g=r(5893),v=function(e){e.navListOpen;var n=l.useState([]),r=(0,t.Z)(n,2),i=r[0],o=r[1],d=l.useState(0),u=(0,t.Z)(d,2),m=(u[0],u[1],function(e){return!!i.find((function(n){return n===e}))}),p=(0,a.v9)((function(e){return e.categories.navbarLinks})),h=l.useState(!1),x=(0,t.Z)(h,2),b=x[0],v=x[1],w=l.useState([]),P=(0,t.Z)(w,2),O=P[0],z=P[1],C=(0,a.v9)((function(e){return e.lang.lang})),k=function(e,n){v(!0),z(e)},S=function(e){return v(!1)};return(0,g.jsx)(f,{children:(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(s.ScrollMenu,{onWheel:j,LeftArrow:function(){return(0,g.jsx)(Z,{side:"left"})},RightArrow:function(){return(0,g.jsx)(Z,{side:"right"})},children:null===p||void 0===p?void 0:p.map((function(e){return(0,g.jsx)(y,{mouseIn:k,mouseOut:S,itemId:e.id,category:e,lang:C,onClick:(n=e.id,function(e){e.getItemById,e.scrollToItem;var r=m(n);o((function(e){return r?e.filter((function(e){return e!==n})):e.concat(n)}))}),selected:m(e.id)},e.id);var n}))}),(0,g.jsx)(_,{is_hovered:b,hoveredCategory:O,mouseIn:k,mouseOut:S,lang:C})]})})};function j(e,n){0!==Math.abs(n.deltaX)||Math.abs(n.deltaY)<15?n.stopPropagation():n.deltaY<0?e.scrollNext():n.deltaY>0&&e.scrollPrev()}var y=function(e){var n,r=e.onClick,t=e.mouseIn,i=e.mouseOut,a=e.category,c=e.lang,d=l.useContext(s.VisibilityContext);return(0,g.jsx)("div",{onMouseEnter:function(e){return t(a,e)},onMouseLeave:i,onClick:function(){return r(d)},tabIndex:0,className:"category_swipe_item",children:(0,g.jsx)(o.v,{children:(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[a.image&&(0,g.jsx)("img",{src:null===(n=a.image)||void 0===n?void 0:n.replace(/https:\/\/api.sdb.uz/gi,"https://api.sdb.uz"),alt:""}),(0,g.jsx)("div",{className:"title",style:{padding:"20px",lineHeight:1.2},children:"uz"===c?a["name_".concat("uz")]:a["name_".concat("ru")]}),(0,g.jsx)(u.Z,{variant:"small",style:{display:"flex",alignItems:"center"},children:"chevron-down"})]})})})},Z=function(e){var n=e.side,r=void 0===n?"left":n,t=l.useContext(s.VisibilityContext),i=t.isLastItemVisible,o=t.isFirstItemVisible,a=t.scrollNext,c=t.scrollPrev;return(0,g.jsx)("div",{className:"arrow_button_round",onClick:function(){"left"===r?!o&&c():!i&&a()},children:(0,g.jsx)(u.Z,{variant:"small",children:"chevron-".concat(r)})})},_=function(e){var n,r=e.is_hovered,t=e.hoveredCategory,o=e.mouseIn,l=e.mouseOut,a=e.lang;return(0,g.jsxs)("div",{onMouseEnter:function(e){return o(t,e)},onMouseLeave:l,className:"wrap_cat_banner",style:{display:r?"block":"none"},children:[(0,g.jsx)("div",{style:{height:"30px"}}),(0,g.jsxs)("div",{className:"category_banner_details",px:"1.25rem",py:"0.875rem",children:[(0,g.jsx)(p.H3,{className:"title",fontSize:"18px",textAlign:"left",fontWeight:"600",color:"text.secondary",pl:"20px",mb:"10px",children:"uz"===a?t["name_".concat("uz")]:t["name_".concat("ru")]}),(0,g.jsx)("div",{children:(0,g.jsx)(d.Z,{px:"1.25rem",py:"0.875rem",children:(0,g.jsx)(i.Z,{flex:"1 1 0",children:(0,g.jsx)(b.Z,{container:!0,spacing:4,children:null===(n=t.children)||void 0===n?void 0:n.map((function(e,n){var r;return(0,g.jsxs)(b.Z,{item:!0,md:3,children:[(0,g.jsx)(m.Z,{className:"child-link",href:"/products/".concat(e.slug),children:(0,g.jsx)(p.H3,{className:"title",fontSize:"14px",textAlign:"left",fontWeight:"600",color:"text.secondary",mb:"10px",children:"uz"===a?e.name_uz:e.name_ru})},n),null===(r=e.children)||void 0===r?void 0:r.map((function(e,n){return(0,g.jsx)(m.Z,{className:"child-link",style:{display:"block"},href:"/products/".concat(e.slug),children:"uz"===a?e.name_uz:e.name_ru},n)}))]},n)}))})})})})]})]})}},9348:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return J}});var t=r(7294),i=r(7794),o=r.n(i),l=r(2175),a=r(1664),s=r(1163),c=r(4231),d=r(8027),u=r(4945),m=(r(8277),r(7407)),p=(r(5737),r(1306)),h=r(2278),x=r(5893),f=(c.Ry().shape({}),r(1177)),b=r(2938),g=r(5617),v=r(7079),j=function(){var e,n,r=(0,g.I0)(),i=(0,g.v9)((function(e){return e})),o=null===i||void 0===i||null===(e=i.cart)||void 0===e?void 0:e.cartList,l=null===i||void 0===i||null===(n=i.lang)||void 0===n?void 0:n.lang;return(0,t.useEffect)((function(){(0,v.fq)()(r)}),[]),(0,x.jsxs)(u.s,{children:[(0,x.jsx)(h.ZP,{color:"secondary.900",fontWeight:"700",mb:"1.5rem",children:"uz"===l?"Sizning buyurtmangiz":"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437"}),o.map((function(e){return(0,x.jsxs)(b.Z,{justifyContent:"space-between",alignItems:"center",mb:"1.5rem",children:[(0,x.jsxs)(h.ZP,{children:[(0,x.jsx)(h.Dr,{fontWeight:"700",fontSize:"14px",children:null===e||void 0===e?void 0:e.qty})," ","x ","uz"===l?(null===e||void 0===e?void 0:e.name_uz.length)>20?(null===e||void 0===e?void 0:e.name_uz.slice(0,20))+"...":null===e||void 0===e?void 0:e.name_ru:(null===e||void 0===e?void 0:e.name_ru.length)>20?(null===e||void 0===e?void 0:e.name_ru.slice(0,20))+"...":null===e||void 0===e?void 0:e.name_ru]}),(0,x.jsxs)(h.ZP,{children:[Intl.NumberFormat().format(null===e||void 0===e?void 0:e.price)," UZS"]})]},null===e||void 0===e?void 0:e.id)})),(0,x.jsxs)(b.Z,{justifyContent:"space-between",alignItems:"center",mb:"0.5rem",children:[(0,x.jsxs)(h.ZP,{color:"text.hint",children:["uz"===l?"Jami":"\u0418\u0442\u043e\u0433\u043e",":"]}),(0,x.jsx)(b.Z,{alignItems:"flex-end",children:(0,x.jsx)(h.ZP,{fontSize:"18px",fontWeight:"600",lineHeight:"1",children:((null===o||void 0===o?void 0:o.reduce((function(e,n){return e+(null===n||void 0===n?void 0:n.price)*(null===n||void 0===n?void 0:n.qty)}),0))||0).toLocaleString()})})]}),(0,x.jsxs)(b.Z,{justifyContent:"space-between",alignItems:"center",mb:"0.5rem",children:[(0,x.jsxs)(h.ZP,{color:"text.hint",children:["uz"===l?"Yetkazib berish narxi":"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",":"]}),(0,x.jsx)(b.Z,{alignItems:"flex-end",children:(0,x.jsx)(h.ZP,{fontSize:"18px",fontWeight:"600",lineHeight:"1",children:"uz"===l?"Bepul":"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e"})})]}),(0,x.jsxs)(b.Z,{justifyContent:"space-between",alignItems:"center",mb:"1rem",children:[(0,x.jsxs)(h.ZP,{color:"text.hint",children:["uz"===l?"Chegirma":"\u0421\u043a\u0438\u0434\u043a\u0430",":"]}),(0,x.jsx)(b.Z,{alignItems:"flex-end",children:(0,x.jsx)(h.ZP,{fontSize:"18px",fontWeight:"600",lineHeight:"1",children:"-"})})]})]})},y=r(1451),Z=r(3158),_=r(6883),w=r(9499),P=r(5555),O=r(2770),z=r(8221),C=r(29),k=r(4730),S=r(7947),I=r(1096),N=r(6678),E=["id","label","labelPlacement","labelColor"];function D(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function W(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?D(Object(r),!0).forEach((function(n){(0,w.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var q=I.ZP.input.withConfig({displayName:"Radio__SyledRadio",componentId:"sc-1u6zd2y-0"})((function(e){return(0,S.ZP)({"-webkit-appearance":"none","-moz-appearance":"none","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",appearance:"none",outline:"none",cursor:"pointer",margin:0,width:20,height:20,borderRadius:20,border:"2px solid",borderColor:"text.hint",position:"relative","&:checked":{borderColor:"".concat(e.color,".main")},"&:after":{width:"calc(100% - 6px)",height:"calc(100% - 6px)",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)",borderRadius:"50%",position:"absolute",bg:"transparent",content:'" "',visibility:"visible",transition:"all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},"&:checked:after":{bg:"".concat(e.color,".main")},"&:disabled":{borderColor:"text.disabled"},"&:checked:disabled:after":{bg:"text.disabled"}})}),(0,N.qC)(N.$_)),B=I.ZP.div.withConfig({displayName:"Radio__Wrapper",componentId:"sc-1u6zd2y-1"})(["display:flex;align-items:center;flex-direction:",";input{",";}label{cursor:pointer;}input[disabled] + label{color:text.disabled;cursor:unset;}"," ",""],(function(e){return"end"!==e.labelPlacement?"row":"row-reverse"}),(function(e){return"end"!==e.labelPlacement?"margin-right: 0.5rem":"margin-left: 0.5rem"}),N.$_,N.Dh),R=function(e){var n=e.id,r=e.label,i=e.labelPlacement,o=e.labelColor,l=(0,k.Z)(e,E),a=(0,t.useState)(n),s=a[0],c=a[1],d={};for(var u in l)(u.startsWith("m")||u.startsWith("p"))&&(d[u]=l[u]);return(0,t.useEffect)((function(){c(n||Math.random())}),[]),(0,x.jsxs)(B,W(W({labelPlacement:i,color:"".concat(o,".main")},d),{},{children:[(0,x.jsx)(q,W({id:s,type:"radio"},l)),(0,x.jsx)("label",{htmlFor:s,children:r})]}))};R.defaultProps={color:"secondary"};var L=R,T=r(7781),M={card_no:"",name:"",exp_date:"",cvc:"",shipping_zip:"",shipping_country:"",shipping_address1:"",shipping_address2:"",billing_name:"",billing_email:"",billing_contact:"",billing_company:"",billing_zip:"",billing_country:"",billing_address1:"",billing_address2:""},Y=c.Ry().shape({card_no:c.Z_().required("required"),name:c.Z_().required("required"),exp_date:c.Z_().required("required"),cvc:c.Z_().required("required")}),A=function(){var e=(0,g.v9)((function(e){return e.lang.lang})),n=(0,t.useState)("cod"),r=n[0],i=n[1],a=(0,T.Z)(),c=(0,s.useRouter)(),v=a<769,j=function(){var e=(0,C.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.push("/payment");case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),y=function(e){var n=e.target.name;i(n)};return(0,x.jsx)(t.Fragment,{children:(0,x.jsxs)(u.s,{mb:"2rem",children:[(0,x.jsx)(L,{name:"cod",mb:"1.5rem",color:"secondary",checked:"credit-card"===r,label:(0,x.jsx)(h.ZP,{ml:"6px",fontWeight:"600",fontSize:"18px",color:"#7D879C",children:"uz"===e?"Click orqali to`lov":"\u041e\u043f\u043b\u0430\u0442\u0430 Click"}),onChange:y}),(0,x.jsx)(f.Z,{mb:"1.25rem",mx:"-2rem"}),"credit-card"===r&&(0,x.jsx)(l.J9,{initialValues:M,validationSchema:Y,onSubmit:j,children:function(e){var n=e.values,r=e.errors,t=e.touched,i=e.handleChange,o=e.handleBlur,l=e.handleSubmit;return(0,x.jsxs)("form",{onSubmit:l,children:[(0,x.jsx)(_.Z,{mb:"1.5rem",children:(0,x.jsxs)(m.Z,{container:!0,horizontal_spacing:6,vertical_spacing:4,children:[(0,x.jsx)(m.Z,{item:!0,sm:6,xs:12,children:(0,x.jsx)(p.Z,{name:"card_no",label:"Card Number",fullwidth:!0,onBlur:o,onChange:i,value:n.card_no||"",errorText:t.card_no&&r.card_no})}),(0,x.jsx)(m.Z,{item:!0,sm:6,xs:12,children:(0,x.jsx)(p.Z,{name:"exp_date",label:"Exp Date",placeholder:"MM/YY",fullwidth:!0,onBlur:o,onChange:i,value:n.exp_date||"",errorText:t.exp_date&&r.exp_date})}),(0,x.jsx)(m.Z,{item:!0,sm:6,xs:12,children:(0,x.jsx)(p.Z,{name:"name",label:"Name on Card",fullwidth:!0,onBlur:o,onChange:i,value:n.name||"",errorText:t.name&&r.name})}),(0,x.jsx)(m.Z,{item:!0,sm:6,xs:12,children:(0,x.jsx)(p.Z,{name:"name",label:"Name on Card",fullwidth:!0,onBlur:o,onChange:i,value:n.name||"",errorText:t.name&&r.name})})]})}),(0,x.jsx)(d.Z,{variant:"outlined",color:"primary",mb:"30px",children:"Submit"}),(0,x.jsx)(f.Z,{mb:"1.5rem",mx:"-2rem"})]})}}),(0,x.jsx)(L,{name:"cod",mb:"1.5rem",color:"secondary",checked:"paypal"===r,label:(0,x.jsx)(h.ZP,{ml:"6px",fontWeight:"600",fontSize:"18px",color:"#7D879C",children:"uz"===e?"Payme orqali to`lov":"\u041e\u043f\u043b\u0430\u0442\u0430 Payme"}),onChange:y}),(0,x.jsx)(f.Z,{mb:"1.5rem",mx:"-2rem"}),"paypal"===r&&(0,x.jsxs)(t.Fragment,{children:[(0,x.jsxs)(b.Z,{alignItems:"flex-end",mb:"30px",children:[(0,x.jsx)(p.Z,{name:"email",label:"Paypal Email",type:"email",mr:v?"1rem":"30px",fullwidth:!0}),(0,x.jsx)(d.Z,{variant:"outlined",color:"primary",type:"button",children:"Submit"})]}),(0,x.jsx)(f.Z,{mb:"1.5rem",mx:"-2rem"})]}),(0,x.jsx)(L,{name:"cod",color:"secondary",checked:"cod"===r,label:(0,x.jsx)(h.ZP,{ml:"6px",fontWeight:"600",fontSize:"18px",children:"uz"===e?"Naqd to`lov":"\u041e\u043f\u043b\u0430\u0442\u0430 \u043d\u0430\u043b\u0438\u0447\u043d\u044b\u043c\u0438"}),onChange:y})]})})},F=r(7723);function H(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function V(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?H(Object(r),!0).forEach((function(n){(0,w.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var X=function(){var e,n,r,i=(0,g.I0)(),o=((0,s.useRouter)(),(0,g.v9)((function(e){return e}))),c=null===o||void 0===o||null===(e=o.user)||void 0===e?void 0:e.user,f=null===o||void 0===o||null===(n=o.lang)||void 0===n?void 0:n.lang,j={orderItems:null===o||void 0===o||null===(r=o.cart)||void 0===r?void 0:r.cartList,delivery_address:"",delivery_phone:"",order_note:"",payment_method:0},y=[{contactType:"uz"===f?"Asosiy":"\u0411\u0430\u0437\u043e\u0432\u044b\u0439",contact:null===c||void 0===c?void 0:c.phone}],Z=(0,t.useState)(j),_=Z[0],w=Z[1],C=(0,t.useState)(null),k=C[0],S=C[1],I=(0,t.useState)({address:!1,phone:!1}),N=I[0],E=I[1],D=(0,t.useState)(!1),W=D[0],q=D[1],B=function(e){var n=e.target;w(V(V({},_),{},{delivery_address:n.value}))},R=function(e){var n=e.target;w(V(V({},_),{},{delivery_phone:n.value}))};return(0,t.useEffect)((function(){(0,z.PR)()(i)}),[]),(0,x.jsx)(l.J9,{children:function(){return(0,x.jsxs)("form",{children:[(0,x.jsxs)(u.s,{mb:"1.5rem",children:[(0,x.jsxs)(b.Z,{alignItems:"center",mb:"1.75rem",children:[(0,x.jsx)(P.Z,{bg:"primary.main",size:32,color:"primary.text",mr:"0.875rem",children:"1"}),(0,x.jsx)(h.ZP,{fontSize:"20px",children:"uz"===f?"Yetkazib berish manzili":"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"})]}),(0,x.jsx)(p.Z,{name:"shipping_address1",label:"uz"===f?"Manzil:":"\u0410\u0434\u0440\u0435\u0441:",fullwidth:!0,value:_.delivery_address,onChange:B,style:{borderColor:N.address?"red":"#AEB4BE"}})]}),(0,x.jsxs)(u.s,{mb:"1.5rem",children:[(0,x.jsxs)(b.Z,{alignItems:"center",mb:"1.75rem",children:[(0,x.jsx)(P.Z,{bg:"primary.main",size:32,color:"primary.text",mr:"0.875rem",children:"2"}),(0,x.jsx)(h.ZP,{fontSize:"20px",children:"uz"===f?"Shaxsiy ma'lumotlar":"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"})]}),(0,x.jsx)(p.Z,{mb:"15px",name:"shipping_address1",label:"uz"===f?"Telefon raqam:":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440:",fullwidth:!0,placeholder:"+998 99 999 99 99",value:_.delivery_phone,style:{borderColor:N.phone?"red":"#AEB4BE"},onChange:R}),(0,x.jsx)(m.Z,{container:!0,spacing:6,children:y.map((function(e){return(0,x.jsx)(m.Z,{item:!0,md:4,sm:6,xs:12,children:(0,x.jsxs)(O.Z,{bg:"gray.100",p:"1rem",boxShadow:"none",border:"1px solid",cursor:"pointer",borderColor:e.contact===k?"primary.main":"transparent",onClick:function(){return n=e.contact,S(n),void w(V(V({},_),{},{delivery_phone:n}));var n},children:[(0,x.jsx)(h.H6,{mb:"0.25rem",children:e.contactType}),(0,x.jsx)(h.nv,{color:"gray.700",children:e.contact})]})},e.contact)}))})]}),(0,x.jsxs)(u.s,{mb:"1.5rem",children:[(0,x.jsxs)(b.Z,{alignItems:"center",mb:"1.75rem",children:[(0,x.jsx)(P.Z,{bg:"primary.main",size:32,color:"primary.text",mr:"0.875rem",children:"3"}),(0,x.jsx)(h.ZP,{fontSize:"20px",children:"uz"===f?"To`lov turi":"\u0422\u0438\u043f \u043f\u043b\u0430\u0442\u0435\u0436\u0430"})]}),(0,x.jsx)(A,{}),(0,x.jsx)(d.Z,{variant:"contained",color:"primary",mt:"1.5rem",type:"submit",onClick:function(e){return function(e){e.preventDefault(),""===_.delivery_address?E(V(V({},N),{},{address:!0})):""===_.delivery_phone?E(V(V({},N),{},{phone:!0})):((0,z.fS)(_,(function(e){null!==e?alert(e):q(!0)}))(i),(0,v.LL)()(i))}(e)},fullwidth:!0,children:"uz"===f?"Rasmiylashtirish":"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})]}),(0,x.jsx)(F.Z,{open:W,children:(0,x.jsx)(u.s,{children:(0,x.jsxs)(b.Z,{alignItems:"center",flexDirection:"column",children:[(0,x.jsx)(h.ZP,{fontSize:"20px",mb:"20px",children:"uz"===f?"Buyurtmangiz rasmiylashtirildi operatorlarimiz tez orada siz bilan bog`lanishadi":"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d, \u0438 \u043d\u0430\u0448\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u0432\u044f\u0436\u0443\u0442\u0441\u044f \u0441 \u0432\u0430\u043c\u0438 \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f"}),(0,x.jsx)(a.default,{href:"/",children:(0,x.jsx)(d.Z,{variant:"contained",color:"primary",m:"0.5rem",onClick:function(){return q(!1)},children:"uz"===f?"Bosh sahifaga qaytish":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u0434\u043e\u043c\u043e\u0439"})})]})})})]})}})},$=function(){return(0,x.jsx)(Z.Z,{mt:"50px",mb:"50px",children:(0,x.jsxs)(m.Z,{container:!0,flexWrap:"wrap-reverse",spacing:6,children:[(0,x.jsx)(m.Z,{item:!0,lg:8,md:8,xs:12,children:(0,x.jsx)(X,{})}),(0,x.jsx)(m.Z,{item:!0,lg:4,md:4,xs:12,children:(0,x.jsx)(j,{})})]})})};$.layout=y.Z;var J=$},354:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return r(9348)}])}},function(e){e.O(0,[466,76,774,888,179],(function(){return n=354,e(e.s=n);var n}));var n=e.O();_N_E=n}]);