(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{32:function(e,t,a){e.exports=a(70)},37:function(e,t,a){},38:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),o=a.n(l),c=(a(37),a(38),a(1)),m=a(3),s=a(8),i=a.n(s),u=a(12),d=a.n(u);var g=function(e){var t=e.uploadModal,a=e.closeModal,l=Object(n.useState)(""),o=Object(m.a)(l,2),c=o[0],s=o[1],u=Object(n.useState)(""),g=Object(m.a)(u,2),p=g[0],b=g[1],f=function(e){"title"===e.target.name?s(e.target.value):b(e.target.value)};return r.a.createElement("div",null,r.a.createElement(d.a,{isOpen:t,style:{content:{height:"auto",width:"50%",top:"40%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},ariaHideApp:!1},r.a.createElement("div",null,r.a.createElement("h3",{className:"text-center text-info"},"Write Your blog"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={headers:{"auth-token":JSON.parse(localStorage.getItem("token"))}},n={id:parseInt(localStorage.getItem("id")),name:localStorage.getItem("name"),title:c,blog:p};i.a.post("/upload",n,t).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),a()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:f,value:c,type:"text",className:"form-control",placeholder:"Your title here",name:"title"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{name:"blog",cols:"30",rows:"10",onChange:f,className:"form-control",placeholder:"Your blog here",value:p})),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("button",{className:"btn btn-danger",type:"button",onClick:a},"cancel"),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Add"))))))};var p=function(e){var t=e.title,a=e.post,n=e.setFlag,l=e.closeModal;return r.a.createElement(d.a,{isOpen:n,style:{content:{height:"auto",width:"50%",top:"40%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},ariaHideApp:!1},r.a.createElement("div",null,r.a.createElement("h3",{className:"text-center text-info"},t),r.a.createElement("p",null,a)),r.a.createElement("button",{className:"btn btn-danger",type:"button",onClick:l},"cancel"))};var b=function(e){var t=e.blog,a=Object(n.useState)(""),l=Object(m.a)(a,2),o=l[0],c=l[1],s=Object(n.useState)(""),i=Object(m.a)(s,2),u=i[0],d=i[1],g=Object(n.useState)(!1),b=Object(m.a)(g,2),f=b[0],E=b[1];return r.a.createElement("div",{className:"border mt-2 p-3"},r.a.createElement("span",{className:"text-primary"},t.username),r.a.createElement("h2",{className:"text-info"},t.title),r.a.createElement("p",null,t.blog.slice(0,100)),r.a.createElement("button",{onClick:function(e){e.preventDefault();var t=JSON.parse(e.target.value);c(t.title),d(t.blog),E(!0)},value:JSON.stringify(t)},"Read More"),f&&r.a.createElement(p,{title:o,post:u,setFlag:f,closeModal:function(){E(!1)}}))};var f=function(e){var t=e.data;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(b,{blog:e,key:t})})))};var E=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(m.a)(o,2),s=c[0],u=c[1];return Object(n.useEffect)((function(){var e={headers:{"auth-token":JSON.parse(localStorage.getItem("token"))}};i.a.get("/dashboard",e).then((function(e){l(e.data.response.reverse())})).catch((function(e){return console.log(e)}))}),[s]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card mt-3"},r.a.createElement("div",{className:"card-header d-flex justify-content-between p-3 shadow"},r.a.createElement("h2",{className:"text-info font-weight-bolder"},"Read Blogs"),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-info font-weight-bolder",onClick:function(e){e.preventDefault(),u(!0)}},"Create Blog"),r.a.createElement("button",{className:"btn btn-danger font-weight-bolder ml-2",onClick:function(e){e.preventDefault(),localStorage.removeItem("token"),localStorage.removeItem("name"),localStorage.removeItem("id"),window.location.href="/login"}},"Log out")))),s&&r.a.createElement(g,{uploadModal:s,closeModal:function(){u(!1)}}),a&&r.a.createElement(f,{data:a,readBlog:function(e){}}))},v=a(10);var h=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),c=Object(m.a)(o,2),s=c[0],u=c[1],d=Object(n.useState)(""),g=Object(m.a)(d,2),p=g[0],b=g[1],f=function(e){"name"===e.target.id?l(e.target.value):"email"===e.target.id?u(e.target.value):b(e.target.value)};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card form-card shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",{className:"text-center text-primary"},"Register")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:a,email:s,password:p};i.a.post("/register",t).then((function(e){var t=e.data,n=t.id,r=t.token;localStorage.setItem("name",JSON.stringify(a)),localStorage.setItem("id",JSON.stringify(n)),localStorage.setItem("token",JSON.stringify(r)),window.location.href="/"})).catch((function(e){return console.log(e)}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{onChange:f,value:a,type:"text",className:"form-control",placeholder:"Enter your name",id:"name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{onChange:f,value:s,type:"email",className:"form-control",placeholder:"Enter your email",id:"email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{onChange:f,value:p,type:"password",className:"form-control",placeholder:"Enter your Password",id:"password"})),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit"),r.a.createElement(v.b,{to:"/login",className:"ml-5"},"Go to Login"))))))};var N=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(""),s=Object(m.a)(c,2),u=s[0],d=s[1],g=function(e){"email"===e.target.id?o(e.target.value):d(e.target.value)};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card form-card shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",{className:"text-center text-primary"},"Login")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={email:l,password:u};i.a.post("/login",t).then((function(e){var t=e.data,a=t.name,n=t.id,r=t.token;localStorage.setItem("name",JSON.stringify(a)),localStorage.setItem("id",JSON.stringify(n)),localStorage.setItem("token",JSON.stringify(r)),window.location.href="/"})).catch((function(e){return console.log(e)}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{onChange:g,value:l,type:"email",className:"form-control",placeholder:"Enter your email",id:"email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{onChange:g,value:u,type:"password",className:"form-control",placeholder:"Enter your Password",id:"password"})),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit"),r.a.createElement(v.b,{to:"/register",className:"ml-5"},"Go to Register"))))))},S=function(){return localStorage.getItem("token")?r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{to:"/"}),r.a.createElement(c.b,{exact:!0,path:"/",component:E})):r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/register",component:h}),r.a.createElement(c.b,{exact:!0,path:"/login",component:N}))};var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v.a,null,r.a.createElement(y,null))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ccdcf8d0.chunk.js.map