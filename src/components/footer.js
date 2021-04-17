import React from "react"
import "../styles/componentStyles/footer/footer.scss";

const Footer = () => {
    return (
        <footer className="core-footer">
            <p className="core-footer__author">
                &copy;2021 - <a className="core-footer__link" href="https://github.io/Foxnacity">Foxnacity</a>
            </p>
        </footer>
    )
}

export default Footer