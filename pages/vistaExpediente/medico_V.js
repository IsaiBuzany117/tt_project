import { Disclosure, Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { HiChevronUp } from 'react-icons/hi'
import Head from 'next/head'
import Navbar from "../../components/navprincipal"
import Link from "next/link"

const Medico_V = () => {

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
            {/* <div>
                <h1 className="text-center text-2xl my-2"><b>Expediente Médico</b></h1>
                <div>
                    1
                </div>
                <div>
                    1
                </div>
            </div> */}



            <div className="text-center my-2">
                <h1 className="text-2xl"><b>Expediente Médico</b></h1>
            </div>

            <div className="px-4 my-6">
                <div className=" w-2/3 p-2 mx-auto">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-sm font-bold text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>Historia Clínica</span>
                                    <HiChevronUp
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className=" m-2 p-4 text-sm ">
                                    <div className="flex flex-col w-full ">
                                        <p className='font-bold'>Interrogatorio</p>

                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic '>Ficha de identificación</p>
                                        </div>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Antecedentes heredofamiliares</p>

                                        </div>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Antecedentes personales patológicos</p>
                                        </div>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Antecedentes personales no patológicos</p>
                                        </div>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Padecimiento Actual</p>
                                        </div>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Interrogatorio por aparatos y sistemas</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col w-full ">
                                        <p className='font-bold'>Exploración física</p>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Aspecto general (Habitus exterior)</p>
                                        </div>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Signos vitales</p>
                                        </div>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Somatometría</p>
                                        </div>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Cabeza</p>
                                        </div>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Cuello</p>
                                        </div>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Torax</p>
                                        </div>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Abdomen</p>
                                        </div>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Extremidades</p>
                                        </div>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Genitales</p>
                                        </div>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'>Exploraciones especiales</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center">
                                        <button type="submit" className="block m-2 bg-purple-600 border rounded-md p-2 mt-2 text-slate-100 hover:bg-purple-700">Modificar</button>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-sm font-bold text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>Nota de evolución</span>
                                    <HiChevronUp
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                                    <div className="flex flex-col w-full ">
                                        <p className='font-bold'>Evolución y actualización del cuadro clínico</p>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                        <p className='font-bold'>Signos vitales</p>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                        <p className='font-bold'>Resultados de estudios solicitados</p>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                        <p className='font-bold'>Diagnóstico o problema clínico</p>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                        <p className='font-bold'>Pronóstico</p>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                        <p className='font-bold'>Tratamiento</p>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button type="submit" className="block m-2 bg-purple-600 border rounded-md p-2 mt-2 text-slate-100 hover:bg-purple-700">Modificar</button>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                    <Disclosure as="div" className="mt-3">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-sm font-bold text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>Nota de interconsulta</span>
                                    <HiChevronUp
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm ">

                                    <div className="flex flex-col w-full ">
                                        <p className='font-bold'>Criterios de diagnóstico</p>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                        <p className='font-bold'>Plan de estudios</p>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                        <p className='font-bold'>Sugerencias diagnósticas y tratamiento</p>
                                        <div className="grid h-20 card border-purple-700 border-dotted border-2 rounded-box">
                                            <p className='italic'></p>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <button type="submit" className="block m-2 bg-purple-600 border rounded-md p-2 mt-2 text-slate-100 hover:bg-purple-700">Modificar</button>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center">
                <Link href="/inicio/medico_I" passHref>
                    <button type="submit" className="block m-2 bg-purple-600 border rounded-md p-2 mt-2 text-slate-100 hover:bg-purple-700">Regresar</button>
                </Link>
                <button type="submit" onClick={openModal} className="block m-2 bg-purple-600 border rounded-md p-2 mt-2 text-slate-100 hover:bg-purple-700">Guardar expediente</button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal} >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0" >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>


                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95" >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Modificación exitosa
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Espere a que el paciente acepte los cambios.
                                        Las modificaciones se reflejarán en cuanto se concluya la transacción.
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <button type="button" className="block m-2 bg-purple-600 border rounded-md p-2 mt-2 text-slate-100 hover:bg-purple-700" onClick={closeModal} >
                                        Aceptar
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}
export default Medico_V