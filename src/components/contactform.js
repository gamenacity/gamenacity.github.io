import React from 'react'
import "../styles/componentStyles/form/form.scss"

const Form = () => {
    return (
        <form action="https://formsubmit.co/gamenacity@gmail.com" method="POST" enctype="application/x-www-form-urlencoded" className="contact-form">
            <label for="nick" className="contact-form__label">
                <span className="contact-form__label--span">Nick</span>
                <input type="text" name="nick" id="nick" className="contact-form__input"/>
            </label>
            <label for="email" className="contact-form__label">
                <span className="contact-form__label--span">Email</span>
                <input type="text" name="email" id="email" className="contact-form__input"/>
            </label>
            <label for="comment" className="contact-form__label">
                <span className="contact-form__label--span">Wiadomość</span>
            <textarea name="comment" cols="50" className="contact-form__textarea"></textarea>
            </label>
            <input type='submit' name="subm" id="subm" value="Send" className="contact-form__submit"/>
        </form>
    )
}

export default Form