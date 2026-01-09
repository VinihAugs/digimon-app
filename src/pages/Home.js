import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCustomTheme } from "../context/ThemeContext";
import { useFavoriteDigimon } from "../context/FavoriteDigimonContext";
import { THEMES } from "../domain/constants";
import {
  HeaderIcon,
  Logo,
  SearchInput,
  ActionButtons,
  ThemeSelector,
} from "../presentation/components";
import { getBackgroundStyle, getTextColorClass } from "../presentation/utils";
import "../styles/home.css";
import "../styles/themes.css";

const Home = () => {
  const { selectedTheme, setSelectedTheme } = useCustomTheme();
  const { favoriteDigimon } = useFavoriteDigimon();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      handleChooseDigimon();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleChooseDigimon();
    }
  };

  const handleChooseDigimon = () => {
    navigate("/search", { state: { searchQuery: searchTerm } });
  };

  const handleViewAll = () => {
    navigate("/search", { state: { searchQuery: "" } });
  };

  if (!selectedTheme) {
    return <div>Carregando tema...</div>;
  }

  const backgroundStyle = getBackgroundStyle(selectedTheme);
  const containerClass = `home-container ${
    selectedTheme.name !== "sem_tema" ? "home-content-mobile" : ""
  }`;

  return (
    <div className={containerClass} style={backgroundStyle}>
      <HeaderIcon favoriteDigimon={favoriteDigimon} />
      <div className="home-content">
        <Logo theme={selectedTheme} />
        <h1 className="title">Bem vindo ao FPR DIGIMON</h1>
        <h2 className={`title2 ${getTextColorClass(selectedTheme)}`}>
          Escolha o<br />
          seu Digimon
        </h2>
        <p className={`description ${getTextColorClass(selectedTheme)}`}>
          O Universo Digimon é um mundo digital onde vivem<br />
          os Digimons, criaturas virtuais que formam laços com<br />
          parceiros humanos. Juntos, eles enfrentam desafios e<br />
          vilões para proteger tanto o Mundo Digital quanto o<br />
          mundo real.
        </p>
        <SearchInput
          value={searchTerm}
          onChange={setSearchTerm}
          onSearch={handleSearch}
        />
        <ActionButtons
          theme={selectedTheme}
          onChooseDigimon={handleChooseDigimon}
          onViewAll={handleViewAll}
        />
      </div>
      <ThemeSelector
        themes={THEMES}
        selectedTheme={selectedTheme}
        onThemeChange={setSelectedTheme}
      />
    </div>
  );
};

export default Home;
