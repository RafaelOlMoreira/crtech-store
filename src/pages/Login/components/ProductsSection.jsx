import React from 'react'

import card1 from '../../../assets/card1.png';
import card2 from '../../../assets/card2.png';
import card3 from '../../../assets/card3.png';

const ProductsSection = () => {
    return (
        <div className='dark:bg-gray-800'>
            <section className="w-full max-w-7xl mx-auto py-16 px-4">
                <h2 className="text-6xl font-[Poppins] text-center text-white mb-12">Produtos</h2>
                <div className="grid grid-cols-4 gap-4 text-white">
                    <div className="h-117 w-70 text-center text-4xl font-poppins grid place-items-center">
                        <div>
                            Conheça nossos produtos da
                            <p className="text-5xl font-bold text-[#ffb800] leading-tight">CR Tech</p>
                        </div>
                    </div>
                    <div className="h-117 rounded-lg shadow-lg overflow-hidden">
                        <img src={card1} alt="Card 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-117 rounded-lg shadow-lg overflow-hidden">
                        <img src={card2} alt="Card 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-117 rounded-lg shadow-lg overflow-hidden">
                        <img src={card3} alt="Card 3" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductsSection
