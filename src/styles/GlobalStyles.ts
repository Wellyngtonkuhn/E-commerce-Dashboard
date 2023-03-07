import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        font-size: 16px;
    }

    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *{
        a{
            text-decoration: none;
        }
        li{
            list-style: none;
        }
    }
`;
