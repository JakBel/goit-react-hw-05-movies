"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[906],{906:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var c=e(885),r=e(791),o=e(501),u=e(86),i="MoviesPage_listed__AGQMu",a=e(184),s=function(){var n=(0,r.useState)([]),t=(0,c.Z)(n,2),e=t[0],s=t[1],f=(0,o.lr)(),h=(0,c.Z)(f,2),l=h[0],g=h[1],v=l.get("query");return(0,r.useEffect)((function(){null!==v?(0,u.Hq)(v,s):s([])}),[v]),(0,a.jsxs)("div",{children:[(0,a.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.currentTarget,e=t.elements.query.value;""!==e&&(g({query:e}),(0,u.Hq)(v,s),t.reset())},children:[(0,a.jsx)("input",{type:"text",name:"query"}),(0,a.jsx)("button",{type:"submit",children:"Search movies"})]}),(0,a.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.title;return(0,a.jsx)("li",{className:i,children:(0,a.jsx)(o.rU,{to:"/movies/".concat(t),children:e})},t)}))})]})}},86:function(n,t,e){e.d(t,{ZS:function(){return o},Ny:function(){return u},y:function(){return i},Bt:function(){return a},Hq:function(){return s}});var c="8cf48041f02f710cc4524470fa3eabaf",r="https://api.themoviedb.org/3/",o=function(n){fetch("".concat(r,"trending/movie/week?api_key=").concat(c,"&language=en-US&page=1")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(t){return n(t.results)})).catch((function(n){return console.log(n)}))},u=function(n,t){fetch("".concat(r,"movie/").concat(n,"?api_key=").concat(c,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return t(n)})).catch((function(n){return console.log(n)}))},i=function(n,t){fetch("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return t(n.cast)})).catch((function(n){return console.log(n)}))},a=function(n,t){fetch("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return t(n.results)})).catch((function(n){return console.log(n)}))},s=function(n,t){fetch("".concat(r,"search/movie?query=").concat(n,"&api_key=").concat(c,"&language=en-US&page=1")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return t(n.results)})).catch((function(n){return console.log(n)}))}}}]);
//# sourceMappingURL=906.fb218d90.chunk.js.map