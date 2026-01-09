import { createContext, useContext, useState, useEffect } from "react";
import { LocalStorageRepository } from "../data/repositories";
import { Digimon } from "../domain/models";
import { STORAGE_KEYS } from "../config/api";

const FavoriteDigimonContext = createContext();

export const FavoriteDigimonProvider = ({ children }) => {
  const [favoriteDigimon, setFavoriteDigimon] = useState(null);
  const repository = new LocalStorageRepository(STORAGE_KEYS.FAVORITE_DIGIMON);

  useEffect(() => {
    const savedData = repository.load();
    if (savedData) {
      setFavoriteDigimon(new Digimon(savedData));
    }
  }, []);

  const saveFavoriteDigimon = (digimonData) => {
    const digimon = digimonData instanceof Digimon 
      ? digimonData 
      : new Digimon(digimonData);
    
    if (repository.save(digimon.toJSON())) {
      setFavoriteDigimon(digimon);
    }
  };

  const removeFavoriteDigimon = () => {
    if (repository.remove()) {
      setFavoriteDigimon(null);
    }
  };

  return (
    <FavoriteDigimonContext.Provider
      value={{
        favoriteDigimon,
        saveFavoriteDigimon,
        removeFavoriteDigimon,
      }}
    >
      {children}
    </FavoriteDigimonContext.Provider>
  );
};

export const useFavoriteDigimon = () => {
  const context = useContext(FavoriteDigimonContext);
  if (!context) {
    throw new Error(
      "useFavoriteDigimon deve ser usado dentro de FavoriteDigimonProvider"
    );
  }
  return context;
};

