import React from "react";
import { Theme } from "../../../domain/models";
import "./Logo.css";

export const Logo = ({ theme, className = "home-text" }) => {
  const themeInstance = theme instanceof Theme ? theme : new Theme(theme);
  
  return (
    <div className={className}>
      <img
        className="image-logo"
        src={themeInstance.logoPath}
        alt="Logo"
      />
      <div className="text-logo">
        <h1 className={themeInstance.isDefault ? "title-orange" : "text-white"}>
          FPR
        </h1>
        <h2 className={themeInstance.isDefault ? "subtitle-green" : "text-white"}>
          DIGIMON
        </h2>
      </div>
    </div>
  );
};

