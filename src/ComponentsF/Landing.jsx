import React from "react";
import { NavLink } from "react-router-dom";

const Landing = (props) => {
  return (
    <>
      <section id="header1" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="highlightAbout">{props.name}</h1>
                  <p className="mb-2 ">{props.para}</p>
                  <div className="mt-4">
                    <NavLink to={props.visit} className="btn btn-primary buttonS">{props.btname1}</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgsrc} className="img-fluid animated aboutImg" alt="home img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
