(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{Y5yc:function(e,t,a){"use strict";a.r(t);a("+L6B");var n,r,o,l=a("2/Rp"),i=(a("sRBo"),a("kaz8")),c=(a("5NDa"),a("5rEg")),s=(a("Pwec"),a("CtXQ")),p=(a("fOrg"),a("+KLJ")),u=a("p0pE"),m=a.n(u),g=a("2Taf"),d=a.n(g),f=a("vZ4D"),h=a.n(f),y=a("l4Ni"),b=a.n(y),E=a("ujKo"),v=a.n(E),w=a("MhPg"),k=a.n(w),L=(a("y8nQ"),a("Vl3Y")),N=a("q1tI"),j=a.n(N),B=a("LLXN"),C=a("MuoO"),M=L["a"].Item,O=(n=Object(C["connect"])(function(e){var t=e.login,a=e.loading;return{login:t,submitting:a.effects["login/login"]}}),n((o=function(e){function t(){var e,a;d()(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=b()(this,(e=v()(t)).call.apply(e,[this].concat(r))),a.state={type:"account",autoLogin:!0},a.onTabChange=function(e){a.setState({type:e})},a.onGetCaptcha=function(){return new Promise(function(e,t){a.loginForm.validateFields(["mobile"],{},function(n,r){if(n)t(n);else{var o=a.props.dispatch;o({type:"login/getCaptcha",payload:r.mobile}).then(e).catch(t)}})})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.type,n=a.props,r=n.dispatch,o=n.form;o.validateFields(function(e,a){e||r({type:"login/login",payload:m()({},a,{type:t})})})},a.changeAutoLogin=function(e){a.setState({autoLogin:e.target.checked})},a.renderMessage=function(e){return j.a.createElement(p["a"],{style:{marginBottom:24},message:e,type:"error",showIcon:!0})},a}return k()(t,e),h()(t,[{key:"render",value:function(){var e=this.props.submitting,t=this.props.form.getFieldDecorator;return j.a.createElement(L["a"],{onSubmit:this.handleSubmit,className:"login-box"},j.a.createElement(M,{style:{marginBottom:16}},t("loginName",{rules:[{required:!0,message:Object(B["formatMessage"])({id:"jobNumberHelp"})}]})(j.a.createElement(c["a"],{prefix:j.a.createElement(s["a"],{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"admin"}))),j.a.createElement(M,{style:{marginBottom:16}},t("loginPwd",{rules:[{required:!0,message:Object(B["formatMessage"])({id:"passwordHelp"})}]})(j.a.createElement(c["a"],{prefix:j.a.createElement(s["a"],{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"123"}))),j.a.createElement(M,null,j.a.createElement("a",{href:"javascript:;",className:"pull-right"},"\u5fd8\u8bb0\u5bc6\u7801"),j.a.createElement(i["a"],null,"\u81ea\u52a8\u767b\u5f55")),j.a.createElement(M,null,j.a.createElement(l["a"],{type:"primary",block:!0,size:"large",htmlType:"submit",loading:e},"\u767b\u5f55")))}}]),t}(N["Component"]),r=o))||r);t["default"]=L["a"].create()(O)}}]);