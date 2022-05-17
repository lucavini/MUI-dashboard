import { styled } from '@mui/material/styles';
import { Drawer as MuiDrawer, List as MuiList } from '@mui/material';

const drawerWidth = 64;

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    borderRadius: '10px',
    boxShadow: '20px 35px 50px #0000001A',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: drawerWidth,
    height: '100vh',
    padding: '5px 0px',
    boxSizing: 'border-box',
    background: theme.palette.primary.light,
  },

  '.logo': {
    maxWidth: '40px',
    maxHeight: '40px',
  },

  '.icon': {
    margin: '0 auto',
    fill: theme.palette.primary.dark,
    color: theme.palette.primary.dark,
  },

  '.item': {
    margin: '10px 0px',

    '&:hover .icon': {
      fill: '#fff',
      color: '#fff',
    },
  },
}));

export const List = styled(MuiList)(() => ({
  height: '100%',
  overflowY: 'hidden',
  overflowX: 'hidden',
}));
