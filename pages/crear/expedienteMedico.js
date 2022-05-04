import Navbar from "../../components/navprincipal"
import Head from 'next/head'
import ExpedienteM1 from "../../components/ExpedienteHCMenu"
import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ExpedienteMedico = () => {
    let [categories] = useState({
        Historia_Clínica: [
            {
                id: 1,
                title: 'Secciones',
                data: <ExpedienteM1 />,
            }
        ],
        Nota_de_Evolución: [
            {
                id: 1,
                title: 'Ejemplo',

            },
            {
                id: 2,
                title: 'Ejemplo',
            },
        ],
        Nota_de_Interconsulta: [
            {
                id: 1,
                title: 'Ejemplo',
            },
            {
                id: 2,
                title: 'Ejemplo',
            },
        ],
    })
    return (

        <div className="h-screen">
            <Head>
                <title>Creación Expediente - Médico</title>
            </Head>
            <Navbar />

            <div>
                <h1 className="text-center text-3xl my-4">Expediente Médico</h1>
                <div className="px-16 my-6">
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                            {Object.keys(categories).map((category) => (
                                <Tab
                                    key={category}
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-purple-700',
                                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-400 focus:outline-none focus:ring-2',
                                            selected
                                                ? 'bg-white shadow'
                                                : 'text-blue-100 hover:bg-purple-500 hover:text-white'
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
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-400 focus:outline-none focus:ring-2'
                                    )}
                                >
                                    <ul>
                                        {posts.map((post) => (
                                            <li
                                                key={post.id}
                                                className="relative rounded-md p-3 hover:bg-gray-100"
                                            >
                                                <h2 className="text-base font-bold my-6">
                                                    {post.title}
                                                </h2>

                                                <p>
                                                    {post.data}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    )
}

export default ExpedienteMedico