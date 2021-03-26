import React from "react";
// import NavCat from "../ComponentsF/NavCat";
import Bdata from "../../Bdata";
import CategoryPage from "../../../pages/categoryPages/CategoryPage";


const AllBooks = () => {

    return (
        <>
            {/* <NavCat /> */}
            <CategoryPage array={Bdata} />
        </>
    );
};

export default AllBooks;
