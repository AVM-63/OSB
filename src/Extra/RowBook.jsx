import React from "react";
import Book from "../Book";
// import Navbar from "./Navbar";
// import Bdata from "./Bdata";
import { NavLink } from "react-router-dom";

const RowBook = (props) => {

  return (
    <>
      <div className='container-fluid d-flex justify-content-center nav_bg my-xl-5 my-lg-4 my-md-3'>
        <div className='row mt-3'>
          <div className='col-12'>
            <div>
              <NavLink className='NavClass' to={props.catLink}>
                <p className='px-0 px-md-4 secName'>{props.secname1}</p>
              </NavLink>
            </div>
            <div className='d-flex flex-row'>
              {/* {arr1.map((val,ind) => {
                    return (<Book
                    key = {ind}
                    authorN={val.authorN}
                    imgsrc={val.imgsrc}
                    booklink={val.booklink}
                    bookN={val.bookN}
                    />)
                    })} */}
              {props.array.map((val, ind) => {
                return (
                  <Book
                    key={ind}
                    authorN={val.authorN}
                    imgsrc={val.imgsrc}
                    booklink={val.booklink}
                    bookN={val.bookN}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RowBook;
