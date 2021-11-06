import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import { Container } from './Container';
import { Breadcrumbs } from './Breadcrumbs';

export const AdminHeader = ({ title, historyStack }) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Container isAdmin>
        <Breadcrumbs current={title} historyStack={historyStack} />
      </Container>
    </header>
  )
}

AdminHeader.propTypes = {
  title: PropTypes.node.isRequired,
  historyStack: PropTypes.arrayOf(PropTypes.object)
};

AdminHeader.defaultProps = {
  historyStack: []
};

const useStyles = makeStyles({
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: '#FAFAFA',
    minHeight: 63,
    marginBottom: 32
  },
});
