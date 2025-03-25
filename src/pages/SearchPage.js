import React, { useState, useEffect } from "react";
import { useCustomTheme } from "../context/ThemeContext";
import { useLocation } from 'react-router-dom'; // Importar useLocation
import "../styles/global.css";
import "../styles/home.css"; // Importar estilos da home
import DigimonCard from "../assets/DigimonCard";
import { themes, Notheme } from "./Home"; // Importar temas e Notheme

const SearchPage = () => {
  const { selectedTheme, setSelectedTheme } = useCustomTheme();
  const defaultBackground = Notheme.fundo; // Definir defaultBackground com base no Notheme
  const [digimons, setDigimons] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Estado para a página atual
  const location = useLocation(); // Inicializar useLocation

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');
    if (query) {
      setSearch(query);
    }
  }, [location]);

  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((response) => response.json())
      .then((data) => setDigimons(data));
  }, []);

  const filteredDigimons = digimons.filter((digimon) =>
    digimon.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter ? digimon.level === filter : true)
  );

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredDigimons.length / itemsPerPage);
  const currentItems = filteredDigimons.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const background = selectedTheme.fundo || Notheme.fundo;

  return (
    <div className="search-page" style={{ backgroundImage: `url(${background})` }}>
      {/* <div className="dark-overlay"></div> */}
      <div className="content">
        <div className="header-container">
        <img className="icone" src={selectedTheme.fundo === defaultBackground ? "/screens/Mask.png" : "/screens/Logo.png"} alt="Logo" />
          <div className="text-container">
            <p className="title">FPR</p>
            <p className="subtitle">DIGIMON</p>
          </div>
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
        <div className="search-filters">
          <div className="icon-container">
            <img src="/screens/theme.png" alt="Theme Icon" />
          </div>
          <input
            type="text"
            placeholder="Buscar Digimon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">Level</option>
            <option value="In Training">In Training</option>
            <option value="Rookie">Rookie</option>
            <option value="Champion">Champion</option>
            <option value="Ultimate">Ultimate</option>
            <option value="Mega">Mega</option>
            <option value="Fresh">Fresh</option>
          </select>
        </div>
        <div className="digimon-grid">
          {currentItems.map((digimon) => (
            <DigimonCard key={digimon.name} name={digimon.name} img={digimon.img} level={digimon.level} />
          ))}
        </div>
        {totalPages > 1 && (
          <div className="pagination">
            {currentPage > 1 && (
              <button onClick={() => setCurrentPage(currentPage - 1)}>Anterior</button>
            )}
            {currentPage < totalPages && (
              <button onClick={() => setCurrentPage(currentPage + 1)}>Próximo</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
