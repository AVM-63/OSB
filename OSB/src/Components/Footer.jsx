import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footer mt-5">
        <NavLink className="footerLink" to="/categories/all-books">
          <h1 className="navbar-brand2">OneStoreBooks</h1>
        </NavLink>
      </div>
    </>
  );
};

export default Footer;
