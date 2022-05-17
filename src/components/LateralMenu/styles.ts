import { styled } from '@mui/material/styles';
import { Drawer as MuiDrawer, List as MuiList } from '@mui/material';

const drawerWidth = 64;

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
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
    fill: '#BCC6DA',
  },

  '.item': {
    margin: '10px 0px',

    '&:hover .icon': {
      fill: theme.palette.primary.main,
    },
  },
}));

type Props = {
  mouseOver: boolean;
}

export const List = styled(MuiList)(({ mouseOver }: Props) => ({
  height: '100%',
  width: '140%',
  overflowY: 'scroll',
  overflowX: 'hidden',

  /* width */
  '&::-webkit-scrollbar': {
    width: '16px',
  },

  /* Track */
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },

  /* Handle */
  '&::-webkit-scrollbar-thumb': {
    background: mouseOver ? '#888' : 'transparent',
  },

  /* Handle on hover */
  '::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
}));
