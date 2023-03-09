import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      // colors
      --grey: #808080;
      --blue: #101cb9;
      --lightBlue: #a1e5fa;
      --white: #ffffff;
      --black: #0c0c0c;
      // Font sizes
      --font-size-s: 0.8rem;
      --font-size-m: 1rem;
      --font-size-l: 1.2rem;
      --font-size-xl: 1.8rem;
      --font-size-xxl: 2rem;
   }
 
   #root{
      min-width: 320px;
      margin: 0 auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }
`

export default GlobalStyle
