import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavoriteDigimon } from "../../../context/FavoriteDigimonContext";
import { Digimon } from "../../../domain/models";
import { ConfirmationModal } from "./ConfirmationModal";
import "./DigimonCard.css";

export const DigimonCard = ({ digimon, textColor, style }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { saveFavoriteDigimon } = useFavoriteDigimon();

  const digimonInstance =
    digimon instanceof Digimon ? digimon : new Digimon(digimon);

  const handleImageClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleConfirmFavorite = () => {
    saveFavoriteDigimon(digimonInstance.toJSON());
    setShowModal(false);
    navigate("/");
  };

  return (
    <div className="digimon-card-wrapper">
      <div className="digimon-card" style={style}>
        <div className="image-container" onClick={handleImageClick}>
          <img
            className="digimon-image"
            src={digimonInstance.img}
            alt={digimonInstance.name}
          />
          <div className="choose-overlay">Escolher</div>
        </div>
        <div className="digimon-info">
          <h3 className="digimon-name" style={{ color: textColor }}>
            <strong>Nome:</strong> {digimonInstance.name}
          </h3>
          <p className="digimon-level" style={{ color: textColor }}>
            <strong>Nível:</strong> {digimonInstance.level}
          </p>
        </div>
      </div>
      <ConfirmationModal
        isOpen={showModal}
        message={`Você deseja adicionar ${digimonInstance.name} como digimon favorito?`}
        onConfirm={handleConfirmFavorite}
        onCancel={handleCloseModal}
      />
    </div>
  );
};

