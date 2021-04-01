import React, { useState, Component } from 'react';
import { NavLink } from 'react-router-dom';
import validate from './validateInfo';
import MainAccountPage from '../MainAccountPage';
import './Form.css';

let log = false;
const FormLogin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // if (localStorage.getItem('account')) return <Redirect to="/myaccount" />;
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
          alert('Invalid Info!');
        } else {
          // alert('Yessir! You have an account!');
          let obj = { data: result };
          localStorage.setItem('account', JSON.stringify(obj));
          props.props.history.push('/myaccount/user');
          // props.props.history.push('/categories/all-books');
        }
      });
  };
  // console.log('mama', props);
  console.log('prev');

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
          Log In
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
