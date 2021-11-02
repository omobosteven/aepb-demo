import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField as MuiTextField, InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import clsx from 'clsx';

export const TextField = ({
  errors,
  register,
  rules = {},
  name,
  label,
  type,
  className,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { onBlur, onChange, ref } = register(name, rules);
  const classes = useStyles();

  const renderPasswordToggle = () =>
    type === 'password'
      ? {
          endAdornment: (
            <InputAdornment position="end">
              <button
                type="button"
                className={classes.toggleShowPassword}
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </button>
            </InputAdornment>
          )
        }
      : null;
  return (
    <MuiTextField
      classes={{ root: clsx(classes.textInput, className) }}
      fullWidth
      margin="normal"
      error={!!errors[name]}
      label={label}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      variant="outlined"
      inputRef={ref}
      type={showPassword ? 'text' : type || 'text'}
      InputProps={renderPasswordToggle()}
      helperText={errors[name]?.message}
      {...rest}
    />
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  rules: PropTypes.objectOf(PropTypes.any)
};

TextField.defaultProps = {
  rules: {}
};

const useStyles = makeStyles((theme) => ({
  textInput: {
    '& .MuiFormHelperText-root': {
      // fontSize: fontSizes.xsmall
    }
  },
  toggleShowPassword: {
    color: theme.palette.text.secondary,
    background: 'transparent',
    padding: 0,
    border: 'none',
    cursor: 'pointer',

    '& .MuiSvgIcon-root': {
      fontSize: 23
    }
  }
}));
