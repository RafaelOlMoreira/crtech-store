import React from 'react'
import { MdMailOutline } from "react-icons/md";

function EmailNews() {
    return (
        <section className='bg-gray-800 py-10 px-8 text-center space-y-4'>
            <div className='text-center text-white flex flex-col items-center space-y-1.5'>
                <MdMailOutline className='text-[#00B5FF] size-14' />
                <h1 className='text-2xl font-bold'>Fique Por Dentro Das Novidades</h1>
                <span className='text-[#94A3B8]'>Receba orfetas exclusivas, lançamentos e dicas diretamente no seu e-mail</span>
            </div>
            <div className='space-y-2 pt-4'>
                <input type="email" placeholder='Digite seu melhor e-mail' className='bg-white w-full p-4 rounded-lg' />
                <button className='bg-[#00B5FF] w-full p-3.5 rounded-lg text-white text-lg'>
                    Inscreva-se
                </button>
            </div>
            <span className='text-[#94A3B8] text-sm'>Ao se inscrever, você concorda com nossa Política de Privacidade</span>
        </section>
    )
}

export default EmailNews
