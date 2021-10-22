(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{16:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(5),r=a.n(o),s=(a(15),a(16),a(3)),i=a(7),u=(a(17),a(1));function l(e){var t=e.submit,a=Object(n.useState)(""),c=Object(s.a)(a,2),o=c[0],r=c[1];return Object(u.jsx)("header",{className:"Searchbar",children:Object(u.jsxs)("form",{className:"SearchForm",onSubmit:function(e){if(e.preventDefault(),""===o.trim())return i.b.error("What picture do you need?");t(o),r("")},children:[Object(u.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(u.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(u.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:o,onChange:function(e){var t=e.currentTarget.value;r(t.toLowerCase())}})]})})}var j=a(9);var m=function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("22935349-f238c1b9d1a1a29229f76f105","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():e}))},b=function(e){var t=e.image,a=t.webformatURL,n=t.tags,c=e.image,o=e.onModalOpen;return Object(u.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return o(c)},children:Object(u.jsx)("img",{src:a,alt:n,className:"ImageGalleryItem-image"})})},d=function(e){var t=e.images,a=e.onModalOpen;return Object(u.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(u.jsx)(b,{image:e,onModalOpen:a},"image-item-image-".concat(e.id))}))})},O=function(e){var t=e.onBtnClick;return Object(u.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more..."})},h=a(10),f=a.n(h),g=(a(39),function(){return Object(u.jsx)("div",{role:"alert",className:"loader",children:Object(u.jsx)(f.a,{type:"MutatingDots",color:"#3f51b5",height:100,width:100,timeout:2e3})})});function p(e){var t=e.onModalClose,a=e.activeModalImg,c=a.largeImageURL,o=a.tags;Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}),[]);var r=function(e){27===e.keyCode&&t()};return Object(u.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&t()},children:Object(u.jsx)("div",{className:"Modal",children:Object(u.jsx)("img",{src:c,alt:o,className:"modalImg"})})})}var v="idle",x="resolved",S="rejected";function w(e){var t=e.searchImageName,a=Object(n.useState)([]),c=Object(s.a)(a,2),o=c[0],r=c[1],i=Object(n.useState)(null),l=Object(s.a)(i,2),b=l[0],h=l[1],f=Object(n.useState)(v),w=Object(s.a)(f,2),y=w[0],N=w[1],k=Object(n.useState)(null),I=Object(s.a)(k,2),M=I[0],C=I[1],E=Object(n.useState)(!1),F=Object(s.a)(E,2),L=F[0],T=F[1],B=Object(n.useState)(null),q=Object(s.a)(B,2),G=q[0],D=q[1],J=Object(n.useState)(1),R=Object(s.a)(J,2),U=R[0],_=R[1],z=function(e,t){T(!0),_(t),setTimeout((function(){m(e,t).then((function(a){var n=a.hits;if(a.total)r((function(e){return[].concat(Object(j.a)(e||[]),Object(j.a)(n))})),N(x);else{var c=new Error("There is no picture with ".concat(e," name, please enter another request"));h(c),N(S)}1!==t&&setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),0)})).catch((function(e){h(e),N(S)})),T(!1)}),500)},A=function(){C(!M)};return Object(n.useEffect)((function(){t&&(r([]),T(!1),z(t,1))}),[t]),y===v?Object(u.jsx)("div",{className:"errorMessage",children:"Please enter your request"}):y===S?Object(u.jsx)("h1",{children:b.message}):y===x?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{images:o,onModalOpen:function(e){D(e),A()}}),L&&Object(u.jsx)(g,{}),Object(u.jsx)(O,{onBtnClick:function(){T(!0),z(t,U+1)}}),M&&Object(u.jsx)(p,{onModalClose:A,activeModalImg:G})]}):void 0}a(40);function y(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(i.a,{}),Object(u.jsx)(l,{submit:c}),Object(u.jsx)(w,{searchImageName:a})]})}r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.8661ab38.chunk.js.map