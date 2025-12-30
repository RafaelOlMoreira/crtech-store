import React from 'react'

function Suport() {
    return (
        // Div geral de Suporte / Contato
        <div className='h-auto overflow-y-hidden py-10 px-4 font-montserrat' id='Suporte'>
            <h1 className='py-5 px-8 text-xl uppercase font-extrabold text-center'>Suporte e Atendimento</h1>
            <p className='px-6 text-[16px] text-center drop-shadow-xs'>Precisa de ajuda? Fale agora pelo WhatsApp, ou envie um e-mail para nós.</p>

            {/* Informações para contato */}
            <div className='py-10 space-y-3'>
                {/* Contato de Telefone */}
                <div className='flex space-x-2 justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    <a href="tel:+5531992479530" className='text-blue-500 hover:border-b hover:border-blue-500'>+55 (31) 99247-9530</a>
                </div>
                {/* Contato de Email */}
                <div className='flex space-x-2 justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>
                    <a href="mailto:tech.cr.assistencia@gmail.com" className='text-blue-500 hover:border-b hover:border-blue-500'>tech.cr.assistencia@gmail.com</a>
                </div>
                <p className='text-center'>Prazo médio de resposta: até <span className='border-b border-gray-500'>24 horas úteis</span></p>
            </div>

            {/* Div geral suporte via Forms */}
            <div className='pb-10 space-y-3'>
                <p className='px-6 text-[16px] text-center drop-shadow-xs'>Se preferir que retornemos pelo WhatsApp, preencha o formulário abaixo com as informações e responderemos em até 24 horas úteis.</p>

                {/* Componente do forms */}
                <div className='space-y-3'>
                    {/* Formulario de Atendimento */}
                    <form action="#" className='space-y-3'>
                        {/* Input Nome Completo */}
                        <input type="text" name="nome" id="nome" placeholder='Nome Completo...' required className='w-full border-2 border-[#00b7ff7e] hover:border-[#00b7ff] focus:border-[#00b7ff] outline-0 p-2 rounded-lg' />
                        {/* Input Email */}
                        <input type="email" name="email" id="email" placeholder='email@exemplo.com' required className='w-full border-2 border-[#00b7ff7e] hover:border-[#00b7ff] focus:border-[#00b7ff] outline-0 p-2 rounded-lg' />
                        {/* Input Telefone */}
                        <input type="tel" name="telefone" id="telefone" placeholder='(31) 99999-9999' pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" required className='w-full border-2 border-[#00b7ff7e] hover:border-[#00b7ff] focus:border-[#00b7ff] outline-0 p-2 rounded-lg' />

                        {/* Input Opção */}
                        <label for="assunto">Selecione uma opção:</label>
                        <select name="assunto" id="assunto" required className='w-full border-2 border-[#00b7ff7e] hover:border-[#00b7ff] focus:border-[#00b7ff] outline-0 p-2 rounded-lg'>
                            <option value="pedido">Pedido / Entrega</option>
                            <option value="Produto">Produto / Compatibilidade</option>
                            <option value="troca">Troca / Devolução</option>
                            <option value="pagamento">Pagamento</option>
                            <option value="outro">Outro</option>
                        </select>

                        {/* Input Descrição */}
                        <textarea name="mensagem" id="mensagem" rows={4} placeholder='Descreva seu problema ou dúvida...' className='w-full border-2 border-[#00b7ff7e] hover:border-[#00b7ff] focus:border-[#00b7ff] outline-0 p-2 rounded-lg'></textarea>

                        {/* Checkbox de autorização */}
                        <div className='space-x-2'>
                            <input type="checkbox" name="politica" id="politica" required />
                            <label htmlFor="politica">Autorizo resposta pelo <span className='text-green-500'>WhatsApp</span> e concordo com a <a href="#" className='text-blue-500 hover:border-b hover:border-blue-500'>política de privacidade</a>.</label>
                        </div>
                    </form>
                    {/* Button de enviar mensagem */}
                    <button type="submit" className='w-full bg-[#00b7ff7e] hover:bg-[#00b7ff] p-2 rounded-lg text-white'>
                        Enviar Mensagem
                    </button>
                    {/* Button de falar no WhatsApp */}
                    <div className='flex'>
                        <button className='flex justify-center gap-x-2 w-full bg-[#00c9507e] hover:bg-[#00c950] p-2 rounded-lg text-white'>
                            <svg fill="#ffffff" className='size-6' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>whatsapp</title> <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path> </g></svg>
                            Falar no WhatsApp
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Suport
