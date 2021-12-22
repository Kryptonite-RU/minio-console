(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[114],{398:function(e,t,a){"use strict";var n,c=a(16),s=a(1),o=a(2),i=a(41),r=a(387),l=a(380),d=a(413),b=a(414),j=a(415),u=a(307),m=a(319),p=a(122),O=a(32),h=a(39),x=a.n(h),f=a(129),v=a.n(f),g=a(128),C=a.n(g),y=a(125),k=a.n(y),S=a(0),N=function(){clearInterval(n)},E={displayErrorMessage:O.h},M=Object(i.b)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),E)(Object(m.a)((function(e){return Object(u.a)({modalErrorContainer:{position:"absolute",marginTop:10,width:"80%",backgroundColor:"#fff",border:"#C72C48 1px solid",borderLeftWidth:12,borderRadius:3,zIndex:1e3,padding:"10px 15px",left:"50%",transform:"translateX(-50%)",opacity:0,transitionDuration:"0.2s"},modalErrorShow:{opacity:1},closeButton:{position:"absolute",right:5,fontSize:"small",border:0,backgroundColor:"#fff",cursor:"pointer"},errorTitle:{display:"flex",alignItems:"center"},errorLabel:{color:"#000",fontSize:18,fontWeight:500,marginLeft:5,marginRight:25},messageIcon:{color:"#C72C48",display:"flex","& svg":{width:32,height:32}},detailsButton:{color:"#9C9C9C",display:"flex",alignItems:"center",border:0,backgroundColor:"transparent",paddingLeft:5,fontSize:14,transformDuration:"0.3s",cursor:"pointer"},extraDetailsContainer:{fontStyle:"italic",color:"#9C9C9C",lineHeight:0,padding:"0 10px",transition:"all .2s ease-in-out",overflow:"hidden"},extraDetailsOpen:{lineHeight:1,padding:"3px 10px"},arrowElement:{marginLeft:-5},arrowOpen:{transform:"rotateZ(90deg)",transformDuration:"0.3s"}})}))((function(e){var t=e.classes,a=e.modalSnackMessage,s=e.displayErrorMessage,i=e.customStyle,r=Object(o.useState)(!1),l=Object(c.a)(r,2),d=l[0],b=l[1],j=Object(o.useState)(!1),u=Object(c.a)(j,2),m=u[0],p=u[1],O=Object(o.useCallback)((function(){p(!1)}),[]);Object(o.useEffect)((function(){m||(s({detailedError:"",errorMessage:""}),b(!1))}),[s,m]),Object(o.useEffect)((function(){""!==a.message&&"error"===a.type&&p(!0)}),[O,a.message,a.type]);var h=x()(a,"message",""),f=x()(a,"detailedErrorMsg","");return"error"!==a.type||""===h?null:Object(S.jsx)(o.Fragment,{children:Object(S.jsxs)("div",{className:"".concat(t.modalErrorContainer," ").concat(m?t.modalErrorShow:""),style:i,onMouseOver:N,onMouseLeave:function(){n=setInterval(O,1e4)},children:[Object(S.jsx)("button",{className:t.closeButton,onClick:O,children:Object(S.jsx)(k.a,{})}),Object(S.jsxs)("div",{className:t.errorTitle,children:[Object(S.jsx)("span",{className:t.messageIcon,children:Object(S.jsx)(C.a,{})}),Object(S.jsx)("span",{className:t.errorLabel,children:h})]}),""!==f&&Object(S.jsxs)(o.Fragment,{children:[Object(S.jsx)("div",{className:t.detailsContainerLink,children:Object(S.jsxs)("button",{className:t.detailsButton,onClick:function(){b(!d)},children:["Details",Object(S.jsx)(v.a,{className:"".concat(t.arrowElement," ").concat(d?t.arrowOpen:"")})]})}),Object(S.jsx)("div",{className:"".concat(t.extraDetailsContainer," ").concat(d?t.extraDetailsOpen:""),children:f})]})]})})}))),w=Object(i.b)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:O.i});t.a=Object(m.a)((function(e){return Object(u.a)(Object(s.a)(Object(s.a)({},p.h),{},{root:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},p.z))}))(w((function(e){var t=e.onClose,a=e.modalOpen,n=e.title,i=e.children,u=e.classes,m=e.wideLimit,p=void 0===m||m,O=e.modalSnackMessage,h=e.noContentPadding,x=e.setModalSnackMessage,f=Object(o.useState)(!1),v=Object(c.a)(f,2),g=v[0],C=v[1];Object(o.useEffect)((function(){x("")}),[x]),Object(o.useEffect)((function(){if(O){if(""===O.message)return void C(!1);"error"!==O.type&&C(!0)}}),[O]);var y=p?{classes:{paper:u.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},N="";return O&&(N=O.detailedErrorMsg,(""===O.detailedErrorMsg||O.detailedErrorMsg.length<5)&&(N=O.message)),Object(S.jsxs)(d.a,Object(s.a)(Object(s.a)({open:a,classes:u},y),{},{scroll:"paper",onClose:function(e,a){"backdropClick"!==a&&t()},className:u.root,children:[Object(S.jsxs)(b.a,{className:u.title,children:[Object(S.jsx)("div",{className:u.titleText,children:n}),Object(S.jsx)("div",{className:u.closeContainer,children:Object(S.jsx)(r.a,{"aria-label":"close",className:u.closeButton,onClick:t,disableRipple:!0,size:"small",children:Object(S.jsx)(k.a,{})})})]}),Object(S.jsx)(M,{}),Object(S.jsx)(l.a,{open:g,className:u.snackBarModal,onClose:function(){C(!1),x("")},message:N,ContentProps:{className:"".concat(u.snackBar," ").concat(O&&"error"===O.type?u.errorSnackBar:"")},autoHideDuration:O&&"error"===O.type?1e4:5e3}),Object(S.jsx)(j.a,{className:h?"":u.content,children:i})]}))})))},399:function(e,t,a){"use strict";var n=a(1),c=a(2),s=a.n(c),o=a(429),i=a(443),r=a(821),l=a(384),d=a(387),b=a(307),j=a(377),u=a(319),m=a(122),p=a(123),O=a(0),h=Object(j.a)((function(e){return Object(b.a)(Object(n.a)({},m.n))}));function x(e){var t=h();return Object(O.jsx)(o.a,Object(n.a)({InputProps:{classes:t}},e))}t.a=Object(u.a)((function(e){return Object(b.a)(Object(n.a)(Object(n.a)(Object(n.a)({},m.i),m.E),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var t=e.label,a=e.onChange,c=e.value,o=e.id,b=e.name,j=e.type,u=void 0===j?"text":j,m=e.autoComplete,h=void 0===m?"off":m,f=e.disabled,v=void 0!==f&&f,g=e.multiline,C=void 0!==g&&g,y=e.tooltip,k=void 0===y?"":y,S=e.index,N=void 0===S?0:S,E=e.error,M=void 0===E?"":E,w=e.required,B=void 0!==w&&w,D=e.placeholder,L=void 0===D?"":D,I=e.min,F=e.max,R=e.overlayIcon,T=void 0===R?null:R,W=e.overlayObject,z=void 0===W?null:W,P=e.extraInputProps,A=void 0===P?{}:P,H=e.overlayAction,K=e.noLabelMinWidth,q=void 0!==K&&K,J=e.pattern,G=void 0===J?"":J,V=e.classes,X=Object(n.a)({"data-index":N},A);return"number"===u&&I&&(X.min=I),"number"===u&&F&&(X.max=F),""!==G&&(X.pattern=G),Object(O.jsx)(s.a.Fragment,{children:Object(O.jsxs)(i.a,{container:!0,className:" ".concat(""!==M?V.errorInField:V.inputBoxContainer),children:[""!==t&&Object(O.jsxs)(r.a,{htmlFor:o,className:q?V.noMinWidthLabel:V.inputLabel,children:[Object(O.jsxs)("span",{children:[t,B?"*":""]}),""!==k&&Object(O.jsx)("div",{className:V.tooltipContainer,children:Object(O.jsx)(l.a,{title:k,placement:"top-start",children:Object(O.jsx)("div",{className:V.tooltip,children:Object(O.jsx)(p.a,{})})})})]}),Object(O.jsxs)("div",{className:V.textBoxContainer,children:[Object(O.jsx)(x,{id:o,name:b,fullWidth:!0,value:c,disabled:v,onChange:a,type:u,multiline:C,autoComplete:h,inputProps:X,error:""!==M,helperText:M,placeholder:L,className:V.inputRebase}),T&&Object(O.jsx)("div",{className:"".concat(V.overlayAction," ").concat(""!==t?"withLabel":""),children:Object(O.jsx)(d.a,{onClick:H?function(){H()}:function(){return null},size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:T})}),z&&Object(O.jsx)("div",{className:"".concat(V.overlayAction," ").concat(""!==t?"withLabel":""),children:z})]})]})})}))},440:function(e,t,a){"use strict";var n=a(1),c=a(2),s=a.n(c),o=a(443),i=a(788),r=a(821),l=a(384),d=a(982),b=a(971),j=a(494),u=a(307),m=a(319),p=a(122),O=a(123),h=a(0),x=Object(m.a)((function(e){return Object(u.a)({root:{height:38,lineHeight:1,"label + &":{marginTop:e.spacing(3)}},input:{height:38,position:"relative",color:"#07193E",fontSize:13,fontWeight:600,padding:"8px 20px 10px 10px",border:"#e5e5e5 1px solid",borderRadius:4,display:"flex",alignItems:"center","&:hover":{borderColor:"#393939"},"&:focus":{backgroundColor:"#fff"}}})}))(i.c);t.a=Object(m.a)((function(e){return Object(u.a)(Object(n.a)(Object(n.a)({},p.i),p.E))}))((function(e){var t=e.classes,a=e.id,n=e.name,c=e.onChange,i=e.options,u=e.label,m=e.tooltip,p=void 0===m?"":m,f=e.value,v=e.disabled,g=void 0!==v&&v;return Object(h.jsx)(s.a.Fragment,{children:Object(h.jsxs)(o.a,{item:!0,xs:12,className:t.fieldContainer,children:[""!==u&&Object(h.jsxs)(r.a,{htmlFor:a,className:t.inputLabel,children:[Object(h.jsx)("span",{children:u}),""!==p&&Object(h.jsx)("div",{className:t.tooltipContainer,children:Object(h.jsx)(l.a,{title:p,placement:"top-start",children:Object(h.jsx)("div",{className:t.tooltip,children:Object(h.jsx)(O.a,{})})})})]}),Object(h.jsx)(d.a,{fullWidth:!0,children:Object(h.jsx)(b.a,{id:a,name:n,value:f,onChange:c,input:Object(h.jsx)(x,{}),disabled:g,children:i.map((function(e){return Object(h.jsx)(j.a,{value:e.value,children:e.label},"select-".concat(n,"-").concat(e.label))}))})})]})})}))},904:function(e,t,a){"use strict";a.r(t);var n=a(16),c=a(1),s=a(2),o=a(41),i=a(443),r=a(385),l=a(374),d=a(307),b=a(319),j=a(32),u=a(122),m=a(52),p=a(398),O=a(399),h=a(440),x=a(0),f=Object(o.b)(null,{setModalErrorSnackMessage:j.h});t.default=Object(b.a)((function(e){return Object(d.a)(Object(c.a)(Object(c.a)({},u.q),u.k))}))(f((function(e){var t=e.classes,a=e.open,c=e.encryptionCfg,o=e.selectedBucket,d=e.closeModalAndRefresh,b=e.setModalErrorSnackMessage,j=Object(s.useState)(!1),u=Object(n.a)(j,2),f=u[0],v=u[1],g=Object(s.useState)(""),C=Object(n.a)(g,2),y=C[0],k=C[1],S=Object(s.useState)("disabled"),N=Object(n.a)(S,2),E=N[0],M=N[1];Object(s.useEffect)((function(){c&&("AES256"===c.algorithm?M("sse-s3"):(M("sse-kms"),k(c.kmsMasterKeyID)))}),[c]);return Object(x.jsx)(p.a,{modalOpen:a,onClose:function(){d()},title:"Enable Bucket Encryption",children:Object(x.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),f||("disabled"===E?m.a.invoke("POST","/api/v1/buckets/".concat(o,"/encryption/disable")).then((function(){v(!1),d()})).catch((function(e){v(!1),b(e)})):m.a.invoke("POST","/api/v1/buckets/".concat(o,"/encryption/enable"),{encType:E,kmsKeyID:y}).then((function(){v(!1),d()})).catch((function(e){v(!1),b(e)})))},children:Object(x.jsxs)(i.a,{container:!0,children:[Object(x.jsxs)(i.a,{item:!0,xs:12,className:t.modalFormScrollable,children:[Object(x.jsx)(i.a,{item:!0,xs:12,className:t.formFieldRow,children:Object(x.jsx)(h.a,{onChange:function(e){M(e.target.value)},id:"select-encryption-type",name:"select-encryption-type",label:"Encryption Type",value:E,options:[{label:"Disabled",value:"disabled"},{label:"SSE-S3",value:"sse-s3"},{label:"SSE-KMS",value:"sse-kms"}]})}),"sse-kms"===E&&Object(x.jsx)(i.a,{item:!0,xs:12,className:t.formFieldRow,children:Object(x.jsx)(O.a,{id:"kms-key-id",name:"kms-key-id",label:"KMS Key ID",value:y,onChange:function(e){k(e.target.value)}})})]}),Object(x.jsxs)(i.a,{item:!0,xs:12,className:t.modalButtonBar,children:[Object(x.jsx)(r.a,{type:"submit",variant:"outlined",color:"primary",onClick:function(){d()},disabled:f,children:"Cancel"}),Object(x.jsx)(r.a,{type:"submit",variant:"contained",color:"primary",disabled:f,children:"Save"})]}),f&&Object(x.jsx)(i.a,{item:!0,xs:12,children:Object(x.jsx)(l.a,{})})]})})})})))}}]);
//# sourceMappingURL=114.9d7115bf.chunk.js.map