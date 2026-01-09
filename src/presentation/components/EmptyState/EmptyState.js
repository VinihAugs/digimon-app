import React from "react";
import "./EmptyState.css";

export const EmptyState = ({ message = "Nenhum item encontrado" }) => {
  return (
    <div className="empty-state">
      <p>{message}</p>
    </div>
  );
};

