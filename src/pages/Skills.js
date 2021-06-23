import React from 'react';
import Skill from '../components/Skill';
import { Typewriter } from 'react-typewriting-effect'

const Skills = () => {
    return (
        <div>
            <div className="containerAllSite">
                <div className="containerTitleAllSite">
                    <div className="contentTitleAllSite">
                        <h1 className="titleAllSite" 
                            data-aos="fade-down">Mes compétences</h1>
                    </div>
                </div> 
                <div className="containerP" data-aos="fade-in">
                    <p>
                        La formation de développeur web et web mobile m'a permis d'obtenir de nombreux acquis dans le domaine.
                        La partie front-end qui comprend l'intégration d'une maquette, réaliser une interface web responsive, statique et dynamique avec HTML, CSS/SCSS, JavaScript, jQuery. 
                    </p>
                    <p>
                        La partie back-end avec PHP/MySQL et Symfony, comprend la création d'une base de données, développer les composants d'accès aux données, intégrer les opérations de base (CRUD), ainsi qu'un système d'inscription et d'authentification sécurisé.
                    </p>
                    <p>    
                        Mais aussi savoir développer et intégrer un système de paiement en ligne pour les sites e-commerce avec Stripe, des confirmations d'inscription par e-mail avec MailJet, ou encore proposer une interface administrateur. Puis enfin développer un site web à l'aide d'un système de gestion de contenu (WordPress).
                    </p>
                </div>
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