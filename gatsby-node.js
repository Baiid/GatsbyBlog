
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(`
      
  query {
    allContentfulBlog {
      nodes {
        slug
        id
      }
    }
  }`
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`src/templates/blog.js`)
  result.data.allContentfulBlog.nodes.forEach((node) => {
    const path = `blog/${node.slug}`
    createPage({
      path,
      component: require.resolve("./src/template/blog.js"),
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        id:node.id,
      },
    })
  })


  


  
}


