import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { LoginForm } from '../components';

const Login = () => {
  const classes = useStyles();

  return (
    <section className={classes.loginSection}>
      <Typography component="h1" className="sectionTitle">
        Login to your account
      </Typography>

      <LoginForm />
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  loginSection: {
    paddingTop: 60,

    '& .sectionTitle': {
      textAlign: 'center',
      fontSize: 32,
      color: theme.palette.text.pageTitle,
      fontWeight: 700,
      marginBottom: 64,
      alignSelf: 'flex-start'
    }
  }
}));

export default Login;
