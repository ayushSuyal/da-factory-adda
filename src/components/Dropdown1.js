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
    <Dropdown.Item onClick={props.handleLogin}>Order</Dropdown.Item>
    <Dropdown.Item onClick={props.handleSignup}>Cart</Dropdown.Item>
    <Dropdown.Item onClick={props.handleSignup}>Wishlist</Dropdown.Item>
    <Dropdown.Item onClick={p}>Account</Dropdown.Item>
    <Dropdown.Item onClick={props.handleLogout}>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
);
}
export default Drop1;


