import React, { useEffect, useState } from 'react';
import Bdata from "./Bdata";
import NavCat from "./NavCat";
// import { NavLink } from "react-router-dom";


const IndBook = (props) => {
    const [book, setBook] = useState({});
    useEffect(() => {
        console.log(props)
        let temp = Bdata.find(b => String(b.id) === String(props.match.params.id));
        setBook(temp);
    }, [props])
    return (
        <>
            {
                Object.keys(book).length !== 0 ? (
                    // your code here
                    <>
                        <NavCat />
                        <div className="container mt-5">
                            <div className="row d-flex pt-5">
                                <div className="col-4 ">
                                    <img className="largeBookProperties" src={book.imgsrc} alt={book.bookN}></img>
                                </div>
                                <div className="col-6 mt-4">
                                    <p className="explainer pt-3 my-0">Book</p>
                                    <span className="firstLink">
                                        <h1 className="largeBookName my-0">{book.bookN}</h1>
                                    </span>
                                    <p className="explainer pt-3 my-0">Author</p>
                                    <h1 className="largeAuthorName my-0">{book.authorN}</h1>
                                    <p className="explainer pt-3 my-0">Description</p>
                                    <p className="bookDescription my-0">{book.bookDesc}</p>
                                    <p className="explainer pt-3 my-0">Price</p>
                                    <p className="bookDescription my-0">₹{book.price}</p>
                                    <button className="btn buyButton mt-3">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        {/* <img className="bookProperties" src={book.imgsrc} alt={book.bookN}></img> */}
                    </>
                ) : <p>Loading...</p>
            }
        </>
    );
};

export default IndBook;

