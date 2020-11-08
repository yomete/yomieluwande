import * as React from 'react'
import { createGlobalStyle } from 'styled-components'

const sourceURL = require('./fonts/CanterBold.woff')

const CSS = createGlobalStyle`
  @font-face {
    font-family: "Canterbold";
    src: url("${sourceURL}") format("woff"),
  }
`
const Canterbold = () => <CSS />

export default Canterbold
