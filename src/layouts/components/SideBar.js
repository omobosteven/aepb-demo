/* eslint-disable */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, Tabs, Tab, SvgIcon, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactComponent as Logo } from 'assets/logo-text.svg';
import { ReactComponent as CustomerIcon } from 'assets/barIcons/customers.svg';
import { ReactComponent as BillingIcon } from 'assets/barIcons/billing.svg';
import { ReactComponent as TrucksIcon } from 'assets/barIcons/delivery-truck.svg';
import { ReactComponent as SettingIcon } from 'assets/barIcons/settings.svg';
import { ReactComponent as LogoutIcon } from 'assets/barIcons/logout.svg';
import { AdminPaths } from 'routes/paths';

export const SideBar = withRouter(({ history, location, width }) => {
  const classes = useStyles({ width });

  const getSelectedKey = (pathname = location.pathname) => {
    return pathname?.split('/')?.[2];
  };

  const handleLogout = () => history.push('/');

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={classes.drawerRoot}
      classes={{ paper: classes.drawerPaper }}
    >
      <div className="logo">
        <SvgIcon component={Logo} viewBox="0 0 107 55" />
      </div>
      <Tabs
        orientation="vertical"
        className={classes.tabs}
        variant="fullWidth"
        value={getSelectedKey()}
      >
        {MenuItems?.map((tab) => {
          return (
            <Tab
              onClick={() => history.push(tab.path)}
              value={getSelectedKey(tab.path)}
              key={tab.path}
              label={<span>{tab.label}</span>}
              icon={
                <SvgIcon component={tab.icon} viewBox="0 0 24 24" fontSize="inherit" />
              }
            />
          );
        })}
      </Tabs>
      <Button className={classes.logout} onClick={handleLogout} color="primary">
        <SvgIcon component={LogoutIcon} viewBox="0 0 24 24" fontSize="inherit" />
        Logout
      </Button>
    </Drawer>
  );
});

const useStyles = makeStyles((theme) => ({
  drawerRoot: {
    width: ({ width }) => width,
  },

  drawerPaper: {
    width: ({ width }) => width,
    borderRight: 'none',
    background: theme.palette.primary.main,
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',

    '& .logo': {
      marginTop: 25,
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center',

      '& .MuiSvgIcon-root': {
        fontSize: 107,
        height: 'auto',
        fill: theme.palette.common.white
      }
    }
  },

  tabs: {
    marginTop: 24,
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        '& .MuiSvgIcon-root': {
          marginRight: 14,
          fontSize: 20,
          fill: 'transparent',
          stroke: theme.palette.primary.light
        },

        '& > *:first-child': {
          marginBottom: 0
        },

        '&.Mui-selected': {
          backgroundColor: theme.palette.primary.light,
          borderRadius: 8,
          color: theme.palette.primary.main,

          '& .MuiSvgIcon-root': {
            stroke: theme.palette.primary.main
          }
        }
      }
    }
  },

  logout: {
    color: theme.palette.primary.light,
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 10,
    position: 'absolute',
    bottom: 0,

    '& .MuiSvgIcon-root': {
      marginRight: 14,
      fontSize: 24,
      fill: 'transparent',
      stroke: theme.palette.primary.light
    }
  }
}));

const MenuItems = [
  {
    label: 'Customers',
    path: AdminPaths.CUSTOMERS,
    icon: CustomerIcon,
  },
  {
    label: 'Billing',
    path: AdminPaths.BILLINGS,
    icon: BillingIcon,
  },
  {
    label: 'Trucks',
    path: AdminPaths.TRUCKS,
    icon: TrucksIcon,
  },
  {
    label: 'Settings',
    path: AdminPaths.SETTINGS,
    icon: SettingIcon,
  },
];
