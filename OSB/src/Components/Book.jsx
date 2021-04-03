import React from 'react';
import { NavLink } from 'react-router-dom';

const Book = (props) => {
  return (
    <>
      <div className="px-xs-1 px-sm-2 px-md-2 px-lg-3 px-xl-4 py-lg-2">
        <NavLink to={`/book/${props.id}`}>
          <img
            className="bookProperties optionBook"
            src={props.imgsrc}
            alt="Book"
          ></img>
        </NavLink>
        <div className="mt-2">
          <p className="my-0 bookName">{props.bookN}</p>
          <p className="my-0 authorName">{props.authorN}</p>
          <p className="my-0 priceTag">₹{props.price}</p>
        </div>
      </div>
    </>
  );
};

export default Book;
