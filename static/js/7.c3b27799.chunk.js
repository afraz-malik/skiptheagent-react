(this.webpackJsonpskiptheagent=this.webpackJsonpskiptheagent||[]).push([[7],{116:function(e,t,a){"use strict";a.r(t);var c=a(36),s=a(37),o=a(39),n=a(38),r=a(2),l=a.n(r),i=a(71),d=a(84),b=a(9),j=function(e){Object(o.a)(a,e);var t=Object(n.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(i.a,{}),Object(b.jsx)(d.b,{})]})}}]),a}(l.a.Component);t.default=j},66:function(e,t,a){"use strict";var c=a(40),s=a(41),o=(a(2),a(72)),n=a.n(o),r=a(9);t.a=function(e){var t=e.children,a=e.login,o=e.viewmore,l=e.compare,i=e.edit,d=Object(s.a)(e,["children","login","viewmore","compare","edit"]);return Object(r.jsx)("button",Object(c.a)(Object(c.a)({className:"\n        ".concat(a?"".concat(n.a.login):null," \n        ").concat(n.a.button," \n        ").concat(o?"".concat(n.a.viewmore):null,"\n        ").concat(l?"".concat(n.a.compare):null,"\n        ").concat(i?"".concat(n.a.edit):null,"\n    ")},d),{},{children:t}))}},67:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(70);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],c=!0,s=!1,o=void 0;try{for(var n,r=e[Symbol.iterator]();!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(l){s=!0,o=l}finally{try{c||null==r.return||r.return()}finally{if(s)throw o}}return a}}(e,t)||Object(c.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},68:function(e,t,a){"use strict";var c=a(36),s=a(37),o=a(39),n=a(38),r=a(2),l=a.n(r),i=a(73),d=a.n(i),b=a(9),j=function(e){Object(o.a)(a,e);var t=Object(n.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:d.a.boxmodel,children:[Object(b.jsxs)("div",{className:d.a.boxmodel_topbar,children:[Object(b.jsx)("div",{className:d.a.boxmodel_title,children:Object(b.jsx)("p",{children:this.props.title})}),Object(b.jsx)("div",{className:d.a.extra}),Object(b.jsx)("div",{className:d.a.extra}),"arrow"===this.props.sidebar?Object(b.jsxs)("div",{className:d.a.boxmodel_nav,children:[Object(b.jsx)("div",{className:d.a.arrow,onClick:function(){return e.props.scrollRight()},children:Object(b.jsx)("img",{alt:"",src:"images\\leftarrow.png"})}),Object(b.jsx)("div",{className:d.a.arrow,onClick:function(){return e.props.scrollLeft()},children:Object(b.jsx)("img",{alt:"",src:"images\\rightarrow.png"})})]}):null,"cancel"===this.props.sidebar?Object(b.jsx)("div",{className:d.a.cancel,children:Object(b.jsx)("img",{alt:"",src:"images\\cancel.png",onClick:function(){return e.props.closeBox()}})}):null,"alert"===this.props.sidebar?Object(b.jsxs)("div",{className:d.a.alert,children:["+ ",Object(b.jsx)("span",{onClick:function(){return e.props.onAlert()},children:"ADD ALERT"})]}):null]}),this.props.children]})}}]),a}(l.a.Component);t.a=j},69:function(e,t,a){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,c=new Array(t);a<t;a++)c[a]=e[a];return c}a.d(t,"a",(function(){return c}))},70:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(69);function s(e,t){if(e){if("string"===typeof e)return Object(c.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(c.a)(e,t):void 0}}},71:function(e,t,a){"use strict";var c=a(67),s=a(2),o=a(74),n=a.n(o),r=a(35),l=a(11),i=a(26),d=a(15),b=a(9);t.a=Object(l.g)(Object(i.b)((function(e){return{url:e.URLReducer.url,user:e.setUser.user}}),(function(e){return{signOut:function(){return e(Object(d.k)())}}}))((function(e){e.url;var t=e.user,a=e.signOut,o=Object(s.useState)(!0),l=Object(c.a)(o,2),i=l[0],d=l[1],j=function(){d(!i)};return Object(b.jsxs)("div",{className:n.a.container,children:[Object(b.jsxs)("header",{className:n.a.header,children:[Object(b.jsx)("div",{className:n.a.leftheader,children:Object(b.jsxs)("div",{className:n.a.lefttext,children:[Object(b.jsx)("p",{children:"Call Us Now: +01 123 456 78 "}),Object(b.jsx)("p",{children:"Email: info@skiptheagent.com"})]})}),Object(b.jsx)("div",{className:n.a.rightheader,children:t?Object(b.jsxs)("div",{className:n.a.loggedinheader,children:[Object(b.jsxs)("div",{className:n.a.loggedinheaderleft,children:["Welcome ".concat(t.name,"!."),Object(b.jsxs)("div",{className:n.a.dropdown,onClick:function(){return j()},children:[Object(b.jsx)("img",{className:n.a.dropbtn,alt:"",src:"images/whitedropdown.png"}),Object(b.jsxs)("div",{className:n.a.dropdown_content,style:i?{display:"none"}:{display:"block"},children:[Object(b.jsx)(r.b,{to:"/dashboard",href:"#",children:"Dashboard"}),Object(b.jsx)(r.b,{to:"/",href:"#",onClick:function(){return a()},children:"Log out"})]})]})]}),Object(b.jsx)("span",{className:n.a.likeimg,children:Object(b.jsx)(r.b,{to:"/dashboard/saved",children:Object(b.jsx)("img",{src:"images/whitelike.png",alt:""})})}),Object(b.jsx)(r.b,{to:"/dashboard",children:Object(b.jsx)("img",{src:"images/envelope.png",alt:""})})]}):Object(b.jsxs)("div",{className:n.a.righttext,children:[Object(b.jsx)("p",{className:n.a.firstp,children:"Welcome to skiptheagent."}),Object(b.jsxs)("p",{className:n.a.secondp,children:["Kindly ",Object(b.jsx)(r.b,{to:"/login",children:"SIGN IN"})," or",Object(b.jsx)(r.b,{to:"/register",children:" SIGN UP"})]})]})})]}),Object(b.jsxs)("div",{className:n.a.smallheader,children:[Object(b.jsx)("div",{className:n.a.smalllogo,children:Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)("h3",{children:"LOGO "})})}),t?Object(b.jsxs)("div",{className:n.a.loggedinheader,children:[Object(b.jsxs)("div",{className:n.a.loggedinheaderleft,children:["Welcome ","".concat(t.name,"!"),".",Object(b.jsxs)("div",{className:n.a.dropdown,onClick:function(){return j()},children:[Object(b.jsx)("img",{className:n.a.dropbtn,alt:"",src:"images/greendropdown.png"}),Object(b.jsxs)("div",{className:n.a.dropdown_content,style:i?{display:"none"}:{display:"block"},children:[Object(b.jsx)(r.b,{to:"/dashboard",href:"#",children:"Dashboard"}),Object(b.jsx)(r.b,{to:"/",href:"#",onClick:function(){return a()},children:"Log out"})]})]})]}),Object(b.jsx)("span",{className:n.a.likeimg,children:Object(b.jsx)(r.b,{to:"/dashboard/saved",children:Object(b.jsx)("img",{src:"images/greenheart.png",alt:""})})}),Object(b.jsx)(r.b,{to:"/dashboard",children:Object(b.jsx)("img",{src:"images/greenenvelope.png",alt:""})})]}):Object(b.jsxs)("div",{className:n.a.smalltext,children:[Object(b.jsx)("p",{children:"Welcome to skiptheagent."}),Object(b.jsxs)("p",{children:["Kindly ",Object(b.jsx)(r.b,{to:"/login",children:"SIGN IN"})," or",Object(b.jsx)(r.b,{to:"/register",children:" SIGN UP"})]})]})]}),Object(b.jsxs)("nav",{className:n.a.nav,children:[Object(b.jsx)("div",{className:n.a.leftnav,children:Object(b.jsx)("div",{className:n.a.logo,children:Object(b.jsx)("h3",{children:Object(b.jsx)(r.b,{to:"/",children:"LOGO"})})})}),Object(b.jsx)("div",{className:n.a.rightnav,children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"/login",children:"SELL MY CAR"})}),Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"/listing",children:"SHOP FOR NEW CARS"})}),Object(b.jsx)("li",{className:n.a.consolt,children:Object(b.jsx)(r.b,{to:"/ownership",children:"CONSULTATIONS"})})]})})]})]})})))},72:function(e,t,a){e.exports={button:"button_button__3OTfi",login:"button_login__3bgKw",viewmore:"button_viewmore__3ogzd",edit:"button_edit__3voB6",compare:"button_compare__1NY72"}},73:function(e,t,a){e.exports={boxmodel:"boxModel_boxmodel__I-VEq",boxmodel_topbar:"boxModel_boxmodel_topbar__-MY2U",boxmodel_title:"boxModel_boxmodel_title__PS5FW",extra:"boxModel_extra__1Q_lc",boxmodel_nav:"boxModel_boxmodel_nav__2-vqN",arrow:"boxModel_arrow__3lKJx",cancel:"boxModel_cancel__2hdz_",alert:"boxModel_alert__1-EDo"}},74:function(e,t,a){e.exports={container:"Header_container__2kaZM",header:"Header_header__34F3q",leftheader:"Header_leftheader__3_OME",lefttext:"Header_lefttext__iQnYU",rightheader:"Header_rightheader__35zt5",righttext:"Header_righttext__2DVxL",loggedinheader:"Header_loggedinheader__1W71G",loggedinheaderleft:"Header_loggedinheaderleft__bC--9",dropdown:"Header_dropdown__8b-WI",dropdown_content:"Header_dropdown_content__1TXu8",likeimg:"Header_likeimg__24W_4",smallheader:"Header_smallheader__wq88O",smalltext:"Header_smalltext__KFEBL",smalllogo:"Header_smalllogo__17DVm",nav:"Header_nav__3dxU8",leftnav:"Header_leftnav__3ilTb",logo:"Header_logo__Hl172",rightnav:"Header_rightnav__1TV3h",consolt:"Header_consolt__1MLBh"}},84:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var c=a(43),s=a(40),o=a(67),n=a(2),r=a(85),l=a.n(r),i=a(26),d=a(15),b=a(68),j=a(66),x=a(42),h=a(9),O=function(e){var t=e.close,a=e.email;return Object(h.jsx)("div",{className:"".concat(l.a.forgetPassword,"  forgetPassword_Box"),children:Object(h.jsx)("div",{className:l.a.box,children:Object(h.jsx)("div",{className:"".concat(l.a.boxmodel),children:Object(h.jsx)(b.a,{title:"FORGET PASSWORD",sidebar:"cancel",closeBox:t,children:Object(h.jsxs)("div",{className:"".concat(l.a.boxmodel_body," ").concat(l.a.boxmodel_body3),children:[Object(h.jsx)("div",{className:l.a.bodytext,children:Object(h.jsxs)("p",{children:["For ","".concat(a)]})}),Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{type:"password",name:"password",placeholder:"New Password"}),Object(h.jsx)("input",{type:"password",name:"password",placeholder:"Confirm New Password"}),Object(h.jsx)(j.a,{type:"submit",name:"login",login:"login",children:"CHANGE PASSWORD"})]})]})})})})})};t.b=Object(i.b)((function(e){return{isLoading:e.setUser.loading,success:e.setUser.success}}),null)((function(e){var t=e.isLoading,a=e.success;Object(n.useEffect)((function(){1===a&&f({input:!1,info:!0,password:!1})}),[a]);var r=Object(n.useState)(""),O=Object(o.a)(r,2),m=O[0],u=O[1],_=Object(n.useState)({input:!0,info:!1,password:!1}),p=Object(o.a)(_,2),g=p[0],f=p[1],v=Object(i.c)(),w=function(e){return function(){0===e&&f(Object(s.a)(Object(s.a)({},g),{},{input:!1})),1===e&&f(Object(s.a)(Object(s.a)({},g),{},{info:!1})),2===e&&f(Object(s.a)(Object(s.a)({},g),{},{password:!1}))}};return!1===g.input&&!1===g.info&&!1===g.password&&f(Object(s.a)(Object(s.a)({},g),{},{input:!0})),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"".concat(l.a.boxmodel," forgetPassword_Box"),style:g.input?{display:"flex"}:{display:"none"},children:Object(h.jsx)(b.a,{title:"FORGET PASSWORD",closeBox:w(0),children:Object(h.jsxs)("div",{className:l.a.boxmodel_body,children:[Object(h.jsx)("div",{className:l.a.bodytext,children:Object(h.jsx)("p",{children:"Enter your email below to reset your password"})}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v(Object(d.b)(m))},children:[Object(h.jsx)("input",{type:"email",name:"email",placeholder:"Enter email here",required:!0,onChange:function(e){u(Object(s.a)(Object(s.a)({},m),{},Object(c.a)({},e.target.name,e.target.value)))}}),Object(h.jsx)(j.a,{type:"submit",name:"login",login:"login",children:"CHANGE PASSWORD"})]})]})})}),Object(h.jsx)("div",{className:"".concat(l.a.boxmodel," forgetPassword_Box"),style:g.info?{display:"flex"}:{display:"none"},children:Object(h.jsx)(b.a,{title:"FORGET PASSWORD",sidebar:"cancel",closeBox:w(1),children:Object(h.jsx)("div",{className:"".concat(l.a.boxmodel_body," ").concat(l.a.boxmodel_body2),children:Object(h.jsx)("div",{className:l.a.bodytext,children:Object(h.jsx)("p",{children:"We have send password reset link to your registered email address. Please click the link to complete the reset process"})})})})}),Object(h.jsx)("div",{className:"".concat(l.a.boxmodel," forgetPassword_Box"),style:g.password?{display:"flex"}:{display:"none"},children:Object(h.jsx)(b.a,{title:"FORGET PASSWORD",sidebar:"cancel",closeBox:w(2),children:Object(h.jsxs)("div",{className:"".concat(l.a.boxmodel_body," ").concat(l.a.boxmodel_body3),children:[Object(h.jsx)("div",{className:l.a.bodytext,children:Object(h.jsx)("p",{children:"For maqware21@gmail.com"})}),Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{type:"password",name:"password",placeholder:"New Password"}),Object(h.jsx)("input",{type:"password",name:"password",placeholder:"Confirm New Password"}),Object(h.jsx)(j.a,{type:"submit",name:"login",login:"login",children:"CHANGE PASSWORD"})]})]})})}),t?Object(h.jsx)(x.a,{}):null]})}))},85:function(e,t,a){e.exports={boxmodel:"ForgetPasswordBox_boxmodel__QlvWo",cancel:"ForgetPasswordBox_cancel__2myRK",boxmodel_body:"ForgetPasswordBox_boxmodel_body__3BivL",bodytext:"ForgetPasswordBox_bodytext__3FjxL",boxmodel_body2:"ForgetPasswordBox_boxmodel_body2__wwsOY",boxmodel_body3:"ForgetPasswordBox_boxmodel_body3__cv4DM",forgetPassword:"ForgetPasswordBox_forgetPassword__27w8Q",box:"ForgetPasswordBox_box__bqefL"}}}]);
//# sourceMappingURL=7.c3b27799.chunk.js.map