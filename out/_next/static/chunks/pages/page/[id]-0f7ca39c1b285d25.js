(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[333],{9187:function(n,e,t){"use strict";t(7294);var i=t(3158),r=t(7407),o=t(8916),l=t(2685),s=t(5893);e.Z=function(n){var e=n.children;return(0,s.jsx)(l.Z,{navbar:(0,s.jsx)(o.Z,{}),children:(0,s.jsx)(i.Z,{my:"2rem",children:(0,s.jsx)(r.Z,{container:!0,spacing:6,children:(0,s.jsx)(r.Z,{item:!0,lg:9,xs:12,children:e})})})})}},8916:function(n,e,t){"use strict";t.d(e,{Z:function(){return _}});var i=t(6835),r=t(6883),o=t(1381),l=(t(4407),t(7294)),s=t(5617),a=(t(6261),t(6678),t(2218)),c=(t(8027),t(7803),t(3158)),u=t(2938),d=t(7868),h=t(3886),v=t(2278),x=t(1096),p=t(8967),m=x.ZP.div.withConfig({displayName:"NavbarStyle__StyledNavbar",componentId:"sc-fqywfe-0"})(["position:relative;height:60px;background:",";box-shadow:",";.nav-link{font-size:14px;margin-right:32px;cursor:pointer;:hover{color:",";}}.nav-link:last-child{margin-right:0px;}.root-child{display:none;position:absolute;left:0;top:100%;z-index:5;}.root:hover{.root-child{display:block;}}.child{display:none;position:absolute;top:0;left:100%;z-index:5;}.parent:hover > .child{display:block;}.dropdown-icon{color:",";}@media only screen and (max-width:900px){display:none;}"],(0,p.gh)("colors.body.paper"),(0,p.gh)("shadows.regular"),(0,p.gh)("colors.primary.main"),(0,p.gh)("colors.text.muted")),f=t(7407),g=t(5893),_=function(n){n.navListOpen;var e=l.useState([]),t=(0,i.Z)(e,2),r=t[0],o=t[1],u=l.useState(0),d=(0,i.Z)(u,2),h=(d[0],d[1],function(n){return!!r.find((function(e){return e===n}))}),v=(0,s.v9)((function(n){return n.categories.navbarLinks})),x=l.useState(!1),p=(0,i.Z)(x,2),f=p[0],_=p[1],N=l.useState([]),w=(0,i.Z)(N,2),z=w[0],k=w[1],I=(0,s.v9)((function(n){return n.lang.lang})),C=function(n,e){_(!0),k(n)},S=function(n){return _(!1)};return(0,g.jsx)(m,{children:(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(a.ScrollMenu,{onWheel:y,LeftArrow:function(){return(0,g.jsx)(b,{side:"left"})},RightArrow:function(){return(0,g.jsx)(b,{side:"right"})},children:null===v||void 0===v?void 0:v.map((function(n){return(0,g.jsx)(j,{mouseIn:C,mouseOut:S,itemId:n.id,category:n,lang:I,onClick:(e=n.id,function(n){n.getItemById,n.scrollToItem;var t=h(e);o((function(n){return t?n.filter((function(n){return n!==e})):n.concat(e)}))}),selected:h(n.id)},n.id);var e}))}),(0,g.jsx)(Z,{is_hovered:f,hoveredCategory:z,mouseIn:C,mouseOut:S,lang:I})]})})};function y(n,e){0!==Math.abs(e.deltaX)||Math.abs(e.deltaY)<15?e.stopPropagation():e.deltaY<0?n.scrollNext():e.deltaY>0&&n.scrollPrev()}var j=function(n){var e,t=n.onClick,i=n.mouseIn,r=n.mouseOut,s=n.category,c=n.lang,u=l.useContext(a.VisibilityContext);return(0,g.jsx)("div",{onMouseEnter:function(n){return i(s,n)},onMouseLeave:r,onClick:function(){return t(u)},tabIndex:0,className:"category_swipe_item",children:(0,g.jsx)(o.v,{children:(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[s.image&&(0,g.jsx)("img",{src:null===(e=s.image)||void 0===e?void 0:e.replace(/https:\/\/api.sdb.uz/gi,"https://api.sdb.uz"),alt:""}),(0,g.jsx)("div",{className:"title",style:{padding:"20px",lineHeight:1.2},children:"uz"===c?s["name_".concat("uz")]:s["name_".concat("ru")]}),(0,g.jsx)(d.Z,{variant:"small",style:{display:"flex",alignItems:"center"},children:"chevron-down"})]})})})},b=function(n){var e=n.side,t=void 0===e?"left":e,i=l.useContext(a.VisibilityContext),r=i.isLastItemVisible,o=i.isFirstItemVisible,s=i.scrollNext,c=i.scrollPrev;return(0,g.jsx)("div",{className:"arrow_button_round",onClick:function(){"left"===t?!o&&c():!r&&s()},children:(0,g.jsx)(d.Z,{variant:"small",children:"chevron-".concat(t)})})},Z=function(n){var e,t=n.is_hovered,i=n.hoveredCategory,o=n.mouseIn,l=n.mouseOut,s=n.lang;return(0,g.jsxs)("div",{onMouseEnter:function(n){return o(i,n)},onMouseLeave:l,className:"wrap_cat_banner",style:{display:t?"block":"none"},children:[(0,g.jsx)("div",{style:{height:"30px"}}),(0,g.jsxs)("div",{className:"category_banner_details",px:"1.25rem",py:"0.875rem",children:[(0,g.jsx)(v.H3,{className:"title",fontSize:"18px",textAlign:"left",fontWeight:"600",color:"text.secondary",pl:"20px",mb:"10px",children:"uz"===s?i["name_".concat("uz")]:i["name_".concat("ru")]}),(0,g.jsx)("div",{children:(0,g.jsx)(u.Z,{px:"1.25rem",py:"0.875rem",children:(0,g.jsx)(r.Z,{flex:"1 1 0",children:(0,g.jsx)(f.Z,{container:!0,spacing:4,children:null===(e=i.children)||void 0===e?void 0:e.map((function(n,e){var t;return(0,g.jsxs)(f.Z,{item:!0,md:3,children:[(0,g.jsx)(h.Z,{className:"child-link",href:"/products/".concat(n.slug),children:(0,g.jsx)(v.H3,{className:"title",fontSize:"14px",textAlign:"left",fontWeight:"600",color:"text.secondary",mb:"10px",children:"uz"===s?n.name_uz:n.name_ru})},e),null===(t=n.children)||void 0===t?void 0:t.map((function(n,e){return(0,g.jsx)(h.Z,{className:"child-link",style:{display:"block"},href:"/products/".concat(n.slug),children:"uz"===s?n.name_uz:n.name_ru},e)}))]},e)}))})})})})]})]})}},3755:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSP:function(){return u}});var i=t(9187),r=t(2278),o=(t(7294),t(3158)),l=t(5617),s=t(1163),a=t(5893),c=function(n){var e,t,i,c,u=n.data,d=(0,l.v9)((function(n){return n.lang.lang}));(0,s.useRouter)();return(0,a.jsxs)(o.Z,{mt:"50px",mb:"50px",children:[(0,a.jsx)(r.ZP,{children:(0,a.jsx)(r.H1,{children:"uz"===d?null===u||void 0===u||null===(e=u.page)||void 0===e?void 0:e.title_uz:null===u||void 0===u||null===(t=u.page)||void 0===t?void 0:t.title_ru})}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:"uz"===d?null===u||void 0===u||null===(i=u.page)||void 0===i?void 0:i.content_uz:null===u||void 0===u||null===(c=u.page)||void 0===c?void 0:c.content_ru}})]})};c.layout=i.Z;var u=!0;e.default=c},6207:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/[id]",function(){return t(3755)}])}},function(n){n.O(0,[466,774,888,179],(function(){return e=6207,n(n.s=e);var e}));var e=n.O();_N_E=e}]);