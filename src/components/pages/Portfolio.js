import React from "react";
import Project from "../Project";
// Imports
import project1 from "../../images/Project1Screenshot.png";
import project2 from "../../images/Project2Screenshot.png";
import project3 from "../../images/Project3Screenshot.png";
import project4 from "../../images/Project4Screenshot.png";
import project5 from "../../images/Project5Screenshot.png";
import project6 from "../../images/Project6Screenshot.png";

// Portfolio section
export default function Portfolio() {
  // Project information in the array
  // Contains id for, deployed project, screenshot, title, technologies used, and respoitory link
  const projects = [
    {
      id: 1,
      deployedProject: "https://piertwo.github.io/unburied-museum-cataloger/",
      projectScreenshot: project1,
      title: "Unburied: A Museum Cataloger",
      technologies: "HTML, CSS, JavaScript, jQuery, Materialize CSS",
      repositoryLink: "https://piertwo.github.io/unburied-museum-cataloger/",
    },
    {
      id: 2,
      deployedProject: "https://nameless-hamlet-43462.herokuapp.com/",
      projectScreenshot: project2,
      title: "Memorize: A Flashcard Creation App",
      technologies:
        "HTML, CSS, JavaScript, NodeJS, ExpressJS, MySQL, Sequelize, Express HandleBars, Bulma CSS, and Sessions",
      repositoryLink: "https://github.com/nhastings1/project-2-flashdata",
    },
    {
      id: 3,
      deployedProject: "https://radiant-basin-61190.herokuapp.com/",
      projectScreenshot: project3,
      title: "Tech Blog - Full Stack App",
      technologies:
        "HTML, CSS, JavaScript, NodeJS, ExpressJS, MySQL, Sequelize, Express HandleBars, Bootstrap CSS, and Sessions",
      repositoryLink: "https://github.com/jordanb366/mvc-tech-blog-app",
    },
    {
      id: 4,
      deployedProject:
        "https://jordanb366.github.io/the-best-weather-dashboard/",
      projectScreenshot: project4,
      title: "Weather Dashboard - with OpenWeather API",
      technologies: "HTML, CSS, JavaScript",
      repositoryLink:
        "https://github.com/jordanb366/the-best-weather-dashboard",
    },
    {
      id: 5,
      deployedProject: "https://jordanb366.github.io/css-snippets/",
      projectScreenshot: project5,
      title: "Unburied: A Museum Cataloger",
      technologies: "HTML, CSS, JavaScript, jQuery, Materialize CSS",
      repositoryLink: "https://github.com/jordanb366/css-snippets",
    },
    {
      id: 6,
      deployedProject: "https://jordanb366.github.io/my-portfolio-website/",
      projectScreenshot: project6,
      title: "HTML/CSS Portfolio",
      technologies: "HTML, CSS",
      repositoryLink: "https://github.com/jordanb366/my-portfolio-website",
    },
  ];
  // passes props projects to be reused for the portfolio
  return <Project projects={projects} />;
}
