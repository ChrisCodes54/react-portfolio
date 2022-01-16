import React, { useState } from 'react';
import NavBar from './Navbar/NavBar';

import About from './About/About';
import Works from './Works/Works';
import Contact from './Contact/Contact';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'works') {
      return <Works />;
    }
    if(currentPage === 'contact') {
    return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
     
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
