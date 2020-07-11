import React from "react"

import Header from "src/components/Header"
import GlobalCSS from "src/components/GlobalCSS"
import * as Styles from "./styles"

const SiteFrame: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <>
      <GlobalCSS />
      <Styles.Root>
        <Header />  

        {children}
      </Styles.Root>
    </>
  )
}

export default SiteFrame
