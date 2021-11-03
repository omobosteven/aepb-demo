import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import successTick from 'assets/success-tick.gif';
import { Link } from 'react-router-dom';
import React from 'react';

export const RegistrationSuccess = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        <img src={successTick} alt="success tick" />
        <Typography className="completionTitle">Congratulations</Typography>
        <Typography className="completionText">
          We have received your information and it will be reviewed. We will reach out to
          you via email on the next steps.
        </Typography>
        <Link className="link" to="/login" underline="none">
          Login
        </Link>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  root: {
    '& img': {
      height: 96,
      width: 96
    },
    width: '100%',
    maxWidth: 465,
    minHeight: 233,
    textAlign: 'center',
    margin: 'auto',

    '& .completionTitle': {
      fontSize: 32,
      fontWeight: 500,
      color: '#272833'
    },
    '& .completionText': {
      fontSize: 16,
      color: theme.palette.text.tertiary,
      wordBreak: 'break-word'
    },

    '& .link': {
      color: theme.palette.primary.main
    }
  }
}));
