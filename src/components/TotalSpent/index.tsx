/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';

import { Container, Graph } from './styles';

const data = [
  { quarter: 1, Spent: 22 },
  { quarter: 2, Spent: 80 },
  { quarter: 3, Spent: 36 },
  { quarter: 4, Spent: 50 },
  { quarter: 5, Spent: 60 },
  { quarter: 6, Spent: 30 },
  { quarter: 7, Spent: 90 },
  { quarter: 8, Spent: 26 },
  { quarter: 9, Spent: 75 },
  { quarter: 10, Spent: 10 },
  { quarter: 11, Spent: 55 },
  { quarter: 12, Spent: 65 },
];

function TotalSpent() {
  return (
    <Container>
      <div className='info'>
        <span className='title'>Total Spent</span>
        <span className='price'>$682.5</span>
      </div>

      <Graph>
        <VictoryChart domainPadding={20}>
          <VictoryAxis
            style={{
              tickLabels: { fill: '#CCD4E3' },
              axis: { stroke: 'transparent' },
            }}
            tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            tickFormat={[
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ]}
          />
          <VictoryBar
            style={{
              data: { fill: '#2499EF' },
            }}
            data={data}
            x='quarter'
            y='Spent'
          />
        </VictoryChart>
      </Graph>
    </Container>
  );
}

export default TotalSpent;
