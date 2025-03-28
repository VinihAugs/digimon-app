import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { useCustomTheme } from "../context/ThemeContext";
import "../styles/home.css";
import "../styles/themes.css";
import { BiSearch } from "react-icons/bi";
import DigimonCard from "../assets/DigimonCard";

export const themes = [
  { name: "Esperança", color: "#209441", buttoncolor: "#6BD476", image: "/button_dark/esperanca.png", fundo : "/screens/home_esperanca.png"},
  { name: "Sabedoria", color: "#CB1E31", buttoncolor: "#6BD476",image: "/button_dark/sabedoria.png", fundo : "/screens/home_sabedoria.png"},
  { name: "Confianca", color: "#7D4D8B", buttoncolor: "#CBAADE",image: "/button_dark/confianca.png", fundo : "/screens/home_confianca.png"},
  { name: "Coragem", color: "#0580BB", buttoncolor: "#62B8DB",image: "/button_dark/coragem.png", fundo : "/screens/home_coragem.png"},
  { name: "Amizade", color: "#E28C25", buttoncolor: "#78D1F1",image: "/button_dark/amizade.png", fundo :"/screens/home_amizade.png"},
  { name: "Luz", color: "#EA7EB2", buttoncolor: "#CBAADE",image: "/button_dark/luz.png", fundo : "/screens/home_luz.png"},
  { name: "Amor", color: "#62B8DB", buttoncolor: "#CBAADE",image: "/button_dark/amor.png", fundo : "/screens/home_amor.png"},
  { name: "Sinceridade", color: "#F282B0", buttoncolor: "#CBAADE",image: "/button_dark/sinceridade.png", fundo : "/screens/home_sinceridade.png"},
];

export const Notheme = {
  name: "sem_tema",
  color: "#34AC40",
  buttoncolor: "#34AC40",
  fundo: "/screens/sem_tema.png"
};

const Home = () => {
  const { selectedTheme, setSelectedTheme } = useCustomTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedTheme(Notheme);
  }, [setSelectedTheme]);

  const handleSearch = () => {
    console.log("Buscando por:", searchTerm);
    navigate(`/search?query=${searchTerm}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleChooseDigimon();
    }
  };

  const handleChooseDigimon = () => {
    navigate("/search", { state: { searchQuery: searchTerm } });
  };

  const handleViewAll = () => {
    navigate("/search", { state: { searchQuery: "" } });
  };

  const defaultBackground = "/screens/sem_tema.png";

  
  if (!selectedTheme) {
    return <div>Carregando tema...</div>;
  }

  return (
    <div className={`home-container ${selectedTheme.name  !== "sem_tema" && "home-content-mobile"}`} style={{ 
      backgroundImage: `url(${selectedTheme.fundo || defaultBackground})`,
      backgroundPosition: selectedTheme.name === "sem_tema" ? "right" : "center",
      backgroundSize: selectedTheme.name === "sem_tema" ? "inherit" : "cover",
    }}>
      <div className="header-icon">
        <img src="/screens/theme.png" alt="Theme Icon" />
      </div>
      <div className="home-content">
        <div className="home-text">
          <img className="image-logo" src={selectedTheme.fundo === defaultBackground ? "/screens/Mask.png" : "/screens/Logo.png"} alt="Logo" />
          <div className='text-logo'>
            <h1 className={selectedTheme.name === "sem_tema" ? "title-orange" : "text-white"}>FPR</h1>
            <h2 className={selectedTheme.name === "sem_tema" ? "subtitle-green" : "text-white"}>DIGIMON</h2>
          </div>
        </div>
      
        <h1 className="title">Bem vindo ao FPR DIGIMON</h1>
        <h2 className={`title2 ${selectedTheme.name === "sem_tema" ? "text-gray" : "text-white"}`}>Escolha o<br />seu Digimon</h2>
        <p className={`description ${selectedTheme.name === "sem_tema" ? "text-gray" : "text-white"}`}>
        O Universo Digimon é um mundo digital onde vivem<br /> 
        os Digimons, criaturas virtuais que formam laços com<br />
        parceiros humanos. Juntos, eles enfrentam desafios e<br />
        vilões para proteger tanto o Mundo Digital quanto o<br /> 
        mundo real.</p>
        <div className="search-input">
          <input 
            placeholder='   Digite o nome do DIGIMON'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <BiSearch className='icon' onClick={handleSearch} />
        </div>

        <div className="action-buttons">
          <button className="choose-digimon" style={{ backgroundColor: selectedTheme.color }} onClick={handleChooseDigimon}>ESCOLHA SEU DIGIMON</button>
          <button className="view-all" style={{ backgroundColor: selectedTheme.name === "sem_tema" ? "#34AC40" : selectedTheme.buttoncolor }} onClick={handleViewAll}>VER TODOS</button>
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
    </div>
  );
};

export default Home;