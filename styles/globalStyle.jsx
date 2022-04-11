import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    html {
      font-size: 62.5%;      
    }
    
    body {
      box-sizing: border-box;
      font-family: 'Raleway', sans-serif;
      background-color: #f1f4f8;
    }
    
    a {
      text-decoration: none;
    }
    
    ul, li {
      list-style: none;
    }
`;