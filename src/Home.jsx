import React from "react";
import CarouselRow from "./ComponentsF/CarouselRow";
// import Bdata from "./ComponentsF/Bdata";

const Home = () => {
  return (
    <>
      <CarouselRow secname1='Top Sellers' catLink="/categories/top-sellers" catg="TopSeller" />
      <CarouselRow secname1='True Crime' catLink="/categories/true-crime" />
      <CarouselRow secname1='Fiction' catLink="/categories/fiction" />
      <CarouselRow secname1='Mystery' catLink="/categories/mystery" />
      <CarouselRow secname1='Biographies' catLink="/categories/biographies" />
    </>
  );
};

export default Home;
