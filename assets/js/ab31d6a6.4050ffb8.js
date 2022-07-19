(self.webpackChunk=self.webpackChunk||[]).push([[61486],{85489:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(67294),r=a(13925),s=a(54236),i=a(40318),o=a(62290);const l=function(){var e=(0,i.Z)({componentName:"LinearProgress",props:{value:{type:o.n.Number,value:0},variant:{type:o.n.Enum,options:{determinate:"determinate",indeterminate:"indeterminate"},value:"indeterminate"},style:{type:o.n.Object,value:'{width: "90%"}'},color:{type:o.n.String,value:"secondary"},trackColor:{type:o.n.String,value:""}},scope:{LinearProgress:r.LinearProgress},imports:{"@rneui/base":{named:["LinearProgress"]}}});return n.createElement(n.Fragment,null,n.createElement(s.Z,{params:e}))}},55550:(e,t,a)=>{"use strict";a.d(t,{w:()=>l});var n=a(67294),r=a(35742);const s=a.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf",i=a.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf",o=a.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf";var l=function(){return n.createElement(r.Z,null,n.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+s+") format('truetype');\n          }\n        "))}},54236:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(87462),r=a(67294),s=a(91262),i=a(18421),o=a(77356),l=a(41652),d=a(24309),p=a(16042),m=a(20346),c=a(30650);const u=function(e){var t=e.params,a=e.containerStyle,u=void 0===a?{}:a;return r.createElement(s.Z,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(m.X9.Provider,null,r.createElement(m.PK,{initialMetrics:c.o},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},r.createElement(i.Z,(0,n.Z)({},t.compilerProps,{minHeight:62,placeholder:o.Z}))),r.createElement(l.Z,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(d.Z,t.knobProps),r.createElement(l.Z,t.errorProps),r.createElement(p.E,t.actions)))}))}},96507:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>N,frontMatter:()=>c,metadata:()=>g,toc:()=>v});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=a(55550),o=(a(9877),a(72360),["components"]),l={toc:[]};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"snack-player","data-snack-name":"RNE Linear Progress","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Button%2C%20LinearProgress%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aconst%20LinearProgressAPI%3A%20React.FunctionComponent%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bprogress%2C%20setProgress%5D%20%3D%20React.useState(0)%3B%0A%0AReact.useEffect(()%20%3D%3E%20%7B%0A%20%20let%20subs%20%3D%20true%3B%0A%20%20if%20(progress%20%3C%201%20%26%26%20progress%20!%3D%3D%200)%20%7B%0A%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(subs)%20%7B%0A%20%20%20%20%20%20%20%20setProgress(progress%20%2B%200.1)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%20100)%3B%0A%20%20%7D%0A%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20subs%20%3D%20false%3B%0A%20%20%7D%3B%0A%7D%2C%20%5Bprogress%5D)%3B%0A%0Areturn%20(%0A%20%20%3CView%3E%0A%20%20%20%20%3CView%0A%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20margin%3A%2010%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CText%3EIndeterminate%20Variant%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CLinearProgress%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3CText%3EIndeterminate%20Variant%20with%20color%3C%2FText%3E%0A%20%20%20%20%20%20%3CLinearProgress%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%20color%3D%22red%22%20%2F%3E%0A%20%20%20%20%20%20%3CText%3EDeterminate%20Variant%3C%2FText%3E%0A%20%20%20%20%20%20%3CLinearProgress%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20value%3D%7Bprogress%7D%0A%20%20%20%20%20%20%20%20variant%3D%22determinate%22%0A%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20disabled%3D%7Bprogress%20%3E%200%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setProgress(0.00001)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20title%3D%7B'Start%20Progress'%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20margin%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20disabled%3D%7Bprogress%20%3D%3D%3D%200%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setProgress(0)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20title%3D%7B'Restart'%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20margin%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aexport%20default%20LinearProgressAPI%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0;var p=a(85489),m=["components"],c={id:"linearprogress",title:"LinearProgress"},u=void 0,g={unversionedId:"components/linearprogress",id:"version-4.0.0-rc.5/components/linearprogress",title:"LinearProgress",description:"Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.",source:"@site/versioned_docs/version-4.0.0-rc.5/components/LinearProgress.mdx",sourceDirName:"components",slug:"/components/linearprogress",permalink:"/docs/components/linearprogress",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.5/components/LinearProgress.mdx",tags:[],version:"4.0.0-rc.5",frontMatter:{id:"linearprogress",title:"LinearProgress"},sidebar:"docs",previous:{title:"Input",permalink:"/docs/components/input"},next:{title:"ListItem",permalink:"/docs/components/listitem"}},k={},v=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],A={toc:v};function N(e){var t=e.components,a=(0,r.Z)(e,m);return(0,s.kt)("wrapper",(0,n.Z)({},A,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.w,{mdxType:"IconsStyle"}),(0,s.kt)("p",null,"Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.\nThey communicate an app\u2019s state and indicate available actions, such as whether users can navigate away from the current screen.\nAlso receives all ",(0,s.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props"),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},'import { LinearProgress } from "@rneui/themed";\n')),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)(d,{mdxType:"Usage"}),(0,s.kt)("h2",{id:"props"},"Props"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Includes all ",(0,s.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props."))),(0,s.kt)("div",{class:"table-responsive"},(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"animation")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,s.kt)("inlineCode",{parentName:"td"},"{ duration?: number; }")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"{ duration: 2000 }")),(0,s.kt)("td",{parentName:"tr",align:null},"Animation duration")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"color")),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"secondary")),(0,s.kt)("td",{parentName:"tr",align:null},"Color for linear progress.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"style")),(0,s.kt)("td",{parentName:"tr",align:null},"View Style"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"Add additional styling for linear progress component.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"trackColor")),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"Track color for linear progress.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"value")),(0,s.kt)("td",{parentName:"tr",align:null},"number"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"The value of the progress indicator for the determinate variant. Value between 0 and 1.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"variant")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"determinate")," ","|"," ",(0,s.kt)("inlineCode",{parentName:"td"},"indeterminate")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"value === undefined ? 'indeterminate' : 'determinate'")),(0,s.kt)("td",{parentName:"tr",align:null},"Type of button."))))),(0,s.kt)("h2",{id:"playground"},"Playground"),(0,s.kt)(p.Z,{mdxType:"Play"}))}N.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);