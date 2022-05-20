import React from 'react';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import { Button } from '@mui/material';
import { Container } from './styles';

function TotalSales() {
  return (
    <Container>
      <span className='title'>Total Sales</span>

      <span className='icon'>
        <ShoppingBagOutlinedIcon />
      </span>

      <span className='price'>$26,543</span>

      <span className='income'>
        <ArrowUpwardOutlinedIcon className='arrow' />
        +10.23%
      </span>

      <span className='caption'>Calculated in last 7 days</span>

      <Button className='Button' variant='contained'>View Full Report</Button>
    </Container>
  );
}

export default TotalSales;
