(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bdd9f4e"],{"01db":function(t,a,n){},"1ba7":function(t,a,n){"use strict";var i=n("01db"),e=n.n(i);e.a},7390:function(t,a,n){"use strict";n.r(a);var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"ranking"}},[n("div",{staticClass:"content"},[n("transition-group",{attrs:{"enter-active-class":"animated zoomInRight","leave-active-class":"animated rotateInDownRight","delay-2s":"",tag:"div"}},t._l(t.rankarr,(function(a,i){return n("div",{key:i,staticClass:"wrap"},[n("router-link",{attrs:{to:"/ranking/"+a.id}},[n("div",{staticClass:"img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.coverImgUrl,expression:"item.coverImgUrl"}]}),n("div",{staticClass:"title"},[t._v(t._s(a.updateFrequency))])])])],1)})),0)],1)])},e=[],r={name:"ranking",data:function(){return{rankarr:[]}},methods:{getdetail:function(){var t=this;this.axios.get("/toplist/detail").then((function(a){t.rankarr=a.data.list}))}},mounted:function(){this.getdetail()}},s=r,c=(n("1ba7"),n("2877")),o=Object(c["a"])(s,i,e,!1,null,"14d8db7b",null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-7bdd9f4e.085e7c91.js.map