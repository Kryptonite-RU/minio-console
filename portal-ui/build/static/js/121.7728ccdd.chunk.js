(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[121],{399:function(e,t,n){"use strict";n(2);var i=n(41),a=n(382),c=n(439),o=n(314),r=n(318),s=n(384),l=n(34),b=n(39),d=n(0),j={toggleList:l.t},O=Object(i.b)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage}}),j);t.a=O(Object(r.a)((function(e){return Object(o.a)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}}})}))((function(e){var t=e.classes,n=(e.label,e.actions),i=(e.sidebarOpen,e.operatorMode,e.managerObjects),o=e.toggleList;return Object(d.jsxs)(c.a,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[Object(d.jsx)(a.a,{display:{xs:"block",sm:"block",md:"none"},children:Object(d.jsx)(c.a,{item:!0,xs:12,style:{height:10},children:"\xa0"})}),Object(d.jsxs)(c.a,{item:!0,xs:12,sm:12,md:6,className:t.rightMenu,children:[n&&n,i&&i.length>0&&Object(d.jsx)(s.a,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){o()},size:"large",children:Object(d.jsx)(b.Ib,{})})]})]})})))},401:function(e,t,n){"use strict";var i=n(1),a=(n(2),n(439)),c=n(314),o=n(318),r=n(120),s=n(0);t.a=Object(o.a)((function(e){return Object(c.a)(Object(i.a)({},r.s))}))((function(e){var t=e.classes,n=e.className,i=void 0===n?"":n,c=e.children;return Object(s.jsx)("div",{className:t.contentSpacer,children:Object(s.jsx)(a.a,{container:!0,children:Object(s.jsx)(a.a,{item:!0,xs:12,className:i,children:c})})})}))},645:function(e,t,n){"use strict";n(2);var i=n(369),a=n(382),c=n(94),o=n(789),r=n(788),s=n(0);function l(){return Object(s.jsxs)(c.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(s.jsx)(r.a,{color:"inherit",href:"https://min.io/",children:"MinIO"})," ",(new Date).getFullYear(),"."]})}t.a=function(){return Object(s.jsxs)(o.a,{component:"main",children:[Object(s.jsx)(i.a,{}),Object(s.jsx)("div",{children:Object(s.jsx)(c.a,{variant:"h1",component:"h1",children:"404 Not Found"})}),Object(s.jsx)(a.a,{mt:5,children:Object(s.jsx)(l,{})})]})}},979:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n(19),c=n(54),o=n(645),r=n(1),s=n(314),l=n(318),b=n(439),d=n(120),j=n(399),O=n(31),u=n(0),f=Object(l.a)((function(e){return Object(s.a)({configurationLink:{border:"#E5E5E5 1px solid",borderRadius:2,padding:20,width:190,maxWidth:190,height:80,margin:14,display:"flex",alignItems:"center",color:"#072C4F",fontSize:14,fontWeight:700,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",lineClamp:2,"& svg":{fontSize:35,marginRight:15},"&:hover":{backgroundColor:"#FBFAFA"},"&.disabled":{backgroundColor:"#F9F9F9",color:"#ababab",cursor:"not-allowed"}}})}))((function(e){var t=e.classes,n=e.configuration,i=e.prefix,a=void 0===i?"settings":i,c=e.disabled,o=void 0!==c&&c;return Object(u.jsxs)(O.a,{to:o?"/".concat(a):"/".concat(a,"/").concat(n.configuration_id),className:"".concat(t.configurationLink," ").concat(o?"disabled":""),children:[n.icon,n.configuration_label]})})),g=n(401),x=n(39),h=n(6),p=n(42),m=n(41),_=Object(m.b)((function(e){return{features:e.console.session.features}}),null)(Object(l.a)((function(e){return Object(s.a)(Object(r.a)(Object(r.a)(Object(r.a)({settingsOptionsContainer:{display:"flex",flexDirection:"row",justifyContent:"flex-start",flexWrap:"wrap",border:"#E5E5E5 1px solid",borderRadius:2,padding:5,backgroundColor:"#fff"}},d.v),d.a),Object(d.f)(e.spacing(4))))}))((function(e){var t=e.classes,n=(e.features,[{icon:Object(u.jsx)(x.zb,{}),configuration_id:"logs",configuration_label:"Logs",disabled:!Object(p.b)(h.a,h.c[h.b.TOOLS_LOGS])},{icon:Object(u.jsx)(x.Vb,{}),configuration_id:"audit-logs",configuration_label:"Audit Logs",disabled:!Object(p.b)(h.a,h.c[h.b.TOOLS_AUDITLOGS])},{icon:Object(u.jsx)(x.vc,{}),configuration_id:"watch",configuration_label:"Watch",disabled:!Object(p.b)(h.a,h.c[h.b.TOOLS_WATCH])},{icon:Object(u.jsx)(x.lc,{}),configuration_id:"trace",configuration_label:"Trace",disabled:!Object(p.b)(h.a,h.c[h.b.TOOLS_TRACE])},{icon:Object(u.jsx)(x.nb,{}),configuration_id:"heal",configuration_label:"Heal",disabled:!Object(p.b)(h.a,h.c[h.b.TOOLS_HEAL])},{icon:Object(u.jsx)(x.H,{}),configuration_id:"diagnostics",configuration_label:"Diagnostics",disabled:!Object(p.b)(h.a,h.c[h.b.TOOLS_DIAGNOSTICS])},{icon:Object(u.jsx)(x.dc,{}),configuration_id:"speedtest",configuration_label:"Speedtest",disabled:!Object(p.b)(h.a,h.c[h.b.TOOLS_SPEEDTEST])}]);return Object(u.jsxs)(i.Fragment,{children:[Object(u.jsx)(j.a,{label:"Tools"}),Object(u.jsx)(g.a,{children:Object(u.jsx)(b.a,{item:!0,xs:12,children:Object(u.jsx)(b.a,{item:!0,xs:12,children:Object(u.jsx)("div",{className:t.settingsOptionsContainer,children:n.map((function(e){return Object(u.jsx)(f,{prefix:"tools",configuration:e,disabled:e.disabled||!1},"configItem-".concat(e.configuration_label))}))})})})})]})})));t.default=function(){return Object(u.jsx)(a.c,{history:c.a,children:Object(u.jsxs)(a.d,{children:[Object(u.jsx)(a.b,{path:"/tools",exact:!0,component:_}),Object(u.jsx)(a.b,{component:o.a})]})})}}}]);
//# sourceMappingURL=121.7728ccdd.chunk.js.map