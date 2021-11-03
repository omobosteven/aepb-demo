import { Container, Button, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField } from 'reusables';
import { useHistory } from 'react-router-dom';
import { CustomerPaths } from 'routes/paths';

export const LoginForm = () => {
  const classes = useStyles();
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

  const handleLogIn = (data) => {
    console.log({ data });
    history.push(CustomerPaths.PAYMENTS);
    // mutate(data);
  };

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
        <Link className={classes.link} underline="none" href="/login">
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
