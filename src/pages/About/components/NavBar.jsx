import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdHeight } from 'react-icons/md';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('início');
    const isScrolling = useRef(false);

    const menuItems = [
        { name: "Início", id: "início" },
        { name: "Produtos", id: "produtos" },
        { name: "Serviços", id: "serviços" },
        { name: "Sobre Nós", id: "sobre-nós" },
        { name: "Contato", id: "contato" }
    ];

    // Detecta a seção visível durante o scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isScrolling.current) return;

            const scrollPosition = window.scrollY + 100;
            
            menuItems.forEach(item => {
                const section = document.getElementById(item.id);
                if (!section) return;
                
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(item.id);
                }
            });
        };

        const debounceScroll = () => {
            let timeout;
            return () => {
                clearTimeout(timeout);
                timeout = setTimeout(handleScroll, 50);
            };
        };

        window.addEventListener('scroll', debounceScroll());
        handleScroll(); // Verifica a seção inicial
        
        return () => window.removeEventListener('scroll', debounceScroll());
    }, [menuItems]);

    // Navega até a seção e atualiza o estado
    const scrollToSection = (sectionId) => {
        isScrolling.current = true;
        setActiveSection(sectionId);
        setIsMenuOpen(false);
        
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }

        setTimeout(() => {
            isScrolling.current = false;
        }, 1000);
    };

    return (
        <>
            {/* Overlay escuro quando menu está aberto */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            <nav className="bg-white dark:bg-gray-900 h-[70px] w-full z-50 fixed top-0 left-0 shadow-md">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo */}
                    <div 
                        className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
                        onClick={() => scrollToSection('início')}
                    >
                        <img src="/logo.svg" className="h-8" alt="CR Tech Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            CR Tech
                        </span>
                    </div>

                    {/* Botões */}
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button 
                            type="button" 
                            className="text-white bg-[#0096ff] hover:bg-[#0072C6] font-medium rounded-lg text-sm px-4 py-2 text-center transition duration-300"
                        >
                            Acessar a Loja
                        </button>

                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
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

                    {/* Menu Desktop */}
                    <div className="hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col space-y-3 md:flex-row md:space-x-8 md:space-y-0 md:mt-0">
                            {menuItems.map((item) => (
                                <li key={item.id} className="relative">
                                    <div
                                        className={`
                                            block py-2 px-3 md:p-0 cursor-pointer transition-colors
                                            ${activeSection === item.id
                                                ? 'text-[#72ffff] font-medium'
                                                : 'text-gray-900 dark:text-white hover:text-[#72ffff]'
                                            }
                                        `}
                                        onClick={() => scrollToSection(item.id)}
                                    >
                                        {item.name}
                                        {activeSection === item.id && (
                                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#72ffff]"/>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Menu Mobile */}
                    {isMenuOpen && (
                        <div className="fixed inset-0 mt-[70px] bg-white dark:bg-gray-900 z-40 h-[calc(100vh-70px)] overflow-y-auto py-4 w-full md:hidden">
                            <ul className="flex flex-col text-center">
                                {menuItems.map((item) => (
                                    <li key={item.id} className="w-full">
                                        <div
                                            className={`
                                                block py-3 px-6 rounded-md transition-all cursor-pointer
                                                ${activeSection === item.id
                                                    ? 'text-white bg-gray-800 font-medium'
                                                    : 'text-gray-900 dark:text-white hover:bg-gray-800 hover:text-white'
                                                }
                                            `}
                                            onClick={() => scrollToSection(item.id)}
                                        >
                                            {item.name}
                                        </div>
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