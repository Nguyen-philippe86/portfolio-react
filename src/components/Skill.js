import React, { useEffect, useRef, useState } from 'react';
import { skillsData } from '../data/skillsData';
import VanillaTilt from 'vanilla-tilt';

const Skill = (props) => {

    const[currentSkill] = useState(skillsData);
    const skill = currentSkill[props.projectNumber]

    function Tilt(props) {
        const { options, ...rest } = props;
        const tilt = useRef(null);
    
        useEffect(() => {
        VanillaTilt.init(tilt.current, options);
        }, [options]);
    
        return <div ref={tilt} {...rest} />;
    }

    const options = {
        scale: 1.1,
        speed: 1000,
        max: 30
    };

    return (
        <Tilt options={options}>
            <div className="services">
                <img src={skill.img} alt={skill.title} />
                <h2>{skill.title}</h2>
                <ul>
                    {skill.languages.map((item) => {return <li key={item}>{item}</li>})}
                </ul>
            </div>
        </Tilt>
    );
};

export default Skill;