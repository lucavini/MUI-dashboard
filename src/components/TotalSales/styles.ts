import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 380px;
  padding: 30px;
  box-shadow: 0px 2px 2px rgba(29, 36, 56, 0.1);
  border-radius: 5px;
  grid-column: span 2;
  background: ${({ theme }) => theme.palette.primary.light};

  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 14px;
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  .icon {
    margin-top: 20px;
    background: ${({ theme }) => theme.palette.primary.main};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border-radius: 8px;

    & svg > * {
      fill: #fff;
    }
  }

  .price {
    margin-top: 10px;
    font-size: 28px;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  .income {
    margin-top: 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #37c6bf;

    .arrow {
      color: #37c6bf;
      font-size: 14px;
    }
  }

  .caption {
    margin-top: 10px;
    font-size: 14px;
    color: #b6c1d6;
  }

  .Button {
    width: 100%;
    height: 45px;
    color: #fff;
    font-weight: 600;
    margin-top: auto;
    box-shadow: none;
    text-transform: capitalize;

    &:hover{
      box-shadow: none;
      background: #1189EF;
    }
  }
`;
