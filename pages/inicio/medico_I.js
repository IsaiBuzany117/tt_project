import Navbar from "../../components/navprincipal"
import Head from 'next/head'
const medico_I = () =>{
    return(
        <div className='h-screeen'>
            <Head>
                <title>Inicio - Medico</title>
            </Head>
            <Navbar/>

            <div className="text-center my-2">
                <h1 className="text-3xl">¡BIENVENIDO, *Nombre!</h1>
            </div>
        </div>
    )
}

export default medico_I