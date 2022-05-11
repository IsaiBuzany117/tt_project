import Navbar from "../../components/navprincipal"
import Head from 'next/head'
import TextField from "../../components/TextField"

const AccesoC = () => {
    return (
        <div className='h-screeen'>
            <Head>
                <title>Codigo de acceso</title>
            </Head>
            <Navbar />
            <div className="flex justify-center">
                <div className="bg-slate-100 mt-6 p-5 border rounded">
                    <h2 className="text-xl">Código para acceder al expediente médico deseado</h2>
                    <div className="flex justify-center m-4">
                        <input type="text" placeholder="Ingrese el código" className="py-3 px-2 w-full ring-1 outline-none ring-indigo-500
                         focus:ring-indigo-700"/>
                    </div>
                    <div className="flex justify-center m-4">
                        <button className="bg-indigo-600 text-white p-2 border rounded w-full hover:bg-indigo-500">
                            Continuar
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AccesoC