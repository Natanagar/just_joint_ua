import React, { useState } from 'react'

// third API
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'

// material-ui
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Button, FormControl, TextField, Typography } from '@material-ui/core'
import { Facebook } from '../../../../layout/Icon/index'
import FacebookIcon from '@material-ui/icons/Facebook'

import { facebookSuccess } from '../../../../../actions/authAction'

// local components
import { useStyles } from './MediaButtonsTheme'

const MediaButtons = ({ setUser, dispatch }) => {
  console.log(setUser)
  const [isLoggedIn, login] = useState(false)
  const [user, changeUser] = useState({
    userId: '',
    name: '',
    email: '',
    picture: ''
  })
  const classes = useStyles()

  // handler for Facebook button
  const responseFacebook = (response) => {
    login(true)
    changeUser(response)
    dispatch({
      type: 'AUTH_FACEBOOK_SAGA_SUCCESS',
      user: {
        isLoggedIn: true,
        email: response.email,
        userId: response.id,
        name: response.name,
        picture: response.picture.data.url
      }
    })
  }
  // handler for Google button
  const responseGoogle = (response) => {
    console.log(response)
  }
  return (
    <Grid item sm={6}>
      <Paper className={classes.paper}>
        <Grid container direction='row-reverse' justify='space-between' alignItems='center'>
          <Grid item>
            <Paper>
              <GoogleLogin
                clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
                render={(renderProps) => (
                  <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
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
            {!isLoggedIn ? (
              <FacebookLogin
                appId='1548782191925374' // REACT_APP_FACEBOOK_APP_ID
                autoLoad
                fields='name,email,picture'
                callback={responseFacebook}
                render={(renderProps) => (
                  <button сlassName={classes.button} onClick={renderProps.onClick}>
                    <div>
                      <Facebook style={{ width: '20px', height: '20px' }} />
                    </div>
                  </button>
                )}
              />
            ) : (
              <Paper>
                <div>
                  <FacebookIcon color='primary' />
                  Logged with Facebook
                </div>
              </Paper>
            )}
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
  )
}
const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => ({
  setUser: () => dispatch(facebookSuccess()),
  dispatch
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaButtons)
