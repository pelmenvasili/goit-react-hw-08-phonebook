"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[634],{7634:function(t,e,n){n.r(e),n.d(e,{default:function(){return L}});var a=n(2791),r=n(9434),s=n(7689),o=n(9439),c="ContactForm_input__Bl93P",u="ContactForm_label__-cVXI",i="ContactForm_addContactBtn__3KI6e",l="ContactForm_form__dhl+T",m=n(8318),d=function(t){return t.contacts.filter};console.log(d);var h=function(t){return t.contacts.items},f=n(184),_=function(){var t=(0,r.v9)(h),e=(0,r.I0)(),n=(0,a.useState)(""),s=(0,o.Z)(n,2),d=s[0],_=s[1],p=(0,a.useState)(""),g=(0,o.Z)(p,2),b=g[0],x=g[1];return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=function(){_(""),x("")};if(t.find((function(t){return t.name===d||t.number===b})))return alert("Contact with the same name or number already exists."),void a();e((0,m.uK)({name:d,number:b})),a()},className:l,children:[(0,f.jsxs)("label",{className:u,children:["Name",(0,f.jsx)("input",{className:c,type:"text",name:"name",value:d,onChange:function(t){_(t.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,f.jsxs)("label",{className:u,children:["Number",(0,f.jsx)("input",{className:c,type:"tel",name:"number",value:b,onChange:function(t){x(t.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,f.jsx)("button",{type:"submit",className:i,children:"Add contact"})]})})},p="ContactListItem_contact__gtH4X",g="ContactListItem_contactName__kCRjB",b="ContactListItem_deleteButton__b1Nqt",x=function(t){var e=t.name,n=t.number,a=t.id,s=(0,r.I0)();return(0,f.jsxs)("li",{className:p,children:[(0,f.jsxs)("span",{className:g,children:[e,":"]})," ",n,(0,f.jsx)("button",{type:"button",onClick:function(){return s((0,m.GK)(a))},className:b,children:"Delete"})]},a)},C="ContactList_contactList__UFVCg",v="ContactList_text__+NWAW",j=function(){var t=(0,r.v9)((function(t){return function(t){var e=d(t);return console.log(e),h(t).filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})).sort((function(t,e){return t.name.localeCompare(e.name)}))}(t)}));return(0,f.jsx)("ul",{className:C,children:0!==t.length?t.map((function(t){var e=t.id,n=t.name,a=t.number,r=t.phone;return(0,f.jsx)(x,{name:n,number:a||r,id:e},e)})):(0,f.jsx)("p",{className:v,children:"No contact found with that name"})})},N=n(9652),I=function(){var t=(0,r.I0)(),e=(0,r.v9)(d);return(0,f.jsxs)("label",{className:u,children:["Find contacts by name",(0,f.jsx)("input",{type:"text",value:e,onChange:function(e){t((0,N.a)(e.target.value))},className:c})]})},F=n(9869),L=function(){var t=(0,s.s0)(),e=(0,r.v9)(F.Z.getIsLoggedIn);return(0,a.useEffect)((function(){localStorage.getItem("isLoggedIn")||t("/login")}),[t]),e?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(_,{}),(0,f.jsx)(I,{}),(0,f.jsx)(j,{})]}):(0,f.jsx)(s.Fg,{to:"/login",replace:!0})}}}]);
//# sourceMappingURL=634.b6e9f106.chunk.js.map