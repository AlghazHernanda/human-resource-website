import LoginPage from './pages/LoginPage/index';
import MyProfile from './pages/MyProfile';
import Home from './pages/Home';
import LayoutScreen from './component/Layout';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutScreen />}>
            <Route index element={<Home />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/dashboard" element={<h1>In construction</h1>} />
            <Route path="/performance" element={<h1>In construction</h1>} />
            <Route path="/roles" element={<h1>In construction</h1>} />
            <Route path="/divisions" element={<h1>In construction</h1>} />
            <Route path="/program" element={<h1>In construction</h1>} />
            <Route path="/employees" element={<h1>In construction</h1>} />
            <Route path="/help" element={<h1>In construction</h1>} />
            <Route path="/signout" element={<h1>In construction</h1>} />
          </Route>
          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<h1>In construction</h1>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
