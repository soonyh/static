(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{"5lDr":function(e,t,a){"use strict";var l=a("xK3H"),r=a("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u,m=l(a("Sx57")),d=l(a("4zp0")),o=l(a("iVWQ")),c=l(a("lF+r")),f=l(a("PApH")),s=r(a("6cB7")),p=a("FXOc"),i=(p.Input.Search,p.Input.TextArea,p.Select.Option),E=p.DatePicker.RangePicker,g={name:"\u4ed3\u5e93\u540d",url:"\u4ed3\u5e93\u57df\u540d",owner:"\u4ed3\u5e93\u7ba1\u7406\u5458",approver:"\u5ba1\u6279\u4eba",dateRange:"\u751f\u6548\u65e5\u671f",type:"\u4ed3\u5e93\u7c7b\u578b",name2:"\u4efb\u52a1\u540d",url2:"\u4efb\u52a1\u63cf\u8ff0",owner2:"\u6267\u884c\u4eba",approver2:"\u8d23\u4efb\u4eba",dateRange2:"\u751f\u6548\u65e5\u671f",type2:"\u4efb\u52a1\u7c7b\u578b"},y=(n=p.Form.create(),n(u=function(e){function t(e){var a;return(0,m.default)(this,t),a=(0,o.default)(this,(0,c.default)(t).call(this,e)),a.state={},a}return(0,f.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator;e.submitting;return s.default.createElement("div",null,s.default.createElement(p.Form,{layout:"vertical",hideRequiredMark:!0},s.default.createElement(p.Row,{gutter:16},s.default.createElement(p.Col,{lg:6,md:12,sm:24},s.default.createElement(p.Form.Item,{label:g.name},t("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4ed3\u5e93\u540d\u79f0"}]})(s.default.createElement(p.Input,{placeholder:"\u8bf7\u8f93\u5165\u4ed3\u5e93\u540d\u79f0"})))),s.default.createElement(p.Col,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24},s.default.createElement(p.Form.Item,{label:g.url},t("url",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}]})(s.default.createElement(p.Input,{style:{width:"100%"},addonBefore:"http://",addonAfter:".com",placeholder:"\u8bf7\u8f93\u5165"})))),s.default.createElement(p.Col,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24},s.default.createElement(p.Form.Item,{label:g.owner},t("owner",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458"}]})(s.default.createElement(p.Select,{placeholder:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458"},s.default.createElement(i,{value:"xiao"},"\u4ed8\u6653\u6653"),s.default.createElement(i,{value:"mao"},"\u5468\u6bdb\u6bdb")))))),s.default.createElement(p.Row,{gutter:16},s.default.createElement(p.Col,{lg:6,md:12,sm:24},s.default.createElement(p.Form.Item,{label:g.approver},t("approver",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5ba1\u6279\u5458"}]})(s.default.createElement(p.Select,{placeholder:"\u8bf7\u9009\u62e9\u5ba1\u6279\u5458"},s.default.createElement(i,{value:"xiao"},"\u4ed8\u6653\u6653"),s.default.createElement(i,{value:"mao"},"\u5468\u6bdb\u6bdb"))))),s.default.createElement(p.Col,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24},s.default.createElement(p.Form.Item,{label:g.dateRange},t("dateRange",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u751f\u6548\u65e5\u671f"}]})(s.default.createElement(E,{placeholder:["\u5f00\u59cb\u65e5\u671f","\u7ed3\u675f\u65e5\u671f"],style:{width:"100%"}})))),s.default.createElement(p.Col,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24},s.default.createElement(p.Form.Item,{label:g.type},t("type",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4ed3\u5e93\u7c7b\u578b"}]})(s.default.createElement(p.Select,{placeholder:"\u8bf7\u9009\u62e9\u4ed3\u5e93\u7c7b\u578b"},s.default.createElement(i,{value:"private"},"\u79c1\u5bc6"),s.default.createElement(i,{value:"public"},"\u516c\u5f00")))))),s.default.createElement(p.Row,{gutter:16},s.default.createElement(p.Col,{span:24,align:"center"},s.default.createElement(p.Form.Item,{style:{marginTop:32}},s.default.createElement(p.Button,{type:"primary"},"\u65b0\u589e"),s.default.createElement(p.Button,{type:"primary",style:{marginLeft:8}},"\u7f16\u8f91"),s.default.createElement(p.Button,{type:"primary",style:{marginLeft:8}},"\u5220\u9664"),s.default.createElement(p.Button,{type:"primary",htmlType:"submit",style:{marginLeft:8}},"\u63d0\u4ea4"),s.default.createElement(p.Button,{style:{marginLeft:8}},"\u53d6\u6d88"))))))}}]),t}(s.default.PureComponent))||u),v=y;t.default=v}}]);