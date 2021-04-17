import React, { useState, useEffect } from "react"
import "../styles/componentStyles/header/header.scss"
import { Link, graphql, useStaticQuery } from 'gatsby'

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)

    const [show, setShow] = useState(false)
    const [men, menShow] = useState(false)

    function updateDisplay() {
        const screen = window.matchMedia('(min-width: 540px)')
        screen.matches ? setShow(true) : setShow(false)
    }

    useEffect(() => {
        updateDisplay()
        window.addEventListener("resize", updateDisplay)
        return () => window.removeEventListener("resize", updateDisplay)
    })

    return (
        <header className="core-header">
            {
                !show && <h2 className="core-header__title">
                    {data.site.siteMetadata.title}
                </h2>
            }
            <nav className="core-header__menu">
                {
                    show && <ul className="menu">
                        <li className="menu__element">
                            <h1 className="menu__title">
                                {data.site.siteMetadata.title}
                            </h1>
                        </li>
                        <li className="menu__element">
                            <Link to="/" className="menu__link">
                                Home
                            </Link>
                        </li>
                        <li className="menu__element">
                            <Link to="/" className="menu__link">
                                Blog
                            </Link>
                        </li>
                        <li className="menu__element">
                            <Link to="/" className="menu__link">
                                About us
                            </Link>
                        </li>
                        <li className="menu__element">
                            <Link to="/" className="menu__link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                }
                {
                    !show && <div className="menu--burger">
                        <i className="fas fa-bars" id="menu" onClick={() => {
                            const menuIcon = document.getElementById('menu')
                            men ? menuIcon.className = 'fas fa-bars' : menuIcon.className = 'fas fa-times'
                            menShow(!men)
                        }

                        }></i>
                        {
                            men && <div className="menu--list">
                                <ul className="menu--vertical">
                                    <li className="menu__element">
                                        <Link to="/" className="menu__link">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="menu__element">
                                        <Link to="/" className="menu__link">
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="menu__element">
                                        <Link to="/" className="menu__link">
                                            About us
                                        </Link>
                                    </li>
                                    <li className="menu__element">
                                        <Link to="/" className="menu__link">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                }
            </nav>
        </header>
    )
}

export default Header