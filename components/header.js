import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import colors from '../data/colors'
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

    //navbar functionality
    let prevScrollPos = typeof window !== `undefined` ? window.pageYOffset : ''

    function barHide(){
        const currentScrollPos = window.pageYOffset
        const nav = document.querySelector('#navbar')
        if(prevScrollPos > currentScrollPos){
            nav.style.top = "0px"
        } else {
            nav.style.top = "-300px"
        }
        prevScrollPos = currentScrollPos
    }
    useEffect(()=>{
        window.addEventListener('scroll', barHide)
        return () => window.removeEventListener('scroll', barHide)
    },[])

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

    const CoreHeader = styled.nav`
        width: 100%;
        padding: 2em;
        background-color: ${colors.blue};
        position: sticky;
        top: 0;
        transition: top 0.3s;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const HeaderTitle = styled.h2`
        color: ${colors.yellow};
        font-size: clamp(2rem, 6vw, 3.5rem);
        font-family:"Montserrat", sans-serif;
    `
    const NavWrapper = styled.div`
        max-width: 1920px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 1em;
    `
    const Menu = styled.ul`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 1em;
    `
    const MenuElement = styled.li`
        list-style: none;
        a{
            color: ${colors.yellow};
            font-family: "Montserrat", sans-serif;
            font-weight: bold;
            font-size: clamp(1rem, 1vw, 2rem);
            position: relative;
            &:before{
                content: '';
                position: absolute;
                height: 3px;
                width: 0;
                background-color: ${colors.yellow};
                bottom: -3px;
                left: 0;
                transition: 0.3s;
                z-index: 12;
            }
            &:after{
                content: '';
                position: absolute;
                height: 3px;
                width: 0;
                background-color: ${colors.orange};
                bottom: -1px;
                left: 2px;
                transition: 0.3s;
            }
            &:hover{
                &:before{
                    width: 100%;
                }
                &:after{
                    width: 100%;
                }
            }
        }
    `
    return (
        <CoreHeader id="navbar">
                <NavWrapper>
                {
                    show&&<Menu>
                    <MenuElement>
                        <Link to="/" className="menu__link">
                            Home
                        </Link>
                    </MenuElement>
                    <MenuElement>
                        <Link to="/blog" className="menu__link">
                            Blog
                        </Link>
                    </MenuElement>
                    </Menu>
                }
                <HeaderTitle>
                    {data.site.siteMetadata.title}
                </HeaderTitle>
                {
                    show&&<Menu>
                    <MenuElement>
                        <Link to="/about" className="menu__link">
                            About us
                        </Link>
                    </MenuElement>
                    <MenuElement>
                        <Link to="/contact" className="menu__link">
                            Contact
                        </Link>
                    </MenuElement>
                </Menu>
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
                                    <MenuElement>
                                        <Link to="/" className="menu__link">
                                            Home
                                        </Link>
                                    </MenuElement>
                                    <MenuElement>
                                        <Link to="/" className="menu__link">
                                            Blog
                                        </Link>
                                    </MenuElement>
                                    <MenuElement>
                                        <Link to="/" className="menu__link">
                                            About us
                                        </Link>
                                    </MenuElement>
                                    <MenuElement>
                                        <Link to="/" className="menu__link">
                                            Contact
                                        </Link>
                                    </MenuElement>
                                </ul>
                            </div>
                        }
                    </div>
                }
                </NavWrapper>
        </CoreHeader>
    )
}

export default Header