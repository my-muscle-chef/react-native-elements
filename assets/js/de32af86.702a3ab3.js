"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[21983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),l=n(72389),c=n(67392),i=n(7094),u=n(12466);const s="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,l=e.lazy,p=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,c.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var E=(0,i.U)(),w=E.tabGroupChoices,C=E.setTabGroupChoices,T=(0,a.useState)(k),O=T[0],x=T[1],Z=[],_=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var N=w[v];null!=N&&N!==O&&h.some((function(e){return e.value===N}))&&x(N)}var I=function(e){var t=e.currentTarget,n=Z.indexOf(t),r=h[n].value;r!==O&&(_(t),x(r),null!=v&&C(v,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=Z.indexOf(e.currentTarget)+1;n=null!=(r=Z[a])?r:Z[0];break;case"ArrowLeft":var o,l=Z.indexOf(e.currentTarget)-1;n=null!=(o=Z[l])?o:Z[Z.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:P,onFocus:I,onClick:I},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>i});var r=n(67294),a=n(35742),o=n(14330),l=n(98576),c=n(61720),i=function(){return r.createElement(a.Z,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+c.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n        "))}},22365:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(63366),o=n(67294),l=n(10407),c=n(86010),i=(n(95999),n(52263)),u=n(91262),s=n(66412);const d="playgroundContainer_TGbA",p="playgroundEditor_PvJ1",m="playgroundPreview_bb8I",f="toggleIcon_OnrQ",v="showCode_O0Od";var b=n(72389),y=n(5434),h=["children","transformCode"];function g(){return o.createElement("div",null,"Loading...")}function k(){var e=(0,b.Z)();return o.createElement(l.uz,{key:String(e),className:p})}function E(e){var t=e.show_code,n=(e.openInSnack,o.useState(t)),r=n[0],a=n[1],i=function(){a((function(e){return!e}))};return o.createElement(o.Fragment,null,o.createElement("div",{className:m},o.createElement(u.Z,{fallback:o.createElement(g,null)},(function(){return o.createElement(o.Fragment,null,o.createElement(l.i5,null),o.createElement(l.IF,null),o.createElement("div",{className:(0,c.Z)(f),onClick:i},o.createElement(y.xoN,null),o.createElement("span",{className:v},r?"Hide":"Show"," Code")))}))),r&&o.createElement(k,null))}function w(e){var t=e.children,n=e.transformCode,c=(0,a.Z)(e,h),u=((0,i.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,s.p)());return o.createElement("div",{className:d},o.createElement(l.nu,(0,r.Z)({code:t.replace(/\n$/,""),transformCode:n||function(e){return e},theme:u},c),o.createElement(E,{show_code:c.show_code})))}},56922:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(32408),o=n(13925),l=n(77321),c=n(83279);const i=Object.assign({React:r,LinearGradient:c.Z},a,o,l,r)},31669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>f});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(37047),c=(n(65488),n(85162),n(96711)),i=n(47516),u=["components"],s={id:"card_title",title:"Card.Title"},d=void 0,p={unversionedId:"components/card_title",id:"version-4.0.0-rc.7/components/card_title",title:"Card.Title",description:"Add a general title to the Card.",source:"@site/versioned_docs/version-4.0.0-rc.7/components/Card.Title.mdx",sourceDirName:"components",slug:"/components/card_title",permalink:"/docs/components/card_title",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.7/components/Card.Title.mdx",tags:[],version:"4.0.0-rc.7",frontMatter:{id:"card_title",title:"Card.Title"},sidebar:"docs",previous:{title:"Card.Image",permalink:"/docs/components/card_image"},next:{title:"CheckBox",permalink:"/docs/components/checkbox"}},m={},f=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],v={toc:f};function b(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.w,{mdxType:"IconsStyle"}),(0,o.kt)("p",null,"Add a general title to the Card.\nThis, Receives all ",(0,o.kt)("a",{parentName:"p",href:"text#props"},"Text")," props."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("div",{class:"row inline-flex-center"},(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Import")),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(c.Z,{mdxType:"CodeBlock"},"import { Card } from '@rneui/themed';")),(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Theme Key"," ",(0,o.kt)("a",{href:"../customizing#using-themeprovider"},(0,o.kt)(i.Fs0,{mdxType:"BiInfoCircle"})))),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(c.Z,{mdxType:"CodeBlock"},"CardTitle"))),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"text#props"},"Text")," props.")))}b.isMDXComponent=!0}}]);