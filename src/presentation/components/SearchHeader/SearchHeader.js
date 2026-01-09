import React from "react";
import { SearchFilters } from "../SearchFilters/SearchFilters";
import { DEFAULT_ICON } from "../../../domain/constants";
import "./SearchHeader.css";

export const SearchHeader = ({
  theme,
  favoriteDigimon,
  selectedDigimon,
  search,
  onSearchChange,
  filter,
  onFilterChange,
}) => {
  return (
    <div className="header-container">
      <div className="group-left">
        <div className="icone">
          <img
            src={theme.logoPath}
            alt="Logo"
          />
        </div>
        <div className="text-container">
          <h1 className={theme.isDefault ? "title-orange" : "text-white"}>
            FPR
          </h1>
          <h2 className={theme.isDefault ? "subtitle-green" : "text-white"}>
            DIGIMON
          </h2>
        </div>
      </div>
      <div className="group-right">
        <div className="icon-container">
          <img
            src={
              favoriteDigimon?.img ||
              selectedDigimon?.img ||
              DEFAULT_ICON
            }
            alt={favoriteDigimon?.name || selectedDigimon?.name || "Theme Icon"}
          />
        </div>
        <SearchFilters
          search={search}
          onSearchChange={onSearchChange}
          filter={filter}
          onFilterChange={onFilterChange}
        />
      </div>
    </div>
  );
};

