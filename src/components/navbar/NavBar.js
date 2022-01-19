import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Christopher Tangarife</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#aboutme">About Me <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#myworks">My Works</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Me!</a>
      </li>
    </ul>
    <span class="navbar-text">
      Say Hello to your next employee
    </span>
  </div>
</nav>
    // <ul >
    //   <li >
    //   </li>
    //   <li >
    //     <a
    //       // href="#about"
    //       onClick={() => handlePageChange('About')}
    //       // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
    //     >
    //       About
    //     </a>
    //   </li>
    //   <li >
    //     <a
    //       // href="#myworks"
    //       onClick={() => handlePageChange('Works')}
    //       // Check to see if the currentPage is `works`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Works' ? 'nav-link active' : 'nav-link'}
    //     >
    //       My Works
    //     </a>
    //   </li>
    //   <li >
    //     <a
    //       // href="#contact"
    //       onClick={() => handlePageChange('Contact')}
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Contact
    //     </a>
    //   </li>
    // </ul>
  );
}

export default NavBar;
