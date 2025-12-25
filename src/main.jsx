import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

import Header from './frontend/mobile/Pages/Header/Header'
import Hero from './frontend/mobile/Pages/Hero/Hero'
import CategoryProduct from './frontend/mobile/Pages/CategoryProduct/CategoryProduct'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header />
    <Hero />
    <CategoryProduct />

  </StrictMode>,
)