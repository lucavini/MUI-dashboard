import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Themes
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import GlobalStyles from './Styles/global';

// default Styles
import MUITheme from './Styles/Default/MUI';
import MUIDarkTheme from './Styles/Default/MUIDark';
import SCTheme from './Styles/Default/Styled';
import SCDarkTheme from './Styles/Default/StyledDark';

// Componentes
import ContentWrapper from './components/ContentWrapper';
import Routes from './Routes';

function App() {
  const [theme, setTheme] = React.useState('light');
  return (
    <MUIThemeProvider theme={theme === 'light' ? MUITheme : MUIDarkTheme}>
      <StyledThemeProvider theme={theme === 'light' ? SCTheme : SCDarkTheme}>
        <GlobalStyles />

        <BrowserRouter>
          <ContentWrapper theme={theme} setTheme={setTheme}>
            <Routes />
          </ContentWrapper>
        </BrowserRouter>
      </StyledThemeProvider>
    </MUIThemeProvider>
  );
}

export default App;
