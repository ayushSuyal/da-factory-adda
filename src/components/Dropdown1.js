import React from "react";
import { Dropdown } from "react-bootstrap";
const Drop1 =(props)=>
{
return(
<Dropdown className="dpp">
  <Dropdown.Toggle variant="dark" id="dropdown-basic">
  <i className="fa-solid fa-user"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1" onClick={props.handleLogin}>Order</Dropdown.Item>
    <Dropdown.Item href="#/action-2" onClick={props.handleSignup}>Cart</Dropdown.Item>
    <Dropdown.Item href="#/action-3" onClick={props.handleSignup}>Wishlist</Dropdown.Item>
    <Dropdown.Item href="#/action-4" onClick={props.handleSignup}>Account</Dropdown.Item>
    <Dropdown.Item href="#/action-5" onClick={props.handleLogout}>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
);
}
export default Drop1;


