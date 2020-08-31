import React, { useState, useEffect } from "react";
import "./Header.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import DropDown from "../UI/DropDown/DropDown";

const Header = (props) => {
  const [HeaderRoutes, setHeadetRoutes] = useState([]);

  useEffect(() => {
    setHeadetRoutes([
      { name: "Home", to: "#home" },
      {
        component: (
          <DropDown
            nav
            inNavbar
            placeholder="About Us"
            options={[
              {
                name: "What We Do ?",
                onClick: () => {
                  document.getElementById("what-we-do").scrollIntoView();
                },
              },
              {
                name: "Why KidSens ?",
                onClick: () => {
                  document.getElementById("why-kidSens").scrollIntoView();
                },
              },
              {
                name: "Get involved",
                onClick: () => {
                  document.getElementById("get-involved").scrollIntoView();
                },
              },
            ]}
          />
        ),
      },
      { name: "Product", to: "#product" },
      { name: "Team", to: "#team" },
      { name: "Contact", to: "#contact" },
    ]);
  }, []);

  return (
    <NavigationBar
      brand={
        <img
          className="top-logo"
          src={require("../../assets/images/top-logo.png")}
          alt="logo"
        />
      }
      routes={HeaderRoutes}
    />
  );
};

export default Header;
