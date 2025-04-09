import React from 'react'

import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import ProductsSection from './components/ProductsSection'
import ServiceSection from './components/ServiceSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from "/public/Footer"

function PageAbout() {
  return (
    <div>
      <NavBar />

      <Carousel />

      <ProductsSection />

      <ServiceSection />

      <AboutSection />

      <ContactSection />

      <Footer />

    </div>
  )
}

export default PageAbout
