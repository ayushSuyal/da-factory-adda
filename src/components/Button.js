import React from "react";
const Button =(props)=>
{
    return (
        <button type="button" className="btn btn-primary mx-2" 
        onClick={props.handleButtonClick}
        disabled={props?.spin}>
            {props.buttonName}
          {props?.spin &&  <i className='fa fa-spinner fa-spin'></i>}</button>
    );
}

export default Button;