import React from "react";
import "../styles/global.css";

const Header = () => {
  return (
    <header className="header">
      <img src= "/screens/Mask.png" alt="FPR Digimon Logo" className="logo" />
      <div className="theme-switcher">
        <img src="/images/screens/theme.png" alt="Trocar tema" />
      </div>
    </header>
  );
};

export default Header;