import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: monospace;
    }
    ::-webkit-scrollbar{
        width: .4rem;
    }
    ::-webkit-scrollbar-thumb{
        background-color: rgba(255,255,255,0.07);
        border-radius: 4px;
        &:hover{
            background-color: rgba(255,255,255,0.09)
        }
    }
    ::-webkit-scrollbar-track{
        background: rgb(41, 32, 74);
        background: linear-gradient(
            0deg,
            rgba(41, 32, 74, 0.26) 0%,
            rgba(105, 105, 105, 0.26) 100%
        );
    }

`;
