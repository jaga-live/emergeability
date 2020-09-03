import React from "react";
import "./SpecialPara.css";
import ScrollAnimation from "react-animate-on-scroll";
import GreenLine from "../UI/GreenLine/GreenLine";

const SpecialPara = (props) => {
  return (
    <div className="give-more-top-space give-more-bottom-space bg-orange white SpecialPara">
      <ScrollAnimation animateIn="animate__zoomIn">
        <h1 className="animate__zoomI">Neurodiversity</h1>
        <GreenLine />
        <br />
      </ScrollAnimation>
      <p>
        Neurodiversity (usually abbreviated to ND) is an umbrella term which
        includes a range of conditions including
      </p>
      <br />
      <div className="points">
        {/* <ScrollAnimation animateIn="animate__fadeInLeft"> */}
        <p>
          {" "}
          <span>
            <img
              src={require("../../assets/images/icons/bullet.png")}
              className="bullet"
              alt=" "
            />
          </span>{" "}
          &nbsp;&nbsp; ADHD
        </p>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="animate__fadeInRight"> */}
        <p>
          <span>
            <img
              src={require("../../assets/images/icons/bullet.png")}
              className="bullet"
              alt=" "
            />
          </span>{" "}
          &nbsp;&nbsp;Autism Spectrum Conditions
        </p>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="animate__fadeInLeft"> */}
        <p>
          <span>
            <img
              src={require("../../assets/images/icons/bullet.png")}
              className="bullet"
              alt=" "
            />
          </span>{" "}
          &nbsp;&nbsp;Dyslexia
        </p>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="animate__fadeInRight"> */}
        <p>
          <span>
            <img
              src={require("../../assets/images/icons/bullet.png")}
              className="bullet"
              alt=" "
            />
          </span>{" "}
          &nbsp;&nbsp;Dyspraxia
        </p>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="animate__fadeInLeft"> */}
        <p>
          <span>
            <img
              src={require("../../assets/images/icons/bullet.png")}
              className="bullet"
              alt=" "
            />
          </span>{" "}
          &nbsp;&nbsp;Dyscalculia
        </p>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="animate__fadeInRight"> */}
        <p>
          <span>
            <img
              src={require("../../assets/images/icons/bullet.png")}
              className="bullet"
              alt=" "
            />
          </span>{" "}
          &nbsp;&nbsp;Dysgraphia
        </p>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="animate__fadeInLeft"> */}
        <p>
          <span>
            <img
              src={require("../../assets/images/icons/bullet.png")}
              className="bullet"
              alt=" "
            />
          </span>{" "}
          &nbsp;&nbsp;Developmental Language Disorders
        </p>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="animate__fadeInRight"> */}
        <p>
          <span>
            <img
              src={require("../../assets/images/icons/bullet.png")}
              className="bullet"
              alt=" "
            />
          </span>{" "}
          &nbsp;&nbsp;Tourette’s Syndrome
        </p>
        {/* </ScrollAnimation> */}
      </div>
    </div>
  );
};

export default SpecialPara;
