import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import photo from "../assets/img/photo_profil.jpeg";
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
                    <h2 style={{ transform: `translateX(${offsetY*1.8}px)`}} id="parallax2">Développeur Web</h2>
                </div>
            </div>

            <div className="containerAbout">
                <div id="boxAbout">
                    <div className="titleAbout" data-aos="fade-right"><img src={photo} alt="Photo de profil de Philippe Nguyen"/>
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
                <div className="boxCV" 
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                    <img className="imgCV" src={cv} alt="CV"/>
                </div>
            </div>
        </div>
    );
};

export default Home;