import Navbar from "../../components/navprincipal"
import Head from 'next/head'
import TextField from "../../components/TextField"

const accesoC = () => {
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
                        <input type="text" placeholder="Ingrese el código" className="py-3 px-2 w-full ring-1 outline-none ring-purple-500
                         focus:ring-purple-700"/>
                    </div>
                    <div className="flex justify-center m-4">
                        <button className="bg-purple-600 text-white p-2 border rounded w-full hover:bg-purple-500">
                            Continuar
                        </button>
                    </div>
                </div>
                {/* <div className="w-6/12">
                    <div className=" bg-slate-100 shadow-xl justify-center items-center p-4">
                        <h2 className="text-2xl">Código para acceder al expediente médico deseado</h2>
                        <br></br>
                        <input type="text" placeholder="Ingrese el código" className="input input-bordered input-primary w-full max-w-xs"></input>

                        <div className="card-actions">
                            <button type="submit" className="block m-2 bg-purple-600 border rounded-md p-2 mt-2 text-slate-100 hover:bg-purple-700">Continuar</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>

    )
}

export default accesoC