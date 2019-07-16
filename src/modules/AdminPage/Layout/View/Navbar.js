import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

function NavBar() {
  const data = useSelector(state => state.LayoutReducers);
  const dispatch = useDispatch();
  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      <Button color="info" onClick={() => dispatch({ type: "SET_TOGLE" })}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <NavbarToggler onClick={() => dispatch({ type: "SET_TOGLE" })} />
      <Collapse isOpen={data.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#">page</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">page</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">page</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">page</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
