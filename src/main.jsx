import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Header from './frontend/mobile/Pages/Header/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header />

  </StrictMode>,
)