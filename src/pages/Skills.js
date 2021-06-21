import React from 'react';
import Skill from '../components/Skill';
import { Typewriter } from 'react-typewriting-effect'

const Skills = () => {
    return (
        <div>
            <div className="containerAllSite">
                <h1 className="titleAllSite" 
                    data-aos="fade-down">Compétences</h1>
                <p className="containerP"
                    data-aos="fade-in">
                    La formation de développeur web et web mobile m'a permis d'obtenir de nombreux acquis dans le domaine,
                    qui comprend l'intégration d'une maquette avec Adobe XD, réaliser une interface web statique et
                    dynamique avec HTML, CSS, JavaScript | jQuery. Créer une base de données, puis développer les composants
                    d'accès aux données avec MySQL. Réaliser la partie back-end en intégrant les opérations de base (CRUD)
                    pour la persistance des données, en particulier le stockage d'informations en base de données, proposer
                    une interface administrateur. Mais aussi savoir développer un système d'authentification ainsi que sa
                    sécurité avec PHP | Symfony. Puis enfin développer un site web à l'aide d'un système de gestion de
                    contenu (WordPress).
                </p>
                <Typewriter className="typewriter"
                    string='Mon profil vous a convaincue ? Contactez moi !'
                    delay={75}
                    cursor='_'
                />
                <div className="contentSkills"
                    data-aos="fade-left">
                    <Skill projectNumber={0}/>
                    <Skill projectNumber={1}/>
                    <Skill projectNumber={2}/>
                    <Skill projectNumber={3}/>
                    <Skill projectNumber={4}/>
                    <Skill projectNumber={5}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;