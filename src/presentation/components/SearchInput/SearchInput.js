import React from "react";
import { BiSearch } from "react-icons/bi";
import "./SearchInput.css";

export const SearchInput = ({
  value,
  onChange,
  onSearch,
  placeholder = "Digite o nome do DIGIMON",
  className = "search-input",
}) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && onSearch) {
      onSearch();
    }
  };

  return (
    <div className={className}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      {onSearch && <BiSearch className="icon" onClick={onSearch} />}
    </div>
  );
};

