import { Disclosure } from '@headlessui/react'
import { HiChevronUp } from 'react-icons/hi'

const ExpedienteMenu2 = () => {

    return (
        <div className="px-4 my-2">
            <Disclosure as="div" className="mt-3">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-base font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <span>Aspecto general (Habitus exterior)</span>
                            <HiChevronUp
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" m-2 p-4 text-sm ">
                            <p className='my-2'>Escriba a continuación el aspecto general del paciente</p>
                            <div className="flex flex-col w-full ">
                                <textarea className="h-52 ring-1 border rounded shadow focus:outline-none focus:ring-blue-600"></textarea>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <Disclosure as="div" className="mt-3">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-base font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <span>Signos vitales</span>
                            <HiChevronUp
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" m-2 p-4 text-sm ">
                            <p className='my-2'>Escriba a continuación los signos vitales del paciente</p>
                            <div className="flex flex-col w-full ">
                                <textarea className="h-52 ring-1 border rounded shadow focus:outline-none focus:ring-blue-600"></textarea>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <Disclosure as="div" className="mt-3">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-base font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <span>Somatometría</span>
                            <HiChevronUp
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" m-2 p-4 text-sm ">
                            <p className='my-2'>Escriba a continuación los signos vitales del paciente</p>
                            <div className="flex flex-col w-full ">
                                <textarea className="h-52 ring-1 border rounded shadow focus:outline-none focus:ring-blue-600"></textarea>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <Disclosure as="div" className="mt-3">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-base font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <span>Cabeza</span>
                            <HiChevronUp
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" m-2 p-4 text-sm ">
                            <p className='my-2'>Escriba a continuación los signos vitales del paciente</p>
                            <div className="flex flex-col w-full ">
                                <textarea className="h-52 ring-1 border rounded shadow focus:outline-none focus:ring-blue-600"></textarea>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <Disclosure as="div" className="mt-3">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-base font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <span>Cuello</span>
                            <HiChevronUp
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" m-2 p-4 text-sm ">
                            <p className='my-2'>Escriba a continuación los signos vitales del paciente</p>
                            <div className="flex flex-col w-full ">
                                <textarea className="h-52 ring-1 border rounded shadow focus:outline-none focus:ring-blue-600"></textarea>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <Disclosure as="div" className="mt-3">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-base font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <span>Torax</span>
                            <HiChevronUp
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" m-2 p-4 text-sm ">
                            <p className='my-2'>Escriba a continuación los signos vitales del paciente</p>
                            <div className="flex flex-col w-full ">
                                <textarea className="h-52 ring-1 border rounded shadow focus:outline-none focus:ring-blue-600"></textarea>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <Disclosure as="div" className="mt-3">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-base font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <span>Abdomen</span>
                            <HiChevronUp
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" m-2 p-4 text-sm ">
                            <p className='my-2'>Escriba a continuación los signos vitales del paciente</p>
                            <div className="flex flex-col w-full ">
                                <textarea className="h-52 ring-1 border rounded shadow focus:outline-none focus:ring-blue-600"></textarea>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <Disclosure as="div" className="mt-3">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-base font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <span>Extremidades</span>
                            <HiChevronUp
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" m-2 p-4 text-sm ">
                            <p className='my-2'>Escriba a continuación los signos vitales del paciente</p>
                            <div className="flex flex-col w-full ">
                                <textarea className="h-52 ring-1 border rounded shadow focus:outline-none focus:ring-blue-600"></textarea>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <Disclosure as="div" className="mt-3">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-base font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <span>Genitales</span>
                            <HiChevronUp
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" m-2 p-4 text-sm ">
                            <p className='my-2'>Escriba a continuación los signos vitales del paciente</p>
                            <div className="flex flex-col w-full ">
                                <textarea className="h-52 ring-1 border rounded shadow focus:outline-none focus:ring-blue-600"></textarea>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <Disclosure as="div" className="mt-3">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-base font-bold text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <span>Exploraciones especiales</span>
                            <HiChevronUp
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" m-2 p-4 text-sm ">
                            <p className='my-2'>Escriba a continuación los signos vitales del paciente</p>
                            <div className="flex flex-col w-full ">
                                <textarea className="h-52 ring-1 border rounded shadow focus:outline-none focus:ring-blue-600"></textarea>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

export default ExpedienteMenu2