import React, { useState, useEffect } from 'react';
import Sresult from './Sresult';

const SearchBar = () => {
  const [bookSearch, setImg] = useState('');
  const [initData, setInit] = useState([]);
  const inputEvent = (event) => {
    const data = event.target.value;
    setImg(data);
  };
  const clear = () => {
    setImg('');
  };
  useEffect(() => {
    // console.log('haa');
    fetch('http://localhost:2000/getAll', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((val) => {
        // your data is in val
        // console.log('Sresult Value hai ye:', val);
        setInit(val);
      });
  }, []);

  return (
    <>
      <div className="searchbar mx-5 px-5">
        <input
          type="text"
          placeholder="Search"
          onChange={inputEvent}
          value={bookSearch}
        />

        <Sresult name={bookSearch} val={initData} clear={clear} />
      </div>
    </>
  );
};

export default SearchBar;
