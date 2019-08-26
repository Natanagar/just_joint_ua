// Google login

import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
// import { TiSocialFacebookCircular } from 'react-icons/lib/ti/social-facebook-circular';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
import GoogleButton from 'react-google-button'; // optional
import store from '../../../store/index';

const responseFacebook = (response) => {
	console.log(response);
};

const LoginPage = ({ firebase, auth }) => {
	function loginWithGoogle() {
		return firebase.login({ provider: 'google', type: 'popup' });
	}
	return (
		<div className="container">
			<div>
				<h2>Auth</h2>
				<FacebookLogin
					appId="1548782191925374"
					autoLoad
					fields="name,email,picture"
					callback={responseFacebook}
					cssClass="my-facebook-button-class"
					// icon={<TiSocialFacebookCircular />}
					render={(renderProps) => <button onClick={renderProps.onClick}>This is my custom FB button</button>}
				/>
				{!isLoaded(auth) ? (
					<span>Loading...</span>
				) : isEmpty(auth) ? (
					// <GoogleButton/> button can be used instead
					<button onClick={loginWithGoogle}>Login With Google</button>
				) : (
					<pre>{JSON.stringify(auth, null, 2)}</pre>
				)}
			</div>
		</div>
	);
};

LoginPage.propTypes = {
	firebase: PropTypes.shape({
		login: PropTypes.func.isRequired
	}),
	auth: PropTypes.object
};

export default compose(withFirebase, connect(({ firebase: { auth } }) => ({ auth })))(LoginPage);
