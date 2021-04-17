import React from "react"
import "../styles/componentStyles/footer/footer.scss";
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)
    return (
        <footer className="core-footer">
            <p className="core-footer__author">
                &copy;2021 - <a className="core-footer__link" href="https://github.io/Foxnacity">{data.site.siteMetadata.author}</a>
            </p>
        </footer>
    )
}

export default Footer