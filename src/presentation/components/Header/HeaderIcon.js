import React from "react";
import { DEFAULT_ICON } from "../../../domain/constants";
import "./HeaderIcon.css";

export const HeaderIcon = ({ favoriteDigimon, className = "header-icon" }) => {
  return (
    <div className={className}>
      <img
        src={favoriteDigimon?.img || DEFAULT_ICON}
        alt={favoriteDigimon?.name || "Theme Icon"}
      />
    </div>
  );
};

