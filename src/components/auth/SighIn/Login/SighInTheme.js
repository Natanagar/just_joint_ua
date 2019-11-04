import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

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
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
