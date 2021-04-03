import React, { useEffect, useState } from 'react';
import CategoryPage from '../../Components/CategoryPage';
// import Bdata from '../../Components/Bdata';
import Spinner from 'react-bootstrap/Spinner';

const Topics = (props) => {
  const [initData, setInit] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log('haa');
    fetch('http://localhost:2000/getAll', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((val) => {
        // your data is in val
        // console.log("Value hai ye:", val);
        setInit(val);
      });
  }, []);

  useEffect(() => {
    // console.log(initData);
    // * This is the category to filter with
    if (initData.length !== 0) {
      let temp = props.match.params.category;
      switch (temp) {
        case 'fiction': {
          let tempo = initData.filter((b) => b.fiction === 1);
          setData(tempo);
          break;
        }
        case 'mystery': {
          let tempo = initData.filter((b) => b.mystery === 1);
          setData(tempo);
          break;
        }
        case 'biographies': {
          let tempo = initData.filter((b) => b.biographies === 1);
          setData(tempo);
          break;
        }
        case 'true-crime': {
          let tempo = initData.filter((b) => b.trueCrime === 1);
          setData(tempo);
          break;
        }
        case 'top-sellers': {
          let tempo = initData.filter((b) => b.topSeller === 1);
          setData(tempo);
          break;
        }
        default: {
          setData(initData);
          break;
        }
      }
    }
  }, [props.match.params.category, initData]);

  return (
    <>
      {data.length !== 0 ? (
        <>
          <CategoryPage array={data} />
        </>
      ) : (
        <Spinner className="loading" animation="border" variant="warning" />
      )}
    </>
  );
};

export default Topics;
