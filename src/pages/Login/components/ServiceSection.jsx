import React from 'react'

import card1 from '../../../assets/serviceCard1.png';
import card2 from '../../../assets/serviceCard2.png';
import card3 from '../../../assets/serviceCard3.png';

function ServiceSection() {
    return (
        <div className='bg-gradient-to-l from-[#101828] to-[#0a0f1a]'>
            <section className="w-full max-w-7xl mx-auto py-16 px-4">
                <h2 className="text-6xl font-[Poppins] text-center text-white mb-12">Serviços</h2>

                <div className="grid 2xl:grid-cols-4 gap-4 text-white
                    lg:grid-cols-3 lg:m-12
                    sm:grid-cols-2 sm:m-12
                    xs:grid-cols-1 place-items-center justify-center">
                    
                    <div className="md:h-full w-75 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl 
                        sm:w-full flex justify-center">
                        <img src={card1} alt="Card 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="md:h-full w-75 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl 
                        sm:w-full flex justify-center">
                        <img src={card2} alt="Card 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="md:h-full w-75 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl 
                        sm:w-full flex justify-center lg:col-span-1">
                        <img src={card3} alt="Card 3" className="w-full h-full object-cover" />
                    </div>

                    <div className="2xl:h-full 2xl:col-span-1 text-center text-4xl font-[Poppins] grid place-items-center
                        lg:col-span-3 lg:h-50 lg:order-1
                        sm:col-span-2 sm:h-50 xs:col-span-1 mb-5">
                        <div>
                            Conheça nossos serviços da
                            <p className="text-5xl font-bold text-[#ffb800] leading-tight">CR Tech</p>
                            <a href="#" className="text-2xl text-black font-[Poppins] bg-[#ffb800] hover:bg-[#e0a100] p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServiceSection
