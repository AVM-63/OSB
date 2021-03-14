/** @format */

import React from "react";
import CarouselRow from "./ComponentsF/CarouselRow";
// import Bdata from "./ComponentsF/Bdata";

const Home = () => {
  return (
    <>
      <CarouselRow secname1='Top Sellers' />
      <CarouselRow secname1='Recently Added' />
      <CarouselRow secname1='Mystery' />
    </>
  );
};

export default Home;
