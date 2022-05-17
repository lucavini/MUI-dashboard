import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Saira', sans-serif;
    }

    body{
        font-size: 16px;
        background: ${({ theme }) => theme.palette.primary.dark};
        color:  ${({ theme }) => theme.palette.primary.contrastText};
    }

    button{
        cursor: pointer;
    }


`;
