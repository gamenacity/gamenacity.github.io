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
                    Ta.. to miejsce gdzie rozmawiamy o&nbsp;<span className="bold">Grach!</span>
                </p>
                <p className="welcome-section__highlight">
                    Jakoś..
                </p>
            </div>
        </section>
    )
}

export default Welcome