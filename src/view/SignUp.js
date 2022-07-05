import React from "react";
import SignForm from "../components/SignForm";
import image14 from "../images/14.jpg";
import '../css/style.css';
function SignUp()
{
    return(
         <div className="login">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-md-6 signForm">
                        <h5 className="display-5">Sign Up</h5>
                        <SignForm />
                    </div>
                </div>
            </div>
         </div>
    );
}
export default SignUp;