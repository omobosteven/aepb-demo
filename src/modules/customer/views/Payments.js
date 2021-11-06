import { makeStyles } from '@mui/styles';
import { Container } from 'reusables';
import { CustomerPayments } from 'components';

const Payments = () => {
  const classes = useStyles();

  return (
    <section className={classes.customerSection}>
      <Container>
        <CustomerPayments />
      </Container>
    </section>
  );
};

const useStyles = makeStyles({
  customerSection: {
  },
});

export default Payments;
