import React from "react";
import { Row } from "reactstrap";
import "./MeetOurTeam.css";
import GreenLine from "../UI/GreenLine/GreenLine";
// import ButtonWithIcon from "../UI/ButtonWithIcon/ButtonWithIcon";

const MeetOurTeam = (props) => {
  return (
    <div
      className="give-more-top-space give-more-bottom-space"
      id="meet-the-team"
    >
      <div className="heading">
        <h3>
          Meet the <span className="dark-blue">Team</span>
        </h3>
        <GreenLine />
      </div>
      <Row
        className="d-flex justify-content-center"
        style={{ margin: 0, padding: 0 }}
      >
        <div className="each-team">
          <img
            src={require("../../assets/images/Meet Our Team/Leena_Haque-_CEO.png")}
            className="team-image"
            alt="2"
          />
          <p className="semi-bold faded-black">Leena Haque</p>
          <p className="font-size-small">
            Co-founder | User Experience Designer | Innovation Architect
          </p>
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
        </div>
        <div className="each-team">
          <img
            src={require("../../assets/images/Meet Our Team/Bhuvana_Meenakshi_-COO.png")}
            className="team-image"
            alt="1"
          />
          <p className="semi-bold faded-black">Bhuvana Meenakshi</p>
          <p className="font-size-small">
            Co-founder| Gender Gap and Socio- Technology Research
            <br />| AR/VR/XR Evangelist | Mozillian| Wikimedian
          </p>
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
        </div>
      </Row>
    </div>
  );
};

export default MeetOurTeam;
