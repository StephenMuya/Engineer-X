import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './main.css';
import AppRoutes from './routes/AppRoutes.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Router>
        <AppRoutes />
      </Router>
    </StrictMode>
  </BrowserRouter>
);
