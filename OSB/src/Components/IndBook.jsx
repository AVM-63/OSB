import React, { useEffect, useState } from 'react';
import NavCat from './NavCat';
import Spinner from 'react-bootstrap/Spinner';
import { NavLink, Route } from 'react-router-dom';

const IndBook = (props) => {
  const [dbData, setDB] = useState([]);
  const [book, setBook] = useState({});

  useEffect(() => {
    fetch('http://localhost:2000/getAll', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((val) => {
        setDB(val);
      });
  }, []);

  useEffect(() => {
    if (dbData.length != 0) {
      let temp2 = dbData.find(
        (b) => String(b.id) === String(props.match.params.id)
      );
      // console.log('find', temp2);
      setBook(temp2);
    }
  }, [dbData]);

  return (
    <>
      {book != {} && Object.keys(book).length !== 0 ? (
        <>
          <NavCat />
          <div className="container mt-lg-5">
            <div className="row d-flex justify-md-content-center align-items-center pt-5">
              <div className="col-12 col-md-4">
                <img
                  className="largeBookProperties"
                  src={book.imgsrc}
                  alt={book.bookN}
                ></img>
              </div>
              <div className="col-lg-6 col-md-12 mr-md-5 mx-lg-5 mx-xl-0 mt-4">
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
                <NavLink
                  to={{
                    pathname: '/myaccount',
                    bookContent: { bPrice: book.price },
                  }}
                >
                  <button
                    // onClick={displayRazorPay}
                    className="btn buyButton mt-3 "
                  >
                    Buy Now
                  </button>
                </NavLink>

                {/* <button
                  onClick={displayRazorPay}
                  className="btn cartButton ms-3 mt-3"
                >
                  Add to cart
                </button> */}
              </div>
            </div>
          </div>
          {/* <img className="bookProperties" src={book.imgsrc} alt={book.bookN}></img> */}
        </>
      ) : (
        <Spinner className="loading" animation="border" variant="warning" />
      )}
    </>
  );
};

export default IndBook;
