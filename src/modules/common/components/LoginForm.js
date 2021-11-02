/* eslint-disable */
import {
  IconButton,
  InputAdornment,
  Typography,
  Container,
  Button,
  Link
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField } from 'reusables';
// import authServices from 'services/auth';
// import Auth from 'utils/Auth';
import { useHistory } from 'react-router-dom';
import { CustomerPaths, AdminPaths } from 'routes/paths';
// import { PrivatePaths as CustomersPath } from 'routes/CustomerRoutes';
// import { PrivatePaths as AdminPaths } from 'routes/AdminRoutes';
// import handleReactQueryError from 'utils/handleReactQueryError';

export const LoginForm = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Email is required')
      .email('Email must be a valid email'),
    password: yup.string().required('Password is required')
  });

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  });

  // const { mutate, isLoading } = useMutation(authServices.login, {
  //   onError: (error) => {
  //     handleReactQueryError('Login failed', error);
  //   },
  //   onSuccess: ({ data }) => {
  //     Auth.setToken(data?.accessToken);
  //     if (data?.role === 'Customer') history.push(CustomersPath.PAYMENTS);
  //     else history.push(AdminPaths.CUSTOMERS);
  //   }
  // });

  const handleLogIn = (data) => {
    console.log({ data });
    history.push(CustomerPaths.PAYMENTS);
    // mutate(data);
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <Container component="main" maxWidth="md" classes={{ root: classes.container }}>
      <form className={classes.form} onSubmit={handleSubmit(handleLogIn)}>
        <TextField
          errors={errors}
          register={register}
          name="email"
          label="Email address"
        />
        <TextField
          errors={errors}
          register={register}
          type="password"
          name="password"
          label="Password"
        />
        <Link className={classes.link} underline="none" href="#">
          Forgot Password?
        </Link>
        <div className={classes.btnWrapper}>
          <Button type="submit" color="primary" variant="contained">
            Log in
          </Button>
        </div>
      </form>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  form: { maxWidth: 588, margin: 'auto' },

  container: { '&.MuiContainer-root': { marginTop: '0px !important' } },

  btnWrapper: { display: 'grid', placeContent: 'end' },

  link: {
    fontSize: 16,
    color: theme.palette.primary.main,
    cursor: 'pointer',
    display: 'block',
    marginTop: 16,
    marginBottom: 8
  }
}));
