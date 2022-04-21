import React from 'react'
import Link from 'next/link'

const NavbarP = () => {
    return (
        <div className='grid grid-cols-2 border-b-2 border-purple-700'>
            <div>CLICK</div>
            <div className='flex justify-end'>
                <div className='grid grid-cols-3'>
                    <Link href='/' passHref>
                        <span className='text-center mx-3 my-1 font-bold cursor-pointer transition duration-150 ease-in-out hover:scale-105  hover:text-purple-800 hover:underline'>Inicio</span>
                    </Link>
                    <span className='text-center mx-3 my-1 font-bold cursor-pointer transition duration-150 ease-in-out hover:scale-105  hover:text-purple-800 hover:underline'>Mi cuenta</span>
                </div>
            </div>
        </div>
    )
}

export default NavbarP