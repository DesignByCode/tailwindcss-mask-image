"use strict";const t=require("tailwindcss/plugin");module.exports=t.withOptions((function(){return function({addBase:t,matchUtilities:a,theme:i}){function e(t){return t/=100,Math.abs(Math.min(t,1)).toString()}t({":root":{"--mi-mask-image-start-opacity":"rgba(0,0,0,1)","--mi-mask-image-end-opacity":"rgba(0,0,0,0)","--mi-mask-image-direction":"to bottom","--mi-mask-image-start":"0%","--mi-mask-image-end":"100%"}}),a({"mask-image":t=>({maskImage:`linear-gradient(${t}, var(--mi-mask-image-start-opacity) var(--mi-mask-image-start), var(--mi-mask-image-end-opacity)  var(--mi-mask-image-end))`})},{values:i("imageMaskDirections"),type:["string"]}),a({"mask-image-start":t=>({"--mi-mask-image-start":t}),"mask-image-end":t=>({"--mi-mask-image-end":t})},{values:i("imageMaskSteps"),type:"length"}),a({"mask-image-start-opacity":t=>(parseInt(t)>1&&(t=e(parseInt(t))),{"--mi-mask-image-start-opacity":`rgba(0,0,0, ${t})`}),"mask-image-end-opacity":t=>(parseInt(t)>1&&(t=e(parseInt(t))),{"--mi-mask-image-end-opacity":`rgba(0,0,0, ${t})`})},{values:i("opacity")})}}),(function(){return{theme:{imageMaskSteps:{0:"0%",5:"5%",10:"10%",15:"15%",20:"20%",25:"25%",30:"30%",40:"40%",45:"45%",50:"50%",55:"55%",60:"60%",70:"70%",75:"75%",80:"80%",85:"85%",90:"90%",95:"95%",100:"100%"},imageMaskDirections:{t:"to top",tr:"to top right",tl:"to top left",b:"to bottom",br:"to bottom right",bl:"to bottom left",r:"to right",l:"to left"}}}}));
