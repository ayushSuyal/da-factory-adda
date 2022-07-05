import React from "react";
import { Dropdown } from "react-bootstrap";
const Drop =(props)=>
{
return(
<Dropdown className="dpp">
  <Dropdown.Toggle variant="dark" id="dropdown-basic">
  <i className="fa-solid fa-user"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1" onClick={props.handleLogin}>Login</Dropdown.Item>
    <Dropdown.Item href="#/action-2" onClick={props.handleSignup}>Signup</Dropdown.Item>
    {/* <Dropdown.Item href="#/action-3" onClick={props.handleLogout}>Logout</Dropdown.Item> */}
  </Dropdown.Menu>
</Dropdown>
);
}
export default Drop;


