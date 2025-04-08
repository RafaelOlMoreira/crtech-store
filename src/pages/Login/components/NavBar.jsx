import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState("Início");

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleMenuClick = (section) => {
        setCurrentSection(section);
        setIsMenuOpen(false);
        
        // Rola até a section correspondente
        const element = document.getElementById(section.toLowerCase().replace(' ', '-'));
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const menuItems = [
        { name: "Início", id: "início" },
        { name: "Sobre Nós", id: "sobre-nós" },
        { name: "Produtos", id: "produtos" },
        { name: "Serviços", id: "serviços" },
        { name: "Contato", id: "contato" }
    ];

    return (
        <>
            {/* Overlay escuro quando menu está aberto */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={toggleMenu}
                />
            )}

            <nav className="bg-white dark:bg-gray-900 h-[70px] w-full z-50 fixed top-0 left-0 shadow-md">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo */}
                    <a 
                        href="#início" 
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                        onClick={(e) => {
                            e.preventDefault();
                            handleMenuClick("Início");
                        }}
                    >
                        <img src="/logo.svg" className="h-8" alt="CR Tech Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            CR Tech
                        </span>
                    </a>

                    {/* Botões */}
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button 
                            type="button" 
                            className="text-white bg-[#0096ff] hover:bg-[#0072C6] font-medium rounded-lg text-sm px-4 py-2 text-center transition duration-300"
                        >
                            Acessar a Loja
                        </button>

                        <button 
                            onClick={toggleMenu}
                            type="button" 
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden"
                            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                        >
                            {isMenuOpen ? (
                                <FaTimes className="w-5 h-5" />
                            ) : (
                                <HiMenuAlt3 className="w-5 h-5" />
                            )}
                        </button>
                    </div>

                    {/* Menu de Navegação - Desktop */}
                    <div className="hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col space-y-3 md:flex-row md:space-x-8 md:space-y-0 md:mt-0">
                            {menuItems.map((item) => (
                                <li key={item.id} className="w-full md:w-auto">
                                    <a
                                        href={`#${item.id}`}
                                        className={`
                                            block py-2 px-3 md:p-0 cursor-pointer
                                            ${currentSection === item.name
                                                ? 'text-[#72ffff] font-medium'
                                                : 'text-gray-900 dark:text-white hover:text-[#72ffff] transition-colors'
                                            }
                                        `}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleMenuClick(item.name);
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Menu Mobile - Só aparece quando aberto */}
                    {isMenuOpen && (
                        <div className="fixed inset-0 mt-[70px] bg-white dark:bg-gray-900 z-40 h-[calc(100vh-70px)] overflow-y-auto py-4 w-full md:hidden">
                            <ul className="flex flex-col space-y-3">
                                {menuItems.map((item) => (
                                    <li key={item.id} className="w-full">
                                        <a
                                            href={`#${item.id}`}
                                            className={`
                                                block py-3 px-6 rounded-md transition-all cursor-pointer
                                                ${currentSection === item.name
                                                    ? 'text-white bg-gray-800 font-medium'
                                                    : 'text-gray-900 dark:text-white hover:bg-gray-800 hover:text-white'
                                                }
                                            `}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleMenuClick(item.name);
                                            }}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default NavBar;