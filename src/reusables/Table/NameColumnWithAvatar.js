import { Avatar, styled, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const NameColumnWithAvatar = ({ name, email }) => {
  return (
    <StyledDiv>
      <Avatar src="/" alt="name initials">
        MK
      </Avatar>
      <Typography className="content">
        <span className="name">{name}</span>
        <span className="email">{email}</span>
      </Typography>
    </StyledDiv>
  );
};

NameColumnWithAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string
};

NameColumnWithAvatar.defaultProps = {
  email: ''
};

const StyledDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  '& .MuiAvatar-root': {
    width: 24,
    height: 24,
    fontSize: 10,
    marginRight: 8,
    background: '#4F6BED'
  },

  '& .content': {
    '& span': {
      display: 'block'
    },

    '& .name': {
      fontSize: 14,
      fontWeight: 400
    },

    '& .email': {
      fontSize: 12,
      color: theme.palette.text.secondary,
      textTransform: 'lowercase'
    }
  }
}));
