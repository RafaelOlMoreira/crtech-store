import React from 'react'

import Capinha from '/CapinhaPromo.png'

function NewProducts() {
    return (
        <div className='h-auto overflow-y-hidden py-5 px-4'>
            <h1 className='py-5 px-8 text-xl uppercase font-montserrat font-extrabold text-center'>Veja os novos produtos da CR TECH</h1>

            <div className='grid grid-cols-2 gap-5'>
                <a href="#">
                    <div className='bg-white shadow-2xl hover:border hover:border-[#00b7ff] rounded-2xl p-3'>
                        <div>
                            <span className='text-md p-2 font-montserrat font-semibold'>Novo</span>
                            <img src={Capinha} className='bg-center bg-cover bg-no-repeat drop-shadow-2xl' />
                        </div>
                        <div className='block'>
                            <h6 className='font-bebasneue text-[18px]'>Capinha Silicone</h6>
                            <div className='flex items-center'>
                                <p className='font-bebasneue text-[14px]'>Ultra Flexivel, Resistente</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="#">
                    <div className='bg-white shadow-2xl hover:border hover:border-[#00b7ff] rounded-2xl p-3'>
                        <div>
                            <span className='text-md p-2 font-montserrat font-semibold'>Novidade</span>
                            <img src={Capinha} className='bg-center bg-cover bg-no-repeat drop-shadow-2xl' />
                        </div>
                        <div className='block'>
                            <h6 className='font-bebasneue text-[18px]'>Capa de Couro</h6>
                            <div className='flex items-center'>
                                <p className='font-bebasneue text-[14px]'>Estilo, Resistente, Qualidade</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default NewProducts
