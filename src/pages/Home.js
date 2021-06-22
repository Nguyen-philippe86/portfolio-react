import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import photo from "../assets/img/profil.png";
import cv from "../assets/img/cv-philippe-nguyen.png";
import cvPDF from "../assets/img/cv-philippe-nguyen.pdf"


const Home = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])


    return (
        <div>
            <div className="containerAccueil">
                <div className="contentH1">
                    <h1 style={{ transform: `translateX(${offsetY*-0.5}px)`}} id="parallax">Philippe Nguyen</h1>
                </div>
                <div className="contentH2">
                    <h2 style={{ transform: `translateX(${offsetY*1.8}px)`}} id="parallax2">Developpeur Web</h2>
                </div>
            </div>

            <div className="containerAbout">
                <div id="boxAbout">
                    <div className="profilePicture" data-aos="fade-right"><img src={photo} alt="Photo de profil de Philippe Nguyen"/>
                    </div>
                    <div className="contentAbout" 
                        data-aos="fade-left">
                        <h3>À propos de moi</h3>
                        <p>
                            Hello ! Je m’appelle Philippe Nguyen, développeur web.
                            Passionné depuis mon plus jeune âge pour le développement web, je me suis reconverti dans ce domaine
                            après
                            avoir travaillé plusieurs années dans le secteur aéronautique.
                            Cette reconversion a été pour moi un déclic dans ma vie professionnelle qui à ce jour, me donne
                            l'envie de l'exploiter pleinement. J’ai alors suivi une formation de Développeur web et web mobile
                            afin de valider un Titre RNCP de niveau bac+2, tout en prenant plaisir à développés divers
                            projets.
                        </p>
                    </div>
                </div>
            </div>

            <div className="containerCV">
                <a href={cvPDF} download>Télécharger le CV</a>
                <div className="boxCV">
                    <div className="cases">
                        <div className="case"
                            data-aos="zoom-in"     
                            data-aos-delay="200"
                            data-aos-offset="0">
                            <div className="titleCase">
                                <h4>Formation</h4>
                            </div>
                            <div className="contentCase">
                                <h4>2021 > Titre RNCP bac+2</h4>
                                <ul>
                                    <li>Développeur web & web mobile</li>
                                    <li>Talis Business School - Bordeaux</li>
                                </ul>
                                <h4>2020 > Autodidacte</h4>
                                <ul>
                                    <li>OpenClassrooms, Pierre-Giraud, Udemy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="case"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                            data-aos-offset="0">
                            <div className="titleCase">
                                <h4>Technologies Utilisées</h4>
                            </div>
                            <div className="contentCase">
                                <h4><strong>Langages informatiques</strong></h4>
                                <ul>
                                    <li>
                                        PHP | Javascript | HTML | CSS/SCSS
                                    </li>
                                </ul>
                                <h4>Frameworks | CMS</h4>
                                <ul>
                                    <li>
                                        Symfony | ReactJS | Bootstrap | Wordpress
                                    </li>
                                </ul>
                                <h4>Environnement</h4>
                                <ul>
                                    <li>
                                        VS Code | Git & GitHub
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="case"
                            data-aos="zoom-in"
                            data-aos-delay="800"
                            data-aos-offset="0">
                            <div className="titleCase">
                                <h4>Compétences</h4>
                            </div>
                            <div className="contentCase">
                                <p className="skills">
                                    <li>Réaliser une interface web statique et dynamique</li>
                                    <li>Créer une base de données</li>
                                    <li>Développer les composants d’accès aux données</li>
                                    <li>Réaliser la partie back-end d’un site web</li>
                                    <li>Esprit d’équipe | Organisé | Passioné</li>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;