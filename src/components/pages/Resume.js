import React from "react";
import Footer from "../Footer";
import myResume from "../../resume/Bradley_Jordan_Resume.docx";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a href={myResume}>Download Resume</a>
      <div id="skills">
        <h5>Technical Skills:</h5>
        <ul>
          <li>Git commands</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>BootStrap</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>MySQL</li>
          <li>NoSQL (MongoDB/Mongoose)</li>
          <li>ReactJS</li>
          <li>MERN</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
