import React from "react";
// Renders all the Navigation with props from the header component
function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="">
      <ul className="nav nav-tabs pt-4">
        <li className="m-2 p-1">
          <h3>Jordan Bradley</h3>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Porfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
