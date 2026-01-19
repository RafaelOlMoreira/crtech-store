import React from 'react'
import { useState } from 'react';
import Capinhas from '/Capinhas.png';

function Header() {

    const [profileMenuAberto, setProfileMenuAberto] = useState(false);
    const [sacolaMenuAberto, setSacolaMenuAberto] = useState(false);

    return (
        // Header geral
        <div>
            <header className='overflow-x-hidden fixed z-1000 items-center px-5 pt-5 bg-white shadow-2xl h-32.5 w-full font-poppins'>
                {/* Div superior de componentes */}
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
                        <button className='' onClick={() => setSacolaMenuAberto(!sacolaMenuAberto)}>
                            {/* Contador de Produtos na sacola */}
                            <div className='absolute bg-red-500 rounded-full w-3 h-3 ml-3'>
                                <span className='flex items-center justify-center -my-0.75 text-white text-[10px]'>2</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </button>

                        {/* Icone de Perfil */}
                        <button className='' onClick={() => setProfileMenuAberto(!profileMenuAberto)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </button>
                        {/* Criar um dropdown */}
                    </div>


                </div>

                { /* Div das categorias */}
                <div className='pt-5'>
                    <ul className='flex justify-evenly'>
                        <li className='font-semibold py-3 hover:border-b-3 hover:border-[#00b7ff]'>
                            <a href="#Produtos">Produtos</a>
                        </li>
                        <li className='font-semibold py-3 hover:border-b-3 hover:border-[#00b7ff]'>
                            <a href="#Ofertas">Ofertas</a>
                        </li>
                        <li className='font-semibold py-3 hover:border-b-3 hover:border-[#00b7ff]'>
                            <a href="#Novidade">Novidades</a>
                        </li>
                        <li className='font-semibold py-3 hover:border-b-3 hover:border-[#00b7ff]'>
                            <a href="#Suporte">Suporte</a>
                        </li>
                    </ul>
                </div>

            </header >

            <div className='flex justify-end px-4'>
                <div className={`absolute z-2000 p-3 mt-17 px-5 rounded-2xl shadow-2xl bg-white shadow-current text-nowrap font-bebasneue text-md ${profileMenuAberto ? "opacity-100 pointer-events-auto fixed" : "opacity-0 pointer-events-none"}`}>
                    <div className=''>
                        <ul className="py-2">
                            <li className=''><a href="#" className='font-bold font-montserrat' onClick={() => setProfileMenuAberto(!profileMenuAberto)}>Olá, <span className='text-[#00b7ff]'>(Usuário)</span></a></li>
                        </ul>
                        <ul className='text-sm border-t-2 border-gray-200 '>
                            <li className='py-2'>
                                <a href="#" className='flex items-center space-x-1' onClick={() => setProfileMenuAberto(!profileMenuAberto)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-gray-400">
                                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                                    </svg>
                                    <span>Ver Perfil</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-gray-300 ml-auto">
                                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                    </svg>

                                </a>
                            </li>
                            <li className='py-2'>
                                <a href="#" className='flex items-center space-x-1' onClick={() => setProfileMenuAberto(!profileMenuAberto)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-gray-400">
                                        <path fill-rule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clip-rule="evenodd" />
                                    </svg>

                                    <span>Sair do Perfil</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-gray-300 ml-auto">
                                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <ul className='text-sm border-t-2 border-gray-200 '>
                            <li className='py-2'>
                                <a href="#" className='flex items-center space-x-1' onClick={() => setProfileMenuAberto(!profileMenuAberto)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-gray-400">
                                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                                    </svg>
                                    <span>Entrar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-gray-300 ml-auto">
                                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                    </svg>

                                </a>
                            </li>
                            <li className='py-2'>
                                <a href="#" className='flex items-center space-x-1' onClick={() => setProfileMenuAberto(!profileMenuAberto)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-gray-400">
                                        <path fill-rule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" clip-rule="evenodd" />
                                    </svg>
                                    <span>Registrar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-gray-300 ml-auto">
                                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className='flex justify-end px-4'>
                <div className={`absolute z-2000 p-3 mt-17 px-5 w-80 rounded-2xl shadow-2xl shadow-current bg-white text-nowrap font-montserrat text-md ${sacolaMenuAberto ? "opacity-100 pointer-events-auto fixed" : "opacity-0 pointer-events-none"}`}>

                    <div className='py-2 border-b border-gray-400'>
                        <h1 className='font-semibold'>Itens da Sacola</h1>
                    </div>

                    <div class="py-5 pb-4">
                        <div class="max-h-25 overflow-y-auto space-y-3">

                            {/* Item 1 */}
                            <div className='flex p-2 rounded-lg gap-x-1.5 border border-gray-400'>
                                <div className='flex items-center pr-1'>
                                    <img src={Capinhas} className='rounded-lg object-cover h-17' />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <div className='text-center'>
                                        <p className='block text-sm text-wrap'>Capinha de Silicone</p>
                                        <p className='text-[10px]'>Quantidade: 1</p>
                                    </div>
                                </div>
                                <div className='flex items-center text-gray-600'>
                                    <div>
                                        <span className='text-[14px]'>R$ 20,00</span>
                                        <a href="#" className='flex justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hover:text-red-500">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className='flex p-2 rounded-lg gap-x-1.5 border border-gray-400'>
                                <div className='flex items-center pr-1'>
                                    <img src={Capinhas} className='rounded-lg object-cover h-17' />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <div className='text-center'>
                                        <p className='block text-sm text-wrap'>Capinha de Silicone</p>
                                        <p className='text-[10px]'>Quantidade: 1</p>
                                    </div>
                                </div>
                                <div className='flex items-center text-gray-600'>
                                    <div>
                                        <span className='text-[14px]'>R$ 20,00</span>
                                        <a href="#" className='flex justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hover:text-red-500">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className='flex p-2 rounded-lg gap-x-1.5 border border-gray-400'>
                                <div className='flex items-center pr-1'>
                                    <img src={Capinhas} className='rounded-lg object-cover h-17' />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <div className='text-center'>
                                        <p className='block text-sm text-wrap'>Capinha de Silicone</p>
                                        <p className='text-[10px]'>Quantidade: 1</p>
                                    </div>
                                </div>
                                <div className='flex items-center text-gray-600'>
                                    <div>
                                        <span className='text-[14px]'>R$ 20,00</span>
                                        <a href="#" className='flex justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hover:text-red-500">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Header
