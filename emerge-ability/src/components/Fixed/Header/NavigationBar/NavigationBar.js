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
    <div style={{ textAlign: "left" }} className="my-navbar-fixed">
      <Navbar
        color={props.backgroundColor ? props.backgroundColor : "light"}
        style={{ backgroundColor: props.backgroundColor }}
        light={props.light}
        expand="md"
        tabs
      >
        <NavbarToggler
          style={{ outline: "none", border: "none" }}
          onClick={toggle}
        />
        <NavbarBrand
          href="/"
          style={{ color: props.navLinkColor ? props.navLinkColor : "white" }}
        >
          {props.brand ? props.brand : null}
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="mynavbar"
            navbar
            style={{ position: "absolute", right: 20 }}
          >
            {props.routes.map((el, index) =>
              el.component ? (
                <NavItem className="mynavitem" key={index}>
                  {" "}
                  {el.component}
                </NavItem>
              ) : (
                <NavItem className="mynavitem" key={index}>
                  <NavLink
                    style={{
                      color: props.navLinkColor ? props.navLinkColor : "black",
                    }}
                    href={el.to}
                  >
                    {el.name}
                  </NavLink>
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
