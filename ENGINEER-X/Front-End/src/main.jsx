import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './main.css';
import AppRoutes from './routes/AppRoutes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </StrictMode>
);
