import PropTypes from 'prop-types';
import { useMemo } from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';

export default function ThemeConfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      typography,
      breakpoints
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

ThemeConfig.propTypes = {
  children: PropTypes.node.isRequired
};
