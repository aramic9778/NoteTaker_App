(this.webpackJsonpnotes_app=this.webpackJsonpnotes_app||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(8),o=a.n(s),r=(a(15),a(7)),l=a(9),i=a(2),d=a(4),j=a(0),u=function(e){var t=e.id,a=e.text,c=e.date,s=e.handleDeleteNote,o=e.handleEditNote,r=Object(n.useState)(!1),l=Object(i.a)(r,2),u=l[0],h=l[1],b=Object(n.useState)(a),O=Object(i.a)(b,2),x=O[0],v=O[1];return Object(j.jsx)("div",{children:u?Object(j.jsxs)("div",{className:"note",children:[Object(j.jsx)("textarea",{className:"edit_textarea",rows:"8",cols:"10",onChange:function(e){200-e.target.value.length>=0&&v(e.target.value)},autoFocus:!0,value:x,onFocus:function(e){var t=e.target.value;e.target.value="",e.target.value=t},children:" "}),Object(j.jsxs)("div",{className:"note-footer",children:[Object(j.jsxs)("small",{children:[200-x.length," Remaining"]}),Object(j.jsx)("button",{onClick:function(){return function(e){h(!u),o(x,e)}(t)},className:"save",children:"Save"})]})]}):Object(j.jsxs)("div",{className:"note",children:[" ",Object(j.jsx)("span",{className:"spanik",children:a}),Object(j.jsxs)("div",{className:"note-footer",children:[Object(j.jsx)("small",{children:c}),Object(j.jsxs)("div",{children:[Object(j.jsx)(d.b,{onClick:function(){return h(!u)},className:"edit-icon bounce",size:"1.3em"}),Object(j.jsx)(d.a,{onClick:function(){return s(t)},className:"delete-icon bounce",size:"1.3em"})]})]})]})})},h=function(e){var t=e.handleAddNote,a=Object(n.useState)(""),c=Object(i.a)(a,2),s=c[0],o=c[1];return Object(j.jsxs)("div",{className:"note new",children:[Object(j.jsx)("textarea",{value:s,onChange:function(e){200-e.target.value.length>=0&&o(e.target.value)},rows:"8",cols:"10",placeholder:"Type to add a note..."}),Object(j.jsxs)("div",{className:"note-footer",children:[Object(j.jsxs)("small",{children:[200-s.length," Remaining"]}),Object(j.jsx)("button",{className:"save",onClick:function(){s.trim().length>0&&(t(s),o(""))},children:"Save"})]})]})},b=function(e){var t=e.notes,a=e.handleAddNote,n=e.handleDeleteNote,c=e.handleEditNote;return Object(j.jsxs)("div",{className:"noteslist",children:[t.map((function(e){return Object(j.jsx)(u,{handleDeleteNote:n,handleEditNote:c,id:e.id,text:e.text,date:e.date})})),Object(j.jsx)(h,{handleAddNote:a})]})},O=a(10),x=function(e){var t=e.handleSearchNote;return Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)(d.c,{className:"search-icons",size:"1.3em"}),Object(j.jsx)("input",{onChange:function(e){return t(e.target.value)},type:"text",placeholder:"type to search"})]})},v=function(e){var t=e.handleToggleDarkMode;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:Object(j.jsxs)("div",{class:"morphing",children:[Object(j.jsx)("div",{class:"word",children:"When your heart"}),Object(j.jsx)("div",{class:"word",children:"speaks,"}),Object(j.jsx)("div",{class:"word",children:"take good notes..."})]})})}),Object(j.jsx)("div",{className:"togglik",children:Object(j.jsx)("button",{onClick:function(){return t((function(e){return!e}))},className:"save",children:"Board Color"})})]})},f=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),d=o[0],u=o[1],h=Object(n.useState)(JSON.parse(localStorage.getItem("darkmode"))),f=Object(i.a)(h,2),m=f[0],N=f[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-notes-app-data"));e&&c(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("react-notes-app-data",JSON.stringify(a))}),[a]),Object(n.useEffect)((function(){localStorage.setItem("darkmode",JSON.stringify(m))}),[m]);return Object(j.jsx)("div",{className:"".concat(m&&"dark-mode"),children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(v,{handleToggleDarkMode:N}),Object(j.jsx)(x,{handleSearchNote:u}),Object(j.jsx)(b,{handleDeleteNote:function(e){var t=a.filter((function(t){return t.id!==e}));c(t),window.location.reload()},notes:a.filter((function(e){return e.text.toLowerCase().includes(d)})),handleAddNote:function(e){var t=new Date,n={id:Object(O.a)(),text:e,date:t.toLocaleDateString()},s=[].concat(Object(l.a)(a),[n]);c(s)},handleEditNote:function(e,t){var n=a.map((function(a){return a.id==t?Object(r.a)(Object(r.a)({},a),{},{text:e}):a}));c(n)}})]})})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7e5eec58.chunk.js.map