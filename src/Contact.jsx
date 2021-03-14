/** @format */

import React from "react";
import Landing from "./ComponentsF/Landing";
import blogging from "../src/imageC/blogging.svg";

const Contact = () => {
  return (
    <>
      <Landing
        name='Contact Us'
        imgsrc={blogging}
        visit={"/"}
        btname1='Contact Now'
        para='We would love to hear your suggestions!'
      />
    </>
  );
};

export default Contact;
