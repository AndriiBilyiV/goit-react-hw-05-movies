"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[75],{429:function(r,n,t){t.d(n,{O:function(){return c}});var e=t(689),a=t(87),u=t(184),c=function(r){var n=r.collection,t=(0,e.TH)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{children:n.map((function(r){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(r.id),state:{from:t},children:r.title})},r.id)}))})})}},256:function(r,n,t){t.d(n,{KA:function(){return f},Rl:function(){return v},VR:function(){return i},aK:function(){return o},rc:function(){return p}});var e=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="6692a5b44fd4d65b0502919df9787c03",i=function(){var r=(0,e.Z)(u().mark((function r(){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={url:"trending/movie/day",params:{api_key:s}},r.next=3,(0,c.Z)(n);case 3:return t=r.sent,r.abrupt("return",t.data.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(n){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={url:"search/movie",params:{api_key:s,query:n}},r.next=3,(0,c.Z)(t);case 3:return e=r.sent,r.abrupt("return",e.data.results);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(n){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={url:"movie/".concat(n),params:{api_key:s}},r.next=3,(0,c.Z)(t);case 3:return e=r.sent,r.abrupt("return",e.data);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(n){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={url:"movie/".concat(n,"/credits"),params:{api_key:s}},r.next=3,(0,c.Z)(t);case 3:return e=r.sent,r.abrupt("return",e.data.cast);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),v=function(){var r=(0,e.Z)(u().mark((function r(n){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={url:"movie/".concat(n,"/reviews"),params:{api_key:s}},r.next=3,(0,c.Z)(t);case 3:return e=r.sent,r.abrupt("return",e.data.results);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()},75:function(r,n,t){t.r(n),t.d(n,{default:function(){return p}});var e=t(861),a=t(439),u=t(757),c=t.n(u),s=t(256),i=t(429),o=t(791),f=t(184);function p(){var r=(0,o.useState)([]),n=(0,a.Z)(r,2),t=n[0],u=n[1];return(0,o.useEffect)((function(){var r=function(){var r=(0,e.Z)(c().mark((function r(){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,s.VR)();case 2:n=r.sent,u(n);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{children:"Trending today"}),(0,f.jsx)(i.O,{collection:t})]})}}}]);
//# sourceMappingURL=75.f43ec290.chunk.js.map