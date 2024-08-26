import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects Portfolio</h2>
      <div className="project-card">
        <h3>Project Title</h3>
        <p>Project description.</p>
        <a href="link-to-project">View Project</a>
      </div>
    </section>
  );
}

export default Projects;
