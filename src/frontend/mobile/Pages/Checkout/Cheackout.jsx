import React, { useState, useRef, useEffect } from 'react';

import { FiShoppingBag } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { LuTruck } from "react-icons/lu";
import { SlCreditCard } from "react-icons/sl";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { GoTag } from "react-icons/go";

import Capa from "/Capa.png";

function Cheackout() {

    const [activeFrete, setActiveFrete] = useState('frete');
    const [activePagamento, setActivePagamento] = useState('cartao');

    const optionClasses = (isActive) =>
        `w-full border flex items-center p-3 rounded-lg transition-colors duration-150 ${isActive
            ? 'bg-[#00B5FF]/10 border-[#00B5FF] ' // ativo
            : 'bg-white border-[#94A3B8]' // inativo
        }`;

    const iconClasses = (isActive) =>
        `text-xl ${isActive
            ? 'text-[#00B5FF]'
            : 'text-[#94A3B8]'}`;

    const tituloClasses = (isActive) =>
        `text-md font-semibold ${isActive
            ? 'text-[#0F172A]'
            : 'text-[#0F172A]'
        }`;

    const precoClasses = (isActive) =>
        `${isActive
            ? 'text-[#00B5FF]'
            : 'text-black'}`;

    return (
        <div className='flex flex-col items-center pb-24 bg-[#94A3B8]/20'>
            <div className='p-5 space-y-4'>
                <div className='flex items-center mr-auto space-x-2.5'>
                    <FiShoppingBag className='size-10 p-2 bg-[#00B5FF] text-white rounded-xl' />
                    <h1 className='font-bold text-xl'>Checkout</h1>
                </div>

                {/* Endereço de Entrega */}
                <div className='p-5 bg-white border border-[#94A3B8] rounded-lg w-full'>
                    <div className='flex items-center mb-5 space-x-2'>
                        <IoLocationOutline className='size-6 text-[#00B5FF]' />
                        <h6 className='text-lg font-semibold'>Endereço de Entrega</h6>
                    </div>

                    <form>
                        <div className='space-y-4'>
                            <input type="text" placeholder='CEP' className='w-full p-3 border border-[#94A3B8] focus:outline-none focus:border-[#00B5FF] rounded-lg' />
                            <input type="text" placeholder='Rua / Avenida' className='w-full p-3 border border-[#94A3B8] focus:outline-none focus:border-[#00B5FF] rounded-lg' />
                            <div className='flex space-x-2'>
                                <input type="number" placeholder='Número' className='w-2/4 p-3 border border-[#94A3B8] focus:outline-none focus:border-[#00B5FF] rounded-lg' />
                                <input type="text" placeholder='Complemento' className='w-full p-3 border border-[#94A3B8] focus:outline-none focus:border-[#00B5FF] rounded-lg' />
                            </div>
                            <input type="text" placeholder='Bairro' className='w-full p-3 border border-[#94A3B8] focus:outline-none focus:border-[#00B5FF] rounded-lg' />
                            <div className='flex space-x-2'>
                                <input type="text" placeholder='Cidade' className='w-full p-3 border border-[#94A3B8] focus:outline-none focus:border-[#00B5FF] rounded-lg' />
                                <input type="text" placeholder='UF' className='w-2/4 p-3 border border-[#94A3B8] focus:outline-none focus:border-[#00B5FF] rounded-lg' />
                            </div>
                        </div>
                    </form>
                </div>

                {/* Frete */}
                <div className='p-5 bg-white border border-[#94A3B8] rounded-lg w-full'>
                    <div className='flex items-center mb-5 space-x-2'>
                        <LuTruck className='size-6 text-[#00B5FF]' />
                        <h6 className='text-lg font-semibold'>Frete</h6>
                    </div>

                    <div className='space-y-2'>

                        {/* Frete Padrão */}
                        <button type='button'
                            onClick={() => setActiveFrete('frete')}
                            aria-pressed={activeFrete === 'frete'}
                            className={`${optionClasses(activeFrete === 'frete')} space-x-5`}
                        >
                            <LuTruck className={iconClasses(activeFrete === 'frete')} />
                            <div className='text-left'>
                                <h6 className='text-md font-semibold text-black'>Padrão</h6>
                                <span className='text-sm text-[#94A3B8]'>5-8 dias úteis</span>
                            </div>
                            <h6 className={`${precoClasses(activeFrete === 'frete')} ml-auto font-semibold`} >R$ 9,90</h6>
                        </button>

                        {/* Frete Grátis */}
                        <button type='button'
                            onClick={() => setActiveFrete('gratis')}
                            aria-pressed={activeFrete === 'gratis'}
                            className={`${optionClasses(activeFrete === 'gratis')} space-x-5`}
                        >
                            <LuTruck className={iconClasses(activeFrete === 'gratis')} />
                            <div className='text-left'>
                                <h6 className='text-md font-semibold text-black'>Grátis</h6>
                                <span className='text-sm text-[#94A3B8]'>Sabádo / Domingo</span>
                            </div>
                            <h6 className={`${precoClasses(activeFrete === 'gratis')} ml-auto font-semibold`} >GRÁTIS</h6>
                        </button>

                    </div>
                </div>

                {/* Pagamento */}
                <div className='p-5 bg-white border border-[#94A3B8] rounded-lg w-full'>
                    <div className='flex items-center mb-5 space-x-2'>
                        <SlCreditCard className='size-6 text-[#00B5FF]' />
                        <h6 className='text-lg font-semibold'>Pagamento</h6>
                    </div>

                    <div className='space-y-2 pb-5 border-b border-[#94A3B8]'>
                        {/* Cartão de Credito */}
                        <button type='button' onClick={() => setActivePagamento('cartao')} className={`w-full border flex items-center p-3 rounded-lg transition-colors duration-150 space-x-2 ${activePagamento === 'cartao' ? 'bg-[#00B5FF]/20 border-[#00B5FF]' : 'bg-white border-[#94A3B8]'}`}
                        >
                            <SlCreditCard onClick={() => setActivePagamento('cartao')} className={`${activePagamento === 'cartao' ? ' text-[#00B5FF]' : 'text-[#94A3B8]'}`} />
                            <h6 className='text-md font-semibold text-black'>Cartão de Crédito</h6>
                        </button>

                        {/* Pix */}
                        <button type='button' onClick={() => setActivePagamento('pix')} className={`w-full border flex items-center p-3 rounded-lg transition-colors duration-150 space-x-2 ${activePagamento === 'pix' ? 'bg-[#00B5FF]/20 border-[#00B5FF]' : 'bg-white border-[#94A3B8]'}`}
                        >
                            <MdOutlineQrCodeScanner onClick={() => setActivePagamento('pix')} className={`${activePagamento === 'pix' ? ' text-[#00B5FF]' : 'text-[#94A3B8]'}`} />
                            <h6 className='text-md font-semibold text-black'>Pix</h6>
                        </button>
                    </div>

                    {activePagamento === 'cartao' && (
                        <form className='pt-5 space-y-2'>
                            <input type="text" placeholder='Número do Cartão' className='w-full p-3 border border-[#94A3B8] focus:outline-none focus:border-[#00B5FF] rounded-lg' />
                            <input type="text" placeholder='Nome no Cartão' className='w-full p-3 border border-[#94A3B8] focus:outline-none focus:border-[#00B5FF] rounded-lg' />
                            <div className='flex space-x-2'>
                                <input type="text" placeholder='MM/AA' className='w-full p-3 border border-[#94A3B8] focus:outline-none focus:border-[#00B5FF] rounded-lg' />
                                <input type="number" placeholder='CVV' className='w-2/4 p-3 border border-[#94A3B8] focus:outline-none focus:border-[#00B5FF] rounded-lg' />
                            </div>
                        </form>
                    )}

                    {activePagamento === 'pix' && (
                        <form className='pt-5 space-y-2'>
                            <div className='flex flex-col items-center justify-center bg-[#94A3B8]/25 rounded-lg p-4 space-y-2'>
                                <MdOutlineQrCodeScanner className='size-12 text-[#94A3B8]' />
                                <span className='text-[12px] text-[#94A3B8]'>O QR Code será gerado após a finalização</span>
                            </div>
                        </form>
                    )}
                </div>

                {/* Cupom de Desconto */}
                <div className='p-5 bg-white border border-[#94A3B8] rounded-lg w-full'>
                    <div className='flex items-center mb-5 space-x-2'>
                        <GoTag className='size-6 text-[#00B5FF]' />
                        <h6 className='font-semibold text-lg'>Cupom de Desconto</h6>
                    </div>
                    <div className='flex space-x-2'>
                        <input type="text" placeholder='DIGITE O CÓDIGO' className='w-3/4 uppercase p-3 border border-[#94A3B8] focus:outline-none focus:border-[#00B5FF] rounded-lg' />
                        <button className='bg-[#00B5FF] p-3 rounded-lg text-white'>Aplicar</button>
                    </div>
                </div>

                {/* Resumo do Pedido */}
                <div className='bg-white border border-[#94A3B8] rounded-lg w-full'>
                    <div className='p-5 my-4'>
                        <div className='flex items-center mb-5 space-x-2'>
                            <FiShoppingBag className='size-6 text-[#00B5FF]' />
                            <h6 className='font-semibold text-lg'>Resumo do Pedido</h6>
                        </div>

                        {/* Grid dos Produtos */}
                        <div className='flex flex-col space-y-3'>
                            {/* Item 1 */}
                            <div className='flex items-center justify-between'>
                                <img src={Capa} className='h-15 bg-center bg-cover bg-no-repeat rounded-lg' />
                                <div className='flex flex-col ml-4'>
                                    <span className='text-md font-semibold'>Capa 13 Pro Max</span>
                                    <div className='flex items-center space-x-2 text-gray-600 text-[10px]'>
                                        <span>Vermelha</span>
                                        <span>·</span>
                                        <span>Qtd: 1</span>
                                    </div>
                                </div>
                                <span className='ml-auto font-semibold'>R$ 20,00</span>
                            </div>

                            {/* Item 2 */}
                            <div className='flex items-center justify-between'>
                                <img src={Capa} className='h-15 bg-center bg-cover bg-no-repeat rounded-lg' />
                                <div className='flex flex-col ml-4'>
                                    <span className='text-md font-semibold'>Capa 13 Pro Max</span>
                                    <div className='flex items-center space-x-2 text-gray-600 text-[10px]'>
                                        <span>Vermelha</span>
                                        <span>·</span>
                                        <span>Qtd: 1</span>
                                    </div>
                                </div>
                                <span className='ml-auto font-semibold'>R$ 20,00</span>
                            </div>

                            {/* Item 3 */}
                            <div className='flex items-center justify-between'>
                                <img src={Capa} className='h-15 bg-center bg-cover bg-no-repeat rounded-lg' />
                                <div className='flex flex-col ml-4'>
                                    <span className='text-md font-semibold'>Capa 13 Pro Max</span>
                                    <div className='flex items-center space-x-2 text-gray-600 text-[10px]'>
                                        <span>Vermelha</span>
                                        <span>·</span>
                                        <span>Qtd: 1</span>
                                    </div>
                                </div>
                                <span className='ml-auto font-semibold'>R$ 20,00</span>
                            </div>
                        </div>
                    </div>

                    {/* Subtotal */}
                    <div className='bg-[#94A3B8]/25 w-full p-5 py-4 rounded-b-lg'>
                        <div className='pb-5 border-b border-[#94A3B8]/50'>
                            <div className='flex'>
                                <span className='mr-auto text-gray-600'>Subtotal</span>
                                <span className='ml-auto'>R$ 20,00</span>
                            </div>
                            <div className='flex'>
                                <span className='mr-auto text-gray-600'>Frete</span>
                                <span className='ml-auto'>R$ 9,90</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex mt-4'>
                                <span className='mr-auto font-semibold'>Total</span>
                                <span className='ml-auto font-bold text-[#00B5FF] text-xl'>R$ 20,00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <footer className='fixed bottom-0 flex items-center justify-center bg-white w-full py-4 border-t border-[#94A3B8]'>
                <button className='bg-[#00B5FF] w-3/4 p-3 rounded-lg text-white font-semibold'>Finalizar Pedido</button>
            </footer>

        </div>
    )
}

export default Cheackout
