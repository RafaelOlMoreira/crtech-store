import React from 'react'
import Logo from '/CR Tech White.png'

import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <footer id='contato' className='scroll-mt-32 bg-gray-800 py-10 px-4'>
      <div className='text-[#94A3B8] space-y-3'>
        <img src={Logo} className='h-8 object-cover' />
        <span className='text-md'>
          A melhor loja de acessorios do Brasil. Produtos originais, entrega rápida e atendimento excepcional.
        </span>

        <div className='flex space-x-4 text-white py-4'>
          <a href="https://www.instagram.com/cr.tech_bh">
            <RiInstagramFill className='size-10  bg-gray-700/60 hover:bg-[#00B5FF]/60 p-2 rounded-lg' />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5531992479530&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.">
            <IoLogoWhatsapp className='size-10  bg-gray-700/60 hover:bg-[#00B5FF]/60 p-2 rounded-lg' />
          </a>
        </div>

        <div className='border-b pb-10'>
          <div>
            <h6 className='text-white text-lg font-semibold py-4'>Institucional</h6>
            <ul className='space-y-2 text-nowrap'>
              <li className='hover:text-[#00B5FF] w-min'>Sobre Nós</li>
              <li className='hover:text-[#00B5FF] w-min'>Nossas Lojas</li>
              <li className='hover:text-[#00B5FF] w-min'>Trabalhe Conosco</li>
              <li className='hover:text-[#00B5FF] w-min'>Blog</li>
              <li className='hover:text-[#00B5FF] w-min'>Imprensa</li>
            </ul>
          </div>
          <div>
            <h6 className='text-white text-lg font-semibold py-4'>Atendimento</h6>
            <ul className='space-y-2 text-nowrap'>
              <li className='hover:text-[#00B5FF] w-min'>Central de Ajuda</li>
              <li className='hover:text-[#00B5FF] w-min'>Política de Troca</li>
              <li className='hover:text-[#00B5FF] w-min'>Garantia</li>
              <li className='hover:text-[#00B5FF] w-min'>Rastreamento</li>
              <li className='hover:text-[#00B5FF] w-min'>FAQ</li>
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
