import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    const isClicked = true
    return (
        <div className='grid grid-cols-2 border-b-2 border-purple-700'>
            <div>CLICK</div>
            <div className='flex justify-end'>
                <div className='grid grid-cols-3'>
                    <Link href='/' passHref>
                        <span className='text-center mx-1 my-1 font-bold cursor-pointer transition duration-150 ease-in-out hover:scale-105  hover:text-purple-800 hover:underline'>Inicio</span>
                    </Link>
                    <Link href="/registro/paciente" passHref>
                        <span className='text-center mx-1 my-1 font-bold cursor-pointer transition duration-150 ease-in-out hover:scale-105  hover:text-purple-800 hover:underline'>Soy Paciente</span>
                    </Link>
                    <Link href="/registro/medico" passHref>
                        <span className='text-center mx-1 my-1 font-bold cursor-pointer transition duration-150 ease-in-out hover:scale-105  hover:text-purple-800 hover:underline'>Soy Medico</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar