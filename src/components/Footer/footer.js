import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../../Styles/Footer.css"

export default function Footer() {
  return (
    <div class="text-center">
      <footer>
        <div class="container">
          <a class="icons" href="https://github.com/ChrisCodes54">
            <FontAwesomeIcon icon={faGithubSquare} size="4x" />
          </a>
          <a class="icons" href="https://www.linkedin.com/in/christopher-tangarife/">
            <FontAwesomeIcon icon={faLinkedin} size="4x" />
          </a>
        </div>
      </footer>
    </div>
  );
}
