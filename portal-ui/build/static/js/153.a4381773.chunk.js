(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[153],{983:function(e,t,a){"use strict";a.r(t);var i,n=a(16),r=a(1),o=a(2),c=a.n(o),s=a(41),l=a(457),d=a(372),m=a(470),g=a(387),x=a(316),j=a(375),h=a(320),u=a(383),p=a(422),b=a(441);!function(e){e.unknown="unknown",e.form="form",e.redirect="redirect",e.serviceAccount="service-account"}(i||(i={}));var f=a(32),O=a(53),v=a(54),w=a(137),y=a(194),S=a(60),N=a(23),I=a(122),A=a(0),C=Object(j.a)((function(e){return Object(x.a)({root:{"& .MuiOutlinedInput-root":{paddingLeft:0,"& svg":{height:16,color:e.palette.primary.main},"& input":{padding:5,paddingLeft:0,"&::placeholder":{fontSize:12},"@media (max-width: 900px)":{padding:10}},"& fieldset":{border:"none",borderBottom:"1px solid #EAEAEA",borderRadius:0},"&.Mui-focused fieldset":{borderBottom:"1px solid #000000",borderRadius:0},"& fieldset:hover":{borderBottom:"2px solid #000000",borderRadius:0}}}})}));function B(e){var t=C();return Object(A.jsx)(p.a,Object(r.a)({classes:{root:t.root},variant:"standard"},e))}var k=Object(s.b)((function(e){return{loggedIn:e.loggedIn}}),{userLoggedIn:f.k,setErrorSnackMessage:f.e});t.default=k(Object(h.a)((function(e){return Object(x.a)(Object(r.a)({form:{width:"100%"},submit:{margin:"30px 0px 16px",height:40,boxShadow:"none",padding:"16px 30px"},loginPage:{height:"100%",display:"flex",flexFlow:"column",alignItems:"stretch",position:"relative",padding:84,"@media (max-width: 900px)":{padding:0}},shadowBox:{boxShadow:"rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.125) 0px 15px 50px 0px",height:"100%"},loginContainer:{flex:1,height:"100%","& .right-items":{padding:50,flex:1,height:"100%",display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",maxWidth:"33%","@media (max-width: 900px)":{maxWidth:"100%",margin:"auto"}},"& .consoleTextBanner":{fontWeight:300,fontSize:"calc(3vw + 3vh + 1.5vmin)",lineHeight:1.15,color:"#ffffff",flex:1,textAlign:"center",height:"100%",display:"flex",justifyContent:"flex-start",margin:"auto",flexFlow:"column",background:"linear-gradient(120deg,#081c42,#073052)","& .logoLine":{display:"flex",alignItems:"center",fontSize:18,marginTop:40},"& .left-items":{margin:"auto",textAlign:"left",paddingRight:240,paddingBottom:200,"@media (max-width: 1400px)":{paddingBottom:120,paddingRight:50},"@media (max-width: 900px)":{paddingBottom:0,paddingRight:0},"@media (max-width: 600px)":{paddingBottom:0,paddingRight:0}},"& .left-logo":{"& .min-icon":{width:108},marginBottom:10},"& .text-line1":{font:" 100 70px 'Lato'","@media (max-width: 600px)":{fontSize:35},"@media (max-width: 800px)":{fontSize:45}},"& .text-line2":{fontSize:100,fontWeight:100,textTransform:"uppercase","@media (max-width: 600px)":{fontSize:35,marginLeft:0},"@media (max-width: 800px)":{fontSize:55,marginLeft:0}},"& .logo-console":{display:"flex",alignItems:"center","@media (max-width: 900px)":{marginTop:20,flexFlow:"column","& svg":{width:"50%"}}}}},"@media (max-width: 900px)":{loginContainer:{display:"flex",flexFlow:"column","& .consoleTextBanner":{margin:0,flex:2,"& .left-items":{alignItems:"center",textAlign:"center"},"& .logoLine":{justifyContent:"center"}}}},loadingLoginStrategy:{textAlign:"center"},headerTitle:{marginRight:"auto",marginBottom:15},submitContainer:{textAlign:"right"},linearPredef:{height:10},loaderAlignment:{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",flexDirection:"column"},retryButton:{alignSelf:"flex-end"}},I.A))}))((function(e){var t=e.classes,a=e.userLoggedIn,r=e.setErrorSnackMessage,s=Object(o.useState)(""),x=Object(n.a)(s,2),j=x[0],h=x[1],p=Object(o.useState)(""),f=Object(n.a)(p,2),I=f[0],C=f[1],k=Object(o.useState)(""),L=Object(n.a)(k,2),F=L[0],z=L[1],P=Object(o.useState)({loginStrategy:i.unknown,redirect:""}),T=Object(n.a)(P,2),R=T[0],W=T[1],E=Object(o.useState)(!1),K=Object(n.a)(E,2),M=K[0],J=K[1],D=Object(o.useState)(!0),V=Object(n.a)(D,2),q=V[0],G=V[1],H={form:"/api/v1/login","service-account":"/api/v1/login/operator"},U={form:{accessKey:j,secretKey:F},"service-account":{jwt:I}},Q=function(e){e.preventDefault(),J(!0),O.a.invoke("POST",H[R.loginStrategy]||"/api/v1/login",U[R.loginStrategy]).then((function(){a(!0),R.loginStrategy===i.form&&localStorage.setItem("userLoggedIn",Object(S.e)(j));var e="/";localStorage.getItem("redirect-path")&&""!==localStorage.getItem("redirect-path")&&(e="".concat(localStorage.getItem("redirect-path")),localStorage.setItem("redirect-path","")),v.a.push(e)})).catch((function(e){J(!1),r(e)}))};Object(o.useEffect)((function(){q&&O.a.invoke("GET","/api/v1/login").then((function(e){W(e),G(!1)})).catch((function(e){r(e),G(!1)}))}),[q,r]);var X=null;switch(R.loginStrategy){case i.form:X=Object(A.jsx)(c.a.Fragment,{children:Object(A.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:Q,children:[Object(A.jsxs)(b.a,{container:!0,spacing:2,children:[Object(A.jsx)(b.a,{item:!0,xs:12,className:t.spacerBottom,children:Object(A.jsx)(B,{fullWidth:!0,id:"accessKey",className:t.inputField,value:j,onChange:function(e){return h(e.target.value)},placeholder:"Username",name:"accessKey",autoComplete:"username",disabled:M,variant:"outlined",InputProps:{startAdornment:Object(A.jsx)(l.a,{position:"start",className:t.iconColor,children:Object(A.jsx)(N.vc,{})})}})}),Object(A.jsx)(b.a,{item:!0,xs:12,children:Object(A.jsx)(B,{fullWidth:!0,className:t.inputField,value:F,onChange:function(e){return z(e.target.value)},name:"secretKey",type:"password",id:"secretKey",autoComplete:"current-password",disabled:M,placeholder:"Password",variant:"outlined",InputProps:{startAdornment:Object(A.jsx)(l.a,{position:"start",className:t.iconColor,children:Object(A.jsx)(N.zb,{})})}})})]}),Object(A.jsx)(b.a,{item:!0,xs:12,className:t.submitContainer,children:Object(A.jsx)(u.a,{type:"submit",variant:"contained",color:"primary",className:t.submit,disabled:""===F||""===j||M,children:"Login"})}),Object(A.jsx)(b.a,{item:!0,xs:12,className:t.linearPredef,children:M&&Object(A.jsx)(d.a,{})})]})});break;case i.redirect:X=Object(A.jsx)(c.a.Fragment,{children:Object(A.jsx)(u.a,{component:"a",href:R.redirect,type:"submit",variant:"contained",color:"primary",className:t.submit,children:"Login with SSO"})});break;case i.serviceAccount:X=Object(A.jsx)(c.a.Fragment,{children:Object(A.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:Q,children:[Object(A.jsx)(b.a,{container:!0,spacing:2,children:Object(A.jsx)(b.a,{item:!0,xs:12,children:Object(A.jsx)(B,{required:!0,className:t.inputField,fullWidth:!0,id:"jwt",value:I,onChange:function(e){return C(e.target.value)},name:"jwt",autoComplete:"off",disabled:M,placeholder:"Enter JWT",variant:"outlined",InputProps:{startAdornment:Object(A.jsx)(l.a,{position:"start",children:Object(A.jsx)(N.zb,{})})}})})}),Object(A.jsx)(b.a,{item:!0,xs:12,className:t.submitContainer,children:Object(A.jsx)(u.a,{type:"submit",variant:"contained",color:"primary",className:t.submit,disabled:""===I||M,children:"Login"})}),Object(A.jsx)(b.a,{item:!0,xs:12,className:t.linearPredef,children:M&&Object(A.jsx)(d.a,{})})]})});break;default:X=Object(A.jsx)("div",{className:t.loaderAlignment,children:q?Object(A.jsx)(m.a,{className:t.loadingLoginStrategy}):Object(A.jsxs)(c.a.Fragment,{children:[Object(A.jsx)("div",{children:Object(A.jsx)("p",{children:"An error has occurred, the backend cannot be reached."})}),Object(A.jsx)("div",{children:Object(A.jsx)(u.a,{onClick:function(){G(!0)},endIcon:Object(A.jsx)(w.default,{}),color:"primary",variant:"outlined",className:t.retryButton,children:"Retry"})})]})})}var Y=R.loginStrategy===i.serviceAccount?"Operator":"Beryl Storage";return Object(A.jsx)(c.a.Fragment,{children:Object(A.jsxs)(g.a,{className:t.loginPage,children:[Object(A.jsx)(y.a,{}),Object(A.jsx)("div",{className:t.shadowBox,children:Object(A.jsxs)(b.a,{container:!0,className:t.loginContainer,children:[Object(A.jsx)(b.a,{item:!0,className:"consoleTextBanner",children:Object(A.jsxs)("div",{className:"left-items",children:[Object(A.jsx)("div",{className:"left-logo",children:Object(A.jsx)(N.Ab,{})}),Object(A.jsx)("div",{className:"text-line1",children:"Welcome to"}),Object(A.jsx)("div",{className:"text-line2",children:Y})]})}),Object(A.jsx)(b.a,{item:!0,className:"right-items",children:X})]})})]})})})))}}]);
//# sourceMappingURL=153.a4381773.chunk.js.map