import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { HiOutlineMinus } from "react-icons/hi2";
import { IoIosAdd } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";

function HeaderDesktop() {

  const [carrinhoMenuAberto, setCarrinhoMenuAberto] = useState(false);

  return (
    <header className='fixed w-full bg-white'>
      <div className='flex items-center justify-evenly border-b border-[#94A3B8] py-6'>

        <a href="#">
          <img src="/CR Tech Black.png" className='h-5 object-cover' />
        </a>

        <div className='flex space-x-2'>
          <input type="search" placeholder='Buscar produtos, marcas...' className='p-2 border border-gray-300 rounded-lg w-lg' />
          <FiSearch className='size-10 text-white bg-[#00B5FF] p-2 rounded-lg' />
        </div>

        <div className='flex space-x-5'>
          <div className='flex items-center space-x-2 p-2.5'>
            <span className=''>Olá, <span className='text-[#00B5FF]'>Usuário!</span></span>
          </div>
          <Link to="/login">
            <div className='flex items-center space-x-2 p-2.5 rounded-lg hover:bg-gray-200'>
              <FaRegUser className='size-6' />
              <span className=''>Minha Conta</span>
            </div>
          </Link>
          <div className='flex items-center space-x-2 p-2.5 rounded-lg hover:bg-gray-200 hover:cursor-pointer' onClick={() => setCarrinhoMenuAberto(!carrinhoMenuAberto)}>
            <span className='absolute bg-[#00B5FF] px-1.5 -mt-10 ml-22 rounded-4xl font-bold text-[14px] text-white'>
              3
            </span>
            <RiShoppingCartLine className='size-6' />
            <span className=''>Carrinho</span>
          </div>
        </div>
      </div>

      <div className='p-3 bg-gray-100'>
        <ul className='flex justify-center gap-8'>
          <a href="#inicio">
            <li className='hover:text-[#00B5FF] rounded-lg'>Início</li>
          </a>
          <a href="#categorias">
            <li className='hover:text-[#00B5FF] rounded-lg'>Categorias</li>
          </a>
          <a href="#ofertas">
            <li className='hover:text-[#00B5FF] rounded-lg'>Ofertas</li>
          </a>
          <a href="#lançamentos">
            <li className='hover:text-[#00B5FF] rounded-lg'>Lançamentos</li>
          </a>
          <a href="#contato">
            <li className='hover:text-[#00B5FF] rounded-lg'>Contato</li>
          </a>
        </ul>
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

    </header>
  )
}

export default HeaderDesktop
