import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage/index';
import MyProfile from './pages/MyProfile';
import Performance from './pages/Performance';
import Dashboard from './pages/Dashboard';
import LayoutScreen from './component/Layout';
import Roles from './pages/Database/Roles';
import Divisions from './pages/Database/Divisions';
import Programs from './pages/Database/Programs';
import Help from './pages/Help';
import Register from './pages/Register/index';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutScreen />}>
            <Route index element={<MyProfile />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/performance" element={<Performance /> } />

            <Route path="/performance/view/:userID" element={<viewPerformance /> } />
            <Route path="/performance/edit/:userID" element={<editPerformance /> } />

            <Route path="/roles" element={<Roles />} />
            <Route path="/divisions" element={<Divisions />} />
            <Route path="/program" element={<Programs />} />
            <Route path="/employees" element={<h1>Under Construction</h1>} />
            <Route path="/help" element={<Help />} />
            <Route path="/signout" element={<h1>Under Construction</h1>} />
          </Route>
          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
