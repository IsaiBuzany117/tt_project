import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Tab } from '@headlessui/react'
import Userlayout from "components/layouts/userlayout";
import Efpaciente from 'components/expedientepaciente/efpaciente'
import Ipaciente from 'components/expedientepaciente/ipaciente'
import Nepaciente from 'components/expedientepaciente/nepaciente'
import Nipaciente from 'components/expedientepaciente/nipaciente'

const PacienteV = () => {
  const router = useRouter();
  const [curp, setCurp] = useState('')
  const [cargando, setCargando] = useState(false)
  const [exp, setExp] = useState(null)

  useEffect(() => {
    setCargando(true)
    const data = localStorage.getItem('data')
    if (data) {
      console.log(data)
      setCurp(data)
    }
    
    const fetchingExp =async () => {
      await fetch('http://localhost:4000/read', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ curp }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setExp(data)
          setCargando(false)
        })
        .catch(error => {
          console.log(error)
        })
    }
    fetchingExp()
  }, [curp])

  if (!exp) return <div>Error al cargar la informacion</div>;
  if (cargando) return <div>Cargando...</div>;

  return (
    <Userlayout type="paciente">
      <div className="text-center my-2">
        <h1 className="text-3xl">Expediente Médico</h1>
      </div>

      <div className="flex justify-center items-center">
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
              <Ipaciente exp={exp}/>
              <Efpaciente exp={exp} />
            </Tab.Panel>
            <Tab.Panel className="w-full rounded-md">
              <Nepaciente exp={exp}/>
            </Tab.Panel>
            <Tab.Panel className="w-full rounded-md">
              <Nipaciente exp={exp}/>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="flex flex-row justify-center items-center">
        {/* <Link href="/inicio/paciente" passHref> */}
        <button
          type="submit"
          className="block m-2 bg-indigo-600 border rounded-md p-2 mt-2 text-slate-100 text-lg hover:bg-indigo-700 w-36 h-14"
          onClick={() => router.back()}
        >
          Regresar
        </button>
        {/* </Link> */}
      </div>
    </Userlayout>
  );
};
export default PacienteV;
