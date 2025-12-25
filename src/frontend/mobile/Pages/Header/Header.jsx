import React from 'react'

function Header() {
    return (
        <div className='overflow-x-hidden fixed z-999 items-center px-5 pt-5 bg-white shadow-2xl h-32.5 w-full font-poppins'>

            <div className='flex items-center'>
                {/* Input de pesquisa */}
                <form className=''>
                    <div className='relative'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-gray-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        <input type="search" placeholder='Buscar produtos...' className='w-min border-2 border-[#00b7ff7e] focus:border-[#00b7ff] hover:border-[#00b7ff] outline-none p-2 rounded-3xl text-sm pl-9 placeholder:text-sm placeholder:font-medium' />
                    </div>
                </form>

                {/* Container dos icones */}
                <div className='w-full justify-evenly flex'>
                    {/* Icone de Coração */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>

                    {/* Icone de Sacola */}
                    <div>
                        {/* Contador de Produtos na sacola */}
                        <div className='absolute bg-red-500 rounded-full w-3 h-3 ml-3'>
                            <span className='flex items-center justify-center -my-0.75 text-white text-[10px]'>2</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </div>

                    {/* Icone de Perfil */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>

            </div>

            { /* Div das categorias */}
            <div className='pt-5'>
                <ul className='flex justify-evenly'>
                    <li className='font-semibold py-3 hover:border-b-3 hover:border-[#00b7ff]'>
                        <a href="#Produtos">Produtos</a>
                    </li>
                    <li className='font-semibold py-3 hover:border-b-3 hover:border-[#00b7ff]'>
                        <a href="#">Ofertas</a>
                    </li>
                    <li className='font-semibold py-3 hover:border-b-3 hover:border-[#00b7ff]'>
                        <a href="#">Novos</a>
                        </li>
                    <li className='font-semibold py-3 hover:border-b-3 hover:border-[#00b7ff]'>
                        <a href="#">Suporte</a>
                    </li>
                </ul>
            </div>

        </div >
    )
}

export default Header
