import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/style.css';

const Productcard = (props) => {
    const navigate = useNavigate();
    return (
    
            <div className="card cardd my-2">
                <div className="text-center">
                <img src={props.data.image} onClick={()=>props.handleImageClick(props.data.id)} className="card-img-top img-fluid image" alt="/" />
                </div>
                <div className="card-body">
                    <h6 className="card-title title">{props.data.title}</h6>
                    <p className="card-text para">{props.data.description}</p>
                    <a href="#" className="btn btn-primary btnp">Buy Now</a>
                    <a href="#" className="btn btn-danger mx-2 my-2 btnp">Add to Cart</a>
                </div>
            </div>
    );
}

export default Productcard;