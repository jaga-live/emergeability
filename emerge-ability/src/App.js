import React from "react";
import "./App.css";
import Header from "./components/Fixed/Header";
import Carousel from "./components/UI/Carousel/Carousel";
import { carouselData } from "./components/UI/Carousel/CarouselImages";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel images={carouselData} />
    </div>
  );
}

export default App;
