import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { FormControl, FormHelperText, MenuItem, Select, InputLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

export const ControlSelectInput = ({ name, label, className, options, control }) => {
  const classes = useStyles();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <FormControl
          fullWidth
          margin="normal"
          error={!!error}
          classes={{ root: clsx(classes.select, className) }}
        >
          <InputLabel id={name}>{label}</InputLabel>
          <Select
            labelId={name}
            name={name}
            label={label}
            value={value}
            onChange={onChange}
          >
            {options.map((option) => (
              <MenuItem value={option.value} key={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText component="span">{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

ControlSelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired
};

const useStyles = makeStyles({
  select: {}
});
