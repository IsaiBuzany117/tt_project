import { useState } from "react";
import { useRouter } from "next/router";
import Userlayout from "components/layouts/userlayout";
import {GrUserFemale, GrUser} from 'react-icons/gr'

const Codigo = () => {
  const router = useRouter();

  const [codigo, setCodigo] = useState('')
  const [paciente, setPaciente] = useState(null)
  const [error, setError] = useState('')

  const buscarPaciente = async () => {
    //console.log(codigo)
    await fetch('http://localhost:3000/api/agregar', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(codigo),
    })
    .then(res => res.json())
    .then(data => {
      if(data.error) {
        setError(data.error)
        setPaciente(null)
      }
      else {
        console.log(data)
        setPaciente(data)
        setError('')
      } 
    })
    .catch(error => console.log(error))
  }

  const agregarPaciente = async () => {
    await fetch('http://localhost:3000/api/agregar', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        curp: paciente.curp,
        nombre: paciente.nombre,
        edad: paciente.edad,
        sexo: paciente.sexo
      }),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      router.push(`/${data.usertype}`)
    })

  }

  return (
    <Userlayout type='medico'>
      <div className="flex justify-center">
        <div className="bg-slate-100 my-6 p-5 border rounded">
          <h2 className="text-xl">
            Código para acceder al expediente médico deseado
          </h2>
          <div className="flex justify-center m-4">
            <input
              type="text"
              placeholder="Ingrese el código"
              className="py-3 px-2 w-full ring-1 outline-none ring-indigo-500 focus:ring-indigo-700"
              value={codigo}
              onChange={({target})=> setCodigo(target.value)}
            />
          </div>
          <div className="flex justify-center m-4">
            <button className="bg-indigo-600 text-white p-2 border rounded w-full hover:bg-indigo-700" onClick={buscarPaciente}>
              Buscar
            </button>
          </div>
        </div>
      </div>
      {
        error && (
          <p className="text-center text-rose-600 py-2">{error}</p>
        )
      }
      {
        paciente && (
          <div className="flex justify-center">
            <div className="border-2 rounded-md shadow-md px-4 py-2">
              <div className="flex justify-center">
                <div className="border-4 border-slate-900 rounded-full p-4 m-2">
                  {
                    paciente.sexo === 'M'
                      ? ( <GrUser size={64}/> )
                      : ( <GrUserFemale size={64}/> )
                  
                  }
                </div>
              </div>
              <div className="pl-4">
                <p>Nombre: {paciente.nombre}</p>
                <p>Email: {paciente.email}</p>
                <p>Fecha de nacimiento: {paciente.fecnac} </p>
                <p>Edad: {paciente.edad }</p>
                <p>Sexo: {paciente.sexo === 'M' ? "Masculino" : "Femenino"}</p>
              </div>
              <div className="flex justify-center m-4">
                <button className="bg-indigo-600 text-white p-2 border rounded w-32 hover:bg-indigo-700" onClick={agregarPaciente}>
                  Agregar
                </button>
              </div>
            </div>
          </div>
        )
      }
    </Userlayout>
  );
};

export default Codigo;
