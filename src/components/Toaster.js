import React from 'react';
import { Toaster as RhtToaster } from 'react-hot-toast';
import { makeStyles } from '@mui/styles';

export const Toaster = () => {
  const classes = useStyles();

  return (
    <RhtToaster
      toastOptions={{
        className: classes.toast,
        error: {
          position: 'top-right'
        },
        success: {
          position: 'top-right',
          style: {
            display: 'flex',
            alignItems: 'flex-start'
          }
        }
      }}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  toast: {
    border: 'none',
    borderRadius: 4,
    ...theme.typography.body1
  }
}));
