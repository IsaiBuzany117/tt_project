import { Disclosure, Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { HiChevronUp } from 'react-icons/hi'
import Head from 'next/head'
import Navbar from "../../components/navprincipal"
import Link from "next/link"
import { useRouter } from 'next/router'
const PacienteV = () => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    return (
        <div className='h-screen'>
            <Head>
                <title>Expediente Médico </title>
            </Head>
            <Navbar />

            <div className="text-center my-2">
                <h1 className="text-3xl">Expediente Médico</h1>
            </div>

            <div className="px-4 my-6">
                <div className=" w-2/3 p-2 mx-auto">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full h-24 px-9 py-9 text-sm font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                    <span className="text-lg">Historia Clínica</span>
                                    <HiChevronUp
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-blue-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className=" m-2 px-7 pt-4 text-base">
                                    <div className="flex flex-col w-full ">
                                        <p className='font-bold'>Interrogatorio</p>

                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic '>Ficha de identificación</p>
                                        </div>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Antecedentes heredofamiliares</p>

                                        </div>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Antecedentes personales patológicos</p>
                                        </div>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Antecedentes personales no patológicos</p>
                                        </div>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Padecimiento Actual</p>
                                        </div>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Interrogatorio por aparatos y sistemas</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col w-full ">
                                        <p className='font-bold'>Exploración física</p>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Aspecto general (Habitus exterior)</p>
                                        </div>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Signos vitales</p>
                                        </div>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Somatometría</p>
                                        </div>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Cabeza</p>
                                        </div>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Cuello</p>
                                        </div>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Torax</p>
                                        </div>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Abdomen</p>
                                        </div>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Extremidades</p>
                                        </div>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Genitales</p>
                                        </div>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Exploraciones especiales</p>
                                        </div>
                                    </div>

                                    {/* <div className="flex justify-center items-center">
                                        <button type="submit" className="block m-2 bg-indigo-600 border rounded-md p-2 mt-2 text-slate-100 text-lg hover:bg-indigo-700 w-36 h-14">Modificar</button>
                                    </div> */}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                    <Disclosure as="div" className="mt-4">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full h-24 px-9 py-9 text-sm font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                    <span className="text-lg">Nota de evolución</span>
                                    <HiChevronUp
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-blue-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-7 pt-4 text-base">
                                    <div className="flex flex-col w-full ">
                                        <p className='font-bold'>Evolución y actualización del cuadro clínico</p>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                        <p className='font-bold'>Signos vitales</p>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                        <p className='font-bold'>Resultados de estudios solicitados</p>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                        <p className='font-bold'>Diagnóstico o problema clínico</p>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                        <p className='font-bold'>Pronóstico</p>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                        <p className='font-bold'>Tratamiento</p>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                    </div>
                                    {/* <div className="flex justify-center items-center">
                                        <button type="submit" className="block m-2 bg-indigo-600 border rounded-md p-2 mt-2 text-slate-100 text-lg hover:bg-indigo-700 w-36 h-14">Modificar</button>
                                    </div> */}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                    <Disclosure as="div" className="mt-4">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full h-24 px-9 py-9 text-sm font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                    <span className="text-lg">Nota de interconsulta</span>
                                    <HiChevronUp
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-blue-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-7 pt-4 text-base">

                                    <div className="flex flex-col w-full">
                                        <p className='font-bold'>Criterios de diagnóstico</p>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                        <p className='font-bold'>Plan de estudios</p>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                        <p className='font-bold'>Sugerencias diagnósticas y tratamiento</p>
                                        <div className="grid h-20 card border-blue-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                        {/* <div className="flex justify-center items-center">
                                            <button type="submit" className="block m-2 bg-indigo-600 border rounded-md p-2 mt-2 text-slate-100 text-lg hover:bg-indigo-700 w-36 h-14">Modificar</button>
                                        </div> */}
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center">
                {/* <Link href="/inicio/paciente" passHref> */}
                    <button type="submit" className="block m-2 bg-indigo-600 border rounded-md p-2 mt-2 text-slate-100 text-lg hover:bg-indigo-700 w-36 h-14" onClick={() => router.back()}>Regresar</button>
                {/* </Link> */}
            </div>

        </div>
    )
}
export default PacienteV