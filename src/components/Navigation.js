import React from 'react';
import { NavLink } from 'react-router-dom'
import {useState} from 'react'

function Navigation () {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <nav className={`navbar ${showLinks ? "show-nav" : 'hide-nav'} `}>
            <div className="navbar__logo"><img src="./img/logo.png" alt="logo Philippe Nguyen"/></div>
            <ul className="navbar__links">
                <li className="navbar__item"><NavLink exact to="/" className="navbar__link">Accueil</NavLink></li>
                <li className="navbar__item"><NavLink to="/projets" className="navbar__link">Projets</NavLink></li>
                <li className="navbar__item"><NavLink to="/competences" className="navbar__link">Compétences</NavLink></li>
                <li className="navbar__item"><NavLink to="/contact" className="navbar__link">Contact</NavLink></li>
                <li>
                    <a href="https://www.linkedin.com/in/philippe-nguyen-web-dev/" rel="noopener noreferrer" className="navbar__social" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Nguyen-philippe86" rel="noopener noreferrer" className="navbar__social" target="_blank"><i className="fab fa-github-square"></i></a>
                </li>   
            </ul>
            <button className="navbar__burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </nav>
    )
}

export default Navigation;

// const openMenu = () => {
//     let openMenu = document.querySelector('.openMenu');
//     let mainMenu = document.querySelector('.mainMenu');
//     openMenu.addEventListener('click',show);
//     function show() {
//         mainMenu.style.display = 'flex';
//         mainMenu.style.top = '0';
//     }
// }

// const closeMenu = () => {
//     let closeMenu = document.querySelector('.closeMenu');
//     let mainMenu = document.querySelector('.mainMenu');
//     closeMenu.addEventListener('click',close);
//     function close() {
//         mainMenu.style.top = '-150%';
//     }
// }

// return (
//     <div className="containerNavigation">
//         <NavLink exact to="/" className="logo"><img src="./img/logo.png" alt="logo Philippe Nguyen"/></NavLink>
//         <div className="openMenu" onClick={openMenu}><i className="fa fa-bars"></i></div>
//         <ul className="mainMenu">
//             <li><NavLink exact to="/" activeClassName="nav-active">Accueil</NavLink></li>
//             <li><NavLink to="/projets" activeClassName="nav-active">Projets</NavLink></li>
//             <li><NavLink to="/competences" activeClassName="nav-active">Compétences</NavLink></li>
//             <li><NavLink to="/contact" activeClassName="nav-active">Contact</NavLink></li>
//             <div className="closeMenu" onClick={closeMenu}><i className="fa fa-times"></i></div>
//             <li>
//                 <a href="https://www.linkedin.com/in/philippe-nguyen-web-dev/" rel="noopener noreferrer" className="social" target="_blank"><i className="fab fa-linkedin"></i></a>
//                 <a href="https://github.com/Nguyen-philippe86" rel="noopener noreferrer" className="social" target="_blank"><i className="fab fa-github-square"></i></a>
//             </li>   
//         </ul>
//     </div>
// )
