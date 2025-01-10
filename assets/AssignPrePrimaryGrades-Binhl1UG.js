import{j as e,af as ce,B as y,ag as le,ah as de,ai as M,aj as j,ak as ue,I as h,E as b,b4 as Y,u as me,A as xe,q as he,r,v as _,z as be,i7 as fe,i8 as ge,i9 as Se,c as x,t as U,ia as Te,ib as z,gg as je,C as ye,n as L,G as H,bI as R,H as pe,T as Ie,ic as w}from"./index-CpZD2H93.js";import{a as V,d as X}from"./EditOff-Buqz_WuN.js";import{d as $}from"./EventAvailable-DJctK7ps.js";import{d as O}from"./EventBusy-Cp_-meIu.js";import{L as Ce}from"./Legend-BBFIM_kK.js";function ke({ItemList:i,clickEdit:u,HeaderArray:a,clicksubmit:n,clickUnSubmit:f}){const o={padding:"0.2em 1.5em"};return e.jsx("div",{children:e.jsx(ce,{component:y,children:e.jsxs(le,{"aria-label":"simple table",sx:{border:s=>`1px solid ${s.palette.divider}`},children:[e.jsx(de,{children:e.jsx(M,{sx:{background:s=>s.palette.secondary.main},children:a.map((s,p)=>e.jsx(j,{sx:{textTransform:"capitalize",color:c=>c.palette.common.white},align:"center",children:e.jsx("b",{children:s.Header})},p))})}),e.jsx(ue,{children:i.map(s=>e.jsxs(M,{children:[e.jsx(j,{sx:{textTransform:"capitalize",...o},align:"center",children:s.Text1}),e.jsx(j,{sx:{textTransform:"capitalize",...o},align:"center",children:s.Text2}),e.jsx(j,{sx:{textTransform:"capitalize",...o},align:"center",children:s.Text3==="3"?e.jsx(h,{children:e.jsx(b,{title:"Marks entry completed",children:e.jsx(Y,{onClick:()=>u(s.Text4,s.Text1,s.Text2,s.SubjectId,s.StandardDivisionID,s.IsXseed,s.Text6),sx:{cursor:"pointer",color:"#07bc0c"}})})}):s.Text3==="2"?e.jsx(h,{children:e.jsx(b,{title:"Marks entry partially done",children:e.jsx(V,{onClick:()=>u(s.Text4,s.Text1,s.Text2,s.SubjectId,s.StandardDivisionID,s.IsXseed,s.Text6),sx:{cursor:"pointer",color:"orange"}})})}):e.jsx(h,{children:e.jsx(b,{title:"Marks entry not started",children:e.jsx(X,{onClick:()=>u(s.Text4,s.Text1,s.Text2,s.SubjectId,s.StandardDivisionID,s.IsXseed,s.Text6),sx:{cursor:"pointer",color:"#f44336"}})})})}),e.jsx(j,{sx:{textTransform:"none",...o},align:"center",children:s.Text4==="2"?e.jsx(h,{children:e.jsx(b,{title:"Submit exam Marks to the class teacher",children:e.jsx($,{onClick:()=>n(s.SubjectId,s.StandardDivisionID,s.Text5),sx:{cursor:"pointer",color:"#25e67b"}})})}):s.Text4==="3"&&s.Text6==="N"?e.jsx(h,{children:e.jsx(b,{title:"Unsubmit exam marks",children:e.jsx(O,{onClick:()=>f(s.SubjectId,s.StandardDivisionID,s.Text5,s.Text6),sx:{cursor:"pointer",color:"black"}})})}):s.Text4==="3"&&s.Text6==="Y"?e.jsx("span",{children:"Marks are already published."}):e.jsx("span",{children:"Marks cannot be submitted."})})]},s.Id))})]})})})}const Ge=()=>{const i=me(),u=xe();let{TermId:a,TeacherId:n}=he();r.useEffect(()=>{a!==void 0&&n!==void 0&&(a=_(a),n=_(n))},[a,n]);const{showAlert:f,closeAlert:o}=r.useContext(be);let s=sessionStorage.getItem("TeacherId"),p=fe(162);const[c,A]=r.useState(p==="N"?s:"0"),[l,D]=r.useState("0"),[we,F]=r.useState("");r.useState("");const g=Number(localStorage.getItem("localSchoolId")),S=Number(sessionStorage.getItem("AcademicYearId")),W={asSchoolId:g,asAcademicYearId:S},q={asSchoolId:g,asAcademicYearId:S};r.useEffect(()=>{i(ge(W)),i(Se(q))},[]),r.useEffect(()=>{},[n,a]),r.useEffect(()=>{n&&a&&n.length>0&&a.length>0&&(D(a),A(n))},[n,a]),Number(sessionStorage.getItem("StandardDivisionId"));const P=x(t=>t.AssignPrePrimaryGrades.ISGetTestwiseTerm),J=x(t=>t.AssignPrePrimaryGrades.ISGetTeacherDropdown),I=x(t=>t.AssignPrePrimaryGrades.ISGetSubmitUnsubmitExamMarksStatusMsg),C=x(t=>t.AssignPrePrimaryGrades.ISGetTeacherXseedSubjectsBody);x(t=>t.AssignPrePrimaryGrades.ISSubmitExamMarksStatus),x(t=>t.AssignPrePrimaryGrades.Loading);const N={asSchoolId:Number(g),asAcademicYear_ID:Number(S),asTeacherId:Number(c),asAssessmentId:Number(l)},K=(t,m,d)=>{const T={asStandard_Division_Id:Number(m),asAssessmentId:Number(l),asSubjectId:Number(t),IsSubmitted:!0,asAcademicYearId:Number(S),asSchoolId:Number(g),asInserted_By_id:Number(c)};f({title:"Please Confirm",message:t.asIsSubmitted!=="N"?`${d!==""?`Roll no.(s) grades not entered for : ${d} 
Are you sure you want to continue?`:`Once you submit the result to the class-teacher, you cannot modify the marks / grades. 
Are you sure you want to continue?`}`:"Are you sure, Do you want to unsubmit marks / grades?",variant:"warning",confirmButtonText:"Confirm",cancelButtonText:"Cancel",onConfirm:()=>{o(),d==""&&i(w(T)),d!==""&&f({title:"Please Confirm",message:t.asIsSubmitted!=="N"?`Once you submit the result to the class-teacher, you cannot modify the marks / grades. 
Are you sure you want to continue?`:"Are you sure, Do you want to unsubmit marks/grades?",variant:"warning",confirmButtonText:"Confirm",cancelButtonText:"Cancel",onConfirm:()=>{o(),i(w(T))},onCancel:o})},onCancel:o})},Q=(t,m,d,T)=>{const k={asStandard_Division_Id:Number(m),asAssessmentId:Number(l),asSubjectId:Number(t),IsSubmitted:!1,asAcademicYearId:Number(S),asSchoolId:Number(g),asInserted_By_id:Number(c)};f({title:"Please Confirm",message:t.asIsSubmitted!=="N"?"Are you sure you want to unsubmit grades?":"Are you sure, Do you want to unsubmit marks/grades?",variant:"warning",confirmButtonText:"Confirm",cancelButtonText:"Cancel",onConfirm:()=>{o(),i(w(k))},onCancel:o})};r.useEffect(()=>{I!=""&&(I==="Marks already submitted"?U.success("Grades submitted successfully."):U.success("Grades unsubmitted successfully."),i(Te()),i(z(N)))},[I]),r.useEffect(()=>{(()=>{const d=new Date().toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0});F(d)})()},[]);const Z=[{Id:1,Header:"Class"},{Id:2,Header:"Subject"},{Id:3,Header:"Edit"},{Id:4,Header:"Submit"}];r.useEffect(()=>{i(z(N))},[c,l]);const ee=t=>{D(t)},se=t=>{A(t)},te=(t,m,d,T,k,ae,ne)=>{let oe=ne==="Y"?"3P":t,ie=k,v="",G=ae;P.forEach(E=>{E.Id===l&&(v=E.Name)});const B={EditStatusId:oe,ClassName:m,Assesment:v,SelectTerm:l,SubjectName:d,SubjectId:T,StandardDivisionId:ie,selectTeacher:c,fromInternal:!0};G==="N"?(t==="1"||t==="2"||t==="3")&&u("/RITeSchool/Teacher/AssignProgressReportSubject",{state:B}):G==="Y"&&(t==="1"||t==="2"||t==="3")&&u("/RITeSchool/Teacher/AssignPrePrimarySubjectGrades",{state:B})};je();const re=[{id:1,Name:"Marks entry not started",Value:e.jsx(X,{style:{color:"#f44336",fontSize:"large",position:"relative",top:"-2px"}})},{id:2,Name:"Marks entry partially done",Value:e.jsx(V,{style:{color:"#ff9800",fontSize:"large",position:"relative",top:"-2px"}})},{id:3,Name:"Submit exam marks to the class teacher",Value:e.jsx($,{style:{color:"#25e67b",fontSize:"large",position:"relative",top:"-2px"}})},{id:4,Name:"Marks entry completed",Value:e.jsx(Y,{style:{color:"#07bc0c",fontSize:"large",position:"relative",top:"-2px"}})},{id:5,Name:"Unsubmit exam marks",Value:e.jsx(O,{style:{color:"black",fontSize:"large",position:"relative",top:"-2px"}})}];return e.jsx(e.Fragment,{children:e.jsxs(y,{sx:{px:2},children:[e.jsx(ye,{navLinks:[{title:"Assign Pre-Primary Progress Report Grades",path:""}],rightActions:e.jsx(e.Fragment,{children:e.jsxs(L,{direction:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:"left",gap:1,sx:{flexWrap:{xs:"nowrap",sm:"nowrap"}},children:[e.jsx(H,{item:!0,xs:12,display:"flex",justifyContent:{xs:"flex-start",sm:"flex-end"},children:e.jsx(R,{ItemList:P,onChange:ee,defaultValue:l,label:"Assessment: ",sx:{width:{xs:"40vw",sm:"20vw"}},size:"small",DisableClearable:!0,mandatory:!0})}),p==="Y"&&e.jsx(H,{item:!0,xs:12,display:"flex",justifyContent:{xs:"flex-start",sm:"flex-end"},children:e.jsx(R,{ItemList:J,onChange:se,defaultValue:c,label:"Subject Teacher: ",sx:{width:{xs:"40vw",sm:"20vw"}},size:"small",mandatory:!0})}),e.jsx(L,{direction:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:"left",gap:1,sx:{flexWrap:{xs:"nowrap",sm:"nowrap"}},children:e.jsx(y,{children:e.jsx(b,{title:`View all subjects assigned with the current status of grades given to students. Once grades for all 
                  the students are allotted you have to submit these grades to the class-teacher by clicking on 'submit' button.`,children:e.jsx(h,{sx:{bgcolor:"grey.500",color:"white","&:hover":{bgcolor:"grey.600"}},children:e.jsx(pe,{})})})})})]})})}),e.jsx(y,{sx:{background:"white",p:1,mb:2},children:e.jsx(Ce,{LegendArray:re})}),C.length>0&&e.jsx(y,{sx:{backgroundColor:"white",p:2,marginTop:2},children:e.jsx("div",{children:e.jsx(ke,{ItemList:l!==""?C:[],clickEdit:te,HeaderArray:Z,clicksubmit:K,clickUnSubmit:Q})})}),c!=="0"&&l!=="0"&&C.length===0&&e.jsx(Ie,{variant:"body1",sx:{textAlign:"center",marginTop:1,backgroundColor:"#324b84",padding:1,borderRadius:2,color:"white"},children:e.jsx("b",{children:"No record found."})})]})})};export{Ge as default};
