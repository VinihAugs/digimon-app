import React from "react";
import "./Error.css";

export const Error = ({ message, className = "error-container" }) => {
  if (!message) return null;

  return (
    <div className={className}>
      <p>Erro: {message}</p>
    </div>
  );
};

