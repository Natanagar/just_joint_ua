import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    margin: theme.spacing(1),
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
