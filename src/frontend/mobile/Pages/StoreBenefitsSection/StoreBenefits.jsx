import React from 'react'
import { FaTruck } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { GrReturn } from "react-icons/gr";
import { PiHeadsetBold } from "react-icons/pi";

function StoreBenefits() {
    return (
        <section className='bg-white py-10 px-4 md:px-32'>
            <div className='grid grid-cols-2 md:grid-cols-4 space-y-8'>
                {/* Frete grátis */}
                <div className='flex flex-col items-center'>
                    <FaTruck className='text-[#00B5FF] bg-[#00B5FF]/20 p-4 size-16 rounded-full' />
                    <div className='pt-3 text-center'>
                        <h1 className='font-bold'>Frete Grátis</h1>
                        <span className='text-sm text-[#94A3B8]'>Aos fins de semana</span>
                    </div>
                </div>
                {/* Compra Segura */}
                <div className='flex flex-col items-center'>
                    <GoShieldCheck className='text-[#00B5FF] bg-[#00B5FF]/20 p-4 size-16 rounded-full' />
                    <div className='pt-3 text-center'>
                        <h1 className='font-bold'>Compra Segura</h1>
                        <span className='text-sm text-[#94A3B8]'>Proteção total</span>
                    </div>
                </div>
                {/* Troca Grátis */}
                <div className='flex flex-col items-center'>
                    <GrReturn className='text-[#00B5FF] bg-[#00B5FF]/20 p-4 size-16 rounded-full' />
                    <div className='pt-3 text-center'>
                        <h1 className='font-bold'>Troca Grátis</h1>
                        <span className='text-sm text-[#94A3B8]'>Até 30 dias</span>
                    </div>
                </div>
                {/* Suporte */}
                <div className='flex flex-col items-center'>
                    <PiHeadsetBold className='text-[#00B5FF] bg-[#00B5FF]/20 p-4 size-16 rounded-full' />
                    <div className='pt-3 text-center'>
                        <h1 className='font-bold'>Suporte 24/7</h1>
                        <span className='text-sm text-[#94A3B8]'>Sempre disponível</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StoreBenefits
