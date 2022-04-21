import NavbarP from "../../components/navprincipal"
import Head from 'next/head'
import Link from 'next/link'

const paciente_I = () => {
    return (
        <div className='h-screen'>
            <Head>
                <title>Inicio - Paciente</title>
            </Head>
            <NavbarP />

            <div>
                <h1 className="text-center text-3xl m-4">¡Bienvenido, *Nombre!</h1>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 mx-32">
                    <div className="flex justify-center items-center">
                        <div className="h-full w-full border border-slate-300 rounded-md shadow-md">
                            <h2 className="text-center text-xl p-2">Datos Generales</h2>
                            <div className="p-8">
                                <p className="my-2"><strong>Nombre completo: </strong> ... </p>
                                <p className="my-2"><strong>Fecha de nacimiento: </strong> ... </p>
                                <p className="my-2"><strong>Correo: </strong> ... </p>
                                <p className="my-2"><strong>Telefono: </strong> ... </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="h-full w-full border border-slate-300 rounded-md shadow-md">
                            <h2 className="text-center text-xl p-2">Codigo de acceso</h2>
                            <p className="text-center m-8 text-lg">
                                *****************
                            </p>
                            <div className="flex justify-center items-center">
                            <Link href="especialidad">
                                <a className="bg-purple-600 border rounded-md p-2 text-slate-100 hover:bg-purple-500">
                                    Expediente Medico
                                </a>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="h-full w-full border border-slate-300 rounded-md shadow-md">
                            <h2 className="text-center text-xl p-2">Ultimos signos vitales</h2>
                            <div className="p-8">
                                <p className="my-2"><strong>Temperatura: </strong> ... Cº </p>
                                <p className="my-2"><strong>Frecuencia respiratoria: </strong> ... r/m</p>
                                <p className="my-2"><strong>Frecuencia cardiaca: </strong> ... bpm</p>
                                <p className="my-2"><strong>Saturacion de oxigeno: </strong> ... </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="h-full w-full border border-slate-300 rounded-md shadow-md">
                            <h2 className="text-center text-xl p-2">Datos para el IMC</h2>
                            <div className="p-8">
                                <p className="my-2"><strong>Estatura: </strong> ... cm </p>
                                <p className="my-2"><strong>Peso: </strong> ... kg</p>
                                <p className="my-2"><strong>Masa corporal: </strong> ... kg/m<sup>2</sup></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center p-8">
                    <Link href="especialidad">
                        <a className="bg-purple-600 border rounded-md p-2 text-slate-100 hover:bg-purple-500">
                            Buscar medico
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default paciente_I