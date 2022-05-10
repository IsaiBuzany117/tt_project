import Navbar from "../../components/navbar"
import Head from 'next/head'
import PacienteForm from "../../components/PacienteForm"
import { RiHeartPulseFill } from 'react-icons/ri' 

const paciente = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Registro - Paciente</title>
      </Head>
      <Navbar />

      <div className="text-center my-2">
        <h1 className="text-3xl">Registro del Paciente</h1>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center">
          <div className="w-9/12 my-4">
            <h2 className="text-center text-3xl">¡BIENVENIDOS A BLOCKHEALTH!</h2>
            <br />
            <div className="flex justify-center">
              <p className="mx-6 text-center text-2xl">
                Estamos muy emocionados de que te unas a esta nueva experiencia, ya que con esta nueva plataforma podrás crear un único expediente médico el cual podrás consultar las 24hrs del día sin importar en donde estés. Además, tu información personal estará segura con nosotros.
              </p>
            </div>
            <br />
            <div className="flex justify-center">
              <RiHeartPulseFill className="h-64 w-64 text-indigo-600"/>
            </div>
          </div>
        </div>
        <div className="w-9/12">
          <div className="text-right">
            <small className="text-rose-500">*Campos requeridos</small>
          </div>
          <PacienteForm />
        </div>
      </div>
    </div>
  )
}

export default paciente