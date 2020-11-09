import * as React from 'react'

import * as Styles from './styles'

const Header = () => {
  return (
    <Styles.Header>
      <div>
        <Styles.Logo to="/">ye</Styles.Logo>
      </div>

      <div>
        <Styles.PageLink to="/writing">writing</Styles.PageLink>
        <Styles.PageLink to="/work">work</Styles.PageLink>
        <Styles.PageLink to="/projects">projects</Styles.PageLink>
      </div>
    </Styles.Header>
  )
}

export default Header
