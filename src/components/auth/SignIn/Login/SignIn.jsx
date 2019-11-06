import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
// Material-UI
import { ThemeProvider } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import { theme, useStyles } from './SignInTheme';
import { Mail, Keyboard } from '../../../layout/Icon';

const SignIn = () => {
  const classes = useStyles();
  console.log(classes);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid
          container
          direction="row-reverse"
          justify="center"
          alignItems="baseline"
          spacing={1}
        >
          <Grid item xs={4}>
            <Link to="/login">
              <Paper className={classes.paper}>
                <Mail />
                <div>Login</div>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to="/registration">
              <Paper className={classes.paper}>
                <Keyboard />
                <div>Sigh Up</div>
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
