// When mapping over JSON data use this component

import React from "react";

function Project({ image, projectName, projectInfo }) {
  return (
    <div className="listprojects__card">
      <div className="listprojects__card__image">
        <img src={image} alt={projectName} />
      </div>
      <div className="listprojects__card__content">
        <h3> {projectName} </h3>
        <p>{projectInfo}</p>
      </div>
    </div>
  );
}

export default Project;
