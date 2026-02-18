import React from 'react'
import { FaStar } from "react-icons/fa";

function Reviews() {
  return (
    <section className='py-10 px-8 bg-gray-100/50'>
      <div className='text-center space-y-2'>
        <h1 className='text-2xl font-bold md:text-4xl'>O Que Nossos Clientes Dizem</h1>
        <span className='text-[#94A3B8] md:text-lg'>Avaliações reais de clientes satisfeitos</span>
      </div>

      <div className='py-12 md:px-32 space-y-5 md:space-y-0 md:grid md:grid-cols-4 md:gap-5'>
        {/* Card Avaliação 1 */}
        <div className='border border-gray-300 p-5 py-7 rounded-lg hover:shadow-xl'>
          <div className='space-y-0.5 pb-4'>
            <h6 className='block font-semibold'>Ludmilla Giori</h6>
            <div className='flex text-yellow-500'>
              <FaStar className='size-3' />
              <FaStar className='size-3' />
              <FaStar className='size-3' />
              <FaStar className='size-3' />
              <FaStar className='size-3' />
            </div>
          </div>
          <div className='flex flex-col space-y-2'>
            <span className='text-md md:line-clamp-4'>Comprei uma capinha para meu A15 e a experiência foi incrível! Entrega rápida e produto original. Recomendo muito a todos!</span>
            <span className='text-sm text-[#00B5FF]'>Capa Samsung A15</span>
          </div>
        </div>
        
        {/* Card Avaliação 2 */}
        <div className='border border-gray-300 p-5 py-7 rounded-lg hover:shadow-xl'>
          <div className='space-y-0.5 pb-4'>
            <h6 className='block font-semibold'>Rodrigo Gonçalves</h6>
            <div className='flex text-yellow-500'>
              <FaStar className='size-3' />
              <FaStar className='size-3' />
              <FaStar className='size-3' />
              <FaStar className='size-3' />
              <FaStar className='size-3' />
            </div>
          </div>
          <div className='flex flex-col space-y-2'>
            <span className='text-md md:line-clamp-4'>Comprei os AirPods 2 Pro e estou impressionado com a qualidade do som e o acabamento. Entrega rápida, embalagem perfeita e produto original, super recomendo!</span>
            <span className='text-sm text-[#00B5FF]'>AirPods 2 Pro</span>
          </div>
        </div>
        
        {/* Card Avaliação 3 */}
        <div className=' border border-gray-300 p-5 py-7 rounded-lg hover:shadow-xl'>
          <div className='space-y-0.5 pb-4'>
            <h6 className='block font-semibold'>Rafael Oliveira</h6>
            <div className='flex text-yellow-500'>
              <FaStar className='size-3' />
              <FaStar className='size-3' />
              <FaStar className='size-3' />
              <FaStar className='size-3' />
              <FaStar className='size-3' />
            </div>
          </div>
          <div className='flex flex-col space-y-2'>
            <span className='text-md md:line-clamp-4'>Comprei uma capa para iPhone 12 e ficou perfeita: ajuste exato, material resistente e visual bonito. Chegou rápido e em ótimo estado, recomendo muito!</span>
            <span className='text-sm text-[#00B5FF]'>Capa iPhone 12</span>
          </div>
        </div>
        
        {/* Card Avaliação 4 */}
        <div className='border border-gray-300 p-5 py-7 rounded-lg hover:shadow-xl'>
          <div className='space-y-0.5 pb-4'>
            <h6 className='block font-semibold'>Luiz Felipe</h6>
            <div className='flex text-yellow-500'>
              <FaStar className='size-3' />
              <FaStar className='size-3' />
              <FaStar className='size-3' />
              <FaStar className='size-3' />
              <FaStar className='size-3' />
            </div>
          </div>
          <div className='flex flex-col space-y-2'>
            <span className='text-md md:line-clamp-4'>Comprei a película para iPhone 15 Pro Max e a instalação foi simples, sem bolhas e com ótima transparência. Entrega rápida e produto de qualidade!</span>
            <span className='text-sm text-[#00B5FF]'>Película iPhone 15 Pro Max</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Reviews
