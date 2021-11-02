// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      defaultProps: {
        disableTouchRipple: true
      },
      styleOverrides: {
        root: {
          padding: '8px 16px',
          boxShadow: 'none',
          textTransform: 'capitalize',
          fontWeight: 400,
          borderRadius: 8,
          '&:hover': {
            boxShadow: 'none'
          }
        },
        sizeLarge: {
          fontSize: 16,
          lineHeight: '24px',
          padding: theme.spacing(1, 2),
          height: 44
        },
        containedPrimary: {
          color: theme.palette.secondary.main,
          '&:hover, &:active': {
            backgroundColor: theme.palette.primary.dark
          }
        },
        containedSecondary: {
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.primary.main,
          '&:hover, &:active': {
            backgroundColor: theme.palette.secondary.main
          }
        },
        containedInherit: {
          boxShadow: 'none',
          backgroundColor: '#F0F5FF',
          color: '#0050C8',
          '&:hover': {
            backgroundColor: '#B3CDFF'
          },
          '&:active': {
            backgroundColor: '#F0F5FF'
          }
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        },
        outlined: {
          background: 'white !important',
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        },
        disabled: {
          background: theme.palette.grey.disabled,
          color: '#A7A9BC'
        }
      }
    }
  };
}
