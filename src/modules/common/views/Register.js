import { useState } from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { RegistrationForm, PreviewInfo, RegistrationSuccess } from '../components';

const Register = () => {
  const [signupStep, setSignupStep] = useState(1);
  const [userData, setUserData] = useState({
    state: 'FCT',
    noOfOccupants: '',
    pickupFrequency: '',
    lga: '',
    houseType: ''
  });

  const handleRegistrationSubmit = (values) => {
    setUserData(values);
    setSignupStep(2);
  };

  const onSubmit = (estimatedBill) => () => {
    // eslint-disable-next-line no-unused-vars
    const payload = {
      ...userData,
      houseType: parseInt(userData.houseType, 10),
      state: 'FCT',
      estimatedBill
    };
    setSignupStep(3);
  };

  const backToForm = () => {
    setSignupStep(1);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {signupStep === 3 ? (
        <RegistrationSuccess />
      ) : (
        <>
          <Typography component="h1" className={classes.heading}>
            Register Your Account
          </Typography>
          <div className={classes.form}>
            {signupStep === 1 && (
              <RegistrationForm
                onSubmit={handleRegistrationSubmit}
                defaultValues={userData}
              />
            )}
            {signupStep === 2 && (
              <PreviewInfo
                data={userData}
                onSubmit={onSubmit}
                onCancel={backToForm}
                isSubmitting={false}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 60
  },
  heading: {
    textAlign: 'center',
    fontSize: 32,
    color: theme.palette.text.pageTitle,
    fontWeight: 700,
    marginBottom: 64,
    alignSelf: 'flex-start'
  },

  form: {
    maxWidth: 588,
    width: '100%',
    margin: 'auto',
    marginBottom: 50
  },

  '@media screen and (max-width: 600px)': {
    root: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }
}));

export default Register;
