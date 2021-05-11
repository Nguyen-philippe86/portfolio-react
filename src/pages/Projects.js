import React from 'react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer';
import Project from '../components/Project'


const Projects = () => {

    return (
        <div>
            <Navigation />
            <div className="containerAllSite">
                <h1 className="titleAllSite" 
                    data-aos="fade-down">Projets réalisées</h1>
                <div className="contentProjects"
                    data-aos="fade-up">
                    <Project projectNumber={0}/>
                    <Project projectNumber={1}/>
                    <Project projectNumber={2}/>
                    <Project projectNumber={3}/>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;