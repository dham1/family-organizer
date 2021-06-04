import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Open Sans Condensed';
    margin: 20px 40px;

    @media screen and (max-width: 800px){
        margin:10px;
        
    }
}

a{
    text-decoration: none;
    color:black;
}

*{
    box-sizing: border-box;
}
`;