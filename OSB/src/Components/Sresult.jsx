import React, { useState, useEffect } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';

let classKeys = ['Steve Jobs'];
const Sresult = ({ name, val, clear }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(name);
    if (val.length != 0) {
      let tempo = val.filter((b) =>
        String(b.bookN).toLowerCase().startsWith(name.toLowerCase())
      );
      console.log('Mama', data);
      setData(tempo);
    }
  }, [name]);

  return (
    <>
      {data.length != 0 ? (
        <div className="dropdown wrapSearch">
          <h3 className="bookName">
            {data.length != 0 &&
              name != '' &&
              data.map((d) => {
                return (
                  <Link to={`/book/${d.id}`} onClick={clear}>
                    <div className="searchResult">{d.bookN}</div>
                  </Link>
                );
              })}
          </h3>
        </div>
      ) : name != '' ? (
        <p>Not found...</p>
      ) : null}
    </>
  );
};

export default Sresult;