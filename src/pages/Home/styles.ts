import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  margin-top: 30px;
  max-width: 1440px;
  padding: 0 20px;
  background: ${({ theme }) => theme.palette.primary.dark};

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 30px;
`;
