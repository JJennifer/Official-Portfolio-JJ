import React, { useState } from 'react';
import NavTabs from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

 
export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("/");
  
    const renderPage = () => {
     
      if (currentPage === "/") {
        return <About />;
      }
      if (currentPage === "Projects") {
        return <Projects />;
      }
      
      return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}