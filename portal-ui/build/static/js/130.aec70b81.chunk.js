(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[130],{396:function(e,t,a){"use strict";var n,o=a(16),r=a(1),c=a(2),s=a(41),i=a(384),l=a(376),d=a(412),j=a(413),b=a(414),u=a(314),m=a(318),O=a(120),f=a(30),p=a(48),h=a.n(p),g=a(126),x=a.n(g),v=a(125),C=a.n(v),S=a(122),y=a.n(S),M=a(0),k=function(){clearInterval(n)},E={displayErrorMessage:f.g},N=Object(s.b)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),E)(Object(m.a)((function(e){return Object(u.a)({modalErrorContainer:{position:"absolute",marginTop:10,width:"80%",backgroundColor:"#fff",border:"#C72C48 1px solid",borderLeftWidth:12,borderRadius:3,zIndex:1e3,padding:"10px 15px",left:"50%",transform:"translateX(-50%)",opacity:0,transitionDuration:"0.2s"},modalErrorShow:{opacity:1},closeButton:{position:"absolute",right:5,fontSize:"small",border:0,backgroundColor:"#fff",cursor:"pointer"},errorTitle:{display:"flex",alignItems:"center"},errorLabel:{color:"#000",fontSize:18,fontWeight:500,marginLeft:5,marginRight:25},messageIcon:{color:"#C72C48",display:"flex","& svg":{width:32,height:32}},detailsButton:{color:"#9C9C9C",display:"flex",alignItems:"center",border:0,backgroundColor:"transparent",paddingLeft:5,fontSize:14,transformDuration:"0.3s",cursor:"pointer"},extraDetailsContainer:{fontStyle:"italic",color:"#9C9C9C",lineHeight:0,padding:"0 10px",transition:"all .2s ease-in-out",overflow:"hidden"},extraDetailsOpen:{lineHeight:1,padding:"3px 10px"},arrowElement:{marginLeft:-5},arrowOpen:{transform:"rotateZ(90deg)",transformDuration:"0.3s"}})}))((function(e){var t=e.classes,a=e.modalSnackMessage,r=e.displayErrorMessage,s=e.customStyle,i=Object(c.useState)(!1),l=Object(o.a)(i,2),d=l[0],j=l[1],b=Object(c.useState)(!1),u=Object(o.a)(b,2),m=u[0],O=u[1],f=Object(c.useCallback)((function(){O(!1)}),[]);Object(c.useEffect)((function(){m||(r({detailedError:"",errorMessage:""}),j(!1))}),[r,m]),Object(c.useEffect)((function(){""!==a.message&&"error"===a.type&&O(!0)}),[f,a.message,a.type]);var p=h()(a,"message",""),g=h()(a,"detailedErrorMsg","");return"error"!==a.type||""===p?null:Object(M.jsx)(c.Fragment,{children:Object(M.jsxs)("div",{className:"".concat(t.modalErrorContainer," ").concat(m?t.modalErrorShow:""),style:s,onMouseOver:k,onMouseLeave:function(){n=setInterval(f,1e4)},children:[Object(M.jsx)("button",{className:t.closeButton,onClick:f,children:Object(M.jsx)(y.a,{})}),Object(M.jsxs)("div",{className:t.errorTitle,children:[Object(M.jsx)("span",{className:t.messageIcon,children:Object(M.jsx)(C.a,{})}),Object(M.jsx)("span",{className:t.errorLabel,children:p})]}),""!==g&&Object(M.jsxs)(c.Fragment,{children:[Object(M.jsx)("div",{className:t.detailsContainerLink,children:Object(M.jsxs)("button",{className:t.detailsButton,onClick:function(){j(!d)},children:["Details",Object(M.jsx)(x.a,{className:"".concat(t.arrowElement," ").concat(d?t.arrowOpen:"")})]})}),Object(M.jsx)("div",{className:"".concat(t.extraDetailsContainer," ").concat(d?t.extraDetailsOpen:""),children:g})]})]})})}))),B=Object(s.b)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:f.h});t.a=Object(m.a)((function(e){return Object(u.a)(Object(r.a)(Object(r.a)({},O.h),{},{root:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},O.z))}))(B((function(e){var t=e.onClose,a=e.modalOpen,n=e.title,s=e.children,u=e.classes,m=e.wideLimit,O=void 0===m||m,f=e.modalSnackMessage,p=e.noContentPadding,h=e.setModalSnackMessage,g=e.titleIcon,x=void 0===g?null:g,v=Object(c.useState)(!1),C=Object(o.a)(v,2),S=C[0],k=C[1];Object(c.useEffect)((function(){h("")}),[h]),Object(c.useEffect)((function(){if(f){if(""===f.message)return void k(!1);"error"!==f.type&&k(!0)}}),[f]);var E=O?{classes:{paper:u.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},B="";return f&&(B=f.detailedErrorMsg,(""===f.detailedErrorMsg||f.detailedErrorMsg.length<5)&&(B=f.message)),Object(M.jsxs)(d.a,Object(r.a)(Object(r.a)({open:a,classes:u},E),{},{scroll:"paper",onClose:function(e,a){"backdropClick"!==a&&t()},className:u.root,children:[Object(M.jsxs)(j.a,{className:u.title,children:[Object(M.jsxs)("div",{className:u.titleText,children:[x," ",n]}),Object(M.jsx)("div",{className:u.closeContainer,children:Object(M.jsx)(i.a,{"aria-label":"close",className:u.closeButton,onClick:t,disableRipple:!0,size:"small",children:Object(M.jsx)(y.a,{})})})]}),Object(M.jsx)(N,{}),Object(M.jsx)(l.a,{open:S,className:u.snackBarModal,onClose:function(){k(!1),h("")},message:B,ContentProps:{className:"".concat(u.snackBar," ").concat(f&&"error"===f.type?u.errorSnackBar:"")},autoHideDuration:f&&"error"===f.type?1e4:5e3}),Object(M.jsx)(b.a,{className:p?"":u.content,children:s})]}))})))},499:function(e,t,a){"use strict";var n=a(1),o=a(2),r=a.n(o),c=a(439),s=a(549),i=a(820),l=a(378),d=a(314),j=a(318),b=a(121),u=a(120),m=(a(550),a(551),a(0));a(552);t.a=Object(j.a)((function(e){return Object(d.a)(Object(n.a)({},u.i))}))((function(e){var t=e.value,a=e.label,n=void 0===a?"":a,o=e.tooltip,d=void 0===o?"":o,j=e.mode,u=void 0===j?"yaml":j,O=e.classes,f=e.onChange,p=void 0===f?function(){}:f,h=e.onBeforeChange,g=e.readOnly,x=void 0!==g&&g;return Object(m.jsxs)(r.a.Fragment,{children:[Object(m.jsxs)(i.a,{className:O.inputLabel,children:[Object(m.jsx)("span",{children:n}),""!==d&&Object(m.jsx)("div",{className:O.tooltipContainer,children:Object(m.jsx)(l.a,{title:d,placement:"top-start",children:Object(m.jsx)("div",{className:O.tooltip,children:Object(m.jsx)(b.a,{})})})})]}),Object(m.jsx)(c.a,{item:!0,xs:12,children:Object(m.jsx)("br",{})}),Object(m.jsx)(c.a,{item:!0,xs:12,children:Object(m.jsx)(s.Controlled,{value:t,options:{mode:u,lineNumbers:!0,readOnly:x},onBeforeChange:h,onChange:p})})]})}))},884:function(e,t,a){"use strict";a.r(t);var n=a(16),o=a(1),r=a(2),c=a(41),s=a(439),i=a(370),l=a(381),d=a(314),j=a(318),b=a(53),u=a(30),m=a(120),O=a(396),f=a(499),p=a(39),h=a(0),g={setModalErrorSnackMessage:u.g},x=Object(c.b)(null,g);t.default=Object(j.a)((function(e){return Object(d.a)(Object(o.a)(Object(o.a)({buttonContainer:{textAlign:"right"},errorState:{color:"#b53b4b",fontSize:14,fontWeight:"bold"},codeMirrorContainer:{marginBottom:20,paddingLeft:15,"&:nth-child(2) .MuiGrid-root:nth-child(3)":{border:"1px solid #EAEAEA"},"& label":{marginBottom:".5rem"},"& label + div":{display:"none"}}},m.q),m.i))}))(x((function(e){var t=e.classes,a=e.open,o=e.closeModalAndRefresh,c=e.tenant,d=e.namespace,j=e.setModalErrorSnackMessage,u=Object(r.useState)(!1),m=Object(n.a)(u,2),g=m[0],x=m[1],v=Object(r.useState)(!1),C=Object(n.a)(v,2),S=C[0],y=C[1],M=Object(r.useState)(""),k=Object(n.a)(M,2),E=k[0],N=k[1],B=Object(r.useState)(""),w=Object(n.a)(B,2),D=w[0],L=w[1];Object(r.useEffect)((function(){b.a.invoke("GET","/api/v1/namespaces/".concat(d,"/tenants/").concat(c,"/yaml")).then((function(e){y(!1),N(e.yaml)})).catch((function(e){y(!1),j(e)}))}),[c,d,j]),Object(r.useEffect)((function(){}),[]);var z=""!==E.trim();return Object(h.jsxs)(O.a,{modalOpen:a,onClose:function(){o(!1)},title:"YAML",titleIcon:Object(h.jsx)(p.O,{}),children:[g||S&&Object(h.jsx)(s.a,{item:!0,xs:12,children:Object(h.jsx)(i.a,{})}),""!==D&&Object(h.jsx)("div",{className:t.errorState,children:D}),!S&&Object(h.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),g||(x(!0),L(""),b.a.invoke("PUT","/api/v1/namespaces/".concat(d,"/tenants/").concat(c,"/yaml"),{yaml:E}).then((function(e){x(!1),o(!0),L("")})).catch((function(e){x(!1),L(e.errorMessage)})))},children:Object(h.jsxs)(s.a,{container:!0,children:[Object(h.jsx)(s.a,{item:!0,xs:12,className:t.codeMirrorContainer,children:Object(h.jsx)(f.a,{label:"Tenant Specification",value:E,mode:"yaml",onBeforeChange:function(e,t,a){N(a)}})}),Object(h.jsxs)(s.a,{item:!0,xs:12,className:t.modalButtonBar,children:[Object(h.jsx)(l.a,{type:"button",variant:"outlined",color:"primary",disabled:g,onClick:function(){o(!1)},children:"Cancel"}),Object(h.jsx)(l.a,{type:"submit",variant:"contained",color:"primary",disabled:g||!z,children:"Save"})]})]})})]})})))}}]);
//# sourceMappingURL=130.aec70b81.chunk.js.map