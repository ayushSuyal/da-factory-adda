import React from "react";
import "../css/style.css";
import LoginForm  from "../components/LoginForm";

const Login =()=>
{
    return (
        <div className="login">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-md-6 "><LoginForm/></div>
                </div>
            </div>
        </div>

    );
}

export default Login;