(this.webpackJsonpskiptheagent=this.webpackJsonpskiptheagent||[]).push([[8],{100:function(e,t,n){e.exports={boxmodel:"LogInBox_boxmodel__11xSS",boxmodel_body:"LogInBox_boxmodel_body__2ZprO",form:"LogInBox_form__2wg6m",afterform:"LogInBox_afterform__17fBZ",socialtext:"LogInBox_socialtext__16HtE",sociallinks:"LogInBox_sociallinks__3I0PB",signup:"LogInBox_signup__EQ09O"}},122:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(71),r=n(43),o=n(40),s=n(67),i=n(100),l=n.n(i),d=n(35),j=n(11),b=n(26),h=n(16),m=n(42),x=n(68),u=n(66),g=n(8),O=Object(j.g)(Object(b.b)((function(e){return{url:e.URLReducer.url,isLoading:e.setUser.loading}}),(function(e){return{setUser:function(t){return e(Object(h.d)(t))},googleSignIn:function(){return e(Object(h.f)())}}}))((function(e){var t=e.url,n=e.isLoading,a=e.googleSignIn,i=e.setUser,j=Object(c.useState)({email:null,password:null}),b=Object(s.a)(j,2),h=b[0],O=b[1],_=function(e){O(Object(o.a)(Object(o.a)({},h),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(g.jsxs)("div",{className:l.a.boxmodel,children:[Object(g.jsx)(x.a,{title:"LOGIN",children:Object(g.jsxs)("div",{className:l.a.boxmodel_body,children:[Object(g.jsxs)("form",{className:l.a.form,onSubmit:function(e){e.preventDefault();var t=h.email,n=h.password;i({email:t,password:n})},children:[Object(g.jsx)("input",{title:"For test user Email: test@gmail.com",type:"email",name:"email",placeholder:"Email",onChange:_}),Object(g.jsx)("input",{type:"password",name:"password",placeholder:"Password",onChange:_}),Object(g.jsx)(d.b,{to:"".concat(t,"forget"),children:"Forget Password?"}),Object(g.jsx)(u.a,{type:"submit",name:"login",login:"login",children:"SUBMIT"})]}),Object(g.jsxs)("div",{className:l.a.afterform,children:[Object(g.jsx)("div",{className:l.a.socialtext,children:Object(g.jsx)("p",{children:Object(g.jsx)("span",{children:"Or Sign in with your social network"})})}),Object(g.jsxs)("div",{className:l.a.sociallinks,children:[Object(g.jsx)("div",{className:l.a.fbsingin,children:Object(g.jsx)(d.b,{to:"#dummy",children:Object(g.jsx)("img",{alt:"",src:"images\\fbsignin.png",onClick:function(){return alert("Lazy to make this fuction working")}})})}),Object(g.jsx)("div",{className:l.a.googlesingin,children:Object(g.jsx)(d.b,{to:"#dummy",children:Object(g.jsx)("img",{alt:"",src:"images\\googlesignin.png",onClick:function(){return a()}})})})]}),Object(g.jsx)("div",{className:l.a.signup,children:Object(g.jsxs)("p",{children:["Don't have an account?",Object(g.jsx)(d.b,{to:"".concat(t,"register"),children:"SIGN UP"})]})})]})]})}),n?Object(g.jsx)(m.a,{}):null]})})));t.default=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(a.a,{}),Object(g.jsx)(O,{})]})}},66:function(e,t,n){"use strict";var c=n(40),a=n(41),r=(n(2),n(72)),o=n.n(r),s=n(8);t.a=function(e){var t=e.children,n=e.login,r=e.viewmore,i=e.compare,l=e.edit,d=Object(a.a)(e,["children","login","viewmore","compare","edit"]);return Object(s.jsx)("button",Object(c.a)(Object(c.a)({className:"\n        ".concat(n?"".concat(o.a.login):null," \n        ").concat(o.a.button," \n        ").concat(r?"".concat(o.a.viewmore):null,"\n        ").concat(i?"".concat(o.a.compare):null,"\n        ").concat(l?"".concat(o.a.edit):null,"\n    ")},d),{},{children:t}))}},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(70);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,a=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(c=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);c=!0);}catch(i){a=!0,r=i}finally{try{c||null==s.return||s.return()}finally{if(a)throw r}}return n}}(e,t)||Object(c.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},68:function(e,t,n){"use strict";var c=n(36),a=n(37),r=n(39),o=n(38),s=n(2),i=n.n(s),l=n(73),d=n.n(l),j=n(8),b=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:d.a.boxmodel,children:[Object(j.jsxs)("div",{className:d.a.boxmodel_topbar,children:[Object(j.jsx)("div",{className:d.a.boxmodel_title,children:Object(j.jsx)("p",{children:this.props.title})}),Object(j.jsx)("div",{className:d.a.extra}),Object(j.jsx)("div",{className:d.a.extra}),"arrow"===this.props.sidebar?Object(j.jsxs)("div",{className:d.a.boxmodel_nav,children:[Object(j.jsx)("div",{className:d.a.arrow,onClick:function(){return e.props.scrollRight()},children:Object(j.jsx)("img",{alt:"",src:"images\\leftarrow.png"})}),Object(j.jsx)("div",{className:d.a.arrow,onClick:function(){return e.props.scrollLeft()},children:Object(j.jsx)("img",{alt:"",src:"images\\rightarrow.png"})})]}):null,"cancel"===this.props.sidebar?Object(j.jsx)("div",{className:d.a.cancel,children:Object(j.jsx)("img",{alt:"",src:"images\\cancel.png",onClick:function(){return e.props.closeBox()}})}):null,"alert"===this.props.sidebar?Object(j.jsxs)("div",{className:d.a.alert,children:["+ ",Object(j.jsx)("span",{onClick:function(){return e.props.onAlert()},children:"ADD ALERT"})]}):null]}),this.props.children]})}}]),n}(i.a.Component);t.a=b},69:function(e,t,n){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}n.d(t,"a",(function(){return c}))},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(69);function a(e,t){if(e){if("string"===typeof e)return Object(c.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(c.a)(e,t):void 0}}},71:function(e,t,n){"use strict";var c=n(67),a=n(2),r=n(74),o=n.n(r),s=n(35),i=n(11),l=n(26),d=n(16),j=n(8);t.a=Object(i.g)(Object(l.b)((function(e){return{url:e.URLReducer.url,user:e.setUser.user}}),(function(e){return{signOut:function(){return e(Object(d.h)())}}}))((function(e){var t=e.url,n=e.user,r=e.signOut,i=Object(a.useState)(!0),l=Object(c.a)(i,2),d=l[0],b=l[1],h=function(){b(!d)};return Object(j.jsxs)("div",{className:o.a.container,children:[Object(j.jsxs)("header",{className:o.a.header,children:[Object(j.jsx)("div",{className:o.a.leftheader,children:Object(j.jsxs)("div",{className:o.a.lefttext,children:[Object(j.jsx)("p",{children:"Call Us Now: +01 123 456 78 "}),Object(j.jsx)("p",{children:"Email: info@skiptheagent.com"})]})}),Object(j.jsx)("div",{className:o.a.rightheader,children:n?Object(j.jsxs)("div",{className:o.a.loggedinheader,children:[Object(j.jsxs)("div",{className:o.a.loggedinheaderleft,children:["Welcome ".concat(n.name,"!."),Object(j.jsxs)("div",{className:o.a.dropdown,onClick:function(){return h()},children:[Object(j.jsx)("img",{className:o.a.dropbtn,alt:"",src:"images/whitedropdown.png"}),Object(j.jsxs)("div",{className:o.a.dropdown_content,style:d?{display:"none"}:{display:"block"},children:[Object(j.jsx)(s.b,{to:"".concat(t,"dashboard"),href:"#",children:"Dashboard"}),Object(j.jsx)(s.b,{to:"".concat(t),href:"#",onClick:function(){return r()},children:"Log out"})]})]})]}),Object(j.jsx)("span",{className:o.a.likeimg,children:Object(j.jsx)(s.b,{to:"".concat(t,"dashboard/saved"),children:Object(j.jsx)("img",{src:"images/whitelike.png",alt:""})})}),Object(j.jsx)(s.b,{to:"".concat(t,"dashboard"),children:Object(j.jsx)("img",{src:"images/envelope.png",alt:""})})]}):Object(j.jsxs)("div",{className:o.a.righttext,children:[Object(j.jsx)("p",{className:o.a.firstp,children:"Welcome to skiptheagent."}),Object(j.jsxs)("p",{className:o.a.secondp,children:["Kindly ",Object(j.jsx)(s.b,{to:"".concat(t,"login"),children:"SIGN IN"})," or",Object(j.jsx)(s.b,{to:"".concat(t,"register"),children:" SIGN UP"})]})]})})]}),Object(j.jsxs)("div",{className:o.a.smallheader,children:[Object(j.jsx)("div",{className:o.a.smalllogo,children:Object(j.jsx)(s.b,{to:"".concat(t),children:Object(j.jsx)("h3",{children:"LOGO "})})}),n?Object(j.jsxs)("div",{className:o.a.loggedinheader,children:[Object(j.jsxs)("div",{className:o.a.loggedinheaderleft,children:["Welcome ","".concat(n.name,"!"),".",Object(j.jsxs)("div",{className:o.a.dropdown,onClick:function(){return h()},children:[Object(j.jsx)("img",{className:o.a.dropbtn,alt:"",src:"images/greendropdown.png"}),Object(j.jsxs)("div",{className:o.a.dropdown_content,style:d?{display:"none"}:{display:"block"},children:[Object(j.jsx)(s.b,{to:"".concat(t,"dashboard"),href:"#",children:"Dashboard"}),Object(j.jsx)(s.b,{to:"".concat(t),href:"#",onClick:function(){return r()},children:"Log out"})]})]})]}),Object(j.jsx)("span",{className:o.a.likeimg,children:Object(j.jsx)(s.b,{to:"".concat(t,"dashboard/saved"),children:Object(j.jsx)("img",{src:"images/greenheart.png",alt:""})})}),Object(j.jsx)(s.b,{to:"".concat(t,"dashboard"),children:Object(j.jsx)("img",{src:"images/greenenvelope.png",alt:""})})]}):Object(j.jsxs)("div",{className:o.a.smalltext,children:[Object(j.jsx)("p",{children:"Welcome to skiptheagent."}),Object(j.jsxs)("p",{children:["Kindly ",Object(j.jsx)(s.b,{to:"".concat(t,"login"),children:"SIGN IN"})," or",Object(j.jsx)(s.b,{to:"".concat(t,"register"),children:" SIGN UP"})]})]})]}),Object(j.jsxs)("nav",{className:o.a.nav,children:[Object(j.jsx)("div",{className:o.a.leftnav,children:Object(j.jsx)("div",{className:o.a.logo,children:Object(j.jsx)("h3",{children:Object(j.jsx)(s.b,{to:"".concat(t),children:"LOGO"})})})}),Object(j.jsx)("div",{className:o.a.rightnav,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"".concat(t,"login"),children:"SELL MY CAR"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"".concat(t,"listing"),children:"SHOP FOR NEW CARS"})}),Object(j.jsx)("li",{className:o.a.consolt,children:Object(j.jsx)(s.b,{to:"".concat(t,"ownership"),children:"CONSULTATIONS"})})]})})]})]})})))},72:function(e,t,n){e.exports={button:"button_button__3ALHZ",login:"button_login__22IXs",viewmore:"button_viewmore__1U1QE",edit:"button_edit__2k1b7",compare:"button_compare__2Cbbd"}},73:function(e,t,n){e.exports={boxmodel:"boxModel_boxmodel__2rg4E",boxmodel_topbar:"boxModel_boxmodel_topbar__2-0QD",boxmodel_title:"boxModel_boxmodel_title__2AbSK",extra:"boxModel_extra__1JwPZ",boxmodel_nav:"boxModel_boxmodel_nav__7VfMM",arrow:"boxModel_arrow__c9TcS",cancel:"boxModel_cancel__27Lla",alert:"boxModel_alert__3Qk6i"}},74:function(e,t,n){e.exports={container:"Header_container__3aRtj",header:"Header_header__1OLd2",leftheader:"Header_leftheader__20CzF",lefttext:"Header_lefttext__1paRS",rightheader:"Header_rightheader__1B3rR",righttext:"Header_righttext__2lC58",loggedinheader:"Header_loggedinheader__ybQ8D",loggedinheaderleft:"Header_loggedinheaderleft__2srmY",dropdown:"Header_dropdown__1BeDC",dropdown_content:"Header_dropdown_content__14tC8",likeimg:"Header_likeimg__2jvU3",smallheader:"Header_smallheader__2MTnM",smalltext:"Header_smalltext__Crm2U",smalllogo:"Header_smalllogo__3hR6T",nav:"Header_nav__yCP8j",leftnav:"Header_leftnav__3MldR",logo:"Header_logo__3OcMa",rightnav:"Header_rightnav__31WK5",consolt:"Header_consolt__1dtfA"}}}]);
//# sourceMappingURL=8.6f9df651.chunk.js.map