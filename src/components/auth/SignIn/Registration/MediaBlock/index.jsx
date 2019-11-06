import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
 Button, FormControl, TextField, Typography 
} from '@material-ui/core';

// local components
import { useStyles } from './MediaButtonsTheme';

const MediaButtons = (props) => {
  const classes = useStyles();

  // handler for Facebook button
  const responseFacebook = (response) => {
    console.log(response);
  };

  // handler for Google button
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <Grid item sm={6}>
      <Paper className={classes.paper}>
        <Grid
          container
          direction="row-reverse"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Paper>
              <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                render={renderProps => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Google
                  </button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />
            </Paper>
          </Grid>

          <Grid item>
            <Paper>
              <FacebookLogin
                appId="1088597931155576"
                autoLoad
                fields="name,email,picture"
                // onClick={componentClicked}
                callback={responseFacebook}
                render={renderProps => (
                  <button onClick={renderProps.onClick}>Facebook</button>
                )}
              />
            </Paper>
          </Grid>
          <Grid item>
            <Paper>Github</Paper>
          </Grid>
          <Grid item>
            <Paper>Email</Paper>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default MediaButtons;
