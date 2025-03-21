import React from "react";
import "../styles/global.css";

const DigimonCard = ({ name, img, level }) => {
  return (
    <div className="digimon-card">
      <img src={img} alt={name} />
      <p><strong>Nome:</strong> {name}</p>
      <p><strong>Nível:</strong> {level}</p>
    </div>
  );
};

export default DigimonCard;
