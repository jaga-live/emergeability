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
                name: "Our Initiatives",
                onClick: () => {
                  document.getElementById("our-initiatives").scrollIntoView();
                },
              },
              {
                name: "Our Mission",
                onClick: () => {
                  document.getElementById("our-mission").scrollIntoView();
                },
              },
              {
                name: "Our Vision",
                onClick: () => {
                  document.getElementById("our-vision").scrollIntoView();
                },
              },
            ]}
          />
        ),
      },
      { name: "Meet our team", to: "#meet-our-team" },
      { name: "Sign Up", to: "#signup" },
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
