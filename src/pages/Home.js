import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useCustomTheme } from "../context/ThemeContext";
import "../styles/home.css";
import "../styles/themes.css";

const themes = [
  { name: "Esperança", color: "#4CAF50", image: "/button_dark/esperanca.png", fundo : "/screens/home_esperanca.png"},
  { name: "Sabedoria", color: "#9C27B0", image: "/button_dark/sabedoria.png", fundo : "/screens/home_sabedoria.png"},
  { name: "Confiança", color: "#3F51B5", image: "/button_dark/confianca.png", fundo : "/screens/home_confianca.png"},
  { name: "Coragem", color: "#FF5722", image: "/button_dark/coragem.png", fundo : "/screens/home_coragem.png"},
  { name: "Amizade", color: "#2196F3", image: "/button_dark/amizade.png", fundo :"/screens/home_amizade.png"},
  { name: "Luz", color: "#FFC107", image: "/button_dark/luz.png", fundo : "/screens/home_luz.png"},
  { name: "Amor", color: "#E91E63", image: "/button_dark/amor.png", fundo : "/screens/home_amor.png"},
  { name: "Sinceridade", color: "#00BCD4", image: "/button_dark/sinceridade.png", fundo : "/screens/home_sinceridade.png"},
];

const Home = () => {
  const { selectedTheme, setSelectedTheme } = useCustomTheme();

  if (!selectedTheme) {
    return <div>Carregando tema...</div>;
  }

  return (
    <div className="home-container" style={{ backgroundImage: `url(${selectedTheme.fundo})` }}>
      <img src="/screens/Mask group.png" alt="Mask group" className="logo" />
      
      <h1 className="title">Escolha o seu Digimon</h1>
      <p className="description">
        O Universo Digimon é um mundo digital onde vivem os Digimons, criaturas virtuais que formam laços com parceiros humanos...
      </p>

      <div className="search-box">
        <input type="text" placeholder="Digite o nome do DIGIMON" />
        <button className="search-button">🔍</button>
      </div>

      <div className="action-buttons">
        <button className="choose-digimon">ESCOLHA SEU DIGIMON</button>
        <button className="view-all">VER TODOS</button>
      </div>

      <div className="theme-buttons">
        {themes.map((theme) => (
          <button
            key={theme.name}
            className={`theme-button ${selectedTheme.name === theme.name ? "selected" : ""}`}
            style={{ backgroundColor: selectedTheme.name === theme.name ? "white" : theme.color }}
            onClick={() => setSelectedTheme(theme)}> 
            <img src={theme.image} alt={theme.name} />
            {/* <div */}
            <p>{theme.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;