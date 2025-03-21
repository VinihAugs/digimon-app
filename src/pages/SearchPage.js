import React, { useState, useEffect } from "react";
import "../styles/global.css";
import DigimonCard from "../assets/DigimonCard";

const SearchPage = () => {
  const [digimons, setDigimons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((response) => response.json())
      .then((data) => setDigimons(data));
  }, []);

  const filteredDigimons = digimons.filter((digimon) =>
    digimon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-page">
      <input
        type="text"
        placeholder="Buscar Digimon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="digimon-grid">
        {filteredDigimons.map((digimon) => (
          <DigimonCard key={digimon.name} {...digimon} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
