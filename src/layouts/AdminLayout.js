import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { AppBar } from './components/AppBar';
import { SideBar } from './components/SideBar';

const drawerWidth = 216;

export const AdminLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <main className={classes.mainRoot}>
      <AppBar />
      <SideBar width={drawerWidth} />
      <article className="contentWrapper">{children}</article>
    </main>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles({
  mainRoot: {
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: `${drawerWidth}px auto`,
    gridTemplateRows: '65px auto',
    gridTemplateAreas: `
      'sidebar navbar'
      'sidebar content'
    `,

    '& .contentWrapper': {
      gridArea: 'content',
      paddingBottom: 32
    }
  }
});
