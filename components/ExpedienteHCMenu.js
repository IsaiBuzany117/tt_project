import { Disclosure } from '@headlessui/react'
import { HiChevronUp } from 'react-icons/hi'
import ExpedienteMFForm from "./ExpedienteMFForm"

const ExpedienteMenu1 = () => {

    return (

        <div className="px-4 my-6">
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-sm font-bold text-left text-purple-700 bg-purple-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>Interrogatorio</span>
                            <HiChevronUp
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" m-2 p-4 text-sm ">
                            <div className="flex flex-col w-full ">
                                <ExpedienteMFForm />
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <Disclosure as="div" className="mt-2">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-sm font-bold text-left text-purple-700 bg-purple-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>Antecedentes heredo-familiares</span>
                            <HiChevronUp
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" m-2 p-4 text-sm ">
                            <div className="flex flex-col w-full ">

                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <Disclosure as="div" className="mt-3">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-sm font-bold text-left text-purple-700 bg-purple-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>Antecedentes personales patológicos</span>
                            <HiChevronUp
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" m-2 p-4 text-sm ">
                            <div className="flex flex-col w-full ">

                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <Disclosure as="div" className="mt-4">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-sm font-bold text-left text-purple-700 bg-purple-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>Antecedentes personales no patológicos</span>
                            <HiChevronUp
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" m-2 p-4 text-sm ">
                            <div className="flex flex-col w-full ">

                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <Disclosure as="div" className="mt-5">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-6 text-sm font-bold text-left text-purple-700 bg-purple-100 rounded-lg hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>Interrogatorio por sistemas</span>
                            <HiChevronUp
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" m-2 p-4 text-sm ">
                            <div className="flex flex-col w-full ">

                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

        </div>

    )
}

export default ExpedienteMenu1