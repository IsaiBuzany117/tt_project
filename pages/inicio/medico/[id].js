import Navbar from "../../../components/navprincipal"
import Head from 'next/head'
import { AiFillPlusCircle } from "react-icons/ai"
import { BiSearchAlt } from "react-icons/bi"
import Link from "next/link"
import { useRouter } from "next/router"
import useSWR from 'swr'


const MedicoI = () => {
  const router = useRouter()
  const { id } = router.query
  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const { data, error } = useSWR(`http://localhost:3000/api/medico/${id}`, fetcher)

  if(error) return <div>Error al cargar la informacion</div>
  if(!data) return <div>Cargando...</div>

    return (
        <div className='h-screeen'>
            <Head>
                <title>Inicio - Médico</title>
            </Head>
            <Navbar />

            <div>
              <h1 className="text-center text-3xl my-4">¡Bienvenido, {data.nombre}!</h1>
              <div className="flex justify-center items-center">
                <table className="w-5/6">
                  <thead className="border-b bg-indigo-700">
                    <tr>
                      <th scope="col" className=" px-6 py-4 text-left text-lg text-white">Nombre(s)</th>
                      <th scope="col" className=" px-6 py-4 text-left text-lg text-white">Edad</th>
                      <th scope="col" className=" px-6 py-4 text-left text-lg text-white">Género</th>
                      <th scope="col" className=" px-6 py-4 text-left text-lg text-white">Expediente</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white text-lg">
                      <td className="px-6 py-4 text-left whitespace-nowrap">Isai</td>
                      <td className="px-6 py-4 text-left whitespace-nowrap">21</td>
                      <td className="px-6 py-4 text-left whitespace-nowrap">Masculino</td>
                      <td className="px-6 py-4 text-left whitespace-nowrap">Consultar</td>
                    </tr>
                    <tr className="bg-blue-100 text-lg">
                      <td className="px-6 py-4  text-left whitespace-nowrap">Isai</td>
                      <td className="px-6 py-4  text-left whitespace-nowrap">21</td>
                      <td className="px-6 py-4  text-left whitespace-nowrap">Masculino</td>
                      <td className="px-6 py-4  text-left whitespace-nowrap">Consultar</td>
                    </tr>
                    <tr className="bg-white text-lg">
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
                      <AiFillPlusCircle className="h-20 w-20 text-indigo-700" />
                    </a>
                  </Link>
                  <Link href="/inicio/accesoC">
                    <a>
                      <BiSearchAlt className="h-20 w-20 text-indigo-700" />
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

export default MedicoI
