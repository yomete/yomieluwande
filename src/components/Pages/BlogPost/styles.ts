import styled from 'styled-components'

export const Root = styled.article`
  width: 100%;
  max-width: 550px;

  padding: 0 1rem;
  margin-bottom: 4rem;

  @media all and (min-width: 768px) {
    padding: 0 2rem;
  }

  @media all and (min-width: 1200px) {
    padding: 0;
  }
`
