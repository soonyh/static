(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"R22/":function(e,a,n){"use strict";n.r(a);var t=n("lSNA"),r=n.n(t),u=n("MVZn"),s=n.n(u),o=n("o0o1"),c=n.n(o),i=n("wRzF"),p=n("D5tD");a["default"]={namespace:p["a"],state:{backup:{},list:null,pagination:null,paramsArr:[],resourceType:"",resourceInfo:{}},effects:{queryList:c.a.mark(function e(a,n){var t,r,u,s;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.payload,r=n.call,u=n.put,e.prev=2,e.next=5,r(i["a"],t);case 5:return s=e.sent,e.next=8,u({type:"saveList",payload:s.resultObject});case 8:e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](2);case 12:case"end":return e.stop()}},e,this,[[2,10]])}),queryResourceInfo:c.a.mark(function e(a,n){var t,r,u,s;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.payload,r=n.call,u=n.put,e.prev=2,e.next=5,r(i["b"],t);case 5:return s=e.sent,e.next=8,u({type:"saveResourceInfo",payload:{resourceType:t.resourceType,data:s.resultObject}});case 8:e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](2);case 12:case"end":return e.stop()}},e,this,[[2,10]])})},reducers:{saveList:function(e,a){return s()({},e,a.payload)},saveResourceInfo:function(e,a){return s()({},e,{resourceType:a.payload.resourceType,resourceInfo:a.payload.data})},saveSelected:function(e,a){var n=a.payload.selected;return s()({},e,{selected:n})},saveForm:function(e,a){var n=e.selected,t={},u={};return void 0!==a.payload.selected&&(t={selected:a.payload.selected}),void 0!==a.payload.index&&(u={index:a.payload.index}),s()({},e,t,u,r()({},n,s()({},e[n],a.payload[n])))},backup:function(e,a){var n=e.index,t=e.selected,r=e.heBao,u=e.diYongJin,o=e.tiYanKa,c=e.huiYuan1,i=e.huiYuan2;return s()({},e,{backup:{index:n,selected:t,heBao:r,diYongJin:u,tiYanKa:o,huiYuan1:c,huiYuan2:i}})},reset:function(e,a){var n=e.backup,t=n.index,r=(n.selected,n.heBao),u=n.diYongJin,o=n.tiYanKa,c=n.huiYuan1,i=n.huiYuan2;return s()({},e,{index:t,heBao:r,diYongJin:u,tiYanKa:o,huiYuan1:c,huiYuan2:i})}},subscriptions:{setup:function(e){var a=e.history,n=e.dispatch;console.log("steup"),n({type:"backup"}),a.listen(function(e){var a=e.pathname,t=e.query;console.log(a),"/resourceManagement/edit"!=a&&"/resourceManagement/detail"!=a||n({type:"queryResourceInfo",payload:{id:t.id,resourceType:t.type}})})}}}}}]);