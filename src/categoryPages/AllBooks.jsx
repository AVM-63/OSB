import React from "react";
import NavCat from "../ComponentsF/NavCat";
import Bdata from "../ComponentsF/Bdata";
import Book from "../ComponentsF/Book";



const AllBooks = () => {

    return (
        <>
            <NavCat />

            <div className='container d-flex nav_bg my-xl-5 my-lg-4 my-md-3'>
                <div className='row mt-3 '>
                    {Bdata.map((val, ind) => {
                        return (

                            <div className="col-xxl-2 col-xl-3 col-md-4 col-6 my-3 ">
                                <Book
                                    key={ind}
                                    authorN={val.authorN}
                                    imgsrc={val.imgsrc}
                                    booklink={val.booklink}
                                    bookN={val.bookN}
                                />
                            </div>

                        );
                    })}
                </div>
            </div>

        </>
    );
};

export default AllBooks;
