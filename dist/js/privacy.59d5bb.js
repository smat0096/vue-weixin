webpackJsonp([16],{169:function(t,s,e){"use strict";function a(t){e(268)}Object.defineProperty(s,"__esModule",{value:!0});var i=e(269),l=e.n(i),n=e(270),c=e(66),r=a,o=c(l.a,n.a,r,"data-v-4ad275c4",null);s.default=o.exports},174:function(t,s,e){"use strict";function a(t){e(175)}Object.defineProperty(s,"__esModule",{value:!0});var i=e(176),l=e.n(i),n=e(177),c=e(66),r=a,o=c(l.a,n.a,r,"data-v-4154249b",null);s.default=o.exports},175:function(t,exports){},176:function(t,exports,s){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={data:function(){return{addthing:!1}},props:["logoPart","crossover","searchPart","add","person","search","clickrefresh"],created:function(){},mounted:function(){},components:{},computed:{},methods:{controlShow:function(){this.addthing=!0},controlhide:function(){this.addthing=!1},goBackThing:function(){"/singlechat"==this.$route.path?this.$router.push("/dialogue"):window.history.go(-1)},refreshPage:function(){this.$emit("refreshPage")}}}},177:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",[t.logoPart?e("section",{staticClass:"logoPart"},[t._v("\n\t\t微信\n\t")]):t._e(),t._v(" "),t.crossover?e("section",{staticClass:"logoPart"},[e("section",{staticClass:"goback",on:{click:t.goBackThing}},[e("svg",{attrs:{fill:"#fff"}},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#back"}})])]),t._v(" "),e("section",{staticClass:"wall"},[t._v("|")]),t._v(" "),t._t("searchpart"),t._v(" "),-1==t.$route.path.indexOf("search")?e("section",{staticClass:"covers_name",on:{click:t.refreshPage}},[e("span",{staticClass:"ellipsis"},[t._v("\n\t\t\t\t"+t._s(t.crossover)+"\n\t\t\t")])]):t._e()],2):t._e(),t._v(" "),t.searchPart?e("section",{staticClass:"searchPart"},[e("router-link",{staticClass:"searchlink",attrs:{to:"/search"}},[e("svg",{staticClass:"icon-search",attrs:{fill:"#fff"}},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#search"}})])])],1):t._e(),t._v(" "),t.add?e("section",{staticClass:"addPart",on:{click:t.controlShow}},[e("svg",{staticClass:"icon-search"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#add"}})])]):t._e(),t._v(" "),e("section",{directives:[{name:"show",rawName:"v-show",value:t.addthing,expression:"addthing"}],staticClass:"selectpart"},[e("div",{staticClass:"cover",on:{click:t.controlhide}}),t._v(" "),e("div",{staticClass:"selectlist"},[e("ul",[e("router-link",{staticClass:"selectpart_li",attrs:{to:"",tag:"li"}},[e("section",{staticClass:"selectsvg"},[e("svg",{attrs:{fill:"#fff"}},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#wxspeak"}})])]),t._v(" "),e("section",{staticClass:"selectext"},[t._v("\n\t\t\t\t\t\t发起群聊\n\t\t\t\t\t")])]),t._v(" "),e("router-link",{staticClass:"selectpart_li",attrs:{to:"",tag:"li"}},[e("section",{staticClass:"selectsvg"},[e("svg",{attrs:{fill:"#fff"}},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#addfriend"}})])]),t._v(" "),e("section",{staticClass:"selectext"},[t._v("\n\t\t\t\t\t\t添加朋友\n\t\t\t\t\t")])]),t._v(" "),e("router-link",{staticClass:"selectpart_li",attrs:{to:"",tag:"li"}},[e("section",{staticClass:"selectsvg"},[e("svg",{attrs:{fill:"#fff"}},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#onesweep"}})])]),t._v(" "),e("section",{staticClass:"selectext"},[t._v("\n\t\t\t\t\t\t扫一扫\n\t\t\t\t\t")])]),t._v(" "),e("router-link",{staticClass:"selectpart_li",attrs:{to:"",tag:"li"}},[e("section",{staticClass:"selectsvg"},[e("svg",{attrs:{fill:"#fff"}},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#receipt"}})])]),t._v(" "),e("section",{staticClass:"selectext"},[t._v("\n\t\t\t\t\t\t收付款\n\t\t\t\t\t")])]),t._v(" "),e("router-link",{staticClass:"selectpart_li",attrs:{to:"",tag:"li"}},[e("section",{staticClass:"selectsvg"},[e("svg",{attrs:{fill:"#fff"}},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#help"}})])]),t._v(" "),e("section",{staticClass:"selectext"},[t._v("\n\t\t\t\t\t\t帮助与反馈\n\t\t\t\t\t")])])],1)])]),t._v(" "),t._t("person")],2)},i=[],l={render:a,staticRenderFns:i};s.a=l},268:function(t,exports){},269:function(t,exports,s){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=s(174),a=function(t){return t&&t.__esModule?t:{default:t}}(e);exports.default={data:function(){return{warn:!0}},created:function(){},mounted:function(){},components:{headTop:a.default},computed:{},methods:{}}},270:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"child_page"},[e("head-top",{attrs:{crossover:"隐私"}}),t._v(" "),e("section",{staticClass:"newmessage"},[e("h1",{staticClass:"chatrecord"},[t._v("通讯录")]),t._v(" "),t._m(0),t._v(" "),e("h1",{staticClass:"chatrecord"},[t._v("朋友圈")]),t._v(" "),e("ul",[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("li",{staticClass:"spacial_li"},[e("div",{staticClass:"newshow_choose"},[e("div",[t._v("开启朋友圈入口")]),t._v(" "),e("div",{staticClass:"push-button"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.warn,expression:"warn"}],staticClass:"tgl tgl-light",attrs:{id:"friend",type:"checkbox"},domProps:{checked:Array.isArray(t.warn)?t._i(t.warn,null)>-1:t.warn},on:{__c:function(s){var e=t.warn,a=s.target,i=!!a.checked;if(Array.isArray(e)){var l=t._i(e,null);a.checked?l<0&&(t.warn=e.concat(null)):l>-1&&(t.warn=e.slice(0,l).concat(e.slice(l+1)))}else t.warn=i}}}),t._v(" "),e("label",{staticClass:"tgl-btn",attrs:{for:"friend"}})])]),t._v(" "),e("div",{staticClass:"newshow_text"},[t._v("\n\t\t\t\t\t关闭后，将隐藏“发现”中的朋友圈入口，你发的朋友圈不会清空，朋友仍可以看到\n\t\t\t\t")])]),t._v(" "),t.warn?e("li",{staticClass:"spacial_li"},[t._m(6),t._v(" "),e("div",{staticClass:"newshow_text"},[t._v("\n\t\t\t\t\t关闭后，有朋友更新照片时，界面下方的“发现”切换按钮上不在出现红点提示\n\t\t\t\t")])]):t._e()])])],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("div",[t._v("加我为朋友时需要验证")]),t._v(" "),e("div",{staticClass:"push-button"},[e("input",{staticClass:"tgl tgl-light",attrs:{id:"code",type:"checkbox",checked:""}}),t._v(" "),e("label",{staticClass:"tgl-btn",attrs:{for:"code"}})])]),t._v(" "),e("li",{staticClass:"spacial_li"},[e("div",{staticClass:"newshow_choose"},[e("div",[t._v("想我推荐通讯录朋友")]),t._v(" "),e("div",{staticClass:"push-button"},[e("input",{staticClass:"tgl tgl-light",attrs:{id:"recommod",type:"checkbox",checked:""}}),t._v(" "),e("label",{staticClass:"tgl-btn",attrs:{for:"recommod"}})])]),t._v(" "),e("div",{staticClass:"newshow_text"},[t._v("\n\t\t\t\t\t开启后，为你推荐已开通微信的手机联系人。\n\t\t\t\t")])]),t._v(" "),e("li",[e("div",[t._v("添加我的方式")])]),t._v(" "),e("li",[e("div",[t._v("通讯录黑名单")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("div",[t._v("不让他（她）看我的朋友圈")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("div",[t._v("不看他（她）我的朋友圈")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("div",[t._v("朋友分组")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("div",[t._v("允许陌生人查看十张照片")]),t._v(" "),e("div",{staticClass:"push-button"},[e("input",{staticClass:"tgl tgl-light",attrs:{id:"look",type:"checkbox",checked:""}}),t._v(" "),e("label",{staticClass:"tgl-btn",attrs:{for:"look"}})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"new_music"},[e("div",[t._v("允许朋友查看朋友圈的范围")]),t._v(" "),e("div",{staticClass:"voice-music"},[t._v("\n\t\t\t\t\t全部\n\t\t\t\t")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"newshow_choose"},[e("div",[t._v("朋友圈更新提醒")]),t._v(" "),e("div",{staticClass:"push-button"},[e("input",{staticClass:"tgl tgl-light",attrs:{id:"warn",type:"checkbox",checked:""}}),t._v(" "),e("label",{staticClass:"tgl-btn",attrs:{for:"warn"}})])])}],l={render:a,staticRenderFns:i};s.a=l}});