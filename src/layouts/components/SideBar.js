import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles, Drawer, Tabs, Tab, SvgIcon } from '@mui/material';
import Logo from 'assets/logo-text.svg';
import { ReactComponent as LogoutIcon } from 'assets/barIcons/logout.svg';

export const SideBar = withRouter(({ history, location, menuTabs }) => {
  const classes = useStyles();

  const getSelectedKey = (pathname = location.pathname) => {
    return pathname?.split('/')?.[2];
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={classes.drawerRoot}
      classes={{ paper: classes.drawerPaper }}
    >
      <div className="logo">
        <img src={Logo} alt="logo" className="logoImage" />
      </div>
      <Tabs
        orientation="vertical"
        className={classes.tabs}
        variant="fullWidth"
        value={getSelectedKey()}
      >
        {menuTabs.map((tab) => {
          return (
            <Tab
              onClick={() => history.push(tab.path)}
              value={getSelectedKey(tab.path)}
              key={tab.path}
              label={tab.label}
              icon={
                <SvgIcon component={tab.icon} viewBox="0 0 24 24" fontSize="inherit" />
              }
            />
          );
        })}
      </Tabs>
      <span className={classes.logout}>
        <SvgIcon component={LogoutIcon} viewBox="0 0 24 24" fontSize="inherit" />
        Logout
      </span>
    </Drawer>
  );
});

const useStyles = makeStyles((theme) => ({
  drawerRoot: {
    width: 200
  },

  drawerPaper: {
    width: 200,
    borderRight: 'none',
    background: theme.palette.primary.main,
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',

    '& .logo': {
      marginTop: 25,
      marginBottom: 20,
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center'
    }
  },

  tabs: {
    '& .MuiTabs-indicator': {
      display: 'none'
    },

    '& .MuiTabs-flexContainerVertical': {
      alignItems: 'center',

      '& .MuiTab-root': {
        color: theme.palette.primary.light,
        fontSize: 14,
        textTransform: 'capitalize',
        fontWeight: 400,
        minHeight: 40,
        marginBottom: 10,
        width: '90%',
        padding: '10px 10px 10px 25px',
        opacity: 1,

        '& .MuiTab-wrapper': {
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',

          '& > *:first-child': {
            marginBottom: 0
          },

          '& .MuiSvgIcon-root': {
            marginRight: 14,
            fontSize: 24,
            fill: 'transparent',
            stroke: theme.palette.primary.light
          }
        },

        '&.Mui-selected': {
          backgroundColor: theme.palette.primary.light,
          borderRadius: 8,
          color: theme.palette.primary.main,

          '& .MuiTab-wrapper': {
            '& .MuiSvgIcon-root': {
              stroke: theme.palette.primary.main
            }
          }
        }
      }
    }
  },

  logout: {
    color: theme.palette.primary.light,
    fontSize: 14,
    textTransform: 'capitalize',
    fontWeight: 400,
    minHeight: 40,
    marginBottom: 10,
    width: '90%',
    padding: '10px 10px 10px 25px',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',

    '& .MuiSvgIcon-root': {
      marginRight: 14,
      fontSize: 24,
      fill: 'transparent',
      stroke: theme.palette.primary.light
    }
  }
}));
