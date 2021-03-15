import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Book from "../Book";
import Bdata from "../Bdata";
// import FullRowBook from "./FullRowBook.jsx"

const ListBooks = (props) => {

    const [arr1, setArr1] = useState([]);
    const [arr2, setArr2] = useState([]);
    useEffect(() => {
        setArr1(Bdata.slice(0, Bdata.length - 5))
        setArr2(Bdata.slice(Bdata.length - 5, Bdata.length))
    }, [])


    return (
        <>
            <div className='container-fluid d-flex justify-content-center nav_bg my-xl-5 my-lg-4 my-md-3'>
                <div className='row mt-3'>
                    <div className='col-12'>
                        <div>
                            <NavLink className='NavClass' to='/listbooks'>
                                <p className='px-0 px-md-4 secName'>{props.secname1}</p>
                            </NavLink>
                        </div>
                        <div className='d-flex flex-row'>
                            {arr1.map((val, ind) => {
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
                        <div className='d-flex flex-row'>
                            {arr2.map((val, ind) => {
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

export default ListBooks;
