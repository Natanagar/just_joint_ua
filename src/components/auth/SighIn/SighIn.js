import React from 'react';
// facebook login
import FacebookLogin from 'react-facebook-login';
// Material-UI
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

// github login
import GitHubLogin from 'github-login';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { FaGithub } from 'react-icons/fa';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { theme, useStyles } from './SighInTheme';

console.log(typeof useStyles);

const responseFacebook = (response) => {
  console.log(response);
};
const onSuccess = () => {
  console.log('Success');
};
const onFailure = () => {
  console.log('Failure');
};
export const SignIn = () => {
  const classes = useStyles();
  console.log(classes);
  const componentClicked = () => {
    console.log('Facebook');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
						Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2} bgcolor="secondary.main">
              <Grid item xs={12} sm={6}>
                <Box bgcolor="secondary.main">
                  <TiSocialFacebookCircular />
                  <FacebookLogin
                    appId="1548782191925374"
                    autoLoad
                    fields="name,email,picture"
                    callback={responseFacebook}
                    cssClass="my-facebook-button-class"
                    onClick={componentClicked}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FaGithub />
                <GitHubLogin
                  clientId="61dca577092112ba03eb"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  color="primary "
                />
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
};
