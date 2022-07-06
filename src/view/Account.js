import React from "react";
import Navv from "../components/Navbar";
import "../css/account.css";
import Footer from "./Footer";
import {useAuthContext} from "../context/AuthContext/authContext";

const Account = () => {
    const {loggedIn,user,setUserData,doLogin}= useAuthContext();
    return (
        <>
            <Navv />
            <div className="container-fluid main-cont">
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 justify-content-center my-3 div2">
                        <h5>Account Details</h5>
                        <div className="maindiv my-2">
                            <div>
                                <p><span>Name :</span>{user.name}</p>
                                <hr />

                            </div>
                            <div>

                                <p><span>Email :</span>{user.email}</p>
                                <hr />

                            </div>
                            <div>

                                <p><span>Phone :</span>{user.phone?user.phone:"N/A"}</p>
                                <hr />
                            </div>
                            <div>

                                <p><span>Gender :</span>{user.gender}</p>
                                <hr />
                            </div>
                            <div>

                                <p><span>Address :</span>{user.country}</p>
                            
                            </div>
                            <div>
                                <button type="button" class="btn btn-primary btn1 my-3">Edit</button>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}
export default Account;