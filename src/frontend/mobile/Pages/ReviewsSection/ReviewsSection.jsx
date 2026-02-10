import React from 'react'
import { FaStar } from "react-icons/fa";

function Reviews() {
  return (
    <section className='py-10 px-8 bg-gray-100/50'>
      <div className='text-center space-y-2'>
        <h1 className='text-2xl font-bold'>O Que Nossos Clientes Dizem</h1>
        <span className='text-[#94A3B8]'>Avaliações reais de clientes satisfeitos</span>
      </div>

      <div className='py-12 space-y-5'>
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
            <span className='text-md'>Comprei uma capinha para meu A15 e a experiência foi incrível! Entrega rápida e produto original. Recomendo muito!</span>
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
            <span className='text-md'>Comprei uma capinha para meu A15 e a experiência foi incrível! Entrega rápida e produto original. Recomendo muito!</span>
            <span className='text-sm text-[#00B5FF]'>Capa Samsung A15</span>
          </div>
        </div>
        
        {/* Card Avaliação 3 */}
        <div className='border border-gray-300 p-5 py-7 rounded-lg hover:shadow-xl'>
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
            <span className='text-md'>Comprei uma capinha para meu A15 e a experiência foi incrível! Entrega rápida e produto original. Recomendo muito!</span>
            <span className='text-sm text-[#00B5FF]'>Capa Samsung A15</span>
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
            <span className='text-md'>Comprei uma capinha para meu A15 e a experiência foi incrível! Entrega rápida e produto original. Recomendo muito!</span>
            <span className='text-sm text-[#00B5FF]'>Capa Samsung A15</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Reviews
