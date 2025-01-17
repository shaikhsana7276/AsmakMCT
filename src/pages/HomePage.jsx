import React from "react";
import Carousel from "../components/Carousel";
import ServicesCards from "../components/ServicesCards";
import Herosection from "../components/Herosection";
import MapSection from "../components/MapSection";
const HomePage = () => {
  return <>
  <Carousel/>
    <ServicesCards/>
    <Herosection/> <br /><br />
    <MapSection/>
  </>
};

export default HomePage;
