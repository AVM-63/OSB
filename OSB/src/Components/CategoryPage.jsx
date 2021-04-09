import React from 'react';
import Book from './Book';
import NavCat from './NavCat';
const CategoryPage = (props) => {
  return (
    <>
      <NavCat />
      <div className="container d-flex nav_bg my-xl-5 my-lg-4 my-md-3">
        <div className="row mt-3 ">
          {props.array.map((val, ind) => {
            return (
              <div className="col-xxl-2 col-xl-3 col-md-4 col-6 my-3 ">
                <Book
                  key={ind}
                  id={val.id}
                  authorN={val.authorN}
                  imgsrc={val.imgsrc}
                  booklink={val.booklink}
                  bookN={val.bookN}
                  price={val.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
