(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217c39"],{c7b1:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("itd",{ref:"test",staticClass:"inverted-test",attrs:{src:t.img},on:{"update:src":function(e){t.img=e}}})],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"inverted-main",staticClass:"inverted"})},r=[],d=(a("8372"),{props:{speed:{type:Number,default:.25},scale:{type:Number,default:1},waves:{type:Number,default:10},height:{type:Number,default:.5},canvasId:{type:String,default:""}},data:function(){return{image:null,started:!1,notTime:Date.now()}},mounted:function(){},methods:{startRender:function(t){var e=document.createElement("canvas");e.height=document.body.clientHeight*this.height,e.width=document.body.clientWidth;var a=e.getContext("2d");a.drawImage(t,0,0,t.width,t.height,0,0,t.width,t.height),this.started||(this.image=e,this.$refs["inverted-main"].appendChild(this.image),this.init())},init:function(){var t=this,e=this.waves,a=this.speed,i=this.scale,n=this.height,s=this.image,r=document.createElement("canvas");r.style.top=0;var d=r.getContext("2d"),h=!1,c=s;c.parentNode.insertBefore(r,c);var o=document.body.clientWidth,u=document.body.clientHeight,m=o,l=u*n,v=0,g=0,f=0,p=[];d.save(),d.canvas.width=c.width,d.canvas.height=2*c.height,d.canvas.style.zIndex="5",d.drawImage(c,0,0),d.scale(1,-1),d.drawImage(c,0,2*-c.height),h=!0,d.restore(),o=d.canvas.width,u=d.canvas.height,m=o,l=u*n;var w=d.getImageData(0,u*n,o,u).data,b=!1;d.save();while(!b){for(var y=d.getImageData(0,u*n,o,u),I=y.data,C=0,D=0;D<l;D++)for(var N=0;N<m;N++){var x=10*i*Math.sin(l/(D/e)-v)|0,E=4*((x+D)*o+N+x);if(E<0)C+=4;else{var T=E%(4*o),$=10*i*(D/e);if(T<$||T>4*o-$){var _=D<o/2?1:-1;I[C]=I[C+4*_],I[++C]=I[C+4*_],I[++C]=I[C+4*_],I[++C]=I[C+4*_],++C}else 0!=w[E+3]?(I[C]=w[E],I[++C]=w[++E],I[++C]=w[++E],I[++C]=w[++E],++C):(I[C]=I[C-4*o],I[++C]=I[C-4*o],I[++C]=I[C-4*o],I[++C]=I[C-4*o],++C)}}v>a*(6/a)?(v=0,f=g-1,g=0,b=!0):(v+=a,g++),p.push(y)}d.restore(),c||(d.height=d.height/2),setTimeout((function(){c.parentNode.removeChild(c),t.started=!0}),3e3);var j=function(){var e=Date.now();e-t.notTime<30||(t.notTime=e,h&&(c?d.putImageData(p[g],0,u*n):d.putImageData(p[g],0,0),d.clearRect(0,0,1920,400),g<f?g++:g=0))},k={fun:j};this.$emit("add",k)}}}),h=d,c=a("cba8"),o=Object(c["a"])(h,s,r,!1,null,"6a1d8033",null),u=o.exports,m={name:"test",components:{itd:u},data:function(){return{img:"test.jpg"}},mounted:function(){this.init()},methods:{init:function(){}}},l=m,v=Object(c["a"])(l,i,n,!1,null,"3d4e0b4b",null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d217c39.039574f4.js.map