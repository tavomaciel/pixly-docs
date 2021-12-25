"use strict";(self.webpackChunkpixly_docs=self.webpackChunkpixly_docs||[]).push([[2081],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},243:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(7294);function a(e){var t="https://gfycat.com/ifr/"+e.id+"?controls=0&autoplay=1&hd=1";return n.createElement("div",{style:{position:"relative",paddingBottom:"56.25%"}},n.createElement("iframe",{src:t,frameBorder:"0",scrolling:"no",width:"100%",height:"100%",style:{position:"absolute",top:0,left:0},allowFullScreen:!0}))}},1710:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=r(243),l=["components"],c={title:"Clear",sidebar_position:1},s=void 0,u={unversionedId:"guides/mainmenu/edit/clear",id:"guides/mainmenu/edit/clear",title:"Clear",description:"The Clear operation will erase pixels of the current layer. If no pixels are selected the full layer will be cleared, otherwise, only the [selected area] will be cleared.",source:"@site/docs/guides/mainmenu/edit/clear.md",sourceDirName:"guides/mainmenu/edit",slug:"/guides/mainmenu/edit/clear",permalink:"/docs/guides/mainmenu/edit/clear",editUrl:"https://github.com/tavomaciel/pixly/edit/main/docs/guides/mainmenu/edit/clear.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Clear",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Edit",permalink:"/docs/guides/mainmenu/edit/"},next:{title:"Copy and paste",permalink:"/docs/guides/mainmenu/edit/copy-paste"}},p=[],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Clear")," operation will erase pixels of the current layer. If no pixels are ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/selection/"},"selected")," the full layer will be cleared, otherwise, only the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/selection/"},"selected area")," will be cleared."),(0,i.kt)(o.Z,{id:"GrizzledWhimsicalDikkops",mdxType:"GfyCat"}),(0,i.kt)("p",null,"Erase is context dependant:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the current selected layer is not the bottom layer, then erase will make those pixels ",(0,i.kt)("strong",{parentName:"li"},"transparent"),"."),(0,i.kt)("li",{parentName:"ul"},"If the current selected layer is the bottom layer, we have two options",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If your project has a ",(0,i.kt)("a",{parentName:"li",href:"/docs/guides/mainmenu/colors-filters/transparency"},"transparent background"),", then the pixels will become transparent."),(0,i.kt)("li",{parentName:"ul"},"If your project doesn't have a ",(0,i.kt)("a",{parentName:"li",href:"/docs/guides/mainmenu/colors-filters/transparency"},"transparent background"),", then the pixels will be paint to the ",(0,i.kt)("a",{parentName:"li",href:"/docs/guides/color-brush/primary-secondary"},"secondary color"))))))}m.isMDXComponent=!0}}]);