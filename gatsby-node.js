/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
      const slug = createFilePath({ node, getNode, basePath: 'markdown' })
      console.log(slug, 'Slug');
      createNodeField({
        node,
        name: slug,
        value: slug,
      })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    const result = await graphql(`
      query {
        files: allMarkdownRemark {
          edges {
            node {
              frontmatter {
                type
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  
    // HANDLE ERRORS
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    // CREATE RECORD PAGES 
    const files = result.data.files.edges
    files.forEach(({ node }) => {
      if (node.frontmatter.type) {
        createPage({
          path: node.fields.slug,
          component: path.resolve(
            `./src/templates/${node.frontmatter.type}-page.js`
          ),
          context: {
            slug: node.fields.slug,
          },
        })
      }
    })
}