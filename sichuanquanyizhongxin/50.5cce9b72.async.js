(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{QyQV:function(e,t,a){e.exports={tableList:"tableList___1su5w",tableListOperator:"tableListOperator___3TB6t",tableListForm:"tableListForm___1L_qU",submitButtons:"submitButtons___l9dc9"}},me15:function(e,t,a){"use strict";a.r(t);a("IzEo");var r,n,s,i,o=a("bx4M"),l=(a("g9YV"),a("wCAj")),c=(a("/zsF"),a("PArb")),d=(a("14J3"),a("BMrR")),u=(a("+L6B"),a("2/Rp")),m=(a("OaEy"),a("2fM7")),p=(a("jCWc"),a("kPKH")),f=a("pVnL"),h=a.n(f),g=(a("5NDa"),a("5rEg")),y=(a("2qtc"),a("kLXV")),k=a("MVZn"),b=a.n(k),L=a("lwsE"),w=a.n(L),E=a("W8MJ"),v=a.n(E),I=a("a1gu"),S=a.n(I),x=a("Nsbk"),F=a.n(x),T=a("7W2i"),O=a.n(T),_=(a("y8nQ"),a("Vl3Y")),C=a("q1tI"),V=a.n(C),q=a("MuoO"),j=(a("wd/R"),a("jTk1")),D=(a("Puqe"),a("QyQV")),M=a.n(D),N={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},z=(r=Object(q["connect"])(function(e){var t=e.taskList,a=e.scene,r=e.loading;return{taskList:t,index:a.index,params:a.arr,queryTaskListLoading:r.effects["taskList/queryTaskList"]}}),n=_["a"].create(),r(s=n((i=function(e){function t(){var e,a;w()(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return a=S()(this,(e=F()(t)).call.apply(e,[this].concat(n))),a.state={expandForm:!0,formValues:{},pagination:{current:1,pageSize:10},filteredInfo:{},sortedInfo:{field:"createDate",order:"descend"},orderType:[],staffOrg:[],tableStats:{rowSelection:{}}},a.handleFormReset=function(){var e=a.props,t=e.form;e.dispatch;t.resetFields(),a.setState({formValues:{},sortedInfo:{},filteredInfo:{}})},a.toggleForm=function(){var e=a.state.expandForm;a.setState({expandForm:!e})},a.handleSearch=function(e){e.preventDefault();var t=a.props,r=t.dispatch,n=(t.form,a.state),s=n.pagination,i=n.sortedInfo,o=n.filteredInfo;r({type:"taskList/queryTaskList",payload:b()({},s,i,o)})},a.handleChange=function(e,t,r){var n=a.props,s=n.dispatch,i=(n.form,r.field),o=r.order,l=e.current,c=e.pageSize;a.setState({filteredInfo:t,sortedInfo:{field:i,order:o},current:l,pageSize:c}),s({type:"taskList/queryTaskList",payload:b()({current:l,pageSize:c,field:i,order:o},t,a.state.formValues)})},a.deleteItem=function(e){y["a"].confirm({title:"\u5220\u9664\u4efb\u52a1",content:"\u786e\u5b9a\u5220\u9664\u8be5\u4efb\u52a1\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){}})},a.viewDetail=function(e){var t=a.props.dispatch;t({type:"scene/saveScene",payload:{index:1,params:e}})},a}return O()(t,e),v()(t,[{key:"componentDidMount",value:function(){var e=this;Object(j["c"])().then(function(t){e.setState({orderType:t.resultObject.orderType,staffOrg:t.resultObject.staffOrg})}),console.log(this.props.form.getFieldsValue())}},{key:"renderSimpleForm",value:function(){var e=this.props.form.getFieldDecorator,t=this.state,a=(t.orderType,t.staffOrg);return V.a.createElement(_["a"],{onSubmit:this.handleSearch},V.a.createElement(d["a"],{gutter:{md:8,lg:24,xl:48}},V.a.createElement(p["a"],{md:8,sm:24},V.a.createElement(_["a"].Item,h()({label:"\u6743\u76ca\u6863\u6848"},N),e("taskName",{rules:[{required:!0,message:"Input something!"}]})(V.a.createElement(g["a"],{placeholder:"\u8bf7\u8f93\u5165"})))),V.a.createElement(p["a"],{md:8,sm:24},V.a.createElement(_["a"].Item,h()({label:"\u72b6\u6001"},N),e("staffOrg")(V.a.createElement(m["a"],{style:{width:"100%"},showSearch:!0,optionFilterProp:"children"},a.length>0?a.map(function(e){return V.a.createElement(m["a"].Option,{key:e.pcode},e.pname)}):null)))),V.a.createElement(p["a"],{md:8,sm:24},V.a.createElement("span",{className:M.a.submitButtons},V.a.createElement(u["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),V.a.createElement(u["a"],{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e")))))}},{key:"renderForm",value:function(){return this.renderSimpleForm()}},{key:"render",value:function(){var e=this,t=this.props,a=t.taskList,r=a.list,n=a.pagination,s=t.queryTaskListLoading,i=this.state,d=(i.filteredInfo,i.sortedInfo);return V.a.createElement(o["a"],{title:"\u6743\u76ca\u4ea7\u54c1\u7ba1\u7406"},V.a.createElement("div",{className:M.a.tableList},V.a.createElement("div",{className:M.a.tableListForm},this.renderForm()),V.a.createElement(l["a"],h()({loading:s,rowKey:function(e){return e.id}},this.state.tableStats,{columns:[{title:"\u6743\u76ca\u7f16\u53f7",width:"15%",dataIndex:"taskNumber"},{title:"\u6743\u76ca\u4ea7\u54c1\u540d\u79f0",width:"20%",dataIndex:"taskCreator"},{title:"\u6743\u76ca\u7c7b\u578b",width:"14%",dataIndex:"currentTache"},{title:"\u72b6\u6001",dataIndex:"currentTache",width:"11%"},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"createDate",width:"20%",sorter:!0,sortOrder:"createDate"===d.field&&d.order},{title:"\u64cd\u4f5c",key:"action",width:"20%",render:function(t,a){return V.a.createElement("span",null,V.a.createElement("a",{href:"javascript:;"},"\u7f16\u8f91"),V.a.createElement(c["a"],{type:"vertical"}),V.a.createElement("a",{href:"javascript:;",onClick:function(){return e.deleteItem(a)}},"\u5220\u9664"))}}],dataSource:r,pagination:b()({},n,{showQuickJumper:!0,showTotal:function(e){return"\u5171".concat(e,"\u6761")}}),onChange:this.handleChange}))))}}]),t}(C["PureComponent"]),s=i))||s)||s);t["default"]=z}}]);