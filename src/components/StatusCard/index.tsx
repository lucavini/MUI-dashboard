import React from 'react';

import { Card, Circle, Info } from './styles';

type Props = {
  type: string;
  Icon: any;
  children: React.ReactNode;
};

function StatusCard({ type, Icon, children }: Props) {
  return (
    <Card>
      <Circle className={type}>
        <Icon fontSize='large' className='icon' />
      </Circle>

      <Info>{children}</Info>
    </Card>
  );
}

export default StatusCard;
