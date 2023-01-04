import { Dialog, Transition, Tab } from "@headlessui/react";
import { useRouter } from 'next/router'
import { Formik, Form } from "formik";
import Interrogatorio from 'components/forms/expediente/interrogatorio'
import Exploracion from 'components/forms/expediente/exploracion'
import Notaevolucion from 'components/forms/expediente/notaevolucion'
import Notainterconsulta from 'components/forms/expediente/notainterconsulta'
import Buttonsubmit from 'components/inputs/buttonsubmit'
import { expedienteIvalues, pacienteIValidate } from "utils/expedientem.config";
import Userlayout from "components/layouts/userlayout";
import Modal from 'components/modal'
import { BsPersonCheckFill } from 'react-icons/bs'
import { useState } from "react";

const Crear = () => {

    const router = useRouter()
    const [isCreated, setIsCreated] = useState(false)
    const [error, setError] = useState(null)
    // const [isOpen, setIsOpen] = useState(false);
    const open = () => setIsCreated(true);
    const close = () => setIsCreated(false);

    const handleClick = async (values) => {

        const auxne = values.ne.aux
        const cleanauxne = {
            fecha: new Date(Date.now()).toLocaleDateString(),
            sv: {
                temperatura: "",
                tensionarterial: "",
                frecresp: "",
                freccardi: "",
                satuoxigeno: "",
                otro: "",
            },
            eyadcc: "",
            sintomatologia: "",
            dyp: "",
            rrdes: "",
        }
        values.ne.aux = cleanauxne
        values.ne.nota.push(auxne)
        // console.log(values)

        const auxni = values.ni.aux
        const cleanauxni = {
            fecha: new Date(Date.now()).toLocaleDateString(),
            cyd: "",
            pde: "",
            sdyt: "",
        }
        values.ni.aux = cleanauxni
        values.ni.nota.push(auxni)
        console.log(values)

        const fetchingExp = async() => {
            await fetch("http://localhost:4000/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    console.log("Expediente creado")

                })
                .catch((err) => console.log(err));
            console.log(error)
        }

        await fetch('http://localhost:3000/api/agregar', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                curp: values.curp,
                nombre: `${values.i.fi.nombre} ${values.i.fi.apaterno} ${values.i.fi.amaterno}`,
                edad: values.i.fi.edad,
                sexo: `${values.i.fi.sexo === 'M' ? "Masculino" : "Femenino"}`
            }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                    setError(data.error)
                    open()
                    setTimeout(() => {
                        close()
                    }, 3000)
                } else {
                    console.log(data)
                    fetchingExp()
                    open(true)
                    setTimeout(() => {
                        close()
                        router.push('/medico')
                    }, 3000)
                }
                // router.push(`/${data.usertype}`)
            })
    }

    return (
        <Userlayout type="medico">
            <div>
                <h1 className="py-6 text-center text-3xl">Expediente Médico</h1>
                <Formik
                    initialValues={expedienteIvalues}
                    // validate={(values) => pacienteIValidate(values)}
                    onSubmit={(values) => {
                        //   console.log(values);
                        handleClick(values)
                    }}
                >
                    {({ values, errors }) => (
                        <Form>
                            <Tab.Group as="div" className="w-[80%] mx-auto">
                                <Tab.List className="flex justify-center space-x-2 px-4 py-2.5 rounded-full ring ring-indigo-400 bg-indigo-50">
                                    <Tab
                                        className={({ selected }) =>
                                            `w-full p-2 rounded-full bg-indigo-100 ring-offset-indigo-400 focus:outline-none focus:ring-2 ${selected
                                                ? "bg-indigo-700 text-white"
                                                : "text-indigo-700 hover:bg-indigo-700 hover:text-white"
                                            }`
                                        }
                                    >
                                        Historia Clínica
                                    </Tab>
                                    <Tab
                                        className={({ selected }) =>
                                            `w-full p-2 rounded-full bg-indigo-100 ring-offset-indigo-400 focus:outline-none focus:ring-2 ${selected
                                                ? "bg-indigo-700 text-white"
                                                : "text-indigo-700 hover:bg-indigo-700 hover:text-white"
                                            }`
                                        }
                                    >
                                        Nota de Evolución
                                    </Tab>
                                    <Tab
                                        className={({ selected }) =>
                                            `w-full p-2 rounded-full bg-indigo-100 ring-offset-indigo-400 focus:outline-none focus:ring-2 ${selected
                                                ? "bg-indigo-700 text-white"
                                                : "text-indigo-700 hover:bg-indigo-700 hover:text-white"
                                            }`
                                        }
                                    >
                                        Nota de Interconsulta
                                    </Tab>
                                </Tab.List>
                                <Tab.Panels as="div" className="w-full p-4">
                                    <Tab.Panel className="w-full rounded-md">
                                        <Interrogatorio
                                            values={values}
                                            errors={errors}
                                        />
                                        <Exploracion errors={errors} />
                                    </Tab.Panel>
                                    <Tab.Panel className="w-full rounded-md">
                                        <Notaevolucion values={values} index={0} />
                                    </Tab.Panel>
                                    <Tab.Panel className="w-full rounded-md">
                                        <Notainterconsulta values={values} index={0} />
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                            <div className="flex justify-center">
                                <div className="w-1/3">
                                    <Buttonsubmit value='Crear expediente' name='submit' />
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <Modal isOpen={isCreated} close={close}>

                {
                    !error ? (
                        <>
                            <div className="flex justify-center">
                                <p className="text-lg text-center">¡Expediente médico creado correctamente!</p>
                            </div>
                            <div className="flex justify-center">
                                <BsPersonCheckFill className="text-indigo-700" size={64} />
                            </div>
                        </>
                    ) : (
                        <div className="flex justify-center">
                            <p className="text-lg text-center">{error}</p>
                        </div>
                    )
                }
            </Modal>
        </Userlayout>
    );
};

export default Crear;
