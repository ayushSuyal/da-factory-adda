import React from "react";
import { Dropdown } from "react-bootstrap";
const Drop2 =(props)=>
{
return(
<Dropdown className="dpp">
  <Dropdown.Toggle variant="dark" id="dropdown-basic">
    Qty:
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item  >1</Dropdown.Item>
    <Dropdown.Item  >2</Dropdown.Item>
    <Dropdown.Item  >3</Dropdown.Item>
    <Dropdown.Item  >4</Dropdown.Item>
    <Dropdown.Item  >5</Dropdown.Item>
    {/* <Dropdown.Item href="#/action-3" onClick={props.handleLogout}>Logout</Dropdown.Item> */}
  </Dropdown.Menu>
</Dropdown>
);
}
export default Drop2;


