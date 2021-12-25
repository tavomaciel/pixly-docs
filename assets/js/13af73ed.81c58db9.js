"use strict";(self.webpackChunkpixly_docs=self.webpackChunkpixly_docs||[]).push([[1666],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,A=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return r?o.createElement(A,i(i({ref:t},u),{},{components:r})):o.createElement(A,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},243:function(e,t,r){r.d(t,{Z:function(){return n}});var o=r(7294);function n(e){var t="https://gfycat.com/ifr/"+e.id+"?controls=0&autoplay=1&hd=1";return o.createElement("div",{style:{position:"relative",paddingBottom:"56.25%"}},o.createElement("iframe",{src:t,frameBorder:"0",scrolling:"no",width:"100%",height:"100%",style:{position:"absolute",top:0,left:0},allowFullScreen:!0}))}},2968:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var o=r(3117),n=r(102),a=(r(7294),r(3905)),i=r(243),l=["components"],s={title:"Rainbow Brush",sidebar_position:3},c=void 0,u={unversionedId:"guides/toolbar/tools/rainbow-brush",id:"guides/toolbar/tools/rainbow-brush",title:"Rainbow Brush",description:"Icon",source:"@site/docs/guides/toolbar/tools/rainbow-brush.md",sourceDirName:"guides/toolbar/tools",slug:"/guides/toolbar/tools/rainbow-brush",permalink:"/docs/guides/toolbar/tools/rainbow-brush",editUrl:"https://github.com/tavomaciel/pixly/edit/main/docs/guides/toolbar/tools/rainbow-brush.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Rainbow Brush",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Brush",permalink:"/docs/guides/toolbar/tools/brush"},next:{title:"Scatterer (Spray)",permalink:"/docs/guides/toolbar/tools/scatterer"}},p=[{value:"Settings",id:"settings",children:[],level:3}],d={toc:p};function h(e){var t=e.components,s=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Icon",src:r(6557).Z})),(0,a.kt)("p",null,"The same as the brush, though it cycles the colors while you paint."),(0,a.kt)("p",null,"This is more of a tool to play around and test colors."),(0,a.kt)("h3",{id:"settings"},"Settings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Change color by"),(0,a.kt)("p",{parentName:"li"},"You can choose if the cycling will be done for each ",(0,a.kt)("em",{parentName:"p"},"pixel"),", by the speed of the ",(0,a.kt)("em",{parentName:"p"},"motion")," or even by ",(0,a.kt)("em",{parentName:"p"},"time"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cycle through"),(0,a.kt)("p",{parentName:"li"},"What colors do you want the tool to cycle through? The colors of the ",(0,a.kt)("strong",{parentName:"p"},"rainbow"),"? Back and forth between the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/guides/color-brush/primary-secondary"},"primary and secondary colors")),"? What about through all the colors of ",(0,a.kt)("strong",{parentName:"p"},"a given ",(0,a.kt)("a",{parentName:"strong",href:"/docs/guides/color-brush/palettes/"},"palette")),", in the order they are found in that palette? Try them out!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Selected palette"),(0,a.kt)("p",{parentName:"li"},'In case you are cycling through a given palette, here you can choose which palette it is. Tap "Pick" to choose it!')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Speed"),(0,a.kt)("p",{parentName:"li"},"How fast should the colors change by iteration?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Hue, Saturation and Brightness"),(0,a.kt)("p",{parentName:"li"},"The hue the brush will start at on the next stroke, and the saturation and brightness the colors will have."))),(0,a.kt)(i.Z,{id:"WideeyedDistantAsianporcupine",mdxType:"GfyCat"}),(0,a.kt)(i.Z,{id:"AromaticOptimisticChital",mdxType:"GfyCat"}))}h.isMDXComponent=!0},6557:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEUAAAAlKUbf4+tJPCv34mu+JjOjzifriTExovKkZCLGwdH////aAwlMAAAAAXRSTlMAQObYZgAAAAFiS0dECx/XxMAAAAAHdElNRQfeBhQVDTOkSJxXAAAAvklEQVRIx83WsQ3CMBCF4bABZgOcipYDJjBiAksMgLIAQidqmtRQoFuBKXEsJIjj6/wsXhfpK/6kyTVNnFHW/K4QCg9W2deVQjNVfNy8CmoprDgyC0VsnNt7Wlu7NGhEu84d2B/7Gqil7uT44vvb8AnQaBSERkkQGKVBUDQNQqJMEA5lg2BIHpQJAqGVMDNtJ0EYJE8edqY0CIquYi0exfcPk7uthkRyQRikitLoX/7mIBQPmpey0dVTCFU8/N4yo8c7BqfkSwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNS0wNy0wMVQwNjoyNjozMS0wMzowMMwl5CoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTQtMDYtMjBUMjE6MTM6NTEtMDM6MDAiX99vAAAAAElFTkSuQmCC"}}]);