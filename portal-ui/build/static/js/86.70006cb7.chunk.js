(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[86],{399:function(t,e,n){"use strict";n(2);var a=n(41),r=n(382),c=n(439),i=n(314),o=n(318),s=n(384),l=n(34),d=n(39),g=n(0),u={toggleList:l.t},m=Object(a.b)((function(t){return{sidebarOpen:t.system.sidebarOpen,operatorMode:t.system.operatorMode,managerObjects:t.objectBrowser.objectManager.objectsToManage}}),u);e.a=m(Object(o.a)((function(t){return Object(i.a)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:t.palette.primary.main,"& .min-icon":{width:120}}})}))((function(t){var e=t.classes,n=(t.label,t.actions),a=(t.sidebarOpen,t.operatorMode,t.managerObjects),i=t.toggleList;return Object(g.jsxs)(c.a,{container:!0,className:"".concat(e.headerContainer," page-header"),direction:"row",alignItems:"center",children:[Object(g.jsx)(r.a,{display:{xs:"block",sm:"block",md:"none"},children:Object(g.jsx)(c.a,{item:!0,xs:12,style:{height:10},children:"\xa0"})}),Object(g.jsxs)(c.a,{item:!0,xs:12,sm:12,md:6,className:e.rightMenu,children:[n&&n,a&&a.length>0&&Object(g.jsx)(s.a,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){i()},size:"large",children:Object(g.jsx)(d.Ib,{})})]})]})})))},401:function(t,e,n){"use strict";var a=n(1),r=(n(2),n(439)),c=n(314),i=n(318),o=n(120),s=n(0);e.a=Object(i.a)((function(t){return Object(c.a)(Object(a.a)({},o.s))}))((function(t){var e=t.classes,n=t.className,a=void 0===n?"":n,c=t.children;return Object(s.jsx)("div",{className:e.contentSpacer,children:Object(s.jsx)(r.a,{container:!0,children:Object(s.jsx)(r.a,{item:!0,xs:12,className:a,children:c})})})}))},425:function(t,e,n){"use strict";n(2);var a=n(31),r=n(314),c=n(318),i=n(39),o=n(0);e.a=Object(c.a)((function(t){return Object(r.a)({link:{display:"flex",alignItems:"center",textDecoration:"none",maxWidth:"250px",padding:"2rem 2rem 0rem 2rem",color:t.palette.primary.light,fontSize:".8rem","&:hover":{textDecoration:"underline"}},icon:{marginRight:".3rem",display:"flex",alignItems:"center",justifyContent:"center"}})}))((function(t){var e=t.to,n=t.label,r=t.classes,c=t.className;return Object(o.jsxs)(a.a,{to:e,className:"".concat(r.link," ").concat(c||""),children:[Object(o.jsx)("div",{className:r.icon,children:Object(o.jsx)(i.j,{})}),Object(o.jsx)("div",{className:r.label,children:n})]})}))},439:function(t,e,n){"use strict";var a=n(13),r=n(5),c=n(4),i=n(3),o=n(2),s=(n(12),n(8)),l=n(23),d=n(364),g=n(115),u=n(9),m=n(14);var b=o.createContext(),p=n(93),j=n(116);function x(t){return Object(p.a)("MuiGrid",t)}var f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],v=Object(j.a)("MuiGrid",["root","container","item","zeroMinWidth"].concat(Object(a.a)([0,1,2,3,4,5,6,7,8,9,10].map((function(t){return"spacing-xs-".concat(t)}))),Object(a.a)(["column-reverse","column","row-reverse","row"].map((function(t){return"direction-xs-".concat(t)}))),Object(a.a)(["nowrap","wrap-reverse","wrap"].map((function(t){return"wrap-xs-".concat(t)}))),Object(a.a)(f.map((function(t){return"grid-xs-".concat(t)}))),Object(a.a)(f.map((function(t){return"grid-sm-".concat(t)}))),Object(a.a)(f.map((function(t){return"grid-md-".concat(t)}))),Object(a.a)(f.map((function(t){return"grid-lg-".concat(t)}))),Object(a.a)(f.map((function(t){return"grid-xl-".concat(t)}))))),O=n(0),h=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function S(t){var e=parseFloat(t);return"".concat(e).concat(String(t).replace(String(e),"")||"px")}function w(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||!t||t<=0)return[];if("string"===typeof t&&!Number.isNaN(Number(t))||"number"===typeof t)return[n["spacing-xs-".concat(String(t))]||"spacing-xs-".concat(String(t))];var a=t.xs,r=t.sm,c=t.md,i=t.lg,o=t.xl;return[Number(a)>0&&(n["spacing-xs-".concat(String(a))]||"spacing-xs-".concat(String(a))),Number(r)>0&&(n["spacing-sm-".concat(String(r))]||"spacing-sm-".concat(String(r))),Number(c)>0&&(n["spacing-md-".concat(String(c))]||"spacing-md-".concat(String(c))),Number(i)>0&&(n["spacing-lg-".concat(String(i))]||"spacing-lg-".concat(String(i))),Number(o)>0&&(n["spacing-xl-".concat(String(o))]||"spacing-xl-".concat(String(o)))]}var N=Object(u.a)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState,r=n.container,c=n.direction,i=n.item,o=n.lg,s=n.md,l=n.sm,d=n.spacing,g=n.wrap,u=n.xl,m=n.xs,b=n.zeroMinWidth;return[e.root,r&&e.container,i&&e.item,b&&e.zeroMinWidth].concat(Object(a.a)(w(d,r,e)),["row"!==c&&e["direction-xs-".concat(String(c))],"wrap"!==g&&e["wrap-xs-".concat(String(g))],!1!==m&&e["grid-xs-".concat(String(m))],!1!==l&&e["grid-sm-".concat(String(l))],!1!==s&&e["grid-md-".concat(String(s))],!1!==o&&e["grid-lg-".concat(String(o))],!1!==u&&e["grid-xl-".concat(String(u))]])}})((function(t){var e=t.ownerState;return Object(i.a)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"nowrap"===e.wrap&&{flexWrap:"nowrap"},"reverse"===e.wrap&&{flexWrap:"wrap-reverse"})}),(function(t){var e=t.theme,n=t.ownerState,a=Object(l.d)({values:n.direction,breakpoints:e.breakpoints.values});return Object(l.b)({theme:e},a,(function(t){var e={flexDirection:t};return 0===t.indexOf("column")&&(e["& > .".concat(v.item)]={maxWidth:"none"}),e}))}),(function(t){var e=t.theme,n=t.ownerState,a=n.container,c=n.rowSpacing,i={};if(a&&0!==c){var o=Object(l.d)({values:c,breakpoints:e.breakpoints.values});i=Object(l.b)({theme:e},o,(function(t){var n=e.spacing(t);return"0px"!==n?Object(r.a)({marginTop:"-".concat(S(n))},"& > .".concat(v.item),{paddingTop:S(n)}):{}}))}return i}),(function(t){var e=t.theme,n=t.ownerState,a=n.container,c=n.columnSpacing,i={};if(a&&0!==c){var o=Object(l.d)({values:c,breakpoints:e.breakpoints.values});i=Object(l.b)({theme:e},o,(function(t){var n=e.spacing(t);return"0px"!==n?Object(r.a)({width:"calc(100% + ".concat(S(n),")"),marginLeft:"-".concat(S(n))},"& > .".concat(v.item),{paddingLeft:S(n)}):{}}))}return i}),(function(t){var e=t.theme,n=t.ownerState;return e.breakpoints.keys.reduce((function(t,a){return function(t,e,n,a){var r=a[n];if(r){var c={};if(!0===r)c={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)c={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=Object(l.d)({values:a.columns,breakpoints:e.breakpoints.values}),s="object"===typeof o?o[n]:o,d="".concat(Math.round(r/s*1e8)/1e6,"%"),g={};if(a.container&&a.item&&0!==a.columnSpacing){var u=e.spacing(a.columnSpacing);if("0px"!==u){var m="calc(".concat(d," + ").concat(S(u),")");g={flexBasis:m,maxWidth:m}}}c=Object(i.a)({flexBasis:d,flexGrow:0,maxWidth:d},g)}0===e.breakpoints.values[n]?Object.assign(t,c):t[e.breakpoints.up(n)]=c}}(t,e,a,n),t}),{})})),k=o.forwardRef((function(t,e){var n,r=Object(m.a)({props:t,name:"MuiGrid"}),l=Object(d.a)(r),u=l.className,p=l.columns,j=l.columnSpacing,f=l.component,v=void 0===f?"div":f,S=l.container,k=void 0!==S&&S,M=l.direction,y=void 0===M?"row":M,W=l.item,z=void 0!==W&&W,T=l.lg,C=void 0!==T&&T,G=l.md,I=void 0!==G&&G,L=l.rowSpacing,B=l.sm,R=void 0!==B&&B,A=l.spacing,D=void 0===A?0:A,F=l.wrap,J=void 0===F?"wrap":F,H=l.xl,P=void 0!==H&&H,q=l.xs,E=void 0!==q&&q,K=l.zeroMinWidth,Q=void 0!==K&&K,U=Object(c.a)(l,h),V=L||D,X=j||D,Y=o.useContext(b),Z=p||Y||12,$=Object(i.a)({},l,{columns:Z,container:k,direction:y,item:z,lg:C,md:I,sm:R,rowSpacing:V,columnSpacing:X,wrap:J,xl:P,xs:E,zeroMinWidth:Q}),_=function(t){var e=t.classes,n=t.container,r=t.direction,c=t.item,i=t.lg,o=t.md,s=t.sm,l=t.spacing,d=t.wrap,u=t.xl,m=t.xs,b={root:["root",n&&"container",c&&"item",t.zeroMinWidth&&"zeroMinWidth"].concat(Object(a.a)(w(l,n)),["row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==d&&"wrap-xs-".concat(String(d)),!1!==m&&"grid-xs-".concat(String(m)),!1!==s&&"grid-sm-".concat(String(s)),!1!==o&&"grid-md-".concat(String(o)),!1!==i&&"grid-lg-".concat(String(i)),!1!==u&&"grid-xl-".concat(String(u))])};return Object(g.a)(b,x,e)}($);return n=Object(O.jsx)(N,Object(i.a)({ownerState:$,className:Object(s.a)(_.root,u),as:v,ref:e},U)),12!==Z?Object(O.jsx)(b.Provider,{value:Z,children:n}):n}));e.a=k},771:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return o}));var a="minio",r="gcs",c="s3",i="azure",o=[{serviceName:a,targetTitle:"MinIO",logo:"/minio-logo.svg"},{serviceName:r,targetTitle:"Google Cloud Storage",logo:"/gcs-logo.svg"},{serviceName:c,targetTitle:"AWS S3",logo:"/aws-logo.svg"},{serviceName:i,targetTitle:"Azure",logo:"/azure-logo.svg"}]},937:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(2),c=n(314),i=n(318),o=n(439),s=n(120),l=n(399),d=n(771),g=n(425),u=n(401),m=n(0);e.default=Object(i.a)((function(t){return Object(c.a)(Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({},s.v),s.y),s.G),Object(s.f)(t.spacing(4))))}))((function(t){var e=t.classes,n=t.history;return Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(l.a,{label:"Tier Configuration"}),Object(m.jsx)(g.a,{to:"/tiers",label:"Return to Configured Tiers"}),Object(m.jsx)(u.a,{children:Object(m.jsx)(o.a,{children:Object(m.jsx)(o.a,{item:!0,xs:12,children:Object(m.jsx)(o.a,{item:!0,xs:12,children:Object(m.jsx)(o.a,{item:!0,xs:12,children:Object(m.jsx)("div",{className:e.iconContainer,children:d.e.map((function(t,a){return Object(m.jsxs)("button",{className:e.lambdaNotif,onClick:function(){var e;e=t.serviceName,n.push("/tiers/add/".concat(e))},children:[Object(m.jsx)("div",{className:e.lambdaNotifIcon,children:Object(m.jsx)("img",{src:t.logo,className:e.logoButton,alt:t.targetTitle})}),Object(m.jsx)("div",{className:e.lambdaNotifTitle,children:Object(m.jsx)("b",{children:t.targetTitle})})]},"tierOpt-".concat(a.toString,"-").concat(t.targetTitle))}))})})})})})})]})}))}}]);
//# sourceMappingURL=86.70006cb7.chunk.js.map