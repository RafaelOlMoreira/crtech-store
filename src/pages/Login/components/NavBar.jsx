import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 h-[70px] w-full z-50 fixed top-0 left-0 shadow-md">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/logo.svg" className="h-8" alt="CR Tech Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            CR Tech
                        </span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="text-white bg-[#0096ff] hover:bg-[#0072C6] focus:ring-4 focus:outline-none focus:ring-[#005B9F] font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#0096ff] dark:hover:bg-[#0072C6] dark:focus:ring-[#005B9F] transition duration-500 cursor-pointer">
                            Entrar / Registrar
                        </button>
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-white bg-[#72ffff] rounded-sm md:bg-transparent md:text-[#72ffff] md:dark:text-[blue-500]" aria-current="page">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-[#72ffff] md:hover:bg-transparent md:hover:text-[#72ffff] md:dark:hover:text-[#72ffff] dark:text-white dark:hover:bg-[#72ffff] dark:hover:text-white md:dark:hover:bg-transparent dark:border-[#72ffff]">
                                    Sobre Nós
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-[#72ffff] md:hover:bg-transparent md:hover:text-[#72ffff] md:dark:hover:text-[#72ffff] dark:text-white dark:hover:bg-[#72ffff] dark:hover:text-white md:dark:hover:bg-transparent dark:border-[#72ffff]">
                                    Produtos
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-[#72ffff] md:hover:bg-transparent md:hover:text-[#72ffff] md:dark:hover:text-[#72ffff] dark:text-white dark:hover:bg-[#72ffff] dark:hover:text-white md:dark:hover:bg-transparent dark:border-[#72ffff]">
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-[#72ffff] md:hover:bg-transparent md:hover:text-[#72ffff] md:dark:hover:text-[#72ffff] dark:text-white dark:hover:bg-[#72ffff] dark:hover:text-white md:dark:hover:bg-transparent dark:border-[#72ffff]">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;