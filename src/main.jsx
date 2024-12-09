import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
      <Footer/>
    </Router>
  </StrictMode>,
)
