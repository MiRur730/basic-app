import React from 'react';

function Alert(props) {
  // let capitalize=(word)=>{
  //   const lower=word.toLowerCase();
  //   return lower.charAt(0).toUpperCase()+lower.slice(1);
  // }
  return (
    
     props.alert &&
     <div class="alert alert-warning alert-dismissible fade show" role="alert">
 {/* <strong>{capitalize(props.alert.msg)} capitalize(props.alert.title)</strong>  */}
 <strong>{props.alert.msg} {props.alert.title}</strong> 

</div>
     
  );
}

export default Alert;
