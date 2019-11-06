import React, { useState, useEffect } from 'react'

// third libraries
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import Paper from '@material-ui/core/Paper'
import { Button, FormControl, TextField, Typography } from '@material-ui/core'

// local components
import { useStyles } from './RegistrationTheme'

const Registration = (props) => {
  // initial values
  const [values, changeValues] = useState({})
  // create state from values input
  const handleChange = (event) => {
    event.persist()
    changeValues((values) => ({
      ...values,
      [event.target.id]: event.target.value
    }))
  }
  console.log(values)
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(values)
  }
  // created styling
  const classes = useStyles()
  return (
    <Grid
      container
      direction='column'
      justify='flex-start'
      alignItems='center'
      spacing={2}
      className={classes.root}>
      <Grid item sm={6}>
        <FormControl className={classes.form}>
          <TextField
            required
            id='email'
            label='Required'
            defaultValue='Email'
            className={classes.textField}
            margin='normal'
            onChange={handleChange}
          />
          <Typography> 8 characters</Typography>
        </FormControl>
      </Grid>
      <Grid item sm={6}>
        <FormControl className={classes.form}>
          <TextField
            required
            id='password'
            label='Required'
            defaultValue='Password'
            type='password'
            autoComplete='current-password'
            className={classes.textField}
            margin='normal'
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item sm={6}>
        <FormControl className={classes.form}>
          <TextField
            required
            id='first-name'
            label='Required'
            defaultValue='First Name'
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
                defaultValue='Second Name'
                className={classes.textField}
                margin='normal'
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        </FormControl>
      </Grid>
      <Grid item sm={6}>
        <Fab
          color='primary'
          aria-label='add'
          className={classes.fab}
          onSubmit={handleSubmit}>
          <AddIcon />
        </Fab>
        <Fab
          color='default'
          aria-label='add'
          className={classes.fab}
          onSubmit={handleSubmit}>
          <DeleteIcon />
        </Fab>
      </Grid>
    </Grid>
  )
}
export default Registration
