import React from "react";
import { useLocation } from "react-router-dom";
import { useCustomTheme } from "../context/ThemeContext";
import { useFavoriteDigimon } from "../context/FavoriteDigimonContext";
import { THEMES } from "../domain/constants";
import { useDigimon, usePagination } from "../presentation/hooks";
import {
  SearchHeader,
  ThemeSelector,
  DigimonGrid,
  Pagination,
  Loading,
  Error,
  EmptyState,
} from "../presentation/components";
import { getBackgroundStyle } from "../presentation/utils";
import "../styles/global.css";
import "../styles/home.css";

const SearchPage = () => {
  const { selectedTheme, setSelectedTheme } = useCustomTheme();
  const { favoriteDigimon } = useFavoriteDigimon();
  const location = useLocation();
  const searchQuery = location.state?.searchQuery || "";

  const {
    filteredDigimons,
    selectedDigimon,
    loading,
    error,
    search,
    setSearch,
    filter,
    setFilter,
  } = useDigimon(searchQuery, "");

  const {
    currentItems,
    hasNext,
    hasPrevious,
    nextPage,
    previousPage,
  } = usePagination(filteredDigimons, [search, filter]);

  const backgroundStyle = {
    ...getBackgroundStyle(selectedTheme),
    height: "100vh",
    overflow: "hidden",
  };

  const containerClass = `search-page ${
    selectedTheme.name !== "sem_tema" ? "search-content-mobile" : ""
  }`;

  const textColor = selectedTheme.name === "sem_tema" ? "black" : "white";

  return (
    <div className={containerClass} style={backgroundStyle}>
      <div className="content">
        <SearchHeader
          theme={selectedTheme}
          favoriteDigimon={favoriteDigimon}
          selectedDigimon={selectedDigimon}
          search={search}
          onSearchChange={setSearch}
          filter={filter}
          onFilterChange={setFilter}
        />
        <ThemeSelector
          themes={THEMES}
          selectedTheme={selectedTheme}
          onThemeChange={setSelectedTheme}
          className="theme-buttons"
        />
        {loading && <Loading message="Carregando Digimons..." />}
        {error && <Error message={error} />}
        {!loading && !error && (
          <>
            {currentItems.length > 0 ? (
              <DigimonGrid digimons={currentItems} textColor={textColor} />
            ) : (
              <EmptyState message="Nenhum Digimon encontrado" />
            )}
            <Pagination
              hasPrevious={hasPrevious}
              hasNext={hasNext}
              onPrevious={previousPage}
              onNext={nextPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
