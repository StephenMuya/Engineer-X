import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css' 
import ProductLanding from './Components/productLanding.jsx'
import Registration from './Components/Regisration.jsx'
import Dashboard from './Components/dashboard.jsx'
import SettingsPage from './Components/settings.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductLanding />
    <Registration />
    <Dashboard  />
    <SettingsPage />
  </StrictMode>,
)
