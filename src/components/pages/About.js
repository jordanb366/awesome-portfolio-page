import React from "react";
import Footer from "../Footer";
import profilePicture from "../../images/avatar.png";
// About me section
export default function About() {
  return (
    <div>
      <div className="container">
        <h1>About Me</h1>

        <h4>Hello there!</h4>
        <img
          className="img-thumbnail pt-2"
          src={profilePicture}
          alt="Profile"
        />
        <div className="row">
          <p className="col-sm-12 col-md-8 col-lg-8 pt-4">
            My name is Jordan and I am a front-end web developer! I have always
            liked creating things and web development helps me accomplish that.
            This porfolio page showcases some of those projects.
          </p>
          <p className="col-sm-12 col-md-8 col-lg-8 pt-4">
            Known as a creative thinker with a passion for creating web apps,
            with a responsive, mobile first approach. With having over 2 years
            of working experience in the IT industry, troubleshooting complex
            computer and application issues, this will help me thoroughly solve
            problems that arise during web development. I am excited to continue
            using the skills learned to build quality web apps with a great
            design.
          </p>
        </div>
      </div>
      {/* Renders footer component */}
      <Footer />
    </div>
  );
}
