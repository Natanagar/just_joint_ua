import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import logo from './logo.png';

const Navigation = ({ dispatch }) => (
  <>
    <div className="parent">
      <div className="navbar">
        <div className="logo">
          <picture>
            <img src={logo} style={{ width: '200px' }} alt="logo" />
          </picture>
        </div>
        <div className="menu">
          <ul>
            <Link to="/jobs">
              <li>
                <span>Job offers</span>
              </li>
            </Link>
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
            <Link to="/company">
              <li>
                <span>Post a job</span>
              </li>
            </Link>
            <Link to="signin">
              <li>
                <span>Registration</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  </>
);
const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);
