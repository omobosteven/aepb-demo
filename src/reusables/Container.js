import { Container as MuiContainer, styled } from '@mui/material';
import PropTypes from 'prop-types';

export const Container = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  isAdmin: PropTypes.bool
};

Container.defaultProps = {
  isAdmin: false
};

const StyledContainer = styled(MuiContainer)({
  height: '100%',
  maxWidth: 1360,

  '@media screen and (min-width: 1280px)': {
    maxWidth: 1360
  }
});
