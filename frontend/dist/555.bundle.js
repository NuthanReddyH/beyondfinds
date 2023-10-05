"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[555],{1555:function(e,t,r){r.r(t),r.d(t,{default:function(){return we}});var o=r(7294),n=r.t(o,2),i=r(9617),s=r(9164),a=r(1508),l=r(2658),u=r(9554),c=r(270),p=r(6867),d=r(3366),h=r(7462),f=r(512),y=r(4780),v=r(1796),m=r(948),b=r(1657),g=r(8216),O=r(4680),w=r(1588),P=r(4867);function S(e){return(0,P.Z)("MuiAlert",e)}var k=(0,w.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),C=r(5949),j=r(5893),E=(0,C.Z)((0,j.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),x=(0,C.Z)((0,j.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),R=(0,C.Z)((0,j.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),A=(0,C.Z)((0,j.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Z=(0,C.Z)((0,j.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const Q=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],M=(0,m.ZP)(O.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,g.Z)(r.color||r.severity)}`]]}})((({theme:e,ownerState:t})=>{const r="light"===e.palette.mode?v._j:v.$n,o="light"===e.palette.mode?v.$n:v._j,n=t.color||t.severity;return(0,h.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},n&&"standard"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${n}Color`]:r(e.palette[n].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${n}StandardBg`]:o(e.palette[n].light,.9),[`& .${k.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:e.palette[n].main}},n&&"outlined"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${n}Color`]:r(e.palette[n].light,.6),border:`1px solid ${(e.vars||e).palette[n].light}`,[`& .${k.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:e.palette[n].main}},n&&"filled"===t.variant&&(0,h.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${n}FilledColor`],backgroundColor:e.vars.palette.Alert[`${n}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[n].dark:e.palette[n].main,color:e.palette.getContrastText(e.palette[n].main)}))})),D=(0,m.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),I=(0,m.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),q=(0,m.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),$={success:(0,j.jsx)(E,{fontSize:"inherit"}),warning:(0,j.jsx)(x,{fontSize:"inherit"}),error:(0,j.jsx)(R,{fontSize:"inherit"}),info:(0,j.jsx)(A,{fontSize:"inherit"})};var _=o.forwardRef((function(e,t){var r,o,n,i,s,a;const l=(0,b.Z)({props:e,name:"MuiAlert"}),{action:u,children:c,className:v,closeText:m="Close",color:O,components:w={},componentsProps:P={},icon:k,iconMapping:C=$,onClose:E,role:x="alert",severity:R="success",slotProps:A={},slots:_={},variant:L="standard"}=l,T=(0,d.Z)(l,Q),H=(0,h.Z)({},l,{color:O,severity:R,variant:L}),U=(e=>{const{variant:t,color:r,severity:o,classes:n}=e,i={root:["root",`${t}${(0,g.Z)(r||o)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,y.Z)(i,S,n)})(H),z=null!=(r=null!=(o=_.closeButton)?o:w.CloseButton)?r:p.Z,F=null!=(n=null!=(i=_.closeIcon)?i:w.CloseIcon)?n:Z,W=null!=(s=A.closeButton)?s:P.closeButton,B=null!=(a=A.closeIcon)?a:P.closeIcon;return(0,j.jsxs)(M,(0,h.Z)({role:x,elevation:0,ownerState:H,className:(0,f.Z)(U.root,v),ref:t},T,{children:[!1!==k?(0,j.jsx)(D,{ownerState:H,className:U.icon,children:k||C[R]||$[R]}):null,(0,j.jsx)(I,{ownerState:H,className:U.message,children:c}),null!=u?(0,j.jsx)(q,{ownerState:H,className:U.action,children:u}):null,null==u&&E?(0,j.jsx)(q,{ownerState:H,className:U.action,children:(0,j.jsx)(z,(0,h.Z)({size:"small","aria-label":m,title:m,color:"inherit",onClick:E},W,{children:(0,j.jsx)(F,(0,h.Z)({fontSize:"small"},B))}))}):null]}))})),L=r(2574),T=r(2186),H=r(5697),U=r.p+"97a24902f76b81073655354c7d260271.png",z=r(9250),F=r(9655),W=r(7582),B=r(4012),N=r(9672),V=r(320),J=!1,G=n.useSyncExternalStore||function(e,t,r){var n=t();!1===globalThis.__DEV__||J||n===t()||(J=!0,!1!==globalThis.__DEV__&&N.kG.error(56));var i=o.useState({inst:{value:n,getSnapshot:t}}),s=i[0].inst,a=i[1];return V.JC?o.useLayoutEffect((function(){Object.assign(s,{value:n,getSnapshot:t}),K(s)&&a({inst:s})}),[e,n,t]):Object.assign(s,{value:n,getSnapshot:t}),o.useEffect((function(){return K(s)&&a({inst:s}),e((function(){K(s)&&a({inst:s})}))}),[e]),n};function K(e){var t=e.value,r=e.getSnapshot;try{return t!==r()}catch(e){return!0}}var X=r(20),Y=r(5317),ee=r(990),te=r(1644),re=r(4692),oe=r(8702),ne=r(3712),ie=r(1436),se=Object.prototype.hasOwnProperty;var ae,le,ue,ce=function(){function e(e,t,r){var o=this;this.client=e,this.query=t,this.forceUpdate=function(){return o.forceUpdateState()},this.ssrDisabledResult=(0,oe.J)({loading:!0,data:void 0,error:void 0,networkStatus:te.Ie.loading}),this.skipStandbyResult=(0,oe.J)({loading:!1,data:void 0,error:void 0,networkStatus:te.Ie.ready}),this.toQueryResultCache=new(V.mr?WeakMap:Map),(0,re.Vp)(t,re.n_.Query);var n=r&&r.result,i=n&&n.data;i&&(this.previousData=i)}return e.prototype.forceUpdateState=function(){!1!==globalThis.__DEV__&&N.kG.warn(48)},e.prototype.executeQuery=function(e){var t,r=this;e.query&&Object.assign(this,{query:e.query}),this.watchQueryOptions=this.createWatchQueryOptions(this.queryHookOptions=e);var o=this.observable.reobserveAsConcast(this.getObsQueryOptions());return this.previousData=(null===(t=this.result)||void 0===t?void 0:t.data)||this.previousData,this.result=void 0,this.forceUpdate(),new Promise((function(e){var t;o.subscribe({next:function(e){t=e},error:function(){e(r.toQueryResult(r.observable.getCurrentResult()))},complete:function(){e(r.toQueryResult(t))}})}))},e.prototype.useQuery=function(e){var t=this;this.renderPromises=o.useContext((0,Y.K)()).renderPromises,this.useOptions(e);var r=this.useObservableQuery(),n=G(o.useCallback((function(e){if(t.renderPromises)return function(){};t.forceUpdate=e;var o=function(){var e=t.result,o=r.getCurrentResult();e&&e.loading===o.loading&&e.networkStatus===o.networkStatus&&(0,X.D)(e.data,o.data)||t.setResult(o)},n=function(e){if(i.unsubscribe(),i=r.resubscribeAfterError(o,n),!se.call(e,"graphQLErrors"))throw e;var s=t.result;(!s||s&&s.loading||!(0,X.D)(e,s.error))&&t.setResult({data:s&&s.data,error:e,loading:!1,networkStatus:te.Ie.error})},i=r.subscribe(o,n);return function(){setTimeout((function(){return i.unsubscribe()})),t.forceUpdate=function(){return t.forceUpdateState()}}}),[r,this.renderPromises,this.client.disableNetworkFetches]),(function(){return t.getCurrentResult()}),(function(){return t.getCurrentResult()}));return this.unsafeHandlePartialRefetch(n),this.toQueryResult(n)},e.prototype.useOptions=function(t){var r,o=this.createWatchQueryOptions(this.queryHookOptions=t),n=this.watchQueryOptions;(0,X.D)(o,n)||(this.watchQueryOptions=o,n&&this.observable&&(this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(r=this.result)||void 0===r?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=t.onCompleted||e.prototype.onCompleted,this.onError=t.onError||e.prototype.onError,!this.renderPromises&&!this.client.disableNetworkFetches||!1!==this.queryHookOptions.ssr||this.queryHookOptions.skip?this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:this.result!==this.ssrDisabledResult&&this.result!==this.skipStandbyResult||(this.result=void 0):this.result=this.ssrDisabledResult},e.prototype.getObsQueryOptions=function(){var e=[],t=this.client.defaultOptions.watchQuery;return t&&e.push(t),this.queryHookOptions.defaultOptions&&e.push(this.queryHookOptions.defaultOptions),e.push((0,ne.o)(this.observable&&this.observable.options,this.watchQueryOptions)),e.reduce(B.J)},e.prototype.createWatchQueryOptions=function(e){var t;void 0===e&&(e={});var r=e.skip,o=(e.ssr,e.onCompleted,e.onError,e.defaultOptions,(0,W._T)(e,["skip","ssr","onCompleted","onError","defaultOptions"])),n=Object.assign(o,{query:this.query});if(!this.renderPromises||"network-only"!==n.fetchPolicy&&"cache-and-network"!==n.fetchPolicy||(n.fetchPolicy="cache-first"),n.variables||(n.variables={}),r){var i=n.fetchPolicy,s=void 0===i?this.getDefaultFetchPolicy():i,a=n.initialFetchPolicy,l=void 0===a?s:a;Object.assign(n,{initialFetchPolicy:l,fetchPolicy:"standby"})}else n.fetchPolicy||(n.fetchPolicy=(null===(t=this.observable)||void 0===t?void 0:t.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return n},e.prototype.getDefaultFetchPolicy=function(){var e,t;return(null===(e=this.queryHookOptions.defaultOptions)||void 0===e?void 0:e.fetchPolicy)||(null===(t=this.client.defaultOptions.watchQuery)||void 0===t?void 0:t.fetchPolicy)||"cache-first"},e.prototype.onCompleted=function(e){},e.prototype.onError=function(e){},e.prototype.useObservableQuery=function(){var e=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=o.useMemo((function(){return{refetch:e.refetch.bind(e),reobserve:e.reobserve.bind(e),fetchMore:e.fetchMore.bind(e),updateQuery:e.updateQuery.bind(e),startPolling:e.startPolling.bind(e),stopPolling:e.stopPolling.bind(e),subscribeToMore:e.subscribeToMore.bind(e)}}),[e]);var t=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&t&&(this.renderPromises.registerSSRObservable(e),e.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(e)),e},e.prototype.setResult=function(e){var t=this.result;t&&t.data&&(this.previousData=t.data),this.result=e,this.forceUpdate(),this.handleErrorOrCompleted(e,t)},e.prototype.handleErrorOrCompleted=function(e,t){var r=this;if(!e.loading){var o=this.toApolloError(e);Promise.resolve().then((function(){o?r.onError(o):e.data&&(null==t?void 0:t.networkStatus)!==e.networkStatus&&e.networkStatus===te.Ie.ready&&r.onCompleted(e.data)})).catch((function(e){!1!==globalThis.__DEV__&&N.kG.warn(e)}))}},e.prototype.toApolloError=function(e){return(0,ie.O)(e.errors)?new ee.cA({graphQLErrors:e.errors}):e.error},e.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},e.prototype.toQueryResult=function(e){var t=this.toQueryResultCache.get(e);if(t)return t;var r=e.data,o=(e.partial,(0,W._T)(e,["data","partial"]));return this.toQueryResultCache.set(e,t=(0,W.pi)((0,W.pi)((0,W.pi)({data:r},o),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!t.error&&(0,ie.O)(e.errors)&&(t.error=new ee.cA({graphQLErrors:e.errors})),t},e.prototype.unsafeHandlePartialRefetch=function(e){!e.partial||!this.queryHookOptions.partialRefetch||e.loading||e.data&&0!==Object.keys(e.data).length||"cache-only"===this.observable.options.fetchPolicy||(Object.assign(e,{loading:!0,networkStatus:te.Ie.refetch}),this.observable.refetch())},e}(),pe=r(6252),de=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"],he=(0,r(4311).Ps)(ae||(le=["\n  query GetUser($username: String!, $password: String!) {\n    getUser(\n      username: $username\n      password: $password\n    ) {\n      _id\n      username\n      email\n    }\n  }\n"],ue||(ue=le.slice(0)),ae=Object.freeze(Object.defineProperties(le,{raw:{value:Object.freeze(ue)}}))));function fe(e){return fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fe(e)}function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(r),!0).forEach((function(t){me(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function me(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==fe(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==fe(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===fe(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function be(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,i,s,a=[],l=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(o=i.call(r)).done)&&(a.push(o.value),a.length!==t);l=!0);}catch(e){u=!0,n=e}finally{try{if(!l&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(u)throw n}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ge(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ge(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ge(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var Oe=(0,i.Z)({typography:{fontFamily:["Nunito Sans","sans-serif"].join(",")},palette:{primary:{main:"#23B0BE"}}}),we=function(){var e=be((0,o.useState)({username:"",password:""}),2),t=e[0],r=e[1],n=be((0,o.useState)({}),2),i=n[0],d=n[1],h=be((0,o.useState)(!1),2),f=h[0],y=h[1],v=(0,z.s0)(),m=function(e,t){var r,n=o.useRef(),i=o.useRef(),s=o.useRef(),a=(0,B.J)(t,n.current||{}),l=null!==(r=null==a?void 0:a.query)&&void 0!==r?r:e;i.current=a,s.current=l;var u=function(e,t){var r=o.useRef();r.current&&e===r.current.client&&t===r.current.query||(r.current=new ce(e,t,r.current));var n=r.current;return n.forceUpdateState=o.useReducer((function(e){return e+1}),0)[1],n}((0,pe.x)(t&&t.client),l),c=u.useQuery((0,W.pi)((0,W.pi)({},a),{skip:!n.current})),p=c.observable.options.initialFetchPolicy||u.getDefaultFetchPolicy(),d=Object.assign(c,{called:!!n.current}),h=o.useMemo((function(){for(var e={},t=function(t){var r=d[t];e[t]=function(){return n.current||(n.current=Object.create(null),u.forceUpdateState()),r.apply(this,arguments)}},r=0,o=de;r<o.length;r++)t(o[r]);return e}),[]);return Object.assign(d,h),[o.useCallback((function(e){n.current=e?(0,W.pi)((0,W.pi)({},e),{fetchPolicy:e.fetchPolicy||p}):{fetchPolicy:p};var t=(0,B.J)(i.current,(0,W.pi)({query:s.current},n.current)),r=u.executeQuery((0,W.pi)((0,W.pi)({},t),{skip:!1})).then((function(e){return Object.assign(e,h)}));return r.catch((function(){})),r}),[]),d]}(he,{onError:function(e){d({username:"Invalid credentials"})},onCompleted:function(e){e&&e.getUser&&v("/")}}),b=be(m,2),g=b[0],O=b[1].loading,w=function(e){var o=e.target,n=o.id,i=o.value;r(ve(ve({},t),{},me({},n,i)))};return o.createElement(s.Z,{theme:Oe},o.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},o.createElement("img",{src:U,alt:"Login Image",style:{maxWidth:"50%",marginRight:"2rem"}}),o.createElement("form",{onSubmit:function(e){e.preventDefault(),d({});var r={};t.username||(r.username="Username is required"),t.password||(r.password="Password is required"),Object.keys(r).length>0?d(r):g({variables:{username:t.username,password:t.password}})}},o.createElement(a.Z,{display:"flex",flexDirection:"column",maxWidth:400},o.createElement(l.Z,{variant:"h4",style:{textAlign:"left",marginBottom:"1rem"}},"Welcome To BeyondFinds"),o.createElement(l.Z,{style:{textAlign:"left",marginBottom:"1rem"}},"Please login to your account"),o.createElement(u.Z,{id:"username",label:"Username",variant:"outlined",margin:"normal",value:t.username,onChange:w,error:!!i.username,helperText:i.username||""}),o.createElement(u.Z,{id:"password",label:"Password",type:f?"text":"password",variant:"outlined",margin:"normal",value:t.password,onChange:w,error:!!i.password,helperText:i.password||"",InputProps:{endAdornment:o.createElement(c.Z,{position:"end"},o.createElement(p.Z,{onClick:function(){y(!f)}},f?o.createElement(T.Z,null):o.createElement(H.Z,null)))}}),o.createElement(l.Z,{variant:"body2",style:{textAlign:"left",margin:"0.5rem 0"}},o.createElement(F.rU,{to:"#"},"Forgot password?")),i.general&&o.createElement(_,{severity:"error",style:{marginBottom:"1rem"}},i.general),o.createElement(L.Z,{variant:"contained",color:"primary",fullWidth:!0,style:{marginTop:"1rem",color:"white"},type:"submit",disabled:O},O?"Logging In...":"Login"),o.createElement(l.Z,{variant:"body2",style:{textAlign:"left",marginTop:"1rem"}},"Don't have an account?"," ",o.createElement(F.rU,{className:"auth-link",to:"/register"},"Register"))))))}}}]);