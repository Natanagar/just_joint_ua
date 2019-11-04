import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
// facebook login
import FacebookLogin from 'react-facebook-login';
// Material-UI
import { ThemeProvider } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

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
import { SignInGithub } from '../../../../actions/authAction';
import LoginPage from '../Registration/Login';
import { Registration } from '../Registration/Registration';
import { theme, useStyles } from './SighInTheme';


const SignIn = ({ dispatch }) => {
  const classes = useStyles();
  console.log(classes);
  const componentClicked = () => {
    console.log('Facebook');
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid
          container
          container
          direction="row-reverse"
          justify="center"
          alignItems="baseline"
          spacing={1}
        >
          <Grid item xs={4}>
            <Link to="/login">
              <Paper className={classes.paper}>
                Login
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to="/form">
              <Paper className={classes.paper}>Sigh in</Paper>
            </Link>
          </Grid>
        </Grid>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
