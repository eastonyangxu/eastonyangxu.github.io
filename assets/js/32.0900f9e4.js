(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{414:function(e,t,a){},504:function(e,t,a){"use strict";a(414)},556:function(e,t,a){"use strict";a.r(t);var s={data:()=>({nums:[1,2,3,4,5,6,7,8,9],gridPlaceItems:[{value:"start"},{value:"end"},{value:"center"},{value:"stretch"},{value:"center end"}],gridAlignItems:[{value:"start"},{value:"end"},{value:"center"},{value:"stretch"}],gridJustifyItems:[{value:"start"},{value:"end"},{value:"center"},{value:"stretch"}],data:{placeItemsValue:"stretch",alignItemsValue:"stretch",justifyItemsValue:"stretch"}}),computed:{computedGrid(){const e={style:{}};return e.style["place-items"]=this.data.placeItemsValue,e.style["align-items"]=this.data.alignItemsValue,e.style["justify-items"]=this.data.justifyItemsValue,{...e}}},methods:{resetItems(){Object.assign(this.$data,this.$options.data())}},mounted(){}},l=(a(504),a(4)),i=Object(l.a)(s,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"web-output"},[t("div",{staticClass:"grid-place-items-output"},[t("div",e._b({ref:"gridPlaceItemsRef",staticClass:"grid-place-items"},"div",e.computedGrid,!1),e._l(e.nums,(function(a){return t("div",{key:a,staticClass:"grid-place-items-item"},[e._v("\n          "+e._s(a)+"\n        ")])})),0)])]),e._v(" "),t("div",[t("span",[e._v("place-items:")]),e._v(" "),t("el-select",{staticClass:"grid-place-items-select",attrs:{placeholder:"请选择"},model:{value:e.data.placeItemsValue,callback:function(t){e.$set(e.data,"placeItemsValue",t)},expression:"data.placeItemsValue"}},e._l(e.gridPlaceItems,(function(e){return t("el-option",{key:e.value,attrs:{value:e.value}})})),1),e._v(" "),t("span",[e._v("align-items:")]),e._v(" "),t("el-select",{staticClass:"grid-place-items-select",attrs:{placeholder:"请选择"},model:{value:e.data.alignItemsValue,callback:function(t){e.$set(e.data,"alignItemsValue",t)},expression:"data.alignItemsValue"}},e._l(e.gridAlignItems,(function(e){return t("el-option",{key:e.value,attrs:{value:e.value}})})),1),e._v(" "),t("span",[e._v("justify-items:")]),e._v(" "),t("el-select",{staticClass:"grid-place-items-select",attrs:{placeholder:"请选择"},model:{value:e.data.justifyItemsValue,callback:function(t){e.$set(e.data,"justifyItemsValue",t)},expression:"data.justifyItemsValue"}},e._l(e.gridJustifyItems,(function(e){return t("el-option",{key:e.value,attrs:{value:e.value}})})),1),e._v(" "),t("el-button",{staticClass:"grid-place-items-button",attrs:{type:"danger",plain:""},on:{click:e.resetItems}},[e._v("\n      重置\n    ")])],1)])}),[],!1,null,null,null);t.default=i.exports}}]);