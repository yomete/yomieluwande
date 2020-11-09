import styled from 'styled-components'

import { FontWeight } from 'src/styles/typography'

export const Root = styled.section`
  width: 100%;
  max-width: 550px;

  padding: 0 1rem;

  @media all and (min-width: 768px) {
    padding: 0 2rem;
  }

  @media all and (min-width: 1200px) {
    padding: 0;
  }
`

export const Email = styled.div`
  margin-bottom: 2.5rem;
`

export const Experiences = styled.div`
  margin-bottom: 3.125rem;
`

export const Company = styled.h2`
  font-size: 1.5rem;
  font-variation-settings: 'wght' ${FontWeight.Bold};

  margin-bottom: 1.25rem;
`

export const Title = styled.p`
  span {
    font-style: italic;
    font-variation-settings: 'ital' 1;
  }
`
