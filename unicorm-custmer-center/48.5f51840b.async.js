(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{hs96:function(e,t,a){"use strict";var l=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n,o,u=l(a("dnxz")),s=l(a("SeLb")),m=l(a("Sx57")),d=l(a("4zp0")),f=l(a("iVWQ")),p=l(a("lF+r")),c=l(a("PApH")),i=l(a("6cB7")),F=a("L5c0"),y=a("FXOc"),b=(l(a("r27q")),a("+n12")),v=l(a("kvWL")),E={labelCol:{span:5},wrapperCol:{span:19}},w=(r=(0,F.connect)(function(e){var t=e.form,a=e.loading;return{submitting:a.effects["form/submitStepForm"],data:t.step}}),n=y.Form.create(),r(o=n(o=function(e){function t(){return(0,m.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.form,a=e.data,l=e.dispatch,r=e.submitting,n=t.getFieldDecorator,o=t.validateFields,m=function(){l({type:"form/saveStepFormData",payload:(0,s.default)({},a,{currentStep:0})})},d=function(e){e.preventDefault(),o(function(e,t){e||l({type:"form/submitStepForm",payload:(0,s.default)({},a,t,{currentStep:2})})})};return i.default.createElement(y.Form,{layout:"horizontal",className:v.default.stepForm},i.default.createElement(y.Alert,{closable:!0,showIcon:!0,message:"\u786e\u8ba4\u8f6c\u8d26\u540e\uff0c\u8d44\u91d1\u5c06\u76f4\u63a5\u6253\u5165\u5bf9\u65b9\u8d26\u6237\uff0c\u65e0\u6cd5\u9000\u56de\u3002",style:{marginBottom:24}}),i.default.createElement(y.Form.Item,(0,u.default)({},E,{className:v.default.stepFormText,label:"\u4ed8\u6b3e\u8d26\u6237"}),a.payAccount),i.default.createElement(y.Form.Item,(0,u.default)({},E,{className:v.default.stepFormText,label:"\u6536\u6b3e\u8d26\u6237"}),a.receiverAccount),i.default.createElement(y.Form.Item,(0,u.default)({},E,{className:v.default.stepFormText,label:"\u6536\u6b3e\u4eba\u59d3\u540d"}),a.receiverName),i.default.createElement(y.Form.Item,(0,u.default)({},E,{className:v.default.stepFormText,label:"\u8f6c\u8d26\u91d1\u989d"}),i.default.createElement("span",{className:v.default.money},a.amount),i.default.createElement("span",{className:v.default.uppercase},"\uff08",(0,b.digitUppercase)(a.amount),"\uff09")),i.default.createElement(y.Divider,{style:{margin:"24px 0"}}),i.default.createElement(y.Form.Item,(0,u.default)({},E,{label:"\u652f\u4ed8\u5bc6\u7801",required:!1}),n("password",{initialValue:"123456",rules:[{required:!0,message:"\u9700\u8981\u652f\u4ed8\u5bc6\u7801\u624d\u80fd\u8fdb\u884c\u652f\u4ed8"}]})(i.default.createElement(y.Input,{type:"password",autoComplete:"off",style:{width:"80%"}}))),i.default.createElement(y.Form.Item,{style:{marginBottom:8},wrapperCol:{xs:{span:24,offset:0},sm:{span:E.wrapperCol.span,offset:E.labelCol.span}},label:""},i.default.createElement(y.Button,{type:"primary",onClick:d,loading:r},"\u63d0\u4ea4"),i.default.createElement(y.Button,{onClick:m,style:{marginLeft:8}},"\u4e0a\u4e00\u6b65")))}}]),t}(i.default.PureComponent))||o)||o),g=w;t.default=g}}]);