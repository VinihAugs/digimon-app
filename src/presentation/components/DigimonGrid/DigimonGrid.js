import React from "react";
import { DigimonCard } from "../DigimonCard/DigimonCard";
import "./DigimonGrid.css";

export const DigimonGrid = ({ digimons, textColor }) => {
  if (!digimons || digimons.length === 0) {
    return null;
  }

  return (
    <div className="digimon-grid">
      {digimons.map((digimon) => (
        <DigimonCard
          key={digimon.name}
          digimon={digimon}
          textColor={textColor}
        />
      ))}
    </div>
  );
};

