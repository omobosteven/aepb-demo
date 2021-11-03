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

  '@media screen and (min-width: 600px)': {
    minHeight: 71
  }
}));

const Content = styled('div')({
  paddingTop: 32
});
