import React from 'react'
import { Link } from 'react-router-dom';

import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";

function HeaderDesktop() {
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
          <Link to="/login">
            <div className='flex items-center space-x-2 p-2.5 rounded-lg hover:bg-gray-200'>
              <FaRegUser className='size-6' />
              <span className=''>Minha Conta</span>
            </div>
          </Link>
          <div className='flex items-center space-x-2 p-2.5 rounded-lg hover:bg-gray-200'>
            <FaRegHeart className='size-6' />
            <span className=''>Favoritos</span>
          </div>
          <Link to="/checkout">
            <div className='flex items-center space-x-2 p-2.5 rounded-lg hover:bg-gray-200'>
              <span className='absolute bg-[#00B5FF] px-1.5 -mt-10 ml-22 rounded-4xl font-bold text-[14px] text-white'>
                3
              </span>
              <RiShoppingCartLine className='size-6' />
              <span className=''>Carrinho</span>
            </div>
          </Link>
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
    </header>
  )
}

export default HeaderDesktop
