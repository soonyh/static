(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{OFQC:function(e,t,n){"use strict";var a=n("xK3H"),l=n("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i,d=a(n("SeLb")),u=a(n("Sx57")),c=a(n("4zp0")),o=a(n("iVWQ")),s=a(n("lF+r")),f=a(n("PApH")),m=n("FXOc"),p=l(n("6cB7")),v=(a(n("WlSb")),n("L5c0")),h=m.Input.Search,w="custviewKey",y=function(e){var t=e[w];return{value:t}},b=function(e){return{onClickEdit:function(){var t={type:"".concat(w,"/Edit")};e(t)}}},k=(r=(0,v.connect)(y,b),r(i=function(e){function t(e){var n;return(0,u.default)(this,t),n=(0,o.default)(this,(0,s.default)(t).call(this,e)),n.state={data:[{modulename:"\u5ba2\u6237\u6a21\u5757",rolename:"John Brown",business:3224444,viewtype:"554541",note:"45454"},{modulename:"\u89d2\u8272\u6a21\u5757",rolename:"John Brown",business:328888,viewtype:"554541",note:"45454"},{modulename:"\u4fe1\u606f\u6a21\u5757",rolename:"John Brown",business:3254545,viewtype:"554541",note:"45454"}]},n.columns=[{title:"\u6a21\u677f\u540d\u79f0",dataIndex:"modulename",width:"16%",align:"center",key:"modulename"},{title:"\u89d2\u8272\u540d\u79f0",width:"16%",align:"center",dataIndex:"rolename",key:"rolename"},{title:"\u4e1a\u52a1\u573a\u666f",width:"16%",align:"center",dataIndex:"business",key:"business"},{title:"\u89c6\u56fe\u7c7b\u522b",width:"16%",align:"center",dataIndex:"viewtype",key:"viewtype"},{title:"\u5907\u6ce8",width:"16%",align:"center",dataIndex:"note",key:"note"},{title:"\u64cd\u4f5c",width:"20%",align:"center",key:"action",render:function(){return p.default.createElement("span",null,p.default.createElement("a",{href:"javascript:;",onClick:function(){return n.props.onClickEdit()}},"\u7f16\u8f91"),p.default.createElement(m.Divider,{type:"vertical"}),p.default.createElement("a",{href:"javascript:;"},"\u9884\u89c8"),p.default.createElement(m.Divider,{type:"vertical"}),p.default.createElement("a",{href:"javascript:;"},"\u5220\u9664"))}}],n}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.state.data,t=this.columns.map(function(e){return e.editable?(0,d.default)({},e,{onCell:function(t){return{record:t,dataIndex:e.dataIndex,title:e.title,key:e.key}}}):e});return p.default.createElement("div",null,p.default.createElement(m.Card,{title:"\u6a21\u677f\u5217\u8868",extra:p.default.createElement(h,{placeholder:"serach",onSearch:function(){return{}}})},p.default.createElement(m.Table,{columns:t,dataSource:e,bordered:!0,size:"middle"})))}}]),t}(p.default.Component))||i),E=k;t.default=E},WlSb:function(e,t,n){}}]);