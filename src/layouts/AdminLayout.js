import PropTypes from 'prop-types';
import { styled } from '@mui/material';
import { AppBar } from './components/AppBar';
import { SideBar } from './components/SideBar';

// const drawerWidth = 240;

export const AdminLayout = ({ children }) => {

  return (
    <main>
      <AppBar />
      <SideBar />
      <Offset />
      <article>
        {children}
      </article>
    </main>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired
}

const Offset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
