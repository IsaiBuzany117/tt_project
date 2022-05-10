import Head from 'next/head'
import Navbar from '../components/navbar'
import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { useRouter } from 'next/router'
import { especialidades } from "../utils/especialidades"

const ComboboxEspceialidad = () => {

    const router = useRouter()

    const [especialidad, setEspecialidad] = useState('')
    const [input, setInput] = useState('')
    const especialidadInput = input === ''
        ? especialidades
        : especialidades.filter(espec => {
            return espec.toLowerCase().includes(input.toLowerCase())
        })
    return(
        <Combobox value={especialidad} onChange={setEspecialidad}>
            <Combobox.Input onChange={e => setInput(e.target.value)}/>
            <Combobox.Options>
                <Combobox.Option value={''}>
                    Selecciona una especialidad
                </Combobox.Option>
                {
                    especialidadInput.map(espec => (
                        <Combobox.Option key={espec} value={espec}>
                            {espec}
                        </Combobox.Option>
                    ))
                }
            </Combobox.Options>
        </Combobox>
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
            
            <div className='flex justify-center'>
                <ComboboxEspceialidad />
            </div>
        </div>
    )
}

export default Busqueda