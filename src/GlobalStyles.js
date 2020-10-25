import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-size: 112.5%;
    background-color: var(--backgroundColor);
    color: white;
    padding: 20px;
    font-family: Helvetica, sans-serif;
}

:root {
    --backgroundColor: #121212;
    }
`
