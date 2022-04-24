import Navbar from "../components/navbar2"
import Head from 'next/head'
import ChangePassword from "../components/ChangePassword"

const changePassword = () => {
  return (
    <div className="h-screen">
        <Head>
          <title>Cambiar Contraseña</title>
        </Head>
        <Navbar />

        <div className="text-center my-2">
            <h1 className="text-3xl">Cambiar contraseña</h1>
        </div>
        
        <div className=" flex justify-center ">
            <div className = " w-8/12">
                <div className="text-right">
                    <small className="text-rose-500">*Campos requeridos</small>
                </div>
                <ChangePassword />
            </div>
         </div>
    </div>
  )
}

export default changePassword