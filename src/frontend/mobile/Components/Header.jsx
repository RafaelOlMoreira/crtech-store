import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { RiShoppingCartLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { HiOutlineMinus } from "react-icons/hi2";
import { IoIosAdd } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";

function Header() {

    const [searchMenuAberto, setSearchMenuAberto] = useState(false);
    const [carrinhoMenuAberto, setCarrinhoMenuAberto] = useState(false);
    const [navMenuAberto, setNavMenuAberto] = useState(false);

    return (
        <div>
            <header className='fixed z-2000 flex items-center bg-white px-4 py-6 w-full'>
                <img src="/CR Tech Black.png" className='h-5 object-cover' />

                <div className='w-full'>
                    <ul className='flex items-center justify-end space-x-6'>
                        <li className='p-2 rounded-lg hover:bg-gray-200' onClick={() => setSearchMenuAberto(!searchMenuAberto)}>
                            {/* Icon Pesquisa */}
                            <FiSearch className='size-6' />
                        </li>
                        <li className='p-2 rounded-lg hover:bg-gray-200' onClick={() => setCarrinhoMenuAberto(!carrinhoMenuAberto)}>
                            {/* Icon Carrinho */}
                            <span className='absolute bg-[#00B5FF] px-1.5 -m-4 ml-4 rounded-4xl font-bold text-[14px] text-white'>
                                {/* Quantidade no Carrinho */}
                                3
                            </span>
                            <RiShoppingCartLine className='size-6' />
                        </li>
                        {/* Icon Menu */}
                        <li className='p-2 rounded-lg hover:bg-gray-200' onClick={() => setNavMenuAberto(!navMenuAberto)}>
                            <HiOutlineMenu className='size-7' />
                        </li>
                    </ul>
                </div>
            </header>

            {/* Menu Pesquisa */}
            <div className={`fixed inset-x-0 top-0 flex items-center pt-24 p-3 px-6 bg-white ${searchMenuAberto ? "opacity-100 pointer-events-auto fixed" : "opacity-0 pointer-events-none"}`}>
                <input type="search" name="" id="" placeholder='Buscar produtos, marcas...' className='p-2 border border-gray-300 rounded-lg w-full' />
                <FiSearch className='size-10 text-white bg-[#00B5FF] p-2 rounded-lg' />
            </div>

            {/* Menu carrinho */}
            <div className={`z-3000 fixed ml-auto inset-0 bg-white md:border-l md:border-[#4a556556] h-screen w-full md:w-1/3 ${carrinhoMenuAberto ? "opacity-100 pointer-events-auto fixed" : "opacity-0 pointer-events-none"}`}>
                <div className='flex flex-col h-full'>

                    <div className='flex items-center px-10 h-16 w-full border-b border-[#4a556556]'>
                        <h1 className='font-bold text-xl'>Carrinho de Compras</h1>
                        <IoIosClose className='size-10 ml-auto text-[#94A3B8] hover:cursor-pointer' onClick={() => setCarrinhoMenuAberto(!carrinhoMenuAberto)} />
                    </div>

                    {/* Produtos no Carrinho */}
                    <div className='flex-1 overflow-y-auto px-10 py-4 space-y-5'>

                        {/* Produto do carrinho */}
                        <div className='flex justify-evenly pb-4 border-b border-[#4a556556]'>
                            <img src="/Capa.png" className='h-22 rounded-lg' />
                            <div className='flex mx-5 items-center'>
                                <div className='space-y-2'>
                                    <div className='flex'>
                                        <div className='w-full'>
                                            <p className='text-md font-semibold -my-1'>Capa 13 Pro Max</p>
                                            <span className='text-[#94A3B8] text-sm'>Vermelho</span>
                                        </div>
                                        <div className='w-auto'>
                                            <FaRegTrashAlt className='mr-auto text-[#4a5565a8] hover:text-gray-700 hover:cursor-pointer' />
                                        </div>
                                    </div>
                                    <div className='flex items-center space-x-5 text-md'>
                                        <HiOutlineMinus className='size-6 border border-[#4a556556] rounded-sm hover:bg-gray-200 hover:cursor-pointer' />
                                        <span>1</span>
                                        <IoIosAdd className='size-6 border border-[#4a556556] rounded-sm hover:bg-gray-200 hover:cursor-pointer' />
                                        <h6 className='text-nowrap'>R$ <span>20.00</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Resumo da compra */}
                    <div className='px-10 w-full py-6 border-t border-[#4a556556] flex-none bg-white'>
                        <div className='pb-4 space-y-5 border-b border-[#4a556556]'>
                            <div className='flex justify-between text-md'>
                                <p className='font-semibold'>Subtotal</p>
                                <span className='font-bold'>R$ 20.00</span>
                            </div>
                            <div className='flex justify-between'>
                                <p className='font-semibold'>Frete</p>
                                <span className='font-bold text-[#00b7ff]'>Grátis</span>
                            </div>
                        </div>
                        <div className='flex py-4 justify-between'>
                            <span className='font-semibold'>Total</span>
                            <span className='font-bold text-[#00b7ff]'>R$ 20.00</span>
                        </div>
                        <Link to="/checkout">
                            <button className='block my-4 text-md text-white bg-[#00b7ff] w-full p-2 rounded-md hover:cursor-pointer'>
                                Finalizar Compra
                            </button>
                        </Link>
                        <Link to="/">
                            <button onClick={() => setCarrinhoMenuAberto(!carrinhoMenuAberto)} className='text-md border border-[#4a556556] w-full p-2 rounded-md hover:cursor-pointer'>
                                Continuar Comprando
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Menu de Opções */}
            <div className='bg-white z-3000'>
                <div className={`flex fixed justify-center pt-26 p-3 px-6 space-x-1.5 bg-white w-full h-screen ${navMenuAberto ? "opacity-100 pointer-events-auto fixed" : "opacity-0 pointer-events-none"}`}>
                    <ul className='text-center px-6 w-full space-y-2'>
                        <a href="#inicio" onClick={() => setNavMenuAberto(!navMenuAberto)}>
                            <li className='py-3 hover:bg-gray-300 rounded-lg'>Início</li>
                        </a>
                        <a href="#categorias" onClick={() => setNavMenuAberto(!navMenuAberto)}>
                            <li className='py-3 hover:bg-gray-300 rounded-lg'>Categorias</li>
                        </a>
                        <a href="#ofertas" onClick={() => setNavMenuAberto(!navMenuAberto)}>
                            <li className='py-3 hover:bg-gray-300 rounded-lg'>Ofertas</li>
                        </a>
                        <a href="#lançamentos" onClick={() => setNavMenuAberto(!navMenuAberto)}>
                            <li className='py-3 hover:bg-gray-300 rounded-lg'>Lançamentos</li>
                        </a>
                        <a href="#contato" onClick={() => setNavMenuAberto(!navMenuAberto)}>
                            <li className='py-3 hover:bg-gray-300 rounded-lg'>Contato</li>
                        </a>
                        <Link to="/login">
                            <li className='py-3 hover:bg-gray-300 rounded-lg'>Minha Conta</li>
                        </Link>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Header
