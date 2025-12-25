import React from 'react'
import HeroImage from '/HeroImage.png' 

function Hero() {
    return (
        <div className='overflow-x-hidden pt-32 h-screen bg-center bg-cover bg-no-repeat flex items-center' style={{ backgroundImage: `url(${HeroImage})` }}>
            <div className='p-5 pr-20 space-y-5'>
                <h6 className='text-white text-[18px] bg-[#00b7ff7e] w-min text-nowrap py-0.5 px-2 rounded-lg uppercase'>Frete grátis aos fim de semana!</h6>
                <h3 className='text-white text-[30px] font-bebasneue font-extrabold drop-shadow-xs uppercase'>Capinhas, Películas, Fones sem fio, Carregadores Rápidos</h3>
                <p className='text-white text-[20px] font- drop-shadow-xs'>Qualidade e entrega rápida para o seu dia a dia.</p>

                <div className=' space-y-2'>
                    <button className='block bg-[#00b7ff7e] hover:bg-[#00b7ff] p-2 px-5 uppercase text-white font-bebasneue font-semibold rounded-2xl'>Aproveitar Oferta</button>
                    <button className='block border-3 border-[#00b7ff7e] hover:border-[#00b7ff] p-2 px-5 uppercase text-white hover:text-gray-200 font-bebasneue font-semibold rounded-2xl'>Ver Novidades</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
