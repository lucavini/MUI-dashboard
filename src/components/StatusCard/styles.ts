import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(29, 36, 56, 0.1);
  background: ${({ theme }) => theme.palette.primary.light};
  grid-column: span 2;

  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-items: center;
`;

export const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.spending {
    background: #d3ebfc;
    .icon {
      fill: #2499ef;
    }
  }

  &.earnings {
    background: #edeafe;
    .icon {
      fill: #a797fc;
    }
  }

  &.revenue {
    background: #fde1e9;
    .icon {
      fill: #f76a92;
    }
  }

  &.clients {
    background: #feeae3;
    .icon {
      fill: #fb9777;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -80px;

  .Title {
    font-size: 14px;
    color: #c2cbde;
  }

  .Price {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;
