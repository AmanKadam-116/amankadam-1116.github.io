import{r as m,A as T,u as F,c as P,cs as he,k as Q,j as e,B as k,T as E,G as U,I as L,ap as fe,aq as pe,U as W,V as H,a0 as ee,a1 as te,a3 as O,ct as me,cu as xe}from"./index-CpZD2H93.js";import{C as ge}from"./Card-B0aZ7mGs.js";import{d as ve}from"./Attachment-BXtOqCtF.js";import{L as Ie}from"./CardStyle-CBuNm0_N.js";import{d as Se}from"./Clear-DjDvyafs.js";import{C as Ne}from"./Clear-CxxRCuuM.js";var oe={};function ye(o){if(!o||typeof window>"u")return;const c=document.createElement("style");return c.setAttribute("type","text/css"),c.innerHTML=o,document.head.appendChild(c),o}Object.defineProperty(oe,"__esModule",{value:!0});var r=m;function je(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var j=je(r);ye(`.marquee-container {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.overlay::before, .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
}

.child {
  transform: var(--transform);
}`);const Re=r.forwardRef(function({style:c={},className:x="",autoFill:i=!1,play:s=!0,pauseOnHover:d=!1,pauseOnClick:g=!1,direction:l="left",speed:N=50,delay:a=0,loop:t=0,gradient:n=!1,gradientColor:h=[255,255,255],gradientWidth:v=200,onFinish:u,onCycleComplete:f,onMount:I,children:p},y){const[R,re]=r.useState(0),[M,ie]=r.useState(0),[D,G]=r.useState(1),[$,le]=r.useState(!1),ce=r.useRef(null),b=y||ce,C=r.useRef(null),A=r.useCallback(()=>{if(C.current&&b.current){const S=b.current.getBoundingClientRect(),B=C.current.getBoundingClientRect();let w=S.width,_=B.width;(l==="up"||l==="down")&&(w=S.height,_=B.height),G(i&&w&&_&&_<w?Math.ceil(w/_):1),re(w),ie(_)}},[i,b,l]);r.useEffect(()=>{if($&&(A(),C.current&&b.current)){const S=new ResizeObserver(()=>A());return S.observe(b.current),S.observe(C.current),()=>{S&&S.disconnect()}}},[A,b,$]),r.useEffect(()=>{A()},[A,p]),r.useEffect(()=>{le(!0)},[]),r.useEffect(()=>{typeof I=="function"&&I()},[]);const X=r.useMemo(()=>i?M*D/N:M<R?R/N:M/N,[i,R,M,D,N]),q=`rgba(${h[0]}, ${h[1]}, ${h[2]}`,de=r.useMemo(()=>Object.assign(Object.assign({},c),{"--pause-on-hover":!s||d?"paused":"running","--pause-on-click":!s||d&&!g||g?"paused":"running","--width":l==="up"||l==="down"?"100vh":"100%","--transform":l==="up"?"rotate(-90deg)":l==="down"?"rotate(90deg)":"none"}),[c,s,d,g,l]),ue=r.useMemo(()=>({"--gradient-color":`${q}, 1), ${q}, 0)`,"--gradient-width":typeof v=="number"?`${v}px`:v}),[q,v]),Z=r.useMemo(()=>({"--play":s?"running":"paused","--direction":l==="left"?"normal":"reverse","--duration":`${X}s`,"--delay":`${a}s`,"--iteration-count":t?`${t}`:"infinite","--min-width":i?"auto":"100%"}),[s,l,X,a,t,i]),z=r.useMemo(()=>({"--transform":l==="up"?"rotate(90deg)":l==="down"?"rotate(-90deg)":"none"}),[l]),K=r.useCallback(S=>[...Array(Number.isFinite(S)&&S>=0?S:0)].map((B,w)=>j.default.createElement(r.Fragment,{key:w},r.Children.map(p,_=>j.default.createElement("div",{style:z,className:"child"},_)))),[z,p]);return $?j.default.createElement("div",{ref:b,style:de,className:"marquee-container "+x},n&&j.default.createElement("div",{style:ue,className:"overlay"}),j.default.createElement("div",{className:"marquee",style:Z,onAnimationIteration:f,onAnimationEnd:u},j.default.createElement("div",{className:"initial-child-container",ref:C},r.Children.map(p,S=>j.default.createElement("div",{style:z,className:"child"},S))),K(D-1)),j.default.createElement("div",{className:"marquee",style:Z},K(D))):null});var be=oe.default=Re;function Ye(){T();const o=F(),c=sessionStorage.getItem("AcademicYearId"),x=localStorage.getItem("localSchoolId"),i=sessionStorage.getItem("RoleId"),s=sessionStorage.getItem("Id"),d=P(a=>a.SchoolNoticeBoard.AllActiveNotices),g=P(a=>a.SchoolNoticeBoard.SchoolNoticeBoard),l={aiSchoolId:x,aiAcademicYearId:c,aiUserRoleId:i},N={asSchoolId:x,asUserId:s};return m.useEffect(()=>{o(he(l)),o(Q(N))},[]),m.useEffect(()=>{let a=d.map(n=>n.Id),t=!1;if(a.length>0){let n=sessionStorage.getItem("NoticeRead"),h=null,v=!1;if(n!=null&&(h=JSON.parse(n),h.map(f=>{f.UserId==s&&f.NoticeRead=="Y"&&(v=!0)})),!v){let f=[],I=null;if(localStorage.getItem("ImportantNotices")!==null){I=JSON.parse(localStorage.getItem("ImportantNotices").toString());let p=!1;I.map(y=>{y.UserId==s&&(p=!0,f=y.ids.split(","),a.map(R=>{f.includes(R.toString())||(t=!0)}))}),p||(t=!0)}else t=!0}let u=[];if(t){if(h!==null&&h.length>0){let f=!1;h.map(I=>{I.UserId==s&&(f=!0)}),f?u=h.map(I=>({...I,NoticeRead:I.UserId==s?"Y":I.NoticeRead})):u=[...h,{UserId:s,NoticeRead:"Y"}]}else u=[{UserId:s,NoticeRead:"Y"}];sessionStorage.setItem("NoticeRead",JSON.stringify(u))}}},[d]),e.jsx(k,{children:e.jsx(ge,{component:k,mt:2,p:.3,children:e.jsx(be,{delay:1,children:g.map((a,t)=>e.jsx("div",{children:e.jsxs(k,{sx:{display:"flex"},children:[e.jsx(E,{sx:{ml:"10px"},children:" 🔶"}),e.jsx(E,{sx:{ml:"10px"},children:a.Message})]})},t))})})})}const we=({item:o,downloadNotice:c,clickSingle:x})=>{T(),m.useState(!0);const i=s=>{x({name,value:s,checked:!o.isActive})};return e.jsx(e.Fragment,{children:e.jsxs(U,{item:!0,container:!0,xs:12,children:[e.jsx(U,{item:!0,xs:11,children:e.jsxs(Ie,{color:o.IsImageNotice?"secondary":"primary",sx:{display:"flex",alignItems:"center"},children:[e.jsx(E,{sx:{textDecoration:o.isActive?"line-through":"",fontWeight:o.isActive?"bold":"normal"},onClick:()=>{c(o.FileName,o.IsText,o.Content)},children:o.header}),e.jsx("div",{style:{flex:"1"}}),o.FileName!=""?e.jsx(ve,{onClick:()=>{c(o.FileName,o.IsText,o.Content)}}):e.jsx("span",{style:{marginRight:"10px"},children:"-"})]})}),!o.IsImageNotice&&e.jsx(U,{item:!0,xs:.7,sx:{ml:"5px"},children:e.jsx(L,{sx:{color:"#223354",mb:"13px","&:hover":{color:"red",backgroundColor:fe[100],mb:"10px"}},onClick:()=>i(o.id),children:e.jsx(pe,{})})})]})})},_e=({clickOpen:o})=>{const c=F(),x=localStorage.getItem("localSchoolId"),i=sessionStorage.getItem("Id"),[s,d]=m.useState([]),g=P(a=>a.SchoolNoticeBoard.AllActiveNotices);m.useEffect(()=>{let a=[];localStorage.getItem("ImportantNotices")!==null&&JSON.parse(localStorage.getItem("ImportantNotices").toString()).map(n=>{n.UserId==i&&(a=n.ids.split(","))}),d(g.filter(t=>!a.includes(t.Id)&&(t.DisplayLocation==="B"||t.DisplayLocation==="C")).map((t,n)=>({id:t.Id,header:t.Name,text2:"",linkPath:"/Common/ViewActiveNotice/"+t.Id,FileName:t.FileName,IsText:t.IsText,Content:t.Content,IsImageNotice:t.IsImageNotice,DisplayLocation:t.DisplayLocation,isActive:!1})))},[g]),m.useEffect(()=>{c(Q({asSchoolId:x,asUserId:i}))},[]);const l=(a,t,n)=>{o({FileName:a,IsText:t,Content:n})},N=a=>{let t=[],n=[],h=!1,v=localStorage.getItem("ImportantNotices");if(v!=null&&(n=JSON.parse(v),n.map(u=>{u.UserId==i&&(h=!0,t=u.ids.split(","))})),a.checked?t.push(a.value):t=t.filter(u=>u!==a.value),h){let u=[];n.map(f=>{u.push({UserId:f.UserId,ids:f.UserId==i?t.toString():f.ids})}),n=u}else n.push({UserId:i,ids:t.toString()});localStorage.setItem("ImportantNotices",JSON.stringify(n)),d(s.map(u=>u.id===a.value?{...u,isActive:a.checked}:u))};return e.jsxs(e.Fragment,{children:[s.map((a,t)=>e.jsx("div",{style:{display:"flex"},children:e.jsx(we,{item:a,downloadNotice:l,clickSingle:N})},t))," "]})};var V={},Ce=H;Object.defineProperty(V,"__esModule",{value:!0});var ae=V.default=void 0,Ae=Ce(W()),Ee=e,Me=(0,Ae.default)((0,Ee.jsx)("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}),"Fullscreen");ae=V.default=Me;var Y={},De=H;Object.defineProperty(Y,"__esModule",{value:!0});var se=Y.default=void 0,ke=De(W()),$e=e,qe=(0,ke.default)((0,$e.jsx)("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"}),"FullscreenExit");se=Y.default=qe;var J={},ze=H;Object.defineProperty(J,"__esModule",{value:!0});var ne=J.default=void 0,Be=ze(W()),Ue=e,Pe=(0,Be.default)((0,Ue.jsx)("path",{d:"M6 19h12v2H6z"}),"Minimize");ne=J.default=Pe;const Le=({open:o,onClose:c,link:x,contentType:i,onMinimize:s})=>{const[d,g]=m.useState(!1),l=()=>{g(!d)};return m.useEffect(()=>{o||g(!1)},[o]),e.jsxs(ee,{open:o,onClose:c,maxWidth:"md",PaperProps:{sx:{borderRadius:"15px",zIndex:1300,overflow:"auto",width:d?"80%":"50%",height:d?"100vh":"75vh",maxHeight:"90vh"}},sx:{zIndex:1300},children:[e.jsxs(te,{sx:{bgcolor:"#223354",position:"relative"},children:[e.jsx(L,{onClick:s,sx:{color:"white",borderRadius:"7px",position:"absolute",top:"-6px",right:"65px",cursor:"pointer","&:hover":{color:"grey"}},children:e.jsx(ne,{})}),e.jsx(L,{onClick:l,sx:{color:"white",borderRadius:"7px",position:"absolute",top:"0.1px",right:"35px",cursor:"pointer","&:hover":{color:"grey"}},children:d?e.jsx(se,{}):e.jsx(ae,{})}),e.jsx(Se,{onClick:c,sx:{color:"white",borderRadius:"7px",position:"absolute",top:"5px",right:"8px",cursor:"pointer","&:hover":{color:"red"}}})]}),e.jsx(O,{sx:{maxWidth:"100%",height:"100%",alignItems:"center"},children:e.jsx(O,{children:i==="image"?e.jsx(k,{display:"flex",justifyContent:"center",alignItems:"center",sx:{mt:7},children:e.jsx("img",{src:x,alt:"School Notice",style:{maxWidth:"100%",height:"auto"}})}):e.jsx(E,{dangerouslySetInnerHTML:{__html:x}})})})]})},Je=({open:o,setOpen:c})=>{T();const x=F(),i=()=>{c(!1),sessionStorage.setItem("hasShownPopup","true")};m.useEffect(()=>{sessionStorage.getItem("hasShownPopup")&&c(!0)},[c]);const[s,d]=m.useState(!1),[g,l]=m.useState("");m.useState("");const[N,a]=m.useState(""),t=Number(localStorage.getItem("localSchoolId")),n=sessionStorage.getItem("RoleId"),h=me(p=>p.SchoolNoticePopup.SchoolNoticePopUP),v={asSchoolId:t,asDisplayLocation:"B,C",asShowAllNotices:0,asSortExpression:"",asStartIndex:0,asEndIndex:40,asLoginUserRoleId:Number(n)};m.useEffect(()=>{x(xe(v))},[]);let u=localStorage.getItem("SiteURL")+"RITeSchool/DOWNLOADS/School Notices/";const f=p=>{d(!0),I(p)},I=p=>{const y=p.FileName?u+p.FileName:p.Content;if(y){l(y);const R=/\.(pdf|jpg|jpeg|png|gif|bmp)$/i.test(y);a(R?"image":"text"),d(!0)}};return e.jsxs(e.Fragment,{children:[e.jsxs(ee,{open:o,onClose:i,fullWidth:!0,maxWidth:"sm",PaperProps:{sx:{borderRadius:"15px"}},children:[e.jsx(te,{sx:{bgcolor:"#223354",position:"relative"},children:e.jsx(Ne,{onClick:i,sx:{color:"white",borderRadius:"7px",position:"absolute",top:"5px",right:"8px",cursor:"pointer","&:hover":{color:"red"}}})}),e.jsx(E,{variant:"h3",sx:{pt:1,pl:2},children:"School Notices"}),e.jsx(O,{sx:{maxHeight:h.length>5?"36vh":"auto",overflowY:h.length>5?"auto":"hidden"},children:e.jsx(_e,{clickOpen:f})})]}),e.jsx(Le,{open:s,onClose:()=>d(!1),onMinimize:()=>d(!1),link:g,contentType:N})]})};export{Ye as S,Je as a};
