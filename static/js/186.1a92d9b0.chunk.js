"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(n,t,e){e.r(t);var c=e(885),o=e(791),r=e(871),u=e(86),i=e(184);t.default=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),e=t[0],a=t[1],f=(0,r.UO)().id;return(0,o.useEffect)((function(){(0,u.Bt)(f,a)}),[f]),(0,i.jsx)("div",{children:e.length<1?(0,i.jsx)("p",{children:"Sorry, no reviews available"}):(0,i.jsx)("ul",{children:e.map((function(n){var t=n.author,e=n.content,c=n.id;return(0,i.jsxs)("li",{children:[(0,i.jsxs)("p",{children:["Review author: ",t]}),(0,i.jsx)("p",{children:e})]},c)}))})})}},86:function(n,t,e){e.d(t,{ZS:function(){return r},Ny:function(){return u},y:function(){return i},Bt:function(){return a},Hq:function(){return f}});var c="8cf48041f02f710cc4524470fa3eabaf",o="https://api.themoviedb.org/3/",r=function(n){fetch("".concat(o,"trending/movie/week?api_key=").concat(c,"&language=en-US&page=1")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(t){return n(t.results)})).catch((function(n){return console.log(n)}))},u=function(n,t){fetch("".concat(o,"movie/").concat(n,"?api_key=").concat(c,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return t(n)})).catch((function(n){return console.log(n)}))},i=function(n,t){fetch("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return t(n.cast)})).catch((function(n){return console.log(n)}))},a=function(n,t){fetch("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return t(n.results)})).catch((function(n){return console.log(n)}))},f=function(n,t){fetch("".concat(o,"search/movie?query=").concat(n,"&api_key=").concat(c,"&language=en-US&page=1")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return t(n.results)})).catch((function(n){return console.log(n)}))}}}]);
//# sourceMappingURL=186.1a92d9b0.chunk.js.map