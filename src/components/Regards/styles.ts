import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  grid-column: span 4;
  grid-row: span 2;
  box-shadow: 0px 2px 2px rgba(29, 36, 56, 0.1);
  border-radius: 5px;
  background: ${({ theme }) => theme.palette.primary.light};
  padding: 50px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  display: block;
  font-size: 18px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const Subtitle = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #acb8d1;
`;

export const Prize = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  .icon {
    fill: #fff;
    font-size: 25px;
  }

  .analytics {
    width: 80%;
    height: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .StarSeller,
    .percentage {
      font-size: 14px;
      color: #fff;
    }

    &::before {
      content: '';
      z-index: 2;
      margin-top: 20px;
      width: 80%;
      height: 4px;
      background: #fff;
      position: absolute;
    }

    &::after {
      content: '';
      margin-top: 20px;
      width: 100%;
      height: 4px;
      background: #7cc2f6;
      position: absolute;
    }
  }
`;
