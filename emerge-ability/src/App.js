import React from "react";
import "./App.css";
import Header from "./components/Fixed/Header";
import Carousel from "./components/UI/Carousel/Carousel";
import { carouselData } from "./components/UI/Carousel/CarouselImages";
import MeetOurTeam from "./components/MeetOurTeam/MeetOurTeam";
import AboutUs from "./components/About Us/AboutUs";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel images={carouselData} controls={false} />
      <AboutUs />
      <MeetOurTeam />
      <SignUp />
    </div>
  );
}

export default App;
