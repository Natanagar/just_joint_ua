// Google login

import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { withFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
import GoogleButton from 'react-google-button'; // optional
import LoginForm from './LoginForm/LoginForm';
import store from '../../../../store/index';

const responseFacebook = (response) => {
  console.log(response);
};
const LoginPage = ({ dispatch }) => (
  <>
    <LoginForm />
  </>
);
const mapStateToProps = state => ({});
const mapStateToDispatch = ({ dispatch }) => ({
  dispatch,
});
export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(LoginPage);
