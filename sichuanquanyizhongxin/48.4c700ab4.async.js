(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{"1Anv":function(e,t,a){e.exports=a.p+"images/self-red-13907fe0.png"},E0lK:function(e,t,a){e.exports={cardList:"cardList___3HEZd",card:"card___2dlgn",item:"item___CttlI",extraImg:"extraImg___1st2l",newButton:"newButton___2dRq_",cardAvatar:"cardAvatar___3fMbX",cardDescription:"cardDescription___3XfY6",pageHeaderContent:"pageHeaderContent___1hvUm",contentLink:"contentLink___3YA-E"}},PwDW:function(e,t,a){e.exports=a.p+"images/self-flag-db011bd5.png"},bnWJ:function(e,t,a){e.exports={steps:"steps___1TRn5",box:"box___11YOi",title:"title___CuV5I",darkBlue:"darkBlue___1E1CE",darkRed:"darkRed___LhQ40",red:"red___2qg34",blue:"blue___2Gw1w",body:"body___39HZa",selected:"selected___2rJZt",triangle:"triangle___3-0sM",orange:"orange___2G_dX",word:"word___2srIi"}},"zhQ/":function(e,t,a){"use strict";a.r(t);a("+L6B");var l,r,n,s,c=a("2/Rp"),o=(a("Mwp2"),a("VXEj")),i=(a("miYZ"),a("tsqr")),m=a("lwsE"),p=a.n(m),d=a("W8MJ"),u=a.n(d),_=a("a1gu"),g=a.n(_),f=a("Nsbk"),k=a.n(f),E=a("7W2i"),v=a.n(E),R=(a("y8nQ"),a("Vl3Y")),T=(a("tU7J"),a("wFql")),h=a("lSNA"),b=a.n(h),w=(a("Pwec"),a("CtXQ")),y=a("pVnL"),C=a.n(y),x=(a("OaEy"),a("2fM7")),N=a("q1tI"),S=a.n(N),I=a("MuoO"),L=a("rR2S"),M=a("fKoC"),D=a.n(M),F=a("E0lK"),z=a.n(F),J=a("bnWJ"),O=a.n(J),W=(a("xNuS"),a("TSYQ")),q=a.n(W),A=(a("1Anv"),a("PwDW"),x["a"].Option,{labelCol:{span:5},wrapperCol:{span:19}}),B=function(){return S.a.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 1024 1024"},S.a.createElement("path",{d:"M854.56 0l-689.376 0c-109.024 0-133.184 30.56-133.184 146.144l0 57.216c72.224 37.6 163.328 85.44 264.96 117.792 28.32-89.216 112.928-153.952 212.896-153.952 99.84 0 184.352 64.576 212.736 153.568 102.528-33.664 192.32-84.224 265.12-124.096l0-50.56c0.032-115.552-24.16-146.112-133.152-146.112z","p-id":"4743"}),S.a.createElement("path",{d:"M509.856 606.048c-118.496 0-215.136-91.008-222.304-205.824-92.032-29.152-179.008-69.792-255.552-105.44l0 604.448c0 115.552 24.16 124.768 133.184 124.768l689.344 0c109.024 0 133.184-9.216 133.184-124.8l0-610.144c-77.728 37.92-163.616 80.416-255.552 110.56-6.816 115.104-103.584 206.432-222.304 206.432z","p-id":"4744"}),S.a.createElement("path",{d:"M566.048 238.944l-45.216 100.64c-3.744 8.48-6.496 14.976-8.256 19.456l-0.8 0-54.656-120.128-66.72 0 74.752 134.016-56.672 0 0 38.176 69.12 0 0 32.96-69.12 0 0 38.176 69.12 0 0 55.36 63.328 0 0-55.328 66.912 0 0-38.176-66.912 0 0-32.96 66.912 0 0-38.176-55.488 0 76.96-134.016-63.264 0z","p-id":"4745"}))},Y=function(e){return S.a.createElement(w["a"],C()({component:B},e))},P=function(e){var t=e.icon,a=e.title,l=e.description,r=void 0===l?"":l,n=e.tag,s=void 0===n?"\u7b2c\u4e09\u65b9":n,c=e.tagColor,o=void 0===c?"blue":c,i=e.selected,m=void 0===i||i;return S.a.createElement("div",{className:q()(O.a.box,b()({},O.a.selected,m))},S.a.createElement("div",{className:O.a.title},t," ",a),S.a.createElement("div",{className:O.a.body},S.a.createElement(T["a"].Paragraph,{ellipsis:{rows:3,expandable:!0}},r)),S.a.createElement("div",{className:q()(O.a.triangle,O.a["".concat(o)])},S.a.createElement("div",{className:O.a.word},s)),S.a.createElement(w["a"],{type:"check",className:O.a.selected}))},Q=(l=Object(I["connect"])(function(e){var t=e.resource;return{data:t,selectedTemplate:t.selectedTemplate}}),r=R["a"].create(),l(n=r((s=function(e){function t(e){var a;return p()(this,t),a=g()(this,k()(t).call(this,e)),a.getMktResTemplateList=function(e){var t={pageNo:a.state.pageNo,pageSize:a.state.pageSize};e&&Object.assign(t,e),L["b"](t).then(function(e){e.resultData&&a.setState({mktResTemplateList:e.resultData.records,total:Number(e.resultData.total)})})},a.handleClick=function(e,t){a.setState({mktResTemplate:t}),e.preventDefault();var l=a.state.selected;l=l==t.mktResTemplateId?"":t.mktResTemplateId,a.setState({selected:l})},a.state={mktResTemplate:a.props.selectedTemplate||{},pageNo:1,pageSize:10,total:0,mktResTemplateList:[],selected:a.props.selectedTemplate.mktResTemplateId||""},a}return v()(t,e),u()(t,[{key:"componentWillMount",value:function(){this.getMktResTemplateList()}},{key:"render",value:function(){var e=this,t=this.props,a=t.form,l=t.dispatch,r=(t.data,t.selectedTemplate),n=this.props.data,s=(n.baseForm,n.ruleForm,a.getFieldDecorator,a.validateFields),m=this.state.selected,p=function(){if(s(function(e,t){}),"{}"===JSON.stringify(e.state.mktResTemplate))return i["a"].error("\u8bf7\u5148\u9009\u62e9\u4e00\u4e2a\u6a21\u677f\uff01"),!1;m!=r.mktResTemplateId?l({type:"resource/saveResource",payload:{currentStep:1,index:1,params:e.state.mktResTemplate,selectedTemplate:e.state.mktResTemplate,baseForm:{},ruleForm:{}}}):l({type:"resource/saveResource",payload:{currentStep:1,index:1,params:e.state.mktResTemplate,selectedTemplate:e.state.mktResTemplate}})},d=function(){e.setState({selected:""}),l({type:"resource/saveResource",payload:{index:0,selectedTemplate:{}}})};return S.a.createElement(N["Fragment"],null,S.a.createElement("div",{style:{margin:"36px 0"},className:z.a.cardList},S.a.createElement(o["a"],{rowKey:"id",grid:{gutter:24,lg:3,md:2,sm:1,xs:1},dataSource:this.state.mktResTemplateList,renderItem:function(t){return t?S.a.createElement(o["a"].Item,{key:t.mktResTemplateId,onClick:function(a){return e.handleClick(a,t)}},S.a.createElement(P,{tag:"1"==t.isSelf?"\u81ea\u6709":"\u7b2c\u4e09\u65b9",tagColor:"1"==t.isSelf?"blue":"orange",title:t.mktResTemplateName,description:t.mktResTemplateDesc,icon:S.a.createElement(Y,{style:{color:"#d81e06"}}),selected:e.state.selected==t.mktResTemplateId})):S.a.createElement(o["a"].Item,null,S.a.createElement(c["a"],{type:"dashed"},S.a.createElement(w["a"],{type:"plus"})," \u65b0\u589e\u6a21\u677f"))}})),S.a.createElement(R["a"],{layout:"horizontal",className:D.a.stepForm,hideRequiredMark:!0},S.a.createElement(R["a"].Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:A.wrapperCol.span,offset:A.labelCol.span}},label:""},S.a.createElement(c["a"],{onClick:d,style:{marginRight:16}},"\u8fd4\u56de"),S.a.createElement(c["a"],{type:"primary",onClick:p},"\u4e0b\u4e00\u6b65"))))}}]),t}(S.a.PureComponent),n=s))||n)||n);t["default"]=Q}}]);