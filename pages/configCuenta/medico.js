import Navbar from "../../components/navbar2"
import Head from 'next/head'
import MedicoConf from "../../components/MedicoConf"
import { Formik, Form } from "formik"



const medico = () => {
  return (
    <div className="h-screen">
        <Head>
          <title>ConfiguracionCuenta - Medico</title>
        </Head>
        <Navbar />

        <div className="text-center my-2">
            <h1 className="text-3xl">Configuración de la cuenta</h1>
        </div>
            <div className=" flex justify-center ">
                <div className = " w-9/12">
          
                    <MedicoConf />
             </div>
            </div>
    </div>
  )
}

export default medico