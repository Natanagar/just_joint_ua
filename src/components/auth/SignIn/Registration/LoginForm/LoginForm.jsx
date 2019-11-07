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
import { putUserData } from '../../../../../actions/firestoreAction';

// local components
import MediaButtons from '../MediaBlock/index';
import { useStyles } from './LoginFormTheme';

const LoginForm = ({ dispatch, firestoreStart, putUser }) => {
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
  const handleSubmit = (event) => {
    console.log(values.email, values.password);
    event.preventDefault();
    dispatch({ type: 'USER_DATA_PUT_STORE', values });
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
          onClick={handleSubmit}
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
const mapDispatchToProps = dispatch => ({
  firestoreStart: () => dispatch(loginStart()),
  putUser: () => dispatch(putUserData()),
  dispatch,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
