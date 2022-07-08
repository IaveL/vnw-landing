import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;0,800;1,500&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
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
