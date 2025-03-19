import React from 'react'

import Mockup from "../../../assets/MockupAboutSection.png";

const AboutSection = () => {
    return (
        <div className='bg-gradient-to-l from-[#101828] to-[#0a0f1a]'>
            <section className="w-full max-w-6xl mx-auto py-16 px-4">
                <h2 className="text-6xl font-[Poppins] text-center text-white mb-12">Sobre Nós</h2>

                <div className="grid xl:grid-cols-3 gap-6 xl:m-0
                                lg:grid-cols-2 lg:m-16
                                sm:m-24">

                    <div className="row-span-2 xl:col-span-1 flex items-center justify-center 
                                    lg:row-span-2 lg:col-span-2">
                        <img
                            src={Mockup}
                            className="xl:w-full h-full object-cover rounded-lg shadow-lg
                                        lg:w-100"
                        />
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg text-white shadow-lg
                                    xl:order-first">
                        <h3 className="text-xl font-semibold">Nossa História 🏆</h3>
                        <p className="text-sm mt-2">Tudo começou com dois amigos de escola em uma conversa à noite sobre a vida. Apaixonados por tecnologia, decidimos criar uma loja unindo nosso conhecimento e experiência em um só lugar.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg text-white shadow-lg">
                        <h3 className="text-xl font-semibold">Nossa Missão 🎯</h3>
                        <p className="text-sm mt-2">Oferecer produtos e serviços de alta qualidade, garantindo praticidade, suporte 24h e entregas sem custo. Queremos levar tecnologia e confiança até você, sempre com excelência e carinho com nossos clientes.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg text-white shadow-lg">
                        <h3 className="text-xl font-semibold">Por Que Escolher a Gente? ⭐</h3>
                        <p className="text-sm mt-2">Escolhemos produtos de primeira linha, oferecemos garantia em tudo e priorizamos você! Entregamos no conforto da sua casa sem custo extra, garantindo qualidade e confiança em cada compra.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg text-white shadow-lg">
                        <h3 className="text-xl font-semibold">Nossos Valores 🤝</h3>
                        <p className="text-sm mt-2">Prezamos pela qualidade, transparência e compromisso com o nosso cliente. Garantimos produtos de primeira linha, suporte especializado e um atendimento focado na sua satisfação e conforto.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg text-white shadow-lg">
                        <h3 className="text-xl font-semibold">Nossa Equipe 👨‍💻👩‍🔧</h3>
                        <p className="text-sm mt-2">Nossa equipe de suporte está disponível 24h para te atender! Contamos com profissionais especializados em manutenção e instalação, que realizam tudo no conforto da sua casa, garantindo praticidade e qualidade.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg text-white shadow-lg">
                        <h3 className="text-xl font-semibold">O Que Fazemos? 🛠️</h3>
                        <p className="text-sm mt-2">Vendemos acessórios para celular e outros dispositivos, como fones, carregadores e suportes. Além disso, temos assistência técnica especializada para computadores, notebooks e celulares.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg text-white shadow-lg xl:col-span-1 lg:col-span-2">
                        <h3 className="text-xl font-semibold">Entre em Contato 📞</h3>
                        <p className="text-sm mt-2">Tem dúvida ou precisa de suporte? Nossa equipe está pronta para te atender 24h por dia! Entre em contato pelos nossos canais e tenha atendimento eficiente. Seja para assistência técnica, produtos ou informação, estamos aqui para ajudar.</p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default AboutSection
