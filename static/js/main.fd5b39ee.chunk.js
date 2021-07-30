(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,,,,,function(t,e,n){t.exports={Section:"Section_Section__3IY9v",Section__Title:"Section_Section__Title__1upHu"}},,function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__TEcYO",ContactForm__Button:"ContactForm_ContactForm__Button__3it8r"}},function(t,e,n){t.exports={ContactList:"ContactList_ContactList__2pXPJ",ContactList__Item:"ContactList_ContactList__Item__1BYex"}},,function(t,e,n){t.exports={MainContainer:"MainContainer_MainContainer__2emk2"}},function(t,e,n){t.exports={PageHeader:"PageHeader_PageHeader__t0WZR"}},function(t,e,n){t.exports={ContactListElement__Button:"ContactListElement_ContactListElement__Button__29VEf"}},function(t,e,n){t.exports={Filter:"Filter_Filter__3Ow76"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),i=(n(21),n(22),n(16)),s=n(3),u=n(26),l=n(12),b=n.n(l),j=n(0),m=function(t){var e=t.children;return Object(j.jsx)("div",{className:b.a.MainContainer,children:e})};m.defaultProps={children:Object(j.jsx)(j.Fragment,{})};var d=m,_=n(13),f=n.n(_),h=function(t){var e=t.title;return Object(j.jsx)("div",{className:f.a.PageHeader,children:e})};h.defaultProps={title:"Where is your title?"};var O=h,x=n(7),C=n.n(x),p=function(t){var e=t.title,n=t.children;return Object(j.jsxs)("section",{className:C.a.Section,children:[Object(j.jsx)("h2",{className:C.a.Section__Title,children:e}),n]})};p.defaultProps={title:"Where is your title?",children:Object(j.jsx)(j.Fragment,{})};var v=p,g=n(5),S=n(8),w=n(9),F=n.n(w),N=function(t){var e=t.whenSubmit,n=Object(a.useState)({name:"",number:""}),c=Object(s.a)(n,2),r=c[0],o=c[1],i=function(t){var e=t.currentTarget,n=e.name,a=e.value;o((function(t){return Object(S.a)(Object(S.a)({},t),{},Object(g.a)({},n,a))}))},u=function(){o({name:"",number:""})};return Object(j.jsxs)("form",{className:F.a.ContactForm,onSubmit:function(t){t.preventDefault(),e(r),u()},children:[Object(j.jsxs)("label",{children:["Name: ",Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r.name,onChange:i})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{children:["Number: ",Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:r.number,onChange:i})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:F.a.ContactForm__Button,type:"submit",children:"Add Contact"})]})},L=n(14),A=n.n(L),y=function(t){var e=t.name,n=t.number,a=t.whenDelete;return Object(j.jsxs)(j.Fragment,{children:[e,": ",n,Object(j.jsx)("button",{className:A.a.ContactListElement__Button,type:"button",onClick:a,children:"Delete"})]})},k=n(10),B=n.n(k),E=function(t){var e=t.contacts,n=t.filter,a=t.whenDelete,c=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return Object(j.jsx)("ul",{className:B.a.ContactList,children:c.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(j.jsx)("li",{className:B.a.ContactList__Item,children:Object(j.jsx)(y,{name:n,number:c,whenDelete:function(){return a(e)}})},e)}))})},P=n(15),z=n.n(P),I=function(t){var e=t.filterValue,n=t.whenChange;return Object(j.jsxs)("label",{children:["Find by Name: ",Object(j.jsx)("input",{className:z.a.Filter,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:n})]})},J=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),l=o[0],b=o[1],m=Object(a.useRef)(!0);Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&c(t)}),[]),Object(a.useEffect)((function(){!0!==m.current?localStorage.setItem("contacts",JSON.stringify(n)):m.current=!1}),[n]);return Object(j.jsxs)(d,{children:[Object(j.jsx)(O,{title:"React Homework 04. Phonebook"}),Object(j.jsx)(v,{title:"Add Contact",children:Object(j.jsx)(N,{whenSubmit:function(t){var e=t.name,a=t.number;if(n.some((function(t){return t.name===e})))return alert("".concat(e," is already in contacts"));c((function(t){return[].concat(Object(i.a)(t),[{id:Object(u.a)(),name:e,number:a}])}))}})}),Object(j.jsxs)(v,{title:"Contacts",children:[Object(j.jsx)(I,{filterValue:l,whenChange:function(t){b(t.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)(E,{contacts:n,filter:l,whenDelete:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(J,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.fd5b39ee.chunk.js.map