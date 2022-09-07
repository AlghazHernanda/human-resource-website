import Login from './pages/LoginPage/index';
import Home from './pages/Home';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<h1>In construction</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
