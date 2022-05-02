import Navbar from "../../components/navprincipal"
import Head from 'next/head'
import { AiFillPlusCircle } from "react-icons/ai"
import { BiSearchAlt } from "react-icons/bi"
import Link from "next/link"


const Medico_I = () => {
    return (
        <div className='h-screeen'>
            <Head>
                <title>Inicio - Médico</title>
            </Head>
            <Navbar />

            <div>
              <h1 className="text-center text-3xl my-4">¡BIENVENIDO, *Nombre!</h1>
              <div className="flex justify-center items-center">
                <table className="w-5/6">
                  <thead className="border-b bg-slate-300">
                    <tr>
                      <th scope="col" className=" px-6 py-4 text-left">Nombre(s)</th>
                      <th scope="col" className=" px-6 py-4 text-left">Edad</th>
                      <th scope="col" className=" px-6 py-4 text-left">Genero</th>
                      <th scope="col" className=" px-6 py-4 text-left">Expediente</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-6 py-4 text-left whitespace-nowrap">Isai</td>
                      <td className="px-6 py-4 text-left whitespace-nowrap">21</td>
                      <td className="px-6 py-4 text-left whitespace-nowrap">Masculino</td>
                      <td className="px-6 py-4 text-left whitespace-nowrap">Consultar</td>
                    </tr>
                    <tr className="bg-slate-100">
                      <td className="px-6 py-4  text-left whitespace-nowrap">Isai</td>
                      <td className="px-6 py-4  text-left whitespace-nowrap">21</td>
                      <td className="px-6 py-4  text-left whitespace-nowrap">Masculino</td>
                      <td className="px-6 py-4  text-left whitespace-nowrap">Consultar</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4  text-left whitespace-nowrap">Isai</td>
                      <td className="px-6 py-4  text-left whitespace-nowrap">21</td>
                      <td className="px-6 py-4  text-left whitespace-nowrap">Masculino</td>
                      <td className="px-6 py-4  text-left whitespace-nowrap">Consultar</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center mt-16">
                <div className="grid grid-cols-2 gap-52">
                  <Link href="/crear/expedienteMedico">
                    <a>
                      <AiFillPlusCircle className="h-20 w-20 text-purple-600" />
                    </a>
                  </Link>
                  <Link href="/inicio/accesoC">
                    <a>
                      <BiSearchAlt className="h-20 w-20 text-purple-600" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="text-center my-2">
                <h1 className="text-3xl">¡BIENVENIDO, *Nombre!</h1>
            </div>
            <div>
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
                    <div className="flex w-full bg-slate-300 rounded-box place-items-center">
                        <div className="grid h-20 w-96 card place-items-center">Oscar Isai Buzany Ramirez</div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center">21</div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center">Masculino</div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center"><a className="hover:text-purple-800 hover:underline">Consultar</a></div>
                    </div>
                    <br></br>
                    <div className="flex w-full bg-slate-300 rounded-box place-items-center">
                        <div className="grid h-20 w-96 card place-items-center">Dayann Ordoñez Castro</div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center">22</div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center">Femenino</div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 w-72 card place-items-center"><a className="hover:text-purple-800 hover:underline">Consultar</a></div>
                    </div>
                    <br></br>
                    <div className="flex w-full bg-slate-300 rounded-box place-items-center">
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
            </div> */}
        </div>
    )
}

export default Medico_I