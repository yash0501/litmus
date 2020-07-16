import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  root: {
    display: 'flex',
    flexDirection: 'row',
  },

  rootDiv: {
    width: '50rem',
  },

  mainDiv: {
    marginTop: theme.spacing(8.75),
    marginLeft: theme.spacing(17.5),
    width: '26rem',
  },

  heading: {
    marginTop: theme.spacing(6.2),
    fontSize: theme.spacing(5),
  },

  description: {
    marginTop: theme.spacing(3.75),
    fontSize: '1rem',
  },
  description2: {
    marginTop: theme.spacing(1),
    fontSize: '1rem',
  },

  success: {
    border: '0.0625rem solid',
    borderColor: theme.palette.secondary.dark,
  },

  error: {
    border: '0.0625rem solid',
    borderColor: theme.palette.error.main,
  },

  inputArea: {
    width: '20rem',
    marginTop: theme.spacing(3.5),
    textDecoration: 'none',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2.2),
    borderRadius: 3,
  },

  loginDiv: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(-2),
  },

  imageDiv: {
    width: '50rem',
  },

  forgotPasssword: {
    marginTop: theme.spacing(3.125),
    marginBottom: theme.spacing(3.75),
  },

  inputDiv: {
    marginTop: theme.spacing(1),
  },

  linkForgotPass: {
    color: theme.palette.common.black,
    opacity: 0.5,
  },

  submitButton: {
    display: 'inline',
    backgroundColor: theme.palette.secondary.dark,
    width: '6.875rem',
    height: '2.8125rem',
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    textTransform: 'none',
  },

  descImg: {
    verticalAlign: 'middle',
    paddingLeft: theme.spacing(0.625),
  },
}));

export default useStyles;