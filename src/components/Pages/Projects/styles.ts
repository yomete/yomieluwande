import styled from "styled-components"

import { FontWeight } from "src/styles/typography"

export const Root = styled.section`
  width: 100%;
  max-width: 550px;

  padding: 0 1rem;

  @media all and (min-width: 768px) {
    padding: 0;
  }
`

export const Projects = styled.div`
  margin-bottom: 3.125rem;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  font-variation-settings: "wght" ${FontWeight.Medium};

  margin-bottom: 1.25rem;
`

export const FooterText = styled.p`
  margin-bottom: 2rem;

  span {
    font-style: italic;
    font-variation-settings: "ital" 1;
  }
`
