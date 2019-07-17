import React from 'react';
import logo from './logo.png';

console.log(logo);

export const Navigation = () => (
  <React.Fragment>
    <div className="parent">
      <div className="navbar">
        <div className="logo">
          <picture>
            <img src={logo} style={{ width: '200px' }} alt="logo" />
          </picture>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#jobs">Job offers</a>
            </li>
            <li>
              <a href="#stories">Brand stories</a>
            </li>
            <li>
              <a href="#geek">Just Geek IT</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#post">Post a job</a>
            </li>
            <li>
              <a href="#registration">Registration</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="wrapper">
      <div style={{ height: '2000px' }} />
    </div>
  </React.Fragment>
);
