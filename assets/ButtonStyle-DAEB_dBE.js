import{s as a,a6 as n,B as s,c1 as t,c7 as i}from"./index-CpZD2H93.js";const g=a(n)(({theme:r,color:o})=>`
color: white;
font-size: 12px;
font-family: 'Roboto';
text-decoration: none;
height:30px;
@media (max-width: 230px) {
  font-size: 10px;
};



background: ${o==="primary"?r.colors.gradients.primayButton:o==="secondary"?r.colors.gradients.secondaryButton:o==="warning"?r.colors.gradients.disableButton:o==="error"?"#DC143C":r.colors.gradients.primayButton};
&:hover {
    background: ${o==="primary"?r.colors.gradients.primayButton:o==="secondary"?r.colors.gradients.secondaryButton:o==="warning"?r.colors.gradients.disableButton:o==="error"?"#DC143C":r.colors.gradients.primayButton};
  }
border-radius: 3px;


box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

`),p=a(n)(({theme:r,color:o})=>`
color: white;
font-size: 12px;
font-family: 'Roboto';
text-decoration: none;
height:30px;
@media (max-width: 230px) {
  font-size: 10px;
};

@media (min-width: 900px) {
  height:88px;
};


background: ${o==="primary"?r.colors.gradients.primayButton:o==="secondary"?r.colors.gradients.secondaryButton:o==="warning"?r.colors.gradients.disableButton:o==="error"?"#DC143C":r.colors.gradients.primayButton};
&:hover {
    background: ${o==="primary"?r.colors.gradients.primayButton:o==="secondary"?r.colors.gradients.secondaryButton:o==="warning"?r.colors.gradients.disableButton:o==="error"?"#DC143C":r.colors.gradients.primayButton};
  }
border-radius: 3px;


box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

`),e=a(s)(({theme:r,color:o})=>`

  background: ${o==="primary"?r.colors.gradients.listColor:o==="secondary"?r.colors.gradients.HighlightedlistColor:o==="warning"?r.colors.gradients.selectedlistColor:o==="info"?r.colors.gradients.pageBackground:r.colors.gradients.listColor};
 text-align:center;
  font-size: 10px;
  color:black;
  @media (max-width: 280px) {
    font-size: 9px;
  };
 padding:4px;
border-radius: 6px;
   margin-bottom: 8px;
   box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
};
`),x=a(t)(({theme:r,color:o})=>`
  background: ${o==="primary"?r.colors.gradients.listColor:o==="secondary"?r.colors.gradients.HighlightedlistColor:o==="warning"?r.colors.gradients.selectedlistColor:o==="info"?r.colors.gradients.pageBackground:r.colors.gradients.listColor};
  
  padding: 8px;
  text-align: center;
  color: black;
  border-radius: 4px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  height:40px;
 
`),l=a(i)(({theme:r,color:o})=>`
font-size:10px;
 
`);export{g as B,l as F,x as I,e as a,p as b};
