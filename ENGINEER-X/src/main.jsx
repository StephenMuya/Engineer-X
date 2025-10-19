import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HeroSection from './hero.jsx'
import './main.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroSection />
  </StrictMode>,
)
