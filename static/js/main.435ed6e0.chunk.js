(this.webpackJsonpshiv=this.webpackJsonpshiv||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(4),l=n.n(a),i=(n(9),n(10),n(2)),r=n(0),o=function(){var e=Object(c.useState)("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)("left"),l=Object(i.a)(a,2),o=l[0],b=l[1],j=Object(c.useState)(""),m=Object(i.a)(j,2),u=m[0],d=m[1],h=Object(c.useState)(20),O=Object(i.a)(h,2),x=O[0],p=O[1],f=Object(c.useState)(),g=Object(i.a)(f,2),v=g[0],y=g[1],N=Object(c.useState)("Open Sans"),S=Object(i.a)(N,2),C=S[0],F=S[1],k=Object(c.useState)("bold"),z=Object(i.a)(k,2),w=z[0],I=z[1],P=Object(c.useState)(0),A=Object(i.a)(P,2),L=A[0],B=A[1];return Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"mb-3 col-md-7",children:Object(r.jsx)("textarea",{className:"form-control text-left",style:{textAlign:o,justifyContent:u,fontFamily:C,fontSize:"".concat(x,"px"),fontWeight:w},value:n,onChange:function(e){s(e.target.value)},id:"myBox",rows:"8"})}),Object(r.jsxs)("div",{className:"col-md-4",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-12",children:[Object(r.jsx)("label",{for:"size",class:"form-label",children:"Font Style:"}),Object(r.jsxs)("select",{className:"input-group custom-select mb-2",onChange:function(e){var t=e.target.value;F(t)},placeholder:"Select Font",children:[Object(r.jsx)("option",{value:"Open Sans",children:"Open Sans"}),Object(r.jsx)("option",{value:"Poppins",children:"Poppins"}),Object(r.jsx)("option",{value:"Zen Antique",children:"Zen Antique"}),Object(r.jsx)("option",{value:"Zen Antique",children:"Noto Sans"}),Object(r.jsx)("option",{value:"Oswald",children:"Oswald"})]})]}),Object(r.jsxs)("div",{className:"col-12",children:[Object(r.jsx)("label",{for:"size",class:"form-label",children:"Font Weight:"}),Object(r.jsxs)("select",{className:" input-group custom-select mb-3",onChange:function(e){var t=e.target.value;I(t)},placeholder:"Font Weight",children:[Object(r.jsx)("option",{value:"bold",children:"Bold"}),Object(r.jsx)("option",{value:"normal",children:"Normal"})]}),Object(r.jsx)("div",{children:Object(r.jsxs)("label",{for:"size",class:"form-label",children:["Font Size:",Object(r.jsx)("a",{onClick:function(){return p(x-1)},className:"btn btn-primary",title:"Decrement",children:"-"}),Object(r.jsx)("input",{type:"text",className:"text-center",name:"size",value:x,onChange:function(e){p(e.target.value)},placeholder:"Change Text Size In px"}),Object(r.jsx)("a",{onClick:function(){return p(x+1)},title:"Increment",className:"btn btn-primary",children:"+"})]})})]}),Object(r.jsx)("div",{className:" m-2",children:Object(r.jsxs)("label",{for:"size",class:"form-label",children:["Per:",Object(r.jsx)("input",{type:"text",name:"size",value:v,onChange:function(e){y(e.target.value)},placeholder:"Change Text Size In %"})]})})]}),Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col",children:[Object(r.jsx)("button",{className:"btn btn-sm btn-primary mx-1 my-1",onClick:function(){b("left")},children:Object(r.jsx)("i",{class:"fas fa-align-left"})}),Object(r.jsx)("button",{className:"btn btn-sm btn-primary mx-1 my-1",onClick:function(){b("center")},children:Object(r.jsx)("i",{class:"fas fa-align-center"})}),Object(r.jsx)("button",{className:"btn btn-sm btn-primary mx-1 my-1",onClick:function(){b("end")},children:Object(r.jsx)("i",{class:"fas fa-align-right"})}),Object(r.jsx)("button",{className:"btn btn-sm btn-primary mx-1 my-1",onClick:function(){d("center")},children:Object(r.jsx)("i",{class:"fas fa-align-justify"})}),Object(r.jsxs)("button",{disabled:0===n.length,className:"btn btn-sm btn-primary mx-1 my-1",onClick:function(){for(var e=0,t=0;t<n.length;t++)"!,;.-?".includes(n[t])&&e++;B(e)},children:["Punctuation: ",L]}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-sm btn-primary my-1",onClick:function(){for(var e=n.split(" "),t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);s(e.join(" "))},children:"First Letter Uppercase"}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-sm btn-primary mx-1 my-1",onClick:function(){var e=n.split(/[ ]+/);s(e.join(" "))},children:"Remove Extra Space"})]})})]}),Object(r.jsxs)("p",{children:["Paragraph: ",0===n.split(" ").filter((function(e){return 0!==e.length})).length?0:n.split("\n").length]}),Object(r.jsxs)("p",{children:["Words: ",n.split(/\s+/).filter((function(e){return 0!==e.length})).length]}),Object(r.jsxs)("p",{children:["Space: ",n.split(" ").length-1]})]})};var b=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsx)(o,{})})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),c(e),s(e),a(e),l(e)}))};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.435ed6e0.chunk.js.map