(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{LJIn:function(e,a,t){"use strict";t.r(a);t("iQDF");var l,m,r=t("+eQT"),n=(t("giR+"),t("fyUT")),c=(t("OaEy"),t("2fM7")),o=(t("/zsF"),t("PArb")),E=(t("14J3"),t("BMrR")),i=(t("jCWc"),t("kPKH")),d=(t("y8nQ"),t("Vl3Y")),u=(t("sRBo"),t("kaz8")),p=t("lwsE"),s=t.n(p),h=t("W8MJ"),g=t.n(h),v=t("a1gu"),y=t.n(v),b=t("Nsbk"),f=t.n(b),I=t("7W2i"),O=t.n(I),x=(t("5NDa"),t("5rEg")),w=t("q1tI"),B=t.n(w),S=t("MuoO"),V=t("+kNj"),z=(t("WnAZ"),t("C/El"),t("IAL2"),t("wd/R"),t("17x9"),V["a"].Description,x["a"].Group),q=[{label:"\u6743\u76ca\u5546\u57ce",value:"1"},{label:"Boss",value:"2"},{label:"\u7b2c\u4e09\u65b9\u5546\u6237",value:"3"}],T=(l=Object(S["connect"])(function(e){var a=e.rightsManagement;return{index:a.index}}),l(m=function(e){function a(e){var t;return s()(this,a),t=y()(this,f()(a).call(this,e)),t.state={current:0,exchangeModeDisplay:"none",paymentPeriodDisplay:"none"},t}return O()(a,e),g()(a,[{key:"renderHBForm",value:function(){var e=this,a=[{label:"\u8ba2\u8d2d",value:"1"},{label:"\u6279\u91cf\u53d1\u653e",value:"2"}];return B.a.createElement(d["a"],{layout:"vertical"},B.a.createElement("div",{style:{marginBottom:32,fontSize:16}},"\u5151\u4ed8\u89c4\u5219"),B.a.createElement(E["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u5151\u4ed8\u89e6\u70b9",required:!0},B.a.createElement(u["a"].Group,{options:q,onChange:function(a){a.find(function(e){return"1"===e})?e.setState({exchangeModeDisplay:"block"}):e.setState({exchangeModeDisplay:"none"})}}))),B.a.createElement(i["a"],{md:8,sm:24,style:{display:this.state.exchangeModeDisplay}},B.a.createElement(d["a"].Item,{label:"\u5151\u4ed8\u65b9\u5f0f",required:!0},B.a.createElement(u["a"].Group,{options:a})))),B.a.createElement(o["a"],{style:{marginTop:0,marginBottom:32}}),B.a.createElement("div",{style:{marginBottom:32,fontSize:16}},"\u53d1\u653e\u89c4\u5219"),B.a.createElement(E["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u53d1\u653e\u89c4\u5219"},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9",onChange:function(a){"1"===a?e.setState({paymentPeriodDisplay:"block"}):e.setState({paymentPeriodDisplay:"none"})}},B.a.createElement(Option,{value:"0"},"\u4e00\u6b21\u53d1\u653e"),B.a.createElement(Option,{value:"1"},"\u6309\u6708\u53d1\u653e")))),B.a.createElement(i["a"],{md:8,sm:24,style:{display:this.state.paymentPeriodDisplay}},B.a.createElement(d["a"].Item,{label:"\u53d1\u653e\u671f\u6570"},B.a.createElement(z,{compact:!0},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"48%"}},B.a.createElement(Option,{value:"0"},"\u56fa\u5b9a\u671f\u6570")),B.a.createElement(n["a"],{style:{width:"48%",float:"right"},min:1,max:100,placeholder:"\u8bf7\u8f93\u5165",defaultValue:12})))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u5355\u6b21\u53d1\u653e\u6570\u91cf"},B.a.createElement(n["a"],{style:{width:"100%"},min:1,max:1,placeholder:"\u8bf7\u8f93\u5165",defaultValue:1})))),B.a.createElement(o["a"],{style:{marginTop:0,marginBottom:32}}),B.a.createElement("div",{style:{marginBottom:32,fontSize:16}},"\u4f7f\u7528\u89c4\u5219"),B.a.createElement(E["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u751f\u6548\u65f6\u95f4"},B.a.createElement(z,{compact:!0},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"48%"}},B.a.createElement(Option,{value:"0"},"\u56fa\u5b9a\u65e5\u671f\u751f\u6548")),B.a.createElement(r["a"],{style:{width:"48%",float:"right"},placeholder:"\u8bf7\u9009\u62e9\u65e5\u671f"})))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u5931\u6548\u65f6\u95f4"},B.a.createElement(z,{compact:!0},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"48%"}},B.a.createElement(Option,{value:"0"},"\u56fa\u5b9a\u65e5\u671f\u5230\u671f")),B.a.createElement(r["a"],{style:{width:"48%",float:"right"},placeholder:"\u8bf7\u9009\u62e9\u65e5\u671f"}))))),B.a.createElement(o["a"],{style:{marginTop:0,marginBottom:32}}),B.a.createElement("div",{style:{marginBottom:32,fontSize:16}},"\u7ed3\u7b97\u89c4\u5219"),B.a.createElement(E["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u7ed3\u7b97\u65f6\u95f4"},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9"},B.a.createElement(Option,{value:"0"},"\u4f7f\u7528\u5373\u4f7f\u7ed3\u7b97")))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u7ed3\u7b97\u5355\u4ef7\uff08\u5143\uff09"},B.a.createElement(n["a"],{style:{width:"100%"},min:1,max:1e11,placeholder:"\u8bf7\u8f93\u5165",defaultValue:0})))))}},{key:"renderDYForm",value:function(){var e=[{label:"\u8ba2\u8d2d",value:"1"},{label:"\u6279\u91cf\u53d1\u653e",value:"2"}];return B.a.createElement(d["a"],{layout:"vertical"},B.a.createElement("div",{style:{marginBottom:32,fontSize:16}},"\u5151\u4ed8\u89c4\u5219"),B.a.createElement(E["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u5151\u4ed8\u89e6\u70b9",required:!0},B.a.createElement(u["a"].Group,{options:q}))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u6743\u76ca\u5546\u57ce\u5151\u4ed8\u65b9\u5f0f",required:!0},B.a.createElement(u["a"].Group,{options:e}))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u6743\u76ca\u5546\u57ce\u8bdd\u8d39/\u7ebf\u4e0a\u652f\u4ed8\uff08\u5143\uff09",required:!0},B.a.createElement(z,{compact:!0},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"48%"}},B.a.createElement(Option,{value:"0"},"0"),B.a.createElement(Option,{value:"1"},"1")),B.a.createElement(n["a"],{style:{float:"right",width:"48%"},min:1,max:1e11,placeholder:"\u8bf7\u8f93\u5165",defaultValue:0})))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u6743\u76ca\u5546\u57ce\u79ef\u5206\u652f\u4ed8\uff08\u5206\uff09",required:!0},B.a.createElement(z,{compact:!0},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"48%"}},B.a.createElement(Option,{value:"0"},"0"),B.a.createElement(Option,{value:"1"},"1")),B.a.createElement(n["a"],{style:{float:"right",width:"48%"},min:1,max:1e11,placeholder:"\u8bf7\u8f93\u5165",defaultValue:0}))))),B.a.createElement(o["a"],{style:{marginTop:0,marginBottom:32}}),B.a.createElement("div",{style:{marginBottom:32,fontSize:16}},"\u53d1\u653e\u89c4\u5219"),B.a.createElement(E["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u53d1\u653e\u89c4\u5219"},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9"},B.a.createElement(Option,{value:"0"},"0"),B.a.createElement(Option,{value:"1"},"1")))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u53d1\u653e\u671f\u6570"},B.a.createElement(z,{compact:!0},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"78%"}},B.a.createElement(Option,{value:"0"},"0"),B.a.createElement(Option,{value:"1"},"1")),B.a.createElement(n["a"],{style:{float:"right",width:"28%"},min:1,max:1e11,placeholder:"\u8bf7\u8f93\u5165",defaultValue:0})))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:" \u6bcf\u671f\u53d1\u653e\u6570\u91cf"},B.a.createElement(n["a"],{min:1,max:1e11,placeholder:"\u8bf7\u8f93\u5165",defaultValue:0})))),B.a.createElement(o["a"],{style:{marginTop:0,marginBottom:32}}),B.a.createElement("div",{style:{marginBottom:32,fontSize:16}},"\u4f7f\u7528\u89c4\u5219"),B.a.createElement(E["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u751f\u6548\u65f6\u95f4"},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9"},B.a.createElement(Option,{value:"0"},"0"),B.a.createElement(Option,{value:"1"},"1")))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u5931\u6548\u65f6\u95f4"},B.a.createElement(x["a"],{placeholder:"\u8bf7\u9009\u62e9"})))),B.a.createElement(o["a"],{style:{marginTop:0,marginBottom:32}}),B.a.createElement("div",{style:{marginBottom:32,fontSize:16}},"\u7ed3\u7b97\u89c4\u5219"),B.a.createElement(E["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u7ed3\u7b97\u65f6\u95f4"},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9"},B.a.createElement(Option,{value:"0"},"0"),B.a.createElement(Option,{value:"1"},"1")))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u7ed3\u7b97\u5355\u4ef7\uff08\u5143\uff09"},B.a.createElement(n["a"],{style:{width:"100%"},min:1,max:1e11,placeholder:"\u8bf7\u8f93\u5165",defaultValue:0})))))}},{key:"renderTYForm",value:function(){var e=[{label:"\u8ba2\u8d2d",value:"1"},{label:"\u6279\u91cf\u53d1\u653e",value:"2"}];return B.a.createElement(d["a"],{layout:"vertical"},B.a.createElement("div",{style:{marginBottom:32,fontSize:16}},"\u5151\u4ed8\u89c4\u5219"),B.a.createElement(E["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u5151\u4ed8\u89e6\u70b9",required:!0},B.a.createElement(u["a"].Group,{options:q}))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u6743\u76ca\u5546\u57ce\u5151\u4ed8\u65b9\u5f0f",required:!0},B.a.createElement(u["a"].Group,{options:e}))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u6743\u76ca\u5546\u57ce\u8bdd\u8d39/\u7ebf\u4e0a\u652f\u4ed8\uff08\u5143\uff09",required:!0},B.a.createElement(z,{compact:!0},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"48%"}},B.a.createElement(Option,{value:"0"},"0"),B.a.createElement(Option,{value:"1"},"1")),B.a.createElement(n["a"],{style:{float:"right",width:"48%"},min:1,max:1e11,placeholder:"\u8bf7\u8f93\u5165",defaultValue:0})))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u6743\u76ca\u5546\u57ce\u79ef\u5206\u652f\u4ed8\uff08\u5206\uff09",required:!0},B.a.createElement(z,{compact:!0},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"48%"}},B.a.createElement(Option,{value:"0"},"0"),B.a.createElement(Option,{value:"1"},"1")),B.a.createElement(n["a"],{style:{float:"right",width:"48%"},min:1,max:1e11,placeholder:"\u8bf7\u8f93\u5165",defaultValue:0}))))),B.a.createElement(o["a"],{style:{marginTop:0,marginBottom:32}}),B.a.createElement("div",{style:{marginBottom:32,fontSize:16}},"\u53d1\u653e\u89c4\u5219"),B.a.createElement(E["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u53d1\u653e\u89c4\u5219"},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9"},B.a.createElement(Option,{value:"0"},"0"),B.a.createElement(Option,{value:"1"},"1")))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u548c\u5305\u5238\u9762\u989d\uff08\u5143\uff09"},B.a.createElement(n["a"],{min:1,max:1e11,placeholder:"\u8bf7\u8f93\u5165",defaultValue:0}))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u5355\u6b21\u53d1\u653e\u6570\u91cf"},B.a.createElement(n["a"],{min:1,max:1e11,placeholder:"\u8bf7\u8f93\u5165",defaultValue:0}))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u548c\u5305\u5238\u5408\u8ba1\u53d1\u653e\u6570\u91cf\u4e0a\u9650"},B.a.createElement(n["a"],{min:1,max:1e11,placeholder:"\u8bf7\u8f93\u5165",defaultValue:0})))),B.a.createElement(o["a"],{style:{marginTop:0,marginBottom:32}}),B.a.createElement("div",{style:{marginBottom:32,fontSize:16}},"\u4f7f\u7528\u89c4\u5219"),B.a.createElement(E["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u751f\u6548\u65f6\u95f4"},B.a.createElement(z,{compact:!0},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"48%"}},B.a.createElement(Option,{value:"0"},"0"),B.a.createElement(Option,{value:"1"},"1")),B.a.createElement(r["a"],{placeholder:"\u8bf7\u9009\u62e9\u65e5\u671f"})))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u5931\u6548\u65f6\u95f4"},B.a.createElement(z,{compact:!0},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"48%"}},B.a.createElement(Option,{value:"0"},"0"),B.a.createElement(Option,{value:"1"},"1")),B.a.createElement(r["a"],{placeholder:"\u8bf7\u9009\u62e9\u65e5\u671f"}))))),B.a.createElement(o["a"],{style:{marginTop:0,marginBottom:32}}),B.a.createElement("div",{style:{marginBottom:32,fontSize:16}},"\u7ed3\u7b97\u89c4\u5219"),B.a.createElement(E["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u7ed3\u7b97\u65f6\u95f4"},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9"},B.a.createElement(Option,{value:"0"},"0"),B.a.createElement(Option,{value:"1"},"1")))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u7ed3\u7b97\u5355\u4ef7\uff08\u5143\uff09"},B.a.createElement(n["a"],{min:1,max:1e11,placeholder:"\u8bf7\u8f93\u5165",defaultValue:0})))))}},{key:"renderTYForm",value:function(){var e=[{label:"\u8ba2\u8d2d",value:"1"},{label:"\u6279\u91cf\u53d1\u653e",value:"2"}];return B.a.createElement(d["a"],{layout:"vertical"},B.a.createElement("div",{style:{marginBottom:32,fontSize:16}},"\u5151\u4ed8\u89c4\u5219"),B.a.createElement(E["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u5151\u4ed8\u89e6\u70b9",required:!0},B.a.createElement(u["a"].Group,{options:q}))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u6743\u76ca\u5546\u57ce\u5151\u4ed8\u65b9\u5f0f",required:!0},B.a.createElement(u["a"].Group,{options:e}))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u6743\u76ca\u5546\u57ce\u8bdd\u8d39/\u7ebf\u4e0a\u652f\u4ed8\uff08\u5143\uff09",required:!0},B.a.createElement(z,{compact:!0},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"48%"}},B.a.createElement(Option,{value:"0"},"0"),B.a.createElement(Option,{value:"1"},"1")),B.a.createElement(n["a"],{style:{float:"right",width:"48%"},min:1,max:1e11,placeholder:"\u8bf7\u8f93\u5165",defaultValue:0})))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u6743\u76ca\u5546\u57ce\u79ef\u5206\u652f\u4ed8\uff08\u5206\uff09",required:!0},B.a.createElement(z,{compact:!0},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"48%"}},B.a.createElement(Option,{value:"0"},"0"),B.a.createElement(Option,{value:"1"},"1")),B.a.createElement(n["a"],{style:{float:"right",width:"48%"},min:1,max:1e11,placeholder:"\u8bf7\u8f93\u5165",defaultValue:0}))))),B.a.createElement(o["a"],{style:{marginTop:0,marginBottom:32}}),B.a.createElement("div",{style:{marginBottom:32,fontSize:16}},"\u4f7f\u7528\u89c4\u5219"),B.a.createElement(E["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u751f\u6548\u65f6\u95f4"},B.a.createElement(z,{compact:!0},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"48%"}},B.a.createElement(Option,{value:"0"},"0"),B.a.createElement(Option,{value:"1"},"1")),B.a.createElement(r["a"],{placeholder:"\u8bf7\u9009\u62e9\u65e5\u671f"})))),B.a.createElement(i["a"],{md:8,sm:24},B.a.createElement(d["a"].Item,{label:"\u5931\u6548\u65f6\u95f4"},B.a.createElement(z,{compact:!0},B.a.createElement(c["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"48%"}},B.a.createElement(Option,{value:"0"},"0"),B.a.createElement(Option,{value:"1"},"1")),B.a.createElement(r["a"],{placeholder:"\u8bf7\u9009\u62e9\u65e5\u671f"}))))))}},{key:"render",value:function(){return B.a.createElement(w["Fragment"],null,B.a.createElement("div",null,this.renderHBForm()))}}]),a}(w["PureComponent"]))||m);a["default"]=T}}]);