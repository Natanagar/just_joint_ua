import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
// Material-UI
import { ThemeProvider } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import { theme, useStyles } from './SighInTheme';


const SignIn = () => {
  const classes = useStyles();
  console.log(classes);

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
