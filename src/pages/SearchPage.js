import React, { useState, useEffect } from "react";
import { useCustomTheme } from "../context/ThemeContext";
import "../styles/global.css";
import "../styles/home.css"; // Importar estilos da home
import DigimonCard from "../assets/DigimonCard";
import { themes, Notheme } from "./Home"; // Importar temas e Notheme

const SearchPage = () => {
  const { selectedTheme, setSelectedTheme } = useCustomTheme();
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

  const background = selectedTheme.fundo || Notheme.fundo;

  return (
    <div className="search-page" style={{ 
      backgroundImage: `url(${background})`
    }}>
      <h1>Search Page</h1>
      <p>Resultados da pesquisa aparecerão aqui.</p>
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

      <div className="theme-buttons">
        {themes.map((theme) => (
          <button
            key={theme.name}
            className={`theme-button ${selectedTheme.name === theme.name ? "selected" : ""}`}
            style={{ 
              backgroundColor: selectedTheme.name === theme.name ? "white" : theme.color,
              color: selectedTheme.name === theme.name ? theme.color : "white"
            }}
            onClick={() => setSelectedTheme(theme)}> 
            <img src={selectedTheme.name === theme.name ? `/button_light/${theme.name.toLowerCase()}.png` : theme.image} alt={theme.name} />
            <p>{theme.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
