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
            <div className="flex justify-center ">
                <div className="w-6/12">
                    <div className="card-body bg-base-100 shadow-xl items-center">
                        <h2 className="card-title">Código para acceder al expediente médico deseado</h2>
                        <br></br>
                        <input type="text" placeholder="Ingrese el código" className="input input-bordered input-primary w-full max-w-xs"></input>

                        <div className="card-actions">
                            <button type="submit" className="block m-2 bg-purple-600 border rounded-md p-2 mt-2 text-slate-100 hover:bg-purple-700">Continuar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default accesoC