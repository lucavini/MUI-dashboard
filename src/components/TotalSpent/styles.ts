import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 380px;
  padding: 30px;
  box-shadow: 0px 2px 2px rgba(29, 36, 56, 0.1);
  border-radius: 5px;
  grid-column: span 6;
  background: ${({ theme }) => theme.palette.primary.light};

  .info {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 14px;
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
  .price {
    font-size: 25px;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const Graph = styled.div`
  width: 100%;
  height: 130%;
  margin-top: -120px;
`;
