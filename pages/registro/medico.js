import React from 'react'
import Navbar from "../../components/navbar"
import Head from 'next/head'
import MedicoForm from '../../components/MedicoForm'
import { MdHealthAndSafety } from 'react-icons/md' 

const medico = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Registro - Médico</title>
      </Head>
      <Navbar />

      <div className="text-center my-2">
        <h1 className="text-3xl">Registro del Médico</h1>
      </div>
      <div className="grid grid-cols-2">
        <div className='flex justify-end '>
        <div className="w-9/12 ">
          <div className="text-right">
            <small className="text-rose-500">*Campos requeridos</small>
          </div>
          <MedicoForm/>
        </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-9/12 my-4">
            <h2 className="text-center text-3xl">¡BIENVENIDOS A BLOCKHEALTH!</h2>
            <br />
            <div className="flex justify-center">
              <p className="mx-6 text-center text-2xl">
              BLOCKHEALTH necesita la información que nos proporcionas para ponernos en contacto contigo acerca de nuestros servicios. Puedes darte de baja de estas comunicaciones en cualquier momento. Para obtener información sobre cómo darte de baja, así como nuestras prácticas y el compromiso de proteger tus datos, consulta nuestra Política de privacidad.
              </p>
            </div>
            <br />
            <div className="flex justify-center">
              <MdHealthAndSafety className="h-64 w-64 text-indigo-600"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default medico