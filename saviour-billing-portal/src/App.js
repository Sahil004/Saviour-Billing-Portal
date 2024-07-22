import './App.css';
import ClientComponent from './components/ClientComponent';
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/Header";
import ListClientComponent from "./components/ListClientComponent";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from './components/Dashboard';
import LoginComponenet from './components/LoginComponenet';
import { useEffect, useState } from 'react';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(storedAuth === 'true');
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* http:/localhost:3000 */}
          <Route path="/" element={<Navigate to="/login" />} ></Route>
          {/* http:/localhost:3000/login */}
          <Route path='/login' 
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginComponenet onLogin={handleLogin} />}>  
          </Route>
          {/* http:/localhost:3000/dashboard */}
          <Route path="/dashboard"
            element={isAuthenticated ? <Dashboard onLogout={handleLogout}/> : <Navigate to="/login"></Navigate>}>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
