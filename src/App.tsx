import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import GlobalStyles from './Styles/global';

import MUITheme from './Styles/Default/MUI';
import SCTheme from './Styles/Default/Styled';

import Routes from './Routes';
import LateralMenu from './components/LateralMenu';

function App() {
  return (
    <MUIThemeProvider theme={MUITheme}>
      <StyledThemeProvider theme={SCTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <LateralMenu />
          <Routes />
        </BrowserRouter>
      </StyledThemeProvider>
    </MUIThemeProvider>
  );
}

export default App;
