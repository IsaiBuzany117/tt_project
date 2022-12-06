import { Dialog, Transition, Tab } from "@headlessui/react";
import { Formik, Form } from "formik";
import Interrogatorio from 'components/forms/expediente/interrogatorio'
import Exploracion from 'components/forms/expediente/exploracion'
import Notaevolucion from 'components/forms/expediente/notaevolucion'
import Notainterconsulta from 'components/forms/expediente/notainterconsulta'
import Buttonsubmit from 'components/inputs/buttonsubmit'
import { expedienteIvalues, pacienteIValidate } from "utils/expedientem.config";
import Userlayout from "components/layouts/userlayout";

const Crear = () => {

    const handleClick = async (values) => {
        console.log(values)
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
                                          `w-full p-2 rounded-full bg-indigo-100 ring-offset-indigo-400 focus:outline-none focus:ring-2 ${
                                              selected
                                                  ? "bg-indigo-700 text-white"
                                                  : "text-indigo-700 hover:bg-indigo-700 hover:text-white"
                                          }`
                                      }
                                  >
                                      Historia Clínica
                                  </Tab>
                                  <Tab
                                      className={({ selected }) =>
                                          `w-full p-2 rounded-full bg-indigo-100 ring-offset-indigo-400 focus:outline-none focus:ring-2 ${
                                              selected
                                                  ? "bg-indigo-700 text-white"
                                                  : "text-indigo-700 hover:bg-indigo-700 hover:text-white"
                                          }`
                                      }
                                  >
                                      Nota de Evolución
                                  </Tab>
                                  <Tab
                                      className={({ selected }) =>
                                          `w-full p-2 rounded-full bg-indigo-100 ring-offset-indigo-400 focus:outline-none focus:ring-2 ${
                                              selected
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
                                      <Notaevolucion />
                                  </Tab.Panel>
                                  <Tab.Panel className="w-full rounded-md">
                                      <Notainterconsulta />
                                  </Tab.Panel>
                              </Tab.Panels>
                          </Tab.Group>
                          <div className="flex justify-center">
                            <div className="w-1/3">
                              <Buttonsubmit value='Crear expediente' name='submit'/>
                            </div>
                          </div>
                      </Form>
                  )}
              </Formik>
          </div>
      </Userlayout>
  );
};

export default Crear;
