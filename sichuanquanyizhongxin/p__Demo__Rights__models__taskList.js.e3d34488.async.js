(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{rq9G:function(e,t,a){"use strict";a.r(t);var n=a("MVZn"),s=a.n(n),r=a("o0o1"),u=a.n(r),c=a("jTk1");t["default"]={namespace:"taskList",state:{list:null,pagination:null},effects:{queryTaskList:u.a.mark(function e(t,a){var n,s,r,i;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=a.call,r=a.put,e.next=4,s(c["d"],n);case 4:return i=e.sent,e.next=7,r({type:"saveTaskList",payload:i.resultObject});case 7:case"end":return e.stop()}},e,this)})},reducers:{saveTaskList:function(e,t){return s()({},e,t.payload)}}}}}]);