(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2596],{28286:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/editproduct",function(){return l(17098)}])},53233:function(e,t,l){"use strict";l.d(t,{Z:function(){return s}});var r=l(11802),a=l(36100);let n=(0,a.ad)(r.Z);async function s(e,t,l){let r=null,s=null;if(l.catalog_id){let e=(0,a.JU)(n,"catalog",l.catalog_id);l.catalog_id=e}try{r=await (0,a.pl)((0,a.JU)(n,e,t),l,{merge:!0}),console.log("แก้ไขสำเร็จ",r)}catch(e){console.error("เกิดข้อผิดพลาดในการแก้ไขข้อมูล:",s=e)}return{result:r,error:s}}},49925:function(e,t,l){"use strict";l.d(t,{EC:function(){return u},Eq:function(){return c},KL:function(){return o},PR:function(){return d},ZP:function(){return s},_N:function(){return i},wv:function(){return x}});var r=l(11802),a=l(36100);let n=(0,a.ad)(r.Z);async function s(e,t){let l=(0,a.JU)(n,e,t);try{let e=await (0,a.QT)(l);return{result:e,error:null}}catch(e){return{result:null,error:e}}}let i=async e=>{let t=await (0,a.PL)((0,a.hJ)(n,e));return{result:t,error:null}},u=async(e,t)=>{let l=(0,a.JU)(n,"catalog",t),r=(0,a.IO)((0,a.hJ)(n,e),(0,a.ar)("catalog_id","==",l)),s=await (0,a.PL)(r);return{result:s,error:null}},o=async e=>{let t=[];for(let l of e){let e=await (0,a.QT)((0,a.JU)(n,"products",l));if(e.exists()){let r=e.data(),a={id:l,...r};t.push(a)}}return t},c=async e=>{let t=[];for(let l of e){let e=await (0,a.QT)((0,a.JU)(n,"colors",l));if(e.exists()){let r=e.data(),a={id:l,...r};t.push(a)}}return t},d=async(e,t)=>{let l=(0,a.IO)((0,a.hJ)(n,e),(0,a.ar)("uid","==",String(t))),r=await (0,a.PL)(l);return r.forEach(e=>{console.log(e.id," => ",e.data())}),{result:r,error:null}},x=async(e,t)=>{let l=(0,a.JU)(n,"catalog",t),r=await (0,a.QT)(l);if(!r.exists())return console.error("Catalog document not found"),{result:null,error:"Catalog document not found"};let s=(0,a.IO)((0,a.hJ)(n,e),(0,a.ar)("catalog_id","==",l));try{let e=await (0,a.PL)(s);return e.forEach(e=>{console.log(e.id," => ",e.data())}),{result:e,error:null}}catch(e){return console.error("Error getting products: ",e),{result:null,error:e}}}},17098:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return S}});var r=l(85893),a=l(98010),n=l(49925),s=l(68239),i=l(46901),u=l(22430),o=l(58703),c=l(15861),d=l(83321),x=l(86886),h=l(94054),m=l(10945),g=l(4178),f=l(87357),p=l(50480),Z=l(85071),j=l(25675),v=l.n(j),b=l(96471),w=l(67294),y=l(53233),C=l(11163);function S(){let e=(0,s.Z)({palette:{primary:{main:"#018294"},success:{main:"#A9C470"},error:{main:"#FE616A"}}}),[t,l]=(0,w.useState)(""),[j,S]=(0,w.useState)([{size:"",quantity:"",price:"",cost:""}]),[_,z]=(0,w.useState)(""),[q,E]=(0,w.useState)(!1),[k,J]=(0,w.useState)(""),[P,W]=(0,w.useState)(""),[N,U]=(0,w.useState)(""),[I,R]=(0,w.useState)(""),[L,O]=(0,w.useState)(""),[T,A]=(0,w.useState)(""),[Q,D]=(0,w.useState)(null);(0,w.useEffect)(()=>{console.log(j)},[j]);let F=(e,t,l)=>{let r=[...j];r[t][l]=e.target.value,S(r)},$=e=>{if(j.length>1){let t=[...j];t.splice(e,1),S(t)}else j.length<=1&&(D((0,r.jsx)(i.Z,{severity:"error",onClose:et,children:"ต้องมีรูปแบบสินค้าอย่างน้อย 1 รูปแบบ"})),ee(!0))};(0,w.useEffect)(()=>{K(),M()},[]);let[X,H]=(0,w.useState)(null),K=async()=>{let{result:e,error:t}=await (0,n._N)("catalog");if(t)console.error("Error fetching document:",t);else if(e){let t=e.docs.map(e=>({id:e.id,name:e.data().name}));H(t)}},B=(0,C.useRouter)(),G=JSON.parse(B.query.product_id),M=async()=>{let{result:e,error:t}=await (0,n.ZP)("products",G);if(t)console.error("Error fetching document:",t);else if(e){let t=e.data();J(t.name),z(t.area),U(t.flim),R(t.grade),A(t.detail),S(t.productSizes),l(t.img),O(t.lot),E(t.status),W(t.catalog_id.id)}},V=async e=>{e.preventDefault();let l=await (0,y.Z)("products",G,{name:k,catalog_id:P,detail:T,flim:N,grade:I,lot:L,area:_,status:q,img:t,productSizes:j});l?(D((0,r.jsxs)(i.Z,{severity:"success",onClose:et,children:["แก้ไขข้อมูลสำเร็จ"," "]})),ee(!0)):(D((0,r.jsx)(i.Z,{severity:"error",onClose:et,children:"ผิดพลาด! ไม่สามารถแก้ไขข้อมูลได้"})),ee(!0))},[Y,ee]=(0,w.useState)(!1),et=(e,t)=>{"clickaway"!==t&&ee(!1)};return(0,r.jsx)(a.Z,{children:(0,r.jsxs)(u.Z,{theme:e,children:[(0,r.jsx)(o.Z,{open:Y,autoHideDuration:6e3,onClose:et,children:Q}),(0,r.jsx)(c.Z,{sx:{fontSize:"2rem",fontWeight:"600",mt:4},children:"แก้ไขสินค้า"}),(0,r.jsxs)(d.Z,{sx:{color:"#018294",bgcolor:"white",fontWeight:"bold",borderRadius:"50px",boxShadow:"4px 4px 4px 0px rgba(0, 0, 0, 0.25)"},onClick:()=>{window.history.back()},children:[(0,r.jsx)(b.Z,{}),(0,r.jsx)(c.Z,{children:" ย้อนกลับ"})]}),(0,r.jsx)(x.ZP,{container:!0,spacing:0,sx:{mt:3,mb:5,backgroundColor:"#fff",p:2,borderRadius:"10px",boxShadow:"4px 4px 4px 0px rgba(0, 0, 0, 0.25)"},children:(0,r.jsx)(x.ZP,{item:!0,xs:12,sm:7,children:(0,r.jsxs)("form",{onSubmit:V,className:"form",children:[(0,r.jsxs)(h.Z,{fullWidth:!0,children:[(0,r.jsx)(c.Z,{children:"แคตตาล็อก:"}),(0,r.jsxs)(m.Z,{value:P,onChange:e=>W(e.target.value),size:"small",select:!0,label:"เลือกแคตตาล็อก",required:!0,children:[(0,r.jsx)(g.Z,{value:"",children:"กรุณาเลือกแคตตาล็อก"}),X&&X.map(e=>(0,r.jsx)(g.Z,{value:e.id,children:e.name},e.id))]}),(0,r.jsx)(c.Z,{sx:{mt:1},children:"ข้อมูลสินค้า:"}),(0,r.jsx)(m.Z,{variant:"outlined",value:k,label:"ชื่อสินค้า",fullWidth:!0,required:!0,size:"small",sx:{mt:1,mb:1},onChange:e=>J(e.target.value)}),(0,r.jsxs)(m.Z,{value:String(_),onChange:e=>z(e.target.value),size:"small",select:!0,label:"พื้นที่ใช้งาน",sx:{mt:1,mb:1},required:!0,children:[(0,r.jsx)(g.Z,{value:"สีทาภายนอก",children:"สีทาภายนอก"}),(0,r.jsx)(g.Z,{value:"สีทาภายใน",children:"สีทาภายใน"}),(0,r.jsx)(g.Z,{value:"สีน้ำมัน",children:"สีน้ำมัน"}),(0,r.jsx)(g.Z,{value:"สีย้อมไม้",children:"สีย้อมไม้"})]}),(0,r.jsxs)(m.Z,{value:N,onChange:e=>U(e.target.value),size:"small",select:!0,label:"ฟิล์ม",sx:{mt:1,mb:1},required:!0,children:[(0,r.jsx)(g.Z,{value:"ฟิล์มสีชนิดเงา",children:"ฟิล์มสีชนิดเงา"}),(0,r.jsx)(g.Z,{value:"ฟิล์มสีชนิดกึ่งเงา",children:"ฟิล์มสีชนิดกึ่งเงา"}),(0,r.jsxs)(g.Z,{value:"ฟิล์มสีชนิดเนียน",children:["ฟิล์มสีชนิดเนียน"," "]}),(0,r.jsx)(g.Z,{value:"ฟิล์มสีชนิดด้าน",children:"ฟิล์มสีชนิดด้าน"})]}),(0,r.jsxs)(m.Z,{value:I,onChange:e=>R(e.target.value),size:"small",select:!0,label:"เกรด",sx:{mt:1,mb:1},required:!0,children:[(0,r.jsx)(g.Z,{value:"เกรดอัลตร้าพรีเมี่ยม อายุการใช้งาน 15 ปี",children:"เกรดอัลตร้าพรีเมี่ยม อายุการใช้งาน 15 ปี"}),(0,r.jsx)(g.Z,{value:"เกรดพรีเมี่ยม อายุการใช้งาน 10 ปี",children:"เกรดพรีเมี่ยม อายุการใช้งาน 10 ปี"}),(0,r.jsx)(g.Z,{value:"เกรดมาตรฐานบน 5-7 ปี",children:"เกรดมาตรฐานบน 5-7 ปี"}),(0,r.jsx)(g.Z,{value:"เกรดมาตรฐาน 3-5 ปี",children:"เกรดมาตรฐาน 3-5 ปี"}),(0,r.jsx)(g.Z,{value:"เกรดประหยัด 1-3 ปี",children:"เกรดประหยัด 1-3 ปี"})]}),(0,r.jsx)(m.Z,{value:T,onChange:e=>A(e.target.value),variant:"outlined",label:"รายละเอียดสินค้า",fullWidth:!0,required:!0,rows:4,multiline:!0,size:"small",sx:{mt:1,mb:1}}),(0,r.jsx)(c.Z,{children:" รูปแบบสินค้า: "}),(0,r.jsx)(d.Z,{variant:"contained",fullWidth:!0,sx:{mr:2,mb:2,mt:2,width:"200px"},onClick:()=>{S([...j,{size:"",quantity:"",price:"",cost:""}])},children:"เพิ่มรูปแบบสินค้า"}),j.map((e,t)=>(0,r.jsxs)(f.Z,{sx:{borderRadius:"10px",mb:3,p:2,boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"},children:[(0,r.jsxs)(c.Z,{children:[" รูปแบบที่:",t+1," "]}),(0,r.jsxs)(m.Z,{value:e.size,onChange:e=>F(e,t,"size"),size:"small",select:!0,fullWidth:!0,label:"ขนาด",sx:{mt:1,mb:1},required:!0,children:[(0,r.jsx)(g.Z,{value:"",children:"กรุณาเลือกขนาดบรรจุ"}),(0,r.jsx)(g.Z,{value:"1/4 แกลลอน",children:"1/4 แกลลอน"}),(0,r.jsx)(g.Z,{value:"1 แกลลอน",children:"1 แกลลอน"}),(0,r.jsx)(g.Z,{value:"2.5 แกลลอน",children:"2.5 แกลลอน"}),(0,r.jsx)(g.Z,{value:"5 แกลลอน",children:"5 แกลลอน"})]}),(0,r.jsx)(m.Z,{value:e.quantity,variant:"outlined",onChange:e=>{let l=e.target.value;(/^\d*$/.test(l)||""===l)&&(""===l||parseInt(l)>=0&&"0"!==l[0])&&F(e,t,"quantity")},label:"จำนวน",fullWidth:!0,required:!0,size:"small",sx:{mt:1,mb:1}}),(0,r.jsx)(m.Z,{value:e.price,variant:"outlined",onChange:e=>{let l=e.target.value;(/^\d*$/.test(l)||""===l)&&(""===l||parseInt(l)>=0&&"0"!==l[0])&&F(e,t,"price")},label:"ราคา",fullWidth:!0,required:!0,size:"small",sx:{mt:1,mb:1}}),(0,r.jsx)(m.Z,{value:e.cost,variant:"outlined",onChange:e=>{let l=e.target.value;(/^\d*$/.test(l)||""===l)&&(""===l||parseInt(l)>=0&&"0"!==l[0])&&F(e,t,"cost")},label:"ต้นทุน",fullWidth:!0,required:!0,size:"small",sx:{mt:1,mb:1}}),(0,r.jsx)(d.Z,{variant:"contained",color:"error",fullWidth:!0,onClick:()=>$(t),children:"ลบ"})]},t)),(0,r.jsxs)(f.Z,{sx:{textAlign:"left"},children:[(0,r.jsx)(c.Z,{sx:{mb:1},children:"รูปภาพสินค้า:"}),(0,r.jsx)(f.Z,{children:t&&(0,r.jsx)(v(),{src:t,alt:"Uploaded Image",priority:!0,height:"150",width:"150",style:{border:"1px solid rgba(0, 0, 0, 0.50)"}})}),(0,r.jsxs)("label",{htmlFor:"upload-image",children:[(0,r.jsx)(d.Z,{variant:"contained",component:"span",children:"เพิ่มรูปภาพสินค้า"}),(0,r.jsx)("input",{id:"upload-image",hidden:!0,accept:"image/*",type:"file",onChange:e=>{let t=e.target.files[0];if(!t){console.error("No file selected."),l("");return}let r=new FileReader;r.onloadend=()=>{l(r.result)},r.readAsDataURL(t)}})]})]}),(0,r.jsx)(c.Z,{sx:{mt:1},children:"ล๊อตสินค้า:"}),(0,r.jsx)(m.Z,{value:L,onChange:e=>O(e.target.value),variant:"outlined",disabled:!0,fullWidth:!0,required:!0,size:"small",sx:{mt:1,mb:1},type:"date"}),(0,r.jsx)(f.Z,{children:(0,r.jsx)(p.Z,{sx:{m:0},control:(0,r.jsx)(Z.Z,{checked:q,onChange:e=>{E(e.target.checked)}}),label:"เปิดให้สั่งซื้อ:",labelPlacement:"start"})})]}),(0,r.jsx)(d.Z,{variant:"contained",color:"success",sx:{mr:2,mb:2,mt:2},type:"submit",children:"แก้ไขสินค้า"})]})})})]})})}}},function(e){e.O(0,[2607,9078,7393,6298,6886,505,3717,3914,945,4792,1784,8010,9774,2888,179],function(){return e(e.s=28286)}),_N_E=e.O()}]);