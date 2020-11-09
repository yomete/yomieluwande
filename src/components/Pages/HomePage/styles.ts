import styled from 'styled-components'
import { BrandColors } from 'src/styles/theme'

export const Root = styled.section`
  width: 100%;
  max-width: 550px;

  padding: 0 1rem;
  margin-bottom: 4rem;

  ul {
    padding-left: 1rem;
  }

  li {
    list-style: disc;
    margin-bottom: 0.5rem;
  }

  @media all and (min-width: 768px) {
    padding: 0 2rem;
  }

  @media all and (min-width: 1200px) {
    padding: 0;
  }
`

export const Clue = styled.span`
  color: ${BrandColors.Clue};
`
export const Flutterwave = styled.a`
  color: ${BrandColors.Flutterwave};
`
