import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage'; // Importar SearchPage
import { ThemeProvider } from './context/ThemeContext'; // Importar ThemeProvider

function App() {
  return (
    <ThemeProvider> {/* Envolver o Router com ThemeProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} /> {/* Adicionar rota para SearchPage */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
