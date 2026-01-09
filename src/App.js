import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { ThemeProvider } from './context/ThemeContext';
import { FavoriteDigimonProvider } from './context/FavoriteDigimonContext';

function App() {
  return (
    <ThemeProvider>
      <FavoriteDigimonProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </Router>
      </FavoriteDigimonProvider>
    </ThemeProvider>
  );
}

export default App;