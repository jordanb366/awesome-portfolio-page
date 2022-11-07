import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="navbar fixed-bottom">
        <ul
          // style={{ listStyle: "none" }}
          className="d-flex justify-content-center ul-footer"
        >
          <li className="m-2 p-2">
            <a href="https://github.com/jordanb366">Github</a>
          </li>
          <li className="m-2 p-2">
            <a href="https://www.linkedin.com/in/jordan-bradley-6a806a165/">
              LinkedIn
            </a>
          </li>
          <li className="m-2 p-2">
            <p>
              <a href="https://stackoverflow.com/users/19164313/jordanb336">
                Stack Overflow
              </a>
            </p>
          </li>
        </ul>
      </footer>
    </div>
  );
}
