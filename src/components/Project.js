import React from "react";
import Footer from "./Footer";

export default function Project(props) {
  console.log(props);
  return (
    <div>
      <div className="container">
        <h1>Projects</h1>
        <div className="row justify-content-center">
          {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
          {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
          {props.projects.map((project) => (
            <div
              key={project.id}
              className="card col-sm-12 col-md-8 col-lg-3 m-2"
            >
              <a href={project.deployedProject}>
                <img
                  className="card-img-top"
                  src={project.projectScreenshot}
                  alt="Project Screenshot"
                />
              </a>
              <div className="card-body">
                <h4 className="card-title">{project.title}</h4>
                <p className="card-text">{project.technologies}</p>
                <br />
                <h5>Links:</h5>
                <a className="card-link" href={project.repositoryLink}>
                  Github Repository
                </a>
                <a className="card-link" href={project.deployedProject}>
                  Deployed Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
