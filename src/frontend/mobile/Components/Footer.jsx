import React from 'react'
import Logo from '/CR Tech White.png'

function Footer() {
  return (
    <footer className='bg-gray-800 py-10 px-4'>
      <div className='text-[#94A3B8] space-y-3'>
        <img src={Logo} className='h-8 object-cover' />
        <span className='text-md'>
          A melhor loja de acessorios do Brasil. Produtos originais, entrega rápida e atendimento excepcional.
        </span>
      </div>
    </footer>
  )
}

export default Footer
