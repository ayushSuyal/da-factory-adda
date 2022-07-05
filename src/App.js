import React from "react";
import SignUp from "./view/SignUp";
import Login from "./view/Login";
import Home from "./view/Home";
import Description from "./view/Description";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext/authContext";
import Cart from "./view/Cart";

function App() {
  return (
   <>
   <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<SignUp />} />
   
    
    <Route path="/login" element={<Login />} />

    <Route path="/description/:id" element={<Description />} />
    <Route path="/cart" element={<Cart />} />
    </Routes>
    
   </Router>
   
  {/* <Navbar /> */}
  {/* <SignUp /> */}
  {/* <Login /> */}
   </>
  );
}

export default App;
