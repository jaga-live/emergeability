import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div>
      <div className="Footer d-flex justify-content-between flex-wrap">
        <h3 className="text-left">Emerge Ability</h3>
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
        <p className="text-left">&copy; copyright by emerge ability</p>
      </div>
    </div>
  );
};

export default Footer;
