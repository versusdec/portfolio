(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[272],{1763:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/business",function(){return t(2824)}])},2824:function(e,n,t){"use strict";t.r(n),t.d(n,{data:function(){return u}});var a=t(2322),d=t(2784),i=t(1075),o=t(2197),r=t(7550),s=t(2048),c=t(2878),l=t(9097),u=[{id:1,date:(new Date).setDate((new Date).getDate()-1),name:"Some item",total:12,status:"Pending",type:"created"},{id:2,date:new Date,name:"Some item 2",total:35,status:"Pending",type:"created"},{id:3,date:new Date,name:"Some item 3",total:15,status:"Pending",type:"created"},{id:4,date:new Date,name:"Some item 4",total:10,status:"Pending",type:"created"},{id:5,date:(new Date).setDate((new Date).getDate()+1),name:"Some item 5",total:23,status:"Pending",type:"created"}];n.default=function(){var e=(0,d.useState)(0),n=e[0],t=e[1],p=(0,d.useState)(""),h=p[0],f=p[1],m=(0,c.Wh)(),x=m.createModalOpen,j=m.handleCreateModal,C=(0,c.$M)(),w=C.uploadModalOpen,v=C.handleUploadModal,D=(0,c.S)(),_=D.exportModalOpen,P=D.handleExportModal;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.ZP,{container:!0,mb:3,justifyContent:"space-between",children:[(0,a.jsx)(i.ZP,{item:!0,children:(0,a.jsx)(o.Z,{variant:"h5",children:"My Invoices"})}),(0,a.jsx)(i.ZP,{item:!0,children:(0,a.jsx)(r.Z,{children:(0,a.jsxs)(i.ZP,{container:!0,gap:2,children:[(0,a.jsx)(l.default,{href:"/calendar/",passHref:!0,children:(0,a.jsx)(s.Z,{variant:"contained",children:"Calendar"})}),(0,a.jsx)(s.Z,{variant:"contained",onClick:function(){P()},children:"export"}),(0,a.jsx)(s.Z,{variant:"contained",onClick:function(){t(0),f(c.JF.Uploaded),v()},children:"upload"}),(0,a.jsx)(s.Z,{variant:"contained",onClick:function(){t(0),f(c.JF.Created),j()},children:"create"})]})})})]}),(0,a.jsx)(c.RW,{invoices:u,openInvoiceHandler:function(e,n){switch(t(e),n){case c.JF.Created:f(c.JF.Created),j();break;case c.JF.Uploaded:f(c.JF.Uploaded),v()}}}),h===c.JF.Created&&(0,a.jsx)(c.Wg,{open:x,onClose:j,id:n}),h===c.JF.Uploaded&&(0,a.jsx)(c.Cf,{open:w,onClose:v,id:n}),(0,a.jsx)(c.D7,{open:_,onClose:P})]})}}},function(e){e.O(0,[774,888,179],(function(){return n=1763,e(e.s=n);var n}));var n=e.O();_N_E=n}]);