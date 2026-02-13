import { Routes, Route } from 'react-router-dom';

import Header from './frontend/mobile/Components/Header'
import Carrousel from './frontend/mobile/Pages/CarouselSection/CarouselSection'
import Categories from './frontend/mobile/Pages/CategoriesSection/CategoriesSection'
import Offers from './frontend/mobile/Pages/OffersSection/OffersSection'
import Releases from './frontend/mobile/Pages/ReleasesSection/ReleasesSection'
import Reviews from './frontend/mobile/Pages/ReviewsSection/ReviewsSection'
import EmailNews from './frontend/mobile/Pages/EmailNewsSection/EmailNews'
import StoreBenefits from './frontend/mobile/Pages/StoreBenefitsSection/StoreBenefits'
import Footer from './frontend/mobile/Components/Footer'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
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
                        <EmailNews />
                        <StoreBenefits />
                        <Footer />
                    </>
                } />
                
                {/* <Route path="/login" element={<Login />} />
                <Route path="/pedidos" element={<Pedidos />} />
                <Route path="/conta" element={<Conta />} />
                <Route path="/sacola" element={<Sacola />} />
                <Route path="/finalcompra" element={<FinalCompra />} />
                <Route path="/desejos" element={<Desejos />} /> */}

            </Routes>
        </>
    );
}

export default App
