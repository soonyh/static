(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"T+W8":function(e,t,a){"use strict";var r=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("SeLb")),c=r(a("fh3l")),s=(a("vkNP"),a("FXOc")),u=a("dCQc"),o={namespace:"form",state:{currentStep:0,step:{payAccount:"ant-design@alipay.com",receiverAccount:"test@example.com",receiverName:"Alex",amount:"500"}},effects:{submitRegularForm:c.default.mark(function e(t,a){var r,n;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,e.next=4,n(u.fakeSubmitForm,r);case 4:s.message.success("\u63d0\u4ea4\u6210\u529f");case 5:case"end":return e.stop()}},e,this)}),submitStepForm:c.default.mark(function e(t,a){var r,n,s;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,e.next=4,n(u.fakeSubmitForm,r);case 4:return e.next=6,s({type:"saveStepFormData",payload:r});case 6:case"end":return e.stop()}},e,this)}),submitAdvancedForm:c.default.mark(function e(t,a){var r,n;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,e.next=4,n(u.fakeSubmitForm,r);case 4:s.message.success("\u63d0\u4ea4\u6210\u529f");case 5:case"end":return e.stop()}},e,this)})},reducers:{saveStepFormData:function(e,t){var a=t.payload;return(0,n.default)({},e,{step:(0,n.default)({},e.step,a),currentStep:a.currentStep})}}};t.default=o}}]);