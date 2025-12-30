import React from 'react'

function Footer() {
    return (
        // Div geral Footer
        <footer className='border-t-2 border-gray-500 font-montserrat'>
            {/* Componente central */}
            <div className='py-5 flex items-center justify-center'>
                <span className='text-gray-500 text-[14px]'>Copyright &copy; Todos os direitos reservados</span>
            </div>
        </footer>
    )
}

export default Footer
