import * as React from "react"
import { createGlobalStyle } from "styled-components"

const CSS = createGlobalStyle`
  @font-face {
    font-family: "Averta";
    src: url("./fonts/Inter-VariableFont_slnt,wght.ttf") format("ttf"),
  }
`
const InterCSS = () => <CSS />

export default InterCSS
