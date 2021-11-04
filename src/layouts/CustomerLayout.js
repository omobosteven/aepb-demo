import PropTypes from 'prop-types';
import { styled } from '@mui/material';
import { AppBar } from './components/AppBar';

export const CustomerLayout = ({ children }) => {
  return (
    <main>
      <AppBar showLogo />
      <Offset />
      <Content>{children}</Content>
    </main>
  );
};

CustomerLayout.propTypes = {
  children: PropTypes.node.isRequired
};

const Offset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Content = styled('div')({
  paddingTop: 32,
  paddingBottom: 64
});
