import './App.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Login from './pages/Login/Login';

function App() {
  const navigate =useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/login');
    }
  }, [pathname, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
