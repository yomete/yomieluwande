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

export const Title = styled.h1`
  margin-bottom: 0;
`

export const Date = styled.p`
  font-style: italic;
`

export const ArticleBody = styled.article`
  margin-top: 1rem;
`
