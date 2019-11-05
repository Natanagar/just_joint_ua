import React from 'react';

// third libraries
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Typography,
} from '@material-ui/core';
import { connect } from 'react-redux';

// local components
import { theme, useStyles } from './LoginFormTheme';

const LoginForm = ({ dispatch }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      spacing={3}
    >
      <Grid item sm={6}>
        <Paper className={classes.paper}>
          <FormControl className={classes.form}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item sm={6}>
        <Paper className={classes.paper}>Password</Paper>
      </Grid>
      <Grid item sm={6}>
        <Paper className={classes.paper}>Buttons Social Media</Paper>
      </Grid>
    </Grid>
  );
};
export default LoginForm;

/* const mapStateToProps = state => ({ state });
const mapDispatchToProps = ({ dispatch }) => ({ dispatch });
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm); */
