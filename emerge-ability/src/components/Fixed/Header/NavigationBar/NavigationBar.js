import React, { useState, useEffect } from "react";
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
  const [activeState, setActiveState] = useState([]);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    setActiveState(props.routes.map((el) => false));
  }, [props.routes]);

  const activeToggle = (id) => {
    setActiveState((prev) => {
      return prev.map((el, index) => {
        if (index === id) {
          return true;
        } else {
          return false;
        }
      });
    });
  };

  return (
    <div style={{ textAlign: "left" }} className="my-navbar-fixed">
      <Navbar
        color={props.backgroundColor ? props.backgroundColor : "light"}
        style={{ backgroundColor: props.backgroundColor }}
        light
        expand="md"
      >
        <NavbarToggler
          style={{ outline: "none", border: "none" }}
          onClick={toggle}
          className="my-nav-toggle"
        />
        <NavbarBrand
          href="/"
          style={{ color: props.navLinkColor ? props.navLinkColor : "white" }}
        >
          {props.brand ? props.brand : null}
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav
            pills={props.pills}
            tabs={props.tabs}
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
                    active={activeState[index]}
                    onClick={(event) => activeToggle(index)}
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
