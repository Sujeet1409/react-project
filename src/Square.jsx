import React from "react";

    function Square(props){
    return(
        <div 
        onClick={props.onClick}
        
        style={{border:"1px solid",
          height:'100px', 
          width:'100px',
          display:'flex',
         justifyContent:'center',
         alignItems:'center'}}>
            <h5>{props.value}</h5>
        </div>

    );
};
export default Square;