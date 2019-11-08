import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    padding: theme.spacing(2),
    fontSize: '16px',
  },
  textField: {
    width: '50vw',
  },
  form: {
    width: '100%',
  },
  fab: {
    margin: theme.spacing(2),
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
