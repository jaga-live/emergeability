import React from "react";
import { Col, Row } from "reactstrap";
import "./FutureDiv.css";
import ScrollAnimation from "react-animate-on-scroll";

const FutureDiv = (props) => {
  return (
    <div>
      <Row className="zero my-flex">
        <Col
          lg="6"
          md="12"
          sm="12"
          xs="12"
          className="d-flex align-items-center justify-content-center flex-column"
        >
          <ScrollAnimation animateIn="animate__fadeInLeft animate__faster">
            <div className="future-div">
              <h3 className="bold">
                <span className="dark-blue">E d u c a t</span>
                <span className="orange"> i o n</span>
              </h3>
              <br />
              <p className="semi-bold dark">
                Education is not a privilege, it is a fundamental human right.
                The UNESCO: Global Education 2030 Agenda Sustainable Development
                Goal (SDG) 4 on education calls for inclusive and equitable
                quality education.
              </p>
              <br />
              {/* <h3 className="bold">
                <span className="dark-blue">O u r &nbsp;M i s s i </span>
                <span className="orange">o n</span>
              </h3>
              <br />
              <p className="semi-bold dark">
                Our goal is to remove barriers and ensure access and
                participation for all young people in education and employment
                regardless of cognitive differences. We are building an open,
                inclusive ecosystem to bring education and employment into the
                21st Century.
              </p>
              <br />
              <h3 className="bold">
                <span className="dark-blue">O u r &nbsp;V i s i</span>
                <span className="orange"> o n</span>
              </h3>
              <br />
              <p className="semi-bold dark">
                Enable individuals to reach their full potential by highlighting
                their unique strengths/abilities and giving them the skills they
                need to succeed in this new world.
              </p> */}
            </div>
          </ScrollAnimation>
        </Col>
        <Col style={{ padding: 0 }} lg="6">
          <img
            src={require("../../assets/images/FutureDiv/education.jpg")}
            alt=" "
            className="about-us-image"
          />
        </Col>
      </Row>
    </div>
  );
};

export default FutureDiv;
