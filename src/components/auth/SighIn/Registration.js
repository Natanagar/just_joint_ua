import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

// material icons
import { MdAccountCircle } from 'react-icons/md';
import { useStyles } from './SighInTheme';

export const Registration = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={-7} height="30%" component={Paper} className={classes.form}>
      <Grid item xs={12} sm={6} square>
        <Button bgcolor="secondary.main">Sign in</Button>
        {/* <Avatar className={classes.avatar}>
          <MdAccountCircle />
  </Avatar> */}

      </Grid>
    </Grid>
  );
};
