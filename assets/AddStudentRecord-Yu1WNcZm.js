import{cc as Z,j as e,G as R,T as S,bs as ye,bH as $,r as l,L as ke,M as De,N as Te,O as ve,u as Qe,A as Fe,q as Le,v as H,c as b,iP as D,iQ as Me,t as v,iR as Ne,iS as Ee,iT as Ge,iU as Ue,B as d,C as Ve,aG as Be,E as g,I,F as q,ab as O,J as w,br as He,bl as _,ap as J,aH as Oe,ag as P,ak as z,ai as x,aj as n,ah as Pe,iV as ze,iW as Ke,iX as We,iY as Xe}from"./index-CpZD2H93.js";import{d as Ye}from"./MarkEmailRead-CW_pucn0.js";import $e from"./StudentRecordComment-UYkVVcd8.js";import{Q as qe}from"./QuestionMark-B_7MKkiz.js";import{S as _e}from"./Save-Pq9d8yJY.js";import{E as Je}from"./EditTwoTone-7ouzJGDn.js";const Ze=Z(e.jsx("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM17 11h-4v4h-2v-4H7V9h4V5h2v4h4v2z"}),"AddComment"),es=Z(e.jsx("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send"),ss=({Item:r,ChangeItem:u,IsEditiable:h})=>e.jsx("div",{children:e.jsxs(R,{container:!0,children:[e.jsx(R,{item:!0,xs:12,p:1,children:e.jsx(S,{pl:1,children:r.Question})}),e.jsx(R,{item:!0,xs:12,pl:1,children:r.QueType==2?e.jsx(R,{item:!0,xs:12,md:12,m:1,pr:2,children:e.jsx(ye,{name:"description",multiline:!0,fullWidth:!0,value:r.Answer,onChange:i=>{u(r,i.target.value)},sx:{resize:"both"},disabled:h})}):e.jsxs(e.Fragment,{children:[e.jsx($,{checked:r.Answer=="Yes",onChange:i=>{u(r,i.target.checked?"Yes":"")},sx:{pl:1},value:r.Answer,disabled:h}),"Yes",e.jsx($,{checked:r.Answer=="No",onChange:i=>{u(r,i.target.checked?"No":"")},value:r.Answer,disabled:h}),"No"]})})]})}),ts=({ItemList:r,ChangeItem:u,QuestionId:h,IsEditiable:i})=>{const f=(j,c)=>{u(r.map((C,ee)=>({...C,Answer:C.Id==j.Id?c:C.Answer})),h)};return e.jsx("div",{children:r.map((j,c)=>e.jsx("div",{children:e.jsx(ss,{Item:j,ChangeItem:f,IsEditiable:i})},c))})},rs=({ItemList:r,ChangeItem:u,IsEditiable:h})=>(l.useState([{QuestionId:1,Header:"Family Information",QueAnsList:[{Id:1,Question:"Is the child living with both the parents?",QueType:3,Answer:""},{Id:2,Question:"Language spoken at home",QueType:2,Answer:""}]},{QuestionId:2,Header:"Medical History",QueAnsList:[{Id:3,Question:"Has the child had any prolonged absences from school? If yes, please state the reason for absence.",QueType:2,Answer:""},{Id:4,Question:"Does the child have any medical record?",QueType:2,Answer:""}]},{QuestionId:3,Header:"Educational History",QueAnsList:[{Id:5,Question:"How is the child doing academically?",QueType:2,Answer:""}]}]),e.jsx("div",{children:r.length==0?e.jsx(S,{children:"No Records Found"}):r.map((i,f)=>e.jsxs(ke,{defaultExpanded:!0,sx:{border:j=>`1px solid ${j.palette.divider}`},children:[e.jsx(De,{expandIcon:e.jsx(Te,{}),children:e.jsx(S,{variant:"h4",children:i.Header})}),e.jsx(ve,{sx:{p:0},children:e.jsx(ts,{ItemList:i.QueAnsList,QuestionId:i.QuestionId,IsEditiable:h,ChangeItem:u})})]},f))})),us=()=>{const r=Qe();Fe();const[u,h]=l.useState([]),[i,f]=l.useState("");let{Action:j,SchoolWiseStudentIdparam:c,SelectTeacher:C}=Le();j=H(j),c=H(c),C=H(C);const[ee,se]=l.useState(j),[K,Q]=l.useState(!1);l.useState(""),l.useState(""),l.useState([]);const[F,te]=l.useState(new Date().toISOString().split("T")[0]),[L,M]=l.useState(""),A=Number(localStorage.getItem("localSchoolId")),T=Number(sessionStorage.getItem("AcademicYearId")),y=Number(localStorage.getItem("UserId")),[ns,re]=l.useState([]),ne=b(s=>s.AddStudentRecords.listGeneralDetails),a=b(s=>s.AddStudentRecords.listCommentDetails),N=b(s=>s.AddStudentRecords.QueAnsList),E=b(s=>s.AddStudentRecords.listSiblingsDetails);b(s=>s.AddStudentRecords.listParameterDetails);const G=b(s=>s.AddStudentRecords.submitStudentRecordCommentmsg);b(s=>s.AddStudentRecords.getstudentrecordcomment);const U=b(s=>s.AddStudentRecords.savestudentrecordmsg),V=b(s=>s.AddStudentRecords.submitStudentRecordmsg),B=b(s=>s.AddStudentRecords.markrecordAsreadmsg);l.useEffect(()=>{N.length>0?h(N):h([])},[N]);const oe=(s,t)=>{h(u.map((m,Y)=>({...m,QueAnsList:t==m.QuestionId?s:m.QueAnsList})))};l.useEffect(()=>{re(a)},[a]),l.useEffect(()=>{r(D(k))},[]),l.useEffect(()=>{r(Me(ce))},[]),l.useEffect(()=>{U!==""&&(v.success(U,{toastId:"success1"}),r(Ne()),r(D(k)))},[U]),l.useEffect(()=>{V!==""&&(v.success(V,{toastId:"success1"}),r(Ee()),r(D(k)))},[V]),l.useEffect(()=>{B!==""&&(v.success(B,{toastId:"success1"}),r(Ge()),r(D(k)))},[B]),l.useEffect(()=>{G!==""&&(v.success(G,{toastId:"success1"}),r(Ue()),r(D(k)))},[G]);const le=()=>{let s="<ArrayOfKeyValue xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>";return u.map(t=>{t.QueAnsList.map(m=>{s=s+"<KeyValue><Key>"+m.Id+"</Key><Value>"+m.Answer+"</Value></KeyValue>"})}),s=s+"</ArrayOfKeyValue>",s},ae={asSchoolId:A,asAcademicYearId:T,asUserId:y,asSchoolwiseStudentId:Number(c)},de={asSchoolId:A,asUpdatedById:y,asSchoolwiseStudentId:Number(c),asCommentId:0,asSubmitAllComments:"false",asAcademicYearId:T},k={asSchoolId:A,asSchoolwiseStudentId:Number(c),asAcademicYearId:T,asIsReadMode:"false",asUserId:y},ie={asSchoolId:A,asUpdatedById:y,asSchoolwiseStudentId:Number(c),asCommentId:0,asSubmitAllComments:1,asAcademicYearId:T},ce={asSchoolId:A,asSchoolwiseStudentId:Number(c),asCommentId:0},[ue,he]=l.useState(""),W=s=>{Q(!0),he(s)},xe=()=>{Q(!1)},me=()=>{let s=!0,t=!1;return u.map(m=>{m.QueAnsList.map(Y=>{Y.Answer!==""&&(t=!0)})}),t?f(""):(f("Please enter details for at least one field."),s=!1),s},be=()=>{if(me()){const s={asSchoolId:A,asUpdatedById:y,asStudentId:Number(c),asDataXML:le(),Date:F};r(ze(s)),se("Edit")}},je=()=>{r(Ke(de))},pe=()=>{r(We(ie))},Se=()=>{r(Xe(ae))},ge=s=>{te(s),s&&L!==""?M(""):new Date(F)>new Date?M("Future date is not allowed."):M("")},o={padding:"0.2em 1.5em"},p={height:"0.5em 1.5em"},fe=a.length>0&&a[0].IsSubmitted==="True",X=()=>{let s=!0;return a.length==0?s=!1:a.map(t=>{t.IsDefaultComment=="True"&&t.IsSubmitted=="False"&&(s=!1)}),s},Ce=()=>{let s=!0;return a.map(t=>{t.IsDefaultComment=="True"&&t.IsSubmitted=="False"&&(s=!1)}),s},Ae=()=>{let s=!0;return a.map(t=>{t.IsDefaultComment=="True"&&t.IsSubmitted=="True"&&(s=!1)}),s},Ie=()=>{let s=!0;return a.map(t=>{t.IsDefaultComment=="False"&&t.IsSubmitted=="False"&&(s=!1)}),s},we=()=>{let s=!0;return a.length==0?s=!1:a.map(t=>{t.IsDefaultComment=="False"&&t.IsSubmitted=="True"&&(s=!1)}),s},Re=()=>{let s=!0;return a.map(t=>{t.IsDefaultComment=="True"&&t.IsSubmitted=="True"&&(t.LoginUserDesignation=="1"||t.LoginUserDesignation=="2"||t.LoginUserDesignation=="4")&&(s=!1)}),s};return e.jsxs(d,{sx:{px:2},maxWidth:"xl",children:[e.jsx(Ve,{navLinks:[{title:"Student Record List",path:"/RITeSchool/Teacher/StudentRecords"},{title:"Student Record",path:""}],rightActions:e.jsxs(e.Fragment,{children:[e.jsx(Be,{DateValue:F,onDateChange:ge,label:"Date",size:"small"}),e.jsx(d,{sx:{display:"flex",alignItems:"center"},children:e.jsx(g,{title:"Add / Submit student details.",children:e.jsx(I,{sx:{color:"white",backgroundColor:q[500],height:"36px !important",":hover":{backgroundColor:q[600]},marginRight:"-4px"},children:e.jsx(qe,{})})})}),Re()&&e.jsxs(O.Fragment,{children:[e.jsx(d,{children:e.jsx(g,{title:"Save",children:e.jsx("span",{children:e.jsx(I,{sx:{backgroundColor:w[500],color:"white","&:hover":{backgroundColor:w[600]}},onClick:be,disabled:X(),children:e.jsx(_e,{})})})})}),e.jsx(d,{children:e.jsx(g,{title:"Submit",children:e.jsx("span",{children:e.jsx(I,{sx:{backgroundColor:w[500],color:"white","&:hover":{backgroundColor:w[600]}},onClick:je,disabled:Ce(),children:e.jsx(He,{})})})})})]}),e.jsx(d,{children:e.jsx(g,{title:"Add Comment",children:e.jsx("span",{children:e.jsx(I,{sx:{backgroundColor:_[500],color:"white","&:hover":{backgroundColor:_[600]}},onClick:W,disabled:Ae(),children:e.jsx(Ze,{})})})})}),e.jsx(d,{children:e.jsx(g,{title:"Submit Comment",children:e.jsx("span",{children:e.jsx(I,{sx:{backgroundColor:J[500],color:"white","&:hover":{backgroundColor:J[600]}},onClick:pe,disabled:Ie(),children:e.jsx(es,{})})})})}),X()&&e.jsx(d,{children:e.jsx(g,{title:"Mark as read",children:e.jsx("span",{children:e.jsx(I,{sx:{backgroundColor:w[500],color:"white","&:hover":{backgroundColor:w[600]}},onClick:Se,disabled:we(),children:e.jsx(Ye,{})})})})})]})}),e.jsx(R,{item:!0,xs:12,children:e.jsx(S,{variant:"h5",sx:{color:"red"},children:L&&e.jsx(d,{sx:{mt:1,position:"absolute",bottom:"-25px"},children:e.jsx(Oe,{Error:L})})})}),e.jsx(R,{item:!0,xs:12,children:e.jsx(S,{variant:"h5",sx:{color:"red"},children:i})}),e.jsxs(d,{sx:{p:1,color:"red",background:"white",fontWeight:"bold"},children:["The following information is for professional use and will be handled confidentially. This information will assist the counsellor for the child's evaluation.",e.jsx("br",{}),"Please complete the following questions as fully and accurately as possible. If you are unable to complete a question you may consult other subject teachers for the better understanding of the child."]}),e.jsx(d,{sx:{p:1,background:"white"},children:e.jsx(S,{variant:"h4",align:"center",color:"blue",sx:{textAlign:"center",backgroundColor:"#F0F0F0",padding:1,borderRadius:2,color:"#324b84"},children:"General Information"})}),e.jsx(d,{mb:1,sx:{p:1,background:"white"},children:e.jsx(P,{"aria-label":"simple table",sx:{border:s=>`1px solid ${s.palette.grey[300]}`},children:e.jsxs(z,{children:[ne.map((s,t)=>e.jsxs(O.Fragment,{children:[e.jsxs(x,{sx:{bgcolor:"white"},children:[e.jsxs(n,{children:[e.jsx("b",{children:"Name of the student : "})," ",s.Text1]}),e.jsxs(n,{sx:o,children:[e.jsx("b",{children:"Date of Birth : "})," ",s.Text2]})]}),e.jsx(x,{sx:{backgroundColor:"#F0F0F0",...p},children:e.jsx(n,{sx:o,colSpan:2,children:e.jsx("b",{children:"Family Details"})})}),e.jsxs(x,{sx:{...p,bgcolor:"white"},children:[e.jsxs(n,{sx:o,children:[e.jsx("b",{children:"Mother Name : "})," ",s.Text3]}),e.jsxs(n,{sx:o,children:[e.jsx("b",{children:"Mother Occupation : "})," ",s.Text6]})]}),e.jsxs(x,{sx:{...p,bgcolor:"white"},children:[e.jsxs(n,{sx:o,children:[e.jsx("b",{children:"Father Name : "})," ",s.Text4]}),e.jsxs(n,{sx:o,children:[e.jsx("b",{children:"Father Occupation : "})," ",s.Text5]})]})]},t)),E.length>0&&e.jsx(x,{sx:p,children:e.jsx(n,{sx:o,colSpan:2,children:e.jsx("b",{children:"Please list all siblings"})})}),E.length>0&&e.jsxs(P,{sx:{minWidth:500,width:"70%",height:"auto"},"aria-label":"simple table",children:[e.jsx(Pe,{children:e.jsxs(x,{sx:{background:s=>s.palette.secondary.main,color:s=>s.palette.common.white},children:[e.jsx(n,{align:"center",style:{border:"1px solid black",color:"white",...o},children:"Name"}),e.jsx(n,{align:"center",style:{border:"1px solid black",color:"white",...o},children:"Sex"}),e.jsx(n,{align:"center",style:{border:"1px solid black",color:"white",...o},children:"Age"}),e.jsx(n,{align:"center",style:{border:"1px solid black",color:"white",...o},children:"Grade"})]})}),e.jsx(z,{children:E.map((s,t)=>e.jsxs(x,{children:[e.jsx(n,{align:"center",style:{border:"1px solid black",...o},children:s.Text1}),e.jsx(n,{align:"center",style:{border:"1px solid black",...o},children:s.Text2}),e.jsx(n,{align:"center",style:{border:"1px solid black",...o},children:s.Text3}),e.jsx(n,{align:"center",style:{border:"1px solid black",...o},children:s.Text4})]},t))})]})]})})}),e.jsx(rs,{ItemList:u,IsEditiable:fe,ChangeItem:oe}),e.jsx(d,{sx:{backgroundColor:"white",pt:2},children:e.jsx(S,{variant:"h4",pl:2,children:"Comment(s)"})}),a.length===0?e.jsx(d,{sx:{backgroundColor:"white",p:1},children:e.jsx(S,{variant:"h6",align:"center",color:"blue",sx:{textAlign:"center",marginTop:1,backgroundColor:"#324b84",padding:1,borderRadius:2,color:"white"},children:"No comment found."})}):e.jsx(d,{sx:{backgroundColor:"white",px:2,py:1},children:e.jsx(P,{"aria-label":"simple table",sx:{border:s=>`1px solid ${s.palette.grey[300]}`,overflow:"hidden"},children:e.jsx(z,{children:a.map((s,t)=>e.jsxs(O.Fragment,{children:[e.jsxs(x,{sx:{...p,backgroundColor:"#F0F0F0"},children:[e.jsxs(n,{sx:o,style:{color:"#38548A"},children:[e.jsx("b",{children:"Date : "})," ",s.Date]}),e.jsxs(n,{sx:o,style:{color:"#38548A"},children:[e.jsx("b",{children:"Read By Principal : "})," ",s.IsCommentReadByPrincipal]}),e.jsxs(n,{sx:o,style:{color:"#38548A"},children:[e.jsx("b",{children:"Read By Counsellor : "})," ",s.IsCommentReadByConsellor]}),e.jsxs(n,{sx:o,style:{color:"#38548A"},children:[e.jsx("b",{children:"Read By Class Teacher : "})," ",s.IsCommentReadByClassTeacher]}),a.length>0&&(s.IsDefaultComment==="False"||s.IsSubmitted==="False")&&e.jsx(g,{title:"Edit",children:e.jsx(Je,{onClick:m=>W(s.Id),sx:{color:"#38548A","&:hover":{color:"#38548A",backgroundColor:"grey[200]"}}})})]}),e.jsx(x,{sx:{...p,bgcolor:"white",p:1},children:e.jsxs(n,{sx:o,colSpan:2,children:[e.jsx("b",{children:"Added By : "}),s.UserName]})}),e.jsx(x,{sx:{...p,bgcolor:"white"},children:e.jsxs(n,{sx:o,colSpan:2,children:[e.jsx("b",{children:"Comment : "}),s.Comment]})}),a.length>0&&s.IsDefaultComment==="False"&&e.jsx(x,{sx:{...p,bgcolor:"white"},children:e.jsxs(n,{sx:o,colSpan:2,children:[e.jsx("b",{children:"Lecture Name : "}),s.LectureName]})})]},t))})})}),e.jsx(d,{sx:{display:"flex",justifyContent:"flex-start",gap:"8px"},children:K&&e.jsx($e,{open:K,setOpen:Q,ClickCloseDialogbox:xe,SchoolWiseStudentIdparam:c,CommentId:ue})})]})};export{us as default};
