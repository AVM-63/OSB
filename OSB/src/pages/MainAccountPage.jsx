import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const MainAccountPage = (props) => {
  const [localArray, setLocalArray] = useState([]);
  useEffect(() => {
    let temp = localStorage.getItem('account');
    if (temp) {
      setLocalArray(JSON.parse(temp));
    }
  }, []);

  return (
    <>
      {localArray.length != 0 ? (
        <section
          id="header3"
          className="d-flex align-items-center my-auto mt-5 pt-5 "
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row d-flex align-items-start justify-content-center">
                  <div className="col-md-3">
                    <h1 className="accountName">
                      {localArray.data[0].username}
                    </h1>
                    <p className="mb-2 ">{localArray.data[0].email}</p>
                    <div className="mt-4">
                      <NavLink
                        to="/myaccount/form2"
                        className="btn btn-primary buttonS"
                        onClick={() => localStorage.clear()}
                      >
                        Log Out
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Spinner className="loading" animation="border" variant="warning" />
      )}
    </>
  );
};

export default MainAccountPage;
