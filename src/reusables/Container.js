import { Container as MuiContainer, styled } from '@mui/material';

export const Container = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

const StyledContainer = styled(MuiContainer)({
  maxWidth: 1360
});
