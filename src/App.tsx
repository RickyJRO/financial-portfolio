import logo from './logo.svg';
import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
