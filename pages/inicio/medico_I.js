import NavbarP from "../../components/navprincipal"
import Head from 'next/head'
import { AiFillPlusCircle } from "react-icons/ai"
import { BiSearchAlt } from "react-icons/bi"
import Link from "next/link"


const medico_I = () => {
    return (
        <div className='h-screeen'>
            <Head>
                <title>Inicio - Medico</title>
            </Head>
            <NavbarP />

            <div className="text-center my-2">
                <br>
                </br>
                <h1 className="text-3xl">¡BIENVENIDO, *Nombre!</h1>
            </div>
            <div>
                <br>
                </br>
                <br>
                </br>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-11/12">
                    <div className=" flex w-full bg-slate-300 rounded-box place-items-center">
                        <div className="grid h-20 w-96 card place-items-center"><b>Nombre</b></div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center"><b>Edad</b></div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center"><b>Género</b></div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center"><b>Expediente</b></div>

                    </div>
                    <br></br>
                    <div className="flex w-full bg-slate-300 rounded-md place-items-center">
                        <div className="grid h-20 w-96 card place-items-center">Oscar Isai Buzany Ramirez</div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center">21</div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center">Masculino</div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center"><a className="hover:text-purple-800 hover:underline">Consultar</a></div>
                    </div>
                    <br></br>
                    <div className="flex w-full bg-slate-300 rounded-md place-items-center">
                        <div className="grid h-20 w-96 card place-items-center">Dayann Ordoñez Castro</div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center">22</div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center">Femenino</div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center"><a className="hover:text-purple-800 hover:underline">Consultar</a></div>
                    </div>
                    <br></br>
                    <div className="flex w-full bg-slate-300 rounded-md place-items-center">
                        <div className="grid h-20 w-96 card place-items-center">Diana Santamaria Arcos</div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center">21</div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center">Femenino</div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center"><a className="hover:text-purple-800 hover:underline">Consultar</a></div>
                    </div>
                </div>
                <br></br>

            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="grid grid-cols-2 h-full">
                <div className="flex justify-center items-center">
                    <button type="submit" ><AiFillPlusCircle className="h-20 w-20 text-purple-600" /></button>
                </div>
                <div className="flex justify-center items-center">
                    <Link href="/inicio/accesoC" passHref>
                        <button type="submit" ><BiSearchAlt className="h-20 w-20 text-purple-600" /></button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default medico_I