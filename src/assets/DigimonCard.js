import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/digimonCard.css";

const DigimonCard = ({ name, img, level, style, textColor }) => {
  const [showMessageBox, setShowMessageBox] = useState(false);
  const navigate = useNavigate();

  const handleImageClick = () => {
    setShowMessageBox(true);
  };

  const handleCloseMessageBox = () => {
    setShowMessageBox(false);
  };

  const handleConfirmFavorite = () => {
    navigate("/");
  };

  return (
    <div className="digimon-card-wrapper">
      <div className="digimon-card" style={style}>
        <div className="image-container" onClick={handleImageClick}>
          <img className="digimon-image" src={img} alt={name} />
          <div className="choose-overlay">Escolher</div>
        </div>
        <div className="digimon-info">
          <h3 className="digimon-name" style={{ color: textColor }}>
            <strong>Nome:</strong> {name}
          </h3>
          <p className="digimon-level" style={{ color: textColor }}>
            <strong>Nivel:</strong> {level}
          </p>
        </div>
      </div>
      {showMessageBox && (
        <>
          <div className="overlay"></div>
          <div className="message-box">
            <p>Você deseja adicionar {name} como digimon favorito?</p>
            <div className="message-box-buttons">
              <button onClick={handleCloseMessageBox}>Não</button>
              <button onClick={handleConfirmFavorite}>Sim</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DigimonCard;
