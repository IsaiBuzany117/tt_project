import NavPrincipal from "../../../components/navprincipal"
import Head from 'next/head'
import MedicoConf from "../../../components/MedicoConf"
import { useRouter } from 'next/router'
import useSWR from 'swr'

const MedicoConfiguracion = () => {
    const router = useRouter()
    const {id} = router.query
    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const { data, error } = useSWR(`http://localhost:3000/api/medico/${id}`, fetcher)

    if(error) return <div>Error al cargar la informacion</div>
    if(!data) return <div>Cargando...</div>

    return (
        <div className="h-screen">
            <Head>
            <title>ConfiguracionCuenta - Medico</title>
            </Head>
            <NavPrincipal usertype={'medico'} id={id}/>

            <div className="text-center my-2">
                <h1 className="text-3xl">Configuración de la cuenta</h1>
            </div>
            <div className=" flex justify-center ">
            <div className = " w-9/12">
                <MedicoConf data={data} id={id}/>
            </div>
            </div>
        </div>
    )
}

export default MedicoConfiguracion