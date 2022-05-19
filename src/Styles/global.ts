import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    }
    
    main{
        background: ${({ theme }) => theme.palette.primary.dark};
    }
    
    body{
        background: ${({ theme }) => theme.palette.primary.dark};
        font-size: 16px;
        color:  ${({ theme }) => theme.palette.primary.contrastText};
    }

    button{
        cursor: pointer;
    }


`;
