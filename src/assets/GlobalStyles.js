import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Montserrat';
    }
    li {
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }
    a:visited {
        color: inherit;
    }
    a:link {
        color: inherit;
    }
`;
export default GlobalStyle;
