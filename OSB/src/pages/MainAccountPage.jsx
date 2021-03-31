import React from 'react';
import { NavLink } from 'react-router-dom';

const MainAccountPage = (props) => {
  return (
    <>
      <section
        id="header3"
        className="d-flex align-items-center my-auto mt-5 pt-5 "
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row d-flex align-items-start justify-content-center">
                <div className="col-md-3">
                  <h1 className="accountName">User1</h1>
                  <p className="mb-2 ">useremail@gmail.com</p>
                  <div className="mt-4">
                    <NavLink
                      to="/myaccount/form2"
                      className="btn btn-primary buttonS"
                    >
                      Log Out
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-3">
                  <h1 className="accountName">Cart</h1>
                  <p className="mb-2 ">Book 1</p>
                  <p className="mb-2 ">Book 2</p>
                  <p className="mb-2 ">Book 3</p>
                  <p className="mb-2 ">Book 4</p>
                  <p className="mb-2 ">Book 5</p>
                  <div className="mt-4">
                    <NavLink
                      to="/myaccount/form"
                      className="btn btn-primary buttonS"
                    >
                      Checkout
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-3">
                  <h1 className="accountName">Recent Orders</h1>
                  <p className="mb-2 ">Book 1</p>
                  <p className="mb-2 ">Book 2</p>
                  <p className="mb-2 ">Book 3</p>
                  <p className="mb-2 ">Book 4</p>
                  <p className="mb-2 ">Book 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainAccountPage;
