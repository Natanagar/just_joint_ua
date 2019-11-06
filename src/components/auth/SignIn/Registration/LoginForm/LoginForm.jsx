import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';

// third libraries
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
 Button, FormControl, TextField, Typography 
} from '@material-ui/core';
import { loginStart } from '../../../../../actions/authAction';

// local components
import MediaButtons from '../MediaBlock/index';
import { useStyles } from './LoginFormTheme';

const LoginForm = ({ dispatch, firestoreStart }) => {
  // initial values
  const [values, changeValues] = useState({});
  // create state from values input
  const handleChange = (event) => {
    event.persist();
    changeValues(values => ({
      ...values,
      [event.target.id]: event.target.value,
    }));
  };
  console.log(values);
  const handleSubmit = (event, values) => {
    event.preventDefault();
    firestoreStart(values);
  };
  // created styling
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      spacing={3}
      className={classes.root}
    >
      <Grid item sm={6}>
        <FormControl className={classes.form}>
          <TextField
            required
            id="email"
            label="Required"
            defaultValue="Email"
            className={classes.textField}
            margin="normal"
            onChange={handleChange}
          />
          <Typography> 8 characters</Typography>
        </FormControl>
      </Grid>
      <Grid item sm={6}>
        <FormControl className={classes.form}>
          <TextField
            required
            id="password"
            label="Required"
            defaultValue="Password"
            className={classes.textField}
            margin="normal"
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item sm={6}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onSubmit={handleSubmit}
        >
          Login
        </Button>
        <Link to="/registration">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Sign up
          </Button>
        </Link>
      </Grid>
      <MediaButtons />
    </Grid>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = ({ dispatch }) => ({
  firestoreStart: () => dispatch(loginStart()),
  dispatch,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
