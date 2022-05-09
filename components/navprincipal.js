import React from 'react'
import Link from 'next/link'
import { MdNotifications } from 'react-icons/md'
import { Menu, Transition } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'
import { GoGear } from 'react-icons/go'
import { HiLogout } from 'react-icons/hi'
import Image from 'next/image'
import logoMain from '../assets/logoMain.svg'

const MenuDropdown = () => {
    return (
        <div className='flex justify-center items-center'>
        <Menu as="div" className="relative inline-bloc">
            <Menu.Button>
                <div className='text-center p-1 font-bold cursor-pointer transition duration-150 ease-in-out hover:scale-105  hover:text-indigo-800 hover:underline'>
                    <div className='flex justify-center items-center'>
                        <div className='flex'>
                            Mi Cuenta
                            <HiChevronDown className='h-6 w-6'/>
                        </div>
                    </div>
                </div>
            </Menu.Button>
            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-indigo-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className='px-2 py-1'>
                        <Menu.Item>
                            {({active}) => (
                                <button className={`${active?'text-indigo-800 underline':'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                    {
                                        active ? (<GoGear className='h-4 w-4 mr-2'/>):(<GoGear className='h-4 w-4 mr-2'/>)
                                    }
                                    <Link href="/configCuenta">
                                        <a>Configuracion</a>
                                    </Link>
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                    <div className='px-2 py-1'>
                        <Menu.Item>
                            {({active}) => (
                                <button className={`${active?'text-indigo-800 underline':'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                    {
                                        active ? (<HiLogout className='h-4 w-4 mr-2'/>):(<HiLogout className='h-4 w-4 mr-2'/>)
                                    }
                                    <Link href="/">
                                        <a>Cerrar sesion</a>
                                    </Link>
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
        </div>
    )
}

const NavbarP = () => {
    return (
        <div className='grid grid-cols-2 border-b-2 border-indigo-700'>
            <div className='p-1'>
                <Image src={logoMain} alt="" width={30} height={30}/>
            </div>
            <div className='flex justify-end '>
                <div className='grid grid-cols-2'>
                    <MenuDropdown />
                    <div className='flex justify-center items-center'>
                        <span className='p-1 cursor-pointer hover:text-indigo-800'>
                            <MdNotifications className=" w-6 h-6"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarP