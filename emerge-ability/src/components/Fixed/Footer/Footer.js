import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div>
      <div className="Footer d-flex justify-content-between flex-wrap">
        <h3 className="text-left">Emerge Ability</h3>
        <div className="contact-social-media" style={{ margin: "auto" }}>
          {/* <img
              src={require("../../assets/images/icons/social-icons/facebook.png")}
              alt=" "
              name="facebook"
            /> */}
          <a href="#" className="fa fa-facebook"></a>
          {/* <img
              src={require("../../assets/images/icons/social-icons/linkedin.svg")}
              alt=" "
              name="linkedin"
            /> */}
          <a href="#" className="fa fa-linkedin"></a>
          {/* <img
              src={require("../../assets/images/icons/social-icons/instagram.svg")}
              alt=" "
              name="instagram"
            /> */}
          <a href="#" className="fa fa-instagram"></a>
        </div>
        <p className="text-left">&copy; copyright 2020 by emerge ability</p>
      </div>
    </div>
  );
};

export default Footer;
