(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2867],{61920:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/history",function(){return r(25556)}])},34300:function(e,t,r){"use strict";r.d(t,{RS:function(){return s},SR:function(){return i},ZP:function(){return c},cB:function(){return u}});var n=r(11802),l=r(36100),o=r(49925);let a=(0,l.ad)(n.Z);async function c(e,t){let r=null,n=null,o=(0,l.JU)(a,"catalog",t.catalog_id);try{let n=t.img?t.img:"",c={name:t.name,catalog_id:o,detail:t.detail,flim:t.flim,grade:t.grade,lot:t.lot,status:t.status,img:n,area:t.area,productSizes:t.productSizes,delete:null,create:{createAt:(0,l.Bt)(),createBy:t.user_id},update:null};r=await (0,l.ET)((0,l.hJ)(a,e),c),console.log("เพิ่มข้อมูลสำเร็จ",r)}catch(e){console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล:",n=e)}return{result:r,error:n}}let i=async(e,t)=>{let r=null,n=null,o=(0,l.JU)(a,e,t);try{await (0,l.oe)(o),console.log("ลบข้อมูลสำเร็จ"),r="Success"}catch(e){console.error("เกิดข้อผิดพลาดในการลบข้อมูล:",n=e)}return{result:r,error:n}};async function s(e,t){let r=null,n=null;try{let n=await (0,o.ZP)("users",t.user_id);if(n.result&&n.result.exists){let o=n.result.data().name,c={delete:{deleteAt:(0,l.Bt)(),deleteBy:o}};r=await (0,l.pl)((0,l.JU)(a,e,t.id),c,{merge:!0}),console.log("Soft delete สำเร็จ",r)}else console.log("หาข้อมูล user ใน soft del ไม่เจอ")}catch(e){console.error("เกิดข้อผิดพลาดในการ soft delete:",n=e)}return{result:r,error:n}}async function u(e,t){let r=null,n=null;try{r=await (0,l.pl)((0,l.JU)(a,e,t),{delete:null},{merge:!0}),console.log("restoreData สำเร็จ",r)}catch(e){console.error("เกิดข้อผิดพลาดในการ restoreData:",n=e)}return{result:r,error:n}}},49925:function(e,t,r){"use strict";r.d(t,{EC:function(){return i},Eq:function(){return u},KL:function(){return s},PR:function(){return d},ZP:function(){return a},_N:function(){return c},wv:function(){return h}});var n=r(11802),l=r(36100);let o=(0,l.ad)(n.Z);async function a(e,t){let r=(0,l.JU)(o,e,t);try{let e=await (0,l.QT)(r);return{result:e,error:null}}catch(e){return{result:null,error:e}}}let c=async e=>{let t=await (0,l.PL)((0,l.hJ)(o,e));return{result:t,error:null}},i=async(e,t)=>{let r=(0,l.JU)(o,"catalog",t),n=(0,l.IO)((0,l.hJ)(o,e),(0,l.ar)("catalog_id","==",r)),a=await (0,l.PL)(n);return{result:a,error:null}},s=async e=>{let t=[];for(let r of e){let e=await (0,l.QT)((0,l.JU)(o,"products",r));if(e.exists()){let n=e.data(),l={id:r,...n};t.push(l)}}return t},u=async e=>{let t=[];for(let r of e){let e=await (0,l.QT)((0,l.JU)(o,"colors",r));if(e.exists()){let n=e.data(),l={id:r,...n};t.push(l)}}return t},d=async(e,t)=>{let r=(0,l.IO)((0,l.hJ)(o,e),(0,l.ar)("uid","==",String(t))),n=await (0,l.PL)(r);return n.forEach(e=>{console.log(e.id," => ",e.data())}),{result:n,error:null}},h=async(e,t)=>{let r=(0,l.JU)(o,"catalog",t),n=await (0,l.QT)(r);if(!n.exists())return console.error("Catalog document not found"),{result:null,error:"Catalog document not found"};let a=(0,l.IO)((0,l.hJ)(o,e),(0,l.ar)("catalog_id","==",r));try{let e=await (0,l.PL)(a);return e.forEach(e=>{console.log(e.id," => ",e.data())}),{result:e,error:null}}catch(e){return console.error("Error getting products: ",e),{result:null,error:e}}}},25556:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return J}});var n=r(85893),l=r(98010),o=r(7906),a=r(295),c=r(98102),i=r(89755),s=r(72882),u=r(53184),d=r(53816),h=r(90629),f=r(25675),x=r.n(f),g=r(90948),m=r(68239),p=r(22430),y=r(67294),j=r(49925),Z=r(46901),w=r(58703),_=r(87357),S=r(15861),C=r(83321),b=r(96471),E=r(34300);function J(){let e=(0,g.ZP)(c.Z)(e=>{let{theme:t}=e;return{["&.".concat(i.Z.head)]:{backgroundColor:"#018294",color:t.palette.common.white},["&.".concat(i.Z.body)]:{fontSize:14}}}),t=(0,g.ZP)(d.Z)(e=>{let{theme:t}=e;return{"&:nth-of-type(odd)":{backgroundColor:t.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}}),r=(0,m.Z)({palette:{primary:{main:"#018294"},success:{main:"#A9C470"},error:{main:"#FE616A"}}}),[f,J]=(0,y.useState)([]);(0,y.useEffect)(()=>{P()},[]);let P=async()=>{let{result:e,error:t}=await (0,j._N)("products");if(t)console.error("Error fetching document:",t);else if(e){let t=e.docs.filter(e=>e.data().delete).map(e=>({id:e.id,name:e.data().name,productSizes:e.data().productSizes,img:e.data().img,deleteAt:e.data().delete.deleteAt,deleteBy:e.data().delete.deleteBy}));J(t)}},k=async e=>{let t=await (0,E.cB)("products",e);P(),t?(v((0,n.jsx)(Z.Z,{severity:"success",onClose:T,children:"กู้คืนข้อมูลสำเร็จ"})),U(!0)):(v((0,n.jsx)(Z.Z,{severity:"error",onClose:T,children:"ผิดพลาด! ไม่สามารถกู้คืนข้อมูลได้"})),U(!0))},B=async e=>{let t=await (0,E.SR)("products",e);P(),t?(v((0,n.jsx)(Z.Z,{severity:"success",onClose:T,children:"ลบข้อมูลถาวรสำเร็จ"})),U(!0)):(v((0,n.jsx)(Z.Z,{severity:"error",onClose:T,children:"ผิดพลาด! ไม่สามารถลบข้อมูลถาวรได้"})),U(!0))},[N,v]=(0,y.useState)(null),[A,U]=(0,y.useState)(!1),T=(e,t)=>{"clickaway"!==t&&U(!1)},z=f.map((e,t)=>{var r;let n=e.deleteAt?e.deleteAt.toDate().toLocaleString("th-TH",{dateStyle:"full",timeStyle:"medium"}):"";return r=e.id,{No:t+1,id:r,img:e.img,p_name:e.name,deleteAt:n,deleteBy:e.deleteBy}});return(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(w.Z,{open:A,autoHideDuration:6e3,onClose:T,children:N}),(0,n.jsx)(p.Z,{theme:r,children:(0,n.jsx)(_.Z,{children:(0,n.jsxs)(_.Z,{sx:{height:"100%",width:"100%",mt:5},children:[(0,n.jsx)(S.Z,{sx:{fontSize:"2rem",fontWeight:"600"},children:"ประวัติการลบ"}),(0,n.jsxs)(C.Z,{sx:{color:"#018294",bgcolor:"white",fontWeight:"bold",borderRadius:"50px",boxShadow:"4px 4px 4px 0px rgba(0, 0, 0, 0.25)",mb:2},onClick:()=>{window.history.back()},children:[(0,n.jsx)(b.Z,{}),(0,n.jsx)(S.Z,{children:" ย้อนกลับ"})]}),(0,n.jsx)(s.Z,{component:h.Z,sx:{borderRadius:"25px"},children:(0,n.jsxs)(o.Z,{sx:{minWidth:700},children:[(0,n.jsx)(u.Z,{children:(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(e,{align:"center",children:"No."}),(0,n.jsx)(e,{align:"center",children:"รูปภาพ"}),(0,n.jsx)(e,{children:"ชื่อสินค้า"}),(0,n.jsx)(e,{children:"วันที่ลบ"}),(0,n.jsx)(e,{children:"ผู้ลบ"}),(0,n.jsx)(e,{align:"center"}),(0,n.jsx)(e,{align:"center"})]})}),(0,n.jsx)(a.Z,{children:z.map(r=>(0,n.jsxs)(t,{children:[(0,n.jsx)(e,{component:"th",scope:"row",align:"center",children:r.No}),(0,n.jsx)(e,{align:"center",children:(0,n.jsx)(x(),{src:r.img,alt:"Product Image",priority:!0,height:"75",width:"75"})}),(0,n.jsx)(e,{children:r.p_name}),(0,n.jsx)(e,{children:r.deleteAt}),(0,n.jsx)(e,{children:r.deleteBy}),(0,n.jsx)(e,{align:"center",children:(0,n.jsx)(C.Z,{color:"primary",onClick:()=>k(r.id),children:"กู้คืน"})}),(0,n.jsx)(e,{align:"center",children:(0,n.jsx)(C.Z,{color:"primary",onClick:()=>B(r.id),children:"ลบถาวร"})})]},r.No))})]})})]})})})]})}}},function(e){e.O(0,[2607,9078,7393,6886,505,3717,3914,4792,7199,4127,8010,9774,2888,179],function(){return e(e.s=61920)}),_N_E=e.O()}]);