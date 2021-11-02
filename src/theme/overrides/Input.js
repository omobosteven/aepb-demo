// ----------------------------------------------------------------------

export default function Input(theme) {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 12,
          marginLeft: 4,
          color: theme.palette.error.main
        }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 16,
          lineHeight: 1.4,
          color: theme.palette.text.tertiary
        }
      }
    },

    MuiOutlinedInput: {
      defaultProps: {
        // disableTouchRipple: true,
        // size: 'small'
      },
      styleOverrides: {
        root: {
          maxHeight: 55,
          fontSize: 16,
          color: theme.palette.text.secondary,
          borderRadius: 8,

          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.border.primary
          },
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.grey.disabled
            }
          },

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.border.primary
          },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main
          }
        },

        input: {
          padding: '18px 14px'
        }
      }
    }
  };
}
