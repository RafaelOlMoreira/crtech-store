import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import Imagem1 from '/Foto1.jpg'
import Imagem2 from '/Foto2.jpg'
import Imagem3 from '/Foto3.jpg'

function Carrousel() {
    return (
        <>
            <Carousel className=''>
                <Carousel.Item interval={5000}>
                    <img 
                    className='block w-full h-screen object-cover'
                    src={Imagem1}
                    alt="Primeiro Slide" />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img 
                    className='block w-full h-screen object-cover'
                    src={Imagem2}
                    alt="Segundo Slide" />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img 
                    className='block w-full h-screen object-cover'
                    src={Imagem3}
                    alt="Terceiro Slide" />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Carrousel
