import React from "react";
import "./Loading.css";

export const Loading = ({ message = "Carregando..." }) => {
  return (
    <div className="loading-container">
      <p>{message}</p>
    </div>
  );
};

