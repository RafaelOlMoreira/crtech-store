import NavBar from "./components/NavBar"
import Carousel from "./components/Carousel"
import AboutSection from "./components/AboutSection"
import ProductsSection from "./components/ProductsSection"
import ServiceSection from "./components/ServiceSection"
import ContactSection from "./components/ContactSection"
import Footer from "/public/Footer"

import React from 'react'

function LoginPage() {
  return (
    <div>

      <NavBar />

      <Carousel />

      <AboutSection />

      <ProductsSection />

      <ServiceSection />

      <ContactSection />

      <Footer />

    </div>
  )
}

export default LoginPage

