import React from 'react';
import { Link } from 'react-router-dom'
import {useState} from 'react'

function Navigation () {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <nav className={`navbar ${showLinks ? "show-nav" : 'hide-nav'} `}>
            <div className="navbar__logo"><img src="./img/logo.png" alt="logo Philippe Nguyen"/></div>
            <div className="container__links">
                <ul className="navbar__links">
                    <Link exact to="/" className="navbar__link"><li className="navbar__item slideInDown-1">Accueil</li></Link>
                    <Link to="/projets" className="navbar__link"><li className="navbar__item slideInDown-2">Projets</li></Link>
                    <Link to="/competences" className="navbar__link"><li className="navbar__item slideInDown-3">Compétences</li></Link>
                    <Link to="/contact" className="navbar__link"><li className="navbar__item slideInDown-4">Contact</li></Link>
                    <li className="navbar__item slideInDown-5">
                        <a href="https://www.linkedin.com/in/philippe-nguyen-web-dev/" rel="noopener noreferrer" className="navbar__social" target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/Nguyen-philippe86" rel="noopener noreferrer" className="navbar__social" target="_blank"><i className="fab fa-github-square"></i></a>
                    </li>   
                </ul>
                <button className="navbar__burger" onClick={handleShowLinks}>
                    <span className="burger-bar"></span>
                </button>

            </div>
        </nav>
    )
}

export default Navigation;

