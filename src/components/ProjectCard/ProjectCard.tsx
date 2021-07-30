import React from "react";
import "./ProjectCard.scss";

function ProjectCard({ title, description }) {
  return (
    <div className="card">
      <img className="card__img" src="https://i.imgur.com/361qMEo.jpeg"></img>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
