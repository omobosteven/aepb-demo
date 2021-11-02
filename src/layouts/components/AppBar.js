/* eslint-disable */
import { AppBar as MuiAppBar, styled } from '@mui/material';

export const AppBar = () => {
  return (
    <NavBar position="fixed" elevation={0}>
      AppBar
    </NavBar>
  );
};

const NavBar = styled(MuiAppBar)({
  minHeight: 55,
  height: '6vh',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '1.5%',
  paddingRight: '1.5%',

  '& .logo': {
    display: 'flex',
    alignItems: 'center',

    '& .MuiTypography-h1': {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.5,
      marginLeft: 24
    }
  }
});
