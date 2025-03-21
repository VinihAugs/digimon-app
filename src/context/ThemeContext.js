import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState({
    name: "Esperança",
    color: "#4CAF50",
    image: "esperanca.png",
  });

  return (
    <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
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
