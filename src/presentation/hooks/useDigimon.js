import { useState, useEffect } from "react";
import { DigimonService } from "../../data/services";
import { API_CONFIG } from "../../config/api";

export const useDigimon = (initialSearch = "", initialFilter = "") => {
  const [digimons, setDigimons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(initialSearch);
  const [filter, setFilter] = useState(initialFilter);

  const digimonService = new DigimonService(API_CONFIG.DIGIMON_API_URL);

  useEffect(() => {
    const loadDigimons = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await digimonService.fetchAll();
        setDigimons(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadDigimons();
  }, []);

  const filteredDigimons = digimonService.filter(digimons, {
    searchTerm: search,
    level: filter,
  });

  const selectedDigimon = digimonService.findByName(digimons, search);

  return {
    digimons,
    filteredDigimons,
    selectedDigimon,
    loading,
    error,
    search,
    setSearch,
    filter,
    setFilter,
  };
};

