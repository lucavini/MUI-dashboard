import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  grid-column: span 4;
  grid-row: span 2;
  box-shadow: 0px 2px 2px rgba(29, 36, 56, 0.1);
  border-radius: 5px;
  background: ${({ theme }) => theme.palette.primary.light};
`;
