import Navbar from "../../components/navprincipal"
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
            <Navbar />

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
                <div class="w-11/12">
                    <div class=" flex w-full bg-base-300 rounded-box place-items-center">
                        <div class="grid h-20 w-96 card place-items-center"><b>Nombre</b></div>
                        <div class="divider divider-horizontal"></div>
                        <div class="grid h-20 w-72 card place-items-center"><b>Edad</b></div>
                        <div class="divider divider-horizontal"></div>
                        <div class="grid h-20 w-72 card place-items-center"><b>Género</b></div>
                        <div class="divider divider-horizontal"></div>
                        <div class="grid h-20 w-72 card place-items-center"><b>Expediente</b></div>

                    </div>
                    <br></br>
                    <div class="flex w-full bg-base-300 rounded-box place-items-center">
                        <div class="grid h-20 w-96 card place-items-center">Oscar Isai Buzany Ramirez</div>
                        <div class="divider divider-horizontal"></div>
                        <div class="grid h-20 w-72 card place-items-center">21</div>
                        <div class="divider divider-horizontal"></div>
                        <div class="grid h-20 w-72 card place-items-center">Masculino</div>
                        <div class="divider divider-horizontal"></div>
                        <div class="grid h-20 w-72 card place-items-center"><a className="hover:text-purple-800 hover:underline">Consultar</a></div>
                    </div>
                    <br></br>
                    <div class="flex w-full bg-base-300 rounded-box place-items-center">
                        <div class="grid h-20 w-96 card place-items-center">Dayann Ordoñez Castro</div>
                        <div class="divider divider-horizontal"></div>
                        <div class="grid h-20 w-72 card place-items-center">22</div>
                        <div class="divider divider-horizontal"></div>
                        <div class="grid h-20 w-72 card place-items-center">Femenino</div>
                        <div class="divider divider-horizontal"></div>
                        <div class="grid h-20 w-72 card place-items-center"><a className="hover:text-purple-800 hover:underline">Consultar</a></div>
                    </div>
                    <br></br>
                    <div class="flex w-full bg-base-300 rounded-box place-items-center">
                        <div class="grid h-20 w-96 card place-items-center">Diana Santamaria Arcos</div>
                        <div class="divider divider-horizontal"></div>
                        <div class="grid h-20 w-72 card place-items-center">21</div>
                        <div class="divider divider-horizontal"></div>
                        <div class="grid h-20 w-72 card place-items-center">Femenino</div>
                        <div class="divider divider-horizontal"></div>
                        <Link href="/vistaExpediente/medico_V">
                            <div class="grid h-20 w-72 card place-items-center"><a className="hover:text-purple-800 hover:underline">Consultar</a></div>
                        </Link>
                    </div>
                </div>
                <br></br>

            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="flex justify-around">
                <button type="submit" ><AiFillPlusCircle className="h-20 w-20 text-purple-600" /></button>
                <Link href="/inicio/accesoC">
                    <button type="submit" ><BiSearchAlt className="h-20 w-20 text-purple-600" /></button>
                </Link>
            </div>
        </div>
    )
}

export default medico_I