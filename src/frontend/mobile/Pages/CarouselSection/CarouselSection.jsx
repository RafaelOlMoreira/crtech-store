import React, { useEffect, useState } from 'react'

import { MdChevronLeft } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";

function Carrousel({ 
    children: slides,
    autoSlide = true,
    autoSlideInterval = 5000,
 }) {

    const [curr, setCurr] = useState(0)

    const anterior = () => setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1))
    const proximo = () => setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(proximo, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div id='inicio' className='-z-10 pt-24 overflow-hidden relative'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }} >{slides}</div>
            {/* <div className='absolute inset-0 flex items-center justify-between p-4' >
                <button onClick={anterior} className='rounded-full p-0.5 shadow bg-white/50 text-black hover:bg-white/60'>
                    <MdChevronLeft size={40} />
                </button>
                <button onClick={proximo} className='rounded-full p-0.5 shadow bg-white/50 text-black hover:bg-white/60'>
                    <MdOutlineChevronRight size={40} />
                </button>
            </div> */}
        </div>
    )
}

export default Carrousel
