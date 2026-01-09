import React from "react";
import { Theme } from "../../../domain/models";
import "./ActionButtons.css";

export const ActionButtons = ({ theme, onChooseDigimon, onViewAll }) => {
  const themeInstance = theme instanceof Theme ? theme : new Theme(theme);
  
  return (
    <div className="action-buttons">
      <button
        className="choose-digimon"
        style={{ backgroundColor: themeInstance.color }}
        onClick={onChooseDigimon}
      >
        ESCOLHA SEU DIGIMON
      </button>
      <button
        className="view-all"
        style={{
          backgroundColor: themeInstance.isDefault
            ? "#34AC40"
            : themeInstance.buttoncolor,
        }}
        onClick={onViewAll}
      >
        VER TODOS
      </button>
    </div>
  );
};

