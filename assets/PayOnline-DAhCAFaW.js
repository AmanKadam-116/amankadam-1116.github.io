import{q as y,v as t,u as P,c as h,j as I}from"./index-CpZD2H93.js";import{C as A}from"./card26-CVcruCAr.js";import{P as Y}from"./PageHeader-C9ChZO91.js";import"./Reply-C_nMmpFx.js";function O(){let{SelectedDueDate:n,feeId:o,currentYear:e,IsForCurrentyear:s,OldYearwiseStudentId:r,ApplicableFee:i,TotalLateFee:d,advanceFeelist:l}=y();n=t(n),o=t(o),e=t(e),s=t(s),r=t(r),i=t(i),d=t(d),l=t(l),P();const g=h(a=>a.Fees.paymentUrl),u=sessionStorage.getItem("AcademicYearId"),c=sessionStorage.getItem("StudentId"),p=sessionStorage.getItem("Userlogin"),m=localStorage.getItem("localSchoolId"),F=m=="122"?l:"";return(()=>{let a="",S="N";return e=="0"&&(S="Y"),e=="0"&&(a="StudentId="+c+"&DueDates="+n+"&Remarks=&SchoolwiseStudentFeeId="+o+"&AcadmicYearId="+e+"&StanardID=&TotalAmount="+i+"&LateFeeAmount="+d+"&IsForNextYear=Y&ConcessionAmount="+F+"&FeeType="),e==u&&(a="StudentId="+c+"&DueDates="+n+"&Remarks=&SchoolwiseStudentFeeId="+o+"&IsOnlineCautionMoneyPayment=0"),e<u&&(a="StudentId="+r+"&DueDates="+n+"&Remarks=&SchoolwiseStudentFeeId="+o+"&IsOnlineCautionMoneyPayment=0&AcadmicYearId="+e+"&IsOldAcademicYearPayment="+s),e&&(a="StudentId="+c+"&InternalFeeDetailsId=0&IsOnlineInternalFeePayment=1&IsForNextYear="+S+"&AcadmicYearId="+e+"&TotalAmount=0&IsForInternalFee=1"),a})(),localStorage.getItem("SiteURL")+"",localStorage.getItem("SiteURL")+"",I.jsxs("div",{children:[" ",I.jsx(Y,{heading:"Online Payment",subheading:""}),localStorage.getItem("paymentPopUpCount")==="0"?localStorage.setItem("paymentPopUpCount","1"):I.jsx(A,{paymentPageLink:g})]})}export{O as default};
