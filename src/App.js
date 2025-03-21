import React from "react";
import { ThemeProvider } from "./context/ThemeContext"; // Importa o Provider
import Home from "./pages/Home"; // Importa a Home

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
