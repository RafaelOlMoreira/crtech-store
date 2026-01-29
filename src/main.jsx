import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

import Header from './frontend/mobile/Components/Header'
import Carrousel from './frontend/mobile/Pages/Carrousel/Carrousel'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header />

    <Carrousel />

  </StrictMode>,
)