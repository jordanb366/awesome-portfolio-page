import React from "react";
import Footer from "../Footer";
import project1 from "../../images/Project1Screenshot.png";
import project2 from "../../images/Project2Screenshot.png";
import project3 from "../../images/Project3Screenshot.png";
import project4 from "../../images/Project4Screenshot.png";
import project5 from "../../images/Project5Screenshot.png";

export default function Porfolio() {
  return (
    <div className="container">
      <h1>Projects</h1>
      <p></p>
      <div className="row">
        <div className="card col-sm-12 col-md-8 col-lg-3 m-2">
          <a href="https://piertwo.github.io/unburied-museum-cataloger/">
            <img
              className="card-img-top"
              src={project1}
              alt="Project 1 Screenshot"
            />
          </a>
          <div class="work-card-information">
            <h4>Unburied: A Museum Cataloger</h4>
            <p>HTML, CSS, JavaScript, jQuery, Materialize CSS</p>
            <br />
            <h5>Links:</h5>
            <a href="https://piertwo.github.io/unburied-museum-cataloger/">
              Github Repository
            </a>
            <a href="https://piertwo.github.io/unburied-museum-cataloger/">
              Deployed Link
            </a>
          </div>
        </div>
        <div class="card col-sm-12 col-md-8 col-lg-3 m-2">
          <a href="https://nameless-hamlet-43462.herokuapp.com/">
            <img
              className="card-img-top"
              src={project2}
              alt="Project 2 Screenshot"
            />
          </a>
          <div class="work-card-information">
            <h4>Memorize: A Flashcard Creation App</h4>
            <p>
              HTML, CSS, JavaScript, NodeJS, ExpressJS, MySQL, Sequelize,
              Express HandleBars, Bulma CSS, and Sessions
            </p>
            <br />
            <h5>Links:</h5>
            <a href="https://github.com/nhastings1/project-2-flashdata">
              Github Repository
            </a>
            <a href="https://nameless-hamlet-43462.herokuapp.com/">
              Deployed Link
            </a>
          </div>
        </div>
        <div class="card col-sm-12 col-md-8 col-lg-3 m-2">
          <a href="https://radiant-basin-61190.herokuapp.com/">
            <img
              className="card-img-top"
              src={project3}
              alt="Tech Blog Project"
            />
          </a>
          <div class="work-card-information">
            <h4>Tech Blog - Full Stack App</h4>
            <p>
              HTML, CSS, JavaScript, NodeJS, ExpressJS, MySQL, Sequelize,
              Express HandleBars, Bootstrap CSS and Sessions
            </p>
            <br />
            <h5>Links:</h5>
            <a href="https://github.com/jordanb366/mvc-tech-blog-app">
              Github Repository
            </a>
            <a href="https://radiant-basin-61190.herokuapp.com/">
              Deployed Link
            </a>
          </div>
        </div>
        <div class="card col-sm-12 col-md-8 col-lg-3 m-2">
          <a href="https://jordanb366.github.io/the-best-weather-dashboard/">
            <img
              className="card-img-top"
              src={project4}
              alt="Weather Dashboard Project"
            />
          </a>
          <div class="work-card-information">
            <h4>Weather Dashboard - with OpenWeather API</h4>
            <p>HTML, CSS, JavaScript</p>
            <br />
            <h5>Links:</h5>
            <a href="https://github.com/jordanb366/the-best-weather-dashboard">
              Github Repository
            </a>
            <a href="https://jordanb366.github.io/the-best-weather-dashboard/">
              Deployed Link
            </a>
          </div>
        </div>
        <div class="card col-sm-12 col-md-8 col-lg-3 m-2">
          <a href="https://jordanb366.github.io/css-snippets/">
            <img
              className="card-img-top"
              src={project5}
              alt="CSS Snippets Project"
            />
          </a>
          <div class="work-card-information">
            <h4>CSS Snippets - FlexBox</h4>
            <p>HTML, CSS</p>
            <br />
            <h5>Links:</h5>
            <a href="https://github.com/jordanb366/css-snippets">
              Github Repository
            </a>
            <a href="https://jordanb366.github.io/css-snippets/">
              Deployed Link
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
