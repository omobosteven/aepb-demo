/* eslint-disable */
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
// import { Redirect } from 'react-router-dom';
// import Auth from 'utils/Auth';
import { LoginForm } from '../components';
// import { PrivatePaths as CustomersPath } from 'routes/CustomerRoutes';
// import { PrivatePaths as AdminPaths } from 'routes/AdminRoutes';

const Login = () => {
  // const role = JSON.parse(localStorage.getItem('userData'))?.role;

  // if (Auth.isAuthenticated() && role === 'Admin') {
  //   <Redirect to={AdminPaths.CUSTOMERS} />;
  // } else if (Auth.isAuthenticated() && role === 'Customer') {
  //   <Redirect to={CustomersPath.PAYMENTS} />;
  // }
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
