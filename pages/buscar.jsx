import Head from "next/head";
import Navbar from "components/navs/navbar";
import { useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { HiSelector } from "react-icons/hi";
import { especialidades } from "utils/especialidades";

const ComboboxEspceialidad = ({ especialidad, setEspecialidad }) => {
  // const [especialidad, setEspecialidad] = useState('Selecciona una especialidad')
  const [input, setInput] = useState("");
  const especialidadInput =
    input === ""
      ? especialidades
      : especialidades.filter((espec) => {
          return espec.toLowerCase().includes(input.toLowerCase());
        });
  return (
    <Combobox
      value={especialidad}
      onChange={setEspecialidad}
      as="div"
      className="relative"
    >
      <div className="relative w-64 cursor-default overflow-hidden text-sm ring-1 border rounded shadow ring-indigo-600 ">
        <Combobox.Input
          onChange={(e) => setInput(e.target.value)}
          className="w-full outline-none py-2 pl-2 focus:ring-indigo-600"
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
          <HiSelector className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>
      </div>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Combobox.Options className=" w-full mt-1 max-h-32 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-2 px-1 m-1 hover:bg-indigo-500 hover:text-white cursor-pointer">
            <Combobox.Option value="">
              Selecciona una especialidad
            </Combobox.Option>
          </div>
          {especialidadInput.map((espec) => (
            <div
              key={espec}
              className="py-2 px-1 m-1/2 border hover:bg-indigo-500 hover:text-white cursor-pointer"
            >
              <Combobox.Option value={espec}>{espec}</Combobox.Option>
            </div>
          ))}
        </Combobox.Options>
      </Transition>
    </Combobox>
  );
};

const Card = ({ data }) => {
  const {
    nombre,
    apaterno,
    amaterno,
    tel,
    email,
    dirconsul,
    experiencia,
    precio,
  } = data;
  return (
    <div className="flex justify-center">
      <div className="px-3 py-2 bg-indigo-100 shadow-md shadow-indigo-200 border rounded">
        <h2 className="text-center text-indigo-600 p-2 text-lg">
          {nombre} {apaterno} {amaterno}
        </h2>
        <div>
          <p>Tel: {tel}</p>
          <p>Correo: {email}</p>
          <p>Dirección: {dirconsul}</p>
          <p>Experiencia: {experiencia}</p>
          <p>Costo de la consulta: ${precio}</p>
        </div>
      </div>
    </div>
  );
};

const Busqueda = () => {
  const [medicos, setMedicos] = useState([]);
  const [especialidad, setEspecialidad] = useState(
    "Selecciona una especialidad"
  );

  const getEspecialidad = async () => {
    const res = await fetch(
      `http://localhost:3000/api/especialidad/${especialidad}`
    );
    const data = await res.json();

    console.log(data);
    if (data) setMedicos([...data]);
    else setMedicos([]);
  };

  return (
    <div className="h-screen">
      <Head>
        <title>Buscar Médicos</title>
      </Head>
      <Navbar />

      <div className="text-center my-2">
        <h1 className="text-3xl">Búsqueda de Médicos</h1>
      </div>

      <div className="grid grid-cols-2 m-6">
        <div className="flex justify-end mr-4">
          <ComboboxEspceialidad
            especialidad={especialidad}
            setEspecialidad={setEspecialidad}
          />
        </div>
        <div className="flex justify-start ml-4 max-h-10 w-64">
          <button
            className="w-full bg-indigo-500 text-white px-3 py-2 rounded hover:bg-indigo-600"
            onClick={getEspecialidad}
          >
            Buscar
          </button>
        </div>
      </div>

      {medicos.length !== 0 ? (
        <div className="grid grid-cols-4 gap-2 translate-y-4">
          {medicos.map((medico, i) => (
            <Card data={medico} key={i} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">No se han encontrado resultados</p>
      )}
    </div>
  );
};

export default Busqueda;
