(this["webpackJsonpslack-clone"]=this["webpackJsonpslack-clone"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),c=(a(16),a(1)),l=a.n(c),i=a(5),m=a(6),u=a(7),d=a(9),g=a(8),p=a(10),h=(a(18),a(2)),E=a.n(h),f=prompt("Whats your name? ");W({general:{messages:[],messageUser:[]}});var v=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={Message:"",Username:f,Workspace:"important",currentChannel:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainWrapper"},r.a.createElement(y,{Username:this.state.Username,WorkspaceName:this.state.Workspace}),r.a.createElement(b,null),r.a.createElement(N,null))}}]),t}(r.a.Component);function y(e){return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{onMouseOver:C,onMouseOut:O,id:"sideTop"},r.a.createElement("div",{id:"sideProfile"},r.a.createElement("h1",null,e.WorkspaceName,r.a.createElement("span",{id:"topspan"},"\u25bc")),r.a.createElement("div",{id:"online"}),r.a.createElement("p",{id:"sideName"},e.Username),r.a.createElement("i",{className:"fa fa-bell"})),r.a.createElement("div",{id:"sideSearch"})),r.a.createElement("div",{id:"sideBottom"},r.a.createElement("h2",{id:"channels"},"Channels"),r.a.createElement(k,{Name:"# general",Id:"1"}),r.a.createElement(k,{Name:"# resources",Id:"2"}),r.a.createElement(k,{Name:"# code",Id:"3"}),r.a.createElement(k,{Name:"# challenges",Id:"4"})))}function b(e){return r.a.createElement("div",{className:"ChatBox"},r.a.createElement("textarea",{id:"chatbox"}),r.a.createElement("button",{onClick:T},"SEND"))}function N(){return r.a.createElement("div",{className:"mc"},r.a.createElement("p",{id:"messages"}))}function k(e){return r.a.createElement("div",null,r.a.createElement("button",{className:"chatButtons","data-id":e.Id,onClick:B,onMouseOver:I,onMouseOut:j},e.Name))}var w="0";function B(e){H(),w=e.target.dataset.id;for(var t=document.getElementsByClassName("chatButtons"),a=0;a<t.length;a++)t[a].style.backgroundColor="#3F0E40",t[a].style.color="rgb(207,195,207)";var n=e.target;n.style.backgroundColor="#1164A3",n.style.color="white"}function I(e){e.target.dataset.id!=w&&(e.target.style.backgroundColor="rgb(44, 7, 44)",e.target.style.border="none")}function j(e){e.target.dataset.id!=w&&(e.target.style.backgroundColor="#3F0E40")}function C(){var e=document.getElementById("sideName"),t=document.getElementById("topspan");e.style.color="white",t.style.color="white"}function O(){var e=document.getElementById("sideName"),t=document.getElementById("topspan");e.style.color="rgb(202, 200, 200)",t.style.color="rgb(202, 200, 200)"}function T(){var e=document.getElementById("chatbox"),t=document.getElementById("messages");console.log(x),x.general.messages[x.general.messages.length]=f+":  "+e.value,t.innerHTML+=x.general.messages[x.general.messages.length-1]+"<br>",W(x),t.scrollTop=t.scrollHeight-t.clientHeight}var x=0;function M(){return(M=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,void new Promise((function(e,t){E.a.get("https://api.myjson.com/bins/17y9r6",(function(t){console.log("Data Loaded: "),x=t,e()}))}));case 2:return e.abrupt("return",x);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){E.a.ajax({url:"https://api.myjson.com/bins/17y9r6",type:"PUT",data:JSON.stringify(e),contentType:"application/json; charset=utf-8",dataType:"json",success:function(e,t,a){console.log("updated")}})}function H(){!function(){M.apply(this,arguments)}();var e=document.getElementById("messages");e.innerHTML="";for(var t=0;t<x.general.messages.length;t++)e.innerHTML+=x.general.messages[t]+"<br>";e.scrollTop=e.scrollHeight-e.clientHeight,x.general.messages.length}window.setInterval(H,2e3);var U=v;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.f9eaef6c.chunk.js.map