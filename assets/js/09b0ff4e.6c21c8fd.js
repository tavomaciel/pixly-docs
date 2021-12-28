"use strict";(self.webpackChunkpixly_docs=self.webpackChunkpixly_docs||[]).push([[4227],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2335:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Pixly site has just been refreshed!",description:"Faster, Updated guides with GIFs and more transparency to users!",authors:"gmaciel",tags:["site","guide","devlog","changelog","enhancement"]},l=void 0,c={permalink:"/changelog/2021/12/27/new-site",source:"@site/changelog/2021-12-27-new-site.md",title:"Pixly site has just been refreshed!",description:"Faster, Updated guides with GIFs and more transparency to users!",date:"2021-12-27T00:00:00.000Z",formattedDate:"December 27, 2021",tags:[{label:"site",permalink:"/changelog/tags/site"},{label:"guide",permalink:"/changelog/tags/guide"},{label:"devlog",permalink:"/changelog/tags/devlog"},{label:"changelog",permalink:"/changelog/tags/changelog"},{label:"enhancement",permalink:"/changelog/tags/enhancement"}],truncated:!0,authors:[{name:"Gustavo Maciel",title:"Creator of Pixly",url:"https://twitter.com/gtoknu",key:"gmaciel"}]},u={authorsImageUrls:[void 0]},p=[],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the new Pixly site. It's been a while since the site last got a refresher, and since it started to return 403s at some point, I decided to migrate it to this new domain and upgrade a few things!"),(0,o.kt)("p",null,"..."),(0,o.kt)("p",null,"To start, ",(0,o.kt)("strong",{parentName:"p"},"every GIF has been fixed"),". At some point in the last 4 years GfyCat changed their API and the embedded GIFs here in the guide all went missing, but now they're back!"),(0,o.kt)("p",null,"Some of the documentation has also been updated, and ",(0,o.kt)("strong",{parentName:"p"},"wording has been improved"),". My English skills are now much better than when I first wrote all these :)"),(0,o.kt)("p",null,"The documentation is now a modern web app. It has always been fully server-side rendered, but it would refresh the whole page when you navigated somewhere else. While that was still very fast (every render was obviously cached), it still wasn't as instantaneous as it is now, as the browser fetches the content dynamically as you navigated. For the nerdies out there, the new site is developed with ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"docusaurus"),", and you see all the source on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tavomaciel/pixly-docs"},"GitHub")),(0,o.kt)("p",null,"Speaking of source, that also means that everyone can contribute to the guides, or help fix existing problems! You can find all the Markdown files for every guide page on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tavomaciel/pixly-docs/tree/main/docs"},"GitHub")," and submit your pull requests with changes!"),(0,o.kt)("p",null,"This new site also include the ",(0,o.kt)("a",{parentName:"p",href:"/changelog"},"changelog")," section (",(0,o.kt)("em",{parentName:"p"},"which you are reading right now!"),") and it will include information about any new updates to the app or site in the future. Changelogs are going to be a little bit more formal from the next post, so I also plan to include a DevLog in this site at some point, so I can talk about how things are being developed, and what to expect."),(0,o.kt)("p",null,"Stay tuned for the Pixly updates coming in 2022! There's a lot already implemented for 1.8, and if you want a spoiler, check the ",(0,o.kt)("a",{parentName:"p",href:"https://trello.com/b/271M0NG9/pixly-todo"},"roadmap"),"!"))}d.isMDXComponent=!0}}]);