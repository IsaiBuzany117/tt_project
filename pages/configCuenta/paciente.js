import NavPrincipal from "../../components/navprincipal"
import Head from 'next/head'
import PacienteConf from "../../components/PacienteConf"

const paciente = () => {
  return (
    <div className="h-screen">
        <Head>
          <title>ConfiguracionCuenta - Paciente</title>
        </Head>
        <NavPrincipal />

        <div className="text-center my-2">
            <h1 className="text-3xl">Configuración de la cuenta</h1>
        </div>
        <div className=" flex justify-center ">
          <div className = " w-9/12">
            <PacienteConf />
          </div>
        </div>
    </div>
  )
}

export default paciente