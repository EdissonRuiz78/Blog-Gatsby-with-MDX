/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: ASC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)

  //pagination for post
  const postPerPage = 3
  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: require.resolve("./src/templates/allPost.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  //   //create post
  //   data.allMdx.edges.forEach(edge => {
  //     const slug = edge.node.frontmatter.slug
  //     const id = edge.node.id
  //     actions.createPages({
  //       path: slug,
  //       component: require.resolve(`./src/templates/singlePost.js`),
  //       context: { id },
  //     })
  //   })
}
