(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{ZqOU:function(e,t,l){"use strict";var n=l("xK3H"),r=l("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u,d=n(l("Sx57")),c=n(l("4zp0")),i=n(l("iVWQ")),f=n(l("lF+r")),o=n(l("PApH")),s=r(l("6cB7")),p=l("FXOc"),h=l("L5c0"),m=n(l("xqX8")),v=n(l("opjD")),E=n(l("qhb8")),b=p.Steps.Step,g=(0,E.default)({loader:function(){return Promise.all([l.e(0),l.e(47)]).then(l.t.bind(null,"HYIl",7))},loading:m.default}),w=(0,E.default)({loader:function(){return Promise.all([l.e(0),l.e(48)]).then(l.t.bind(null,"hs96",7))},loading:m.default}),S=(0,E.default)({loader:function(){return Promise.all([l.e(0),l.e(49)]).then(l.t.bind(null,"8q6e",7))},loading:m.default}),P=(a=(0,h.connect)(function(e){var t=e.form;return{data:t.step}}),a(u=function(e){function t(){return(0,d.default)(this,t),(0,i.default)(this,(0,f.default)(t).apply(this,arguments))}return(0,o.default)(t,e),(0,c.default)(t,[{key:"getCurrentStep",value:function(){var e=this.props.location,t=e.pathname,l=t.split("/");switch(l[l.length-1]){case"info":return 0;case"confirm":return 1;case"result":return 2;default:return 0}}},{key:"getChildren",value:function(e){switch(e){case 0:return s.default.createElement(g,null);case 1:return s.default.createElement(w,null);case 2:return s.default.createElement(S,null);default:return s.default.createElement(g,null)}}},{key:"render",value:function(){var e=this.props,t=(e.location,e.children,e.dispatch,e.data);return s.default.createElement("div",null,s.default.createElement(p.Card,{bordered:!1},s.default.createElement(s.Fragment,null,s.default.createElement(p.Steps,{current:t.currentStep,className:v.default.steps},s.default.createElement(b,{title:"\u586b\u5199\u8f6c\u8d26\u4fe1\u606f"}),s.default.createElement(b,{title:"\u786e\u8ba4\u8f6c\u8d26\u4fe1\u606f"}),s.default.createElement(b,{title:"\u5b8c\u6210"})),this.getChildren(t.currentStep))))}}]),t}(s.PureComponent))||u);t.default=P}}]);