import React, { useState } from 'react'
import Countdown from './Countdown'
import Capa from '/Capa.png'

function Offers() {

    const TempoOferta = (12 * 60 + 35) * 60 * 1000;

    return (
        <section id='ofertas' className='scroll-mt-32 bg-[#00B5FF]/90 py-10 px-8 md:px-32'>
            <div className='text-white text-center space-y-1.5'>
                {/* Top menu oferta mobile */}
                <div className='block md:hidden'>
                    <h1 className='font-bold text-3xl'>Ofertas Relâmpago</h1>
                    <Countdown duration={TempoOferta} />
                    <span className='text-md text-white'>Aproveite a oferta antes que acabe!</span>
                </div>

                {/* Top menu oferta desktop */}
                <div className='hidden md:flex md:items-center md:justify-between'>
                    <div className='text-left space-y-2'>
                        <h1 className='font-bold text-3xl'>Ofertas Relâmpago</h1>
                        <span className='text-md text-white'>Aproveite a oferta antes que acabe!</span>
                    </div>
                    <Countdown duration={TempoOferta} />
                </div>

                <div className='md:grid md:grid-cols-4 md:gap-5'>
                    {/* Produto 1 */}
                    <div className='bg-white text-black my-5 rounded-2xl'>
                        <div className='rounded-t-2xl h-80 bg-cover bg-center bg-no-repeat p-2'
                            style={{ backgroundImage: "url(/Capa.png)" }}
                        >
                            <span className='float-left bg-red-500 text-white text-sm font-bold px-2 p-0.5 rounded-2xl'>-20%</span>
                        </div>

                        <div className="p-4 text-start space-y-3">
                            <div className='space-y-1'>
                                <span className='text-[#00B5FF] block'>Capas</span>
                                <span className='font-semibold'>Capa 13 Pro Max</span>
                            </div>
                            <div className='space-x-2.5'>
                                <span className='text-xl font-bold'>R$ 15.00</span>
                                <span className='text-[#94A3B8] line-through'>R$ 20.00</span>
                            </div>
                            <button className='bg-[#00B5FF] w-full p-1.5 text-white text-md rounded-lg'>Adicionar ao Carrinho</button>
                        </div>
                    </div>
                    {/* Produto 2 */}
                    <div className='bg-white text-black my-5 rounded-2xl'>
                        <div className='rounded-t-2xl h-80 bg-cover bg-center bg-no-repeat p-2'
                            style={{ backgroundImage: "url(/Capa.png)" }}
                        >
                            <span className='float-left bg-red-500 text-white text-sm font-bold px-2 p-0.5 rounded-2xl'>-20%</span>
                        </div>

                        <div className="p-4 text-start space-y-3">
                            <div className='space-y-1'>
                                <span className='text-[#00B5FF] block'>Capas</span>
                                <span className='font-semibold'>Capa 13 Pro Max</span>
                            </div>
                            <div className='space-x-2.5'>
                                <span className='text-xl font-bold'>R$ 15.00</span>
                                <span className='text-[#94A3B8] line-through'>R$ 20.00</span>
                            </div>
                            <button className='bg-[#00B5FF] w-full p-1.5 text-white text-md rounded-lg'>Adicionar ao Carrinho</button>
                        </div>
                    </div>
                    {/* Produto 3 */}
                    <div className='bg-white text-black my-5 rounded-2xl'>
                        <div className='rounded-t-2xl h-80 bg-cover bg-center bg-no-repeat p-2'
                            style={{ backgroundImage: "url(/Capa.png)" }}
                        >
                            <span className='float-left bg-red-500 text-white text-sm font-bold px-2 p-0.5 rounded-2xl'>-20%</span>
                        </div>

                        <div className="p-4 text-start space-y-3">
                            <div className='space-y-1'>
                                <span className='text-[#00B5FF] block'>Capas</span>
                                <span className='font-semibold'>Capa 13 Pro Max</span>
                            </div>
                            <div className='space-x-2.5'>
                                <span className='text-xl font-bold'>R$ 15.00</span>
                                <span className='text-[#94A3B8] line-through'>R$ 20.00</span>
                            </div>
                            <button className='bg-[#00B5FF] w-full p-1.5 text-white text-md rounded-lg'>Adicionar ao Carrinho</button>
                        </div>
                    </div>
                    {/* Produto 4 */}
                    <div className='bg-white text-black my-5 rounded-2xl'>
                        <div className='rounded-t-2xl h-80 bg-cover bg-center bg-no-repeat p-2'
                            style={{ backgroundImage: "url(/Capa.png)" }}
                        >
                            <span className='float-left bg-red-500 text-white text-sm font-bold px-2 p-0.5 rounded-2xl'>-20%</span>
                        </div>

                        <div className="p-4 text-start space-y-3">
                            <div className='space-y-1'>
                                <span className='text-[#00B5FF] block'>Capas</span>
                                <span className='font-semibold'>Capa 13 Pro Max</span>
                            </div>
                            <div className='space-x-2.5'>
                                <span className='text-xl font-bold'>R$ 15.00</span>
                                <span className='text-[#94A3B8] line-through'>R$ 20.00</span>
                            </div>
                            <button className='bg-[#00B5FF] w-full p-1.5 text-white text-md rounded-lg'>Adicionar ao Carrinho</button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Offers
