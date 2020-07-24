import * as React from "react"
import { createGlobalStyle } from "styled-components"

const CSS = createGlobalStyle`
  @font-face {
    font-family: "Canterbold";
    src: url("./fonts/canterbold.woff") format("woff"),
  }
`
const Canterbold = () => <CSS />

export default Canterbold
