import React from "react";
// import NavCat from "../ComponentsF/NavCat";
import Bdata from "../ComponentsF/Bdata";
import CategoryPage from "./CategoryPage";



const TopSellers = () => {

    const CategArray = [];
    var j = 0;
    for (var i = 0; i < Bdata.length; i++) {
        if (Bdata[i].topSeller === true) {
            CategArray[j] = Bdata[i];
            j++;
        }
        else {
            continue;
        }
    }


    return (
        <>
            {/* <NavCat /> */}
            <CategoryPage array={CategArray} />
        </>
    );
};

export default TopSellers;
