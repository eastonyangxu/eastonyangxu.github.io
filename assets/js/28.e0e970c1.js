(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{408:function(t,a,l){},498:function(t,a,l){"use strict";l(408)},550:function(t,a,l){"use strict";l.r(a);var e={data:()=>({gridColumnItems:[{value:"1/2"},{value:"1/3"},{value:"1/span 3"},{value:"3"},{value:"1/5"},{value:"2/4"},{value:"4/2"}],gridColumnStartItems:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}],gridColumnEndItems:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}],data:{columnValue:"",columnStartValue:"",columnEndValue:""},isBound:!1}),computed:{item1(){const t={style:{}};return t.style["grid-column"]=this.data.columnValue,t.style["grid-column-start"]=this.data.columnStartValue,t.style["grid-column-end"]=this.data.columnEndValue,{...t}}},methods:{resetItems(){Object.assign(this.$data,this.$options.data())}},mounted(){}},u=(l(498),l(4)),s=Object(u.a)(e,(function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"web-output"},[a("div",{staticClass:"grid-column-output"},[a("div",{ref:"gridPlaceItemsRef",staticClass:"grid-column"},[a("div",t._b({staticClass:"grid-column-item"},"div",t.item1,!1),[t._v("1")]),t._v(" "),a("div",{staticClass:"grid-column-item"},[t._v("2")]),t._v(" "),a("div",{staticClass:"grid-column-item"},[t._v("3")]),t._v(" "),a("div",{staticClass:"grid-column-item"},[t._v("4")]),t._v(" "),a("div",{staticClass:"grid-column-item"},[t._v("5")]),t._v(" "),a("div",{staticClass:"grid-column-item"},[t._v("6")])])])]),t._v(" "),a("div",[a("span",[t._v("设置项目 item1 的属性：")]),t._v(" "),a("div",[a("span",[t._v("grid-column:")]),t._v(" "),a("el-select",{staticClass:"grid-column-select",attrs:{placeholder:"请选择"},model:{value:t.data.columnValue,callback:function(a){t.$set(t.data,"columnValue",a)},expression:"data.columnValue"}},t._l(t.gridColumnItems,(function(t){return a("el-option",{key:t.value,attrs:{value:t.value}})})),1),t._v(" "),a("span",[t._v("grid-column-start:")]),t._v(" "),a("el-select",{staticClass:"grid-column-select",attrs:{placeholder:"请选择"},model:{value:t.data.columnStartValue,callback:function(a){t.$set(t.data,"columnStartValue",a)},expression:"data.columnStartValue"}},t._l(t.gridColumnStartItems,(function(t){return a("el-option",{key:t.value,attrs:{value:t.value}})})),1),t._v(" "),a("span",[t._v("grid-column-end:")]),t._v(" "),a("el-select",{staticClass:"grid-column-select",attrs:{placeholder:"请选择"},model:{value:t.data.columnEndValue,callback:function(a){t.$set(t.data,"columnEndValue",a)},expression:"data.columnEndValue"}},t._l(t.gridColumnEndItems,(function(t){return a("el-option",{key:t.value,attrs:{value:t.value}})})),1),t._v(" "),a("el-button",{staticClass:"grid-column-button",attrs:{type:"danger",plain:""},on:{click:t.resetItems}},[t._v("\n        重置\n      ")])],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);