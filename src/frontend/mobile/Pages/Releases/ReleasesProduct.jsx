import React from 'react'

function ReleasesProduct() {
  return (
    <section className='py-10 px-8'>
            <div className=' text-center space-y-1.5'>
                <h1 className='font-bold text-3xl'>Lançamentos</h1>
                <span className='text-md'>Aproveite os produtos mais recentes!</span>

                {/* Produto 1 */}
                <div className='hover:shadow-2xl bg-white border border-gray-500/40 text-black my-5 rounded-2xl'>
                    <div className='rounded-t-2xl h-96 bg-cover bg-center bg-no-repeat p-2'
                        style={{ backgroundImage: "url(/Capa.png)"}}
                    >
                        <span className='float-left bg-[#00B5FF] text-white text-sm font-bold px-2 p-0.5 rounded-2xl'>Novo</span>
                    </div>

                    <div className="p-4 text-start space-y-3">
                        <div className='space-y-1'>
                            <span className='text-[#00B5FF] block'>Capas</span>
                            <span className='font-semibold'>Capa 13 Pro Max</span>
                        </div>
                        <div className='space-x-2.5'>
                            <span className='text-xl font-bold'>R$ 25.00</span>
                        </div>
                        <button className='bg-[#00B5FF] w-full p-1.5 text-white text-md rounded-lg'>Comprar Agora</button>
                    </div>
                </div>

            </div>
        </section>
  )
}

export default ReleasesProduct
