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
        style={{
          color: props.nav
            ? props.active
              ? props.activeTextColor
                ? props.activeTextColor
                : "white"
              : props.textColor
              ? props.textColor
              : "white"
            : props.textColor
            ? props.textColor
            : "white",
        }}
      >
        {props.placeholder}
      </DropdownToggle>
      <DropdownMenu
        style={{ outline: "none" }}
        onClick={() =>
          props.closeOnClick ? setIsOpen(false) : setIsOpen(true)
        }
      >
        {props.options.map((el, index) => (
          <DropdownItem
            style={{
              outline: "none",
            }}
            onClick={() => {
              props.closeOnClick ? setIsOpen(false) : setIsOpen(true);
              if (props.onClick) {
                props.onClick(el.id, el.name);
              }
              if (el.onClick) {
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
                margin: 0,
                color: isOpen
                  ? props.activeTextColor
                    ? props.activeTextColor
                    : "black"
                  : props.textColor
                  ? props.textColor
                  : "black",
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
