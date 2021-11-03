import React from 'react';
import { SvgIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { ReactComponent as UserIcon } from 'assets/profileInfoIcons/user.svg';
import { ReactComponent as AddressIcon } from 'assets/profileInfoIcons/location.svg';
import { ReactComponent as BuildingIcon } from 'assets/profileInfoIcons/building.svg';
import { ReactComponent as EmailIcon } from 'assets/profileInfoIcons/email.svg';
import { ReactComponent as FrequencyIcon } from 'assets/profileInfoIcons/calendar.svg';
import { ReactComponent as HouseIcon } from 'assets/profileInfoIcons/house.svg';
import { ReactComponent as OccupantsIcon } from 'assets/profileInfoIcons/occupants.svg';
import { ReactComponent as OwnershipIcon } from 'assets/profileInfoIcons/user-settngs.svg';
import { ReactComponent as PhoneIcon } from 'assets/profileInfoIcons/phone-actions-call.svg';

//  Reuseable component for profile information card across the app,
//  you can pass in a "vertical" prop to make the card content be vertical
//  even if there's space to expand around it

export const ProfileCard = ({ vertical = false }) => {
  const classes = useStyles({ vertical });

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
      icon: OwnershipIcon,
      key: 'Ownership type',
      value: 'Landlord'
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
    }
  ];

  return (
    <div className={classes.cardWrapper}>
      <div className="title">Profile Information</div>
      <div className={classes.profileInfo}>
        {profileDetails.map((content) => (
          <div key={content.key} className="info-detail">
            <div className="icon">
              <SvgIcon component={content.icon} viewBox="0 0 24 24" fontSize="inherit" />
            </div>
            <div className="content">
              <div className="key">{content.key}</div>
              <div className="value">{content.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  cardWrapper: ({ vertical }) => ({
    background: theme.palette.primary.light,
    padding: 24,
    borderRadius: 8,
    minHeight: 200,
    maxWidth: vertical && 280,
    '& .title': {
      fontSize: 20,
      color: theme.palette.text.pageTitle,
      // marginBottom: 24,
      fontWeight: 500
    }
  }),
  profileInfo: ({ vertical }) => ({
    display: 'flex',
    flexWrap: 'wrap',

    '& .info-detail': {
      display: 'flex',
      alignItems: 'center',
      marginTop: 16,
      // marginRight: !vertical && 100,
      minWidth: !vertical && 250,
      '& .icon': {
        flexShrink: 0,
        fontSize: 24,
        '& .MuiSvgIcon-root': {
          fill: 'transparent',
          stroke: theme.palette.primary.main
        }
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
      }
    }
  })
}));
