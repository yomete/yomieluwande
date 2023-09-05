import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import { FontWeight } from 'src/styles/typography'

export const Root = styled.section`
  width: 100%;

  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 768px) {
    padding: 0 2rem;
  }

  @media all and (min-width: 1200px) {
    padding: 0;
  }
`

export const Canvas = styled.canvas``
