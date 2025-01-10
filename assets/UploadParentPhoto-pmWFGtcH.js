import{j as t,I as R,b3 as W,T as B,G as m,r as o,o as C,B as b,n as Y,fB as z,bo as O,u as H,c as p,fC as y,t as E,fD as J,fE as $,l as _,bV as q,fF as K,fG as Q}from"./index-CpZD2H93.js";import{N as T}from"./Note-D5w6lthy.js";import{T as X,L as Z}from"./CardStyle-CBuNm0_N.js";import{d as ee}from"./CloudUpload-C2WsbpCZ.js";import{E as te}from"./ErrorMessages-Cl09dz4o.js";import{P as se}from"./PageHeader-C9ChZO91.js";import{B as D}from"./ButtonStyle-DAEB_dBE.js";import"./Card-B0aZ7mGs.js";const ae=({item:e,clickItem:c})=>{const i=()=>{e={...e,IsActive:e.IsActive?e.IsActive:!e.IsActive},c(e)};return t.jsx("div",{children:t.jsxs(X,{color:e.IsActive?"info":null,onClick:i,children:[t.jsx(R,{children:t.jsx(W,{src:e.ImgUrl})}),t.jsx(B,{children:e.Name})]})})};function oe({itemList:e,clickItem:c}){const i=l=>{e=e.map(n=>n.Id===l.Id?l:{...n,IsActive:!1}),c(e)};return t.jsx("div",{children:t.jsx(m,{container:!0,spacing:2,mb:1,children:e.map((l,n)=>t.jsx(m,{item:!0,xs:4,sx:{textAlign:"center"},children:t.jsx(ae,{item:l,clickItem:i})},n))})})}function ie({item:e,onFileSelect:c,onTextChange:i}){const h=["jpg","jpeg","png","bmp"],[I,u]=o.useState(""),f=o.useRef(null);o.useEffect(()=>{u(""),f.current.value=""},[e.Id]);const P=s=>{f.current.click()},S=async s=>{let x=z(s.target.files[0],h,8e4);if(u(x),x===null){if(s.target.files&&s.target.files.length>0){let g=await O(s.target.files[0]),U=g.slice(g.indexOf(",")+1),r=new Image;r.src=window.URL.createObjectURL(s.target.files[0]),r.onload=()=>{r.width>112&&r.height>151?u(`Image is ${r.height} x ${r.width}, Height and Width of photo file should not exceed 151px and 112px respectively`):(e={...e,Value:U,fileName:s.target.files[0].name,selectedFile:s.target.files[0].name},c(e))}}}else f.current.value=null};return t.jsxs("div",{children:[e.Id==3?t.jsx(C,{value:e.Text,fullWidth:!0,variant:"standard",onChange:s=>{i({...e,Text:s.target.value})}}):t.jsx(C,{value:e.Text,fullWidth:!0,variant:"standard"}),t.jsx(b,{sx:{textAlign:"center",mt:"10px"},children:t.jsx("img",{id:"imgParent",width:"112",height:"151",style:{border:"1px solid gray"},src:e.Value===""||e.Value===null?"/imges/defualtUser.jpg":"data:image/png;base64,"+e.Value})}),t.jsx(Y,{alignItems:"center",children:t.jsxs(b,{sx:{display:"flex",mt:"5px"},children:[t.jsx(ee,{onClick:P,sx:{mt:"-2px"},color:e.choosefileDisable?"disabled":"primary"}),t.jsxs(B,{sx:{mt:"2px",fontWeight:"bold",ml:"2px",fontSize:"12px"},children:["Upload files :"," "]}),t.jsx(b,{sx:{width:"100px",overflow:"hidden",textOverflow:"ellipsis",mt:"2px"},children:e.selectedFile===""||e.selectedFile===void 0?" No file selected":e.selectedFile})]})}),t.jsx("input",{ref:f,type:"file",onChange:S,disabled:e.choosefileDisable,style:{display:"none"}}),I&&t.jsx(te,{Error:I})]})}const le=["1) Max Height: 151px and Max Width: 112px.","2) Image size should not exceed 80 kb. Supported file formats are JPG, JPEG "],ne=["Photo update is restricted once uploaded. Please contact school admin for any changes."];function pe(){const e=H(),c=p(a=>a.UploadParentPhoto.GetParentphoto),i=p(a=>a.UploadParentPhoto.GetParentphotos),l=p(a=>a.UploadParentPhoto.SaveParentPhotos),n=p(a=>a.UploadParentPhoto.SubmitParentPhotoDetails),A=p(a=>a.UploadParentPhoto.Loading),[h,I]=o.useState(!1),[u,f]=o.useState(!1),[P,S]=o.useState(!0),[s,x]=o.useState([]),[g,U]=o.useState(!0);let r=s.filter(a=>a.IsActive)[0];const v=localStorage.getItem("localSchoolId"),j=sessionStorage.getItem("AcademicYearId"),w=sessionStorage.getItem("Id"),F={aiSchoolId:v,aiAcademicYearId:j,aiUserId:sessionStorage.getItem("Id")},G={aiUserId:Number(w),aiSchoolId:v,aiAcademicYearId:j,abSubmitForSibling:!1};o.useEffect(()=>{e(y(F))},[]),o.useEffect(()=>{i.IsPhotosSubmitted!==void 0&&(I(i.IsPhotosSubmitted),f(i.IsAllPhotoSaved))},[i]),o.useEffect(()=>{x(c)},[c]);const M=a=>{x(a)};o.useEffect(()=>{l.Message!==void 0&&(E.success(l.Message,{toastId:"success1"}),e(J()),e(y(F,N())),S(!0))},[l]);const N=()=>{let a="1";return s.map(d=>{d.IsActive&&(a=d.Id)}),a};o.useEffect(()=>{n.Message!==void 0&&(E.success(n.Message,{toastId:"success2"}),e($()),e(y(F,N())))},[n]);const k=a=>{x(s.map(d=>d.Id===a.Id?a:d)),h||S(!1)},V=()=>{let a=!1;i.IsSiblingPresent===!0&&confirm("Do you want to save same details for sibling login")&&(a=!0);const d={aiSchoolId:v,aiAcademicYearId:j,aiUserId:w,aiIsSubmit:"0",asFatherPhotoFileName:s[0].fileName,asMotherPhotoFileName:s[1].fileName,asRelativePhotoFileName:s[2].fileName,asFatherImgPhoto:s[0].Value,asMotherImgPhoto:s[1].Value,asLocalGuardianPhoto:s[2].Value,asRelativeName:s[2].Text,abSaveForSibling:a};e(K(d))},L=()=>{confirm("Make sure the uploaded photos are final before submission. Contact the School admin for any changes in submitted photos.")&&e(Q(G))};return t.jsxs(b,{sx:{px:2},children:[t.jsx(se,{heading:"Upload Parent Photo",subheading:""}),A&&t.jsx(_,{}),h?t.jsx(T,{NoteDetail:ne}):t.jsx(T,{NoteDetail:le}),t.jsx(q,{in:g,style:{transformOrigin:"0 0 1"},...g?{timeout:1500}:{},children:t.jsxs(Z,{children:[s.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(oe,{itemList:s,clickItem:M}),r!==void 0&&t.jsx(ie,{item:r,onFileSelect:k,onTextChange:k})]}),t.jsxs(m,{container:!0,spacing:2,sx:{mt:"10px"},children:[t.jsx(m,{item:!0,xs:6,children:t.jsx(D,{type:"submit",fullWidth:!0,color:P?"warning":"primary",disabled:P,onClick:V,children:"Save"})}),t.jsx(m,{item:!0,xs:6,children:t.jsx(D,{fullWidth:!0,onClick:L,color:h||!u?"warning":"primary",disabled:h||!u,children:"Submit"})})]})]})})]})}export{pe as default};
