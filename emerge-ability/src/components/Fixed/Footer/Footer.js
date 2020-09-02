import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div>
      <div className="bg-blue Footer d-flex justify-content-between">
        <h3 className="white text-left">Emerge Ability</h3>
        <div className="contact-social-media">
          <img
            src={require("../../../assets/images/icons/social-icons/facebook.png")}
            alt=" "
            name="facebook"
          />
          <img
            src={require("../../../assets/images/icons/social-icons/linkedin.svg")}
            alt=" "
            name="linkedin"
          />
          <img
            src={require("../../../assets/images/icons/social-icons/instagram.svg")}
            alt=" "
            name="instagram"
          />
        </div>
        <p className="white text-left">&copy; copyright by emerge ability</p>
      </div>
    </div>
  );
};

export default Footer;
