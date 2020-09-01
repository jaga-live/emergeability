import React from "react";
import { Col, Row } from "reactstrap";
import "./AboutUs.css";

const AboutUs = (props) => {
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
          <div className="about-us">
            <h1 className="bold">
              <span className="blue">A B O U T</span>
              <span className="green"> U S</span>
            </h1>
            <br />
            <p className="semi-bold">
              We are an innovative initiative with the aim to maximize the
              potential of individuals with cognitive differences via research
              and consultancy.{" "}
            </p>
            <br />
            <h3 id="our-mission">
              <span className="blue">OUR MISSI</span>
              <span className="green">ON</span>
            </h3>
            <br />
            <p className="semi-bold">
              Our goal is to remove barriers and ensure access and participation
              for all young people in education and employment regardless of
              cognitive differences. We are building an open, inclusive
              ecosystem to bring education and employment into the 21st Century.
            </p>
            <br />
            <h3 id="our-vision">
              <span className="blue">OUR VISI</span>
              <span className="green">ON</span>
            </h3>
            <br />
            <p className="semi-bold">
              Enable individuals to reach their full potential by highlighting
              their unique strengths/abilities and giving them the skills they
              need to succeed in this new world.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
