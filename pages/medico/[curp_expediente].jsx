import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Tab } from "@headlessui/react";
import { Formik, Form } from "formik";
import { expedienteIvalues } from "utils/expedientem.config";
import Interrogatorio from 'components/forms/expediente/interrogatorio'
import Exploracion from 'components/forms/expediente/exploracion'
import Notaevolucion from 'components/forms/expediente/notaevolucion'
import Notainterconsulta from 'components/forms/expediente/notainterconsulta'
import Userlayout from "components/layouts/userlayout";
import Buttonsubmit from 'components/inputs/buttonsubmit'
import Modal from "components/modal";
import { BsPersonCheckFill } from "react-icons/bs";

const MedicoV = () => {
  const router = useRouter();
  const { curp_expediente } = router.query
  const [cargando, setCargando] = useState(false)
  const [exp, setExp] = useState(null)
  const [modified, setModified] = useState(false)
  const [values, setValues] = useState(null)

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCargando(true)
    const fetchingExp = async () => {
      await fetch('http://localhost:4000/read', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ curp: curp_expediente }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setExp(data)
          setCargando(false)
        })
    }
    fetchingExp()
  }, [curp_expediente])

  const submit = async (values) => {
    const aux = values.ne.aux
    const cleanaux = {
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
    values.ne.aux = cleanaux
    values.ne.nota.push(aux)

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

    const fetchingMail = async () => {
      await fetch('http://localhost:3000/api/notificar', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({curp : exp.curp}),
      })
    }

    await fetch('http://localhost:4000/update', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then(res => res.json())
      .then(data => {
        console.log("Expediente actualizado correctamente", data)
        setModified(true)
        fetchingMail()
        setTimeout(() => {
          close()
          router.push('/medico')
        }, 3000)
      })
  }

  function close() {
    setIsOpen(false);
  }

  function open() {
    setIsOpen(true);
  }

  if (!exp) return <div>Error al cargar la informacion</div>;
  if (cargando) return <div>Cargando...</div>;
  return (
    <Userlayout type='medico'>
      <div className="text-center my-2">
        <h1 className="text-3xl">Expediente Médico</h1>
      </div>

      <Formik
        initialValues={exp}
        // validate={(values) => pacienteIValidate(values)}
        onSubmit={(values) => {
          console.log(values);
          setValues(values)
          open()
          // submit(values)
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
                    isDisabled={true}
                  />
                  <Exploracion errors={errors} isDisabled={true} />
                </Tab.Panel>
                <Tab.Panel className="w-full rounded-md">
                  <Notaevolucion values={values} index={values.ne.length} />
                  <div className='h-96 mt-4 max-h-screen flex flex-col overflow-y-auto'>
                    {
                      exp.ne.nota.map((n, i) => (
                        <div key={i} className="mb-4">
                          <div className='flex justify-start'>
                            <p className="font-black">{n.fecha}</p>
                          </div>
                          <div className='grid grid-cols-5 grid-rows-2 gap-y-2 text-center text-sm '>
                            <p className='text-indigo-700 font-bold'>Signos vitales</p>
                            <p className='text-indigo-700 font-bold'>Evaluación y actualización del cuadro clínico</p>
                            <p className='text-indigo-700 font-bold'>Sintomatología</p>
                            <p className='text-indigo-700 font-bold'>Diagnóstico y pronóstico</p>
                            <p className='text-indigo-700 font-bold'>Resultados relevantes de estudios solicitados</p>

                            <div className='grid grid-cols-2'>
                              <p>{n.sv.temperatura} Cº</p>
                              <p>{n.sv.tensionarterial} mmHg</p>
                              <p>{n.sv.frecresp} r/m</p>
                              <p>{n.sv.freccardi} ppm</p>
                              <p>{n.sv.satuoxigeno} %</p>
                              <p>{n.sv.otro}</p>
                            </div>
                            <p>{n.eyadcc}</p>
                            <p>{n.sintomatologia}</p>
                            <p>{n.dyp}</p>
                            <p>{n.rrdes}</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </Tab.Panel>
                <Tab.Panel className="w-full rounded-md">
                  <Notainterconsulta values={values} />
                  <div className='h-96 mt-4 max-h-screen flex flex-col overflow-y-auto'>
                    {
                      exp.ni.nota.map((n, i) => (
                        <div key={i} className="mb-4">
                          <div className='flex justify-start'>
                            <p className="font-black">{n.fecha}</p>
                          </div>
                          <div className='grid grid-cols-3 grid-rows-2 gap-y-2 text-center text-sm '>
                            <p className='text-indigo-700 font-bold'>Criterios de diagnóstico</p>
                            <p className='text-indigo-700 font-bold'>Plan de estudios</p>
                            <p className='text-indigo-700 font-bold'>Sugerencias, diagnósticos y tratamiento</p>

                            <p>{n.cyd}</p>
                            <p>{n.pde}</p>
                            <p>{n.sdyt}</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 w-[40%]">
                <div className="w-full">
                  <div className="flex justify-center">
                    <button className="w-4/5 p-1.5 mt-2 mb-4 shadow-md bg-indigo-600 text-slate-100 border rounded-md hover:bg-indigo-800 cursor-pointer" onClick={() => {
                      router.back()
                    }}>
                      Regresar
                    </button>
                  </div>
                  {/* <Buttonsubmit value='Regresar' name='submit' /> */}
                </div>
                <div className="w-full">
                  <Buttonsubmit value='Guardar expediente' name='submit' />
                </div>
              </div>
            </div>
          </Form>
        )}

      </Formik>

      <Modal isOpen={isOpen} close={close}>
        <div>
          {
            modified ? (
              <div>
                <div className="flex justify-center">
                  <p className="text-lg text-center">¡Expediente médico modificado correctamente!</p>
                </div>
                <div className="flex justify-center">
                  <BsPersonCheckFill className="text-indigo-700" size={64} />
                </div>
              </div>
            ) : (
              <div>
                <p className="text-center">¿Seguro que quieres guardar los cambios?</p>
                <div className="flex justify-center m-2">
                  <button className="bg-indigo-600 text-white p-2 mx-2 border rounded w-32 hover:bg-indigo-700" onClick={() => {
                    close()
                  }}>
                    No
                  </button>
                  <button className="bg-indigo-600 text-white p-2 mx-2 border rounded w-32 hover:bg-indigo-700" onClick={() => {
                    submit(values)
                  }}>
                    Sí
                  </button>
                </div>
              </div>
            )
          }
        </div>
      </Modal>
    </Userlayout>
  );
};
export default MedicoV;
