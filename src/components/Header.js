import React, { useState } from "react";
import Navigation from "./Navigation";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
// Header component that will render the pages conditionally
export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");
  // Conditionally renders pages
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };
  // Handles page change and sets the state of page
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Returns the navigation component */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />

      {renderPage()}
    </div>
  );
}
