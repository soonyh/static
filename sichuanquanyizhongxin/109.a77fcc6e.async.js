(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[109],{zfko:function(e,a,t){"use strict";t.r(a);var l,r,n,m,i=t("MVZn"),s=t.n(i),c=(t("+L6B"),t("2/Rp")),d=(t("14J3"),t("BMrR")),u=(t("jCWc"),t("kPKH")),o=(t("5NDa"),t("5rEg")),p=(t("miYZ"),t("tsqr")),E=t("lwsE"),y=t.n(E),g=t("W8MJ"),v=t.n(g),b=t("a1gu"),h=t.n(b),k=t("Nsbk"),f=t.n(k),I=t("7W2i"),C=t.n(I),R=(t("OaEy"),t("2fM7")),F=(t("y8nQ"),t("Vl3Y")),T=(t("iQDF"),t("+eQT")),q=t("q1tI"),V=t.n(q),w=t("MuoO"),P=(t("+n12"),t("SwfG")),x=t("fKoC"),M=t.n(x),D=(t("28NX"),t("wd/R")),N=t.n(D),Y=(T["a"].MonthPicker,T["a"].RangePicker),O=(T["a"].WeekPicker,{labelCol:{span:5},wrapperCol:{span:19}}),j=(F["a"].Item,R["a"].Option),J={rules:[{type:"array",required:!0,message:"\u8bf7\u9009\u62e9\u6709\u6548\u671f!"}]},W=[{value:"1000/1000",label:"\u8d44\u6e90\u7c7b/\u548c\u5305\u5238"},{value:"1000/1001",label:"\u8d44\u6e90\u7c7b/\u5546\u6237\u62b5\u91d1\u5238\u5238"},{value:"1000/1002",label:"\u8d44\u6e90\u7c7b/\u4f53\u9a8c\u5361"},{value:"1000/1003",label:"\u8d44\u6e90\u7c7b/\u4e92\u8054\u7f51\u4f1a\u5458"}],Q=(l=Object(w["connect"])(function(e){var a=e.resource;e.loading;return{data:a,baseForm:a.baseForm}}),r=F["a"].create(),l(n=r((m=function(e){function a(e){var t;return y()(this,a),t=h()(this,f()(a).call(this,e)),t.onCheck=function(){return p["a"].error("\u63a5\u53e3\u6682\u672a\u5f00\u901a\uff0c\u656c\u8bf7\u671f\u5f85\uff01"),!1},t.state={selected:t.props.selected},t}return C()(a,e),v()(a,[{key:"selfTemplateForm",value:function(e){var a=this.props,t=a.form,l=(a.data,a.dispatch,a.baseForm),r=t.getFieldDecorator;t.validateFields,t.getFieldValue;return V.a.createElement("div",null,V.a.createElement(d["a"],{gutter:{md:8,lg:24,xl:48}},V.a.createElement(u["a"],{md:8,sm:24},V.a.createElement(F["a"].Item,{label:"\u7701\u5e73\u53f0\u7ea2\u5305\u7f16\u7801",extra:"\u8f93\u5165\u540e\u9700\u8c03\u7528\u7701\u5e73\u53f0\u63a5\u53e3\u5224\u65ad\u7f16\u7801\u662f\u5426\u6709\u6548\u3002"},r("redenvelopePlatformCd",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7701\u5e73\u53f0\u7ea2\u5305\u7f16\u7801"}],initialValue:e.redenvelopePlatformCd||""})(V.a.createElement(o["a"],{placeholder:"\u8bf7\u8f93\u5165\u7701\u5e73\u53f0\u7ea2\u5305\u7f16\u7801"})))),V.a.createElement(u["a"],{md:8,sm:24},V.a.createElement(F["a"].Item,{label:"\u671f\u521d\u5e93\u5b58(\u4e2a)"},r("initialInventory",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u671f\u521d\u5e93\u5b58\u6570\u76ee"}],initialValue:e.initialInventory||""})(V.a.createElement(o["a"],{placeholder:"\u8bf7\u8f93\u5165\u671f\u521d\u5e93\u5b58\u6570\u76ee",disabled:!0})))),V.a.createElement(u["a"],{md:8,sm:24},V.a.createElement(F["a"].Item,{label:"\u671f\u521d\u5e93\u5b58\u5931\u6548\u65f6\u95f4"},r("initialInventoryExpDate",{rules:[{type:"object",required:!0,message:"\u8bf7\u9009\u62e9\u5e93\u5b58\u5931\u6548\u65f6\u95f4!"}],initialValue:N()(e.initialInventoryExpDate)})(V.a.createElement(T["a"],{disabled:!0,style:{width:"100%"}}))))),V.a.createElement(d["a"],{gutter:{md:8,lg:24,xl:48}},V.a.createElement(u["a"],{md:8,sm:24},V.a.createElement(F["a"].Item,{label:"\u6821\u9a8c\u7701\u5e73\u53f0\u7ea2\u5305\u7f16\u7801"},V.a.createElement(c["a"],{onClick:this.onCheck,style:{marginRight:16}}," \u6821\u9a8c\u7ea2\u5305\u7f16\u7801 "))),V.a.createElement(u["a"],{md:8,sm:24},V.a.createElement(F["a"].Item,{label:"\u5f52\u5c5e\u90e8\u95e8"},r("departmentCd",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5f52\u5c5e\u90e8\u95e8"}],initialValue:l.departmentCd||""})(V.a.createElement(R["a"],{placeholder:"\u8bf7\u9009\u62e9"},V.a.createElement(j,{value:"1000"},"\u5e02\u573a\u90e8"),V.a.createElement(j,{value:"1100"},"\u8425\u9500\u90e8")))))))}},{key:"thirdTemplateForm",value:function(){var e=this.props,a=e.form,t=(e.data,e.dispatch,e.baseForm),l=a.getFieldDecorator;a.validateFields,a.getFieldValue;return V.a.createElement(d["a"],{gutter:{md:8,lg:24,xl:48}},V.a.createElement(u["a"],{md:8,sm:24},V.a.createElement(F["a"].Item,{label:"\u5f52\u5c5e\u90e8\u95e8"},l("departmentCd",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5f52\u5c5e\u90e8\u95e8"}],initialValue:t.departmentCd||""})(V.a.createElement(R["a"],{placeholder:"\u8bf7\u9009\u62e9"},V.a.createElement(j,{value:"1000"},"\u5e02\u573a\u90e8"),V.a.createElement(j,{value:"1100"},"\u8425\u9500\u90e8"))))),V.a.createElement(u["a"],{md:8,sm:24},V.a.createElement(F["a"].Item,{label:"\u671f\u521d\u5e93\u5b58(\u4e2a)"},l("initialInventory",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u671f\u521d\u5e93\u5b58\u6570\u76ee"}],initialValue:t.initialInventory||""})(V.a.createElement(o["a"],{placeholder:"\u8bf7\u8f93\u5165\u671f\u521d\u5e93\u5b58\u6570\u76ee"})))),V.a.createElement(u["a"],{md:8,sm:24},V.a.createElement(F["a"].Item,{label:"\u671f\u521d\u5e93\u5b58\u5931\u6548\u65f6\u95f4"},l("initialInventoryExpDate",{rules:[{type:"object",required:!0,message:"\u8bf7\u9009\u62e9\u5e93\u5b58\u5931\u6548\u65f6\u95f4!"}],initialValue:N()(t.initialInventoryExpDate)})(V.a.createElement(T["a"],{style:{width:"100%"}})))))}},{key:"render",value:function(){var e=this.props,a=e.form,t=e.data,l=e.dispatch,r=e.baseForm,n=a.getFieldDecorator,m=a.validateFields,i=this.props.data.selectedTemplate,p=i||{},E=function(){m(function(e,a){l({type:"resource/queryMktResource",payload:s()({},t,{currentStep:0,baseForm:s()({},r,a)})})})},y=function(e){e.preventDefault(),m(function(e,a){e||(a.mktResType=p.mktResType,a.mktResPettyType=p.mktResPettyType,a.mktResTemplate=p,delete a.mktResTypeMap,l({type:"resource/saveResource",payload:s()({},t,{params:a,currentStep:2,index:1,baseForm:s()({},r,a)})}))})};return V.a.createElement(q["Fragment"],null,V.a.createElement(F["a"],{layout:"vertical",style:{margin:"36px 0"}},V.a.createElement(d["a"],{gutter:{md:8,lg:24,xl:48}},V.a.createElement(u["a"],{md:8,sm:24},V.a.createElement(F["a"].Item,{label:"\u8d44\u6e90\u540d\u79f0",required:!0},n("mktResName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d44\u6e90\u540d\u79f0"}],initialValue:r.mktResName||""})(V.a.createElement(o["a"],{placeholder:"\u8bf7\u8f93\u5165\u8d44\u6e90\u540d\u79f0"})))),V.a.createElement(u["a"],{md:8,sm:24},V.a.createElement(F["a"].Item,{label:"\u8d44\u6e90\u7c7b\u578b"},n("mktResTypeMap",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8d44\u6e90\u7c7b\u578b"}],initialValue:p.mktResType+"/"+p.mktResPettyType})(V.a.createElement(R["a"],{placeholder:"\u8bf7\u9009\u62e9",disabled:!0},W.length>0?W.map(function(e){return V.a.createElement(R["a"].Option,{key:e.value},e.label)}):null)))),V.a.createElement(u["a"],{md:8,sm:24},V.a.createElement(F["a"].Item,{label:"\u6e20\u9053\u540d\u79f0"},n("partnerId",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6e20\u9053\u540d\u79f0"}],initialValue:"1000"===p.mktResPettyType?"1000":"1100"})("1"===p.mktResTemplateId?V.a.createElement(R["a"],{disabled:!0},V.a.createElement(j,{value:"1000"},"\u548c\u5305\u7701\u5e73\u53f0")):V.a.createElement(R["a"],{placeholder:"\u8bf7\u9009\u62e9\u6e20\u9053\u540d\u79f0"},V.a.createElement(j,{value:"1000"},"\u548c\u5305\u7701\u5e73\u53f0"),V.a.createElement(j,{value:"1100"},"\u6210\u90fd\u4e07\u8fbe\u5f71\u57ce"),V.a.createElement(j,{value:"1200"},"\u6210\u90fd\u4e1c\u7ad9\u9ad8\u94c1VIP\u4f11\u606f\u5ba4"),V.a.createElement(j,{value:"1300"},"\u7231\u5947\u827a")))))),V.a.createElement(d["a"],{gutter:{md:8,lg:24,xl:48}},V.a.createElement(u["a"],{md:8,sm:24},V.a.createElement(F["a"].Item,{label:"\u4f7f\u7528\u573a\u666f"},n("sceneCd",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4f7f\u7528\u573a\u666f"}],initialValue:r.sceneCd||""})(V.a.createElement(P["a"],{className:"MktResource",attrCode:"sceneCd"})))),V.a.createElement(u["a"],{md:8,sm:24},V.a.createElement(F["a"].Item,{label:"\u4f7f\u7528\u533a\u57df"},n("regionCd",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4f7f\u7528\u533a\u57df"}],initialValue:r.regionCd||""})(V.a.createElement(R["a"],{placeholder:"\u8bf7\u9009\u62e9"},V.a.createElement(j,{value:"1000"},"\u533a\u57df1"),V.a.createElement(j,{value:"1100"},"\u533a\u57df2"))))),V.a.createElement(u["a"],{md:8,sm:24},V.a.createElement(F["a"].Item,{label:"\u6709\u6548\u671f"},n("rangeTimePicker",J)(V.a.createElement(Y,{format:"YYYY-MM-DD",style:{width:"100%"}}))))),"1000"===p.mktResPettyType?this.selfTemplateForm(p):this.thirdTemplateForm()),V.a.createElement(F["a"],{layout:"horizontal",className:M.a.stepForm,hideRequiredMark:!0},V.a.createElement(F["a"].Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:O.wrapperCol.span,offset:O.labelCol.span}},label:""},V.a.createElement(c["a"],{onClick:E,style:{marginRight:16}},"\u4e0a\u4e00\u6b65"),V.a.createElement(c["a"],{type:"primary",onClick:y},"\u4e0b\u4e00\u6b65"))))}}]),a}(V.a.PureComponent),n=m))||n)||n);a["default"]=Q}}]);