import React from 'react';
import Project from '../components/Project'


const Projects = () => {

    return (
        <div className="containerAllSite">
            <div className="containerTitleAllSite">
                <div className="contentTitleAllSite">
                    <h1 className="titleAllSite" 
                        data-aos="fade-down">Projets réalisées</h1>
                </div>
            </div> 
            <div className="contentProjects"
                data-aos="fade-up">
                <Project projectNumber={0}/>
                <Project projectNumber={1}/>
                <Project projectNumber={2}/>
                <Project projectNumber={3}/>
                <Project projectNumber={4}/>
                <Project projectNumber={5}/>
            </div>
        </div>
    );
};

export default Projects;