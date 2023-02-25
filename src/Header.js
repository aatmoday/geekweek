import React from "react";

import logocsjm from "./assets/images/logoCSJM.png";
import logoaa from "./assets/images/logoAATMODAY.png";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img
          src={logocsjm}
          alt="CSJM University, Kanpur"
          className="logocsjm logo"
        />
        <img
          src={logoaa}
          alt="Aatmoday CSJMU's Student Hobby Club"
          className="logoaa"
        />
      </div>
      <nav>
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          about
        </a>
        <a href="#events" className="nav-link">
          events
        </a>
        <a href="#team" className="nav-link">
          team
        </a>
        <a href="#contact" className="nav-link">
          contact us
        </a>
      </nav>
    </header>
  );
};

export default Header;
