import React from 'react'
import styled from 'styled-components'
import colors from '../data/colors'

const Welcome = () => {

    const Welcome = styled.section`
        width: 100%;
        height: 100vh;
        position: relative;
        overflow-x: hidden;
    `

    const DialBox = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        gap: 4rem;
        width: fit-content;
        padding: 10rem 6rem;
        height: fit-content;
        max-height: 40rem;
        background-color: ${colors.blue}bd;
        border-radius: 3rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `

    const Title = styled.h1`
        font-family: "Montserrat", sans-serif;
        color: ${colors.yellow};
        font-size: clamp(2rem, 12vw, 6rem);
    `
    
    const Content = styled.p`
        width: 75%;
        font-size: clamp(1rem, 12vw, 2rem);
        color: ${colors.white};
        font-family: "Montserrat", sans-serif;
        text-align: center;
    `
    const HighLight = styled.p`
        font-size: clamp(1.5rem, 12vw, 3rem);
        color: ${colors.yellow};
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
    `

    const Bold = styled.mark`
        background: none;
        font-weight: bold;
        color: white;
    `

    return (
        <Welcome>
            <DialBox>
                <Title>
                    Gamenacity
                </Title>
                <Content>
                    Ta.. to miejsce gdzie rozmawiamy o&nbsp;<Bold>Grach!</Bold>
                </Content>
                <HighLight>
                    Jakoś..
                </HighLight>
            </DialBox>
        </Welcome>
    )
}

export default Welcome