import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import './productLanding.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <productLanding />
  </StrictMode>,
)
