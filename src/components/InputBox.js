import React from "react";
const InputBox= (props) =>
{
    return (
        <>
        <input type={props.type} className={props.className}  aria-describedby="emailHelp" name={props.name} onChange={props.handleChange} value={props.value}/><span className="erRed my-3">{props.error}</span>
        </>
    );
}
export default InputBox;