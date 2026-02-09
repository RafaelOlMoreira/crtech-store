import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './style.css'

import Header from './frontend/mobile/Components/Header'
import Carrousel from './frontend/mobile/Pages/Carrousel/Carrousel'
import Categories from './frontend/mobile/Pages/Categories/Categories'
import Offers from './frontend/mobile/Pages/Offers/Offers'
import Releases from './frontend/mobile/Pages/Releases/releases'

const slides = [
    "/Foto1.jpg",
    "/Foto2.jpg",
    "/Foto3.jpg",
]

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header />
    <Carrousel autoSlide={true}>
      {slides.map((s) => (
        <img src={s} />
      ))}
    </Carrousel>
    <Categories />
    <Offers />
    <Releases />

  </StrictMode>,
)