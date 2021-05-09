import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    const openMenu = () => {
        let openMenu = document.querySelector('.openMenu');
        let mainMenu = document.querySelector('.mainMenu');
        openMenu.addEventListener('click',show);
        function show() {
            mainMenu.style.display = 'flex';
            mainMenu.style.top = '0';
        }
    }

    const closeMenu = () => {
        let closeMenu = document.querySelector('.closeMenu');
        let mainMenu = document.querySelector('.mainMenu');
        closeMenu.addEventListener('click',close);
        function close() {
            mainMenu.style.top = '-150%';
        }
    }

    return (
        <div className="containerNavigation">
            <NavLink exact to="/" className="logo"><img src="./img/logo.png" alt="logo Philippe Nguyen"/></NavLink>
            <div className="openMenu" onClick={openMenu}><i className="fa fa-bars"></i></div>
            <ul className="mainMenu">
                <li><NavLink exact to="/" activeClassName="nav-active">Accueil</NavLink></li>
                <li><NavLink exact to="/projets" activeClassName="nav-active">Projets</NavLink></li>
                <li><NavLink exact to="/competences" activeClassName="nav-active">Compétences</NavLink></li>
                <li><NavLink exact to="/contact" activeClassName="nav-active">Contact</NavLink></li>
                <div className="closeMenu" onClick={closeMenu}><i className="fa fa-times"></i></div>
                <li>
                <a href="https://www.linkedin.com/in/philippe-nguyen-web-dev/" rel="noopener noreferrer" className="social" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/Nguyen-philippe86" rel="noopener noreferrer" className="social" target="_blank"><i className="fab fa-github-square"></i></a>
            </li>
            </ul>
        </div>
    );
};

export default Navigation;