import { Disclosure, Dialog, Transition } from '@headlessui/react'
import Navbar from "../../components/navprincipal"
import Head from 'next/head'
import ExpedienteM1 from "../../components/ExpedienteHCMenu"
import ExpedienteM2 from "../../components/ExpedienteEFMenu"
import ExpedienteNE from "../../components/ExpedienteNEForm"
import ExpedienteNI from "../../components/ExpedienteNIForm"
import Link from "next/link"
import { useState, Fragment } from 'react'
import { Tab } from '@headlessui/react'
//Buscar la propiedad HIDE para que no se renderice una y otra vez

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ExpedienteMedico = () => {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    let [categories] = useState({
        "Historia Clínica": [
            {
                id: 1,
                title: 'Interrogatorio',
                data: <ExpedienteM1 />,
            },
            {
                id: 2,
                title: 'Exploración Física',
                data: <ExpedienteM2 />,
            }
        ],
        "Nota de Evolución": [
            {
                id: 1,
                title: 'Secciones',
                data: <ExpedienteNE />,
            },
        ],
        "Nota de Interconsulta": [
            {
                id: 1,
                title: 'Secciones',
                data: <ExpedienteNI />,
            }
        ],
    })
    return (

        <div className="h-screen">
            <Head>
                <title>Creación Expediente - Médico</title>
            </Head>
            <Navbar />

            <div>
                <h1 className="text-center text-3xl my-2">Expediente Médico</h1>
                <div className="px-16 my-6">
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                            {Object.keys(categories).map((category) => (
                                <Tab
                                    key={category}
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full rounded-lg py-2.5 text-base font-medium leading-5 text-indigo-700',
                                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                                            selected
                                                ? 'bg-white shadow'
                                                : 'text-indigo-700 hover:bg-indigo-700 hover:text-white'
                                        )
                                    }
                                >
                                    {category}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            {Object.values(categories).map((posts, idx) => (
                                <Tab.Panel
                                    key={idx}
                                    className={classNames(
                                        'rounded-xl bg-white p-3',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2'
                                    )}
                                >
                                    <ul>
                                        {posts.map((post) => (
                                            <li
                                                key={post.id}
                                                className="relative rounded-md p-3 hover:bg-gray-100"
                                            >
                                                <h2 className="text-base font-bold">
                                                    {post.title}
                                                </h2>

                                                <div>
                                                    {post.data}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                    <div className="flex flex-row justify-center items-center">
                        <button type="submit" onClick={openModal} className="block m-2 bg-indigo-600 border rounded-md p-2 mt-2 text-lg text-slate-100 hover:bg-indigo-700 w-50 h-14">Crear expediente</button>
                    </div>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto text-center" onClose={closeModal} >
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
                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 text-center">
                                            Creación exitosa
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-base text-justify text-gray-500">
                                                ¿Está seguro que quiere crear el expediente?
                                            </p>
                                        </div>

                                        <div className="mt-4 flex justify-center">
                                            <Link href="/inicio/medico_I" passHref>
                                                <button type="button" className="block m-2 bg-indigo-600 border rounded-md p-2 mt-2 text-slate-100 hover:bg-indigo-700" onClick={closeModal} >
                                                    Continuar
                                                </button>
                                            </Link>
                                            <button type="button" className="block m-2 bg-indigo-600 border rounded-md p-2 mt-2 text-slate-100 hover:bg-indigo-700" onClick={closeModal} >
                                                Cancelar
                                            </button>
                                        </div>
                                    </div>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
            </div>
        </div>
    )
}

export default ExpedienteMedico