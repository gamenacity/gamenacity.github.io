const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/template.js')
    const res = await graphql(`
        query {
            allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}){
                edges {
                    node {
                        fields{
                            slug
                        }
                        frontmatter{
                            title
                        }
                    }
                }
            }
        }
    `)
    const articles = res.data.allMarkdownRemark.edges
    articles.forEach(({ node }) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${node.fields.slug}`,
            context: {
                slug: node.fields.slug,
            }
        })
    })
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = [
        `type MarkdownRemark implements Node { frontmatter: Frontmatter }`,
        `type Frontmatter {
          # you may need to adapt this line depending on the node type and key
          # that you want to create the relationship for
          image: File @link(by: "relativePath")
        }`
      ]
    createTypes(typeDefs)
}
