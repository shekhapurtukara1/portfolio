// ProjectCard.js
import React from 'react';
import '../componentStyling/ProjectCard.css';
import { Link } from 'react-router-dom';

const ProjectCard = ({ name, description, technologies, live}) => {
  return (
    <div className="project-card-container">
         <div className="project-card">
          <div className="project-name"><h3>{name}</h3></div>
      <p className="project-description">{description}</p>
      <div className="technologies">
        Technologies used:<br/> {technologies.join(', ')}
      </div>
      <div class="button-div"><button className="btn btn:hover">{live!==""?<Link to={live} target="_blank">Live</Link>:"Live not available"}</button></div> 
    </div>
    </div>
  );
};

export default ProjectCard;
