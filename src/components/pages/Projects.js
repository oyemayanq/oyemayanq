import "../../styles/projects.css";
import React from "react";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-list">
        <div className="project-container">
          <a
            href="https://github.com/oyemayanq/Thread"
            className="project-title"
          >
            Thread
          </a>
          <p className="project-description">
            A library implemented in C++ having the same functionality as the
            {` `}
            <span>string</span> library in C++.
          </p>
          <a
            className="project-code"
            href="https://github.com/oyemayanq/Thread"
          >
            {`< Code >`}
          </a>
        </div>
        <div className="project-container">
          <a
            href="https://github.com/oyemayanq/BigInteger"
            className="project-title"
          >
            BigInt
          </a>
          <p className="project-description">
            A library implemented in C++ that deals with large integers. The
            numbers are stored as <span>Thread</span> objects.
          </p>
          <a
            className="project-code"
            href="https://github.com/oyemayanq/BigInteger"
          >
            {`< Code >`}
          </a>
        </div>
        <div className="project-container">
          <a
            className="project-title"
            href="https://pathfindiing-visualizer.herokuapp.com/"
          >
            Pathfinding Visualizer
          </a>
          <p className="project-description">
            A <span>react</span> app that visualizes various pathfinding
            algorithms.
          </p>
          <div className="code-container">
            <a
              className="project-code"
              href="https://pathfindiing-visualizer.herokuapp.com/"
            >
              Visualizer
            </a>
            <a
              className="project-code"
              href="https://github.com/oyemayanq/pathfinder"
            >
              {`< Code >`}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
