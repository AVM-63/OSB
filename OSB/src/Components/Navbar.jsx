import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg sticky">
        <div className="row">
          <div className="col-12 col-lg-10 my-2 mx-auto ">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/categories/all-books">
                  OneStoreBooks
                </NavLink>

                <SearchBar />

                <button
                  className="navbar-toggler d-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  {/* <form class="d-flex">
                    <input class="form-control me-2 searchField" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn" type="submit">Search</button>
                  </form> */}

                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-2 px-2">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link d-none d-md-block"
                        to="/categories/all-books"
                      >
                        Home
                      </NavLink>
                    </li>

                    <li className="nav-item mx-2 px-2">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link d-none d-md-block"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>

                    <li className="nav-item mx-2 px-2">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/myaccount/form"
                      >
                        Account
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
