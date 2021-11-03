import { Chip, styled } from '@mui/material';
import PropTypes from 'prop-types';

export const TableChip = ({ text, ...rest }) => {
  return <StyledChip label={text} {...rest} />;
};

TableChip.propTypes = {
  text: PropTypes.string.isRequired
};

const StyledChip = styled(Chip)({
  fontSize: 12,
  borderRadius: 8,
  height: 'unset',
  lineHeight: 1.5,

  '& .MuiSvgIcon-root': {
    fontSize: 16,
    marginRight: 0,
    marginLeft: 8,
    color: 'transparent'
  },

  '&.MuiChip-colorInfo': {
    backgroundColor: '#DEECF9',

    '& .MuiChip-label': {
      color: '#2B88D8'
    }
  },

  '&.MuiChip-colorSuccess': {
    backgroundColor: '#5FD25533',

    '& .MuiChip-label': {
      color: '#107C10'
    }
  },

  '&.MuiChip-colorDefault': {
    backgroundColor: '#D2D0CE',

    '& .MuiChip-label': {
      color: '#605E5C'
    }
  },

  '&.MuiChip-colorError': {
    backgroundColor: '#FFD4D2',

    '& .MuiChip-label': {
      color: '#9F1F17'
    }
  },

  '& .MuiChip-label': {
    padding: '2px 8px'
  }
});
