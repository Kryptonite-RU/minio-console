(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[145],{399:function(e,t,a){"use strict";a(2);var n=a(41),c=a(382),r=a(439),i=a(314),o=a(318),s=a(384),l=a(34),b=a(39),d=a(0),m={toggleList:l.t},j=Object(n.b)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage}}),m);t.a=j(Object(o.a)((function(e){return Object(i.a)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}}})}))((function(e){var t=e.classes,a=(e.label,e.actions),n=(e.sidebarOpen,e.operatorMode,e.managerObjects),i=e.toggleList;return Object(d.jsxs)(r.a,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[Object(d.jsx)(c.a,{display:{xs:"block",sm:"block",md:"none"},children:Object(d.jsx)(r.a,{item:!0,xs:12,style:{height:10},children:"\xa0"})}),Object(d.jsxs)(r.a,{item:!0,xs:12,sm:12,md:6,className:t.rightMenu,children:[a&&a,n&&n.length>0&&Object(d.jsx)(s.a,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){i()},size:"large",children:Object(d.jsx)(b.Ib,{})})]})]})})))},932:function(e,t,a){"use strict";a.r(t);var n=a(16),c=a(1),r=a(2),i=a.n(r),o=a(314),s=a(318),l=a(31),b=a(382),d=a(384),m=a(467),j=a(399),p=a(120),u=a(854),h=a.n(u),f=a(54),g=a(135),x=a(0);t.default=Object(s.a)((function(e){return Object(o.a)(Object(c.a)({breadcrumLink:{textDecoration:"none",color:"black"},iframeStyle:{border:0,position:"absolute",height:"calc(100vh - 77px)",width:"100%"},divContainer:{position:"absolute",left:0,top:80,height:"calc(100vh - 81px)",width:"100%"},loader:{width:100,margin:"auto",marginTop:80},pageHeader:{borderBottom:"1px solid #dedede"}},Object(p.f)(e.spacing(4))))}))((function(e){var t=e.classes,a=e.match,c=Object(r.useState)(!0),o=Object(n.a)(c,2),s=o[0],p=o[1],u=a.params.tenantName,O=a.params.tenantNamespace,y=i.a.useRef(null);return Object(x.jsxs)(r.Fragment,{children:[Object(x.jsx)(b.a,{className:t.pageHeader,children:Object(x.jsx)(j.a,{label:Object(x.jsxs)(r.Fragment,{children:[Object(x.jsx)(l.a,{to:"/tenants",className:t.breadcrumLink,children:"Tenants"})," > ",Object(x.jsx)(l.a,{to:"/namespaces/".concat(O,"/tenants/").concat(u),className:t.breadcrumLink,children:a.params.tenantName})," > Management"]}),actions:Object(x.jsxs)(i.a.Fragment,{children:[Object(x.jsx)(d.a,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){if(null!==y&&null!==y.current&&null!==y.current.contentDocument){var e=y.current.contentDocument.location.toString(),t="&";if(e.indexOf("?")<0&&(t="?"),e.indexOf("cp=y")<0){var a="".concat(e).concat(t,"cp=y");y.current.contentDocument.location.replace(a)}else y.current.contentDocument.location.reload()}},size:"large",children:Object(x.jsx)(g.default,{})}),Object(x.jsx)(d.a,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){f.a.push("/namespaces/".concat(O,"/tenants/").concat(u))},size:"large",children:Object(x.jsx)(h.a,{})})]})})}),Object(x.jsxs)("div",{className:t.divContainer,children:[s&&Object(x.jsx)("div",{className:t.loader,children:Object(x.jsx)(m.a,{})}),Object(x.jsx)("iframe",{ref:y,className:t.iframeStyle,title:"metrics",src:"/api/proxy/".concat(O,"/").concat(u,"/?cp=y"),onLoad:function(e){p(!1)}})]})]})}))}}]);
//# sourceMappingURL=145.fc8dcf7c.chunk.js.map