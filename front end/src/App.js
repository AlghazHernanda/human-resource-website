import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
