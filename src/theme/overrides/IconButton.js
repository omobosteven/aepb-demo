// ----------------------------------------------------------------------

export default function IconButton(theme) {
  return {
    MuiIconButton: {
      variants: [
        {
          props: { color: 'primary' },
          style: {
            '&:hover': { backgroundColor: theme.palette.action.hover }
          }
        },
        {
          props: { color: 'inherit' },
          style: {
            '&:hover': { backgroundColor: theme.palette.action.hover }
          }
        }
      ],

      styleOverrides: {
        root: {}
      }
    }
  };
}
