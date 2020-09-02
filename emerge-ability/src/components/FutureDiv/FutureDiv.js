import React from "react";
import { Col, Row } from "reactstrap";
import "./FutureDiv.css";
import ScrollAnimation from "react-animate-on-scroll";

const FutureDiv = (props) => {
  return (
    <div>
      <Row className="zero">
        <Col style={{ padding: 0 }} lg="6" md="12" sm="12" xs="12">
          <img
            src={require("../../assets/images/About Us/1.jpg")}
            alt=" "
            className="about-us-image"
          />
        </Col>
        <Col lg="6" md="12" sm="12" xs="12">
          <ScrollAnimation animateIn="animate__fadeInRight animate__faster">
            <div className="about-us" id="about-us">
              <h3 className="bold">
                <span className="dark-blue">A b o u t</span>
                <span className="orange"> U s</span>
              </h3>
              <br />
              <p className="semi-bold dark">
                We are an innovative initiative with the aim to maximize the
                potential of individuals with cognitive differences via research
                and consultancy.{" "}
              </p>
              <br />
              <h3 id="our-mission" className="bold">
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
              <h3 id="our-vision" className="bold">
                <span className="dark-blue">O u r &nbsp;V i s i</span>
                <span className="orange"> o n</span>
              </h3>
              <br />
              <p className="semi-bold dark">
                Enable individuals to reach their full potential by highlighting
                their unique strengths/abilities and giving them the skills they
                need to succeed in this new world.
              </p>
            </div>
          </ScrollAnimation>
        </Col>
      </Row>
    </div>
  );
};

export default FutureDiv;
