"use strict";(self.webpackChunkreact_1=self.webpackChunkreact_1||[]).push([[432],{235:(s,e,a)=>{a.d(e,{H:()=>o});var i=a(43),d=a(3),l=a(216),g=a(579);let n=s=>({isAuth:s.auth.isAuth});const o=s=>{class e extends i.Component{render(){return this.props.isAuth?(0,g.jsx)(s,{...this.props}):(0,g.jsx)(l.C5,{to:"/login"})}}return(0,d.Ng)(n)(e)}},432:(s,e,a)=>{a.r(e),a.d(e,{default:()=>j});var i=a(3),d=a(923),l=a(235),g=a(725),n=a(892),o=(a(43),a(216)),t=a(475);const r={dialogs:"Dialogs_dialogs__kF2XK",dialog:"Dialogs_dialog__Vhado",dialogItem:"Dialogs_dialogItem__92QgA",messages:"Dialogs_messages__j-Hff",message:"Dialogs_message__qJGO0",send:"Dialogs_send__t23Oq"};var c=a(579);const m=s=>(0,c.jsx)("div",{className:r.dialog+" "+r.active,children:(0,c.jsx)(t.k2,{to:"/dialogs/"+s.id,children:s.name})}),h=s=>(0,c.jsx)("div",{className:r.dialog,children:s.message}),x=s=>(0,c.jsx)(n.l1,{initialValues:{newMessageBody:""},onSubmit:(e,a)=>{let{resetForm:i}=a;(e=>{s.sendMessage(e)})(e.newMessageBody),i({values:""})},children:()=>(0,c.jsxs)(n.lV,{children:[(0,c.jsx)("div",{children:(0,c.jsx)(n.D0,{as:"textarea",name:"newMessageBody",placeholder:"message"})}),(0,c.jsx)("button",{type:"submit",children:"Send"})]})}),_=s=>{let e=s.dialogPage,a=e.dialogs.map((s=>(0,c.jsx)(m,{name:s.name,id:s.id},s.id))),i=e.messages.map((s=>(0,c.jsx)(h,{message:s.message},s.id)));e.newMessageBody;return s.isAuth?(0,c.jsxs)("div",{className:r.dialogs,children:[(0,c.jsx)("div",{className:r.dialogsItems,children:a}),(0,c.jsx)("div",{className:r.messages,children:(0,c.jsx)("div",{children:i})}),(0,c.jsx)(x,{sendMessage:s.sendMessage})]}):(0,c.jsx)(o.C5,{to:"/login"})};const j=(0,d.Zz)((0,i.Ng)((s=>({dialogPage:s.dialogPage})),(s=>({sendMessage:e=>{s((0,g.c6)(e))}}))),l.H)(_)}}]);
//# sourceMappingURL=432.10927932.chunk.js.map