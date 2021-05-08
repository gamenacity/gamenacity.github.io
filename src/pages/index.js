import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Header from "../components/header"
import Footer from "../components/footer"
import Welcome from "../components/welcome"
import Head from "../components/head"
import styled from 'styled-components'
import "../styles/componentStyles/indexpage/theme.scss"
import * as newarticles from "../styles/componentStyles/mainpagearticles/newestarticles.module.scss"
import Img from 'gatsby-image'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  padding: 2em;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}){
        edges{
          node {
            frontmatter{
              title
              date(formatString: "DD.MM.YYYY")
              description
              banner {
                childImageSharp{
                  fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields{
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <div className="container">
      <Head title="Home" />
      <Welcome />
      <Header />
      <Main>
        <section className="theme-section">
          <div className="theme-section__contentbox">
            <h2 className="theme-section__title">
              Gry to Sztuka
        </h2>
            <p className="theme-section__content">
              Nie wierzycie w to? W momencie, gdy zastanawiamy się czym faktycznie sztuka jest, przed oczami kilka kategorii: obrazy, muzyka, wiersze, książki, filmy. Lista jest dość długa, a tak naprawdę to wszystko łączy się ze sobą w&nbsp;takim tworze jak gra komputerowa.
        </p>
            <p className="theme-section__content">
              Dobrze napisana fabuła, przepiękne widoki, klimatyczna muzyka te elementy składają się na całość zwaną grą. Rozumimemy, że nie dla każdego jest to coś oczywistego, ale patrząc obiektywnie, to taki jest stan rzeczy.
        </p>
            <p className="theme-section__content">
              Gry to wszystko w&nbsp;jednym pudełku
        </p>
          </div>
          <div className="theme-section__imagebox">

          </div>
        </section>
        <section className={newarticles.newestarticles}>
          <h2 className={newarticles.newestarticles__title}>
              Najnowsze<br />artykuły
          </h2>
          <div className={newarticles.newestarticles__list}>
            {
              data.allMarkdownRemark.edges.map((edge) => {
                return (
                    <article className={newarticles.article}>
                      <h2 className={newarticles.article__title}>
                        {edge.node.frontmatter.title}
                      </h2>
                      <p className={newarticles.article__date}>
                        {edge.node.frontmatter.date}
                      </p>
                      <div className={newarticles.article__content}>
                        <Img className={newarticles.article__image} fluid={edge.node.frontmatter.banner.childImageSharp.fluid} alt={edge.node.frontmatter.title} />
                        <p className={newarticles.article__text}>
                          {edge.node.frontmatter.description}
                        </p>
                      </div>
                      <Link to={`/blog/${edge.node.fields.slug}`} className={newarticles.article__readmore}>
                        Czytaj więcej...
                      </Link>
                    </article>

                )
              })
            }
          </div>
        </section>
      </Main>
      <Footer />
    </div>
  )
}

export default IndexPage
