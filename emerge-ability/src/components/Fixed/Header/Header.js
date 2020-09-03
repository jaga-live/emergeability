import React, { useState, useEffect } from "react";
import "./Header.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import DropDown from "../../UI/DropDown/DropDown";

const Header = (props) => {
  const [HeaderRoutes, setHeadetRoutes] = useState([]);

  useEffect(() => {
    setHeadetRoutes([
      {
        name: "Home",
        to: "#home",
      },
      {
        component: DropDown,
        componentProps: {
          nav: true,
          inNavbar: true,
          textColor: "white",
          backgroundColor: "transparent",
          activeTextColor: "#354052",
          activeBackgroundColor: "white",
          placeholder: "About Us",
          closeOnClick: true,
          options: [
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
                document.getElementById("about-us").scrollIntoView();
              },
            },
            {
              name: "Our Vision",
              onClick: () => {
                document.getElementById("about-us").scrollIntoView();
              },
            },
          ],
        },
      },
      {
        name: "Meet the team",
        to: "#meet-the-team",
      },
      {
        name: "Sign Up",
        to: "#signup",
      },
    ]);
  }, []);

  return (
    <NavigationBar
      backgroundColor="#A5997F"
      navLinkColor="white"
      activeColor="#354052"
      activeTextColor="#354052"
      activeBackgroundColor="white"
      tabs
      brand={
        // "Emerge Ability"
        <img
          className="top-logo"
          src={require("../../../assets/images/top-logo.png")}
          alt="logo"
        />
      }
      routes={HeaderRoutes}
    />
  );
};

export default Header;
