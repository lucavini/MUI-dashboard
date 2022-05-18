import React from 'react';

// Components
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';

// styles
import { AppBar } from './styles';

// Assets
import { ReactComponent as MenuIcon } from '../../Assets/icons/Menu.svg';

type Props = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
};

function NavBar({ setTheme, theme }: Props) {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          size='small'
          edge='start'
          color='inherit'
          aria-label='open drawer'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 'bold' }}
        >
          Saas
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
            size='small'
            onClick={() => {
              if (theme === 'light') setTheme('dark');
              else setTheme('light');
            }}
          >
            {theme === 'light' ? (
              <WbSunnyIcon className='icons sun' />
            ) : (
              <Brightness4Icon className='icons night' />
            )}
          </IconButton>

          <IconButton size='small'>
            <NotificationsNoneOutlinedIcon className='icons' />
          </IconButton>

          <IconButton size='small'>
            <ViewComfyIcon className='icons' />
          </IconButton>

          <IconButton size='small'>
            <DashboardOutlinedIcon className='icons' />
          </IconButton>

          <IconButton size='small'>
            <AccountCircle className='icons' />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
