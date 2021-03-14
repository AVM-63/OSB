import React, { useState, useEffect } from "react";
import NavCat from "../ComponentsF/NavCat";
import Bdata from "../ComponentsF/Bdata";
import Book from "../ComponentsF/Book";



const TopSellers = () => {

    const TopSellerArray = [];
    var j = 0;
    for (var i = 0; i < Bdata.length; i++) {
        if (Bdata[i].topSeller === true) {
            TopSellerArray[j] = Bdata[i];
            j++;
        }
        else {
            continue;
        }
    }

    //  CHUNKING
    const groups = TopSellerArray.map((e, i) => {
        return i % 5 === 0 ? TopSellerArray.slice(i, i + 5) : null;
    }).filter(e => { return e; });
    console.log(groups);
    // 
    return (
        <>
            <NavCat />

            <div className='container-fluid d-flex justify-content-center nav_bg my-xl-5 my-lg-4 my-md-3'>
                <div className='row mt-3'>

                    {/* <div>
                            <p className='px-0 px-md-4 secName'>Top Sellers</p>
                        </div> */}
                    {/* {groups[0].map((val, ind) => {
                                return (
                                    <Book
                                        key={ind}
                                        authorN={val.authorN}
                                        imgsrc={val.imgsrc}
                                        booklink={val.booklink}
                                        bookN={val.bookN}
                                    />
                                );
                            })} */}
                    <div className="container-fluid d-flex flex-row">
                        <div className="row">
                            {TopSellerArray.map((val, ind) => {
                                return (

                                    <div className="col-3">
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

                </div>
            </div>

        </>
    );
};

export default TopSellers;
