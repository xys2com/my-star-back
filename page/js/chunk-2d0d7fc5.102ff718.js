(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7fc5"],{"78c1":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"100vw",height:"100vh",margin:"0 auto"}},[a("div",{staticStyle:{width:"800px",height:"600px",margin:"0 auto"}},[a("easy-canvas",{on:{ready:e.initCanvas}},[a("e-line",{attrs:{points:[[100,200],[200,200]],"line-width":e.lw,color:"red"}}),a("e-square",{attrs:{position:{x:e.square.x,y:e.square.y},color:e.square.color,radius:Number(e.square.radius),height:Number(e.square.height),width:Number(e.square.width)}})],1)],1),a("div",{staticClass:"width: 1000px; height: calc(100vh - 600px); margin: 0 auto;"},[e._v(" 四边形: 宽："),a("input",{directives:[{name:"model",rawName:"v-model",value:e.square.width,expression:"square.width"}],attrs:{type:"text"},domProps:{value:e.square.width},on:{input:function(t){t.target.composing||e.$set(e.square,"width",t.target.value)}}}),e._v("  高："),a("input",{directives:[{name:"model",rawName:"v-model",value:e.square.height,expression:"square.height"}],attrs:{type:"text"},domProps:{value:e.square.height},on:{input:function(t){t.target.composing||e.$set(e.square,"height",t.target.value)}}}),e._v("  圆角："),a("input",{directives:[{name:"model",rawName:"v-model",value:e.square.radius,expression:"square.radius"}],attrs:{type:"text"},domProps:{value:e.square.radius},on:{input:function(t){t.target.composing||e.$set(e.square,"radius",t.target.value)}}}),e._v("  x："),a("input",{directives:[{name:"model",rawName:"v-model",value:e.square.x,expression:"square.x"}],attrs:{type:"text"},domProps:{value:e.square.x},on:{input:function(t){t.target.composing||e.$set(e.square,"x",t.target.value)}}}),e._v("  y："),a("input",{directives:[{name:"model",rawName:"v-model",value:e.square.y,expression:"square.y"}],attrs:{type:"text"},domProps:{value:e.square.y},on:{input:function(t){t.target.composing||e.$set(e.square,"y",t.target.value)}}}),e._v("  ")])])},i=[],r={name:"App",data:function(){return{e:"e",canvas:null,ctx:null,lw:null,square:{x:100,y:100,width:100,height:100,radius:10}}},methods:{initCanvas:function(e){var t=e.canvas,a=e.context;this.canvas=t,this.ctx=a},setLineW:function(e){this.lw=e}},mounted:function(){}},u=r,n=a("cba8"),o=Object(n["a"])(u,s,i,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0d7fc5.102ff718.js.map