(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[56],{LUxf:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return j});n("IzEo");var r,a,l=n("bx4M"),o=(n("+L6B"),n("2/Rp")),u=n("lwsE"),i=n.n(u),c=n("W8MJ"),s=n.n(c),p=n("a1gu"),d=n.n(p),m=n("Nsbk"),_=n.n(m),f=n("7W2i"),h=n.n(f),b=(n("FJo9"),n("L41K")),x=n("q1tI"),E=n.n(x),g=n("MuoO"),y=n("xqX8"),w=(n("Terf"),n("xKz9")),k=b["a"].Step,F=Object(w["a"])({loader:function(){return Promise.all([n.e(0),n.e(104)]).then(n.bind(null,"YoGx"))},loading:y["default"]}),v=Object(w["a"])({loader:function(){return Promise.all([n.e(0),n.e(106)]).then(n.bind(null,"Mi4J"))},loading:y["default"]}),P=Object(w["a"])({loader:function(){return n.e(105).then(n.bind(null,"t02e"))},loading:y["default"]}),j=(r=Object(g["connect"])(function(e){var t=e.rightsProduct;return{stepIndex:t.stepIndex}}),r(a=function(e){function t(){return i()(this,t),d()(this,_()(t).apply(this,arguments))}return h()(t,e),s()(t,[{key:"getCurrentStep",value:function(){var e=this.props.location,t=e.pathname,n=t.split("/");switch(n[n.length-1]){case"BaseForm":return 0;case"RuleForm":return 1;case"ResultForm":return 2;default:return 0}}},{key:"getChildren",value:function(e){switch(e){case 0:return E.a.createElement(F,null);case 1:return E.a.createElement(v,null);case 2:return E.a.createElement(P,null);default:return E.a.createElement(F,null)}}},{key:"render",value:function(){var e=this.props,t=e.stepIndex,n=e.dispatch;return E.a.createElement("div",null,E.a.createElement(l["a"],{title:"\u6743\u76ca\u6863\u6848\u914d\u7f6e",bordered:!1,style:{marginBottom:24},extra:E.a.createElement(o["a"],{icon:"rollback",type:"primary",ghost:!0,onClick:function(){n({type:"rightsProduct/skip",payload:{index:0}})}},"\u8fd4\u56de")},E.a.createElement(x["Fragment"],null,E.a.createElement(b["a"],{current:t},E.a.createElement(k,{title:"\u57fa\u672c\u4fe1\u606f\u586b\u5199"}),E.a.createElement(k,{title:"\u914d\u7f6e\u4e1a\u52a1\u89c4\u5219"}),E.a.createElement(k,{title:"\u5b8c\u6210"})),this.getChildren(t))))}}]),t}(x["PureComponent"]))||a)},Terf:function(e,t,n){e.exports={stepForm:"stepForm___1L5ht",stepFormText:"stepFormText___3hxLU",result:"result___j_X9i",desc:"desc___2i0tP",information:"information___3Yq2o",label:"label___yUZlw",money:"money___1B8pd",uppercase:"uppercase___HMof3",steps:"steps___2A2lf"}}}]);