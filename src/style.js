import { createGlobalStyle } from 'styled-components/macro'
const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;  
}

html {
  box-sizing: border-box;
  font-family: 'arial', sans-serif;
  font-size: 16px;
}

img {
  max-width: 100%;
  height: inherit;
}
`

export default GlobalStyle