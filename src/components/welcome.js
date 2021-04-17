import React from 'react'
import "../styles/componentStyles/welcome/welcome.scss"

const Welcome = () => {
    return (
        <section className="welcome-section">
            <div className="welcome-section__dialbox">
                <h1 className="welcome-section__title">
                    Gamenacity
                </h1>
                <p className="welcome-section__content">
                    Yeah.. That place where we&nbsp;try&nbsp;to&nbsp;talk about <span className="bold">Games!</span>
                </p>
                <p className="welcome-section__highlight">
                    Sort of..
                </p>
            </div>
        </section>
    )
}

export default Welcome