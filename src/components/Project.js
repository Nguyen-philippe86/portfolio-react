import React, { useState } from 'react';
import { projectsData } from '../data/projectsData'

const Project = (props) => {

    const[currentProject] = useState(projectsData);
    const project = currentProject[props.projectNumber]

    return (
        <div className="card">
            <img src={project.img} alt={project.title} />
            <div className="info">
                <div className="titleProject">
                    <h2>{project.title}</h2>
                </div>
                <div className="contentProject">
                    <p>{project.description}</p>
                </div>
                <ul className="languages">
                    {project.languages.map((item) => {return <li key={item}>{item}</li>})}
                </ul>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <span className="btn">Voir le site</span>
                </a>
            </div>
        </div>
    );
};

export default Project;