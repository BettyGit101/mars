import React from 'react';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import ImagesByDate from './pages/ImagesByDate';
import MarsWeather from './pages/MarsWeather';

const App = () =>  {
  return (
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/imagesByDate" element={<ImagesByDate/>} />
        <Route path="/marsWeather" element={<MarsWeather />} />
      </Routes>
  );
}

export default App;
