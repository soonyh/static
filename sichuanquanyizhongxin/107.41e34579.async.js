(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[107],{"6a6f":function(e,a,l){"use strict";l.r(a);l("2qtc");var t=l("kLXV"),r=(l("5NDa"),l("5rEg")),n=l("lwsE"),s=l.n(n),o=l("W8MJ"),i=l.n(o),d=l("a1gu"),c=l.n(d),p=l("Nsbk"),m=l.n(p),u=l("7W2i"),f=l.n(u),b=(l("y8nQ"),l("Vl3Y")),k=l("q1tI"),h=l.n(k),w=b["a"].Item,C=function(e){function a(e){var l;return s()(this,a),l=c()(this,m()(a).call(this,e)),l.okHandle=function(){form.validateFields(function(e,a){e||(form.resetFields(),handleAdd(a))})},l.state={effDate:l.props.data.recode.effDate,expDate:l.props.data.recode.expDate},l}return f()(a,e),i()(a,[{key:"render",value:function(){var e=this.props,a=e.modalVisible,l=e.form,n=(e.handleAdd,e.handleModalVisible),s=e.formValues;return h.a.createElement(t["a"],{destroyOnClose:!0,title:"\u65b0\u5efa\u6743\u76ca",visible:a,onOk:this.okHandle,onCancel:function(){return n()}},h.a.createElement(w,{labelCol:{span:5},wrapperCol:{span:15},label:"\u6743\u76ca\u540d\u79f0"},l.getFieldDecorator("mktResName",{rules:[{required:!0,message:"\u6743\u76ca\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01",min:1}],initialValue:s.mktResName||""})(h.a.createElement(r["a"],{placeholder:"\u8bf7\u8f93\u5165"}))),h.a.createElement(w,{labelCol:{span:5},wrapperCol:{span:15},label:"\u6743\u76ca\u7f16\u7801"},l.getFieldDecorator("mktResNbr",{rules:[{required:!0,message:"\u6743\u76ca\u7f16\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01",min:1}],initialValue:s.mktResNbr||""})(h.a.createElement(r["a"],{placeholder:"\u8bf7\u8f93\u5165"}))),h.a.createElement(w,{labelCol:{span:5},wrapperCol:{span:15},label:"\u6743\u76ca\u8d44\u6e90"},l.getFieldDecorator("mktResId",{rules:[{required:!0,message:"\u6743\u76ca\u8d44\u6e90\u4e0d\u80fd\u4e3a\u7a7a\uff01",min:1}],initialValue:s.mktResId||""})(h.a.createElement(r["a"],{placeholder:"\u8bf7\u8f93\u5165"}))))}}]),a}(k["PureComponent"]);a["default"]=b["a"].create()(C)}}]);