/* eslint-disable no-dupe-keys */
import { styled } from '@mui/material/styles';
import { AppBar as MUIAppBar } from '@mui/material';

export const AppBar = styled(MUIAppBar)(({ theme }) => ({
  height: '60px',
  boxShadow: 'none',
  background: `linear-gradient(0deg, ${theme.palette.primary.dark} 90%, rgba(34,43,54,1) 100%)`,

  '.icons': {
    fill: '#BCC6DA',
  },

  '.sun': {
    fill: '#FFC23D',
  },

  '.night': {
    fill: '#fff',
  },
}));
