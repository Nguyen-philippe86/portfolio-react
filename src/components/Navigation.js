import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="logo">
                <NavLink exact to="/" activeClassName="nav-active"><img src="./img/logo.png" /></NavLink>
            </div>
            <div className="containerlink">
                <NavLink exact to="/projets" className="linkNavBar" activeClassName="nav-active">Projets</NavLink>
                <NavLink exact to="/competences" className="linkNavBar" activeClassName="nav-active">Compétences</NavLink>
                <NavLink exact to="/contact" className="linkNavBar" activeClassName="nav-active">Contact</NavLink>
            </div>
        </div>
    );
};

export default Navigation;