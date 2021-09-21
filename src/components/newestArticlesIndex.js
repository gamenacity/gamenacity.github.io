import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'
import colors from '../data/colors'

const NewestArticles = () =>{
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

  function CardDisplay(){
	  let styles = ''
	  for(let i = 5; i>=1; i--){
		  if(i==1){
			styles += `
		 	&:nth-of-type(${i}){
				 transition: 0.3s;
				 margin-left: 2em;
				 z-index: ${i+1};
				 &:hover{
					margin-right: 2rem;
					transform: rotate(-5deg);
					
				 }
			 }
		  `
		  }else{
			styles += `
			&:nth-of-type(${i}){
				transition: 0.3s;
				margin-left: -2em;
				z-index: ${i+1};
				&:hover{
				   margin-left: -4rem;
				   transform: rotate(-5deg);
				   margin-right: 2rem;
				}
			}
		 `
		  }
	  }
	  return css`${styles}`
  }
  const NewestArticlesSection = styled.section`
	background-color: #101626bd;
	padding: 1rem;
	margin: 2rem 0px;
	overflow-x: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	min-height: 40rem;
  `
  const Title = styled.h2`
	color: ${colors.yellow};
	font-family: "Montserrat", sans;
	font-weight: bold;
	text-align: center;
	font-size: clamp(2rem, 5vw, 4rem);
	text-shadow: ${colors.orange} .06em .03em;
	padding: 0px .5em;
	user-select: none;
  `	
  const List = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	padding: 2em;
  `
  const ListLink = styled(Link)`
  		min-height: 30rem;
		max-height: 40rem;
		min-width: 20rem;
		max-width: 60rem;
		margin-left: -2em;
		background-color: ${colors.blue};
		box-shadow: -2px -2px 6px #000;
		position: relative;
		border-radius: 5em;
		overflow: hidden;
		z-index: 1;
		${CardDisplay()}
  `
  const ArticleImg = styled(Img)`
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  &:after{
	  content: "";
	  width: 100%;
	  height: 100%;
	  position: absolute;
	  top: 0px;
	  z-index: 1;
	  background: linear-gradient(0deg, ${colors.blue}, #0000);
  }
  `
	const Flex = styled.article`
		padding: 1rem;
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		z-index: 3;
		gap: .5em;
	`
	const Text = styled.p`
		font-family: "Source Serif Pro", serif;
  		color: ${colors.yellow};
		font-size: .9rem;
	`
	const Highlight = styled.span`
  		color: ${colors.yellow};
		position: absolute;
		top: 90%;
		left: 50%;
		transform: translateX(-50%);
		font-weight: bold;
		font-family: "Source Serif Pro", serif;
		font-size: 1rem;
	`
  const ArticleTitle = styled.h2`
	color: ${colors.yellow};
	font-family: "Montserrat", sans-serif;
  `
  return(
		<NewestArticlesSection>
          <Title>
              Najnowsze<br />artykuły
          </Title>
          <List>
            {
              data.allMarkdownRemark.edges.map((edge) => {
                return (
                  <ListLink to={`/blog/${edge.node.fields.slug}`} >
                    <ArticleImg fluid={edge.node.frontmatter.banner.childImageSharp.fluid} alt={edge.node.frontmatter.title} /> 
                    <Flex>
                      <ArticleTitle>
                        {edge.node.frontmatter.title}
                      </ArticleTitle>
                      <Text>
                        {edge.node.frontmatter.date}
                      </Text>
                        <Text>
                          {edge.node.frontmatter.description}
                        </Text>
                    </Flex>
					<Highlight>Czytaj więcej...</Highlight>
                  </ListLink>
                )
              })
            }
          </List>
        </NewestArticlesSection>
	)
}

export default NewestArticles