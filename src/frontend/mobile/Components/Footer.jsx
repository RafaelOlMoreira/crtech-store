import React from 'react'
import Logo from '/CR Tech White.png'

import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <footer className='bg-gray-800 py-10 px-4'>
      <div className='text-[#94A3B8] space-y-3'>
        <img src={Logo} className='h-8 object-cover' />
        <span className='text-md'>
          A melhor loja de acessorios do Brasil. Produtos originais, entrega rápida e atendimento excepcional.
        </span>

        <div className='flex space-x-4 text-white py-4'>
          <RiInstagramFill className='size-10  bg-gray-700/60 hover:bg-[#00B5FF]/60 p-2 rounded-lg' />
          <IoLogoWhatsapp className='size-10  bg-gray-700/60 hover:bg-[#00B5FF]/60 p-2 rounded-lg' />
        </div>

        <div className='border-b pb-10'>
          <div>
            <h6 className='text-white text-lg font-semibold py-4'>Institucional</h6>
            <ul className='space-y-2'>
              <li className='hover:text-[#00B5FF]'>Sobre Nós</li>
              <li className='hover:text-[#00B5FF]'>Nossas Lojas</li>
              <li className='hover:text-[#00B5FF]'>Trabalhe Conosco</li>
              <li className='hover:text-[#00B5FF]'>Blog</li>
              <li className='hover:text-[#00B5FF]'>Imprensa</li>
            </ul>
          </div>
          <div>
            <h6 className='text-white text-lg font-semibold py-4'>Atendimento</h6>
            <ul className='space-y-2'>
              <li className='hover:text-[#00B5FF]'>Central de Ajuda</li>
              <li className='hover:text-[#00B5FF]'>Política de Troca</li>
              <li className='hover:text-[#00B5FF]'>Garantia</li>
              <li className='hover:text-[#00B5FF]'>Rastreamento</li>
              <li className='hover:text-[#00B5FF]'>FAQ</li>
            </ul>
          </div>
        </div>

        <div className='py-5 space-y-10 text-center'>
          <ul className='flex justify-between'>
            <li className='hover:text-[#00B5FF]'>Termos de Uso</li>
            <span>•</span>
            <li className='hover:text-[#00B5FF]'>Política de Privacidade</li>
            <span>•</span>
            <li className='hover:text-[#00B5FF]'>Cookies</li>
          </ul>
          <span className=''>&copy; 2026 CR Tech. Todos os direitos reservados.</span>
        </div>


      </div>
    </footer>
  )
}

export default Footer
