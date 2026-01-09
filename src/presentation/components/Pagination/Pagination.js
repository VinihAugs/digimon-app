import React from "react";
import "./Pagination.css";

export const Pagination = ({
  hasPrevious,
  hasNext,
  onPrevious,
  onNext,
  className = "pagination",
}) => {
  if (!hasPrevious && !hasNext) {
    return null;
  }

  return (
    <div className={className}>
      {hasPrevious && (
        <button onClick={onPrevious} className="pagination-button">
          ← Anterior
        </button>
      )}
      {hasNext && (
        <button onClick={onNext} className="pagination-button">
          Próximo →
        </button>
      )}
    </div>
  );
};

