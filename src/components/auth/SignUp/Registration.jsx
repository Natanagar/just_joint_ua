import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'

// third libraries
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import Paper from '@material-ui/core/Paper'
import { Button, FormControl, TextField, Typography } from '@material-ui/core'
import { createUserData } from '../../../actions/firestoreAction'
import { createStart } from '../../../actions/authAction'

// local components
import { useStyles } from './RegistrationTheme'

const Registration = ({ dispatch, createUser, createUserFirestore, history }) => {
  // initial values
  const [values, changeValues] = useState({})
  const [defaultUser, setDefaultUser] = useState({
    email: 'google@google.com',
    password: '123456',
    firstName: 'Your name',
    secondName: 'Second Name'
  })
  const [error, getError] = useState(null)
  // create state from values input
  const handleChange = (event) => {
    event.persist()
    changeValues((values) => ({
      ...values,
      [event.target.id]: event.target.value
    }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({ type: 'USER_DATA_CREATE_STORE', values })
    createUserFirestore(values)
  }
  const handleDefaultValues = (event) => {
    const fallbackUser = {
      email: 'Your email',
      password: 'firestore',
      firstName: 'Natalia',
      secondName: 'Agarkova'
    }
    setDefaultUser(fallbackUser)
  }
  console.log(defaultUser)
  // created styling
  const classes = useStyles()
  return (
    <Grid container direction='column' justify='flex-start' alignItems='center' spacing={2} className={classes.root}>
      <Grid item sm={6}>
        <FormControl className={classes.form}>
          <TextField
            required
            id='email'
            label='Required'
            defaultValue={defaultUser.email}
            className={classes.textField}
            margin='normal'
            onChange={handleChange}
          />
          <Typography>{error}</Typography>
        </FormControl>
      </Grid>
      <Grid item sm={6}>
        <FormControl className={classes.form}>
          <TextField
            required
            id='password'
            label='Required'
            defaultValue={defaultUser.password}
            type='password'
            autoComplete='current-password'
            className={classes.textField}
            margin='normal'
            onChange={handleChange}
            helperText='password must contain more than 6 symbols'
          />
        </FormControl>
      </Grid>
      <Grid item sm={6}>
        <FormControl className={classes.form}>
          <TextField
            required
            id='first-name'
            label='Required'
            defaultValue={defaultUser.firstName}
            className={classes.textField}
            margin='normal'
            onChange={handleChange}
          />
          <Grid item sm={6}>
            <FormControl className={classes.form}>
              <TextField
                required
                id='second-name'
                label='Required'
                defaultValue={defaultUser.secondName}
                className={classes.textField}
                margin='normal'
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        </FormControl>
      </Grid>
      <Grid item sm={6}>
        <Fab color='primary' aria-label='add' className={classes.fab} onClick={handleSubmit}>
          <AddIcon />
        </Fab>
        <Fab color='default' aria-label='add' className={classes.fab} onClick={handleDefaultValues}>
          <DeleteIcon />
        </Fab>
      </Grid>
    </Grid>
  )
}
const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
  createUser: () => dispatch(createUserData()),
  createUserFirestore: () => dispatch(createStart()),
  dispatch
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration)
