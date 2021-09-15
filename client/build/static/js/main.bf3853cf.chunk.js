(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,a,t){e.exports=t(121)},111:function(e,a,t){},121:function(e,a,t){"use strict";t.r(a);var n,r,o=t(0),l=t.n(o),c=t(43),s=t.n(c),i=(t(110),t(111),t(37)),u=t(101),m=t(139),d=t(141),p=t(137),g=t(100),b=t(55),v=t(14),h=t(102),f=t(19),E=t.n(f),k=t(32),w=t(18),j=t(129),O=t(130),y=t(140),S=t(93),x=t(131),I=t(132),C=t(147),T=t(91),B=t(92),F=t(80),L=t.n(F),N=new(function(){function e(){Object(T.a)(this,e)}return Object(B.a)(e,[{key:"getProfile",value:function(){return L()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return L()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),_=function(e){return fetch("/api/users/me",{headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(e)}})},q=function(e,a){return fetch("/api/users",{method:"PUT",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(a)},body:JSON.stringify(e)})},P=function(e,a){return fetch("/api/users/books/".concat(e),{method:"DELETE",headers:{authorization:"Bearer ".concat(a)}})},$=function(e){var a=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_books",JSON.stringify(t)),!0},D=function(){var e=Object(o.useState)([]),a=Object(w.a)(e,2),t=a[0],n=a[1],r=Object(o.useState)(""),c=Object(w.a)(r,2),s=c[0],i=c[1],u=Object(o.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),m=Object(w.a)(u,2),d=m[0],p=m[1];Object(o.useEffect)((function(){return function(){var e;(e=d).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var g=function(){var e=Object(k.a)(E.a.mark((function e(a){var t,r,o,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),s){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(s));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:r=e.sent,o=r.items,l=o.map((function(e){var a;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||""}})),n(l),i(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}(),b=function(){var e=Object(k.a)(E.a.mark((function e(a){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.find((function(e){return e.bookId===a})),r=N.loggedIn()?N.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,q(n,r);case 7:if(e.sent.ok){e.next=10;break}throw new Error("something went wrong!");case 10:p([].concat(Object(h.a)(d),[n.bookId])),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,{fluid:!0,className:"text-light bg-dark"},l.a.createElement(O.a,null,l.a.createElement("h1",null,"Search for Books!"),l.a.createElement(y.a,{onSubmit:g},l.a.createElement(y.a.Row,null,l.a.createElement(S.a,{xs:12,md:8},l.a.createElement(y.a.Control,{name:"searchInput",value:s,onChange:function(e){return i(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),l.a.createElement(S.a,{xs:12,md:4},l.a.createElement(x.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),l.a.createElement(O.a,null,l.a.createElement("h2",null,t.length?"Viewing ".concat(t.length," results:"):"Search for a book to begin"),l.a.createElement(I.a,null,t.map((function(e){return l.a.createElement(C.a,{key:e.bookId,border:"dark"},e.image?l.a.createElement(C.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,l.a.createElement(C.a.Body,null,l.a.createElement(C.a.Title,null,e.title),l.a.createElement("p",{className:"small"},"Authors: ",e.authors),l.a.createElement(C.a.Text,null,e.description),N.loggedIn()&&l.a.createElement(x.a,{disabled:null===d||void 0===d?void 0:d.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return b(e.bookId)}},(null===d||void 0===d?void 0:d.some((function(a){return a===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))},J=function(){var e=Object(o.useState)({}),a=Object(w.a)(e,2),t=a[0],n=a[1],r=Object.keys(t).length;Object(o.useEffect)((function(){(function(){var e=Object(k.a)(E.a.mark((function e(){var a,t,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=N.loggedIn()?N.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.next=6,_(a);case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:r=e.sent,n(r),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}})()()}),[r]);var c=function(){var e=Object(k.a)(E.a.mark((function e(a){var t,r,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=N.loggedIn()?N.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,P(a,t);case 6:if((r=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,r.json();case 11:o=e.sent,n(o),$(a),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(a){return e.apply(this,arguments)}}();return r?l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,{fluid:!0,className:"text-light bg-dark"},l.a.createElement(O.a,null,l.a.createElement("h1",null,"Viewing saved books!"))),l.a.createElement(O.a,null,l.a.createElement("h2",null,t.savedBooks.length?"Viewing ".concat(t.savedBooks.length," saved ").concat(1===t.savedBooks.length?"book":"books",":"):"You have no saved books!"),l.a.createElement(I.a,null,t.savedBooks.map((function(e){return l.a.createElement(C.a,{key:e.bookId,border:"dark"},e.image?l.a.createElement(C.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,l.a.createElement(C.a.Body,null,l.a.createElement(C.a.Title,null,e.title),l.a.createElement("p",{className:"small"},"Authors: ",e.authors),l.a.createElement(C.a.Text,null,e.description),l.a.createElement(x.a,{className:"btn-block btn-danger",onClick:function(){return c(e.bookId)}},"Delete this Book!")))}))))):l.a.createElement("h2",null,"LOADING...")},z=t(144),G=t(143),U=t(138),V=t(145),Y=t(51),K=t(136),A=t(146),M=t(81),H=t(142),R=(Object(H.a)(n||(n=Object(M.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),Object(H.a)(r||(r=Object(M.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"])))),W=function(){var e=Object(o.useState)({username:"",email:"",password:""}),a=Object(w.a)(e,2),t=a[0],n=a[1],r=Object(A.a)(R),c=Object(w.a)(r,1)[0],s=Object(o.useState)(!1),u=Object(w.a)(s,1)[0],m=Object(o.useState)(!1),d=Object(w.a)(m,2),p=d[0],g=d[1],b=function(e){var a=e.target,r=a.name,o=a.value;n(Object(i.a)(Object(i.a)({},t),{},Object(Y.a)({},r,o)))},v=function(){var e=Object(k.a)(E.a.mark((function e(a){var r,o,l,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,c(t);case 6:if((r=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,r.json();case 11:o=e.sent,l=o.token,s=o.user,console.log(s),N.login(l),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0),g(!0);case 22:n({username:"",email:"",password:""});case 23:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{noValidate:!0,validated:u,onSubmit:v},l.a.createElement(K.a,{dismissible:!0,onClose:function(){return g(!1)},show:p,variant:"danger"},"Something went wrong with your signup!"),l.a.createElement(y.a.Group,null,l.a.createElement(y.a.Label,{htmlFor:"username"},"Username"),l.a.createElement(y.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:b,value:t.username,required:!0}),l.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Username is required!")),l.a.createElement(y.a.Group,null,l.a.createElement(y.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(y.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:b,value:t.email,required:!0}),l.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Email is required!")),l.a.createElement(y.a.Group,null,l.a.createElement(y.a.Label,{htmlFor:"password"},"Password"),l.a.createElement(y.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:b,value:t.password,required:!0}),l.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Password is required!")),l.a.createElement(x.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")))},Q=function(){var e=Object(o.useState)({email:"",password:""}),a=Object(w.a)(e,2),t=a[0],n=a[1],r=Object(o.useState)(!1),c=Object(w.a)(r,1)[0],s=Object(o.useState)(!1),u=Object(w.a)(s,2),m=u[0],d=u[1],p=function(e){var a=e.target,r=a.name,o=a.value;n(Object(i.a)(Object(i.a)({},t),{},Object(Y.a)({},r,o)))},g=function(){var e=Object(k.a)(E.a.mark((function e(a){var r,o,l,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,s=t,fetch("/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 6:if((r=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,r.json();case 11:o=e.sent,l=o.token,c=o.user,console.log(c),N.login(l),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0),d(!0);case 22:n({username:"",email:"",password:""});case 23:case"end":return e.stop()}var s}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{noValidate:!0,validated:c,onSubmit:g},l.a.createElement(K.a,{dismissible:!0,onClose:function(){return d(!1)},show:m,variant:"danger"},"Something went wrong with your login credentials!"),l.a.createElement(y.a.Group,null,l.a.createElement(y.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(y.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:p,value:t.email,required:!0}),l.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Email is required!")),l.a.createElement(y.a.Group,null,l.a.createElement(y.a.Label,{htmlFor:"password"},"Password"),l.a.createElement(y.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:p,value:t.password,required:!0}),l.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Password is required!")),l.a.createElement(x.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},X=function(){var e=Object(o.useState)(!1),a=Object(w.a)(e,2),t=a[0],n=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(z.a,{bg:"dark",variant:"dark",expand:"lg"},l.a.createElement(O.a,{fluid:!0},l.a.createElement(z.a.Brand,{as:b.b,to:"/"},"Google Books Search"),l.a.createElement(z.a.Toggle,{"aria-controls":"navbar"}),l.a.createElement(z.a.Collapse,{id:"navbar"},l.a.createElement(G.a,{className:"ml-auto"},l.a.createElement(G.a.Link,{as:b.b,to:"/"},"Search For Books"),N.loggedIn()?l.a.createElement(l.a.Fragment,null,l.a.createElement(G.a.Link,{as:b.b,to:"/saved"},"See Your Books"),l.a.createElement(G.a.Link,{onClick:N.logout},"Logout")):l.a.createElement(G.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),l.a.createElement(U.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},l.a.createElement(V.a.Container,{defaultActiveKey:"login"},l.a.createElement(U.a.Header,{closeButton:!0},l.a.createElement(U.a.Title,{id:"signup-modal"},l.a.createElement(G.a,{variant:"pills"},l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Link,{eventKey:"login"},"Login")),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Link,{eventKey:"signup"},"Sign Up"))))),l.a.createElement(U.a.Body,null,l.a.createElement(V.a.Content,null,l.a.createElement(V.a.Pane,{eventKey:"login"},l.a.createElement(Q,{handleModalClose:function(){return n(!1)}})),l.a.createElement(V.a.Pane,{eventKey:"signup"},l.a.createElement(W,{handleModalClose:function(){return n(!1)}})))))))},Z=Object(u.a)({uri:"/graphql"}),ee=Object(g.a)((function(e,a){var t=a.headers,n=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},t),{},{authorization:n?"Bearer ".concat(n):""})}})),ae=new m.a({link:ee.concat(Z),cache:new d.a});var te=function(){return l.a.createElement(p.a,{client:ae},l.a.createElement(b.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(X,null),l.a.createElement(v.c,null,l.a.createElement(v.a,{exact:!0,path:"/",component:D}),l.a.createElement(v.a,{exact:!0,path:"/saved",component:J}),l.a.createElement(v.a,{render:function(){return l.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(te,null)),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.bf3853cf.chunk.js.map