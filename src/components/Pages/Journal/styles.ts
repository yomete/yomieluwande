import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

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

export const OtherPublications = styled.div`
  margin-bottom: 5rem;

  a {
    display: block;
    margin-bottom: 1.25rem;
  }
`

export const TechnicalArticles = styled.div`
  margin-bottom: 3.125rem;

  div {
    margin-bottom: 2rem;
  }
`

export const Category = styled.h2`
  font-variation-settings: 'wght' ${FontWeight.Medium};
  font-size: 1.375rem;

  margin-bottom: 1.25rem;
`

export const PublicationDate = styled.p`
  font-size: 0.875rem;

  margin-bottom: 0.625rem;
`

export const PublicationTitle = css`
  font-size: 1rem;
  font-variation-settings: 'wght' ${FontWeight.Medium};
`

export const ExternalLink = styled.a`
  ${PublicationTitle};
`

export const InternalLink = styled(Link)`
  ${PublicationTitle};
`
