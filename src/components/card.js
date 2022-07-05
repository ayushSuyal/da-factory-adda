import React from "react";
const Card=(props)=>
{
    return(
      <>
      <div className=" w-75 mx-3 text-center">
  <div className="card-body margin text-center">
  <h1><i className={props.icon}></i></h1>
    <h5 className="card-title">{props.title}</h5>
    <figcaption className="blockquote-footer my-2">
     {props.details}
  </figcaption>
  </div>
</div>
      </>
    );
}

export default Card;