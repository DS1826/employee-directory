(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},47:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(2),c=s.n(n),r=s(12),l=s.n(r);s(23),s(24);var i=function(e){return Object(a.jsx)("main",{className:"wrapper",children:e.children})};s(25);var h=function(){return Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h1",{children:"Employee Directory"})})},o=s(13),j=s(14),d=s(17),u=s(16),b=(s(26),s(27),function(e){return Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{className:"table-head",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Photo"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Phone"}),Object(a.jsx)("th",{children:"Email"})]})}),Object(a.jsx)("tbody",{className:"table-body",children:e.displayUsers[0]&&e.displayUsers.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:e.picture.medium,alt:"employee"})}),Object(a.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(a.jsx)("td",{children:e.phone}),Object(a.jsx)("td",{children:e.email})]})}))})]})}),m=(s(28),function(e){return Object(a.jsx)("form",{className:"search",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"language",children:"Search by Employee Last Name:"}),Object(a.jsx)("input",{onChange:e.handleSearchChange,"aria-label":"Search",type:"search",className:"form-control",placeholder:"Type an Employee's Last Name to begin"})]})})}),p=s(15),O=s.n(p),x=function(){return O.a.get("https://randomuser.me/api/?results=100&nat=US")},f=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).handleSearchChange=function(e){console.log(e.target.value),a.searchLastName(e.target.value)},a.state={users:[],displayUsers:[]},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=this;x().then((function(t){console.log(t.data.results),e.setState({users:t.data.results,displayUsers:t.data.results},(function(){return console.log(e.state)}))}))}},{key:"searchLastName",value:function(e){for(var t=[],s=0;s<this.state.users.length;s++)this.state.users[s].name.last.startsWith(e)&&(console.log(this.state.users[s]),t.push(this.state.users[s]));this.setState({displayUsers:t})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(m,{handleSearchChange:this.handleSearchChange}),Object(a.jsx)(b,{displayUsers:this.state.displayUsers})]})}}]),s}(c.a.Component);s(47);var y=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(i,{children:[Object(a.jsx)(h,{}),Object(a.jsx)(f,{})]})})};s(48);l.a.render(Object(a.jsx)(y,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.54292bc6.chunk.js.map