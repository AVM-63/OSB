import React, { useEffect, useState } from 'react';
import CategoryPage from "../../Components/CategoryPage";
import Bdata from "../../Components/Bdata";


const Topics = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // * This is the category to filter with
        let temp = props.match.params.category;
        switch (temp) {
            case "fiction": {
                let tempo = Bdata.filter(b => b.fiction === true);
                setData(tempo);
                break;
            }
            case "mystery": {
                let tempo = Bdata.filter(b => b.mystery === true);
                setData(tempo);
                break;
            }
            case "biographies": {
                let tempo = Bdata.filter(b => b.biographies === true);
                setData(tempo);
                break;
            }
            case "true-crime": {
                let tempo = Bdata.filter(b => b.trueCrime === true);
                setData(tempo);
                break;
            }
            case "top-sellers": {
                let tempo = Bdata.filter(b => b.topSeller === true);
                setData(tempo);
                break;
            }
            default: {
                setData(Bdata);
                break;
            }
        }
    }, [props.match.params.category]);

    return (
        <>
            {
                data.length !== 0 ? (
                    <CategoryPage array={data} />
                ) : (
                    <p>Loading...</p>
                )
            }
        </>
    )
}

export default Topics
