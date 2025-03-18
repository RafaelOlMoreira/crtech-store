import React from 'react';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function ContactSection() {
    return (
        <div className='bg-gradient-to-l from-[#1e2939] to-[#111827] min-h-screen flex justify-center items-center'>
            <section className="w-full max-w-7xl mx-auto py-16 px-4">
                <h2 className="text-6xl font-[Poppins] text-center text-white mb-12">Contato</h2>
                <div className='grid grid-cols-3 gap-8'>
                    <div className='flex justify-start items-center'>
                        <form className="w-full max-w-md bg-gray-800 shadow-lg shadow-gray-900 rounded-lg p-8">
                            <h6 className='text-white font-[poppins] flex justify-center items-center pb-5'>Envia uma mensagem para nós!</h6>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_nome" id="floating_nome" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_nome" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome Completo</label>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="repeat_text" id="floating_repeat_text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_repeat_text" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mensagem</label>
                            </div>

                            <button type="submit" className="text-white bg-[#0096ff] hover:bg-[#0096ff] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#0096ff] dark:hover:bg-[#0096ff]">
                                Enviar
                            </button>
                        </form>
                    </div>

                    <div className="flex flex-col gap-3 text-justify justify-start items-center text-white w-full max-w-md bg-gray-800 shadow-lg shadow-gray-900 rounded-lg p-6">
                        <h3 className="text-xl font-semibold">🏪 Nossa Localização 📍</h3>
                        <p>Atuamos exclusivamente como loja virtual, oferecendo comodidade e praticidade para você realizar suas compras de onde estiver! 💻📦</p>
                        <p>Não possuímos loja física, mas garantimos um atendimento ágil e eficiente pelo nosso site e canais de comunicação. Trabalhamos para proporcionar a melhor experiência de compra online, com segurança, qualidade e entrega garantida. 🚀✨</p>
                        <p>Em caso de dúvidas, entre em contato conosco! Estamos sempre prontos para atender você. 😊</p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <div className='text-white w-full max-w-md bg-gray-800 shadow-lg shadow-gray-900 rounded-lg p-8'>
                            <h3 className="text-xl font-semibold flex items-center justify-center pb-4">📌 Fale Conosco</h3>
                            <p className='flex items-center gap-4'>📞 Telefone: (31) 99247-9530</p>
                            <p>📧 E-mail: tech.cr.assistencia@gmail.com</p>
                            <p className='flex h-auto items-center'>📱 Redes Sociais:
                                <a href="https://api.whatsapp.com/send?phone=5531992479530" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-500 px-1 py-1 rounded-lg hover:bg-green-800 transition ml-1" >
                                    <FaWhatsapp size={24} />
                                </a>
                                <a href="https://www.instagram.com/cr.tech_bh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-500 px-1 py-1 rounded-lg hover:bg-pink-800 transition" >
                                    <FaInstagram size={24} />
                                </a>
                            </p>
                            <p>🕒 Atendimento: 24 horas, todos os dias</p>
                        </div>
                    </div>

                </div>
            </section >
        </div >
    );
}

export default ContactSection;
