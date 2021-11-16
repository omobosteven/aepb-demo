import PropTypes from 'prop-types';
import { styled } from '@mui/material';
import { AppBar } from './components/AppBar';

export const CustomerLayout = ({ children }) => {
  return (
    <Main>
      <AppBar showLogo />
      <Content>{children}</Content>
    </Main>
  );
};

CustomerLayout.propTypes = {
  children: PropTypes.node.isRequired
};

const Main = styled('main')({
  display: 'grid',
  gridTemplateColumns: '100%',
  gridTemplateRows: '65px auto',
  gridTemplateAreas: `
  "navbar"
  "content"
  `
});

const Content = styled('div')({
  gridArea: 'content',
  paddingTop: 32,
  paddingBottom: 64
});
