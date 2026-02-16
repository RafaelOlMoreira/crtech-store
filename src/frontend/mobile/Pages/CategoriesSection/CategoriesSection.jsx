import React from 'react'
import { FiSmartphone } from "react-icons/fi";
import { FaShieldAlt } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FiBatteryCharging } from "react-icons/fi";
import { TbDeviceMobileSearch } from "react-icons/tb";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

function Categories() {
    return (
        <section id='categorias' className='scroll-mt-32 bg-gray-300/20 py-10 px-8'>
            {/* Info Section */}
            <div className='flex-col text-center space-y-2.5'>
                <h1 className='text-3xl font-bold'>
                    Categorias
                </h1>
                <span className='text-md text-[#94A3B8]'>
                    Encontre os produtos perfeitos para você.
                </span>
            </div>
            {/* Grid de Categorias */}
            <div className='grid grid-cols-2 md:grid-cols-none md:flex md:justify-center gap-4 py-10'>

                {/* Categoria de Capinhas */}
                <a href='#' className='bg-white md:w-44 border border-gray-500/30 rounded-lg p-5 shadow'>
                    <div className='flex flex-col justify-center items-center space-y-4'>
                        <FiSmartphone className='size-12 bg-[#00B5FF]/10 text-[#00B5FF] p-3 rounded-full' />
                        <div className='text-center text-md -space-y-1'>
                            <h6 className='font-semibold'>Capas</h6>
                            <span className='text-[12px] text-[#94A3B8]'>56 Produtos</span>
                        </div>
                    </div>
                </a>

                {/* Categoria de Películas */}
                <a href='#' className='bg-white md:w-44 border border-gray-500/30 rounded-lg p-5 shadow'>
                    <div className='flex flex-col justify-center items-center space-y-4'>
                        <FaShieldAlt className='size-12 bg-[#00B5FF]/10 text-[#00B5FF] p-3 rounded-full' />
                        <div className='text-center text-md -space-y-1'>
                            <h6 className='font-semibold'>Películas</h6>
                            <span className='text-[12px] text-[#94A3B8]'>112 Produtos</span>
                        </div>
                    </div>
                </a>

                {/* Categoria de Fones de Ouvido */}
                <a href='#' className='bg-white md:w-44 border border-gray-500/30 rounded-lg p-5 shadow'>
                    <div className='flex flex-col justify-center items-center space-y-4'>
                        <FaHeadphones className='size-12 bg-[#00B5FF]/10 text-[#00B5FF] p-3 rounded-full' />
                        <div className='text-center text-md -space-y-1'>
                            <h6 className='font-semibold'>Fones de Ouvido</h6>
                            <span className='text-[12px] text-[#94A3B8]'>31 Produtos</span>
                        </div>
                    </div>
                </a>

                {/* Categoria de Carregadores */}
                <a href='#' className='bg-white md:w-44 border border-gray-500/30 rounded-lg p-5 shadow'>
                    <div className='flex flex-col justify-center items-center space-y-4'>
                        <FiBatteryCharging className='size-12 bg-[#00B5FF]/10 text-[#00B5FF] p-3 rounded-full' />
                        <div className='text-center text-md -space-y-1'>
                            <h6 className='font-semibold'>Carregadores</h6>
                            <span className='text-[12px] text-[#94A3B8]'>19 Produtos</span>
                        </div>
                    </div>
                </a>

                {/* Categoria de Acessorios */}
                <a href='#' className='bg-white md:w-44 border border-gray-500/30 rounded-lg p-5 shadow'>
                    <div className='flex flex-col justify-center items-center space-y-4'>
                        <TbDeviceMobileSearch className='size-12 bg-[#00B5FF]/10 text-[#00B5FF] p-3 rounded-full' />
                        <div className='text-center text-md -space-y-1'>
                            <h6 className='font-semibold'>Acessorios</h6>
                            <span className='text-[12px] text-[#94A3B8]'>24 Produtos</span>
                        </div>
                    </div>
                </a>

                {/* Categoria de Serviços */}
                <a href='#' className='bg-white md:w-44 border border-gray-500/30 rounded-lg p-5 shadow'>
                    <div className='flex flex-col justify-center items-center space-y-4'>
                        <MdOutlineMiscellaneousServices className='size-12 bg-[#00B5FF]/10 text-[#00B5FF] p-3 rounded-full' />
                        <div className='text-center text-md -space-y-1'>
                            <h6 className='font-semibold'>Serviços</h6>
                            <span className='text-[12px] text-[#94A3B8]'>2 Serviços</span>
                        </div>
                    </div>
                </a>

            </div>
        </section>
    )
}

export default Categories
