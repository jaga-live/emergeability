import React from "react";
import { Row } from "reactstrap";
import "./MeetOurTeam.css";
import GreenLine from "../UI/GreenLine/GreenLine";
import ButtonWithIcon from "../UI/ButtonWithIcon/ButtonWithIcon";

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
        <div>
          <img
            src={require("../../assets/images/Meet Our Team/Leena Haque- CEO.JPG")}
            className="team-image"
            alt="2"
          />
          <p className="semi-bold faded-black">Leena Haque- CEO</p>
          <div className="contact-social-media" style={{ margin: "auto" }}>
            <img
              src={require("../../assets/images/icons/social-icons/facebook.png")}
              alt=" "
              name="facebook"
            />
            <img
              src={require("../../assets/images/icons/social-icons/linkedin.svg")}
              alt=" "
              name="linkedin"
            />
            <img
              src={require("../../assets/images/icons/social-icons/instagram.svg")}
              alt=" "
              name="instagram"
            />
          </div>
        </div>
        <div>
          <img
            src={require("../../assets/images/Meet Our Team/Bhuvana Meenakshi -COO.jpeg")}
            className="team-image"
            alt="1"
          />
          <p className="semi-bold faded-black">Bhuvana Meenakshi -COO</p>
          <div className="contact-social-media" style={{ margin: "auto" }}>
            <img
              src={require("../../assets/images/icons/social-icons/facebook.png")}
              alt=" "
              name="facebook"
            />
            <img
              src={require("../../assets/images/icons/social-icons/linkedin.svg")}
              alt=" "
              name="linkedin"
            />
            <img
              src={require("../../assets/images/icons/social-icons/instagram.svg")}
              alt=" "
              name="instagram"
            />
          </div>
        </div>
      </Row>
    </div>
  );
};

export default MeetOurTeam;
