import React from 'react'
import styled from 'styled-components'
import colors from '../data/colors'
import "../styles/componentStyles/indexpage/theme.scss"

const HeadSection = () => {
	const ThemeSection = styled.section`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #090b11dc;
		padding: 5rem;
		@media(min-width: 1024px){
			flex-direction: row;
		}
		@media(min-width: 1600px){
			width: 80%;
			margin: auto;
		}
	`
	const ContentBox = styled.div`
		@media(min-width: 1024px){
			width: 50%;
		}
	`
	const ThemeTitle = styled.h2`
		font-size: clamp(2rem, 4vw, 3rem);
		color: ${colors.white};
		font-family: "Montserrat", sans-serif;
		font-weight: 600;
		margin-bottom: .5em;
	`
	const Content = styled.p`
		font-size: 1.1rem;
		color: white;
		margin-bottom: .7em;
		font-family: "Source Serif Pro", serif;
	`
	return(
		<ThemeSection>
          <ContentBox>
            <ThemeTitle>
              Gry to Sztuka
        </ThemeTitle>
            <Content>
              Nie wierzycie w to? W momencie, gdy zastanawiamy się czym faktycznie sztuka jest, przed oczami kilka kategorii: obrazy, muzyka, wiersze, książki, filmy. Lista jest dość długa, a tak naprawdę to wszystko łączy się ze sobą w&nbsp;takim tworze jak gra komputerowa.
        </Content>
            <Content>
              Dobrze napisana fabuła, przepiękne widoki, klimatyczna muzyka te elementy składają się na całość zwaną grą. Rozumimemy, że nie dla każdego jest to coś oczywistego, ale patrząc obiektywnie, to taki jest stan rzeczy.
        </Content>
            <Content>
              Gry to wszystko w&nbsp;jednym pudełku
        </Content>
          </ContentBox>
          <div className="theme-section__imagebox" />
        </ThemeSection>
	)
}

export default HeadSection