import React from "react";
import CarouselRow from "./ComponentsF/CarouselRow";
// import Bdata from "../Bdata";
// import NavCat from "./ComponentsF/NavCat";
// import React from "react";
// import NavCat from "./ComponentsF/NavCat";
const Home = () => {
  return (
    <>
      {/* <NavCat /> */}
      <CarouselRow secname1='Top Sellers' catLink="/categories/top-sellers" catg="TopSeller" />
      <CarouselRow secname1='True Crime' catLink="/categories/true-crime" />
      <CarouselRow secname1='Fiction' catLink="/categories/fiction" />
      <CarouselRow secname1='Mystery' catLink="/categories/mystery" />
      <CarouselRow secname1='Biographies' catLink="/categories/biographies" />
    </>
  );
};

export default Home;
