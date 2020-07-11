import * as React from "react"

import AvertaCSS from "./AvertaCSS"
import GeneralCSS from "./GeneralCSS"
import ResetCSS from "./ResetCSS"

const GlobalCSS = () => (
  <>
    <ResetCSS />
    <AvertaCSS />
    <GeneralCSS />
  </>
)

export default GlobalCSS
