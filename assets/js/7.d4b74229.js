(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{373:function(t,a,r){},461:function(t,a,r){"use strict";r(373)},514:function(t,a,r){"use strict";r.r(a);var e={props:{cardData:{type:Array,default:[]},cardListSize:{type:Number,default:3},carTitleColor:{type:String,default:"#000"},carHoverColor:{type:String,default:"#000"}},mounted(){this.cardHoverColor()},methods:{cardHoverColor(){if(!document.querySelector(".card")){const t=this.carHoverColor;let a=document.createElement("style");a.className="card",a.innerHTML=`.card-nav-content:hover{color: ${t}}`,document.head.appendChild(a)}}}},c=(r(461),r(4)),n=Object(c.a)(e,(function(){var t=this,a=t._self._c;return a("div",[null!=t.cardData[0].title?[a("div",{staticStyle:{"text-align":"center","font-weight":"900"}},[t._v("\n      "+t._s(t.cardData[0].title)+"\n    ")])]:t._e(),t._v(" "),a("div",{staticClass:"kbt-row"},t._l(t.cardData,(function(r,e){return a("div",{key:e,staticClass:"card-nav-box",style:4==t.cardListSize?"width: 25%;":2==t.cardListSize?"width: 50%;":"width: 33.333%;"},[a("a",{attrs:{href:r.cardSrc,target:"_blank"}},[a("div",{staticClass:"card-nav-item"},[a("div",{staticClass:"card-nav-title"},[r.cardImgSrc&&""!=r.cardImgSrc?a("img",{staticClass:"card-nav-img",attrs:{src:r.cardImgSrc,alt:"正在加载 ..."}}):t._e(),t._v(" "),a("p",{staticClass:"card-nav-name",style:"color:"+t.carTitleColor},[t._v("\n              "+t._s(r.cardName)+"\n            ")])]),t._v(" "),a("div",{staticClass:"card-nav-content",attrs:{title:r.cardContent}},[t._v("\n            "+t._s(r.cardContent)+"\n          ")])])])])})),0)],2)}),[],!1,null,"1a8bede5",null);a.default=n.exports}}]);