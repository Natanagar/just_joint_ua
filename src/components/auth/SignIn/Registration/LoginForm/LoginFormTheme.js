import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { spawnSync } from 'child_process';

export const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: {
      main: indigo[500],
      light: grey[200],
    },
  },
  status: {
    danger: 'orange',
  },
});

export const useStyles = makeStyles(theme => ({

  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '50vw',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontFamily: 'Open Sans',
    fontSize: '16',
  },

}));
