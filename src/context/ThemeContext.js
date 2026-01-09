import { createContext, useContext, useState, useEffect } from "react";
import { THEMES, DEFAULT_THEME } from "../domain/constants";
import { LocalStorageRepository } from "../data/repositories";
import { Theme } from "../domain/models";
import { STORAGE_KEYS } from "../config";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const repository = new LocalStorageRepository(STORAGE_KEYS.THEME);
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0]);

  useEffect(() => {
    const savedTheme = repository.load();
    if (savedTheme) {
      const theme = new Theme(savedTheme);
      setSelectedTheme(theme);
    } else {
      setSelectedTheme(DEFAULT_THEME);
    }
  }, []);

  const handleSetTheme = (theme) => {
    const themeInstance = theme instanceof Theme ? theme : new Theme(theme);
    repository.save(themeInstance.toJSON());
    setSelectedTheme(themeInstance);
  };

  return (
    <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useCustomTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useCustomTheme must be used within a ThemeProvider");
  }
  return context;
};
