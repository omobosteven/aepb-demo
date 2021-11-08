/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

export const SelectInput = ({
  name,
  label,
  className,
  options,
  value,
  onChange,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <FormControl
      fullWidth
      margin="normal"
      classes={{ root: clsx(classes.select, className) }}
    >
      {label && <InputLabel id={name}>{label}</InputLabel>}
      <Select
        labelId={name}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        {...rest}
      >
        {options.map((option) => (
          <MenuItem value={option.value} key={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired
};

SelectInput.defaultProps = {
  label: ''
};

const useStyles = makeStyles({
  select: {}
});
