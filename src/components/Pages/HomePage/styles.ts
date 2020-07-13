import styled from "styled-components"
import { BrandColors } from "src/styles/theme"

export const Root = styled.section`
  width: 100%;
  max-width: 550px;

  padding: 0 2rem;
  margin-bottom: 4rem;

  @media all and (min-width: 1024px) {
    padding: 0;
  }

  ul {
    padding-left: 1rem;
  }
  li {
    list-style: disc;
    margin-bottom: 0.5rem;
  }
`

export const Clue = styled.span`
  color: ${BrandColors.Clue};
`
export const Flutterwave = styled.a`
  color: ${BrandColors.Flutterwave};
`
