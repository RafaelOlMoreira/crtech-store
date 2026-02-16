import { Routes, Route } from 'react-router-dom';

import Header from './frontend/mobile/Components/Header'
import HeaderDesktop from './frontend/desktop/Components/HeaderDesktop';

import Carrousel from './frontend/mobile/Pages/CarouselSection/CarouselSection'
import Categories from './frontend/mobile/Pages/CategoriesSection/CategoriesSection'
import Offers from './frontend/mobile/Pages/OffersSection/OffersSection'
import Releases from './frontend/mobile/Pages/ReleasesSection/ReleasesSection'
import Reviews from './frontend/mobile/Pages/ReviewsSection/ReviewsSection'
import EmailNews from './frontend/mobile/Pages/EmailNewsSection/EmailNews'
import StoreBenefits from './frontend/mobile/Pages/StoreBenefitsSection/StoreBenefits'
import Footer from './frontend/mobile/Components/Footer'

import Checkout from './frontend/mobile/Pages/Checkout/Checkout'
import Login from './frontend/mobile/Pages/Login/Login'
import CarouselDesktop from './frontend/desktop/Pages/CarouselSection/CarouselDesktop';

const slidesMobile = [
    "/Foto1Mobile.png",
    "/Foto2Mobile.png",
]

const slidesDesktop = [
    "/Foto1Desktop.png",
    "/Foto2Desktop.png",
]

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        {/* Header para Desktop */}
                        <div className='hidden md:block'>
                            <HeaderDesktop />
                        </div>
                        {/* Header para Mobile */}
                        <div className='block md:hidden'>
                            <Header />
                        </div>

                        {/* Carousel para Desktop */}
                        <div className='hidden md:block'>
                            <CarouselDesktop autoSlide={true}>
                                {slidesDesktop.map((s) => (
                                    <img src={s} />
                                ))}
                            </CarouselDesktop>
                        </div>
                        {/* Carousel para Mobile */}
                        <div className='block md:hidden'>
                            <Carrousel autoSlide={true}>
                                {slidesMobile.map((s) => (
                                    <img src={s} />
                                ))}
                            </Carrousel>
                        </div>
                        <Categories />
                        <Offers />
                        <Releases />
                        <Reviews />
                        <EmailNews />
                        <StoreBenefits />
                        <Footer />
                    </>
                } />

                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />

            </Routes>
        </>
    );
}

export default App
