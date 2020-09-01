import React from "react";
import { Row } from "reactstrap";
import "./MeetOurTeam.css";
import GreenLine from "../UI/GreenLine/GreenLine";

const MeetOurTeam = (props) => {
  return (
    <div className="give-top-space" id="meet-our-team">
      <div className="heading">
        <h3>MEET THE TEAM</h3>
        <GreenLine />
      </div>
      <Row
        className="d-flex justify-content-center"
        style={{ margin: 0, padding: 0 }}
      >
        <img
          src={require("../../assets/images/Meet Our Team/Bhuvana Meenakshi -COO.jpeg")}
          className="team-image"
          alt="1"
        />
        <img
          src={require("../../assets/images/Meet Our Team/Leena Haque- CEO.JPG")}
          className="team-image"
          alt="2"
        />
      </Row>
    </div>
  );
};

export default MeetOurTeam;
