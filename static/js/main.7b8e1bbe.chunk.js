(this.webpackJsonpskiptheagent=this.webpackJsonpskiptheagent||[]).push([[2],{16:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"j",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return b}));var r=function(e){return{type:"SET_URL",payload:e}},a=function(){return{type:"CHECKING_USER"}},c=function(e){return{type:"SIGN_UP_START",payload:e}},u=function(e){return{type:"SIGN_IN_START",payload:e}},s=function(){return{type:"SIGN_IN_WITH_GOOGLE_START"}},o=function(e){return{type:"SIGN_IN_SUCCESS",payload:e}},i=function(e){return{type:"SIGN_IN_FAILED",payload:e}},l=function(){return{type:"SIGN_OUT_START"}},p=function(){return{type:"SIGN_OUT_SUCCESS"}},b=function(){return{type:"SIGN_OUT_FAILED"}}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(40),n(41),n(2),n(60);var r=n(8),a=function(){return Object(r.jsx)("div",{className:"SpinnerOverlay",children:Object(r.jsx)("div",{className:"SpinnerContainer"})})}},52:function(e,t,n){},60:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(27),u=n.n(c),s=(n(52),function(e){e&&e instanceof Function&&n.e(13).then(n.bind(null,115)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),r(e),a(e),c(e),u(e)}))}),o=n(21),i=n(44),l=n.n(i),p=n(47),b={url:null},d={user:null,loading:!1,error:null},f=Object(o.b)({URLReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_URL":return Object.assign({},e,{url:t.payload});default:return e}},setUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_UP_START":case"SIGN_IN_START":case"SIGN_OUT_START":case"SIGN_IN_WITH_GOOGLE_START":return Object.assign({},e,{loading:!0});case"SIGN_IN_SUCCESS":return Object.assign({},e,{loading:!1,user:t.payload,error:null});case"SIGN_OUT_SUCCESS":return Object.assign({},e,{loading:null,user:null,error:null});case"SIGN_IN_FAILED":case"SIGN_OUT_FAILED":return Object.assign({},e,{loading:!1,error:t.payload});default:return e}}}),j=n(9),O=n.n(j),h=n(10),x=n(16),m=n(45),S=n(23);n(64),n(54),n(65);S.a.initializeApp({apiKey:"AIzaSyBu1x4tu6iZPxhkANVuOxzJtjcLBzKW5lc",authDomain:"skiptheagent-react.firebaseapp.com",projectId:"skiptheagent-react",storageBucket:"skiptheagent-react.appspot.com",messagingSenderId:"470859456457",appId:"1:470859456457:web:db0de858f2e69e70b1d218",measurementId:"G-N1ZG0Z7E9P"}),S.a.analytics();var g=new S.a.auth.GoogleAuthProvider,_=S.a.auth(),y=S.a.firestore(),I=function(){var e=Object(m.a)(O.a.mark((function e(t,n){var r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return console.log("No user found"),e.abrupt("return");case 3:return r=y.doc("users/".concat(t.uid)),e.next=6,r.get();case 6:return e.sent.exists?console.log("not overwrited"):(t.displayName?a=t.displayName:(a=n,t.updateProfile({displayName:a}).then((function(e){return console.log("displayname set")})).catch((function(e){return console.log(e)}))),r.set({displayName:a,email:t.email,createdAt:new Date}).catch((function(e){alert(e.message)}))),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=O.a.mark(C),N=O.a.mark(P),w=O.a.mark(L),T=O.a.mark(z),k=O.a.mark(D),G=O.a.mark(F),U=O.a.mark(W),A=O.a.mark(B),E=O.a.mark(H),R=O.a.mark(K);function C(){var e,t,n,r;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,new Promise((function(e,t){var n=_.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 2:return e=a.sent,a.next=5,I(e);case 5:if(!(t=a.sent)){a.next=13;break}return a.next=9,t.get();case 9:return n=a.sent,r=n.data(),a.next=13,Object(h.c)(Object(x.e)({email:r.email,name:r.displayName}));case 13:case"end":return a.stop()}}),v)}function P(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.d)("CHECKING_USER",C);case 2:case"end":return e.stop()}}),N)}function L(e){var t,n,r;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.next=3,_.createUserWithEmailAndPassword(t.email,t.password).then((function(e){n=e.user})).catch((function(e){alert(e.message),r=e}));case 3:if(!r){a.next=6;break}return a.next=6,Object(h.c)(Object(x.c)({error:r}));case 6:if(!n){a.next=11;break}return a.next=9,I(n,t.name);case 9:return a.next=11,Object(h.c)(Object(x.e)({name:t.name,email:t.email}));case 11:case"end":return a.stop()}}),w)}function z(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.d)("SIGN_UP_START",L);case 2:case"end":return e.stop()}}),T)}function D(e){var t,n,r;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,r=null,a.next=4,_.signInWithEmailAndPassword(t.email,t.password).then((function(e){n=e.user})).catch((function(e){alert(e.message),r=e}));case 4:if(!r){a.next=7;break}return a.next=7,Object(h.c)(Object(x.c)({error:r}));case 7:if(!n){a.next=10;break}return a.next=10,Object(h.c)(Object(x.e)({name:n.displayName,email:n.email}));case 10:case"end":return a.stop()}}),k)}function F(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.d)("SIGN_IN_START",D);case 2:case"end":return e.stop()}}),G)}function W(){var e,t;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,console.log("reacted");case 3:return n.next=5,_.signInWithPopup(g);case 5:return e=n.sent,t=e.user,n.next=9,I(t);case 9:return n.next=11,Object(h.c)(Object(x.e)({name:t.displayName,email:t.email}));case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(0),n.next=17,Object(h.c)(Object(x.c)(n.t0.message));case 17:case"end":return n.stop()}}),U,null,[[0,13]])}function B(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.d)("SIGN_IN_WITH_GOOGLE_START",W);case 2:case"end":return e.stop()}}),A)}function H(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.signOut();case 3:return e.next=5,Object(h.c)(Object(x.i)());case 5:e.next=13;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,alert(e.t0);case 11:return e.next=13,Object(h.c)(Object(x.g)({err:e.t0}));case 13:case"end":return e.stop()}}),E,null,[[0,7]])}function K(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.d)("SIGN_OUT_START",H);case 2:case"end":return e.stop()}}),R)}var J=O.a.mark(Z);function Z(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)([Object(h.b)(z),Object(h.b)(F),Object(h.b)(P),Object(h.b)(K),Object(h.b)(B)]);case 2:case"end":return e.stop()}}),J)}var M=Object(p.a)(),V=[M,l.a],q=Object(o.d)(f,o.a.apply(void 0,V));M.run(Z);var Q=n(26),X=n(36),Y=n(37),$=n(39),ee=n(38),te=n(35),ne=n(11),re=n(42),ae=n(8),ce=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,118))})),ue=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,121))})),se=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,122))})),oe=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,123))})),ie=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,116))})),le=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,119))})),pe=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,120))})),be=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(5)]).then(n.bind(null,117))})),de=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(){return Object(X.a)(this,n),t.apply(this,arguments)}return Object(Y.a)(n,[{key:"componentDidMount",value:function(){this.props.setUrl("/skiptheagent-react/"),this.props.isUserAuthenticated()}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.user;return Object(ae.jsx)(te.a,{children:Object(ae.jsx)(r.Suspense,{fallback:Object(ae.jsx)(re.a,{}),children:Object(ae.jsxs)(ne.d,{children:[Object(ae.jsx)(ne.b,{exact:!0,path:"".concat(t),component:ce}),Object(ae.jsx)(ne.b,{exact:!0,path:"".concat(t,"listing"),component:ue}),Object(ae.jsx)(ne.b,{exact:!0,path:"".concat(t,"login"),render:function(){return n?Object(ae.jsx)(ne.a,{to:"".concat(t,"dashboard")}):Object(ae.jsx)(se,{})}}),Object(ae.jsx)(ne.b,{exact:!0,path:"".concat(t,"register"),render:function(){return n?Object(ae.jsx)(ne.a,{to:"".concat(t,"dashboard")}):Object(ae.jsx)(oe,{})}}),Object(ae.jsx)(ne.b,{exact:!0,path:"".concat(t,"forget"),component:ie}),Object(ae.jsx)(ne.b,{exact:!0,path:"".concat(t,"ownership"),component:le}),Object(ae.jsx)(ne.b,{exact:!0,path:"".concat(t,"details"),component:pe}),Object(ae.jsx)(ne.b,{path:"".concat(t,"dashboard"),render:function(){return n?Object(ae.jsx)(be,{}):Object(ae.jsx)(ne.a,{to:"".concat(t,"login")})}})]})})})}}]),n}(a.a.Component),fe=Object(Q.b)((function(e){return{url:e.URLReducer.url,user:e.setUser.user}}),(function(e){return{setUrl:function(t){return e(Object(x.b)(t))},isUserAuthenticated:function(){return e(Object(x.a)())}}}))(de);u.a.render(Object(ae.jsx)(Q.a,{store:q,children:Object(ae.jsx)(a.a.StrictMode,{children:Object(ae.jsx)(fe,{})})}),document.getElementById("root")),s()}},[[63,3,4]]]);
//# sourceMappingURL=main.7b8e1bbe.chunk.js.map