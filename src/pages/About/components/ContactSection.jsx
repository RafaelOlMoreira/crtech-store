import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function ContactSection() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:3001/enviar-contato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar mensagem');
            }

            setSuccess(true);
            setFormData({ nome: '', email: '', mensagem: '' });

            // Resetar mensagem de sucesso após 5 segundos
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='bg-gradient-to-b from-[#1e2939] to-[#111827] min-h-screen flex justify-center items-center' id="contato">
            <section className="w-full max-w-7xl mx-auto py-16 px-4">
                <h2 className="text-6xl font-[Poppins] text-center text-white mb-12">Contato</h2>
                <div className='grid lg:grid-cols-3 gap-8 grid-cols-1 justify-items-center'>
                    {/* Formulário */}
                    <div className='w-full max-w-md'>
                        <form onSubmit={handleSubmit} className="w-full bg-gray-800 shadow-lg shadow-gray-900 rounded-lg p-8">
                            <h6 className='text-white font-[poppins] flex justify-center items-center pb-5'>
                                Envie uma mensagem para nós!
                            </h6>

                            {/* Feedback de envio */}
                            {success && (
                                <div className="mb-4 p-3 bg-green-100 text-green-800 rounded text-center">
                                    Mensagem enviada com sucesso!
                                </div>
                            )}
                            {error && (
                                <div className="mb-4 p-3 bg-red-100 text-red-800 rounded text-center">
                                    {error}
                                </div>
                            )}

                            {/* Campo Nome */}
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="nome"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    value={formData.nome}
                                    onChange={handleChange}
                                />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Nome Completo
                                </label>
                            </div>

                            {/* Campo Email */}
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="email"
                                    name="email"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Email
                                </label>
                            </div>

                            {/* Campo Mensagem */}
                            <div className="relative z-0 w-full mb-8 group"> {/* Aumentei o mb-8 para mais espaço */}
                                <textarea
                                    name="mensagem"
                                    rows={3}
                                    maxLength={500}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none overflow-hidden"
                                    placeholder=" "
                                    required
                                    value={formData.mensagem}
                                    onChange={handleChange}
                                    style={{ scrollbarWidth: 'none' }}
                                />
                                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
                                    Mensagem (máx. 500 caracteres)
                                </label>
                                <div className="text-right text-xs text-gray-400 mt-1">
                                    {formData.mensagem.length}/500
                                </div>
                            </div>

                            {/* Botão de Envio */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="text-white bg-[#0096ff] hover:bg-[#0096ff]/80 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center transition-colors flex justify-center items-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Enviando...
                                    </>
                                ) : 'Enviar Mensagem'}
                            </button>
                        </form>
                    </div>

                    {/* Seção Localização */}
                    <div className="flex flex-col gap-3 text-justify text-white w-full max-w-md bg-gray-800 shadow-lg shadow-gray-900 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-center">🏪 Nossa Localização 📍</h3>
                        <p>Atuamos exclusivamente como loja virtual, oferecendo comodidade e praticidade para você realizar suas compras de onde estiver! 💻📦</p>
                        <p>Não possuímos loja física, mas garantimos um atendimento ágil e eficiente pelo nosso site e canais de comunicação. Trabalhamos para proporcionar a melhor experiência de compra online, com segurança, qualidade e entrega garantida. 🚀✨</p>
                        <p>Em caso de dúvidas, entre em contato conosco! Estamos sempre prontos para atender você. 😊</p>
                    </div>

                    {/* Seção Contatos */}
                    <div className='w-full max-w-md'>
                        <div className='text-white w-full bg-gray-800 shadow-lg shadow-gray-900 rounded-lg p-8'>
                            <h3 className="text-xl font-semibold flex items-center justify-center pb-4 gap-2">
                                📌 Fale Conosco
                            </h3>
                            <p className='flex items-center gap-3 mb-3'>
                                <span>📞</span> Telefone: (31) 99247-9530
                            </p>
                            <p className='flex items-center gap-3 mb-3'>
                                <span>📧</span> E-mail: tech.cr.assistencia@gmail.com
                            </p>
                            <div className='flex items-center gap-3 mb-3'>
                                <span>📱</span>
                                <span>Redes Sociais:</span>
                                <a href="https://api.whatsapp.com/send?phone=5531992479530" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors">
                                    <FaWhatsapp size={24} />
                                </a>
                                <a href="https://www.instagram.com/cr.tech_bh" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-colors ml-2">
                                    <FaInstagram size={24} />
                                </a>
                            </div>
                            <p className='flex items-center gap-3 mt-4'>
                                <span>🕒</span> Atendimento 24h, todos os dias.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactSection;