import React from 'react'
import Link from 'next/link'
import { MdNotifications } from 'react-icons/md'
import { Menu, Transition } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'
import { GoGear } from 'react-icons/go'
import { HiLogout } from 'react-icons/hi'
import Image from 'next/image'
import logo1 from '../assets/logo1.svg'

const MenuDropdown = () => {
    return (
        <Menu as="div" className="relative inline-block">
            <Menu.Button className='text-center p-1 font-bold cursor-pointer transition duration-150 ease-in-out hover:scale-105  hover:text-purple-800 hover:underline'>
                <div className='flex'>
                    Mi Cuenta
                    <HiChevronDown className='h-6 w-6'/>
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
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-purple-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className='px-2 py-1'>
                        <Menu.Item>
                            {({active}) => (
                                <button className={`${active?'text-purple-800 underline':'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                    {
                                        active ? (<GoGear className='h-4 w-4 mr-2'/>):(<GoGear className='h-4 w-4 mr-2'/>)
                                    }
                                    <Link href="/configuracion">
                                        <a>Configuracion</a>
                                    </Link>
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                    <div className='px-2 py-1'>
                        <Menu.Item>
                            {({active}) => (
                                <button className={`${active?'text-purple-800 underline':'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
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
    )
}

const NavbarP = () => {
    return (
        <div className='grid grid-cols-2 border-b-2 border-purple-700'>
            <div className=''>
                <Image src={logo1} alt="" width={32} height={32}/>            </div>
            <div className='flex justify-end'>
                <div className='grid grid-cols-3'>
                    <MenuDropdown />
                    <div className='flex justify-center items-center'>
                        <span className='p-1 cursor-pointer hover:text-purple-800'>
                            <MdNotifications className=" w-6 h-6"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarP