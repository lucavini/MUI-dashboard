import React from 'react';

// Componentes
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import LateralMenu from '../LateralMenu';
import NavBar from '../NavBar';

type Props = {
  children: React.ReactNode;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string
};

function ContentWrapper({ children, setTheme, theme }: Props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <LateralMenu />
      <Box component='main' sx={{ flexGrow: 1 }}>
        <NavBar setTheme={setTheme} theme={theme} />
        <Box component='main'>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default ContentWrapper;
