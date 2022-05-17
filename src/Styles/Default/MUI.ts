import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Saira", sans-serif',
  },

  palette: {
    primary: {
      contrastText: '#1D2438',
      main: '#2499EF',
      dark: '#F3F4F9',
      light: '#FFFFFF',
    },
  },
});

export default theme;
