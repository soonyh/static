(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{r7cu:function(e,t,a){"use strict";var n=a("xK3H"),l=a("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i,d=n(a("SeLb")),c=n(a("Sx57")),u=n(a("4zp0")),o=n(a("iVWQ")),m=n(a("lF+r")),f=n(a("PApH")),s=a("FXOc"),p=l(a("6cB7")),h=n(a("wOn5")),v=a("L5c0"),y=s.Input.Search,E="templateKeys",w=function(e){var t=e[E];return{value:t}},g=function(e){return{onClickEdit:function(){var t={type:"".concat(E,"/Edit")};e(t)}}},b=(r=(0,v.connect)(w,g),r(i=function(e){function t(e){var a;return(0,c.default)(this,t),a=(0,o.default)(this,(0,m.default)(t).call(this,e)),a.state={data:[{modulename:"\u5ba2\u6237\u6a21\u5757",rolename:"John Brown",describe:3224444},{modulename:"\u89d2\u8272\u6a21\u5757",rolename:"John Brown",describe:328888},{modulename:"\u4fe1\u606f\u6a21\u5757",rolename:"John Brown",describe:3254545}]},a.columns=[{title:"\u6a21\u5757\u540d\u79f0",dataIndex:"modulename",width:"25%",align:"center",key:"modulename"},{title:"\u89d2\u8272\u540d\u79f0",width:"25%",align:"center",dataIndex:"rolename",key:"rolename"},{title:"\u63cf\u8ff0",width:"25%",align:"center",dataIndex:"describe",key:"describe"},{title:"\u64cd\u4f5c",width:"25%",align:"center",key:"action",render:function(){return p.default.createElement("span",null,p.default.createElement("a",{href:"javascript:;",onClick:function(){return a.props.onClickEdit()}},"\u7f16\u8f91"),p.default.createElement(s.Divider,{type:"vertical"}),p.default.createElement("a",{href:"javascript:;"},"\u9884\u89c8"),p.default.createElement(s.Divider,{type:"vertical"}),p.default.createElement("a",{href:"javascript:;"},"\u5220\u9664"))}}],a}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.state.data,t=this.columns.map(function(e){return e.editable?(0,d.default)({},e,{onCell:function(t){return{record:t,dataIndex:e.dataIndex,title:e.title,key:e.key}}}):e});return p.default.createElement("div",null,p.default.createElement("div",{className:"".concat(h.default.main)},p.default.createElement("div",{className:"panel-heading",style:{borderBottom:0}},p.default.createElement("span",{className:"panel-title"},"\u529f\u80fd\u6a21\u5757\u5217\u8868")),p.default.createElement(s.Button,{type:"primary",style:{float:"right",marginRight:8,zIndex:100}},"\u6dfb\u52a0"),p.default.createElement(y,{style:{marginBottom:8,width:330,float:"right",marginRight:8,zIndex:100},placeholder:"Search"}),p.default.createElement("div",{style:{marginLeft:8,marginRight:8}},p.default.createElement(s.Table,{columns:t,dataSource:e,bordered:!0,size:"middle"}))))}}]),t}(p.default.Component))||i),k=b;t.default=k},wOn5:function(e,t,a){e.exports={main:"main___3YrOf"}}}]);