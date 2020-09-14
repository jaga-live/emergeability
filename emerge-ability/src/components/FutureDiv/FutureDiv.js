import React from "react";
import { Col, Row } from "reactstrap";
import "./FutureDiv.css";
import ScrollAnimation from "react-animate-on-scroll";

const FutureDiv = (props) => {
  return (
    <div id="future-div">
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
                <br />
                <br />
                <span className="dark-blue">Abilities Beyond Bounda</span>
                <span className="orange">ries</span>
              </h3>
              <br />
              <p className="semi-bold dark text-left">
                {/* Education is not a privilege, it is a fundamental human right.
                The UNESCO: Global Education 2030 Agenda Sustainable Development
                Goal (SDG) 4 on education calls for inclusive and equitable
                quality education. */}
                Education is not a privilege, it is a fundamental human right.
                The UNESCO: Global Education 2030 Agenda Sustainable Development
                Goal (SDG) 4 on education calls for inclusive and equitable
                quality education.
                <br /> 75 million school-aged children and youth are in
                desperate need of educational support, either in danger of, or
                already missing out on their education. Children and young
                people with disabilities and neurodivergent conditions are the
                most marginalised and vulnerable in many countries, and they are
                most likely to be excluded from education and future employment.
                They often face a multitude of barriers from an inaccessible
                learning environment to a lack of support and understanding of
                their unique learning and thinking processes.
                <br />
                <br /> Neurodiversity (usually abbreviated to ND) is an umbrella
                term which includes a range of conditions including
                <p>ADHD</p>
                <p>Autism Spectrum Conditions</p>
                <p>Dyslexia</p>
                <p>Dyspraxia</p>
                <p>Dyscalculia</p> <p>Dysgraphia</p>
                <p>Developmental Language Disorders</p>{" "}
                <p>Tourette’s Syndrome</p>
                Neurodiversity considers brain differences as normal, rather
                than deficits. Embracing this concept can benefit children and
                young people with learning and thinking differences. Inclusive
                education advocates that all children can learn and that all
                pupils, including many considered to be disabled, need some form
                of support in learning during their time at school. The
                understanding of inclusive education is different across various
                regions of the world. The studies show that there are serious
                gaps in the developing nations’ education system to make it fit
                for everyone in a community. Therefore, EmergeAbility aims to
                make education more accessible to all the children to carve
                their paths with their potential to reach their destiny.
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
        <Col style={{ padding: 0 }} lg="6" md="12" sm="12" xs="12">
          <div className="future-div-image"> </div>
          {/* <img
            src={require("../../assets/images/FutureDiv/education.jpg")}
            alt=" "
            className="about-us-image"
          /> */}
        </Col>
      </Row>
    </div>
  );
};

export default FutureDiv;
