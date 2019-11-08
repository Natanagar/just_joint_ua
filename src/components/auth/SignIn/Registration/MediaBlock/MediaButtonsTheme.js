import indigo from '@material-ui/core/colors/indigo'
import grey from '@material-ui/core/colors/grey'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import { spawnSync } from 'child_process'

export const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: {
      main: indigo[500],
      light: grey[200]
    }
  },
  status: {
    danger: 'orange'
  },
  button: {
    fontSize: '16px'
  }
})

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3)
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '50px',
    width: '400px'
  },
  button: {
    margin: theme.spacing(2),
    fontWeight: 800,
    fontSize: 14
  },
  form: {
    marginTop: theme.spacing(3)
  },
  label: {
    fontFamily: 'Open Sans',
    fontSize: '16px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '400px'
  }
}))
