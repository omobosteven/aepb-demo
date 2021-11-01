// ----------------------------------------------------------------------

export default function Input(theme) {
  return {
    MuiOutlinedInput: {
      defaultProps: {
        // disableTouchRipple: true,
        size: 'small'
      },
      styleOverrides: {
        root: {
          fontSize: 14,
          borderRadius: '2px',
          paddingRight: 0,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.grey.innerBorder
          },
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.grey.disabled
            }
          }
        }
      }
    }
  };
}
