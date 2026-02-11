import React, { useState, useRef, useEffect } from 'react';
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

function Login() {

    // 2) estado para controlar a tab ativa
    const [activeTab, setActiveTab] = useState('login'); // 'login' | 'signup'

    // 3) refs para foco automático quando trocar de tab (opcional, melhora UX)
    const loginEmailRef = useRef(null);
    const signupNameRef = useRef(null);

    useEffect(() => {
        if (activeTab === 'login') {
            loginEmailRef.current?.focus();
        } else {
            signupNameRef.current?.focus();
        }
    }, [activeTab]);

    return (
        <div className='flex h-screen items-center justify-center'>

            <div className='border border-[#94A3B8] p-5 rounded-lg shadow-lg'>
                <div className='flex items-center mb-5 space-x-2'>
                    <RiAccountCircleFill className='text-[#00B5FF] size-8' />
                    <h6 className='text-xl font-semibold'>Conta</h6>
                </div>

                <div className='bg-[#94A3B8]/20 rounded-full p-1 text-nowrap'>
                    <button onClick={() => setActiveTab('login')} className={`p-3.5 px-12 rounded-full font-semibold transition ${activeTab === 'login' ? 'bg-[#00B5FF] text-white' : 'bg-transparent text-[#94A3B8]'}`}>Entrar</button>
                    <button onClick={() => setActiveTab('signup')} className={`p-3.5 px-8 rounded-full font-semibold transition ${activeTab === 'signup' ? 'bg-[#00B5FF] text-white' : 'bg-transparent text-[#94A3B8]'}`}>Criar Conta</button>
                </div>

                {/* Form de fazer Login */}
                {activeTab === 'login' && (
                    <form className='mt-6 mb-2 space-y-5'>

                        <div className='relative'>
                            <div className='flex items-center'>
                                <CiMail className='absolute size-6 ml-2 text-gray-700' />
                                <input ref={loginEmailRef} type="email" placeholder='E-mail' name='email' id='email' className='w-full p-3 pl-10 border border-[#94A3B8] focus:outline-none focus:border-[#00B5FF] rounded-lg' />
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='flex items-center'>
                                <CiLock className='absolute size-6 ml-2 text-gray-700' />
                                <IoEyeOutline className='absolute ml-64 size-5 text-gray-700' />
                                <input type="password" placeholder='Senha' name='senha' id='senha' className='w-full px-14 p-3 pl-10 border border-[#94A3B8] focus:outline-none focus:border-[#00B5FF] rounded-lg' />
                            </div>
                        </div>
                        <div className='flex flex-col space-y-5'>
                            <span className='text-sm text-[#00B5FF]' >Esqueceu a senha?</span>
                            <button className='p-2 w-full bg-[#00B5FF] text-white rounded-lg text-lg font-semibold'>Entrar na Conta</button>
                        </div>

                    </form>
                )}

                {/* Form de Criar conta */}
                {activeTab === 'signup' && (
                    <form className='mt-6 mb-2 space-y-5'>

                        <div className='relative'>
                            <div className='flex items-center'>
                                <CiUser className='absolute size-6 ml-2 text-gray-700' />
                                <input ref={signupNameRef} type="text" placeholder='Nome e Sobrenome' name='nome' id='nome' className='w-full p-3 pl-10 border border-[#94A3B8] focus:outline-none focus:border-[#00B5FF] rounded-lg' />
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='flex items-center'>
                                <CiMail className='absolute size-6 ml-2 text-gray-700' />
                                <input type="email" placeholder='E-mail' name='email' id='email' className='w-full p-3 pl-10 border border-[#94A3B8] focus:outline-none focus:border-[#00B5FF] rounded-lg' />
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='flex items-center'>
                                <CiLock className='absolute size-6 ml-2 text-gray-700' />
                                <IoEyeOutline className='absolute ml-64 size-5 text-gray-700' />
                                <input type="password" placeholder='Senha' name='senha' id='senha' className='w-full px-14 p-3 pl-10 border border-[#94A3B8] focus:outline-none focus:border-[#00B5FF] rounded-lg' />
                            </div>
                        </div>

                        <button className='p-2 w-full bg-[#00B5FF] text-white rounded-lg text-lg font-semibold'>Criar Conta</button>

                    </form>
                )}

            </div>

        </div >
    )
}

export default Login
