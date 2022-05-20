/* eslint-disable object-curly-newline */
import React from 'react';

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import salesdashboard from '../../Assets/images/salesdashboard.svg';
import { Container, Title, Subtitle, Prize } from './styles';

function Regards() {
  return (
    <Container>
      <div>
        <Title>Congratulations Watson! 🎉</Title>
        <Subtitle>You have done 76% more sales today.</Subtitle>
        <Subtitle>Check your inventory and update your stocks.</Subtitle>

        <Prize>
          <WorkspacePremiumIcon className='icon' />

          <div className='analytics'>
            <span className='StarSeller'>Star Seller</span>
            <span className='percentage'>76%</span>
          </div>
        </Prize>
      </div>
      <img src={salesdashboard} alt='seller' />
    </Container>
  );
}

export default Regards;
