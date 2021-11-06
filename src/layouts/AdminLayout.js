import PropTypes from 'prop-types';
import { styled } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AppBar } from './components/AppBar';
import { SideBar } from './components/SideBar';

const drawerWidth = 216;

export const AdminLayout = ({ children }) => {
const classes = useStyles({width: drawerWidth });

  return (
    <main className={classes.mainRoot}>
      <AppBar widthSubtraction={drawerWidth} isAdmin />
      <SideBar width={drawerWidth} />
      <Offset />
      <article className="contentWrapper">
        {children}
      </article>
    </main>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired
}

const useStyles = makeStyles({
  mainRoot: {
    display: 'flex',
    flexDirection: 'column',

    '& .contentWrapper': {
      flexGrow: 1,
      width: ({ width }) => `calc(100% - ${width}px)`,
      marginLeft: ({ width }) => width,
      paddingBottom: 32
    }
  }
})

const Offset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
