const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const homePage = path.resolve(`./src/components/Pages/HomePage/index.tsx`)
  const journalPage = path.resolve(`./src/components/Pages/Journal/index.tsx`)
  const projectsPage = path.resolve(`./src/components/Pages/Projects/index.tsx`)
  const workPage = path.resolve(`./src/components/Pages/Work/index.tsx`)

  // Define a template for blog post
  const blogPost = path.resolve(`./src/components/Pages/BlogPost/index.tsx`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `,
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors,
    )
    return
  }

  const posts = result.data.allMdx.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post) => {
      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
        },
      })
    })
  }

  createPage({
    path: '/',
    component: homePage,
  })

  createPage({
    path: '/journal',
    component: journalPage,
  })

  createPage({
    path: '/projects',
    component: projectsPage,
  })

  createPage({
    path: '/work',
    component: workPage,
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig()

  config.resolve = {
    ...config.resolve,

    alias: {
      ...(config.resolve && config.resolve.alias ? config.resolve.alias : {}),

      // Resolve tsconfig.json paths.
      src: path.resolve(__dirname, 'src'),
    },
  }

  actions.replaceWebpackConfig(config)
}
