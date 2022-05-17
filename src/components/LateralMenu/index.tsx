import React from 'react';
import { Link } from 'react-router-dom';

// components
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

// icons
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';

// styles
import { Drawer, List } from './styles';

// assets
import { ReactComponent as Logo } from '../../Assets/images/logo.svg';

function LateralMenu() {
  const [over, setOver] = React.useState(false);
  return (
    <Drawer variant='permanent' anchor='left'>
      <Logo className='logo' />

      <List mouseOver={over} onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)}>
        <ListItem component={Link} to='/' button className='item'>
          <ListItemIcon>
            <Tooltip title='Dashboard' placement='right'>
              <DashboardOutlinedIcon className='icon' />
            </Tooltip>
          </ListItemIcon>
        </ListItem>

        <ListItem component={Link} to='/' button className='item'>
          <ListItemIcon>
            <Tooltip title='Account Settings' placement='right'>
              <SettingsOutlinedIcon className='icon' />
            </Tooltip>
          </ListItemIcon>
        </ListItem>

        <ListItem component={Link} to='/' button className='item'>
          <ListItemIcon>
            <Tooltip title='User Profile' placement='right'>
              <PersonOutlineOutlinedIcon className='icon' />
            </Tooltip>
          </ListItemIcon>
        </ListItem>

        <ListItem component={Link} to='/' button className='item'>
          <ListItemIcon>
            <Tooltip title='Data Table' placement='right'>
              <TableChartOutlinedIcon className='icon' />
            </Tooltip>
          </ListItemIcon>
        </ListItem>

        <ListItem component={Link} to='/' button className='item'>
          <ListItemIcon>
            <Tooltip title='Admin ecommerce' placement='right'>
              <ShoppingBasketOutlinedIcon className='icon' />
            </Tooltip>
          </ListItemIcon>
        </ListItem>

        <ListItem component={Link} to='/' button className='item'>
          <ListItemIcon>
            <Tooltip title='Ecommerce' placement='right'>
              <ShoppingBagOutlinedIcon className='icon' />
            </Tooltip>
          </ListItemIcon>
        </ListItem>

        <ListItem component={Link} to='/' button className='item'>
          <ListItemIcon>
            <Tooltip title='Invoice' placement='right'>
              <ReceiptOutlinedIcon className='icon' />
            </Tooltip>
          </ListItemIcon>
        </ListItem>

        <ListItem component={Link} to='/' button className='item'>
          <ListItemIcon>
            <Tooltip title='User Management' placement='right'>
              <ListOutlinedIcon className='icon' />
            </Tooltip>
          </ListItemIcon>
        </ListItem>

        <ListItem component={Link} to='/' button className='item'>
          <ListItemIcon>
            <Tooltip title='Projects' placement='right'>
              <FeedOutlinedIcon className='icon' />
            </Tooltip>
          </ListItemIcon>
        </ListItem>

        <ListItem component={Link} to='/' button className='item'>
          <ListItemIcon>
            <Tooltip title='Kanban' placement='right'>
              <ViewAgendaOutlinedIcon className='icon' />
            </Tooltip>
          </ListItemIcon>
        </ListItem>

        <ListItem component={Link} to='/' button className='item'>
          <ListItemIcon>
            <Tooltip title='Chat' placement='right'>
              <ChatBubbleOutlineOutlinedIcon className='icon' />
            </Tooltip>
          </ListItemIcon>
        </ListItem>

        <ListItem component={Link} to='/' button className='item'>
          <ListItemIcon>
            <Tooltip title='Calendar' placement='right'>
              <CalendarTodayOutlinedIcon className='icon' />
            </Tooltip>
          </ListItemIcon>
        </ListItem>

        <ListItem component={Link} to='/' button className='item'>
          <ListItemIcon>
            <Tooltip title='Sessions' placement='right'>
              <LocalPoliceOutlinedIcon className='icon' />
            </Tooltip>
          </ListItemIcon>
        </ListItem>

        <ListItem component={Link} to='/' button className='item'>
          <ListItemIcon>
            <Tooltip title='Pages' placement='right'>
              <FileOpenOutlinedIcon className='icon' />
            </Tooltip>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default LateralMenu;
