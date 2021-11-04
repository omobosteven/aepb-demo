export const CssBaseline = () => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F5F8FA',
          height: '100vh',

          '& #root': {
            height: '100%'
          }
        }
      }
    }
  };
};
