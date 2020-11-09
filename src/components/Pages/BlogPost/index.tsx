import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'

import SEO from 'src/utils/seo'
import SiteFrame from 'src/components/SiteFrame'
import * as Styles from './styles'

const BlogPostTemplate = ({ data }) => {
  const post = data.mdx

  return (
    <SiteFrame>
      <Styles.Root itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <MDXRenderer>{post.body}</MDXRenderer>
      </Styles.Root>

      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
    </SiteFrame>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
