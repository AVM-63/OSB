import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import RowBook from "./RowBook";
import Bdata from "../Bdata";


const CarouselRow = (props) => {

  // const [arr1,setArr1] = useState([]);
  // const [arr2,setArr2] = useState([]);
  // useEffect(() => {
  //     setArr1(Bdata.slice(0, Bdata.length-5))
  //     setArr2(Bdata.slice(Bdata.length-5, Bdata.length))
  // },[]) 

  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  useEffect(() => {
    setArr1(Bdata.slice(0, 5))
    setArr2(Bdata.slice(5, 10))
  }, [])

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <RowBook secname1={props.secname1} array={arr1} catLink={props.catLink} />
      </div>
      <div>
        <RowBook secname1={props.secname1} array={arr2} catLink={props.catLink} />
      </div>
    </Slider>
  )
}

export default CarouselRow
