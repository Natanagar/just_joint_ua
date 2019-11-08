import React from 'react'
// third API
import { Link } from '@reach/router'
import { connect } from 'react-redux'

// material ui
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import logo from './logo.png'
// css in js
const useStyles = makeStyles({
  root: {
    width: '80px'
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
})

const Navigation = ({ dispatch, isLoggedIn, email, userId, name, picture }) => {
  const classes = useStyles()
  return (
    <>
      <div className='parent'>
        <div className='navbar'>
          <div className='logo'>
            <picture>
              <img src={logo} style={{ width: '200px' }} alt='logo' />
            </picture>
          </div>
          <div className='menu'>
            <ul>
              <Link to='/jobs'>
                <li>
                  <span>Job offers</span>
                </li>
              </Link>
              <li>
                <a href='#stories'>Brand stories</a>
              </li>
              <li>
                <a href='#geek'>Just Geek IT</a>
              </li>
              <li>
                <a href='#events'>Events</a>
              </li>
              <li>
                <a href='#about'>About us</a>
              </li>
              <Link to='/company'>
                <li>
                  <span>Post a job</span>
                </li>
              </Link>
              <Link to='signin'>
                <li>
                  {!isLoggedIn ? (
                    <span>Registration</span>
                  ) : (
                    <Grid container justify='center' alignItems='center'>
                      <Avatar alt={name} src={picture} className={classes.avatar} />
                      <span>
                        {name} as {email}
                      </span>
                    </Grid>
                  )}
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
const mapStateToProps = ({ auth }) => {
  const { user } = auth
  if (user) {
    const { isLoggedIn, email, userId, name, picture } = user
    return {
      isLoggedIn,
      email,
      userId,
      name,
      picture
    }
  } else return {}
}

const mapDispatchToProps = (dispatch) => ({
  dispatch
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
