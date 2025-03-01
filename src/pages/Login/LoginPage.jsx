import NavBar from "./components/NavBar"
import Carousel from "./components/Carousel"

import React from 'react'

function LoginPage() {
  return (
    <div>
        <NavBar />
      <div className="flex items-center justify-center h-screen bg-gray-900 pt-12">
        <Carousel />
      </div>
    </div>
  )
}

export default LoginPage

