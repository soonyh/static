(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{ecQR:function(e,t,a){"use strict";var l=a("xK3H"),r=a("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u,d=l(a("Sx57")),m=l(a("4zp0")),o=l(a("iVWQ")),c=l(a("lF+r")),s=l(a("PApH")),f=r(a("6cB7")),p=a("FXOc"),i=(p.Input.Search,p.Input.TextArea,p.Select.Option),E=p.DatePicker.RangePicker,g={name:"\u4ed3\u5e93\u540d",url:"\u4ed3\u5e93\u57df\u540d",owner:"\u4ed3\u5e93\u7ba1\u7406\u5458",approver:"\u5ba1\u6279\u4eba",dateRange:"\u751f\u6548\u65e5\u671f",type:"\u4ed3\u5e93\u7c7b\u578b",name2:"\u4efb\u52a1\u540d",url2:"\u4efb\u52a1\u63cf\u8ff0",owner2:"\u6267\u884c\u4eba",approver2:"\u8d23\u4efb\u4eba",dateRange2:"\u751f\u6548\u65e5\u671f",type2:"\u4efb\u52a1\u7c7b\u578b"},v=(n=p.Form.create(),n(u=function(e){function t(e){var a;return(0,d.default)(this,t),a=(0,o.default)(this,(0,c.default)(t).call(this,e)),a.state={},a}return(0,s.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator;e.submitting;return f.default.createElement("div",null,f.default.createElement(p.Form,{layout:"vertical",hideRequiredMark:!0},f.default.createElement(p.Row,{gutter:16},f.default.createElement(p.Col,{lg:6,md:12,sm:24},f.default.createElement(p.Form.Item,{label:g.name},t("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4ed3\u5e93\u540d\u79f0"}]})(f.default.createElement(p.Input,{placeholder:"\u8bf7\u8f93\u5165\u4ed3\u5e93\u540d\u79f0"})))),f.default.createElement(p.Col,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24},f.default.createElement(p.Form.Item,{label:g.url},t("url",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}]})(f.default.createElement(p.Input,{style:{width:"100%"},addonBefore:"http://",addonAfter:".com",placeholder:"\u8bf7\u8f93\u5165"})))),f.default.createElement(p.Col,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24},f.default.createElement(p.Form.Item,{label:g.owner},t("owner",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458"}]})(f.default.createElement(p.Select,{placeholder:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458"},f.default.createElement(i,{value:"xiao"},"\u4ed8\u6653\u6653"),f.default.createElement(i,{value:"mao"},"\u5468\u6bdb\u6bdb")))))),f.default.createElement(p.Row,{gutter:16},f.default.createElement(p.Col,{lg:6,md:12,sm:24},f.default.createElement(p.Form.Item,{label:g.approver},t("approver",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5ba1\u6279\u5458"}]})(f.default.createElement(p.Select,{placeholder:"\u8bf7\u9009\u62e9\u5ba1\u6279\u5458"},f.default.createElement(i,{value:"xiao"},"\u4ed8\u6653\u6653"),f.default.createElement(i,{value:"mao"},"\u5468\u6bdb\u6bdb"))))),f.default.createElement(p.Col,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24},f.default.createElement(p.Form.Item,{label:g.dateRange},t("dateRange",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u751f\u6548\u65e5\u671f"}]})(f.default.createElement(E,{placeholder:["\u5f00\u59cb\u65e5\u671f","\u7ed3\u675f\u65e5\u671f"],style:{width:"100%"}})))),f.default.createElement(p.Col,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24},f.default.createElement(p.Form.Item,{label:g.type},t("type",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4ed3\u5e93\u7c7b\u578b"}]})(f.default.createElement(p.Select,{placeholder:"\u8bf7\u9009\u62e9\u4ed3\u5e93\u7c7b\u578b"},f.default.createElement(i,{value:"private"},"\u79c1\u5bc6"),f.default.createElement(i,{value:"public"},"\u516c\u5f00"))))))))}}]),t}(f.Component))||u),h=v;t.default=h}}]);