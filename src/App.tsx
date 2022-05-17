import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Box from '@mui/material/Box';

// Themes
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import GlobalStyles from './Styles/global';

// default Styles
import MUITheme from './Styles/Default/MUI';
import SCTheme from './Styles/Default/Styled';

// Componentes
import { DrawerHeader } from './components/DrawerHeader';
import LateralMenu from './components/LateralMenu';
import Routes from './Routes';

function App() {
  return (
    <MUIThemeProvider theme={MUITheme}>
      <StyledThemeProvider theme={SCTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Box sx={{ display: 'flex' }}>
            <LateralMenu />

            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
              <Routes />
            </Box>
          </Box>
        </BrowserRouter>
      </StyledThemeProvider>
    </MUIThemeProvider>
  );
}

export default App;
