(this["webpackJsonpstore-pompei-nancy"]=this["webpackJsonpstore-pompei-nancy"]||[]).push([[0],{112:function(e,t,s){},113:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(0),n=s.n(a),r=s(10),i=s.n(r),j=s(23),l=(s(84),s(12)),o=s(73),d=s(9),b=s(40),O=s.n(b),x=s(155),u=s(5),h=s(159),m={id:"id",name:"name",cost:"0"},v={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA4ODcxYTdlNzE4NzAwMjBlMzhlZTAiLCJpYXQiOjE2MTExNzE2MTB9.gRqbCL86qsiOXjaSoQeyuhM5e-wjonyGpb4gZqIf6sk"},p=Object(x.a)((function(e){return{formControl:{"& .MuiFormLabel-root.Mui-focused":{color:"#15caf6"},margin:e.spacing(1),minWidth:310,width:310,display:"inline-block"},selectEmpty:{marginTop:e.spacing(2)}}})),N=Object(u.a)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.grey[500],"&$checked":{transform:"translateX(12px)",color:e.palette.common.white,"& + $track":{opacity:1,backgroundColor:e.palette.primary.main,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(h.a);var f=function(e,t){var s=Object(a.useState)(1),c=Object(d.a)(s,2),n=c[0],r=c[1],i=Math.ceil(e.length/t);return{next:function(){r((function(e){return Math.min(e+1,i)}))},prev:function(){r((function(e){return Math.max(e-1,1)}))},jump:function(e){var t=Math.max(1,e);r((function(e){return Math.min(t,i)}))},currentData:function(){var s=(n-1)*t,c=s+t;return e.slice(s,c)},currentPage:n,maxPage:i}},g=s.p+"static/media/coin.b8bc711d.svg",C=s.p+"static/media/Switch-x2.4af212f6.png",y=s.p+"static/media/check.63edb656.svg",P=s.p+"static/media/fail.11360ced.svg",k=document.getElementById("modal-root");function w(e,t){var s=e.children,n=e.fade,i=void 0!==n&&n,j=e.defaultOpened,l=void 0!==j&&j,o=Object(a.useState)(l),b=Object(d.a)(o,2),O=b[0],x=b[1],u=Object(a.useCallback)((function(){return x(!1)}),[]);Object(a.useImperativeHandle)(t,(function(){return{open:function(){return x(!0)},close:u}}),[u]);var h=Object(a.useCallback)((function(e){27===e.keyCode&&u()}),[u]);return Object(a.useEffect)((function(){return O&&document.addEventListener("keydown",h,!1),function(){document.removeEventListener("keydown",h,!1)}}),[h,O]),Object(r.createPortal)(O?Object(c.jsxs)("div",{className:"modal ".concat(i?"modal-fade":""),children:[Object(c.jsx)("div",{className:"modal-overlay",onClick:u}),Object(c.jsx)("span",{role:"button",className:"modal-close","aria-label":"close",onClick:u,children:Object(c.jsx)("svg",{id:"Capa_1",x:"0px",y:"0px",width:"20",height:"25",viewBox:"298.3 175.012 245.293 245.304",enableBackground:"new 298.3 175.012 245.293 245.304",children:Object(c.jsx)("path",{d:"M536.115,182.487c-9.965-9.966-26.125-9.966-36.074,0l-79.094,79.104l-79.095-79.104c-9.966-9.966-26.108-9.966-36.074,0\r s-9.966,26.108,0,36.074l79.094,79.101l-79.098,79.105c-9.966,9.965-9.966,26.109,0,36.074c4.981,4.98,11.51,7.475,18.039,7.475\r c6.528,0,13.064-2.49,18.039-7.475l79.095-79.102l79.094,79.102c4.982,4.98,11.51,7.475,18.039,7.475s13.055-2.49,18.039-7.475\r c9.967-9.965,9.967-26.109,0-36.074l-79.098-79.101l79.094-79.102C546.082,208.599,546.082,192.453,536.115,182.487z"})})}),Object(c.jsx)("div",{className:"modal-body",children:s})]}):null,k)}var S=Object(a.forwardRef)(w),F=s(74),L=s(160),M=s(168),I=s(169),B=s(162),R=s(161),A=Object(u.a)({root:{color:L.a[400],"&$checked":{color:L.a[600]}},checked:{}})((function(e){return Object(c.jsx)(M.a,Object(F.a)({color:"default"},e))}));function H(e){var t=e.pointsAdd,s=e.handlePoints;return Object(c.jsx)(R.a,{id:"RadioPuntos",component:"fieldset",children:Object(c.jsxs)(I.a,{row:!0,"aria-label":"SumaPuntos",name:"points1",value:t,onChange:s,children:[Object(c.jsx)(B.a,{value:"1000",control:Object(c.jsx)(A,{}),label:"1000",labelPlacement:"top"}),Object(c.jsx)(B.a,{value:"5000",control:Object(c.jsx)(A,{}),label:"5000",labelPlacement:"top"}),Object(c.jsx)(B.a,{value:"7500",control:Object(c.jsx)(A,{}),label:"7500",labelPlacement:"top"})]})})}var T=function(e){var t=e.modalBuyClose,s=Object(a.useContext)(z),n=s.initPoints,r=s.sendPostPoints,i=s.pointsResponse,j=s.setPointsResponse,l=s.puntosCuentas,o=s.setPuntosCuentas,b=Object(a.useState)("1000"),O=Object(d.a)(b,2),x=O[0],u=O[1],h=Object(a.useState)(""),m=Object(d.a)(h,2),v=m[0],p=m[1],N=n+parseInt(x),f=l+parseInt(x),g=function(){j({info:"",status:""}),o(null),t()};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h5",{children:"Buy points"}),Object(c.jsx)("div",{className:"ModalInfo",children:""===i.info?Object(c.jsxs)("div",{children:[Object(c.jsx)("h6",{children:"\xbfNecesita adquirir m\xe1s puntos?"}),Object(c.jsx)("em",{children:"El sistema permite sumar 1000, 5000 \xf3 7500 puntos."}),Object(c.jsx)("p",{children:"Seleccione la cantidad de puntos a incrementar."}),Object(c.jsx)(H,{pointsAdd:x,handlePoints:function(e){var t=e.target.value;u(t),p("1000"===x||"5000"===x||"7500"===x?"":"Debe seleccionar uno de los valores indicados.")}}),""!==v?Object(c.jsx)("p",{children:v}):Object(c.jsxs)("p",{children:["Se sumar\xe1n ",Object(c.jsx)("strong",{children:x})," puntos a su cuenta. ",Object(c.jsx)("br",{}),"Su nuevo saldo ser\xe1 de ",Object(c.jsx)("strong",{children:N})," puntos. "]}),Object(c.jsxs)("div",{className:"Actions",children:[Object(c.jsx)("button",{className:"Btn Cancel",onClick:t,children:"Cancel"}),Object(c.jsx)("button",{className:"Btn Ok",onClick:function(){return r(parseInt(x))},children:"OK"})]})]}):Object(c.jsx)("div",{className:"Resp",children:200===i.status?Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"icon",children:Object(c.jsx)("span",{children:Object(c.jsx)("img",{src:y,alt:"Ok"})})}),Object(c.jsxs)("p",{children:[" ",i.info," "]}),Object(c.jsxs)("p",{children:["Su nuevo saldo es de ",Object(c.jsx)("strong",{children:f})," puntos. "]}),Object(c.jsx)("button",{className:"Btn Cancel",onClick:function(){return g()},children:"Cerrar"}),"}"]}):Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"icon",children:Object(c.jsx)("span",{children:Object(c.jsx)("img",{src:P,alt:"error"})})}),Object(c.jsxs)("p",{children:[" ",i.info," "]}),Object(c.jsx)("button",{className:"Btn Cancel",onClick:function(){return g()},children:"Cerrar"})]})})})]})};var E=function(e){var t=Object(a.useContext)(z),s=t.initPoints,n=t.redeemProduct,r=t.setRedeemProduct,i=t.sendPostProduct,j=t.postResponse,l=t.setPostResponse,o=t.puntosCuentas,d=t.setPuntosCuentas,b=e.id,O=e.name,x=e.cost,u=e.category,h=e.img,m="",v=Object(a.useRef)(null),p=Object(a.useRef)(null);s<x&&(m=x-s),"https://coding-challenge-api.aerolab.co/images/Switch-x2.png"===h&&(h=C);var N=s-n.cost,f=o-n.cost,k=function(){l({info:"",status:""}),d(null),v.current.close()};return Object(c.jsxs)("div",{id:b,className:"Product",children:[Object(c.jsx)("figure",{children:Object(c.jsx)("img",{src:h,alt:O})}),Object(c.jsxs)("div",{className:"Info",children:[Object(c.jsx)("p",{children:u}),Object(c.jsxs)("h4",{children:[O," | ",Object(c.jsxs)("strong",{className:"CostDet",children:[x," ",Object(c.jsx)("img",{src:g,alt:"Points"})," "]})]})]}),Object(c.jsx)("div",{className:"Icons",children:s>=x?Object(c.jsx)("span",{className:"Icon Cart"}):Object(c.jsxs)("span",{className:"Icon PointsLess",children:[" ",Object(c.jsxs)("strong",{children:["You need ",m]})," ",Object(c.jsx)("img",{src:g,alt:"Points"})," "]})}),s>=x?Object(c.jsx)("div",{className:"Hover",children:Object(c.jsxs)("div",{className:"vertical-center",children:[Object(c.jsxs)("h5",{children:[x," ",Object(c.jsx)("img",{src:g,alt:"Points"})]}),Object(c.jsx)("button",{onClick:function(){return function(e,t,s){r({id:e,name:t,cost:s}),v.current.open()}(b,O,x)},children:"Redeem now"})]})}):Object(c.jsx)("div",{className:"Hover",children:Object(c.jsx)("div",{className:"vertical-center",children:Object(c.jsx)("button",{onClick:function(){return p.current.open()},children:"Buy points"})})}),null!==n?Object(c.jsxs)(S,{ref:v,children:[Object(c.jsx)("h5",{children:"Redeem now"}),Object(c.jsx)("div",{className:"ModalInfo",children:""===j.info?Object(c.jsxs)("div",{children:[Object(c.jsxs)("h6",{children:["\xbfEst\xe1 seguro de canjear el producto ",Object(c.jsx)("strong",{children:n.name}),"?"]}),Object(c.jsxs)("p",{children:["Se descontar\xe1n ",Object(c.jsx)("strong",{children:n.cost})," puntos de su cuenta."]}),Object(c.jsxs)("p",{children:["Su nuevo saldo ser\xe1 de ",Object(c.jsx)("strong",{children:N})," puntos. "]}),Object(c.jsxs)("div",{className:"Actions",children:[Object(c.jsx)("button",{className:"Btn Cancel",onClick:function(){return v.current.close()},children:"Cancel"}),Object(c.jsx)("button",{className:"Btn Ok",onClick:function(){return i(n.id)},children:"OK"})]})]}):Object(c.jsx)("div",{className:"Resp",children:200===j.status?Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"icon",children:Object(c.jsx)("span",{children:Object(c.jsx)("img",{src:y,alt:"Ok"})})}),Object(c.jsxs)("p",{children:[" ",j.info," "]}),Object(c.jsxs)("p",{children:[" Su nuevo saldo es de ",Object(c.jsx)("strong",{children:f})," puntos. "]}),Object(c.jsx)("button",{className:"Btn Cancel",onClick:function(){return k()},children:"Cerrar"})]}):Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"icon",children:Object(c.jsx)("span",{children:Object(c.jsx)("img",{src:P,alt:"error"})})}),Object(c.jsxs)("p",{children:[" ",j.info," "]}),Object(c.jsx)("button",{className:"Btn Cancel",onClick:function(){return k()},children:"Cerrar"})]})})})]}):"",Object(c.jsx)(S,{ref:p,children:Object(c.jsx)(T,{modalBuyClose:function(e){p.current.close()}})})]})},z=n.a.createContext(),D=function(e){var t=e.children,s=Object(a.useState)([]),n=Object(d.a)(s,2),r=n[0],i=n[1],j=Object(a.useState)(!1),l=Object(d.a)(j,2),b=l[0],x=l[1],u=Object(a.useState)([]),h=Object(d.a)(u,2),p=h[0],N=h[1],g=Object(a.useState)(!1),C=Object(d.a)(g,2),y=C[0],P=C[1],k=Object(a.useState)([]),w=Object(d.a)(k,2),S=w[0],F=w[1],L=Object(a.useState)("Todas"),M=Object(d.a)(L,2),I=M[0],B=M[1],R=Object(a.useState)(!0),A=Object(d.a)(R,2),H=A[0],T=A[1],D=Object(a.useState)(!1),U=Object(d.a)(D,2),W=U[0],_=U[1],J=Object(a.useState)(""),G=Object(d.a)(J,2),q=G[0],X=G[1],Z=Object(a.useState)([]),Q=Object(d.a)(Z,2),V=Q[0],Y=Q[1],$=Object(a.useState)(104),K=Object(d.a)($,2),ee=K[0],te=K[1],se=Object(a.useState)([]),ce=Object(d.a)(se,2),ae=ce[0],ne=ce[1],re=Object(a.useState)(!1),ie=Object(d.a)(re,2),je=ie[0],le=ie[1],oe=Object(a.useState)(!0),de=Object(d.a)(oe,2),be=de[0],Oe=de[1],xe=Object(a.useState)(m),ue=Object(d.a)(xe,2),he=ue[0],me=ue[1],ve=Object(a.useState)({info:"",status:""}),pe=Object(d.a)(ve,2),Ne=pe[0],fe=pe[1],ge=Object(a.useState)({info:"",status:""}),Ce=Object(d.a)(ge,2),ye=Ce[0],Pe=Ce[1],ke=Object(a.useState)(null),we=Object(d.a)(ke,2),Se=we[0],Fe=we[1],Le=S.length,Me=Object(a.useState)(1),Ie=Object(d.a)(Me,2),Be=Ie[0],Re=Ie[1],Ae=Math.ceil(Le/16),He=f(S,16),Te=He.currentData().map((function(e){return Object(c.jsx)(E,{id:e._id,name:e.name,cost:e.cost,category:e.category,img:e.img.hdUrl},e._id)}));Object(a.useEffect)((function(){Ee(),ze(),De()}),[]);var Ee=function(){O.a.get("https://coding-challenge-api.aerolab.co/user/me",{headers:v}).then((function(e){i(e.data),x(!0),X(e.data.points)}))},ze=function(e){O.a.get("https://coding-challenge-api.aerolab.co/products",{headers:v}).then((function(e){N(e.data),F("Todas"===I?e.data:[]);var t=e.data.map((function(e){return e.category})),s=Object(o.a)(new Set(t));Y(s.sort()),P(!0)}))},De=function(){O.a.get("https://coding-challenge-api.aerolab.co/user/history",{headers:v}).then((function(e){var t=e.data.reverse();ne(t),le(!0)}))};return Object(c.jsx)(z.Provider,{value:{user:r,setUser:i,userFetched:b,setUserFetched:x,products:p,setProducts:N,getProducts:ze,productsFetched:y,setProductsFetched:P,FilterProdcts:function(e){if("Todas"===e)F(p),B("Todas"),Re(1),He.jump(1);else{var t=p.filter((function(t){return t.category===e}));Re(1),He.jump(1),F(t),B(e)}},filterProducts:S,filterTerm:I,setFilterTerm:B,setFilterProducts:F,prodctsCount:Le,count:Ae,page:Be,PER_PAGE:16,handlePageChange:function(e,t){Re(t),He.jump(t)},productsList:Te,OrderProdcts:function(e){var t=e,s=[];T(e),s=t?S.sort((function(e,t){return parseFloat(e.cost)-parseFloat(t.cost)})):S.sort((function(e,t){return parseFloat(t.cost)-parseFloat(e.cost)})),F(s)},filterPrice:H,setFilterPrice:T,initPoints:q,setInitPoints:X,filterAlpha:W,OrderAlpha:function(e){var t=e,s=[];_(e),s=t?S.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:t.name.toLowerCase()>e.name.toLowerCase()?-1:0})):S.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:t.name.toLowerCase()>e.name.toLowerCase()?-1:0})).reverse(),F(s)},comboCategory:V,setComboCategory:Y,xPosition:ee,toggleMenuUser:function(){te(104===ee?69:104)},history:ae,setHistory:ne,historyFetched:je,filterHistory:be,setFilterHistory:Oe,OrderHistory:function(e){Oe(e),ae.reverse()},redeemProduct:he,setRedeemProduct:me,sendPostProduct:function(e){(function(e){var t={productId:e};return O.a.post("https://coding-challenge-api.aerolab.co/redeem",t,{headers:v})})(e).then((function(e){fe({info:"Ha canjeado sus puntos con \xe9xito.",status:e.status}),Fe(q),Ee(),De()})).catch((function(e){fe({info:"Se ha producido un error.",status:e})}))},postResponse:Ne,setPostResponse:fe,sendPostPoints:function(e){(function(e){var t={amount:e};return O.a.post("https://coding-challenge-api.aerolab.co/user/points",t,{headers:v})})(e).then((function(e){Pe({info:"Ha canjeado sus puntos con \xe9xito.",status:e.status}),Fe(q),Ee()})).catch((function(e){Pe({info:"Se ha producido un error.",status:e})}))},pointsResponse:ye,setPointsResponse:Pe,puntosCuentas:Se,setPuntosCuentas:Fe},children:t})},U=s.p+"static/media/aerolab-logo.0a8fb170.svg";function W(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"LinearLoader",children:[Object(c.jsx)("div",{className:"bar1"}),Object(c.jsx)("div",{className:"bar2"}),Object(c.jsx)("div",{className:"bar3"}),Object(c.jsx)("div",{className:"bar4"}),Object(c.jsx)("div",{className:"bar5"}),Object(c.jsx)("div",{className:"bar6"})]})})}var _=function(){var e=Object(a.useContext)(z),t=e.user,s=e.userFetched,n=e.toggleMenuUser,r=Object(a.useRef)(null);return Object(c.jsxs)("header",{children:[Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"ColLeft",children:Object(c.jsx)(j.c,{to:"/",exact:!0,activeClassName:"Acti-ve Nav-Link",children:Object(c.jsx)("h1",{children:Object(c.jsx)("img",{className:"Logo",src:U,alt:"Logo"})})})}),Object(c.jsx)("div",{className:"ColRight",children:Object(c.jsx)("h2",{className:"UserName",children:s?Object(c.jsxs)("strong",{children:[Object(c.jsxs)("em",{className:"UsName",children:["Hola ",Object(c.jsx)("strong",{children:t.name})," "]}),Object(c.jsxs)("span",{className:"Points",children:[t.points," ",Object(c.jsx)("img",{src:g,alt:"Puntos"})]}),Object(c.jsx)("span",{className:"BuyPoints",onClick:function(){return r.current.open()},children:"\xa0"}),Object(c.jsx)("span",{className:"Config",onClick:function(){return n()},children:"\xa0"})]}):Object(c.jsxs)("em",{children:[Object(c.jsx)("span",{className:"Loader Inline",children:Object(c.jsx)(W,{})}),"cargando usuario..."]})})})]}),Object(c.jsx)(S,{ref:r,children:Object(c.jsx)(T,{modalBuyClose:function(e){r.current.close()}})})]})},J=s.p+"static/media/header-x2.cc65119a.png";var G=function(e){var t=e.bannerAlt,s=e.bannerSection,a=s?"/"+s:"";return Object(c.jsx)("section",{className:"Banner",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"Col-100",children:Object(c.jsxs)("figure",{children:[Object(c.jsx)("img",{src:J,alt:t}),Object(c.jsxs)("figcaption",{children:["Electronics"," ",a]})]})})})})},q=s(170),X=s(171),Z=s(163),Q=s(165),V=s(164),Y=s(114);var $=function(){var e=Object(a.useContext)(z),t=e.productsFetched,s=e.comboCategory,n=e.FilterProdcts,r=e.filterTerm,i=e.setFilterPrice,j=e.setFilterProducts,l=e.filterProducts,o=e.filterAlpha,b=e.OrderAlpha,O=p(),x=Object(a.useState)(""),u=Object(d.a)(x,2),h=u[0],m=u[1],v=function(e){var t=[];i(e),"Lowest"===e?(m("Lowest"),t=l.sort((function(e,t){return parseFloat(e.cost)-parseFloat(t.cost)}))):(m("Highest"),t=l.sort((function(e,t){return parseFloat(t.cost)-parseFloat(e.cost)}))),j(t)};return Object(c.jsx)("div",{className:"UserActions",children:Object(c.jsx)("div",{className:"container",children:t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(R.a,{id:"W-310",className:O.formControl,children:[Object(c.jsx)(q.a,{shrink:!0,id:"demo-simple-select-placeholder-label-label",children:"Categor\xeda:"}),Object(c.jsxs)(Q.a,{labelId:"demo-simple-select-placeholder-label-label",id:"demo-simple-select-placeholder-label",value:r,onChange:function(e){return n(e.target.value)},className:O.selectEmpty,children:[Object(c.jsx)(X.a,{value:"Todas",children:"Todas"}),s.map((function(e,t){return Object(c.jsx)(X.a,{value:e,children:e},t)}))]}),Object(c.jsx)(Z.a,{children:"Seleccionar categor\xeda"})]}),Object(c.jsx)("button",{name:"Lowest",className:"BtnFilterPrice ".concat("Lowest"===h?"active":""),onClick:function(e){return v(e.target.name)},children:"Lowest price"}),Object(c.jsx)("button",{name:"Highest",className:"BtnFilterPrice Lst ".concat("Highest"===h?"active":""),onClick:function(e){return v(e.target.name)},children:"Highest price"}),Object(c.jsx)(R.a,{id:"FilterAlpha",className:O.formControl,children:Object(c.jsx)(Y.a,{component:"div",children:Object(c.jsxs)(V.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(c.jsx)(V.a,{item:!0,children:"Z-A"}),Object(c.jsx)(V.a,{item:!0,children:Object(c.jsx)(N,{checked:o,onChange:function(e){return b(e.target.checked)},name:"checkedAlpha"})}),Object(c.jsx)(V.a,{item:!0,children:"A-Z"})]})})})]}):Object(c.jsx)("div",{className:"WrapLoaderIn",children:Object(c.jsxs)("em",{children:[Object(c.jsx)("span",{className:"Loader Inline",children:Object(c.jsx)(W,{})}),"cargando categorias y filtros..."]})})})})},K=s(166);var ee=function(){var e,t=Object(a.useContext)(z),s=t.prodctsCount,n=t.count,r=t.page,i=t.PER_PAGE,j=t.handlePageChange;return s<i&&1===r?e=s+" of "+s+"products":s>=i&&1===r?e=i+" of "+s+"products":s>=i&&2===r&&(e=s+" of "+s+"products"),Object(c.jsx)("div",{className:"Paginate",children:Object(c.jsx)("div",{className:"cont-ainer",children:Object(c.jsxs)("div",{className:"FullWidth PagInfo",children:[Object(c.jsx)("p",{children:e}),Object(c.jsx)(K.a,{count:n,size:"large",page:r,variant:"outlined",shape:"rounded",onChange:j})]})})})};function te(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"Loader",children:Object(c.jsxs)("div",{className:"contLoad",children:[Object(c.jsxs)("svg",{className:"loader",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 340 340",children:[Object(c.jsx)("circle",{cx:"170",cy:"170",r:"160",stroke:"#15caf6"}),Object(c.jsx)("circle",{cx:"170",cy:"170",r:"135",stroke:"#404041"}),Object(c.jsx)("circle",{cx:"170",cy:"170",r:"110",stroke:"#15caf6"}),Object(c.jsx)("circle",{cx:"170",cy:"170",r:"85",stroke:"#404041"})]}),Object(c.jsx)("em",{children:"Cargando productos..."})]})})})}var se=function(){var e=Object(a.useContext)(z),t=e.productsFetched,s=e.productsList;return Object(c.jsx)("section",{className:"SectProds",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"FullWidth",children:Object(c.jsx)("div",{className:"Products",children:t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(ee,{}),Object(c.jsx)("div",{className:"WrapProds",children:s}),Object(c.jsx)(ee,{})]}):Object(c.jsx)(te,{})})})})})};var ce=function(e){var t=e.idOp,s=e.category,a=e.cost,n=e.createDate,r=e.name,i=e.img,j=n.substring(0,10).split("-"),l=j[0],o=j[1],d=j[2]+"/"+o+"/"+l;return Object(c.jsxs)("div",{id:t,className:"Product Redeem",children:[Object(c.jsx)("figure",{children:Object(c.jsx)("img",{src:i,alt:r})}),Object(c.jsxs)("div",{className:"Info",children:[Object(c.jsx)("p",{children:s}),Object(c.jsxs)("h4",{children:[" ",Object(c.jsx)("strong",{children:r})," | ",a," points"]}),Object(c.jsxs)("p",{children:[" Canjeado el: ",d," "]}),Object(c.jsxs)("p",{children:[" ID: ",t," "]})]})]})},ae=s.p+"static/media/worker.b53a8a7e.png";var ne=function(e){var t,s=e.width,n=e.height,r=(e.children,Object(a.useContext)(z)),i=r.user,l=r.userFetched,o=r.xPosition,d=r.toggleMenuUser,b=r.history,O=r.historyFetched,x=r.filterHistory,u=r.OrderHistory,h=Object(a.useRef)(null),m=p();return t=0===b.length?Object(c.jsxs)("h6",{children:["Todav\xeda no ha canjeado ",Object(c.jsx)("br",{})," ning\xfan producto."]}):b.slice(0,3).map((function(e,t){return Object(c.jsx)(ce,{idOp:e._id,idProd:e.productId,category:e.category,cost:e.cost,createDate:e.createDate,name:e.name,img:e.img.hdUrl},t)})),Object(c.jsxs)("div",{className:"side-bar W-".concat(o),style:{transform:"translatex(".concat(o,"vw)"),width:"".concat(s,"vw"),minHeight:n},children:[Object(c.jsx)("button",{onClick:function(){return d()},className:"toggle-menu",style:{transform:"translate(".concat(-10,"px, 20vh)")}}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("div",{className:"CloseBtn",onClick:function(){return d()},children:Object(c.jsx)("svg",{id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 286.054 286.054",width:"40",height:"40",children:Object(c.jsx)("g",{children:Object(c.jsx)("path",{style:{fill:"#6ee8ff"},d:"M168.352,142.924l25.28-25.28c3.495-3.504,3.495-9.154,0-12.64l-12.64-12.649\r c-3.495-3.486-9.145-3.495-12.64,0l-25.289,25.289l-25.271-25.271c-3.504-3.504-9.163-3.504-12.658-0.018l-12.64,12.649\r c-3.495,3.486-3.486,9.154,0.018,12.649l25.271,25.271L92.556,168.15c-3.495,3.495-3.495,9.145,0,12.64l12.64,12.649\r c3.495,3.486,9.145,3.495,12.64,0l25.226-25.226l25.405,25.414c3.504,3.504,9.163,3.504,12.658,0.009l12.64-12.64\r c3.495-3.495,3.486-9.154-0.009-12.658L168.352,142.924z M143.027,0.004C64.031,0.004,0,64.036,0,143.022\r c0,78.996,64.031,143.027,143.027,143.027s143.027-64.031,143.027-143.027C286.054,64.045,222.022,0.004,143.027,0.004z\r M143.027,259.232c-64.183,0-116.209-52.026-116.209-116.209s52.026-116.21,116.209-116.21s116.209,52.026,116.209,116.209\r S207.21,259.232,143.027,259.232z"})})})}),Object(c.jsxs)("div",{className:"Userinfo",children:[Object(c.jsx)("figure",{children:Object(c.jsx)("img",{src:ae,alt:i.name})}),Object(c.jsxs)("h2",{className:"UserName",children:["Hola  "," ",l?Object(c.jsxs)("strong",{children:[i.name," "," ",Object(c.jsxs)("span",{className:"Points",children:[i.points," ",Object(c.jsx)("img",{src:g,alt:"Puntos"})]}),Object(c.jsx)("span",{className:"BuyPoints",onClick:function(){return h.current.open()},children:"\xa0"})]}):Object(c.jsxs)("em",{children:[Object(c.jsx)("span",{className:"Loader Inline",children:Object(c.jsx)(W,{})}),"cargando usuario..."]})]})]}),Object(c.jsx)("div",{className:"HistRedeem",children:O?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"WrpTitle",children:[Object(c.jsx)("h3",{children:"Productos canjeados:"}),Object(c.jsx)(R.a,{id:"FilterHistory",className:m.formControl,children:Object(c.jsx)(Y.a,{component:"div",children:Object(c.jsxs)(V.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(c.jsx)(V.a,{item:!0,children:"M\xe1s antiguo"}),Object(c.jsx)(V.a,{item:!0,children:Object(c.jsx)(N,{checked:x,onChange:function(e){return u(e.target.checked)},name:"checkedHistory"})}),Object(c.jsx)(V.a,{item:!0,children:"M\xe1s reciente"})]})})})]}),Object(c.jsxs)("div",{children:[t," "]}),b.length>0?Object(c.jsx)(j.b,{to:"/history",children:Object(c.jsx)("button",{className:"btnAll",onClick:function(){return d()},children:" Ver todos los productos canjeados"})}):""]}):Object(c.jsxs)("em",{children:[Object(c.jsx)("span",{className:"Loader Inline",children:Object(c.jsx)(W,{})}),"cargando historial..."]})})]}),Object(c.jsx)(S,{ref:h,children:Object(c.jsx)(T,{modalBuyClose:function(e){h.current.close()}})})]})};var re=function(){return Object(c.jsxs)("div",{id:"AppStoreInn",children:[Object(c.jsx)(ne,{width:30,height:"100vh"}),Object(c.jsx)(_,{}),Object(c.jsx)(G,{bannerAlt:"electronics"}),Object(c.jsx)($,{}),Object(c.jsx)(se,{})]})};var ie=function(){var e,t=Object(a.useContext)(z),s=t.history,n=t.historyFetched,r=t.filterHistory,i=t.OrderHistory,l=p();return e=0===s.length?Object(c.jsxs)("h6",{children:["Todav\xeda no ha canjeado ",Object(c.jsx)("br",{})," ning\xfan producto."]}):s.map((function(e,t){return Object(c.jsx)(ce,{idOp:e._id,idProd:e.productId,category:e.category,cost:e.cost,createDate:e.createDate,name:e.name,img:e.img.hdUrl},t+"-"+e._id)})),Object(c.jsxs)("div",{id:"History",children:[Object(c.jsx)(ne,{width:30,height:"100vh"}),Object(c.jsx)(_,{}),Object(c.jsx)(G,{bannerAlt:"electronics",bannerSection:"history"}),Object(c.jsx)("div",{className:"HistRedeem",children:Object(c.jsx)("div",{className:"container",children:n?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"WrpTitle",children:[Object(c.jsx)("h3",{children:"Productos canjeados:"}),Object(c.jsx)(R.a,{id:"FilterHistory",className:l.formControl,children:Object(c.jsx)(Y.a,{component:"div",children:Object(c.jsxs)(V.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(c.jsx)(V.a,{item:!0,children:"M\xe1s antiguo"}),Object(c.jsx)(V.a,{item:!0,children:Object(c.jsx)(N,{checked:r,onChange:function(e){return i(e.target.checked)},name:"checkedHistory"})}),Object(c.jsx)(V.a,{item:!0,children:"M\xe1s reciente"})]})})})]}),Object(c.jsxs)("div",{className:"ProdGrid",children:[e," "]}),Object(c.jsx)(j.c,{exact:!0,to:"/",children:Object(c.jsx)("button",{className:"btnAll w40",children:" Volver "})})]}):Object(c.jsx)(te,{})})})]})},je=function(){return Object(c.jsxs)("section",{className:"Wrap404",children:[Object(c.jsxs)("div",{className:"stars",children:[Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"})]}),Object(c.jsxs)("div",{className:"center",children:[Object(c.jsx)("div",{className:"circle circle--outer"}),Object(c.jsxs)("div",{className:"circle circle--inner",children:[Object(c.jsx)("div",{className:"four four--1",children:"4"}),Object(c.jsx)("div",{className:"four four--2",children:"4"}),Object(c.jsxs)("div",{className:"circle oh",children:[Object(c.jsxs)("div",{className:"astronaut",children:[Object(c.jsx)("div",{className:"astronaut-backpack"}),Object(c.jsx)("div",{className:"astronaut-head"}),Object(c.jsxs)("div",{className:"astronaut-antena antena--left",children:[Object(c.jsx)("div",{className:"ear-down"}),Object(c.jsx)("div",{className:"ear-up"}),Object(c.jsx)("div",{className:"antena"}),Object(c.jsx)("div",{className:"antena-tip"})]}),Object(c.jsxs)("div",{className:"astronaut-antena antena--right",children:[Object(c.jsx)("div",{className:"ear-down"}),Object(c.jsx)("div",{className:"ear-up"}),Object(c.jsx)("div",{className:"antena"}),Object(c.jsx)("div",{className:"antena-tip"})]}),Object(c.jsxs)("div",{className:"astronaut-helmet",children:[Object(c.jsx)("div",{className:"astronaut-glass"}),Object(c.jsx)("div",{className:"glow glow--1"}),Object(c.jsx)("div",{className:"glow glow--2"})]}),Object(c.jsx)("div",{className:"astronaut-body"})]}),Object(c.jsx)("svg",{className:"astronaut-wire",viewBox:"-9 -9 259 823",width:"259",height:"823",children:Object(c.jsx)("path",{d:"M241 0c-24 54-30 113-78 148S63 159 27 215c-35 55 32 102 73 141s103 94 98 166c-6 97-169 66-192 157-10 43-8 84 9 126",fill:"none",strokeWidth:"6",stroke:"#FFF"})}),Object(c.jsx)("div",{className:"circle planet",children:Object(c.jsxs)("div",{className:"craters",children:[Object(c.jsx)("div",{className:"crater crater--1"}),Object(c.jsx)("div",{className:"crater crater--2"}),Object(c.jsx)("div",{className:"crater crater--3"}),Object(c.jsx)("div",{className:"crater crater--4"}),Object(c.jsx)("div",{className:"crater crater--5"}),Object(c.jsx)("div",{className:"crater crater--6"})]})}),Object(c.jsxs)("div",{className:"astronaut-hands",children:[Object(c.jsx)("div",{className:"astronaut-hand hand--left",children:Object(c.jsxs)("svg",{width:"35",height:"75",children:[Object(c.jsx)("path",{d:"M30.23 17.209c-7.925 5.118-11.657 12.786-11.226 22.975-7.113.934-12.948 4.345-18.44 5.117C-1.951 26.539 3.92 9.346 18.635 1.369 30.66-4.39 39.53 9.398 30.23 17.209z",fill:"#D2D2D2"}),Object(c.jsxs)("g",{fill:"none",stroke:"#999",strokeLinecap:"round",children:[Object(c.jsx)("path",{d:"M11.78 6.977c7.983.129 13.547 3.968 16.308 11.111M4.67 17.161c7.307-.379 13.1 1.924 17.93 6.94"}),Object(c.jsx)("path",{d:"M.816 31.334c6.439-2.441 12.295-1.746 18.149 2.488",strokeLinejoin:"round"})]}),Object(c.jsxs)("g",{fill:"#fff",children:[Object(c.jsx)("path",{d:"M7.721 37.171c5.875-1.994 12.264 1.156 14.258 7.031l1.218 3.588c1.995 5.875-1.156 12.264-7.03 14.258-5.875 1.995-12.264-1.156-14.259-7.031L.69 51.429c-1.994-5.875 1.156-12.263 7.031-14.258z"}),Object(c.jsx)("path",{d:"M7.829 38.159c5.794-1.967 12.094 1.14 14.061 6.934l5.044 14.855c1.967 5.794-1.14 12.095-6.934 14.062-5.794 1.967-12.095-1.14-14.062-6.934L.895 52.221c-1.967-5.794 1.14-12.095 6.934-14.062z"}),Object(c.jsx)("path",{d:"M16.863 39.472l12.879 7.384a3.876 3.876 0 0 1 1.433 5.287 3.875 3.875 0 0 1-5.286 1.433l-12.878-7.384a3.874 3.874 0 0 1-1.434-5.286 3.874 3.874 0 0 1 5.286-1.434z"})]})]})}),Object(c.jsx)("div",{className:"astronaut-hand hand--right",children:Object(c.jsxs)("svg",{width:"35",height:"75",children:[Object(c.jsx)("path",{d:"M30.23 17.209c-7.925 5.118-11.657 12.786-11.226 22.975-7.113.934-12.948 4.345-18.44 5.117C-1.951 26.539 3.92 9.346 18.635 1.369 30.66-4.39 39.53 9.398 30.23 17.209z",fill:"#D2D2D2"}),Object(c.jsxs)("g",{fill:"none",stroke:"#999",strokeLinecap:"round",children:[Object(c.jsx)("path",{d:"M11.78 6.977c7.983.129 13.547 3.968 16.308 11.111M4.67 17.161c7.307-.379 13.1 1.924 17.93 6.94"}),Object(c.jsx)("path",{d:"M.816 31.334c6.439-2.441 12.295-1.746 18.149 2.488",strokeLinejoin:"round"})]}),Object(c.jsxs)("g",{fill:"#fff",children:[Object(c.jsx)("path",{d:"M7.721 37.171c5.875-1.994 12.264 1.156 14.258 7.031l1.218 3.588c1.995 5.875-1.156 12.264-7.03 14.258-5.875 1.995-12.264-1.156-14.259-7.031L.69 51.429c-1.994-5.875 1.156-12.263 7.031-14.258z"}),Object(c.jsx)("path",{d:"M7.829 38.159c5.794-1.967 12.094 1.14 14.061 6.934l5.044 14.855c1.967 5.794-1.14 12.095-6.934 14.062-5.794 1.967-12.095-1.14-14.062-6.934L.895 52.221c-1.967-5.794 1.14-12.095 6.934-14.062z"}),Object(c.jsx)("path",{d:"M16.863 39.472l12.879 7.384a3.876 3.876 0 0 1 1.433 5.287 3.875 3.875 0 0 1-5.286 1.433l-12.878-7.384a3.874 3.874 0 0 1-1.434-5.286 3.874 3.874 0 0 1 5.286-1.434z"})]})]})})]})]}),Object(c.jsx)(j.c,{to:"/",exact:!0,activeClassName:"Acti-ve Nav-Link",children:Object(c.jsx)("div",{className:"button",children:"GO HOME"})})]}),Object(c.jsx)("div",{className:"sorry",children:"Oops! Sorry, page not found."})]})]})};s(112);var le=function(){return Object(c.jsx)(D,{children:Object(c.jsx)("div",{id:"AppStore",children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/store-pompei-nancy/",component:re}),Object(c.jsx)(l.a,{exact:!0,path:"/store-pompei-nancy/history",component:ie}),Object(c.jsx)(l.a,{component:je})]})})})},oe=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,172)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),n(e),r(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(j.a,{children:Object(c.jsx)(le,{})})}),document.getElementById("root")),oe()},84:function(e,t,s){}},[[113,1,2]]]);
//# sourceMappingURL=main.9663abb8.chunk.js.map