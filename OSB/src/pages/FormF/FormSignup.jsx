import React, { useState } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import validate from './validateInfo';
import UseForm from './UseForm';
import FormSuccess from './FormSuccess';
import './Form.css';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

const FormSignup = ({ submitForm }) => {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setpassword2] = useState('');
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      'Printing data:',
      username,
      fullname,
      number,
      email,
      password,
      password2
    );
    // const fakepush = 24;
    if (password2 != password) {
      // console.log('Passwords arent same!');
      NotificationManager.warning(
        'Please try again',
        "Passwords don't match",
        3000
      );
      // alert("Passwords don't match");
    } else {
      // alert('Account Created!');
      NotificationManager.success('Account Created', 'Congratulations!');
      setTimeout(() => {
        history.push('/categories/all-books');
      }, 2000);

      fetch('http://localhost:2000/signup', {
        method: 'POST',
        body: JSON.stringify({
          data: {
            username,
            fullname,
            email,
            number,
            password,
            password2,
          },
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log('value:', result);
        });
    }
  };

  return (
    <>
      <NotificationContainer />
      <div className="form-content-right">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <h1>OneStoreBooks</h1>
          <div className="form-inputs">
            <label className="form-label">Username</label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">Full Name</label>
            <input
              className="form-input"
              type="text"
              name="fullname"
              placeholder="Enter your full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
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
            <label className="form-label">Contact Number</label>
            <input
              className="form-input"
              type="text"
              name="number"
              placeholder="Enter your contact number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
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
          <div className="form-inputs">
            <label className="form-label">Confirm Password</label>
            <input
              className="form-input"
              type="password"
              name="password2"
              placeholder="Confirm your password"
              value={password2}
              onChange={(e) => setpassword2(e.target.value)}
            />
          </div>
          <button className="form-input-btn" type="submit">
            Sign up
          </button>
          {/* <span className="form-input-login">
          Already have an account? Login <NavLink to="/myaccount">here</NavLink>
        </span> */}
        </form>
      </div>
    </>
  );
};

export default FormSignup;
