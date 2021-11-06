import { useState } from 'react';
import {
  AppBar as MuiAppBar,
  styled,
  Badge,
  Avatar,
  SvgIcon,
  Menu,
  MenuItem
} from '@mui/material';
import { ReactComponent as Logo } from 'assets/logo-text.svg';
import { ReactComponent as Notification } from 'assets/bell-on.svg';
import { Container } from 'reusables';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AppBar = ({ showLogo, widthSubtraction, fullWidth, isAdmin }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const FullName = 'John Doe';
  const names = FullName?.split(' ') || '';

  const handleAvatarClick = (event) => {
    return setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => history.push('/');

  return (
    <NavBar position="fixed" elevation={0} widthSubtraction={widthSubtraction} fullWidth={fullWidth} isAdmin={isAdmin}>
      <Container className="container">
        {showLogo && (
          <div className="logo">
            <SvgIcon component={Logo} viewBox="0 0 107 55" />
          </div>
        )}
        <div className="notification">
          <Badge badgeContent={0} classes={{ root: 'badgeRoot' }}>
            <SvgIcon component={Notification} viewBox="0 0 22 24" fontSize="inherit" />
          </Badge>
          <Avatar onClick={handleAvatarClick}>{`${names[0]?.charAt(0)}${names[1]?.charAt(
            0
          )}`}</Avatar>
        </div>
        <StyledMenu
          elevation={0}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <MenuItem onClick={handleLogout} style={{ color: '#FF0000' }}>
            Logout
          </MenuItem>
        </StyledMenu>
      </Container>
    </NavBar>
  );
};

AppBar.propTypes = {
  showLogo: PropTypes.bool,
  widthSubtraction: PropTypes.number,
  isAdmin: PropTypes.bool,
  fullWidth: PropTypes.bool
};

AppBar.defaultProps = {
  showLogo: false,
  fullWidth: false,
  widthSubtraction: 0,
  isAdmin: false
};

const NavBar = styled(MuiAppBar, {
  shouldForwardProp: (propName) => !['widthSubtraction', 'fullWidth', 'isAdmin'].includes(propName)
})(({ theme, widthSubtraction, fullWidth, isAdmin }) => ({
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.tertiary,
    height: 65,
    boxShadow: 'none',
    paddingTop: 8,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: fullWidth ? '100%' : `calc(100% - ${widthSubtraction ?? 0}px)`,

    '& .container': {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '6.8%',
      paddingRight: '6.8%',
      ...(isAdmin && {
        paddingLeft: 24,
        paddingRight: 24,
        maxWidth: '100%'
      })
    },

    '& .logo': {
      display: 'flex',
      alignItems: 'center',

      '& .MuiSvgIcon-root': {
        fontSize: 107,
        height: 'auto',
        fill: theme.palette.text.primary
      }
    },

    '& .notification': {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',

      '& .badgeRoot': {
        fontSize: 20,
        cursor: 'pointer'
      },

      '& .MuiAvatar-root': {
        background: theme.palette.secondary.dark,
        color: theme.palette.common.white,
        fontSize: 18,
        fontWeight: 700,
        marginLeft: 25,
        cursor: 'pointer',
        lineHeight: 1.5
      }
    }
  }));

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiList-root': {
    margin: 10
  },

  '& .MuiMenuItem-root': {
    fontSize: 16,
    color: theme.palette.text.secondary,

    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      borderRadius: 4
    }
  },

  '& .MuiPaper-root': {
    borderRadius: 4,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    maxWidth: 187
  },

  '& .Mui-selected': {
    backgroundColor: `${theme.palette.secondary.light} !important`
  },

  '& .Mui-focusVisible': {
    backgroundColor: `${theme.palette.secondary.light} !important`,
    borderRadius: 4
  },

  '& .MuiListItem-root': {
    justifyContent: 'center'
  }
}));
