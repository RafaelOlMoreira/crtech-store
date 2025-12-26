import React from 'react'
import PromoBanner from '/BannerOferta.png'
import CapinhaPromo from '/CapinhaPromo.png'
import Capinhas from '/Capinhas.png'
import Peliculas from '/Peliculas.png'
import Fones from '/Fones.png'
import Carregadores from '/Carregadores.png'

function PromoCategory() {
    return (
        <div className='overflow-x-hidden py-8 m-2 space-y-3'>

            {/* Banner de promoção */}
            <div className='h-auto bg-center bg-cover bg-no-repeat rounded-2xl shadow-2xl' style={{ backgroundImage: `url(${PromoBanner})` }}>
                <div className='py-10 px-4 flex items-center'>
                    <div className='mb-auto -mt-10 -ml-8'>
                        <img className='absolute bg-center bg-cover bg-no-repeat h-46' src={CapinhaPromo} alt="" />
                    </div>  
                    <div className='ml-auto text-center space-y-2'>
                        <p className='text-lg uppercase w-min font-montserrat font-semibold'>Ofertas Imperdíveis</p>
                        <button className='bg-[#00b7ff] p-2 px-3 uppercase font-semibold font-bebasneue rounded-lg'>Aproveite Já</button>
                    </div>
                </div>
            </div>

            <h1 className='py-2 text-xl uppercase font-montserrat font-extrabold text-center'>Confira as Promoções</h1>

            <div className='bg-white grid grid-cols-2 gap-5'>

                {/* Card Capinhas */}
                <div className='bg-center h-35 bg-cover bg-no-repeat flex rounded-2xl' style={{ backgroundImage: `url(${Capinhas})` }}>
                    <span className='absolute uppercase text-nowrap p-1 m-1.5 text-white text-[12px] bg-[#7c3ad0] rounded-lg'>10% OFF</span>
                    <div className='flex text-white mt-auto w-full py-2 px-2 bg-[#000000da] drop-shadow-slate-950 rounded-b-2xl'>
                        <h2 className='text-[16px]'>Capinhas</h2>
                        <a href="#" className='ml-auto hover:text-gray-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Card Películas */}
                <div className='bg-center h-35 bg-cover bg-no-repeat flex rounded-2xl' style={{ backgroundImage: `url(${Peliculas})` }}>
                    <span className='absolute uppercase text-nowrap p-1 m-1.5 text-white text-[12px] bg-[#7c3ad0] rounded-lg'>15% OFF</span>
                    <div className='flex text-white mt-auto w-full py-2 px-2 bg-[#000000da] drop-shadow-slate-950 rounded-b-2xl'>
                        <h2 className='text-[16px]'>Películas</h2>

                        <a href="#" className='ml-auto hover:text-gray-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Card Fones */}
                <div className='bg-center h-35 bg-cover bg-no-repeat flex rounded-2xl' style={{ backgroundImage: `url(${Fones})` }}>
                    <span className='absolute uppercase text-nowrap p-1 m-1.5 text-white text-[12px] bg-[#7c3ad0] rounded-lg'>20% OFF</span>
                    <div className='flex text-white mt-auto w-full py-2 px-2 bg-[#000000da] drop-shadow-slate-950 rounded-b-2xl'>
                        <h2 className='text-[16px]'>Fones</h2>
                        <a href="#" className='ml-auto hover:text-gray-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Card Carregadores */}
                <div className='bg-center h-35 bg-cover bg-no-repeat flex rounded-2xl' style={{ backgroundImage: `url(${Carregadores})` }}>
                    <span className='absolute uppercase text-nowrap p-1 m-1.5 text-white text-[12px] bg-[#7c3ad0] rounded-lg'>30% OFF</span>
                    <div className='flex text-white mt-auto w-full py-2 px-2 bg-[#000000da] drop-shadow-slate-950 rounded-b-2xl'>
                        <h2 className='text-[16px]'>Carregadores</h2>

                        <a href="#" className='ml-auto hover:text-gray-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PromoCategory
