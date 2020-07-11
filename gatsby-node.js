const path = require(`path`)

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const homePage = path.resolve(`./src/components/Pages/HomePage/index.tsx`)
  const journalPage = path.resolve(`./src/components/Pages/Journal/index.tsx`)
  const projectsPage = path.resolve(`./src/components/Pages/Projects/index.tsx`)
  const workPage = path.resolve(`./src/components/Pages/Work/index.tsx`)

  createPage({
    path: "/",
    component: homePage,
  })

  createPage({
    path: "/journal",
    component: journalPage,
  })

  createPage({
    path: "/projects",
    component: projectsPage,
  })

  createPage({
    path: "/work",
    component: workPage,
  })
}

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig()

  config.resolve = {
    ...config.resolve,

    alias: {
      ...(config.resolve && config.resolve.alias ? config.resolve.alias : {}),

      // Resolve tsconfig.json paths.
      src: path.resolve(__dirname, "src"),
    },
  }

  actions.replaceWebpackConfig(config)
}
