import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './style.css'

import Header from './frontend/mobile/Components/Header'
import Carrousel from './frontend/mobile/Pages/CarouselSection/CarouselSection'
import Categories from './frontend/mobile/Pages/CategoriesSection/CategoriesSection'
import Offers from './frontend/mobile/Pages/OffersSection/OffersSection'
import Releases from './frontend/mobile/Pages/ReleasesSection/ReleasesSection'
import Reviews from './frontend/mobile/Pages/ReviewsSection/ReviewsSection'

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
    <Reviews />

  </StrictMode>,
)