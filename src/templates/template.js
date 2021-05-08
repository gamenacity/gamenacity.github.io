import React from 'react'
import Head from '../components/head'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'


export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "DD.MM.YYYY")
            }
            html
        }
    }
    `

const Blog = (props) => {

    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title} />
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>

            </div>
        </Layout>
    )
}

export default Blog