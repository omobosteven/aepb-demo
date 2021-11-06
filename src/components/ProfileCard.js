import React from 'react';
import { SvgIcon, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { ReactComponent as UserIcon } from 'assets/profileInfoIcons/user.svg';
import { ReactComponent as AddressIcon } from 'assets/profileInfoIcons/location.svg';
import { ReactComponent as BuildingIcon } from 'assets/profileInfoIcons/building.svg';
import { ReactComponent as EmailIcon } from 'assets/profileInfoIcons/email.svg';
import { ReactComponent as FrequencyIcon } from 'assets/profileInfoIcons/calendar.svg';
import { ReactComponent as HouseIcon } from 'assets/profileInfoIcons/house.svg';
import { ReactComponent as OccupantsIcon } from 'assets/profileInfoIcons/occupants.svg';
import { ReactComponent as PhoneIcon } from 'assets/profileInfoIcons/phone-actions-call.svg';


export const ProfileCard = () => {
  const classes = useStyles();

  const profileDetails = [
    {
      icon: UserIcon,
      key: 'Name',
      value: 'Olamide Jegede'
    },
    {
      icon: BuildingIcon,
      key: 'Building type',
      value: 'Residential'
    },
    {
      icon: PhoneIcon,
      key: 'Phone number',
      value: '+2348012345678'
    },
    {
      icon: EmailIcon,
      key: 'Email address',
      value: 'example@mail.com'
    },
    {
      icon: HouseIcon,
      key: 'House type',
      value: 'Duplex'
    },
    {
      icon: OccupantsIcon,
      key: 'Number of occupants',
      value: '1-5'
    },
    {
      icon: FrequencyIcon,
      key: 'Pickup frequency',
      value: 'Weekly'
    },
    {
      icon: AddressIcon,
      key: 'Address',
      value: '1, Ziquinchor Street, Off IBB Way, Wuse Zone 4.'
    },
  ];

  return (
    <div className={classes.cardWrapper}>
      <div className="title">Profile Information</div>
      <Grid container spacing={2} className={classes.profileInfo}>
        {profileDetails.map((content) => (
          <Grid item xs={12} md={3} key={content.key} className="info-detail">
            <SvgIcon component={content.icon} viewBox="0 0 24 24" fontSize="inherit" />
            <div className="content">
              <div className="key">{content.key}</div>
              <div className="value">{content.value}</div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    background: theme.palette.primary.light,
    padding: 24,
    borderRadius: 8,
    minHeight: 200,

    '& .title': {
      fontSize: 20,
      color: theme.palette.text.pageTitle,
      fontWeight: 500
    }
  },

  profileInfo: {
    display: 'flex',

    '& .info-detail': {
      display: 'flex',
      alignItems: 'center',
      marginTop: 16,

      '& .MuiSvgIcon-root': {
        fontSize: 24,
        fill: 'transparent',
        stroke: theme.palette.primary.main
      },

      '& .content': {
        marginLeft: 18,
        '& .key': {
          color: theme.palette.text.title,
          fontSize: 14
        },
        '& .value': {
          color: theme.palette.text.primary,
          fontSize: 16,
          fontWeight: 500,
          wordBreak: 'break-word'
        }
      },
    }
  },
}));
