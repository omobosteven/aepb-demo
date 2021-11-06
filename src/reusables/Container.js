import { Container as MuiContainer, styled } from '@mui/material';
import PropTypes from 'prop-types';

export const Container = ({ children, isAdmin, ...rest }) => {
  return <StyledContainer isAdmin={isAdmin} {...rest}>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  isAdmin: PropTypes.bool,
};

Container.defaultProps = {
  isAdmin: false,
};

const StyledContainer = styled(MuiContainer, {
  shouldForwardProp: (propName) => propName !== 'isAdmin'
})(({ isAdmin }) => ({
  height: '100%',
  maxWidth: 1360,

  ...(isAdmin && {
    marginLeft: 24
  }),

  '@media screen and (min-width: 1280px)': {
    maxWidth: 1360,
  }
}));
