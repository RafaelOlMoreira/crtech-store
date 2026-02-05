import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './style.css'

import Header from './frontend/mobile/Components/Header'
import Carrousel from './frontend/mobile/Pages/Carrousel/Carrousel'

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

  </StrictMode>,
)