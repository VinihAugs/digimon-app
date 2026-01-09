import React from "react";
import { DIGIMON_LEVELS } from "../../../domain/constants";
import "./SearchFilters.css";

export const SearchFilters = ({
  search,
  onSearchChange,
  filter,
  onFilterChange,
  placeholder = "Buscar Digimon",
}) => {
  return (
    <div className="element">
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">Level</option>
        {DIGIMON_LEVELS.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
    </div>
  );
};

