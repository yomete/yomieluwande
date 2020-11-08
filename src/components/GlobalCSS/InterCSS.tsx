import * as React from 'react'
import { createGlobalStyle } from 'styled-components'

const sourceURL = require('./fonts/Inter-VariableFont_slnt,wght.ttf')

const CSS = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: url("${sourceURL}") format("ttf"),
  }
`
const InterCSS = () => <CSS />

export default InterCSS
