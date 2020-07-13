import * as React from "react"

import CanterboldCSS from "./CanterboldCSS"
import GeneralCSS from "./GeneralCSS"
import InterCSS from "./InterCSS"
import ResetCSS from "./ResetCSS"

const GlobalCSS = () => (
  <>
    <ResetCSS />
    <CanterboldCSS />
    <InterCSS />
    <GeneralCSS />
  </>
)

export default GlobalCSS
