import{m as f,s as h,T as b,B as l,h as w,A as j,j as t,G as s,n as I,o as d,t as n}from"./index-CpZD2H93.js";import{u as S}from"./formik.esm-Crucl9hw.js";import{E as m}from"./Errormessage-DVJGTehf.js";import{N as y}from"./Note-D5w6lthy.js";import{P as B}from"./PageHeader-C9ChZO91.js";import{B as u}from"./ButtonStyle-DAEB_dBE.js";import{L as E,H as v}from"./CardStyle-CBuNm0_N.js";import{C as P}from"./CommonStyle-DTS3LGaG.js";import"./Card-B0aZ7mGs.js";const D=r=>f.post("School/GetPassword",r),L={GetPasswordResult:D};h(b)(({theme:r})=>`

font-weight: 500;
font-size: 20px;

color: black;
margin: auto;
text-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

@media (min-width: 280px) and (max-width: 320px)  {
  font-size: 18px;
};
@media (min-width: 600px)  {
  font-size: 22px;
};
`);const C=h(l)(({theme:r})=>`
background-color:#EAF1F5; 
height: 100%;
    width: 100%;
    overflow: scroll;
  };
`);h(l)(({theme:r})=>`

margin-top: ${r.spacing(2)};
       margin-bottom:  ${r.spacing(2)};
       @media (min-width: 600px) {
        // margin-bottom:  ${r.spacing(4)};
      };
      
`);function A(){w();const r=localStorage.getItem("localSchoolId"),c=()=>{const o={asSchoolId:r,asLogin:e.values.Login,asDOB:e.values.DOB,asEmailId:e.values.EmailId};L.GetPasswordResult(o).then(a=>{a.status===200&&a.data==null&&(n.success("SMS has been Sent",{toastId:"success1"}),e.resetForm()),a.data=="Provided details are not valid."&&n.error("Provided details are not valid.",{toastId:"error1"}),a.data=="Login details have already been sent to you. Please try after 24 Hrs."&&n.error("Login details have already been sent to you. Please try after 24 Hrs.",{toastId:"error2"}),a.data=="Failed to send the SMS."&&n.error("Failed to send the SMS.",{toastId:"error3"})}).catch(a=>{n.error("Failed to send SMS")})},e=S({initialValues:{Login:"",DOB:"",EmailId:""},onSubmit:o=>{c()},validate:o=>{const a=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,i={};return o.Login||(i.Login="Please enter the user name."),o.DOB||(i.DOB="Date of Birth should not be blank."),o.EmailId?a.test(o.EmailId)||(i.EmailId="Invalid email address"):i.EmailId="Email Id should not be blank.",i}}),x=j(),g=()=>{x("/schoolList",{state:{fromInternal:!0}})},p=["1) Parents need to enter the date of birth of their child.","2) Please enter the user name and date of birth, the system will SMS you the password on the mobile number registered with the  RITeSchool account.","3) Please enter email id to receive the login details through email."];return t.jsx(C,{children:t.jsxs(l,{sx:{px:2},children:[t.jsx(B,{heading:"Forgot Password",subheading:""}),t.jsxs(s,{container:!0,children:[t.jsx(s,{item:!0,xs:3}),t.jsxs(s,{item:!0,xs:12,lg:6,children:[t.jsx(I,{direction:"row",alignItems:"center",justifyContent:"center",gap:1,children:t.jsx("img",{src:"/imges/forgotpassword.png",style:{width:"200px",height:"200px",borderRadius:"50%",boxShadow:"0px 8px 15px rgba(0, 0, 0, 0.1)"}})}),t.jsx(l,{mt:2,children:t.jsxs(E,{sx:P,children:[t.jsxs("form",{onSubmit:e.handleSubmit,children:[t.jsx(d,{fullWidth:!0,margin:"normal",label:"User Name",name:"Login",type:"text",variant:"standard",value:e.values.Login,onChange:e.handleChange,onBlur:e.handleBlur,sx:{mt:"-0.3rem"}}),e.touched.Login&&e.errors.Login?t.jsx(m,{Error:e.errors.Login}):null,t.jsx(v,{children:"Date of Birth"}),t.jsx(d,{fullWidth:!0,margin:"normal",name:"DOB",type:"date",variant:"standard",placeholder:"DD/MM/YYYY",value:e.values.DOB,onChange:e.handleChange,onBlur:e.handleBlur,sx:{mt:"-0.3rem"}}),e.touched.DOB&&e.errors.DOB?t.jsx(m,{Error:e.errors.DOB}):null,t.jsx(d,{fullWidth:!0,margin:"normal",label:"Email Id",name:"EmailId",type:"text",variant:"standard",value:e.values.EmailId,onChange:e.handleChange,onBlur:e.handleBlur,sx:{mt:"-0.3rem"}}),e.touched.EmailId&&e.errors.EmailId?t.jsx(m,{Error:e.errors.EmailId}):null,t.jsxs(s,{container:!0,spacing:2,children:[t.jsx(s,{item:!0,xs:6,children:t.jsx(u,{color:"primary",onChange:e.handleChange,type:"submit",fullWidth:!0,children:"Submit"})}),t.jsx(s,{item:!0,xs:6,children:t.jsx(u,{color:"secondary",onClick:g,fullWidth:!0,children:"Cancel"})})]})]}),t.jsx(y,{NoteDetail:p})]})})]})]})]})})}export{A as default};
