import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import './index.css'
import Login from './pages/Login';
//commit
import SignUp from './pages/Signup';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={ <SignUp /> } />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
      
    </HelmetProvider>
  </StrictMode>,
)
