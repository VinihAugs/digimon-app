import React, { useState, useEffect } from "react";
import { useCustomTheme } from "../context/ThemeContext";
import { useLocation } from 'react-router-dom';
import "../styles/global.css";
import "../styles/home.css";
import DigimonCard from "../assets/DigimonCard";
import { themes, Notheme } from "./Home";

const SearchPage = () => {
  const { selectedTheme, setSelectedTheme } = useCustomTheme();
  const location = useLocation();
  const searchQuery = location.state?.searchQuery || ""; // Recebe o valor do input ou vazio
  const defaultBackground = Notheme.fundo;
  const [digimons, setDigimons] = useState([]);
  const [search, setSearch] = useState(searchQuery); // Inicializa com o valor recebido
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDigimon, setSelectedDigimon] = useState(null);

  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((response) => response.json())
      .then((data) => setDigimons(data));
  }, []);

  useEffect(() => {
    if (search) {
      const foundDigimon = digimons.find((digimon) =>
        digimon.name.toLowerCase() === search.toLowerCase()
      );
      setSelectedDigimon(foundDigimon || null);
    } else {
      setSelectedDigimon(null);
    }
  }, [search, digimons]);

  const filteredDigimons = digimons.filter((digimon) =>
    digimon.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter ? digimon.level === filter : true)
  );

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredDigimons.length / itemsPerPage);
  const currentItems = filteredDigimons.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const background = selectedTheme.fundo || Notheme.fundo;

  return (
    <div
      className="search-page"
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh", // Ocupa 100% da altura da tela
        overflow: "hidden", // Remove a rolagem
      }}
    >
      <div className="content">
        <div className="header-container">
          <div className="group-left">
            <div className="icone">
              <img src={selectedTheme.fundo === defaultBackground ? "/screens/Mask.png" : "/screens/Logo.png"} alt="Logo" />
            </div>
            <div className="text-container">
              <h1 className={selectedTheme.name === "sem_tema" ? "title-orange" : "text-white"}>FPR</h1>
              <h2 className={selectedTheme.name === "sem_tema" ? "subtitle-green" : "text-white"}>DIGIMON</h2>
            </div>
          </div>
          <div className="group-right">
            <div className="icon-container">
              {selectedDigimon ? (
                <img src={selectedDigimon.img} alt={selectedDigimon.name} />
              ) : (
                <img src="/screens/theme.png" alt="Theme Icon" />
              )}
            </div>
            <input
              type="text"
              placeholder="Buscar Digimon"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">Level</option>
              <option value="In Training">In Training</option>
              <option value="Rookie">Rookie</option>
              <option value="Champion">Champion</option>
              <option value="Ultimate">Ultimate</option>
              <option value="Mega">Mega</option>
              <option value="Fresh">Fresh</option>
            </select>
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
        <div className="digimon-grid">
          {currentItems.map((digimon) => (
            <DigimonCard 
              key={digimon.name} 
              name={digimon.name} 
              img={digimon.img} 
              level={digimon.level} 
              textColor={selectedTheme.name === "sem_tema" ? "black" : "white"} // Passar a cor como prop
            />
          ))}
        </div>
        {totalPages > 1 && (
          <div className="pagination">
            {currentPage > 1 && (
              <button 
                onClick={() => setCurrentPage(currentPage - 1)} 
                className="pagination-button"
              >
                ← Anterior
              </button>
            )}
            {currentPage < totalPages && (
              <button 
                onClick={() => setCurrentPage(currentPage + 1)} 
                className="pagination-button"
              >
                Próximo →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
