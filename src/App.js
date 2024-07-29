import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './pages/Weather';
import WeatherDetails from './pages/WeatherDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/weatherdetails" element={<WeatherDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
