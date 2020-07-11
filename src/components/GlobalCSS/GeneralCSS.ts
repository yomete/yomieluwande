import { createGlobalStyle } from "styled-components"

import { FontFamily } from "src/styles/typography"

const GeneralCSS = createGlobalStyle`
*, *::before, *::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

a {
  color: inherit;
}

body {
  font-family: ${FontFamily.Averta};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

export default GeneralCSS
