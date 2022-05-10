import Head from 'next/head'
import Navbar from '../components/navbar'
import { useState } from 'react'
import { Combobox, Transition  } from '@headlessui/react'
import { HiSelector } from 'react-icons/hi'
// import { useRouter } from 'next/router'
import { especialidades } from "../utils/especialidades"

const ComboboxEspceialidad = () => {

    const [especialidad, setEspecialidad] = useState('Selecciona una especialidad')
    const [input, setInput] = useState('')
    const especialidadInput = input === ''
        ? especialidades
        : especialidades.filter(espec => {
            return espec.toLowerCase().includes(input.toLowerCase())
        })
    return(
        // <div className=''>
            <Combobox value={especialidad} onChange={setEspecialidad} as="div" className="relative">
                {/* <div className=''> */}
                    <div className='relative w-64 cursor-default overflow-hidden text-sm ring-1 border rounded shadow ring-indigo-600 '>
                        <Combobox.Input onChange={e => setInput(e.target.value)} className="w-full outline-none py-2 pl-2 focus:ring-indigo-600"/>
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <HiSelector className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                        </Combobox.Button>
                    </div>
                {/* </div> */}
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                    afterLeave={() => setInput('')}
                >
                    <Combobox.Options className=" w-full mt-1 max-h-32 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className='py-2 px-1 m-1 hover:bg-indigo-500 hover:text-white cursor-pointer'>
                            <Combobox.Option  value="">
                                Selecciona una especialidad
                            </Combobox.Option>
                        </div>
                        {
                            especialidadInput.map(espec => (
                                <div key={espec} className='py-2 px-1 m-1/2 border hover:bg-indigo-500 hover:text-white cursor-pointer'>
                                    <Combobox.Option value={espec}>
                                        {espec}
                                    </Combobox.Option>
                                </div>
                            ))
                        }
                    </Combobox.Options>
                </Transition>
            </Combobox>
        // </div>
    )
}

const Busqueda = () => {
    return (
        <div className='h-screen'>
            <Head>
                <title>Registro - Médico</title>
            </Head>
            <Navbar />

            <div className="text-center my-2">
                <h1 className="text-3xl">Busqueda de Medicos</h1>
            </div>

            <div className='grid grid-cols-2 m-6'>
                <div className='flex justify-end mr-4'>
                    <ComboboxEspceialidad />
                </div>
                <div className='flex justify-start ml-4 max-h-10 w-64'>
                    <button className='w-full bg-indigo-500 text-white px-3 py-2 rounded hover:bg-indigo-600'>Buscar</button>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-4 translate-y-4'>
                <div>1</div>
                <div className='bg-lime-700'>2</div>
                <div className='bg-purple-500'>3</div>
                <div>4</div>
                <div>5</div>
            </div>
        </div>
    )
}

export default Busqueda