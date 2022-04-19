!function(){"use strict";var e,t={9118:function(e,t,r){var n=r(7294),a=r(3935),o=r(9704),c=r(5857),u=r(8500),i=r(3894);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(9070),r(7941),r(2526),r(7327),r(1539),r(5003),r(4747),r(9337),r(3321);var p="SET_REPOS",m="SET_IS_FETCHING",v="SET_CURRENT_PAGE",h={items:[],isFetching:!0,currentPage:1,reposPerPage:10,totalCount:0},d=function(e){return{type:v,payload:e}},b=(0,c.UY)({repos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.type,n=t.payload;switch(r){case p:return s(s({},e),{},{items:n.items,totalCount:n.total_count,isFetching:!1});case m:return s(s({},e),{},{isFetching:n});case v:return s(s({},e),{},{currentPage:n});default:return e}}}),y=(0,c.MT)(b,(0,u.Uo)((0,c.md)(i.Z))),g=r(9342),E=r(6974),_=(r(1249),r(1817),r(2165),r(6992),r(8783),r(3948),r(7042),r(8309),r(1038),r(4916),r(5666),r(2222),r(8674),r(9669)),O=r.n(_);function w(e,t,r,n,a,o,c){try{var u=e[o](c),i=u.value}catch(e){return void r(e)}u.done?t(i):Promise.resolve(i).then(n,a)}var j=function(e,t,r){return function(){var n,a=(n=regeneratorRuntime.mark((function n(a){var o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e||"stars:%3E1",a({type:m,payload:!0}),n.next=4,O().get("https://api.github.com/search/repositories?q=".concat(o,"&page=").concat(t,"&per_page=").concat(r,"&sort=stars"),{headers:{Authorization:"token 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"}});case 4:c=n.sent,a((u=c.data,{type:p,payload:u}));case 6:case"end":return n.stop()}var u}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function c(e){w(o,r,a,c,u,"next",e)}function u(e){w(o,r,a,c,u,"throw",e)}c(void 0)}))});return function(e){return a.apply(this,arguments)}}()};function P(e){var t=e.repo;return n.createElement("div",{className:"repo"},n.createElement("div",{className:"repo__header"},n.createElement("h3",{className:"repo__name"},n.createElement(g.OL,{to:"/card"},t.name)),n.createElement("div",{className:"repo__stars"},t.stargazers_count)),n.createElement("div",{className:"repo__updated"},t.updated_at),n.createElement("a",{href:t.html_url,className:"repo__link"},t.html_url))}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function N(){var e,t,r=(0,o.I0)(),a=(0,o.v9)((function(e){return e.repos.items})),c=(0,o.v9)((function(e){return e.repos.isFetching})),u=(0,o.v9)((function(e){return e.repos.currentPage})),i=(0,o.v9)((function(e){return e.repos.reposPerPage})),l=(0,o.v9)((function(e){return e.repos.totalCount})),s=(e=(0,n.useState)(""),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],c=!0,u=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(u)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=s[0],p=s[1],m=[];return function(e,t,r){if(t>10)if(r>5)for(var n=r-4;n<=r+5&&(e.push(n),n!==t);n+=1);else for(var a=1;a<=10&&(e.push(a),a!==t);a+=1);else for(var o=1;o<=t;o+=1)e.push(o)}(m,Math.ceil(l/i),u),(0,n.useEffect)((function(){r(j(f,u,i))}),[r,u]),n.createElement("div",{className:"container"},n.createElement("div",{className:"search"},n.createElement("input",{value:f,onChange:function(e){return p(e.target.value)},type:"text",className:"search__input",placeholder:"Input repo name"}),n.createElement("button",{onClick:function(){return r(d(1)),void r(j(f,u,i))},type:"button",className:"serach__button"},"Search")),c?n.createElement("div",{className:"preloader"}):a.map((function(e){return n.createElement(P,{repo:e,key:e.id})})),n.createElement("ul",{className:"pages-list"},m.map((function(e,t){return n.createElement("li",null,n.createElement("button",{type:"button",key:t,className:u===e?"pages-list__button pages-list__button--current":"pages-list__button",onClick:function(){return r(d(e))}},e))}))))}function S(){var e=(0,E.s0)();return n.createElement("div",{className:"card"},"Card is here.",n.createElement("button",{type:"button",onClick:function(){return e(-1)}},"Go back"))}var C=function(){return n.createElement(g.VK,null,n.createElement(E.Z5,null,n.createElement(E.AW,{path:"/"},n.createElement(E.AW,{index:!0,element:n.createElement(N,null)}),n.createElement(E.AW,{path:"/card",element:n.createElement(S,null)}),n.createElement(E.AW,{path:"*",element:n.createElement(N,null)}))))};(0,a.render)(n.createElement(o.zt,{store:y},n.createElement(C,null)),document.getElementById("root"))}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,r,a,o){if(!r){var c=1/0;for(s=0;s<e.length;s++){r=e[s][0],a=e[s][1],o=e[s][2];for(var u=!0,i=0;i<r.length;i++)(!1&o||c>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(u=!1,o<c&&(c=o));if(u){e.splice(s--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,a,o]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,c=r[0],u=r[1],i=r[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(i)var s=i(n)}for(t&&t(r);l<c.length;l++)o=c[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},r=self.webpackChunkwebpack_react=self.webpackChunkwebpack_react||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var a=n.O(void 0,[877],(function(){return n(9118)}));a=n.O(a)}();