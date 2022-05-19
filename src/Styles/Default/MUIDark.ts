import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },

  palette: {
    primary: {
      contrastText: '#FFFFFF',
      main: '#2499EF',
      dark: '#1E2732',
      light: '#222B36',
    },
  },
});

export default theme;
