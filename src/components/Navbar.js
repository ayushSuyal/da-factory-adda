import React from "react";
import '../css/style.css';
import Dropdown from "./Dropdown";
import { getAuth, signOut } from "firebase/auth";
import Drop from "./Dropdown";
import { Navbar } from "react-bootstrap";
import {Container} from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import Drop1 from "./Dropdown1";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";


function Navv(props) {

  const [isLoggedIN,setIsLogged]=useState(false)
  const navigate= useNavigate();


  useEffect(()=>{
    const accessToken=localStorage.getItem('accessToken')
    accessToken===null?setIsLogged(false):setIsLogged(true)
 },[])

  
  const handleSignup=()=>{
    navigate("/signup")
  }

  const handleLogin=()=>
  {
    navigate("/login")
  }


   // function for handleIconClick

   const handleIconClick=()=>
   {
      navigate("/cart")
   }
  

    //logout Function

    const handleLogout = async () => {
      console.log('called');
      const auth = getAuth();
      signOut(auth).then(() => {
        localStorage.clear()
      console.log('clear');

          navigate('/login',{replace:true})
      }).catch((error) => {
          console.log("error is" +error)
      });
  }


  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/" className="mx-3">da Factory adda</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/" className="mr-3">Home</Nav.Link>
        <Nav.Link href="#link" className="mr-3">Store</Nav.Link>
        <Nav.Link href="#link" className="mr-3">Top Selling</Nav.Link>
        <Nav.Link href="#link" className="mr-3">New Stock</Nav.Link>
        <NavDropdown title="Dropdown" className="mr-3" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>      
      </Nav>
      {
        isLoggedIN ===false?<h6 className="my-2 mr-2"> hello</h6>:<h6 className="my-2 mr-2"> hello {props.userName}</h6>
        
      }
      {
    
     isLoggedIN === false?<Drop handleSignup={handleSignup} handleLogin={handleLogin} className="justify-content-end"/>:<Drop1 handleLogout={handleLogout}/>
      }
     <h4 className="mx-3 my-2 cart"><i className="fa-solid fa-cart-shopping" onClick={handleIconClick}></i></h4>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}
export default Navv;



