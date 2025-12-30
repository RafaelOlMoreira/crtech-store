import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

import Header from './frontend/mobile/Pages/Header/Header'
import Hero from './frontend/mobile/Pages/Hero/Hero'
import CategoryProduct from './frontend/mobile/Pages/CategoryProduct/CategoryProduct'
import PromoCategory from './frontend/mobile/Pages/PromoCategory/PromoCategory'
import NewProducts from './frontend/mobile/Pages/NewProducts/NewProducts'
import Suport from './frontend/mobile/Pages/Suport/Suport'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header />
    <Hero />
    <CategoryProduct />
    <PromoCategory />
    <NewProducts />
    <Suport />

  </StrictMode>,
)