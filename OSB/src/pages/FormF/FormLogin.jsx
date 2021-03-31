import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import validate from './validateInfo';
import MainAccountPage from '../MainAccountPage';
import './Form.css';

let log = false;
const FormLogin = ({ submitForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:2000/signin', {
      method: 'POST',
      body: JSON.stringify({
        data: {
          email,
          password,
        },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log('value:', result);
        if (result.length == 0) {
          alert('You dont have an account!');
        } else {
          alert('Yessir! You have an account!');
        }
      });
  };

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>OneStoreBooks</h1>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Don't have an account? Make one{' '}
          <NavLink to="/myaccount/form">here</NavLink>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;
