export const CssBaseline = () => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100vh'
        },
        body: {
          backgroundColor: '#F5F8FA',
          height: '100%'
        }
      }
    }
  };
};
