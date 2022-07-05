import React, { useState } from "react";
import { validateEmail } from "../utils/utils";
import { Navigate, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import '../css/style.css';
import InputBox from "./InputBox";
import { ToastContainer, toast } from 'react-toastify';
import Button from "./Button";
import 'react-toastify/dist/ReactToastify.css';
import Label from "./Label";



const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [showEye, setShowEye] = useState("bi bi-eye-slash passIcon1");
    const [showPassword, setShowPassword] = useState("password");
    const [spin, setSpin] = useState("");
    const [login, setLogin] = useState("Login");
    const [passwordError, setPasswordError] = useState("");
    const [singleData, setSingleData] = useState({});
    const navigate = useNavigate();



    // function to handle email 

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    //function to handle password

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    // validate Email function 
    const emailValid = () => {
        if (!email) {
            setEmailError("This field is required!");
            return false;
        }
        else if (!validateEmail(email)) {
            setEmailError("This email is not valid");
            return false;
        }
        else {
            setEmailError("")
            return true;
        }
    }
    //validate Password function
    const passwordValid = () => {
        if (password === "" || password === null) {
            setPasswordError("This field is required!")
            return false;

        }
        else {
            setPasswordError("")
            return true;
        }
    }

    //handle handleSubmitSignup
    const handleSubmitSignup = () => {
        navigate("/signup")
    }
    //valid form function 

    const formValid = () => {
        return emailValid() && passwordValid();
    }

    //handle Submit function
    const x = "fa fa-spinner fa-spin";
    const handleSubmit = async () => {

        if (formValid()) {
            try {
                setLogin("")
                setSpin("fa fa-spinner fa-spin");
                const auth = getAuth();
                const response = await signInWithEmailAndPassword(auth, email, password)
                const user = response.user;
                if (user.accessToken != "" && user.uid != "") {
                    setSpin("")
                    setLogin("Login")
                    localStorage.setItem("accessToken", user.accessToken);
                    localStorage.setItem("uid", user.uid);                    toast.success('Logged in');
                    navigate("/", { replace: true });
                }
                else {
                    toast.error('Wrong email or password!');
                }

            }
            catch (error) {
                setSpin("")
                setLogin("Login")
                console.log(error);
                toast.error('Wrong email or password!');

            }
        }

    }
    
    // handleSubmit function

    const handleOnSubmit = (e) => {
        e.preventDefault()
    }


    // handlePassClick function 

    const handlePassClick = () => {
        if (showPassword === 'password') {
            setShowPassword("text")
            setShowEye("bi bi-eye passIcon1")
        }
        else {
            setShowPassword("password")
            setShowEye("bi bi-eye-slash passIcon1")
        }
    }
    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <div>

                    <h5 className="display-5 heading">Login</h5>
                </div>
                <div className="mb-3 my-3">
                    <Label labelName="Email" />
                    <InputBox type="email" handleChange={handleEmail} value={email} className="form-control" />
                    <div className="my-2">
                        <span className="my-3" style={{ color: "red" }}>{emailError}</span></div>
                </div>
                <div className="mb-3">
                    <Label labelName="Password" />
                    <div className="icon-div1">
                        <InputBox type={showPassword} value={password} handleChange={handlePassword} className="form-control" />
                        <i className={showEye} onClick={handlePassClick} id="togglePassword"></i><div className="my-2"><span className="my-3" style={{ color: "red" }}>{passwordError}</span></div>
                    </div>
                </div>
                <Button handleButtonClick={handleSubmit} buttonName={login} spin={spin} />
                <p className="my-2">Don't have a account? <a onClick={handleSubmitSignup}  className="mx-2 my-2 linkbtn">Signup</a></p>
            </form>
            <ToastContainer />
        </>
    );
}

export default LoginForm;