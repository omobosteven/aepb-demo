import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import successTick from 'assets/success-tick.gif';

export const RegistrationSuccess = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        <img src={successTick} alt="success tick" />
        <Typography>Congratulations</Typography>
        <p>
          We have received your information and it will be reviewed. We will reach out to
          you via email on the next steps.
        </p>
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
    width: '100vw',
    height: '100vh'
  },
  root: {
    background: 'white',
    '& img': {
      height: 96,
      width: 96
    },
    width: 465,
    minHeight: 233,
    textAlign: 'center',
    margin: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& :nth-child(2)': {
      fontSize: 32,
      fontWeight: 500,
      color: '#272833'
    },
    '& :nth-child(3)': {
      fontSize: 16,
      color: theme.palette.text.tertiary
    }
  }
}));
