import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./NavigationBar.css";

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ textAlign: "left" }}>
      <Navbar color={props.color ? props.color : "light"} light expand="md">
        <NavbarToggler
          style={{ outline: "none", border: "none" }}
          onClick={toggle}
        />
        <NavbarBrand href="/">{props.brand ? props.brand : null}</NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="mynavbar"
            navbar
            style={{ position: "absolute", right: 20 }}
          >
            {props.routes.map((el, index) =>
              el.component ? (
                <NavItem key={index}> {el.component}</NavItem>
              ) : (
                <NavItem key={index}>
                  <NavLink href={el.to}>{el.name}</NavLink>
                </NavItem>
              )
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
