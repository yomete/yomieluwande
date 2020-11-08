import { createGlobalStyle } from 'styled-components'

import { BrandColors } from 'src/styles/theme'
import { FontFamily, FontWeight } from 'src/styles/typography'

const GeneralCSS = createGlobalStyle`
*, *::before, *::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

body {
  font-family: ${FontFamily.Inter};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${BrandColors.Blue}
}

a {
  color: inherit;
}

p {
  margin-bottom: 1.25rem;
  line-height: 24px;
}

h1 {
  font-size: 2rem;
  font-variation-settings: "wght" ${FontWeight.Bold};

  margin-bottom: 2.5rem;
}
`

export default GeneralCSS
