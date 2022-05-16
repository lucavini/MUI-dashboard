import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Saira", sans-serif',
  },

  palette: {
    primary: {
      lighter: '#84BBE9',
      light: '#518CBC',
      main: '#1C5788',
      dark: '#003057',
      contrastText: '#fff',
    },

    secondary: {
      lighter: '#F2F2F2',
      light: '#E6E6E6',
      main: '#8C8C8C',
      dark: '#202020',
      contrastText: '#000',
    },

    error: {
      main: '#F13E3E',
    },
  },
});

export default theme;
