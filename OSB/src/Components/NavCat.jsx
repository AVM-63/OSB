import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navcat1 container-fluid nav_bg">
        <div className="row">
          <div className="col-12 col-lg-10 my-2 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                {/* <NavLink className='navbar-brand' to='/categories'>
                                    OneStoreBooks
                                </NavLink> */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent1"
                  aria-controls="navbarSupportedContent1"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent1"
                >
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-2 px-2">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/categories/all-books"
                      >
                        All Books
                      </NavLink>
                    </li>
                    <li className="nav-item mx-2 px-2">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/categories/top-sellers"
                      >
                        Top Sellers
                      </NavLink>
                    </li>
                    <li className="nav-item mx-2 px-2">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/categories/biographies"
                      >
                        Biographies
                      </NavLink>
                    </li>

                    <li className="nav-item mx-2 px-2">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/categories/fiction"
                      >
                        Fiction
                      </NavLink>
                    </li>
                    <li className="nav-item mx-2 px-2">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/categories/mystery"
                      >
                        Mystery
                      </NavLink>
                    </li>
                    <li className="nav-item mx-2 px-2">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/categories/true-crime"
                      >
                        True Crime
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
