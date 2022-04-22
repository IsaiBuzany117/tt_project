import Navbar from "../../components/navbar2"
import Head from 'next/head'
import PacienteForm from "../../components/PacienteConf"
import { RiHeartPulseFill } from 'react-icons/ri' 

const paciente = () => {
  return (
    <div className="h-screen">
        <Head>
          <title>ConfiguracionCuenta - Paciente</title>
        </Head>
        <Navbar />

        <div className="text-center my-2">
            <h1 className="text-3xl">Configuración de la cuenta</h1>
        </div>
            <div className=" flex justify-center ">
                <div className = " w-9/12">
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