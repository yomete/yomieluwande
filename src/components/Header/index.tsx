import { Link } from "gatsby"
import * as React from "react"

import * as Styles from "./styles"

const Header = () => {
  return (
    <>
      <Link to="/journal">Journal</Link>
      <Link to="/work">Work</Link>
      <Link to="/projects">Projects</Link>
    </>
  )
}

export default Header
