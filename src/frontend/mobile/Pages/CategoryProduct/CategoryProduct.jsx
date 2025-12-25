import React from 'react'
import Capinhas from '/Capinhas.png'
import Peliculas from '/Peliculas.png'
import Fones from '/Fones.png'
import Carregadores from '/Carregadores.png'

function CategoryProduct() {
    return (
        <div className='overflow-x-hidden py-5 px-4' id='Produtos'>
            <h1 className='py-2 text-xl uppercase font-montserrat font-extrabold text-center'>Categoria de Produtos</h1>
            <div className='bg-white grid grid-cols-2 gap-5'>

                {/* Card Capinhas */}
                <div className='bg-center h-35 bg-cover bg-no-repeat flex rounded-2xl' style={{ backgroundImage: `url(${Capinhas})` }}>
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

export default CategoryProduct
