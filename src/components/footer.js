import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components";
import colors from "../data/colors";

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
    const CoreFooter = styled.footer`
        margin: auto;
        position: sticky;
        top: 100%;
        display: block;
        background-color: ${colors.black};
        padding: 2em 0px;
    `
    const Author = styled.p`
        color: ${colors.yellow};
        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
    `
    const FooterLink = styled.a`
        color: ${colors.yellow};
        font-family: "Montserrat", sans-serif;
        transition: 0.3s;
        &:hover{
            text-shadow: ${colors.orange} 2px 1px;
        }
    `
    return (
        <CoreFooter>
            <Author>
                &copy;2021 - <FooterLink href="https://github.io/Foxnacity">{data.site.siteMetadata.author}</FooterLink>
            </Author>
        </CoreFooter>
    )
}

export default Footer