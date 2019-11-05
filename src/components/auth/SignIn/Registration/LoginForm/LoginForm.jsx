import React from 'react';

// third libraries
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
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
        <FormControl className={classes.form}>
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Email"
            className={classes.textField}
            margin="normal"
          />
        </FormControl>
      </Grid>
      <Grid item sm={6}>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Password"
          className={classes.textField}
          margin="normal"
        />
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
