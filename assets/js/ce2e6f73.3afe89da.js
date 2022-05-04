"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16762],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),m=d(n),u=r,s=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(s,i(i({ref:e},k),{},{components:n})):a.createElement(s,i({ref:e},k))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95961:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"button",title:"Button"},p=void 0,d={unversionedId:"button",id:"version-1.2.0/button",title:"Button",description:"Buttons are touchable elements used to interact with the screen. They may",source:"@site/versioned_docs/version-1.2.0/button.md",sourceDirName:".",slug:"/button",permalink:"/docs/1.2.0/button",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-1.2.0/button.md",tags:[],version:"1.2.0",frontMatter:{id:"button",title:"Button"},sidebar:"version-1.2.0/docs",previous:{title:"Badge",permalink:"/docs/1.2.0/badge"},next:{title:"ButtonGroup",permalink:"/docs/1.2.0/button_group"}},k={},c=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>buttonStyle</code>",id:"buttonstyle",level:3},{value:"<code>containerStyle</code>",id:"containerstyle",level:3},{value:"<code>disabled</code>",id:"disabled",level:3},{value:"<code>disabledStyle</code>",id:"disabledstyle",level:3},{value:"<code>disabledTitleStyle</code>",id:"disabledtitlestyle",level:3},{value:"<code>icon</code>",id:"icon",level:3},{value:"<code>iconContainerStyle</code>",id:"iconcontainerstyle",level:3},{value:"<code>iconRight</code>",id:"iconright",level:3},{value:"<code>linearGradientProps</code>",id:"lineargradientprops",level:3},{value:"<code>loading</code>",id:"loading",level:3},{value:"<code>loadingProps</code>",id:"loadingprops",level:3},{value:"<code>loadingStyle</code>",id:"loadingstyle",level:3},{value:"<code>onPress</code>",id:"onpress",level:3},{value:"<code>raised</code>",id:"raised",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>titleProps</code>",id:"titleprops",level:3},{value:"<code>titleStyle</code>",id:"titlestyle",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>TouchableComponent</code>",id:"touchablecomponent",level:3},{value:"<code>ViewComponent</code>",id:"viewcomponent",level:3},{value:"LinearGradient Usage",id:"lineargradient-usage",level:2}],m={toc:c};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Buttons are touchable elements used to interact with the screen. They may\ndisplay text, icons, or both. Buttons can be styled with several props to look a\nspecific way."),(0,l.kt)("div",{class:"component-preview"},(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/button/button--solid.jpg",alt:"Solid Button"}),(0,l.kt)("figcaption",null,"Solid")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/button/button--clear.jpg",alt:"Clear Button"}),(0,l.kt)("figcaption",null,"Clear")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/button/button--outline.jpg",alt:"Outline Button"}),(0,l.kt)("figcaption",null,"Outline"))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import { Button } from \'react-native-elements\';\nimport Icon from \'react-native-vector-icons/FontAwesome\';\n\n<Button\n  title="Solid Button"\n/>\n\n<Button\n  title="Outline button"\n  type="outline"\n/>\n\n<Button\n  title="Clear button"\n  type="clear"\n/>\n\n<Button\n  icon={\n    <Icon\n      name="arrow-right"\n      size={15}\n      color="white"\n    />\n  }\n  title="Button with icon component"\n/>\n\n<Button\n  icon={{\n    name: "arrow-right",\n    size: 15,\n    color: "white"\n  }}\n  title="Button with icon object"\n/>\n\n<Button\n  icon={\n    <Icon\n      name="arrow-right"\n      size={15}\n      color="white"\n    />\n  }\n  iconRight\n  title="Button with right icon"\n/>\n\n<Button\n  title="Loading button"\n  loading\n/>\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Also receives all\n",(0,l.kt)("a",{parentName:"p",href:"http://reactnative.dev/docs/touchablenativefeedback.html#props"},"TouchableNativeFeedback"),"\n(Android) or\n",(0,l.kt)("a",{parentName:"p",href:"http://reactnative.dev/docs/touchableopacity.html#props"},"TouchableOpacity"),"\n(iOS) props")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#buttonstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"buttonStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disabled"},(0,l.kt)("inlineCode",{parentName:"a"},"disabled"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disabledstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"disabledStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disabledtitlestyle"},(0,l.kt)("inlineCode",{parentName:"a"},"disabledTitleStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#icon"},(0,l.kt)("inlineCode",{parentName:"a"},"icon"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#iconcontainerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"iconContainerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#iconright"},(0,l.kt)("inlineCode",{parentName:"a"},"iconRight"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#lineargradientprops"},(0,l.kt)("inlineCode",{parentName:"a"},"linearGradientProps"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#loading"},(0,l.kt)("inlineCode",{parentName:"a"},"loading"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#loadingprops"},(0,l.kt)("inlineCode",{parentName:"a"},"loadingProps"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#loadingstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"loadingStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onpress"},(0,l.kt)("inlineCode",{parentName:"a"},"onPress"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#raised"},(0,l.kt)("inlineCode",{parentName:"a"},"raised"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#title"},(0,l.kt)("inlineCode",{parentName:"a"},"title"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#titleprops"},(0,l.kt)("inlineCode",{parentName:"a"},"titleProps"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#titlestyle"},(0,l.kt)("inlineCode",{parentName:"a"},"titleStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#type"},(0,l.kt)("inlineCode",{parentName:"a"},"type"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#touchablecomponent"},(0,l.kt)("inlineCode",{parentName:"a"},"TouchableComponent"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#viewcomponent"},(0,l.kt)("inlineCode",{parentName:"a"},"ViewComponent")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"buttonstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"buttonStyle")),(0,l.kt)("p",null,"add additional styling for button component (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"containerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,l.kt)("p",null,"styling for Component container"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disabled"},(0,l.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,l.kt)("p",null,"disables user interaction"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disabledstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"disabledStyle")),(0,l.kt)("p",null,"style of the button when disabled"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disabledtitlestyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"disabledTitleStyle")),(0,l.kt)("p",null,"style of the title when disabled"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Text style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"icon"},(0,l.kt)("inlineCode",{parentName:"h3"},"icon")),(0,l.kt)("p",null,"displays a centered icon (when no title) or to the left (with text). (can be\nused along with iconRight as well). Can be an object or a custom component."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{",(0,l.kt)("a",{parentName:"td",href:"/docs/1.2.0/icon#props"},"...Icon props"),"}",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"OR"),(0,l.kt)("br",null)," component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"iconcontainerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"iconContainerStyle")),(0,l.kt)("p",null,"styling for Icon Component container"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"iconright"},(0,l.kt)("inlineCode",{parentName:"h3"},"iconRight")),(0,l.kt)("p",null,"displays Icon to the right of title. Needs to be used along with ",(0,l.kt)("inlineCode",{parentName:"p"},"icon")," prop"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lineargradientprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"linearGradientProps")),(0,l.kt)("p",null,"displays a linear gradient. See ",(0,l.kt)("a",{parentName:"p",href:"#lineargradient-usage"},"usage"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{",(0,l.kt)("a",{parentName:"td",href:"https://github.com/react-native-community/react-native-linear-gradient#additional-props"},"...Gradient props"),"}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"loading"},(0,l.kt)("inlineCode",{parentName:"h3"},"loading")),(0,l.kt)("p",null,"prop to display a loading spinner (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"loadingprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"loadingProps")),(0,l.kt)("p",null,"add additional props for ActivityIndicator component (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{",(0,l.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/activityindicator#props"},"...ActivityIndicator props"),"}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Internal object")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"loadingstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"loadingStyle")),(0,l.kt)("p",null,"add additional styling for loading component (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onpress"},(0,l.kt)("inlineCode",{parentName:"h3"},"onPress")),(0,l.kt)("p",null,"onPress method (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"raised"},(0,l.kt)("inlineCode",{parentName:"h3"},"raised")),(0,l.kt)("p",null,"Add raised button styling (optional). Has no effect if ",(0,l.kt)("inlineCode",{parentName:"p"},'type="clear"'),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"title"},(0,l.kt)("inlineCode",{parentName:"h3"},"title")),(0,l.kt)("p",null,"button title (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"titleprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"titleProps")),(0,l.kt)("p",null,"add additional props for Text component (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{",(0,l.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/text#props"},"...Text props"),"}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"titlestyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"titleStyle")),(0,l.kt)("p",null,"add additional styling for title component (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Text style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"type"},(0,l.kt)("inlineCode",{parentName:"h3"},"type")),(0,l.kt)("p",null,"Type of button (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"solid"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"clear"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"outline")),(0,l.kt)("td",{parentName:"tr",align:"center"},"solid")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"touchablecomponent"},(0,l.kt)("inlineCode",{parentName:"h3"},"TouchableComponent")),(0,l.kt)("p",null,"component for user interaction"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Touchable Component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"TouchableOpacity (ios) or TouchableNativeFeedback (android)")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"viewcomponent"},(0,l.kt)("inlineCode",{parentName:"h3"},"ViewComponent")),(0,l.kt)("p",null,"component for container"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"React Native Component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"View")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"lineargradient-usage"},"LinearGradient Usage"),(0,l.kt)("p",null,"Using LinearGradient in React Native Elements is supported through the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient"},"react-native-linear-gradient"),"\npackage. If you're using expo or create-react-native-app then you can use\n",(0,l.kt)("inlineCode",{parentName:"p"},"linearGradientProps")," prop right out the box with no additional setup."),(0,l.kt)("p",null,"For react-native-cli users, make sure to follow the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient#add-it-to-your-project"},"installation instructions"),"\nand use it like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Button } from 'react-native-elements';\nimport LinearGradient from 'react-native-linear-gradient';\n\n...\n\n<Button\n  ViewComponent={LinearGradient} // Don't forget this!\n  linearGradientProps={{\n    colors: ['red', 'pink'],\n    start: { x: 0, y: 0.5 },\n    end: { x: 1, y: 0.5 },\n  }}\n/>\n")))}u.isMDXComponent=!0}}]);