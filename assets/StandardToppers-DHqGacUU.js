import{j3 as Y,q,v,r as a,c as o,j8 as F,j9 as K,ja as U,jb as _,j as e,B as c,G as s,T as j}from"./index-CpZD2H93.js";import{R as z}from"./RadioButton1-Bomg8HHo.js";import{D as T}from"./Dropdown-AVnwFZWJ.js";import{P as f}from"./PageHeader-C9ChZO91.js";import{D as J}from"./DynamicList2-CNt-YSsD.js";import{T as O}from"./ToppersList-Bhciuebt.js";import"./ButtonStyle-DAEB_dBE.js";import"./RadioGroup-DpIwLy2j.js";import"./Radio-IVxzoZco.js";import"./FormGroup-C5-m8U5s.js";import"./silver-medal-Co1Ddjhs.js";const ne=()=>{const I=[{Value:"1",Name:"Class Toppers"},{Value:"2",Name:"Standard Toppers"}],w=["Rank","Class","Roll No.","Student Name","Marks"],E=["Roll No.","Student Name"],i=Y();let{TeacherId:n}=q();n=v(n);const[r,h]=a.useState(n),[d,b]=a.useState("0"),[m,g]=a.useState("0"),[L,D]=a.useState(),p=Number(localStorage.getItem("localSchoolId")),S=Number(sessionStorage.getItem("AcademicYearId")),x=o(t=>t.StandardToppers.StandardDropdownST),l=o(t=>t.StandardToppers.ExamDropdownListST),u=o(t=>t.StandardToppers.SubjectDropdownListST),N=o(t=>t.StandardToppers.StandardSubjectToppersST),R=o(t=>t.StandardToppers.StandardSubjectToppersST);a.useEffect(()=>{i(F(k))},[n]),a.useEffect(()=>{i(K(y))},[r]),a.useEffect(()=>{i(U(C))},[r,d]),a.useEffect(()=>{i(_(B))},[r,d,m]),a.useEffect(()=>{x.length>0&&h(x[0].Id)},[x]),a.useEffect(()=>{l.length>0&&b(l[0].Id)},[l]),a.useEffect(()=>{u.length>0&&g(u[0].Id)},[u]);const k={asSchoolId:p,asAcademicYearId:S,asTeacherId:Number(n)},y={asSchoolId:p,asAcademicYearId:S,asStandardId:Number(r)},C={asSchoolId:p,asAcademicYearId:S,asStandardId:Number(r),asExamId:Number(d)},B={asSchoolId:p,asAcademicYearId:S,asStandardId:Number(r),asExamId:Number(d),asSubjectId:Number(m)},A=t=>{h(t)},G=t=>{b(t)},V=t=>{g(t)},H=()=>{},M=t=>{D(t)};return e.jsxs(c,{sx:{px:2},children:[e.jsx(f,{heading:"StandardToppers"}),e.jsx(z,{Array:I,ClickRadio:M,defaultValue:L,Label:""}),e.jsxs(s,{container:!0,spacing:1,alignItems:"center",children:[e.jsx(s,{item:!0,xs:6,children:e.jsx(j,{margin:"1px",children:e.jsx("b",{children:"Select Standard:"})})}),e.jsx(s,{item:!0,xs:6,children:e.jsx(c,{sx:{marginRight:"0px",width:"110%",padding:"0.9px",boxShadow:"4px 4px 10px rgba(0, 0, 0, 0.2)",border:"1px solid black"},children:e.jsx(T,{Array:x,handleChange:A,defaultValue:r,label:r})})}),e.jsx(s,{item:!0,xs:6,children:e.jsx(j,{margin:"1px",children:e.jsx("b",{children:"Select Exam:"})})}),e.jsx(s,{item:!0,xs:6,children:e.jsx(c,{sx:{marginRight:"0px",width:"110%",padding:"0.9px",boxShadow:"4px 4px 10px rgba(0, 0, 0, 0.2)",border:"1px solid black"},children:e.jsx(T,{Array:l,handleChange:G,defaultValue:d,label:d})})}),e.jsx(s,{item:!0,xs:6,children:e.jsx(j,{margin:"1px",children:e.jsx("b",{children:"Subject:"})})}),e.jsx(s,{item:!0,xs:6,children:e.jsx(c,{sx:{marginRight:"0px",width:"110%",padding:"0.9px",boxShadow:"4px 4px 10px rgba(0, 0, 0, 0.2)",border:"1px solid black"},children:e.jsx(T,{Array:u,handleChange:V,defaultValue:m,label:"All"})})}),e.jsx(J,{HeaderList:w,ItemList:N,IconList:[],ClickItem:H}),e.jsx(f,{heading:" Subject Toppers"}),e.jsx(s,{container:!0,children:R.map((t,P)=>e.jsxs(e.Fragment,{children:[!(P%3)&&e.jsx(s,{container:!0,item:!0,xs:12,justifyContent:"center",children:t.Subject}),e.jsxs(s,{item:!0,xs:4,xl:4,justifyContent:"center",children:[e.jsxs(c,{sx:{px:2},children:[e.jsx("img",{src:t.Rank_Image})," MarKs:",t.Marks]}),e.jsx("br",{}),e.jsx(O,{headers:E,data:t.Students})]})]}))})]})]})};export{ne as default};
