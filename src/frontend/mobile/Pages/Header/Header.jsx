import React from 'react'

function Header() {
    return (
        <div className='fixed flex items-center px-5 bg-white shadow-2xl h-20 w-full'>
            <form className=''>
                <div className='relative'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                    <input type="search" placeholder='Buscar por modelo ou produto...' className='w-65 border-2 border-[#00B5FF] p-2 rounded-3xl text-sm pl-9 placeholder:text-sm placeholder:font-medium' />
                </div>
            </form>
        </div>
    )
}

export default Header
