import React from 'react'
import styled from 'styled-components'
import colors from '../data/colors'

const Form = () => {
    const ContactForm = styled.form`
        background-color: ${colors.blue};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 2em 6em;
        margin: auto;
        position: relative;
    `
    const Label = styled.label`
        color: white;
        font-family: "Montserrat", sans-serif;
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0.5em 0 0 0;
        z-index: 2;
        @media(min-width: 1024px){
            width: 70%;
        }
        @media(min-width: 1600px){
            width: 40%;
        }
    `
    const Span = styled.span`
        margin-left: 1em;
        font-size: 1.5rem;
        font-weight: bolder;
        z-index: 2;
    `
    const Input = styled.input`
        border-radius: 10vw;
        padding: 1em;
        width: 100%;
        border: none;
        z-index: 2;
    `
    const Textarea = styled.textarea`
        padding: 1em;
        width: 100%;
        min-height: 8em;
        resize: none;
        border-radius: 4vw;
        border: none;
        z-index: 2;
    `
    const Submit = styled.input`
        z-index: 2;
        margin-top: 1em;
        font-size: 1rem;
        padding: .5em 1.5em;
        border-radius: 10vw;
        border: none;
        background-color: ${colors.black};
        color: ${colors.yellow};
        font-weight: bold;
    `

    return (
        <ContactForm action="https://formsubmit.co/gamenacity@gmail.com" method="POST" enctype="application/x-www-form-urlencoded">
            <Label for="nick">
                <Span >Nick</Span>
                <Input type="text" name="nick" id="nick" />
            </Label>
            <Label for="email">
                <Span>Email</Span>
                <Input type="text" name="email" id="email" />
            </Label>
            <Label for="comment">
                <Span >Wiadomość</Span>
            <Textarea name="comment" cols="50" ></Textarea>
            </Label>
            <Submit type='submit' name="subm" id="subm" value="Send"/>
        </ContactForm>
    )
}

export default Form
