import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <Helmet>
            <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
            <meta charSet="utf-8" />
            <script src="https://kit.fontawesome.com/55460b0799.js" crossorigin="anonymous"></script>
        </Helmet>
    )
}

export default Head