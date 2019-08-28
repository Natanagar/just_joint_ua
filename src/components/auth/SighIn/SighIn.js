import React from 'react';
import { connect } from 'react-redux';
// facebook login
import FacebookLogin from 'react-facebook-login';
// Material-UI
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

// github login
import GitHubLogin from 'github-login';

// google login
import GoogleLogin from 'react-google-login';


import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { FaGithub } from 'react-icons/fa';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { SignInGithub } from '../../../actions/authAction';
import { Registration } from './Registration';
import { theme, useStyles } from './SighInTheme';

const responseFacebook = (response) => {
  console.log(response);
};
const onSuccess = () => {
  console.log('Success');
};
const onFailure = () => {
  console.log('Failure');
};

const responseGoogle = (response) => {
  console.log(response);
};
export const SignIn = ({ dispatch }) => {
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
                  onClick={() => dispatch(SignInGithub)}
                  color="primary "
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <GoogleLogin
                  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  buttonText="Login with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy="single_host_origin"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Registration />
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});
export default connect()(SignIn);
