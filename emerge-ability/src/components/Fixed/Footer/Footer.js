import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="bg-faded-light-dark white">
      <div className="Footer d-flex justify-content-between flex-wrap">
        <h3 className="text-left">Emerge Ability</h3>
        <div className="contact-social-media" style={{ margin: "auto" }}>
          {/* <img
              src={require("../../assets/images/icons/social-icons/facebook.png")}
              alt=" "
              name="facebook"
            /> */}
          <i className="fa fa-facebook"></i>
          {/* <img
              src={require("../../assets/images/icons/social-icons/linkedin.svg")}
              alt=" "
              name="linkedin"
            /> */}
          <i className="fa fa-linkedin"></i>
          {/* <img
              src={require("../../assets/images/icons/social-icons/instagram.svg")}
              alt=" "
              name="instagram"
            /> */}
          <i className="fa fa-instagram"></i>
        </div>
        <p className="text-left">&copy; copyright 2020 by emerge ability</p>
      </div>
    </div>
  );
};

export default Footer;
