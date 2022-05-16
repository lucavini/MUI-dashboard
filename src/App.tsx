import React from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import GlobalStyles from './Styles/global';

import MUITheme from './Styles/Default/MUI';
import SCTheme from './Styles/Default/Styled';

function App() {
  return (
    <MUIThemeProvider theme={MUITheme}>
      <StyledThemeProvider theme={SCTheme}>
        <GlobalStyles />
        <div className='App'>ola mundo</div>
      </StyledThemeProvider>
    </MUIThemeProvider>
  );
}

export default App;
