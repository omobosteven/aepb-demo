import React from 'react';
import { TextField, styled, InputAdornment, SvgIcon } from '@mui/material';
import { ReactComponent as SearchIcon } from 'assets/search-icon.svg';
import PropTypes from 'prop-types';

export const SearchInput = ({ value, onChange, ...rest }) => {
  return (
    <StyledSearch
      placeholder="Search"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SvgIcon
              component={SearchIcon}
              viewBox="0 0 17 16"
              fontSize="small"
              sx={{ fontSize: 16 }}
            />
          </InputAdornment>
        )
      }}
      value={value}
      onChange={(event) => onChange(event.target.value, event)}
      {...rest}
    />
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

SearchInput.defaultProps = {
  className: ''
};

const StyledSearch = styled(TextField)({
  background: '#CCE4F6',
  borderRadius: 2,
  maxWidth: 497,

  '& .MuiOutlinedInput-root': {
    border: 0,
    borderRadius: 2,
    fontSize: 14,
    color: '#004578',

    '& .MuiOutlinedInput-input': {
      padding: '6px 14px 6px 5px'
    },

    '& .MuiOutlinedInput-notchedOutline': {
      border: 0
    }
  }
});
