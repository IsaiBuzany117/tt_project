import NavPrincipal from "../../components/navprincipal"
import Head from 'next/head'
import ChangePassword from "../../components/ChangePassword"

const cambiarContraseña = () => {
  return (
    <div className="h-screen">
        <Head>
          <title>Cambiar Contraseña</title>
        </Head>
        <NavPrincipal />

        <div className="text-center my-2">
            <h1 className="text-3xl">Cambiar contraseña</h1>
        </div>
        
        <div className=" flex justify-center ">
            <div className = " w-8/12">
                <ChangePassword />
            </div>
         </div>
    </div>
  )
}

export default cambiarContraseña