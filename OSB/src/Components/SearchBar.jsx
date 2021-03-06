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
      <div className=" searchbar mx-5 px-5 d-none d-lg-block">
        <div className="d-flex row justify-content-center align-items-center">
          <div className="col-10">
            <input
              type="text"
              placeholder="Search by Title"
              onChange={inputEvent}
              value={bookSearch}
            />
          </div>
          <div className="col-2">
            <button className="clearbutton" onClick={clear}>
              X
            </button>
          </div>

          <Sresult name={bookSearch} val={initData} clear={clear} />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
