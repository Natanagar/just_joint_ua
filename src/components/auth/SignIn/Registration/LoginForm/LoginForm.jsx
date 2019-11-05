import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'

// third libraries
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import SaveIcon from '@material-ui/icons/Save'
import { FormControl, TextField, Typography, Button } from '@material-ui/core'

import { connect } from 'react-redux'

// local components
import { theme, useStyles } from './LoginFormTheme'
import { Mail, Keyboard } from '../../../../layout/Icon'

const LoginForm = ({ dispatch }) => {
  const classes = useStyles()
  const responseFacebook = (response) => {
    console.log(response)
  }
  const responseGoogle = (response) => {
    console.log(response)
  }
  return (
    <Grid
      container
      direction='column'
      justify='flex-start'
      alignItems='center'
      spacing={3}
      className={classes.root}>
      <Grid item sm={6}>
        <FormControl className={classes.form}>
          {/* <Paper className={classes.paper}>
            <Mail />
          </Paper> */}
          <TextField
            required
            id='standard-required'
            label='Required'
            defaultValue='Email'
            className={classes.textField}
            margin='normal'
          />
          <Typography> 8 characters</Typography>
        </FormControl>
      </Grid>
      <Grid item sm={6}>
        {/* <Paper className={classes.paper}>
          <Keyboard />
        </Paper> */}
        <FormControl className={classes.form}>
          <TextField
            required
            id='standard-required'
            label='Required'
            defaultValue='Password'
            className={classes.textField}
            margin='normal'
          />
        </FormControl>
      </Grid>
      <Grid item sm={6}>
        <Button
          variant='contained'
          color='secondary'
          className={classes.button}
          endIcon={<IconButton>send</IconButton>}>
          Login
        </Button>
        <Button variant='contained' color='primary' className={classes.button}>
          Sign up
        </Button>
      </Grid>
      <Grid item sm={6}>
        <Paper className={classes.paper}>
          <Grid
            container
            direction='row-reverse'
            justify='space-between'
            alignItems='center'>
            <Grid item>
              <Paper>
                <GoogleLogin
                  clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
                  render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}>
                      Google
                    </button>
                  )}
                  buttonText='Login'
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy='single_host_origin'
                />
              </Paper>
            </Grid>

            <Grid item>
              <Paper>
                <FacebookLogin
                  appId='1088597931155576'
                  autoLoad
                  fields='name,email,picture'
                  // onClick={componentClicked}
                  callback={responseFacebook}
                  render={(renderProps) => (
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
    </Grid>
  )
}
const mapStateToProps = (state) => ({ state })
const mapDispatchToProps = ({ dispatch }) => ({ dispatch })
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

/* const mapStateToProps = state => ({ state });
const mapDispatchToProps = ({ dispatch }) => ({ dispatch });
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm); */
