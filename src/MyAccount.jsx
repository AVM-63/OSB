/** @format */

import React from "react";
import Landing from "./ComponentsF/Landing";
import home from "../src/imageC/book1.svg";

// import {NavLink} from "react-router-dom";
// import { Jumbotron, Container} from 'react-bootstrap';

const MyAccount = () => {
  return (
    <>
      <Landing
        name='OneStoreBooks'
        imgsrc={home}
        visit={"/"}
        btname1='Get Started'
        para='Your new favourite one stop shop when it comes to buying books online!'
      />
    </>
  );
};

export default MyAccount;
