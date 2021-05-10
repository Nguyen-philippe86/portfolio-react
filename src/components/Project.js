import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../data/projectsData'
import VanillaTilt from 'vanilla-tilt';

const Project = (props) => {

    const[currentProject] = useState(projectsData);
    const project = currentProject[props.projectNumber]

    // function Tilt(props) {
    //     const { options, ...rest } = props;
    //     const tilt = useRef(null);
    
    //     useEffect(() => {
    //     VanillaTilt.init(tilt.current, options);
    //     }, [options]);
    
    //     return <div ref={tilt} {...rest} />;
    // }

    // const options = {
    //     scale: 1.1,
    //     speed: 1000,
    //     max: 30
    // };

    return (
        // <Tilt options={options}>
            <div className="card">
                <img src={project.img} alt={project.title} />
                <div className="info">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <ul className="languages">
                        {project.languages.map((item) => {return <li key={item}>{item}</li>})}
                    </ul>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <span className="btn">Voir le site</span>
                    </a>
                </div>
            </div>
        /* </Tilt> */
    );
};

export default Project;