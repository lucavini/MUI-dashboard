import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  max-width: 1440px;
  padding: 0 20px;
  background: ${({ theme }) => theme.palette.primary.dark};

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 100px 100px auto;
  column-gap: 30px;
  row-gap: 30px;
`;
