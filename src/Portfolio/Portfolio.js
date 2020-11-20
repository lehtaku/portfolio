import React from 'react';
import './Portfolio.css';

import Card from '../Card/Card';

export default function Portfolio({projects, onViewProject}) {
  return (
    <div className="container-fluid portfolio">
      <div className="container">
        <div className="row">
          <div className="col-sm section-heading">
            <h1>PORTFOLIO</h1>
            <p>
              A few projects from the real world, home, and school I&#39;ve been
              working with.
            </p>
          </div>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <Card
              key={index.toString()}
              id={project.id}
              title={project.title}
              type={project.type}
              imgSrc={project.thumbnail}
              clickHandler={onViewProject}
              description={project.caption}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
