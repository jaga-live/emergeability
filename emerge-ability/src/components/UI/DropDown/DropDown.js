import React, { useState } from "react";
import {
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  // ButtonDropdown,
  UncontrolledDropdown,
} from "reactstrap";

const MyDropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <UncontrolledDropdown
      toggle={() => setIsOpen((prev) => !prev)}
      isOpen={isOpen}
      className={props.className}
      direction={props.direction ? props.direction : "down"}
      nav={props.nav}
      inNavbar={props.inNavbar}
    >
      <DropdownToggle
        caret
        color="primary"
        nav={props.nav}
        style={{ color: props.color ? props.color : "white" }}
      >
        {props.placeholder}
      </DropdownToggle>
      <DropdownMenu
        onClick={() =>
          props.closeOnClick ? setIsOpen(false) : setIsOpen(true)
        }
      >
        {props.options.map((el, index) => (
          <DropdownItem
            onClick={() => {
              props.closeOnClick ? setIsOpen(false) : setIsOpen(true);
              if (props.onClick) {
                props.onClick(el.id, el.name);
              } else if (el.onClick) {
                el.onClick();
              } else {
                return;
              }
            }}
            key={index}
            disabled={el.isDisabled}
            header={el.isHeading}
            divider={el.isDivider}
          >
            <p
              style={{
                outline: "none",
                color: props.color ? props.color : "white",
              }}
            >
              {el.name}
            </p>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default MyDropDown;
