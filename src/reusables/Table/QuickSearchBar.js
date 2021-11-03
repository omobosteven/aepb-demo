import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import { SearchInput } from '../SearchInput';

export const QuickSearchBar = ({ title, setTableParams }) => {
  const [searchText, setSearchText] = useState('');
  const classes = useStyles();

  const handleSearch = (value) => {
    setSearchText(value);
    setTableParams((prevParams) => {
      return {
        ...prevParams,
        search: value
      };
    });
  };

  return (
    <div className={classes.tableHeader}>
      <Typography component="h2" className="title">
        {title}
      </Typography>
      <SearchInput
        className="tableSearchInput"
        value={searchText}
        // disabled={!!searchBy}
        onChange={handleSearch}
      />
    </div>
  );
};

QuickSearchBar.propTypes = {
  setTableParams: PropTypes.func.isRequired
};

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    minHeight: 49,
    background: theme.palette.common.white,
    borderBottom: '1px solid #EDEBE9',
    display: 'flex',
    alignItems: 'center',
    padding: '12px 15px',
    borderRadius: '8px 8px 0 0',

    '& .MuiTypography-root.title': {
      color: theme.palette.text.primary,
      fontSize: 18,
      fontWeight: 500
    },

    '& .tableSearchInput': {
      maxWidth: 497,
      marginLeft: 'auto',
      background: '#F3F2F1'
    }
  }
}));
