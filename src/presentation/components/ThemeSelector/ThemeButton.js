import React from "react";
import { Theme } from "../../../domain/models";
import "./ThemeButton.css";

export const ThemeButton = ({ theme, isSelected, onClick }) => {
  const themeInstance = theme instanceof Theme ? theme : new Theme(theme);
  
  return (
    <button
      className={`theme-button ${isSelected ? "selected" : ""}`}
      style={{
        backgroundColor: isSelected ? "white" : themeInstance.color,
        color: isSelected ? themeInstance.color : "white",
      }}
      onClick={onClick}
    >
      <img
        src={
          isSelected ? themeInstance.buttonImagePath : themeInstance.image
        }
        alt={themeInstance.name}
      />
      <p>{themeInstance.name}</p>
    </button>
  );
};

