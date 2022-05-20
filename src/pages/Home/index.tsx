import React from 'react';

import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';

import StatusCard from '../../components/StatusCard';

import { Container } from './styles';
import TotalSpent from '../../components/TotalSpent';
import TotalSales from '../../components/TotalSales';

function Home() {
  return (
    <Container>
      <StatusCard type='spending' Icon={ShoppingBasketOutlinedIcon}>
        <span className='Title'>All Spending</span>
        <span className='Price'>$547</span>
      </StatusCard>

      <StatusCard type='earnings' Icon={BarChartOutlinedIcon}>
        <span className='Title'>Earnings</span>
        <span className='Price'>$521</span>
      </StatusCard>

      <StatusCard type='revenue' Icon={GridViewRoundedIcon}>
        <span className='Title'>Weekly revenue</span>
        <span className='Price'>$684</span>
      </StatusCard>

      <StatusCard type='clients' Icon={PeopleAltRoundedIcon}>
        <span className='Title'>New Clients</span>
        <span className='Price'>$321</span>
      </StatusCard>

      <TotalSpent />

      <TotalSales />
    </Container>
  );
}

export default Home;
