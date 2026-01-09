import React from "react";
import { ThemeButton } from "./ThemeButton";
import "./ThemeSelector.css";

export const ThemeSelector = ({ themes, selectedTheme, onThemeChange, className = "theme-buttons" }) => {
  return (
    <div className={className}>
      {themes.map((theme) => (
        <ThemeButton
          key={theme.name}
          theme={theme}
          isSelected={selectedTheme?.name === theme.name}
          onClick={() => onThemeChange(theme)}
        />
      ))}
    </div>
  );
};

