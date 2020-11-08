import { Link } from 'gatsby'
import styled from 'styled-components'

import { BrandColors } from 'src/styles/theme'
import { FontFamily } from 'src/styles/typography'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 4.375rem;
  margin-bottom: 6.25rem;

  padding: 0 2rem;

  @media all and (min-width: 1024px) {
    padding: 0;
  }

  div {
    &:nth-child(2) {
      margin-left: auto;
    }
  }
`

export const Logo = styled(Link)`
  color: ${BrandColors.Blue};
  font-family: ${FontFamily.Canterbold};
  font-size: 1.875rem;
`

export const PageLink = styled(Link)`
  color: ${BrandColors.Blue};
  font-size: 1.125rem;
  text-decoration: none;

  margin-left: 1.5rem;

  @media all and (min-width: 768px) {
    margin-left: 3.125rem;
  }
`
