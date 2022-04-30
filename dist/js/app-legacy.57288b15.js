(function(){"use strict";var t={5509:function(t,e,o){o(6992),o(8674),o(9601),o(7727);var i=o(9567),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("LoadingPage"),o("MenuM")],1)},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body vh-100"},[i("button",{directives:[{name:"show",rawName:"v-show",value:t.texto||t.clase,expression:"texto || clase"}],on:{click:t.volver}},[i("b-row",{staticClass:"volver",attrs:{"align-h":"end"}},[i("b-col",{attrs:{cols:"5"}},[i("svg",{staticClass:"bi bi-arrow-left-circle-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"}})])])],1)],1),i("div",{staticClass:"logo_nombre"},[i("b-container",[i("b-row",{attrs:{"align-v":"center"}},[i("b-col",{staticClass:"text-center",attrs:{cols:"3"}},[i("img",{attrs:{src:o(5111),alt:"logo"}})]),i("b-col",{attrs:{id:"u",cols:"9"}},[i("h1",[t._v("Coffe express")])])],1)],1)],1),i("div",{staticClass:"buscador"},[i("div",{staticClass:"container_input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filtro,expression:"filtro"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Buscar"},domProps:{value:t.filtro},on:{input:function(e){e.target.composing||(t.filtro=e.target.value)}}}),i("svg",{staticClass:"input-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"}})])])]),i("br"),i("br"),i("b-container",[i("b-row",{staticClass:"justify-content-center"},[i("b-col",{staticClass:"text-center",attrs:{cols:"10"}},[t._l(t.categorias,(function(e){return i("div",{directives:[{name:"show",rawName:"v-show",value:!t.texto&&!t.clase,expression:"!texto && !clase"}],key:e.tipo,staticClass:"card"},[i("button",{on:{click:function(o){return t.click(e.tipo)}}},[i("img",{staticClass:"card-img-top",attrs:{loading:"lazy",src:e.img}}),i("div",{staticClass:"card-body"},[i("h1",{staticClass:"card-title"},[t._v(t._s(e.tipo))])])])])})),t._l(t.arrayFiltrado,(function(e,o){return i("div",{directives:[{name:"show",rawName:"v-show",value:e.tipo==t.clase||t.texto,expression:"show.tipo == clase || texto"}],key:o+1},[i("keep-alive",[i("CardS",{attrs:{name:e.nombre,precio:e.precio,img:e.img}})],1)],1)})),t.vacio?i("div",{staticClass:"card"},[i("img",{staticClass:"vacio",attrs:{src:o(8452)}}),i("div",{staticClass:"card-body"},[i("h1",{staticClass:"card-title vacio"},[t._v(" En este momento no tenemos el producto ")])])]):t._e()],2)],1)],1)],1)},s=[],c=(o(4916),o(5306),o(7327),o(1539),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card"},[o("img",{staticClass:"card-img-top",attrs:{src:t.img,loading:"lazy"}}),o("div",{staticClass:"card-body"},[o("h1",{staticClass:"card-title"},[t._v(t._s(t.name))]),o("h3",{staticClass:"card-title"},[t._v(t._s(t.precio))])])])}),l=[],u={name:"CardS",props:{name:{type:String,default:"Click"},precio:{type:String,default:"Click"},img:{type:String,default:"Click"}},created:function(){console.log("hola")}},p=u,d=o(1001),f=(0,d.Z)(p,c,l,!1,null,"28f4bb1c",null),g=f.exports,m={name:"MenuM",props:{msg:String},components:{CardS:g},data:function(){return{busqueda:"",productos:[{nombre:" Café ",tipo:"Bebidas calientes",img:o(8296),precio:"$800"},{nombre:" Mocca ",tipo:"Bebidas calientes",img:o(4238),precio:"$2.600"},{nombre:" Tinto ",tipo:"Bebidas calientes",img:o(7035),precio:"$600"},{nombre:" Helado ",tipo:"Postres",img:o(6871),precio:"$3.000"},{nombre:" croissant ",tipo:"Parva",img:o(4655),precio:"$2.500"},{nombre:" Pan perro ",tipo:"Parva",img:o(4580),precio:"$2.000"}],categorias:[{tipo:"Bebidas calientes",img:o(4053)},{tipo:"Postres",img:o(6871)},{tipo:"Licores",img:o(5135)},{tipo:"Parva",img:o(7311)}],arrayFiltrado:[],texto:"",loaded:!1,vacio:!1,clase:""}},created:function(){this.arrayFiltrado=this.productos},computed:{filtro:{get:function(){return this.texto},set:function(t){this.texto=t,t=t.toLowerCase(),t=t.normalize("NFD").replace(/[\u0300-\u036f]/g,""),this.arrayFiltrado=this.productos.filter((function(e){return-1!==e.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().indexOf(t)})),this.vacioFuncion()}}},methods:{vacioFuncion:function(){0==this.arrayFiltrado.length||""===this.texto.length?this.vacio=!0:this.vacio=!1},click:function(t){this.arrayFiltrado=this.productos,this.arrayFiltrado=this.productos.filter((function(e){return-1!==e.tipo.indexOf(t)})),this.clase=t},volver:function(){this.clase="",this.texto="",this.vacio=!1}}},v=m,h=(0,d.Z)(v,n,s,!1,null,"2e80a838",null),b=h.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isloader,expression:"!isloader"}],staticClass:"splash"},[i("div",{staticClass:"logo_nombre"},[i("b-container",{staticClass:"grid-wrapper"},[i("b-row",{staticClass:"justify-content-center"},[i("b-col",{staticClass:"text-center",attrs:{"align-self":"center",cols:"6"}},[i("img",{attrs:{src:o(5111),alt:"logo"}})])],1),i("b-row",{staticClass:"justify-content-center"},[i("b-col",{attrs:{"align-self":"center",id:"u",cols:"9"}},[i("h1",[t._v("Coffe express")])])],1)],1)],1)])])},C=[],w={name:"LoadingPage",props:{msg:String},data:function(){return{isloader:!1}},mounted:function(){var t=this;document.onreadystatechange=function(){"complete"==document.readyState&&(t.isloader=!0)}}},y=w,_=(0,d.Z)(y,x,C,!1,null,"4b41e088",null),j=_.exports,k={name:"App",components:{MenuM:b,LoadingPage:j}},O=k,P=(0,d.Z)(O,r,a,!1,null,null,null),S=P.exports,M=o(8262),F=o(3266),$=(o(44),o(7729)),z=o.n($);i["default"].use(M.XG7),i["default"].use(F.A7),i["default"].use(z()),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(S)}}).$mount("#app")},5111:function(t,e,o){t.exports=o.p+"img/logo.ef563149.svg"},8452:function(t,e,o){t.exports=o.p+"img/search.941d2dfb.svg"},8296:function(t,e,o){t.exports=o.p+"img/cafe.fe609cac.jpg"},4053:function(t,e,o){t.exports=o.p+"img/cafe1.12b78f53.jpg"},4655:function(t,e,o){t.exports=o.p+"img/croissant.4cb79bec.jpg"},6871:function(t,e,o){t.exports=o.p+"img/helado.7b07b5f8.jpg"},4238:function(t,e,o){t.exports=o.p+"img/mocca.a72c5207.jpg"},7311:function(t,e,o){t.exports=o.p+"img/pan.45c1ccaa.jpg"},4580:function(t,e,o){t.exports=o.p+"img/pan_perro.a76e4b9a.jpg"},7035:function(t,e,o){t.exports=o.p+"img/tinto.1e62678a.jpg"},5135:function(t,e,o){t.exports=o.p+"img/vino.174bdcca.jpg"}},e={};function o(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=t,function(){var t=[];o.O=function(e,i,r,a){if(!i){var n=1/0;for(u=0;u<t.length;u++){i=t[u][0],r=t[u][1],a=t[u][2];for(var s=!0,c=0;c<i.length;c++)(!1&a||n>=a)&&Object.keys(o.O).every((function(t){return o.O[t](i[c])}))?i.splice(c--,1):(s=!1,a<n&&(n=a));if(s){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[i,r,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){o.p="/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,a,n=i[0],s=i[1],c=i[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var u=c(o)}for(e&&e(i);l<n.length;l++)a=n[l],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},i=self["webpackChunkcoffee_express"]=self["webpackChunkcoffee_express"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(5509)}));i=o.O(i)})();
//# sourceMappingURL=app-legacy.57288b15.js.map