import{j as e,B as n,G as l,o as j,a6 as w,bl as ee,ag as se,ah as te,ai as T,aj as x,ak as le,u as ae,r as a,c as m,df as oe,aD as re,C as ne,E as f,I as y,F as G,J as h,K as R,L as ie,M as de,N as ce,T as he,O as ue,Q as E,c7 as V,bH as I,a7 as xe,n as me,ap as je,oS as ge}from"./index-CpZD2H93.js";import{S as pe}from"./SelectListHierarchy-B0--0w-H.js";import{Q as Se}from"./QuestionMark-B_7MKkiz.js";import{F as Ce}from"./FormGroup-C5-m8U5s.js";const be=({handleAddVideo:i,setVideoUrl:g,setTitle:p,videoList:r,title:d,videoUrl:u})=>e.jsxs(n,{sx:{pt:2},children:[e.jsxs(l,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(l,{item:!0,xs:12,sm:6,md:4,children:e.jsx(j,{label:"Video URL",variant:"outlined",fullWidth:!0,value:u,onChange:o=>g(o.target.value)})}),e.jsx(l,{item:!0,xs:12,sm:6,md:6,children:e.jsx(j,{label:"Title",variant:"outlined",fullWidth:!0,value:d,onChange:o=>p(o.target.value)})}),e.jsx(l,{item:!0,xs:12,sm:6,md:2,children:e.jsx(w,{onClick:i,sx:{mt:1,color:"#38548A","&:hover":{color:"#38548A",backgroundColor:ee[100]}},children:"Add Videos"})})]}),r.length>0&&e.jsxs(se,{sx:{mt:3,border:1,borderColor:"grey.300"},children:[e.jsx(te,{children:e.jsxs(T,{children:[e.jsx(x,{children:e.jsx("strong",{children:"Video URL"})}),e.jsx(x,{children:e.jsx("strong",{children:"Title"})})]})}),e.jsx(le,{children:r.map((o,S)=>e.jsxs(T,{children:[e.jsx(x,{children:o.url}),e.jsx(x,{children:o.title})]},S))})]})]}),Ae=()=>{const i=ae(),[g,p]=a.useState(!1),[r,d]=a.useState([]),[u,o]=a.useState([]),[S,ve]=a.useState(null),[N,M]=a.useState("YouTube"),[B,F]=a.useState("Arun"),[C,A]=a.useState(""),[b,k]=a.useState(""),[v,W]=a.useState([]),U=m(s=>s.ContactGroup.IGetUserRole),D=m(s=>s.Holidays.AllClassesAndDivisionss),H=m(s=>s.Holidays.AllClassesAndDivisionss1),O=m(s=>s.PhotoGalllary.IInsertVideoGallaryMsg);console.log(O,"InsertVideoGallary🤞🤞");const P={asSchoolId:18};a.useEffect(()=>{i(oe(P))},[]);const X={asSchoolId:18,asAcademicYearId:55,associatedStandard:""};a.useEffect(()=>{i(re(X))},[]);const L=String((()=>{let s=[];return u.map(t=>{t.IsActive&&s.push(t.Id)}),s.toString()})());a.useEffect(()=>{o(D)},[D]);const Y=()=>{let s='<ArrayOfSaveVideoDetails xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">';return v.forEach(t=>{s+="<SaveVideoDetails><VideoId>0</VideoId><Comment>"+t.title+"</Comment><VideoURL>"+t.url+"</VideoURL></SaveVideoDetails>"}),s+="</ArrayOfSaveVideoDetails>",s},Q=async()=>{const s={asSchoolId:18,asVideoId:0,asVideoName:"newRITE",asVideoDetails:Y(),asStartDate:"1900-01-01 00:00:00",asEndDate:"1900-01-01 00:00:00",asUserRoleIds:r.toString(),asStandardDivIds:L,asSubjectId:0,asShowOnExternalWebsite:"1",asInsertedById:1071,asAddMoreSubjects:"0",asOldSubjectId:0,asId:0,asUrlSourceId:1};i(ge(s))};a.useEffect(()=>{},[r,L]);const _=s=>{const t=s.target.checked;p(t),d(t?U.map(c=>c.Value):[])},q=s=>{const t=s.target.value;d(c=>c.includes(t)?c.filter(Z=>Z!==t):[...c,t])},z=s=>{o(s)},J=s=>{M(s)},K=s=>{F(s)},$=()=>{if(!C.trim()||!b.trim()){alert("Both Video URL and Title are required.");return}W([...v,{url:C,title:b}]),A(""),k("")};return e.jsxs(n,{px:2,children:[e.jsx(ne,{navLinks:[{title:"Photo/Video Gallery",path:"/RITeSchool/Teacher/PhotoVideoGalleryBaseScreen"},{title:"Add Video Gallery",path:""}],rightActions:e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Create new photo galleries or add photos to existing gallery. You can also view all gallery photos by clicking on SlideShow.You can also add or view videos into gallery.",children:e.jsx(y,{sx:{color:"white",backgroundColor:G[500],"&:hover":{backgroundColor:G[600]}},children:e.jsx(Se,{})})}),S?e.jsx(e.Fragment,{children:e.jsx(f,{title:"Update",children:e.jsx(y,{sx:{color:"white",backgroundColor:h[500],"&:hover":{backgroundColor:h[600]}},children:e.jsx(R,{})})})}):e.jsx(f,{title:"Save",children:e.jsx(y,{sx:{color:"white",backgroundColor:h[500],"&:hover":{backgroundColor:h[600]}},children:e.jsx(R,{})})})]})}),e.jsx(n,{sx:{backgroundColor:"white",mb:1},children:e.jsxs(ie,{defaultExpanded:!0,children:[e.jsx(de,{expandIcon:e.jsx(ce,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsx(he,{style:{fontWeight:"bold",fontSize:"20px"},children:"Important Notes"})}),e.jsxs(ue,{sx:{gap:.1,display:"flex",flexDirection:"column"},children:[e.jsxs(E,{variant:"filled",severity:"info",sx:{mb:1,mt:"0.1px"},children:["Video should be from ",e.jsx("strong",{children:"www.youtube.com"}),", URL Example: http://www.youtube.com/v/bAUT_Pux73w."]}),e.jsx(E,{variant:"filled",severity:"info",children:"When you edit any gallery, changes made to the gallery name, dates, user roles, and classes will be applied to all subjects of the respective gallery."})]})]})}),e.jsxs(n,{padding:2,sx:{backgroundColor:"white"},children:[e.jsxs(l,{container:!0,spacing:2,children:[e.jsx(l,{item:!0,xs:12,sm:4,children:e.jsx(j,{fullWidth:!0,variant:"outlined",label:e.jsxs("span",{children:["Video Name ",e.jsx("span",{style:{color:"red"},children:" *"})]}),onChange:s=>{K(s.target.value.slice(0,50))},value:B})}),e.jsx(l,{item:!0,xs:12,sm:4,children:e.jsx(j,{fullWidth:!0,variant:"outlined",label:e.jsxs("span",{children:["Url Source ",e.jsx("span",{style:{color:"red"},children:" *"})]}),onChange:s=>{J(s.target.value.slice(0,50))},value:N})}),e.jsx(l,{item:!0,xs:12,sm:4,children:e.jsx(V,{control:e.jsx(I,{}),label:"Show On External Website? "})})]}),e.jsx(n,{children:e.jsx(be,{handleAddVideo:$,setVideoUrl:A,setTitle:k,videoList:v,title:b,videoUrl:C})}),e.jsxs(n,{sx:{backgroundColor:"lightgrey",paddingLeft:1,mt:1},children:[e.jsx(V,{sx:{mr:0},control:e.jsx(I,{checked:g,onChange:_}),label:""}),e.jsx("strong",{children:" Associated User Roles  "})]}),e.jsx(l,{container:!0,spacing:2,alignItems:"center",pl:1,children:e.jsx(l,{item:!0,xs:12,children:e.jsx(Ce,{row:!0,children:e.jsx(xe,{component:"fieldset",children:e.jsx(l,{container:!0,direction:"row",alignItems:"center",spacing:2,children:U.map((s,t)=>e.jsx(l,{item:!0,children:e.jsx(V,{control:e.jsx(I,{value:s.Value,checked:r.includes(s.Value),onChange:q}),label:s.Name})},t))})})})})}),r.includes("3")&&e.jsx(l,{item:!0,xs:12,md:12,mt:1,children:e.jsx(pe,{ItemList:u,ParentList:H,ClickChild:z})}),e.jsx(l,{item:!0,xs:12,md:12,mt:2,children:e.jsxs(me,{direction:"row",gap:2,alignItems:"center",children:[e.jsx(w,{sx:{color:"red",":hover":{backgroundColor:je[100]}},children:"Cancel"}),e.jsx(w,{onClick:Q,sx:{color:"green",":hover":{backgroundColor:h[100]}},children:"Save"})]})})]})]})};export{Ae as default};
