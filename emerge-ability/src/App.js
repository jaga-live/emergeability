import React from "react";
import "./App.css";
import Header from "./components/Fixed/Header/Header";
import Carousel from "./components/UI/Carousel/Carousel";
import { carouselData } from "./components/UI/Carousel/CarouselImages";
import MeetOurTeam from "./components/MeetOurTeam/MeetOurTeam";
import AboutUs from "./components/About Us/AboutUs";
import SignUp from "./components/SignUp/SignUp";
import SpecialPara from "./components/SpecialPara/SpecialPara";
import Footer from "./components/Fixed/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel images={carouselData} controls={false} />
      <SpecialPara />
      <AboutUs />
      <MeetOurTeam />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
