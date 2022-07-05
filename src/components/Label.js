import React from "react";
const Label =(props)=> 
{
    return (
        <label htmlFor="exampleInputEmail1" className="form-label">{props.labelName}</label>
    );
}
export default Label;